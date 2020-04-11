
$('.send-req-btn').click(function(){
	$('.send-Req').show(350);
	$('.track-pay').hide(350);
	$('.incoming-req').hide(350);
	$(this).addClass("profile-nav__active");
	$('.all-req-btn').removeClass("profile-nav__active");
	$('.track-pay-btn').removeClass("profile-nav__active");
});
$('.all-req-btn').click(function(){
	$('.send-Req').hide(350);
	$('.track-pay').hide(350);
	$('.incoming-req').show(350);
	$(this).addClass("profile-nav__active");
	$('.send-req-btn').removeClass("profile-nav__active");
	$('.track-pay-btn').removeClass("profile-nav__active");
});
$('.track-pay-btn').click(function(){
	$('.send-Req').hide(350);
	$('.track-pay').show(350);
	$('.incoming-req').hide(350);
	$(this).addClass("profile-nav__active");
	$('.send-req-btn').removeClass("profile-nav__active");
	$('.all-req-btn').removeClass("profile-nav__active");
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
        title: 'Request Send successfully'
      })
}
