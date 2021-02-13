const text = document.querySelector('.hero-text').innerHTML;
const navbar = document.querySelector('.navbar');


window.onscroll = () => {
  if( this.scrollY >= 10 ) {
    navbar.classList.add("nav-colored");
  } else {
    navbar.classList.remove("nav-colored");
  }
}

$('.page-scroll').on('click', function(e) {
  
  const tujuan = $(this).attr('href');
  const elemenTujuan = $(tujuan);
  
  const jarak = 100;
  $('html').animate({
    scrollTop: elemenTujuan.offset().top - jarak
  }, 800);

  e.preventDefault();
});





// function scaleText(string) {
//   const strArr = string.split("");
//   let span = "";
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i] != " ") {
//       span += `<span>${strArr[i]}</span>`;
//     } else {
//       span += " ";
//     }
//   }

//   return (document.querySelector(".hero-text").innerHTML = span);
// }
// scaleText(text);