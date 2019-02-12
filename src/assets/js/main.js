
new WOW().init();

var menu = document.getElementById('stickymenu');
var x = menu.offsetTop;
function sticktop()
{
    if(scrollY> x){
        menu.classList.add("navbarmenu");
        menu.classList.remove("unscrollnavbar");
    }
    else{
        menu.classList.remove("navbarmenu");
        menu.classList.add("unscrollnavbar");
    }
}

    $('.contentmain').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      });

      $('.howToUse').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      });
      
   