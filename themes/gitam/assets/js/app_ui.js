/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./resources/js/ui.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _UI = _UI || {};
_UI = {
  lastScrollPos: 0,
  init: function init() {
    jQuery(document).ready(function () {
      _UI.initaos();
      _UI.initScroll();
      _UI.initMenu();
      _UI.initIntersectionObeserver();
      _UI.initFooter();
      _UI.initSearchFilter();
      _UI.initTableAccordian();
    });
  },
  reinit: function reinit() {
    jQuery(document).ready(function () {
      _UI.initSlider();
      _UI.initTab();
      _UI.initMagnificPopup();
      _UI.initAccordion();
      _UI.initSmoothscroll();
      _UI.initCtahide();
      _UI.initIntersectionObeserver();
      _UI.inittopspacing();
    });
  },
  hideHeader: function hideHeader() {
    var isScrollBottom = _UI.lastScrollPos < window.scrollY;
    if (isScrollBottom) {
      jQuery(".mainheader").addClass("header--hide");
      var searchCheck = jQuery(".search").hasClass("active");
      if (searchCheck) {
        jQuery(".mainheader").removeClass("header--hide");
      }
    } else {
      jQuery(".mainheader").removeClass("header--hide");
    }
    _UI.lastScrollPos = window.scrollY;
  },
  initaos: function initaos() {
    window.addEventListener("load", AOS.refresh());
    setTimeout(function () {
      AOS.init({
        duration: 800,
        once: true
      });
      AOS.refresh();
      AOS.refreshHard();
    }, 10);
  },
  initScroll: function initScroll() {
    jQuery(window).scroll(function () {
      if (window.scrollY == 0) {
        if (jQuery("body").hasClass("headerbg")) {
          jQuery(".header").addClass("headerelative");
        }
      } else if (window.scrollY >= 20) {
        jQuery(".header").removeClass("headerelative");
      }
      if (window.scrollY >= 20) {
        jQuery(".header").addClass("stickyheader");
      } else {
        jQuery(".header").removeClass("stickyheader");
      }
      if (window.scrollY >= 200) {
        jQuery(".scrolltop").addClass("active");
        var theta = document.documentElement.scrollTop / 50 % Math.PI;
        _UI.hideHeader();
      } else {
        jQuery(".scrolltop").removeClass("active");
      }
      if (jQuery(".header").hasClass("stickyheader")) {
        jQuery(".comptable thead").css("top", "89px");
      } else {
        jQuery(".comptable thead").css("top", "0px");
      }
      if (jQuery(".header").hasClass("header--hide")) {
        jQuery(".comptable thead").css("top", "0px");
      }
    });
  },
  initIntersectionObeserver: function initIntersectionObeserver() {
    var social_feed = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        var inst_fd = document.createElement("script");
        inst_fd.src = "https://www.instagram.com/embed.js";
        inst_fd.defer = true;
        document.body.appendChild(inst_fd);
        var lazyLoadIframes = document.querySelectorAll("iframe[data-src]");
        if ("IntersectionObserver" in window) {
          var iframeObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                var iframe = entry.target;
                iframe.src = iframe.dataset.src;
                iframeObserver.unobserve(iframe);
              }
            });
          });
          lazyLoadIframes.forEach(function (iframe) {
            iframeObserver.observe(iframe);
          });
        } else {
          lazyLoadIframes.forEach(function (iframe) {
            iframe.src = iframe.dataset.src;
          });
        }
      }
    });
    if (jQuery("#social_feed").length > 0) {
      social_feed.observe(document.querySelector("#social_feed"));
    }
  },
  initMenu: function initMenu() {
    var navbarMenu = document.getElementById("navbar");
    var burgerMenu = document.getElementById("mobilegitam");
    var overlayMenu = document.querySelector(".overlay");
    var closeIcon = document.getElementById("close-icon");
    document.querySelectorAll('.innersubmenu').forEach(function (el) {
      el.setAttribute('data-lenis-prevent', '');
    });
    var toggleMenu = function toggleMenu() {
      navbarMenu.classList.toggle("active");
      overlayMenu.classList.toggle("active");
      burgerMenu.classList.toggle("active");
      closeIcon.classList.toggle("active");
    };
    var collapseSubMenu = function collapseSubMenu() {
      var activeDropdown = navbarMenu.querySelector(".menu-dropdown.active");
      if (activeDropdown) {
        activeDropdown.querySelector(".submenu").removeAttribute("style");
        activeDropdown.classList.remove("active");
      }
    };
    var toggleSubMenu = function toggleSubMenu(e) {
      if (e.target.hasAttribute("data-toggle") && window.innerWidth <= 1300) {
        e.preventDefault();
        var menuDropdown = e.target.parentElement;
        var subMenu = menuDropdown.querySelector(".submenu");
        if (menuDropdown.classList.contains("active")) {
          collapseSubMenu();
        } else {
          collapseSubMenu();
          menuDropdown.classList.add("active");
          setTimeout(function () {
            subMenu.style.maxHeight = "".concat(subMenu.scrollHeight, "px");
          }, 0);
        }
      }
    };
    var resizeWindow = function resizeWindow() {
      if (window.innerWidth > 1300) {
        if (navbarMenu.classList.contains("active")) {
          toggleMenu();
        }
        if (navbarMenu.querySelector(".menu-dropdown.active")) {
          collapseSubMenu();
        }
        navbarMenu.removeEventListener("click", toggleSubMenu);
      } else {
        navbarMenu.addEventListener("click", toggleSubMenu);
      }
    };
    resizeWindow();
    burgerMenu.addEventListener("click", toggleMenu);
    overlayMenu.addEventListener("click", toggleMenu);
    closeIcon.addEventListener("click", toggleMenu);
    window.addEventListener("resize", resizeWindow);
    var submenuItem = document.querySelectorAll(".submenu-item");
    submenuItem.forEach(function (submenu) {
      submenu.addEventListener("click", function () {
        submenuItem.forEach(function (item) {
          return item.classList.remove("active");
        });
        this.classList.add("active");
      });
    });
    jQuery(".navbar-list").removeClass("visibilityshowhide");
    jQuery(".submenu-item.submenu-dropdown").on("click", function () {
      if (window.innerWidth <= 1300) {
        jQuery(".submenu-item.submenu-dropdown").removeClass("active1");
        jQuery(".menu").toggleClass("submenuactive");
        jQuery(this).closest(".menu-item.menu-dropdown").addClass("active1");
        jQuery(".navbar-list").toggleClass("visibilityshowhide");
      }
    });
    var submenuItems = document.querySelectorAll(".submenu-item.submenu-dropdown");
    submenuItems.forEach(function (item) {
      item.addEventListener("click", function () {
        submenuItems.forEach(function (el) {
          if (el) {
            console.log(el);
          }
        });
      });
    });
    var header = document.getElementById("header");
    var headerSpacer = document.createElement("div");
    headerSpacer.style.height = header.offsetHeight + "px";
    headerSpacer.style.display = "none";
    header.parentNode.insertBefore(headerSpacer, header.nextSibling);
    var handleSticky = function handleSticky() {
      if (window.innerWidth > 1300) {
        if (window.scrollY > 80) {
          header.classList.add("sticky");
          headerSpacer.style.display = "block";
        } else {
          header.classList.remove("sticky");
          headerSpacer.style.display = "none";
        }
      } else {
        header.classList.remove("sticky");
        headerSpacer.style.display = "none";
      }
    };
    window.addEventListener("scroll", handleSticky);
    handleSticky();
  },
  inittopspacing: function inittopspacing() {
    var mainbanner = document.querySelector(".maininnerbanner");
    var nextSection = document.querySelector(".section");
    if (window.innerWidth < 1300) {
      if (!mainbanner) {
        if (nextSection) {
          nextSection.style.paddingTop = "80px";
          var h2 = nextSection.querySelector("h2");
          if (h2) {
            var h1 = document.createElement("h1");
            h1.innerHTML = h2.innerHTML;
            h2.parentNode.replaceChild(h1, h2);
          }
        }
      } else {
        if (nextSection) {
          nextSection.style.paddingTop = "0";
        }
      }
    } else {
      if (nextSection) {
        nextSection.style.paddingTop = "0";
      }
    }
  },
  initSlider: function initSlider() {
    var innerSlider = new Swiper(".banner__herobannerslider", {
      slidesPerView: 1,
      autoHeight: true,
      autoplay: {
        reverseDirection: false,
        delay: 2000
      },
      on: {
        touchStart: function touchStart() {
          mainSlider.allowTouchMove = false;
        },
        touchMove: function touchMove() {
          var isAtStart = this.isBeginning && this.translate > this.maxTranslate();
          var isAtEnd = this.isEnd && this.translate < this.minTranslate();
          if (isAtStart || isAtEnd) {
            mainSlider.allowTouchMove = true;
          }
        },
        touchEnd: function touchEnd() {
          mainSlider.allowTouchMove = true;
        }
      }
    });
    var swiper = new Swiper(".exploreengageslider", _defineProperty(_defineProperty(_defineProperty({
      slidesPerView: 4,
      spaceBetween: 16,
      speed: 800,
      loop: true,
      autoplay: {
        delay: 0
      }
    }, "loop", true), "navigation", {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }), "breakpoints", {
      320: {
        slidesPerView: 1.7
      },
      568: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1366: {
        slidesPerView: 4
      }
    }));
    var targetBlock1 = document.querySelectorAll(".whygitam-slider .exploreengageslider");
    targetBlock1.forEach(function (item) {
      if (item.swiper) {
        item.swiper.destroy(true, true);
      }
      new Swiper(item, {
        spaceBetween: 16,
        navigation: {
          nextEl: item.closest(".whygitam-slider").querySelector(".swiper-button-next"),
          prevEl: item.closest(".whygitam-slider").querySelector(".swiper-button-prev")
        },
        breakpoints: {
          320: {
            slidesPerView: 1
          },
          568: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 2.5
          },
          1024: {
            slidesPerView: 3
          }
        }
      });
    });
    var swiper = new Swiper(".disciplines-slider", {
      slidesPerView: 7,
      spaceBetween: 16,
      speed: 1600,
      loop: true,
      autoplay: {
        delay: 0
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        320: {
          slidesPerView: 1.7
        },
        568: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 5
        },
        1366: {
          slidesPerView: 6
        }
      }
    });
    var targetBlock3 = document.querySelectorAll(".brandflimdicipline .disciplines-slider");
    targetBlock3.forEach(function (item) {
      if (item.swiper) {
        item.swiper.destroy(true, true);
      }
      new Swiper(item, {
        spaceBetween: 16,
        navigation: {
          nextEl: item.closest(".brandflimdicipline").querySelector(".swiper-button-next"),
          prevEl: item.closest(".brandflimdicipline").querySelector(".swiper-button-prev")
        },
        breakpoints: {
          320: {
            slidesPerView: 1.7
          },
          568: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 5
          },
          1366: {
            slidesPerView: 6
          }
        }
      });
    });
    var swiper = new Swiper(".humans-sliderpopup", {
      slidesPerView: 1,
      speed: 1000,
      loop: true,
      navigation: {
        nextEl: ".campusslide-btn-next",
        prevEl: ".campusslide-btn-prev"
      }
    });
    var swiper = new Swiper(".changemaker-sliderpopup", {
      spaceBetween: 16,
      speed: 1000,
      loop: true,
      navigation: {
        nextEl: ".changemakerslide-btn-next",
        prevEl: ".changemakerslide-btn-prev"
      },
      breakpoints: {
        767: {
          slidesPerView: 1
        },
        1024: {
          slidesPerView: 2
        },
        1366: {
          slidesPerView: 3
        }
      }
    });
    var swiper = new Swiper(".campus-slider", {
      spaceBetween: 16,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        568: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1366: {
          slidesPerView: 4
        }
      }
    });
    var targetBlock = document.querySelectorAll(".aluministoryslider .campus-slider");
    targetBlock.forEach(function (item) {
      if (item.swiper) {
        item.swiper.destroy(true, true);
      }
      new Swiper(item, {
        spaceBetween: 16,
        navigation: {
          nextEl: item.closest(".aluministoryslider").querySelector(".swiper-button-next"),
          prevEl: item.closest(".aluministoryslider").querySelector(".swiper-button-prev")
        },
        breakpoints: {
          320: {
            slidesPerView: 1
          },
          767: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2.5
          },
          1024: {
            slidesPerView: 3
          }
        }
      });
    });
    var swiper = new Swiper(".aluminislider .swiper", {
      spaceBetween: 16,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        568: {
          slidesPerView: 2
        },
        1366: {
          slidesPerView: 3
        }
      }
    });
    var swiper = new Swiper(".researchgrants-slider .leadership-slider", {
      spaceBetween: 16,
      speed: 3500,
      autoplay: {
        delay: 0
      },
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        568: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1366: {
          slidesPerView: 3
        }
      },
      on: {
        touchStart: function touchStart() {
          mainSlider.allowTouchMove = false;
        },
        touchMove: function touchMove() {
          var isAtStart = this.isBeginning && this.translate > this.maxTranslate();
          var isAtEnd = this.isEnd && this.translate < this.minTranslate();
          if (isAtStart || isAtEnd) {
            mainSlider.allowTouchMove = true;
          }
        },
        touchEnd: function touchEnd() {
          mainSlider.allowTouchMove = true;
        }
      }
    });
    var swiper = new Swiper(".leadership-slider", {
      spaceBetween: 16,
      speed: 5000,
      autoplay: {
        delay: 0
      },
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        568: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1366: {
          slidesPerView: 3
        }
      },
      on: {
        touchStart: function touchStart() {
          mainSlider.allowTouchMove = false;
        },
        touchMove: function touchMove() {
          var isAtStart = this.isBeginning && this.translate > this.maxTranslate();
          var isAtEnd = this.isEnd && this.translate < this.minTranslate();
          if (isAtStart || isAtEnd) {
            mainSlider.allowTouchMove = true;
          }
        },
        touchEnd: function touchEnd() {
          mainSlider.allowTouchMove = true;
        }
      }
    });
    var swiper = new Swiper(".aboutleadership-slider", {
      spaceBetween: 16,
      navigation: {
        nextEl: ".campusslide-btn-next",
        prevEl: ".campusslide-btn-prev"
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        568: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1366: {
          slidesPerView: 3
        }
      },
      on: {
        touchStart: function touchStart() {
          mainSlider.allowTouchMove = false;
        },
        touchMove: function touchMove() {
          var isAtStart = this.isBeginning && this.translate > this.maxTranslate();
          var isAtEnd = this.isEnd && this.translate < this.minTranslate();
          if (isAtStart || isAtEnd) {
            mainSlider.allowTouchMove = true;
          }
        },
        touchEnd: function touchEnd() {
          mainSlider.allowTouchMove = true;
        }
      }
    });
    var swiper = new Swiper(".faculty-slider", {
      spaceBetween: 16,
      speed: 3500,
      autoplay: {
        delay: 0
      },
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        320: {
          slidesPerView: 1.1
        },
        568: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 2
        },
        1300: {
          slidesPerView: 3
        }
      }
    });
    var swiper = new Swiper(".humansgitam-slider", {
      spaceBetween: 16,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        320: {
          slidesPerView: 1.1
        },
        568: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1000: {
          slidesPerView: 4
        }
      }
    });
    var swiper = new Swiper(".news-slider", {
      spaceBetween: 16,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        320: {
          slidesPerView: 1.1
        },
        568: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1300: {
          slidesPerView: 4
        }
      }
    });
    var swiper = new Swiper(".faculty-profile-slider", {
      spaceBetween: 16,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        590: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 4
        },
        920: {
          slidesPerView: 6
        }
      }
    });
    var swiper = new Swiper(".vdc-slider", {
      spaceBetween: 16,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        590: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 4
        },
        920: {
          slidesPerView: 4
        }
      }
    });
    var mainSlider = new Swiper(".ourcampuses__slider", {
      slidesPerView: 1,
      spaceBetween: 16,
      navigation: {
        nextEl: ".campusslide-btn-next",
        prevEl: ".campusslide-btn-prev"
      }
    });
    var innerSlider = new Swiper(".ourcampuses__innerslider", {
      slidesPerView: 3,
      spaceBetween: 16,
      nested: true,
      breakpoints: {
        320: {
          slidesPerView: 1.8,
          spaceBetween: 10
        },
        568: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 5
        },
        991: {
          slidesPerView: 3
        }
      },
      on: {
        touchStart: function touchStart() {
          mainSlider.allowTouchMove = false;
        },
        touchMove: function touchMove() {
          var isAtStart = this.isBeginning && this.translate > this.maxTranslate();
          var isAtEnd = this.isEnd && this.translate < this.minTranslate();
          if (isAtStart || isAtEnd) {
            mainSlider.allowTouchMove = true;
          }
        },
        touchEnd: function touchEnd() {
          mainSlider.allowTouchMove = true;
        }
      }
    });
    var swiper = new Swiper(".cardradius-slider", {
      slidesPerView: 1,
      direction: "vertical",
      effect: "slide",
      loop: true,
      autoplay: {
        reverseDirection: false,
        delay: 2000
      }
    });
  },
  initFooter: function initFooter() {
    var iconUpDown = document.querySelectorAll(".footer__title");
    var accordlist = document.querySelectorAll(".footer__title + .footer__list");
    for (var i = 0; i < iconUpDown.length; i++) {
      if (iconUpDown.length > 0 && accordlist.length > 0) {
        iconUpDown[0].classList.add("active");
        accordlist[0].classList.add("active");
      }
      iconUpDown[i].addEventListener("click", function () {
        for (var j = 0; j < iconUpDown.length; j++) {
          iconUpDown[j].classList.remove("active");
          accordlist[j].classList.remove("active");
        }
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("active");
      });
    }
  },
  initTab: function initTab() {
    document.querySelectorAll(".tab").forEach(function (tabGroup) {
      var tabButtons = tabGroup.querySelectorAll(".tab__btn");
      var contentBoxes = tabGroup.querySelectorAll(".content");
      var line = tabGroup.querySelector(".line");
      var setLinePosition = function setLinePosition(activeButton) {
        line.style.width = activeButton.offsetWidth + "px";
        line.style.left = activeButton.offsetLeft + "px";
      };
      tabButtons.forEach(function (button) {
        button.addEventListener("click", function (e) {
          tabButtons.forEach(function (btn) {
            return btn.classList.remove("active");
          });
          contentBoxes.forEach(function (content) {
            return content.classList.remove("active");
          });
          e.target.classList.add("active");
          var target = e.target.getAttribute("data-tab-target");
          tabGroup.querySelector(".content[data-tab-content=\"".concat(target, "\"]")).classList.add("active");
          setLinePosition(e.target);
        });
      });
      var defaultActiveButton = tabGroup.querySelector(".tab__btn.active");
      if (defaultActiveButton) {
        setLinePosition(defaultActiveButton);
      }
    });
  },
  initMagnificPopup: function initMagnificPopup() {
    jQuery(".popup-with-move-anim").magnificPopup({
      type: "inline",
      fixedContentPos: false,
      fixedBgPos: true,
      overflowY: "auto",
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: "my-mfp-slide-bottom",
      callbacks: {
        beforeOpen: function beforeOpen() {
          jQuery("body").addClass("mfp-active");
        },
        beforeClose: function beforeClose() {
          jQuery("body").removeClass("mfp-active");
        }
      }
    });
  },
  initSearchFilter: function initSearchFilter() {
    document.querySelectorAll(".searchbar").forEach(function (searchbar) {
      var dropdownBtn = searchbar.querySelector(".dropdown-text");
      var dropdownlist = searchbar.querySelector(".dropdown-list");
      var dropdownArrow = searchbar.querySelector("img[alt='arrow']");
      var dropdownContent = searchbar.querySelector("#drop-content-".concat(searchbar.dataset.searchbar));
      var checkboxes = searchbar.querySelectorAll(".dropdown-list-item input[type='checkbox']");
      var searchInput = searchbar.querySelector(".search-box input");
      var filterTextContainer = searchbar.querySelector(".search-box__filtertext");
      var searchIcon = searchbar.querySelector(".search-box img[alt='search']");
      var closeIcon = searchbar.querySelector(".search-box img[alt='close']");
      var clearAllBtn = document.querySelector(".searchpopupfilter .popup__clear");
      var applyNowBtn = document.querySelector(".searchpopupfilter .popup__applynow");
      var allCampusCheckbox = document.querySelector('[data-campus="All Campus"]');
      filterTextContainer.style.display = "none";
      clearAllBtn.style.display = "none";
      applyNowBtn.style.display = "inline-block";
      dropdownBtn.onclick = function (e) {
        e.stopPropagation();
        var isDropdownOpen = dropdownlist.classList.contains("show");
        var isSearchResultOpen = filterTextContainer.style.display === "block";
        document.querySelectorAll(".dropdown-list").forEach(function (list) {
          return list.classList.remove("show");
        });
        document.querySelectorAll(".dropdown-text img[alt='arrow']").forEach(function (arrow) {
          return arrow.style.rotate = "0deg";
        });
        if (isSearchResultOpen) {
          filterTextContainer.style.display = "none";
          searchInput.value = "";
          searchInput.placeholder = "Search something...";
        } else if (!isDropdownOpen) {
          dropdownlist.classList.add("show");
          dropdownArrow.style.rotate = "-180deg";
        }
      };
      dropdownlist.onclick = function (e) {
        e.stopPropagation();
      };
      var updateDropdownContent = function updateDropdownContent() {
        var selectedCheckboxes = Array.from(checkboxes).filter(function (cb) {
          return cb.checked;
        });
        var selectedCount = selectedCheckboxes.length;
        if (selectedCount === 0) {
          dropdownContent.innerText = "All Campus";
          searchInput.placeholder = "Search something...";
          clearAllBtn.style.display = "none";
          applyNowBtn.style.display = "inline-block";
          applyNowBtn.style.left = "0";
          applyNowBtn.style.right = "0";
          applyNowBtn.classList.add("btncentr");
        } else if (selectedCount === 1) {
          dropdownContent.innerText = selectedCheckboxes[0].getAttribute("data-campus");
          searchInput.placeholder = "Search in ".concat(selectedCheckboxes[0].getAttribute("data-campus"), "...");
          clearAllBtn.style.display = "inline-block";
          applyNowBtn.style.display = "inline-block";
          applyNowBtn.style.left = "auto";
        } else {
          dropdownContent.innerText = "".concat(selectedCheckboxes[0].getAttribute("data-campus"), " +").concat(selectedCount - 1);
          searchInput.placeholder = "Search in ".concat(selectedCount, " selected items...");
          clearAllBtn.style.display = "inline-block";
          applyNowBtn.style.display = "inline-block";
          applyNowBtn.style.left = "auto";
        }
      };
      var toggleAllCheckboxes = function toggleAllCheckboxes(state) {
        checkboxes.forEach(function (checkbox) {
          if (checkbox !== allCampusCheckbox) {
            checkbox.checked = state;
          }
        });
      };
      allCampusCheckbox.addEventListener("change", function () {
        toggleAllCheckboxes(allCampusCheckbox.checked);
        updateDropdownContent();
      });
      checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
          if (checkbox !== allCampusCheckbox) {
            allCampusCheckbox.checked = Array.from(checkboxes).every(function (cb) {
              return cb.checked || cb === allCampusCheckbox;
            });
          }
          updateDropdownContent();
        });
      });
      clearAllBtn.addEventListener("click", function () {
        checkboxes.forEach(function (checkbox) {
          return checkbox.checked = false;
        });
        allCampusCheckbox.checked = false;
        updateDropdownContent();
      });
      closeIcon.addEventListener("click", function () {
        searchInput.value = "";
        searchIcon.style.display = "block";
        closeIcon.style.display = "none";
        filterTextContainer.style.display = "none";
      });
      updateDropdownContent();
    });
    window.addEventListener("click", function (e) {
      if (!e.target.closest(".searchbar") || e.target.closest(".search-box")) {
        document.querySelectorAll(".dropdown-list").forEach(function (list) {
          return list.classList.remove("show");
        });
        document.querySelectorAll(".dropdown-text img[alt='arrow']").forEach(function (arrow) {
          return arrow.style.rotate = "0deg";
        });
      }
    });
  },
  initAccordion: function initAccordion() {
    if (!window.accordionInitialized) {
      var initializeAccordion = function initializeAccordion() {
        document.querySelectorAll(".accordion__header").forEach(function (accordionHeader) {
          accordionHeader.removeEventListener("click", handleAccordionClick);
          accordionHeader.addEventListener("click", handleAccordionClick);
        });
      };
      var handleAccordionClick = function handleAccordionClick(event) {
        event.stopPropagation();
        var accordionHeader = event.currentTarget;
        var accordionItem = accordionHeader.parentElement;
        var content = accordionItem.querySelector(".accordion__content");
        var isActive = accordionItem.classList.contains("active1");
        document.querySelectorAll(".accordion__item.active1").forEach(function (item) {
          if (item !== accordionItem) {
            item.classList.remove("active1");
            item.querySelector(".accordion__header").classList.remove("active1");
            var itemContent = item.querySelector(".accordion__content");
            itemContent.style.transition = "max-height 0.3s ease-out";
            itemContent.style.maxHeight = "0px";
            itemContent.style.display = "block";
          }
        });
        if (!isActive) {
          accordionItem.classList.add("active1");
          accordionHeader.classList.add("active1");
          content.style.transition = "max-height 0.4s ease-in-out";
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.display = "table";
          content.style.width = "100%";
          setTimeout(function () {
            content.style.transition = "max-height 0.4s ease-in-out";
            content.style.maxHeight = content.scrollHeight + "px";
          }, 10);
          setTimeout(function () {
            var offset = accordionItem.getBoundingClientRect().top + window.scrollY - 20;
            window.scrollTo({
              top: offset,
              behavior: "smooth"
            });
          }, 300);
        } else {
          content.style.transition = "max-height 0.3s ease-out";
          content.style.maxHeight = "0px";
          content.style.display = "block";
          setTimeout(function () {
            accordionItem.classList.remove("active1");
            accordionHeader.classList.remove("active1");
          }, 300);
        }
      };
      window.accordionInitialized = true;
      initializeAccordion();
      document.body.addEventListener("click", function (event) {
        if (event.target.matches('[id^="edit-field-campus-target-id"]')) {
          setTimeout(initializeAccordion, 300);
        }
      });
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.addedNodes.length) {
            setTimeout(initializeAccordion, 300);
          }
        });
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  },
  initSmoothscroll: function initSmoothscroll() {
    jQuery(function () {
      if (jQuery(".disable-smooth").length <= 0) initSmoothScrolling();
      var calcScrollValue = function calcScrollValue() {
        var scrollProgress = document.querySelector("#scrolltop");
        var progressValue = document.getElementById("scrolltop--progress");
        var pos = document.documentElement.scrollTop;
        var calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrollValue = Math.round(pos * 100 / calcHeight);
        if (pos > 100) {
          jQuery("#scrolltop").addClass("active");
          jQuery("#scrolltop").css("background", "conic-gradient(#A58255 ".concat(scrollValue, "%, #004740 ").concat(scrollValue, "%)"));
        } else jQuery("#scrolltop").removeClass("active");
        jQuery("#scrolltop").click(function () {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
        });
      };
      window.onscroll = calcScrollValue;
      window.onload = calcScrollValue;
    });
    var lenis;
    var initSmoothScrolling = function initSmoothScrolling() {
      if (jQuery("body").hasClass("logged-in")) {} else {
        lenis = new Lenis({
          smooth: true,
          duration: 1.9,
          easing: function easing(t) {
            return Math.min(1, 1.001 - Math.pow(2, -10 * t));
          },
          direction: "vertical",
          gestureDirection: "vertical",
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
          prevent: function prevent(node) {
            return node.classList.contains('innersubmenu') || node.hasAttribute('data-lenis-prevent');
          }
        });
        jQuery("html").addClass("lenis lenis-smooth");
        var scrollFn = function scrollFn(time) {
          lenis.raf(time);
          requestAnimationFrame(scrollFn);
        };
        requestAnimationFrame(scrollFn);
      }
      document.querySelectorAll('.innersubmenu').forEach(function (el) {
        el.addEventListener('wheel', function (e) {
          return e.stopPropagation();
        }, {
          passive: false
        });
      });
      jQuery("html").on("click", ".popup__trigger", function (e) {
        jQuery("body").removeClass("no-touchevents js lenis");
        jQuery(".filterbtn .popup__overlay").removeClass("popup__overlay--hidden");
        jQuery(".filterbtn .popup__overlay").addClass("popup__overlay--visible");
      });
      jQuery("body").on("click", ".popup__close", function (e) {
        jQuery(".filterbtn .popup__overlay").addClass("popup__overlay--hidden");
        jQuery(".filterbtn .popup__overlay").removeClass("popup__overlay--visible");
      });
      jQuery("html").on("click", ".changemakerpopup__trigger", function (e) {
        jQuery("body").removeClass("no-touchevents js lenis");
        jQuery(".changemakerpopupfilter .popup__overlay").removeClass("popup__overlay--hidden");
        jQuery(".changemakerpopupfilter .popup__overlay").addClass("popup__overlay--visible");
      });
      jQuery("body").on("click", ".popup__changemakerclose", function (e) {
        jQuery(".changemakerpopupfilter .popup__overlay").addClass("popup__overlay--hidden");
        jQuery(".changemakerpopupfilter .popup__overlay").removeClass("popup__overlay--visible");
      });
      jQuery("html").on("click", ".searchpopup__trigger", function (e) {
        jQuery("body").removeClass("no-touchevents js lenis");
        jQuery(".searchpopupfilter .popup__overlay").removeClass("popup__overlay--hidden");
        jQuery(".searchpopupfilter .popup__overlay").addClass("popup__overlay--visible");
      });
      jQuery("body").on("click", ".popup__closeicon", function (e) {
        jQuery(".searchpopupfilter .popup__overlay").addClass("popup__overlay--hidden");
        jQuery(".searchpopupfilter .popup__overlay").removeClass("popup__overlay--visible");
      });
      // jQuery("body").on("click", ".popup__procloseicon", function (e) {
      //   jQuery(".aluministoryslider .popup__overlay").addClass("popup__overlay--hidden");
      //   jQuery(".aluministoryslider .popup__overlay").removeClass("popup__overlay--visible");
      // });
      document.querySelectorAll(".popup").forEach(function (popup) {
        jQuery("html").on("click", ".humansgitampopupslider .humansgitampopup__trigger", function (e) {
          var popupId = jQuery(this).attr("aria-controls");
          jQuery("body").removeClass("no-touchevents js lenis");
          var popup = jQuery("#".concat(popupId));
          popup.removeClass("popup__overlay--hidden").addClass("popup__overlay--visible");
        });
      });
      document.querySelectorAll(".popup").forEach(function (popup) {
        jQuery("html").on("click", ".profilepopup__trigger", function (e) {
          var popupId = jQuery(this).attr("aria-controls");
          jQuery("body").removeClass("no-touchevents js lenis");
          var popup = jQuery("#".concat(popupId));
          popup.removeClass("popup__overlay--hidden").addClass("popup__overlay--visible");
        });
      });
      jQuery("body").on("click", ".popup__close", function () {
        var $popup = jQuery(this).closest("[data-popup-id]");
        $popup.hide();
        if (jQuery("[data-popup-id]:visible").length === 0) {
          jQuery("html, body").css({
            overflow: "auto"
          });
        }
        jQuery(".ui-icon-closethick").trigger("click");
        jQuery(".popup__overlay").addClass("popup__overlay--hidden").removeClass("popup__overlay--visible");
      });

      // jQuery("body").on("click", ".popup__close", function () {
      //   jQuery("html").css({ "overflow": "auto" });
      //   jQuery("body").css({ "overflow": "auto" });
      //   const popup = jQuery(this).closest(".popup__content");
      //   popup.hide();
      //   if (jQuery(".popup__content:visible").length === 0) {
      //     jQuery("html, body").css({ "overflow": "auto" });
      //   }
      //   jQuery(".ui-icon-closethick").trigger("click");
      //   jQuery(".popup__overlay").addClass("popup__overlay--hidden");
      //   jQuery(".popup__overlay").removeClass("popup__overlay--visible");
      // });
    };
  },
  initCtahide: function initCtahide() {
    // if (window.location.pathname === '/chat-with-a-student-ambassador') {
    //     const divToHide = document.querySelector('.sticky__btn');
    //     if (divToHide) {
    //       divToHide.style.display = 'none';
    //     }
    // }
    var shouldHideBasedOnPath = window.location.pathname === "/chat-with-a-student-ambassador";
    var shouldHideBasedOnClass = document.body.classList.contains("hide-sidebar");
    if (shouldHideBasedOnPath || shouldHideBasedOnClass) {
      var divToHide = document.querySelector(".sticky__btn");
      if (divToHide) {
        divToHide.style.display = "none";
      }
    }
  },
  initTableAccordian: function initTableAccordian() {
    document.querySelectorAll('.accordion-table__header').forEach(function (header) {
      var title = header.querySelector('.accordion-table__header-title');
      var bodyRow = header.nextElementSibling;
      if (title && bodyRow) {
        title.addEventListener('click', function () {
          var isOpen = bodyRow.classList.contains('accordion-table__body--visible');
          bodyRow.classList.toggle('accordion-table__body--visible');
          header.classList.toggle('accordion-table__header--active');
        });
      }
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_UI);
(function (jQuery) {
  _UI.init();
  _UI.reinit();
})(jQuery);
jQuery(window).on("ajaxComplete", function (event, xhr, settings) {
  _UI.reinit();
});
//Accordion

window.addEventListener("resize", function () {
  _UI.inittopspacing();
});
/******/ })()
;