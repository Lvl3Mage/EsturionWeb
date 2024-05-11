/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main.js */ "./src/js/main.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/fontawesome */ "./node_modules/@fortawesome/fontawesome-free/js/fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_free_js_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/solid */ "./node_modules/@fortawesome/fontawesome-free/js/solid.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_fontawesome_free_js_regular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/regular */ "./node_modules/@fortawesome/fontawesome-free/js/regular.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_regular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_regular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_fontawesome_free_js_brands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/brands */ "./node_modules/@fortawesome/fontawesome-free/js/brands.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_brands__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_brands__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/scss/main.scss */ "./src/assets/scss/main.scss");

// JS


//FA





// SCSS


/***/ }),

/***/ "./src/js/libs/Mathf.js":
/*!******************************!*\
  !*** ./src/js/libs/Mathf.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mathf)
/* harmony export */ });
class Mathf {
  static Clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
  }
  static Lerp(a, b, t) {
    return (1 - t) * a + t * b;
  }
  static TransformRange(OldMin, OldMax, NewMin, NewMax, value) {
    let OldRange = OldMax - OldMin;
    let NewRange = NewMax - NewMin;
    return (value - OldMin) * NewRange / OldRange + NewMin;
  }
  static Deg2Rad(deg) {
    return deg * (Math.PI / 180);
  }
  static Rad2Deg(rad) {
    return rad * (180 / Math.PI);
  }
  static WrapAngle(angle) {
    if (angle > 180) {
      angle -= 360;
    } else if (angle <= -180) {
      angle += 360;
    }
    return angle;
  }
}

/***/ }),

/***/ "./src/js/libs/Vector2.js":
/*!********************************!*\
  !*** ./src/js/libs/Vector2.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Vector2)
/* harmony export */ });
/* harmony import */ var _Mathf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mathf.js */ "./src/js/libs/Mathf.js");

class Vector2 {
  x = 0;
  y = 0;
  constructor(x, y) {
    if (typeof x != "number" || typeof y != "number") {
      console.error("Could not construct a Vector2 because one ar both of the parameters passed is not of type 'Number'. The parameter types were: x - " + typeof x + ", y - " + typeof y + ".");
    }
    this.x = x;
    this.y = y;
  }
  Add(vector) {
    return new Vector2(this.x + vector.x, this.y + vector.y);
  }
  static Add(vectorA, vectorB) {
    return new Vector2(vectorA.x + vectorB.x, vectorA.y + vectorB.y);
  }
  Sub(vector) {
    return new Vector2(this.x - vector.x, this.y - vector.y);
  }
  static Sub(vectorA, vectorB) {
    return new Vector2(vectorA.x - vectorB.x, vectorA.y - vectorB.y);
  }
  Scale(scaleFactor) {
    var result = new Vector2(this.x, this.y);
    result.x *= scaleFactor;
    result.y *= scaleFactor;
    return result;
  }
  Normalized() {
    var result = new Vector2(this.x, this.y);
    var vectorLength = result.Length();
    result.x /= vectorLength;
    result.y /= vectorLength;
    return result;
  }
  static Normalized(vector) {
    var vectorLength = vector.Length();
    vector.x /= vectorLength;
    vector.y /= vectorLength;
    return vectorLength;
  }
  Length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  ClampLength(min, max) {
    let result = new Vector2(this.x, this.y);
    var vectorLength = result.Length();
    if (vectorLength == 0) {
      return Vector2.zero;
    }
    result.x /= vectorLength;
    result.y /= vectorLength;
    var newLength = _Mathf_js__WEBPACK_IMPORTED_MODULE_0__["default"].Clamp(min, vectorLength, max);
    result.x *= newLength;
    result.y *= newLength;
    return result;
  }
  PerpendicularLeft() {
    return new Vector2(-this.y, this.x);
  }
  PerpendicularRight() {
    return new Vector2(this.y, -this.x);
  }
  isZero(epsilon) {
    let sqLength = this.x * this.x + this.y * this.y;
    return sqLength <= epsilon * epsilon;
  }
  Equal(otherVector) {
    return this.x == otherVector.x && this.y == otherVector.y;
  }
  Clone() {
    return new Vector2(this.x, this.y);
  }
  Pairwise(action) {
    return new Vector2(action(this.x), action(this.y));
  }
  static Pairwise(action, vector) {
    return new Vector2(action(vector.x), action(vector.y));
  }
  Rotate(angle) {
    let sin = Math.sin(_Mathf_js__WEBPACK_IMPORTED_MODULE_0__["default"].Deg2Rad(angle));
    let cos = Math.cos(_Mathf_js__WEBPACK_IMPORTED_MODULE_0__["default"].Deg2Rad(angle));
    let tx = this.x;
    let ty = this.y;
    return new Vector2(cos * tx - sin * ty, sin * tx + cos * ty);
  }
  static Lerp(startVector, endVector, t) {
    return Vector2.Add(startVector.Scale(1 - t), endVector.Scale(t));
  }
  static Distance(vectorA, vectorB) {
    return Vector2.Sub(vectorA, vectorB).Length;
  }
  static FromJSObject(JSObject) {
    return new Vector2(JSObject.x, JSObject.y);
  }
  static CrossProduct(vectorA, vectorB) {
    return vectorA.x * vectorB.y - vectorA.y * vectorB.x;
  }
  static DotProduct(vectorA, vectorB) {
    return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
  }
  static Angle(vectorA, vectorB) {
    let angle = _Mathf_js__WEBPACK_IMPORTED_MODULE_0__["default"].Rad2Deg(Math.atan2(vectorB.y, vectorB.x) - Math.atan2(vectorA.y, vectorA.x));
    return _Mathf_js__WEBPACK_IMPORTED_MODULE_0__["default"].WrapAngle(angle);
  }
  static PerpendicularLeft(vector) {
    return new Vector2(-vector.y, vector.x);
  }
  static PerpendicularRight(vector) {
    return new Vector2(vector.y, -vector.x);
  }
  static get zero() {
    return new Vector2(0, 0);
  }
  static get up() {
    return new Vector2(0, 1);
  }
  static get down() {
    return new Vector2(0, -1);
  }
  static get left() {
    return new Vector2(-1, 0);
  }
  static get right() {
    return new Vector2(1, 0);
  }
}

