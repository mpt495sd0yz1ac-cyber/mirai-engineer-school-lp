/* =========================
   FAQ（アコーディオン機能）
========================= */
const questions = document.querySelectorAll('.faq-question');

questions.forEach(q => {
  q.addEventListener('click', () => {

    const answer = q.nextElementSibling;

    // 他の回答を閉じる
    document.querySelectorAll('.faq-answer').forEach(a => {
      if (a !== answer) {
        a.classList.remove('open');
      }
    });

    // クリックした項目だけ開閉
    answer.classList.toggle('open');
  });
});

/* =========================
   スクロール時フェードイン
========================= */
const fadeEls = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // 画面内に入ったら表示
    if (rect < windowHeight - 100) {
      el.classList.add('show');
    }
  });
});