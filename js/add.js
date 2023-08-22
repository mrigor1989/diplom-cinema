/* <nav class="page-nav">
    <a class="page-nav__day page-nav__day_today" href="#">
      <span class="page-nav__day-week">Пн</span><span class="page-nav__day-number">31</span>
    </a>
    <a class="page-nav__day" href="#">
      <span class="page-nav__day-week">Вт</span><span class="page-nav__day-number">1</span>
    </a>
    <a class="page-nav__day page-nav__day_chosen" href="#">
      <span class="page-nav__day-week">Ср</span><span class="page-nav__day-number">2</span>
    </a>
    <a class="page-nav__day" href="#">
      <span class="page-nav__day-week">Чт</span><span class="page-nav__day-number">3</span>
    </a>
    <a class="page-nav__day" href="#">
      <span class="page-nav__day-week">Пт</span><span class="page-nav__day-number">4</span>
    </a>
    const createNavHTML = () => {
  
  return `<nav class="page-nav"></nav>`
}
  </nav> */

const toCapitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)
const getWeekDays = (locale) => {
  const baseDate = new Date();
  const weekDays = [];
  for (i = 0; i < 7; i++) {
    weekDays.push({
      name: toCapitalize(baseDate.toLocaleDateString(locale, {
        weekday: 'short'
      })),
      num: baseDate.toLocaleDateString(locale, {
        day: 'numeric'
      }),
      className: i === 0 ?
        'page-nav__day_today' : (baseDate.toLocaleDateString(locale, {
          weekday: 'short'
        }) === 'сб' || baseDate.toLocaleDateString(locale, {
          weekday: 'short'
        }) === 'вс') ?
        'page-nav__day_weekend' : ''
    });
    baseDate.setDate(baseDate.getDate() + 1);
  }
  return weekDays;
}




const createNavHTML = () => {
  const weekDaysList = getWeekDays('ru-RU');
  const items = weekDaysList.map(({
    name,
    num,
    className
  }) => createNavItemHTML(name, num, className)).join('');
  return `<nav class="page-nav">${items}</nav>`
}

const createNavItemHTML = (dayName, dayNum, className) => {
  return `<a class="page-nav__day ${className}" href="#">
    <span class="page-nav__day-week">${dayName}</span><span class="page-nav__day-number">${dayNum}</span>
  </a>`
}

const navElement = document.querySelector('.page-nav');
navElement.innerHTML = createNavHTML();

const navItemElement = document.querySelectorAll('.page-nav__day');

navItemElement.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    navItemElement.forEach(item => item.classList.remove('page-nav__day_chosen'))
    item.classList.add('page-nav__day_chosen');
  // if(e.target.classList.contains('page-nav__day')) {
  //   e.target.classList.add('page-nav__day_chosen');
  // }
  })
})

class PageNave {
  constructor() {
    let currentDate = new Date();
  }

}

// class LogoutButton {
//   constructor() {
//     [this.logoutBtn] = document.getElementsByClassName('logout');
//     this.action = (f) => f;
//     this.logoutBtn.addEventListener('click', this.logoutClick.bind(this));
//   }

//   logoutClick(event) {
//     event.preventDefault();
//     this.action();
//   }
// }

// получение списка фильмов, залов, сеансов
// const getList = async () => {
//   let response = await fetch('https://jscp-diplom.netoserver.ru/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: 'event=update'
//   });
//   let result = await response.json();
//   console.log(111, result );
// }


// getList()