/***/ }),

/***/ "./src/js/libs/ibg.js":
/*!****************************!*\
  !*** ./src/js/libs/ibg.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ibg)
/* harmony export */ });
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function ibg() {
  $.each($('.ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).find('img').first().css("width", 0);
      $(this).find('img').first().css("height", 0);
      $(this).find('img').first().css("display", "none");
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
    }
  });
}

/***/ }),

/***/ "./src/js/libs/modal.js":
/*!******************************!*\
  !*** ./src/js/libs/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloseModal: () => (/* binding */ CloseModal),
/* harmony export */   OpenModal: () => (/* binding */ OpenModal)
/* harmony export */ });
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
$(document).on('click', '[data-modal-trigger]', function (event) {
  $("body").css("overflow", "hidden");
  var modalID = $(this).data('modal-id');
  var modal = $("#" + modalID + ".modal");
  modal.addClass("modal-active");
  var modalTitle = $(this).data('modal-title');
  if (typeof modalTitle !== 'undefined') {
    modal.find(".modal-title").html(modalTitle);
  }
  // let modalFieldPresets= $(this).data('field-presets');
  // if(modalFieldPresets){
  // 	for (let i = 0; i < modalFieldPresets.length; i++) {
  // 		modal.find(modalFieldPresets[i].childSelector).val(modalFieldPresets[i].value);
  // 	}
  // }
});

$(document).on('mousedown touchstart', '.modal-bg, .modal-cross', function (event) {
  $("body").css("overflow", "visible");
  var modal = $(this).closest(".modal");
  modal.removeClass("modal-active");

  //pause video
  modal.find('iframe').each(function () {
    $(this).attr("src", $(this).attr("src"));
  });
});
$(document).on('mousedown touchstart', '.modal-window', function (event) {
  event.stopPropagation();
});
function OpenModal(modalSelector) {
  $("body").css("overflow", "hidden");
  $(modalSelector).addClass("modal-active");
}
function CloseModal(modalSelector) {
  // disables modal and frees body if no active modals remain
  var modal = $(modalSelector).closest(".modal");
  modal.removeClass("modal-active");
  if ($('.modal-active').length == 0) {
    $("body").css("overflow", "visible");
  }
}

