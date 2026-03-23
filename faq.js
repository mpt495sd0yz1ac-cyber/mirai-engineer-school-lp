const questions = document.querySelectorAll('.faq-question');

questions.forEach(q => {
  q.addEventListener('click', () => {

    const answer = q.nextElementSibling;

    // 他を閉じる
    document.querySelectorAll('.faq-answer').forEach(a => {
      if (a !== answer) {
        a.classList.remove('open');
      }
    });

    // 開閉
    answer.classList.toggle('open');
  });
});