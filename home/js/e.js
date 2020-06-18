/************* Vedios Appears Lists as specific category ***********/

$('.web-btn33').click(function(){
  $('.web2').fadeIn(200);
  $('.mob2').fadeOut(200);
  $('.desk2').fadeOut(200);
});

$('.mob-btn44').click(function(){
  $('.mob2').fadeIn(200);
  $('.web2').fadeOut(200);
  $('.desk2').fadeOut(200);
});

$('.desk-btn55').click(function(){
  $('.desk2').fadeIn(200);
  $('.mob2').fadeOut(200);
  $('.web2').fadeOut(200);
});

/*************** Vedio Category Drop Down *************/

var c =1 ; 
$('.cat-drop').mouseup(function(){
  if(c == 1) {
    $('.drop').fadeIn(300);
    c=2 ; 
  }
  else if(c==2) {
  $('.drop').fadeOut(300);
    c=1;
  }
})

/**********  Payment Box   ***********/

$('.pay11').click(function(){
  $(this).addClass('active-box');
  $('.btn1').addClass('active-btn');
  $(this).removeClass('non-active-box');
  $('.btn1').removeClass('non-active-btn');
  $('.pay22').addClass('non-active-box');
  $('.btn2').addClass('non-active-btn');
  $(this).css({'opacity':1});
  $('.pay22').css({'opacity':0.6});

});

$('.pay22').click(function(){
  $(this).addClass('active-box');
  $('.btn2').addClass('active-btn');
  $(this).removeClass('non-active-box');
  $('.btn2').removeClass('non-active-btn');
  $(this).css({'opacity':1});
  $('.pay11').addClass('non-active-box');
  $('.btn1').addClass('non-active-btn');
  $(this).css({'opacity':1});
  $('.pay11').css({'opacity':0.6});

});

/********** Load More  *********/

$(".moreBox").slice(0, 2).show();
if ($(".blogBox:hidden").length != 0) {
  $("#loadMore").show();
}   
$("#loadMore").on('click', function (e) {
  e.preventDefault();
  $(".moreBox:hidden").slice(0, 3).slideDown();
  if ($(".moreBox:hidden").length == 0) {
    $("#loadMore").fadeOut('slow');
  }
});

$(".moreBox2").slice(0, 2).show();
if ($(".blogBox2:hidden").length != 0) {
  $("#loadMore2").show();
}   
$("#loadMore2").on('click', function (e) {
  e.preventDefault();
  $(".moreBox2:hidden").slice(0, 3).slideDown();
  if ($(".moreBox2:hidden").length == 0) {
    $("#loadMore2").fadeOut('slow');
  }
});

$(".moreBox3").slice(0, 2).show();
if ($(".blogBox3:hidden").length != 0) {
  $("#loadMore3").show();
}   
$("#loadMore3").on('click', function (e) {
  e.preventDefault();
  $(".moreBox3:hidden").slice(0, 3).slideDown();
  if ($(".moreBox3:hidden").length == 0) {
    $("#loadMore3").fadeOut('slow');
  }
});

/*************** Courses **************/

$('.web-btn').click(function(){
  $('.web').fadeIn();
  $('.mobile').fadeOut();
  $('.desktop').fadeOut();
})
$('.mob-btn').click(function(){
  $('.mobile').fadeIn();
  $('.web').fadeOut();
  $('.desktop').fadeOut();
})
$('.desk-btn').click(function(){
  $('.desktop').fadeIn();
  $('.mobile').fadeOut();
  $('.wen').fadeOut();
})


$('.plus-appear').click(function(){
  $(this).parent().parent().children('ul').fadeIn();
    $('.plus-appear').fadeOut();
    $('.minus-dis').fadeIn();
});
$('.minus-dis').click(function(){
  $(this).parent().parent().children('ul').fadeOut(300);
  $('.minus-dis').fadeOut()
  $('.plus-appear').fadeIn();
});


$(window).on("scroll",function(){
  if($(window).scrollTop()>=100) {
      $('.nav-scroll').css({
        backgroundColor:'#FFF',
        boxShadow:'4px 4px 3px #F5F5F5',
      });
    }
      else {
        $('.nav-scroll').css({
          backgroundColor:'#FFF',
          boxShadow:'none',

        });
      }
}) ;


$('#modal1').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
});





function success() {
    const Toast = Swal.mixin({
        toast: false,
        position: 'center',
        showConfirmButton: false,
        timer: 3500
      })
      Toast.fire({
        type: 'success',
        title: 'Edit Done Succefully'
      })
}

function accept() {
  const Toast = Swal.mixin({
      toast: false,
      position: 'center',
      showConfirmButton: false,
      timer: 3500
    })
    
    Toast.fire({
      type: 'success',
      title: 'Request Accepted successfully'
    })
}
function Canceled() {
  const Toast = Swal.mixin({
      toast: false,
      position: 'center',
      showConfirmButton: false,
      timer: 3500
    })
    
    Toast.fire({
      type: 'success',
      title: 'Request Refused successfully'
    })
}
function complain() {
  const Toast = Swal.mixin({
      toast: false,
      position: 'center',
      showConfirmButton: false,
      timer: 3500
    })
    
    Toast.fire({
      type: 'success',
      title: 'Compain Sent successfully'
    })
}

function success2() {
    const Toast = Swal.mixin({
        toast: false,
        position: 'center',
        showConfirmButton: false,
        timer: 5500
      })
      
      Toast.fire({
        type: 'success',
        title: '4SOFT has received your request successfully and we will answer soon'
      })
}

function success3() {
  const Toast = Swal.mixin({
      toast: false,
      position: 'center',
      showConfirmButton: false,
      timer: 3000
    })
    
    Toast.fire({
      type: 'success',
      title: 'Updated successfully'
    })
}




$(window).on("scroll",function(){
    if($(window).scrollTop()>=300)
    {
        $('#goUPButton').slideDown(700);
    }
    else
    {
        $('#goUPButton').slideUp(700); 
    }
}) ;
function goUP(){
    window.scrollTo(0,0); 
};
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


var real = document.getElementById('real-life');
var btn  = document.getElementById('choose-btn-pc');
var customTxt  = document.getElementById('customTxt');
var srcBtn = document.getElementById('src-btn');
var fileBtn = document.getElementById('file-btn');
var customTxt2 = document.getElementById('customTxt2');


btn.addEventListener("click",function() {
  real.click();
});
real.addEventListener("change",function() {
  if(real.value) {
    customTxt.innerHTML = real.value;
  } else {
    customTxt.innerHTML = "No File Chosen yet !";
  }
});

srcBtn.addEventListener("click",function() {
  fileBtn.click();
});
fileBtn.addEventListener("change",function() {
  if(fileBtn.value) {
    customTxt2.innerHTML = fileBtn.value;
  } else {
    customTxt2.innerHTML = "No File Chosen yet !";
  }
})



/**** Course Content Section  ****/


