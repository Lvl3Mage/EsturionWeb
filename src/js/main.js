var $ = require( "jquery" );
require("jquery-ui/ui/widgets/selectmenu");
//IBG  // Also include in SCSS
import ibg from './libs/ibg.js'
import Vector2 from './libs/Vector2.js'
import Mathf from './libs/Mathf.js'
import 'slick-carousel'
$(document).ready(function(){
	ibg();
})

//MODAL  // Also include in SCSS
import './libs/modal.js';
import {CloseModal, OpenModal} from './libs/modal.js';

$(document).on("click","[data-click-class-toggler]", function(){
	let group = $(this).closest("[data-click-class-toggle]");
	group.toggleClass($(this).data("click-class-toggler"));
});
$(document).on("click","[data-click-selectable]", function(){
	let group = $(this).closest("[data-click-selectables]");
	let elems = group.find("[data-click-selectable]");
	let cssClass = group.data("click-selectables");
	for(let elem of elems){
		$(elem).removeClass(cssClass);
	}
	$(this).addClass(cssClass);
});
$(document).on("click","[data-mobile-menu-trigger]", function(){
	$("#mob-menu").toggleClass('active');
	let state = $("#mob-menu").hasClass('active');

	$("[data-mobile-menu-trigger]").toggleClass('active', state);
	$("body").attr("locked", state);
	$("body").css("overflow", state ? "hidden": "auto");
});
let activeZoomWindow = null;

let mouseCoords = new Vector2(0,0);
$(document).on("mousemove", function(e){
	mouseCoords.x = e.pageX;
	mouseCoords.y = e.pageY;
});

$(document).on("click","[data-zoom-button]", function(e){
	e.stopPropagation();
	activeZoomWindow = $(this.closest("[data-zoom-window]"));
	const zoomImageSrc = activeZoomWindow.find("[data-zoom-image]").attr("src");
	const zoomArea = activeZoomWindow.find("[data-zoom-area]");
	const zoomAreaImage = activeZoomWindow.find("[data-zoom-area-image]");
	zoomAreaImage.attr("src", zoomImageSrc);
	zoomArea.addClass("active");
	MoveZoomArea(activeZoomWindow, mouseCoords);

});
$(document).on("click", function(){
	if(activeZoomWindow){
		activeZoomWindow.find("[data-zoom-area]").removeClass("active");
		activeZoomWindow = null;
	}
});
function MoveZoomArea(activeZoomWindow, position){
	const zoomArea = activeZoomWindow.find("[data-zoom-area]");
	const zoomImage = activeZoomWindow.find("[data-zoom-image]");
	const zoomAreaImage = activeZoomWindow.find("[data-zoom-area-image]");
	let relCoords = position.Sub(new Vector2(zoomImage.offset().left, zoomImage.offset().top));
	zoomArea.css({
		left: relCoords.x - zoomArea.width() / 2,
		top: relCoords.y - zoomArea.height() / 2,
	});
	CompensateZoomImage(activeZoomWindow, relCoords);
}
function CompensateZoomImage(activeZoomWindow, position){
	const zoomImage = activeZoomWindow.find("[data-zoom-image]");
	const zoomArea = activeZoomWindow.find("[data-zoom-area]");
	const zoomAreaImage = activeZoomWindow.find("[data-zoom-area-image]");
	let zoomFactor = activeZoomWindow.data("zoom-factor");
	let compensationVector = new Vector2(zoomImage.offset().left - zoomArea.offset().left, zoomImage.offset().top - zoomArea.offset().top);
	let zoomImageWidth = zoomImage.width();
	let zoomImageHeight = zoomImage.height();
	position.x = Mathf.Clamp(position.x, 0, zoomImageWidth);
	position.y = Mathf.Clamp(position.y, 0, zoomImageHeight);
	zoomAreaImage.css({
		left: compensationVector.x,
		top: compensationVector.y,
		width: zoomImageWidth,
		height: zoomImageHeight,
		transform: `scale(${zoomFactor})`,
		transformOrigin: `${position.x}px ${position.y}px`
	});
}
$(document).on("mousemove", function(e){
	e.stopPropagation();
	if(activeZoomWindow){
		const zoomArea = activeZoomWindow.find("[data-zoom-area]");
		const zoomAreaImage = activeZoomWindow.find("[data-zoom-area-image]");
		MoveZoomArea(activeZoomWindow, new Vector2(e.pageX, e.pageY));
	}
});

