"use strict";

$('.send-req-btn').click(function () {
  $('.track-pay').hide(350);
  $('.incoming-req').hide(350);
  $('.contract-requests').hide(350);
  $('.send-Req').show(350);
  $(this).addClass("profile-nav__active");
  $('.all-req-btn').removeClass("profile-nav__active");
  $('.track-pay-btn').removeClass("profile-nav__active");
  $('.contract-btn').removeClass("profile-nav__active");
});
$('.all-req-btn').click(function () {
  $('.send-Req').hide(350);
  $('.track-pay').hide(350);
  $('.contract-requests ').hide(350);
  $('.incoming-req').show(350);
  $(this).addClass("profile-nav__active");
  $('.send-req-btn').removeClass("profile-nav__active");
  $('.track-pay-btn').removeClass("profile-nav__active");
  $('.contract-btn').removeClass("profile-nav__active");
});
$('.track-pay-btn').click(function () {
  $('.send-Req').hide(350);
  $('.incoming-req').hide(350);
  $('.contract-requests ').hide(350);
  $('.track-pay').show(350);
  $(this).addClass("profile-nav__active");
  $('.send-req-btn').removeClass("profile-nav__active");
  $('.all-req-btn').removeClass("profile-nav__active");
  $('.contract-btn').removeClass("profile-nav__active");
});
$('.contract-btn').click(function () {
  $('.send-Req').hide(350);
  $('.incoming-req').hide(350);
  $('.track-pay').hide(350);
  $('.contract-requests ').show(350);
  $(this).addClass("profile-nav__active");
  $('.send-req-btn').removeClass("profile-nav__active");
  $('.all-req-btn').removeClass("profile-nav__active");
  $('.track-pay-btn').removeClass("profile-nav__active");
});
var sel = document.getElementById('sel'),
    hide = document.getElementById('hide');

sel.onchange = function () {
  if (this.value === 'Directly_customer_support') {
    hide.style.display = 'block';
  } else {
    hide.style.display = 'none';
  }
};

function success() {
  var Toast = Swal.mixin({
    toast: false,
    position: 'center',
    showConfirmButton: false,
    timer: 3500
  });
  Toast.fire({
    type: 'success',
    title: 'Request Send successfully'
  });
}

function accept() {
  var Toast = Swal.mixin({
    toast: false,
    position: 'center',
    showConfirmButton: false,
    timer: 3500
  });
  Toast.fire({
    type: 'success',
    title: 'Request Accepted successfully'
  });
}

function Canceled() {
  var Toast = Swal.mixin({
    toast: false,
    position: 'center',
    showConfirmButton: false,
    timer: 3500
  });
  Toast.fire({
    type: 'success',
    title: 'Request Refused successfully'
  });
}

function complain() {
  var Toast = Swal.mixin({
    toast: false,
    position: 'center',
    showConfirmButton: false,
    timer: 3500
  });
  Toast.fire({
    type: 'success',
    title: 'Compain Sent successfully'
  });
}

function success2() {
  var Toast = Swal.mixin({
    toast: false,
    position: 'center',
    showConfirmButton: false,
    timer: 3500
  });
  Toast.fire({
    type: 'success',
    title: 'Message Send successfully We will answer soon'
  });
}