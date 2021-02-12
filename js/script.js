const text = document.querySelector('.hero-text').innerHTML;
const navbar = document.querySelector('.navbar');

function scaleText(string) {
  const strArr = string.split('');
  let span = '';
  // return strArr.map(s => span += `<span>${s}</span>`);
  for( let i = 0; i < strArr.length; i++ ) {
    if( strArr[i] != ' ' ) {
      span += `<span>${strArr[i]}</span>`;
    } else {
      span += ' ';
    }
  }
  
  return document.querySelector('.hero-text').innerHTML = span;
}

window.onscroll = () => {
  if( this.scrollY >= 10 ) {
    navbar.classList.add("nav-colored");
  } else {
    navbar.classList.remove("nav-colored");
  }
}

// console.log(navbarColored(navbar));
scaleText(text);