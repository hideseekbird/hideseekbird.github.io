(function () {
  const modal = document.getElementById('mailing-list');
  if (!modal) return;

  const card = modal.querySelector('.mailing-modal-card');
  const openers = document.querySelectorAll('[data-open-mailing-list]');
  const closers = modal.querySelectorAll('[data-close-mailing-list]');
  let previousFocus = null;

  function openMailingList(event) {
    if (event) event.preventDefault();
    previousFocus = document.activeElement;
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    window.history.replaceState(null, '', '#mailing-list');
    window.setTimeout(function () {
      card.focus();
    }, 0);
  }

  function closeMailingList() {
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (window.location.hash === '#mailing-list') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    if (previousFocus && typeof previousFocus.focus === 'function') {
      previousFocus.focus();
    }
  }

  openers.forEach(function (opener) {
    opener.addEventListener('click', openMailingList);
  });

  closers.forEach(function (closer) {
    closer.addEventListener('click', closeMailingList);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeMailingList();
    }
  });

  if (window.location.hash === '#mailing-list') {
    openMailingList();
  }
})();
