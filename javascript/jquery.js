// $(window).load() -> 페이지 문서가 전부 로드된 시점에서 실행된다.
$(window).load(function(){
  var height = window.innerHeight,
  x= 0, y= height/2,
  curveX = 0,
  curveY = 0,
  targetX = 0,
  xitteration = 0,
  yitteration = 0,
  menuExpanded = false;

  blob = $('#blob'),
  blobPath = $('#blob-path'),

  hamburger = $('.hamburger');

  $(this).on('mousemove', function(e){
    x = e.pageX;

    y = e.pageY;
  });

  //해당 id에 마우스가 올라갈 시 function 작동
  $('.hamburger, .menu-inner').on('mouseenter', function(){
    $(this).parent().addClass('expanded'); //둘의 부모 요소인 'menu'에 class expanded를
    menuExpanded = true;
  });

  //해당 id에 마우스가 제거될 시 function 작동
  $('.menu-inner').on('mouseleave', function(){
    menuExpanded = false;
    $(this).parent().removeClass('expanded'); //expanded class를
  });
});
