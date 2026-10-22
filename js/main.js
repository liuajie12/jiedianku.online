/**
 * jiedianku.online - 前端核心交互逻辑
 * 支持一键复制、节点筛选、交互Toast、动态时间更新、移动端菜单
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initCopyActions();
  initFaqAccordion();
  initNodeFilter();
  initDynamicTimestamp();
});

// 1. 移动端菜单控制
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isExpanded = navLinks.classList.contains('active');
      toggleBtn.setAttribute('aria-expanded', isExpanded);
      toggleBtn.innerHTML = isExpanded ? '✕' : '☰';
    });

    // 点击链接后自动收起
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        toggleBtn.innerHTML = '☰';
      });
    });
  }
}

// 2. 一键复制功能 (支持通用按钮和输入框)
function initCopyActions() {
  // 查找带有 data-copy 属性的按钮
  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = button.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // 降级方案
          fallbackCopyText(textToCopy);
        }
        showToast('✓ 复制成功！可直接在客户端导入订阅或节点');
      } catch (err) {
        showToast('复制失败，请手动选择复制');
      }
    });
  });

  // 支持复制关联输入框
  document.querySelectorAll('[data-copy-target]').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-copy-target');
      const input = document.getElementById(targetId);
      if (input) {
        input.select();
        input.setSelectionRange(0, 99999);
        try {
          document.execCommand('copy');
          showToast('✓ 链接已复制到剪贴板！');
        } catch (err) {
          showToast('复制失败，请长按文本复制');
        }
      }
    });
  });
}

// 复制降级方案
function fallbackCopyText(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.top = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}

// 3. 页面 Toast 弹窗反馈
function showToast(message, duration = 3000) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  if (window.toastTimeout) {
    clearTimeout(window.toastTimeout);
  }

  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

// 4. FAQ 手风琴展开与折叠
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // 关闭其他
        faqItems.forEach(i => {
          i.classList.remove('open');
          const ans = i.querySelector('.faq-answer');
          if (ans) ans.style.display = 'none';
        });

        // 切换当前
        if (!isOpen) {
          item.classList.add('open');
          const ans = item.querySelector('.faq-answer');
          if (ans) ans.style.display = 'block';
        }
      });
    }
  });
}

// 5. 节点协议与地区筛选
function initNodeFilter() {
  const filterBtns = document.querySelectorAll('[data-filter]');
  const nodeCards = document.querySelectorAll('.node-card[data-protocol]');

  if (filterBtns.length === 0 || nodeCards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active', 'btn-primary'));
      filterBtns.forEach(b => b.classList.add('btn-secondary'));
      
      btn.classList.add('active', 'btn-primary');
      btn.classList.remove('btn-secondary');

      const filterValue = btn.getAttribute('data-filter');

      nodeCards.forEach(card => {
        const protocol = card.getAttribute('data-protocol');
        if (filterValue === 'all' || protocol === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 6. 动态更新“最近检测与更新时间”
function initDynamicTimestamp() {
  const updateElements = document.querySelectorAll('.dynamic-update-time');
  if (updateElements.length === 0) return;

  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  const formatted = `${year}-${month}-${day} ${hours}:${minutes} (刚刚更新)`;
  updateElements.forEach(el => {
    el.textContent = formatted;
  });
}