window.InitializeDropdowns = InitializeDropdowns;
window.InitializeSliders = InitializeSliders;
$(document).ready(function(){
	InitializeDropdowns();
	InitializeSliders();
});
function InitializeDropdowns(){
	$("[data-dropdown]").each(function(){
		let dropdownClass = '';
		if(this.hasAttribute("data-dropdown-class")){
			dropdownClass = this.getAttribute("data-dropdown-class");
		}
		let iconClass = 'fa-solid fa-caret-down group-aria-expanded/dropdown:rotate-180 transition text-gold';
		if(this.hasAttribute("data-icon-class")){
			iconClass = this.getAttribute("data-icon-class");
		}
		$(this).selectmenu({
			classes: {
				"ui-selectmenu-button" : ` ${this.className} cursor-pointer group/dropdown`,
				"ui-selectmenu-icon" : `${iconClass}`,
				"ui-selectmenu-menu": `${dropdownClass} absolute`,
			}
		});
	});
}
function InitializeSliders(){
	$(".product-slider").each(function(){
		let nav = $(this).find(".product-nav-slider");
		let main = $(this).find(".product-main-slider");
		nav.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: true,
			vertical: true,
			verticalSwiping: true,
			focusOnSelect: true,
			dots: true,
			dotsClass: 'absolute right-full lg:top-full lg:bottom-auto lg:right-0 lg:left-0  mr-7 lg:mr-0 w-8 lg:w-full lg:h-8 *:px-3 lg:*:px-0 lg:*:py-3 top-0 bottom-0 flex flex-col lg:flex-row *:grow *:[&.slick-active]:*:bg-gold *:bg-gray-200 *:cursor-pointer *:hover:*:brightness-90 *:bg-clip-content rounded-full overflow-hidden',
			customPaging : function(slider, i) {
				return `<div class="bg-gray-200 cursor-pointer w-full h-full transition duration-300 ease-out-wobble rounded-full "></div>`;
			},
			prevArrow: '<button type="button" class="lg:-rotate-90 slick-prev text-4xl text-gold aria-disabled:text-gray-300"><i class="fa-solid fa-chevron-up"></i></button>',
			nextArrow: '<button type="button" class="lg:-rotate-90 slick-next text-4xl text-gold aria-disabled:text-gray-300"><i class="fa-solid fa-chevron-down"></i></button>',
			asNavFor: main,
			responsive: [
				{
					breakpoint: 1023,
					settings: {
						vertical: false,
						verticalSwiping: false,
					}
				},
				{
					breakpoint: 550,
					settings: {
						vertical: false,
						verticalSwiping: false,
						slidesToShow: 3,
					}
				},
			]
		});
		main.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			vertical: true,
			verticalSwiping: true,
			focusOnSelect: true,
			arrows: false,
			dots: false,
			asNavFor: nav,
			responsive: [
				{
					breakpoint: 1023,
					settings: {
						vertical: false,
						verticalSwiping: false,
					}
				},
			]
		});
	});
	$(".cart-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		focusOnSelect: true,
		dots: true,
		dotsClass: 'absolute top-full right-0 left-0 h-8 *:py-3 flex flex-row *:grow *:[&.slick-active]:*:bg-gold *:bg-gray-200 *:cursor-pointer *:hover:*:brightness-90 *:bg-clip-content rounded-full overflow-hidden',
		customPaging : function(slider, i) {
			return `<div class="bg-gray-200 cursor-pointer w-full h-full transition duration-300 ease-out-wobble rounded-full "></div>`;
		},
		arrows: false,
    	mobileFirst: true,
		responsive: [
			{
				breakpoint: 767,
				settings: "unslick",
			},
		]
	});
	
}