/*
HTML

<div class="def-modal modal modal-bg">
	<div class="def-modal__outer-container container">
		<div class="def-modal__inner-container def-modal__inner-container--100">
			<div class="def-modal__wrapper modal-window p-2 rounded-xl">
				<div class="def-modal__top mb-2 px-2">
					<div class="def-modal__title text-2xl">
						<span class="modal-title">Modal title</span>
					</div>
					<div class="group/cross relative h-[30px] w-[35px] flex-col justify-center flex cursor-pointer modal-cross">
						<div class="bg-gray-400 h-[4px] w-full transition duration-300 rounded-sm ease-out-wobble group-hover/cross:scale-x-75 translate-y-[2px] rotate-[135deg]"></div>
						<div class="bg-gray-400 h-[4px] w-full transition duration-300 rounded-sm ease-out-wobble group-hover/cross:scale-x-75 translate-y-[-2px] rotate-[-135deg]"></div>
					</div>
				</div>
				<div class="def-modal__content-wrapper modal-content-wrapper">
				</div>
			</div>
		</div>  
	</div>
</div>
*/

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_ibg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/ibg.js */ "./src/js/libs/ibg.js");
/* harmony import */ var _libs_Vector2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/Vector2.js */ "./src/js/libs/Vector2.js");
/* harmony import */ var _libs_Mathf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/Mathf.js */ "./src/js/libs/Mathf.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _libs_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/modal.js */ "./src/js/libs/modal.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__(/*! jquery-ui/ui/widgets/selectmenu */ "./node_modules/jquery-ui/ui/widgets/selectmenu.js");
//IBG  // Also include in SCSS




