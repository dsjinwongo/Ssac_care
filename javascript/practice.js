
var  resizeEvt ;

$(function ()  {

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
