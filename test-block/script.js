const tabs = document.querySelectorAll('.tab');
const bgs = document.querySelectorAll('.bg');

const card = document.querySelector('.card');
const cardImg = document.querySelector('.card-img');
const cardTitle = document.querySelector('.card-title');
const cardText = document.querySelector('.card-text');

console.log('BG count:', bgs.length); // должно быть 2

const data = {
  house: {
    card: 'images/card-house.jpg',
    title: 'Смешанный комплекс',
    text: 'Жилая и коммерческая инфраструктура с устойчивым доходом'
  },
  industrial: {
    card: 'images/card-industrial.jpg',
    title: 'Индустриальный парк',
    text: 'Готовые складские и логистические площади с подъездными путями'
  }
};

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const id = tab.dataset.id;
    console.log('CLICK:', id);

    /* кнопки */
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    /* фон */
    bgs.forEach(bg => {
      bg.classList.remove('active');
      if (bg.dataset.id === id) {
        bg.classList.add('active');
      }
    });

    /* карточка */
    card.classList.add('hidden');

    setTimeout(() => {
      cardImg.src = data[id].card;
      cardTitle.textContent = data[id].title;
      cardText.textContent = data[id].text;
      card.classList.remove('hidden');
    }, 200);
  });
});

