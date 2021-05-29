function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";

  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}


function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}


function w3RemoveClass(element, name) {
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

function search() {
  var input = document.getElementById("Search");
  var filter = input.value.toLowerCase();
  var nodes = document.getElementsByClassName('target');

  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].innerText.toLowerCase().includes(filter)) {
      nodes[i].style.display = "block";
    } else {
      nodes[i].style.display = "none";
    }
  }
}


function pageTransition(nodeList) {
    nodeList.forEach(a => {
        const href = a.getAttribute("href");
        const hash = a.hash || "tmp";

        href && href[0] !== "#" && a.target !== "_blank" && a.href !== `${location.protocol}//${location.hostname}${location.pathname}${hash}` && (
            a.addEventListener("click", e => {
                e.preventDefault(),

                setTimeout(() => {
                    body.classList.contains("hidden") && (
                        location.href = href
                    )
                }, 800),
                body.classList.add("hidden")
            })
        )
    })
}

function filter(){

  var value, name, item, i;

  value = document.getElementById("value").value.toUpperCase();
  item = document.getElementsByClassName("thumbnail");

  for(i=0;i<item.length;i++){
    name = item[i].getElementsByClassName("name");
    if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
      item[i].style.display = "flex";
    }else{
      item[i].style.display = "none";
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
