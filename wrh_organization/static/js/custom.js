$ = jQuery;
// nav mobile
$(document).ready(function() {

	// show nav
	// $('.nav-open').click(function() {
	//     $('.nav-open').show(300);
	//     $('.nav-inner').addClass('togglemenu');
	// });
	//
	// // hide nav
	// $('.nav-close').click(function() {
	//     $('.nav-inner').removeClass('togglemenu');
	// });

	

	$('.nav-open').click(function() {
		$(this).toggleClass('open');
		$('.mobile-menu').slideToggle('fast');

		if($('.search-icon2').hasClass('open')){

			$('.search-icon2').toggleClass('open');
			$('.searchfield-outer').slideToggle('fast');

		}


	});

	$('.menu-header-primary-menu-container li .sub-menu li.menu-item-has-children a span').click(function(e) {
		e.preventDefault();
		$(this).parents('li').find('.sub-menu').toggleClass('open');
	});

	$('.mobile-menu .menu-item').click(function(){

		$(this).toggleClass('open');

	});

	// searchfield mobile view
	$('.search-icon2').click(function() {

		$(this).toggleClass('open');
		$('.searchfield-outer').slideToggle('slow');

		if($('.nav-open').hasClass('open')){

			$('.nav-open').toggleClass('open');
			$('.mobile-menu').slideToggle('fast');

		}

	});

	// searchfield
	$('.search-icon').click(function() {
		$('.searchfield-outer').slideToggle('slow');
	});




	// form close on close btn
	$('.formclose-btn').click(function() {
		$('.searchfield-outer').slideToggle('fast');
	});

	// menu nd search field
	$('.search-icon2').click(function() {
		$('.nav-inner').removeClass('togglemenu');
	});

	$('.nav-open').click(function() {
		$('.searchfield-outer').hide('fast');
	});

	// fancy scrolling onclick
	$('a[href*="#"]').each(function() {
		if ( !$(this).hasClass('no-scroll') ) {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname && this.hash.replace(/#/, '')) {
				var $targetId = $(this.hash),
					$targetAnchor = $('[name=' + this.hash.slice(1) + ']');
				var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
				if ($target) {
					var targetOffset = $target.offset().top;
					$(this).click(function() {
						$('html, body').animate({
							scrollTop: targetOffset
						}, 1000);
						return false;
					});
				}
			}
		}
	});

	$('.search-item').matchHeight();

	// Hook Date Picker to Submit Event form
	if ($('.submit_event_date')) {
		$('.submit_event_date').find('input').datepicker();
	}

	// Update Event "End Time" field
	// Bug:
	// As the event system is designed for "SINGLE" day events only
	// I did not include logic when the last index of ".submit_event_start_time" is selected
	// anyhow, the code for that is:
	//
	// if (selectedIndex == 47) {
	// $('.submit_event_end_time').find('select').find('option').first().attr('selected', 'selected');
	// }
	//
	// Improvement:
	// See if selected time in .submit_event_end_time is greater than
	// changed time in .submit_event_start_time then don't execute this function
	//
	// Same code and notes goes for function in admin.js
	$('.submit_event_start_time').find('select').on('change', function() {
		var selectedIndex = $('.submit_event_start_time').find('select')[0].selectedIndex;

		var i = 0;
		$('.submit_event_end_time').find('select').find('option').each(function() {

			// selectedIndex == 47 code goes here

			if (i++ > selectedIndex) {
				$(this).attr('selected', 'selected');
				return false;
			}
			$(this).attr('disabled', 'disabled')
		});
	});

	$('.getinvolved-slider .issue-section').slick({
		slide: '.issue-slide',
		dots:true,
		arrows:true,
		autoplay: true,
		autoplaySpeed: 6000,
		asNavFor: '.getinvolved-slider .carousel-inner'
	});

	$('.events-carousel').slick({
		dots:true,
		arrows:false,
		autoplay: true,
		autoplaySpeed: 4000,
	});

	$('.events-banner .info-slider').slick({
		slide: '.item',
		dots:false,
		arrows:false,
		autoplay: true,
		autoplaySpeed: 4000,
		asNavFor: '.events-banner .bg-slider',
		// responsive: [
		//   {
		//     breakpoint: 767,
		//     settings: {
		//       dots: true
		//     }
		//   }
		// ]
	});

});


$(window).load(function(){

	if($('body').hasClass('page-template-page-directory-listing')) {
		var query = window.location.search;
		if (query.indexOf('scrolltotop=true') >= 0) {
			$('html, body').animate({
				scrollTop: $('#directory-top').offset().top
			}, 1000);
		}

	}

	responsiveGEBackroundSlider();

	$('.getinvolved-slider .carousel-inner').slick({
		dots:true,
		arrows:false,
		autoplay: true,
		autoplaySpeed: 4000,
		fade:true,
		asNavFor: '.getinvolved-slider .issue-section'
	});



	$('.events-banner .bg-slider').slick({
		dots:true,
		arrows:true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade:true,
		asNavFor: '.events-banner .info-slider'
	});

});

$(window).resize(function(){

	responsiveGEBackroundSlider();

});

function responsiveGEBackroundSlider(){
	//Get Involved Slider
	var issue_content_height = $('.getinvolved-slider .issue-container').outerHeight();
	$('.getinvolved-slider .carousel-inner .item').height(issue_content_height);
	$('.getinvolved-slider .carousel-inner .slick-slider').height(issue_content_height);

	//Events Slider
	var event_content_height = $('.events-banner .info-box').outerHeight();
	$('.events-banner .bg-slider .background-item').height(event_content_height);
	$('.events-banner .bg-slider .slick-slider').height(event_content_height);

}


// Match Heights
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,i=function(t){return parseFloat(t)||0},n=function(e){var o=1,n=t(e),a=null,r=[];return n.each(function(){var e=t(this),n=e.offset().top-i(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(a-n))<=o?r[r.length-1]=s.add(e):r.push(e),a=n}),r},a=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=a(e);if(o.remove){var i=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(i)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="master",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=n,r._parse=i,r._parseOptions=a,r._apply=function(e,o){var s=a(o),h=t(e),c=[h],l=t(window).scrollTop(),p=t("html").outerHeight(!0),d=h.parents().filter(":hidden");return d.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),d.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),c=n(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(c,function(e,o){var n=t(o),a=0;if(s.target)a=s.target.outerHeight(!1);else{if(s.byRow&&n.length<=1)return void n.css(s.property,"");n.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block");var i={display:o};i[s.property]="",
e.css(i),e.outerHeight(!1)>a&&(a=e.outerHeight(!1)),e.css("display","")})}n.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=i(e.css("border-top-width"))+i(e.css("border-bottom-width")),o+=i(e.css("padding-top"))+i(e.css("padding-bottom"))),e.css(s.property,a-o+"px"))})}),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(l/p*t("html").outerHeight(!0)),this},r._applyDataApi=function(){
var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),i=o.attr("data-mh")||o.attr("data-match-height");i in e?e[i]=e[i].add(o):e[i]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(i,n){if(n&&"resize"===n.type){var a=t(window).width();if(a===e)return;e=a}i?-1===o&&(o=setTimeout(function(){
s(n),o=-1},r._throttle)):s(n)},t(r._applyDataApi),t(window).bind("load",function(t){r._update(!1,t)}),t(window).bind("resize orientationchange",function(t){r._update(!0,t)})});
