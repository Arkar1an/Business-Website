
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




$(function(){
  $(window).scroll(function() {



    // nav fade in on scroll
     if($(window).scrollTop() >= 100) {
       $('nav').addClass('scrolled');
       

     }
    else {
      $('nav').removeClass('scrolled');

    }
  });
});

//zoom on scrollLink



// active link switching

$(window).scroll(function(){


  var scrollbarLocation = $(this).scrollTop();
  //console.log(scrollbarLocation);

  //for each scrollLink
  scrollLink.each(function(){

    //error on top :(
    // var sectionOffset = 0;$(this.hash).offset().top;

    // relace these lines with top error
    var sectionOffset = 0;
    target = $(this.hash);

    if (target.length){
     sectionOffset = target.offset().top;
    }﻿
    // end of top error replacement


    if (sectionOffset <= scrollbarLocation) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  });
});