$(document).ready(function () {
  (0,_libs_ibg_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

//MODAL  // Also include in SCSS


$(document).on("click", "[data-click-class-toggler]", function () {
  let group = $(this).closest("[data-click-class-toggle]");
  group.toggleClass($(this).data("click-class-toggler"));
});
$(document).on("click", "[data-click-selectable]", function () {
  let group = $(this).closest("[data-click-selectables]");
  let elems = group.find("[data-click-selectable]");
  let cssClass = group.data("click-selectables");
  for (let elem of elems) {
    $(elem).removeClass(cssClass);
  }
  $(this).addClass(cssClass);
});
$(document).on("click", "[data-mobile-menu-trigger]", function () {
  $("#mob-menu").toggleClass('active');
  let state = $("#mob-menu").hasClass('active');
  $("[data-mobile-menu-trigger]").toggleClass('active', state);
  $("body").attr("locked", state);
  $("body").css("overflow", state ? "hidden" : "auto");
});
let activeZoomWindow = null;
let mouseCoords = new _libs_Vector2_js__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
$(document).on("mousemove", function (e) {
  mouseCoords.x = e.pageX;
  mouseCoords.y = e.pageY;
});
$(document).on('selectmenuchange', function (e) {
  var SelectMenuChange = new CustomEvent('selectmenuischanged', {
    detail: e
  });
  document.dispatchEvent(SelectMenuChange);
});
$("[data-dropdown].product-radio").on("selectmenuchange", function (event, ui) {
  let price = ui.item.element.data('price');
  let variation_id = ui.item.element.data('variation-id');
  ui.item.element.parents('.item-top-level').find('.product-price>.price').text(price);
  ui.item.element.parents('.item-top-level').find('.add-product-to-cart').attr('data-variation-id', variation_id);
});
$(document).on("click", "[data-zoom-button]", function (e) {
  e.stopPropagation();
  activeZoomWindow = $(this.closest("[data-zoom-window]"));
  const zoomImageSrc = activeZoomWindow.find("[data-zoom-image]").attr("src");
  const zoomArea = activeZoomWindow.find("[data-zoom-area]");
  const zoomAreaImage = activeZoomWindow.find("[data-zoom-area-image]");
  zoomAreaImage.attr("src", zoomImageSrc);
  zoomArea.addClass("active");
  MoveZoomArea(activeZoomWindow, mouseCoords);
});
$(document).on("click", function () {
  if (activeZoomWindow) {
    activeZoomWindow.find("[data-zoom-area]").removeClass("active");
    activeZoomWindow = null;
  }
});
function MoveZoomArea(activeZoomWindow, position) {
  const zoomArea = activeZoomWindow.find("[data-zoom-area]");
  const zoomImage = activeZoomWindow.find("[data-zoom-image]");
  const zoomAreaImage = activeZoomWindow.find("[data-zoom-area-image]");
  let relCoords = position.Sub(new _libs_Vector2_js__WEBPACK_IMPORTED_MODULE_1__["default"](zoomImage.offset().left, zoomImage.offset().top));
  zoomArea.css({
    left: relCoords.x - zoomArea.width() / 2,
    top: relCoords.y - zoomArea.height() / 2
  });
  CompensateZoomImage(activeZoomWindow, relCoords);
}
function CompensateZoomImage(activeZoomWindow, position) {
  const zoomImage = activeZoomWindow.find("[data-zoom-image]");
  const zoomArea = activeZoomWindow.find("[data-zoom-area]");
  const zoomAreaImage = activeZoomWindow.find("[data-zoom-area-image]");
  let zoomFactor = activeZoomWindow.data("zoom-factor");
  let compensationVector = new _libs_Vector2_js__WEBPACK_IMPORTED_MODULE_1__["default"](zoomImage.offset().left - zoomArea.offset().left, zoomImage.offset().top - zoomArea.offset().top);
  let zoomImageWidth = zoomImage.width();
  let zoomImageHeight = zoomImage.height();
  position.x = _libs_Mathf_js__WEBPACK_IMPORTED_MODULE_2__["default"].Clamp(position.x, 0, zoomImageWidth);
  position.y = _libs_Mathf_js__WEBPACK_IMPORTED_MODULE_2__["default"].Clamp(position.y, 0, zoomImageHeight);
  zoomAreaImage.css({
    left: compensationVector.x,
    top: compensationVector.y,
    width: zoomImageWidth,
    height: zoomImageHeight,
    transform: `scale(${zoomFactor})`,
    transformOrigin: `${position.x}px ${position.y}px`
  });
}
$(document).on("mousemove", function (e) {
  e.stopPropagation();
  if (activeZoomWindow) {
    const zoomArea = activeZoomWindow.find("[data-zoom-area]");
    const zoomAreaImage = activeZoomWindow.find("[data-zoom-area-image]");
    MoveZoomArea(activeZoomWindow, new _libs_Vector2_js__WEBPACK_IMPORTED_MODULE_1__["default"](e.pageX, e.pageY));
  }
});
window.InitializeDropdowns = InitializeDropdowns;
window.InitializeSliders = InitializeSliders;
window.OpenModal = _libs_modal_js__WEBPACK_IMPORTED_MODULE_4__.OpenModal;
window.CloseModal = _libs_modal_js__WEBPACK_IMPORTED_MODULE_4__.CloseModal;
window.EnableSliderFiltering = EnableSliderFiltering;
window.DisableSliderFiltering = DisableSliderFiltering;
$(document).ready(function () {
  InitializeDropdowns();
  InitializeSliders();
});
function InitializeDropdowns() {
  $("[data-dropdown]").each(function () {
    let dropdownClass = '';
    if (this.hasAttribute("data-dropdown-class")) {
      dropdownClass = this.getAttribute("data-dropdown-class");
    }
    let iconClass = 'fa-solid fa-caret-down group-aria-expanded/dropdown:rotate-180 transition text-gold';
    if (this.hasAttribute("data-icon-class")) {
      iconClass = this.getAttribute("data-icon-class");
    }
    $(this).selectmenu({
      // change: function( event, ui ) {
      // 	console.log(event, ui)
      // },
      classes: {
        "ui-selectmenu-button": ` ${this.className} cursor-pointer group/dropdown`,
        "ui-selectmenu-icon": `${iconClass}`,
        "ui-selectmenu-menu": `${dropdownClass} absolute`
      }
    });
  });
}
function InitializeSliders() {
  $(".product-slider").each(function () {
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
      customPaging: function (slider, i) {
        return `<div class="bg-gray-200 cursor-pointer w-full h-full transition duration-300 ease-out-wobble rounded-full "></div>`;
      },
      prevArrow: '<button type="button" class="lg:-rotate-90 slick-prev text-4xl text-gold aria-disabled:text-gray-300"><i class="fa-solid fa-chevron-up"></i></button>',
      nextArrow: '<button type="button" class="lg:-rotate-90 slick-next text-4xl text-gold aria-disabled:text-gray-300"><i class="fa-solid fa-chevron-down"></i></button>',
      asNavFor: main,
      responsive: [{
        breakpoint: 1023,
        settings: {
          vertical: false,
          verticalSwiping: false,
          arrows: false
        }
      }, {
        breakpoint: 550,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 3,
          arrows: false
        }
      }]
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
      responsive: [{
        breakpoint: 1023,
        settings: {
          vertical: false,
          verticalSwiping: false
        }
      }]
    });
  });
  $(".cart-slider-mobile").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    focusOnSelect: true,
    dots: true,
    dotsClass: 'absolute top-full right-0 left-0 h-8 *:py-3 flex flex-row *:grow *:[&.slick-active]:*:bg-gold *:bg-gray-200 *:cursor-pointer *:hover:*:brightness-90 *:bg-clip-content rounded-full overflow-hidden',
    customPaging: function (slider, i) {
      return `<div class="bg-gray-200 cursor-pointer w-full h-full transition duration-300 ease-out-wobble rounded-full "></div>`;
    },
    arrows: false,
    mobileFirst: true,
    responsive: [{
      breakpoint: 767,
      settings: "unslick"
    }]
  });
  $(".cart-slider-payment").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    focusOnSelect: true,
    dots: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev text-4xl text-gold aria-disabled:text-gray-300"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next text-4xl text-gold aria-disabled:text-gray-300"><i class="fa-solid fa-chevron-right"></i></button>',
    dotsClass: 'absolute top-full right-0 left-0 h-8 *:py-3 flex flex-row *:grow *:[&.slick-active]:*:bg-gold *:bg-gray-200 *:cursor-pointer *:hover:*:brightness-90 *:bg-clip-content rounded-full overflow-hidden',
    customPaging: function (slider, i) {
      return `<div class="bg-gray-200 cursor-pointer w-full h-full transition duration-300 ease-out-wobble rounded-full "></div>`;
    },
    responsive: [{
      breakpoint: 767,
      settings: {
        arrows: false
      }
    }]
  });
  $(".banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    focusOnSelect: true,
    fade: true,
    cssEase: 'linear',
    dots: true,
    arrows: false,
    prevArrow: `<button type="button" class="slick-prev text-4xl top-0 bottom-0 m-auto text-white aria-disabled:text-gray-300 absolute left-3 z-10">
			<div class="border-2 border-white rounded-full flex justify-center items-center py-5 px-4 md:p-2">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="37" viewBox="0 0 20 37" fill="none" class="w-5 md:w-3">
					<path d="M18.0625 36L1 18.9375L18.0625 1.875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
		</button>`,
    nextArrow: `<button type="button" class="slick-prev text-4xl top-0 bottom-0 m-auto text-white aria-disabled:text-gray-300 absolute right-3 z-10">
			<div class="border-2 border-white rounded-full flex justify-center items-center py-5 px-4 md:p-2 rotate-180">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="37" viewBox="0 0 20 37" fill="none" class="w-5 md:w-3">
					<path d="M18.0625 36L1 18.9375L18.0625 1.875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
		</button>`,
    dotsClass: 'absolute top-[70px] sm:top-[calc(100%_-_60px)] right-0 left-0 h-8 *:p-3 flex justify-center gap-2 *:[&.slick-active]:*:outline-white sm:*:[&.slick-active]:*:outline-gold *:hover:*:brightness-90 *:rounded-full overflow-hidden',
    customPaging: function (slider, i) {
      return `<div class="bg-white sm:bg-gold cursor-pointer w-2 h-2 transition-all duration-300 ease-out-wobble rounded-full outline-offset-4 outline outline-transparent outline-2">
			</div>`;
    },
    asNavFor: '.banner-aux-slider'
  });
  $(".banner-aux-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    arrows: false,
    dots: false,
    fade: true,
    cssEase: 'linear',
    asNavFor: '.banner-slider'
  });
  $(".item-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    focusOnSelect: true,
    centereMode: true,
    dots: true,
    arrows: false,
    dotsClass: 'h-8 *:p-3 flex justify-center gap-2 *:[&.slick-active]:*:outline-gold *:hover:*:brightness-90 *:rounded-full overflow-hidden',
    customPaging: function (slider, i) {
      return `<div class="bg-gold cursor-pointer w-2 h-2 transition-all duration-300 ease-out-wobble rounded-full outline-offset-4 outline outline-transparent outline-2">
			</div>`;
    },
    responsive: [{
      breakpoint: 1023,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 400,
      settings: {
        slidesToShow: 1
      }
    }]
  });
}
function EnableSliderFiltering(sliderSelector, selector) {
  $(sliderSelector).slick('slickUnfilter');
  $(sliderSelector).slick('slickFilter', selector);
}
function DisableSliderFiltering(sliderSelector) {
  $(sliderSelector).slick('slickUnfilter');
}

/***/ }),

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_fortawesome_fontawesome-free_js_brands_js-node_modules_fortawesome_fonta-285445"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map