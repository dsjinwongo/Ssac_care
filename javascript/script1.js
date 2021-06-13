function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";

  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

function Search() {
  var value, name, item, i;

  value = document.getElementById("Search").value.toUpperCase();
  item = document.getElementsByClassName("filterDiv");

  for(i=0;i<item.length;i++){
    name=item[i].getElementsByClassName("target")
    RemoveClass(item[i], "show");
    if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
      AddClass(item[i], "show");
    }else{
    }
  }
}


//유튜브 팝업창 _
//유튜브 팝업창 _
$(function(){

    var embed = $('.youtube');
    $('.video').append(embed);

    /* click 'PLAY'  button */
    $('.pop_open').click( function() {
      // show popup background
      $('.gray_mask').show();
      // show popup
      $('#popup').show();
      // append youtube iframe on popup
      $('.video').append(embed);
    });

  /* click 'CLOSE' button */
  $('.gray_mask, .close').click( function() {
    // hide popup background
    $('#popup').hide();
    // hide popup
    $('.gray_mask').hide();
    // empty youtube iframe on popup
    $('.video').empty();
  });

  /* click 'popu background' */
  $('.gray_mask, .close').click( function() {
    // hide popup background
    $('#popup').hide();
    // hide popup
    $('.gray_mask').hide();
    // empty youtube iframe on popup
    $('.video').empty();
  });

});
