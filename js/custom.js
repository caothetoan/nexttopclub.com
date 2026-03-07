(function ($) {
  ("use strict");

  var tpj = jQuery;
  var revapi24;

  //------ preloader js ------//
  jQuery(window).on("load", function () {
    setTimeout(function () {
      jQuery(".jb_preloader").addClass("loaded");
    }, 1000);
  });

  //---- on ready function -----//
  jQuery(document).ready(function ($) {
    // ===== Scroll to Top ==== //
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 100) {
        $("#return-to-top").fadeIn(200);
      } else {
        $("#return-to-top").fadeOut(200);
      }
    });
    $("#return-to-top").on("click", function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        500
      );
    });

    //----- Main Slider Animation -----//

    (function ($) {
      //Function to animate slider captions
      function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = "webkitAnimationEnd animationend";

        elems.each(function () {
          var $this = $(this),
            $animationType = $this.data("animation");
          $this.addClass($animationType).one(animEndEv, function () {
            $this.removeClass($animationType);
          });
        });
      }

      //Variables on page load
      var $myCarousel = $("#carousel-example-generic"),
        $firstAnimatingElems = $myCarousel
          .find(".carousel-item:first")
          .find("[data-animation ^= 'animated']");

      //Initialize carousel
      $myCarousel.carousel();

      //Animate captions in first slide on page load
      doAnimations($firstAnimatingElems);

      //Pause carousel
      $myCarousel.carousel("pause");

      //Other slides to be animated on carousel slide event
      $myCarousel.on("click slide.bs.carousel", function (e) {
        var $animatingElems = $(e.relatedTarget).find(
          "[data-animation ^= 'animated']"
        );
        doAnimations($animatingElems);
      });
    })(jQuery);

    //*------ category job slider js -----*//
    $(document).ready(function () {
      $(".partner_wrapper .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 1200,
        responsiveClass: true,
        navText: [
          '<i class="flaticon-left-arrow"></i>',
          '<i class="flaticon-right-arrow"></i>',
        ],
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          600: {
            items: 3,
            nav: true,
          },
          1000: {
            items: 5,
            nav: true,
            loop: true,
            margin: 20,
          },
        },
      });
    });

    // Magnific popup-video

    $(".test-popup-link").magnificPopup({
      type: "iframe",
      iframe: {
        markup:
          '<div class="mfp-iframe-scaler">' +
          '<div class="mfp-close"></div>' +
          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
          '<div class="mfp-title">Some caption</div>' +
          "</div>",
        patterns: {
          youtube: {
            index: "youtube.com/",
            id: "v=",
            src: "https://www.youtube.com/embed/ryzOXAO0Ss0",
          },
        },
      },
      // other options
    });

    //----------- upcoming events slider js -------------//

    $(document).ready(function () {
      $(".upcoming_event_slider .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 1200,
        responsiveClass: true,
        navText: [
          '<i class="flaticon-left-arrow"></i>',
          '<i class="flaticon-right-arrow"></i>',
        ],
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          500: {
            items: 1,
            nav: true,
          },
          700: {
            items: 2,
            nav: true,
          },
          1000: {
            items: 4,
            nav: true,
            loop: true,
            margin: 20,
          },
        },
      });
    });

    //----------- about us slider js -------------//

    $(document).ready(function () {
      $(".about_us_slider_wrapper .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 1200,
        responsiveClass: true,
        navText: [
          '<i class="flaticon-left-arrow"></i>',
          '<i class="flaticon-right-arrow"></i>',
        ],
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          500: {
            items: 1,
            nav: true,
          },
          700: {
            items: 2,
            nav: true,
          },
          1000: {
            items: 3,
            nav: true,
            loop: true,
            margin: 20,
          },
        },
      });
    });

    //**----- portfolio wrapper js -------**//

    function protfolioIsotope() {
      if ($(".protfolio_area, .portfolio_grid").length) {
        // Activate isotope in container
        $(".protfoli_inner, .portfoli_inner").imagesLoaded(function () {
          $(".protfoli_inner, .portfoli_inner").isotope({
            layoutMode: "masonry",
          });
        });

        // Add isotope click function
        $(".protfoli_filter li").on("click", function () {
          $(".protfoli_filter li").removeClass("active");
          $(this).addClass("active");
          var selector = $(this).attr("data-filter");
          $(".protfoli_inner, .portfoli_inner").isotope({
            filter: selector,
            animationOptions: {
              duration: 450,
              easing: "linear",
              queue: false,
            },
          });
          return false;
        });
      }
    }
    protfolioIsotope();

    //*------ zoom popup js code ------*//

    $(".zoom_popup").magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
          return item.el.attr("title") + "<small></small>";
        },
      },
    });

    //----------- blog slider js -------------//

    $(document).ready(function () {
      $(".blog_slider_wrapper .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 1200,
        responsiveClass: true,
        navText: [
          '<i class="flaticon-left-arrow"></i>',
          '<i class="flaticon-right-arrow"></i>',
        ],
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          500: {
            items: 1,
            nav: true,
          },
          700: {
            items: 2,
            nav: true,
          },
          1000: {
            items: 3,
            nav: true,
            loop: true,
            margin: 20,
          },
        },
      });
    });

    //----- counter js -----//

    $(".counter_section").on(
      "inview",
      function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
          $(this)
            .find(".timer")
            .each(function () {
              var $this = $(this);
              $({ Counter: 0 }).animate(
                { Counter: $this.text() },
                {
                  duration: 2000,
                  easing: "swing",
                  step: function () {
                    $this.text(Math.ceil(this.Counter));
                  },
                }
              );
            });
          $(this).off("inview");
        }
      }
    );

    //----------- partner slider js -------------//

    $(document).ready(function () {
      $(".partner_item_slider .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 1200,
        responsiveClass: true,
        navText: [
          '<i class="flaticon-left-arrow"></i>',
          '<i class="flaticon-right-arrow"></i>',
        ],
        responsive: {
          0: {
            items: 2,
            nav: true,
          },
          500: {
            items: 4,
            nav: true,
          },
          900: {
            items: 5,
            nav: true,
          },
          1200: {
            items: 6,
            nav: true,
            loop: true,
            margin: 20,
          },
        },
      });
    });

    //----------- DJ night slider js -------------//

    $(document).ready(function () {
      $(".night_club_slider .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 1200,
        responsiveClass: true,
        navText: [
          '<i class="flaticon-left-arrow"></i>',
          '<i class="flaticon-right-arrow"></i>',
        ],
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          500: {
            items: 2,
            nav: true,
          },
          900: {
            items: 4,
            nav: true,
          },
          1200: {
            items: 5,
            nav: true,
            loop: true,
            margin: 20,
          },
        },
      });
    });

    $(document).ready(function () {
      $(".dm_testi_slider_main_wrapper .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        center: true,
        responsiveClass: true,
        smartSpeed: 1200,
        navText: [
          '<i class="flaticon-left-arrow"></i>',
          '<i class="flaticon-right-arrow"></i>',
        ],
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          600: {
            items: 2,
            nav: true,
          },
          1000: {
            items: 3,
            nav: true,
            loop: true,
            margin: 20,
          },
        },
      });
    });

    /* ------ hover images js ------ */
    function imgHover() {
      $(".tg-postlistitem > div").hover(function () {
        $(".tg-postlistitem > div").removeClass("tg-active");
        $(this).addClass("tg-active");
        $(this).parent().addClass("tg-hover");
      });
      $(".tg-postlistitem > div").mouseleave(function () {
        $(".tg-postlistitem > div").removeClass("tg-active");
        $(".tg-postlistitem > div").parent().removeClass("tg-hover");
      });
    }
    imgHover();

    /*--------------------------
 counterdown
---------------------------- */
    function e() {
      var e = new Date();
      e.setDate(e.getDate() + 3);
      var dd = e.getDate();
      var mm = e.getMonth() + 1;
      var y = e.getFullYear();
      var futureFormattedDate = mm + "/" + dd + "/" + y + " 12:00:00";
      return futureFormattedDate;
    }

    /*--------------------------
 counter time active
---------------------------- */
    $(".count-list").downCount({
      date: e(),
      offset: 16,
    });
  });

  function appendPortfolioItem(containerId, index, branch) {
    // Tìm phần tử DOM theo id
    const container = document.getElementById(containerId);

    if (!container) {
      console.error(`Không tìm thấy phần tử với id: ${containerId}`);
      return;
    }

    // Tạo nội dung HTML
    const htmlContent = `
        <div class="p-0 portfolio_boxes_width ${branch}">
            <div class="portfolio_item">
                <img src="images/${branch}/nexttop-karaoke-${branch}-${index}.jpg" alt="nexttop-karaoke-${branch}-${index}" loading="lazy" />
                <div class="portfolio_hover">
                    <div class="zoom_popup">
                        <a class="img-link" href="images/${branch}/nexttop-karaoke-${branch}-${index}.jpg"> 
                            <i class="flaticon-add-button"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>`;

    // Thêm HTML vào DOM
    container.insertAdjacentHTML("beforeend", htmlContent);
  }

  // Vòng lặp gọi hàm appendPortfolioItem
  function appendMultipleItems(containerId, branch, start, end) {
    for (let i = start; i <= end; i++) {
      appendPortfolioItem(containerId, i, branch);
    }
  }

  appendMultipleItems("portfolio_items", "chu-huy-man", 1, 10);
})(jQuery);
