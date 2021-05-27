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

  //인체 이미지에서 각 신체 부위 선택 js코드
  var  resizeEvt ;

  $(window).load(function ()  {

    $.fn.maphilight.defaults = {
        fill: true,  //이미지맵 링크에 마우스가 올라오면 색을 넣을 건지 여부
        fillColor: 'CCCCCC',  // 색상지정
        fillOpacity: 0.5,  // 투명도 지정 0~1
        stroke: true,    // border를 넣을건지 여부 false로 설정하면 이하 옵션 무시됨
        strokeColor: 'FFFFFF',  //border 색상
        strokeOpacity: 1,  //border 투명도
        strokeWidth: 1  //border 폭
    }

      $ ( document ) . on ( 'ready.usemaps' ,  function ( ) {
          $ ( '.wbody' ) . maphilight ( ) ;
          $ ( '.wbody' ) . rwdImageMaps ( ) ;
      } ) ;

      $ ( window ) . on ( 'resize.usemaps' ,  function ( ) {
          clearTimeout ( resizeEvt ) ;
          resizeEvt  =  setTimeout ( function ( ) {
              $ ( '.wbody' ) . maphilight ( ) ;
          } ,  10 ) ;
      } ) ;

      $('img[usemap]').rwdImageMaps();


  }) ;

   function textup(str,n){
      var text
      var num
      text=str
      nun = n
      if(n==1){
        message1.innerHTML=text
      }
      else if(n==2){
        message2.innerHTML=text
      }
      else if(n==3){
        message3.innerHTML=text
      }
      else{
        message.innerHTML=text
      }

    }

  function msghide(){
      message.innerHTML='&nbsp'
      message1.innerHTML='&nbsp'
      message2.innerHTML='&nbsp'
      message3.innerHTML='&nbsp'

    }
});
