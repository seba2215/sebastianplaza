$(window).on('scroll' , function (){
    if ($(window).scrollTop()){
        $('nav').addClass('black');
    }
    else {
      $('nav').removeClass('black')
    }
  })

// Caroussel
window.addEventListener(`load`, function () {
  new Glider(document.querySelector(".carousel__lista"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: ".carousel__indicadores",
    arrows: {
      prev: ".carousel__anterior",
      next: ".carousel__siguiente",
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: "2",
          slidesToScroll: "2",
          itemWidth: 150,
          duration: 0.25,
        },
      },
      {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          itemWidth: 150,
          duration: 0.25,
        },
      },
    ],
  });
});