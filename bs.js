
  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 700 );
  })


  // $('a[href*="#"]').on('click', function (e) {
  // 	e.preventDefault();
  //
  // 	$('html, body').animate({
  // 		scrollTop: $($(this).attr('href')).offset().top
  // 	}, 500, 'linear');
  // });


// stick on scroll

$(window).scroll(function(){
  if($(this).scrollTop()>100{
    $(.menu).addClass("sticky");
  }
  else{
    $(.menu).removeClass("sticky");
  }
})
