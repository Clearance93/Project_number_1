// alert('Click on the blog item and click on the news letter to subscribe to our channel')

const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.menu');
const logoLink = document.querySelector('#logo');

const mobileMenu = () =>
{
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// const highlightmenu = () =>
// {
//     const element = document.querySelector('.')
// }


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  // function myFunction()
  //  {
  //   var a = document.getElementById("a");
  //   var bText = document.getElementById("b");
  //   var btnText = document.getElementById("Btn");
  
  //   if (a.style.display === "none")
  //   {
  //     a.style.display = "inline";
  //     btnText.innerHTML = "Read more";
  //     bText.style.display = "none";
  //   } else
  //   {
  //     a.style.display = "none";
  //     btnText.innerHTML = "Read less";
  //     bText.style.display = "inline";
  //   }
  // }

