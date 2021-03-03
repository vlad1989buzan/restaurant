// $(document).ready(function () {
//   $(".carousel1").owlCarousel({


$(function () {
  var owl = $('.carousel1');
  owl.owlCarousel({
    items: 1,
    margin: 0,//Отступ от картино если выводите больше 1
    loop: true,//Зацикливаем слайдер
    nav: false,//Отключил навигацию
    autoplay: false,//Автозапуск слайдера
    autoplaySpeed: 3000,
    autoplayTimeout: 5000,
    autoplayHoverPause: true, //Пауза при навидении мыши
    smartSpeed: 6000,
    dots: true,
    //animateIn: 'slideInDown',
    //animateOut: 'slideOutDown',
    //dotsEach: true,
    //slideTransition: 'ease-in-out',
    //onInitialized: counter, //When the plugin has initialized.
    //onTranslated: counter, //When the translation of the stage has finished.

    // URLhashListener: true, startPosition: 'URLHash', //Параметр URLhashListener прослушивает изменение хэша URL-
    // адреса и ищет слайд с тем же именем данных, например data - hash="zero"
    //navContainer: '#navhere',
    //navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    // autoWidth: true,Используйте стиль ширины для элементов, чтобы получить желаемый результат.
    // При использовании с бесконечным циклом добавьте параметр «items» больше 1.
    //  Все зависит от ширины вашего контента.
    // center: true, Добавить центр в настройку:

    // responsive: {
    //   0: {
    //     items: 1,
    //     dots: true,
    //   },
    //   800: {
    //     items: 1,
    //     dots: false,
    //   }
    // }
  });


  // function counter(event) {

  //   var element = event.target; // DOM element, in this example .owl-carousel
  //   var items = event.item.count; // Number of items
  //   var item = event.item.index + 1; // Position of the current item

  //   // it loop is true then reset counter from 1
  //   if (item > items) {
  //     item = item - items
  //   }
  //   $(element).parent().find('.counter').html(item + " / " + items)
  // }

});