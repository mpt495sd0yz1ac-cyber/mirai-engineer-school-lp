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
    // ＋ → − 切り替え（ここに追加）
    q.classList.toggle('active');
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

/* =========================
   モーダル表示
========================= */
const openBtn = document.querySelector('.contact-button');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');

openBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('open');
});

/* =========================
   フォームチェック
========================= */
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  const name = document.getElementById('name');
  const email = document.getElementById('email');

  if (name.value === '' || email.value === '') {
    e.preventDefault();
    alert('全て入力してください');
  }
});