
(function (jQuery) {
    "use strict";

    jQuery(document).ready(function () {

        function activaTav(pill) {
            jQuery(pill).addClass("active show");
        }

        // Sticky header animation and height
        function headerHeight() {
            var height = jQuery("#main-header").height();
            jQuery(".iq-height").css("height", height + "px");
        }

        jQuery(function () {
            var header = jQuery("#main-header");
            var triggerPoint = 80;

            headerHeight();
            jQuery(window).resize(headerHeight);

            jQuery(window).on("scroll", function () {
                var yOffset = jQuery(window).scrollTop();

                if (yOffset >= triggerPoint) {
                    header.addClass("menu-sticky animated slideDown");
                } else {
                    header.removeClass("menu-sticky animated slideDown");
                }
            });
        });

        // Header menu dropdown
        jQuery("[data-toggle=more-toggle]").on("click", function () {
            jQuery(this).next().toggleClass("show");
        });

        // Search, notification and profile dropdowns
        jQuery(document).on("click", function (e) {
            var target = jQuery(e.target);
            var toggle = target.closest(".search-toggle");

            if (toggle.length) {
                var parent = toggle.parent();

                jQuery(".navbar-right li")
                    .not(parent)
                    .removeClass("iq-show");

                jQuery(".navbar-right li .search-toggle")
                    .not(toggle)
                    .removeClass("active");

                parent.toggleClass("iq-show");
                toggle.toggleClass("active");

                e.preventDefault();
            } else if (!target.closest(".iq-sub-dropdown, .search-box").length) {
                jQuery(".navbar-right li").removeClass("iq-show");
                jQuery(".navbar-right li .search-toggle").removeClass("active");
            }
        });

        jQuery(document).on("click", function (event) {
            var trigger = jQuery(".main-header .navbar");

            if (
                trigger.length &&
                !trigger.is(event.target) &&
                !trigger.has(event.target).length
            ) {
                jQuery(".main-header .navbar-collapse").collapse("hide");
                jQuery("body").removeClass("nav-open");
            }
        });

        jQuery(".c-toggler").on("click", function () {
            jQuery("body").addClass("nav-open");
        });

        // Home slider
        if (jQuery.fn.slick && jQuery("#home-slider").length) {
            jQuery("#home-slider").slick({
                autoplay: false,
                speed: 800,
                lazyLoad: "progressive",
                arrows: true,
                dots: false,
                prevArrow:
                    '<div class="slick-nav prev-arrow"><i class="fa fa-chevron-right"></i></div>',
                nextArrow:
                    '<div class="slick-nav next-arrow"><i class="fa fa-chevron-left"></i></div>',
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            dots: true,
                            arrows: false
                        }
                    }
                ]
            });

            if (jQuery.fn.slickAnimation) {
                jQuery("#home-slider").slickAnimation();
            }
        }

        jQuery(".slick-nav").on("click touch", function (e) {
            e.preventDefault();

            var arrow = jQuery(this);

            if (!arrow.hasClass("animate")) {
                arrow.addClass("animate");

                setTimeout(function () {
                    arrow.removeClass("animate");
                }, 1600);
            }
        });

        // Favorites slider
        if (jQuery.fn.slick && jQuery(".favorites-slider").length) {
            jQuery(".favorites-slider").slick({
                dots: false,
                arrows: true,
                infinite: true,
                speed: 300,
                autoplay: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                nextArrow:
                    '<a href="#" class="slick-arrow slick-next"><i class="fa fa-chevron-right"></i></a>',
                prevArrow:
                    '<a href="#" class="slick-arrow slick-prev"><i class="fa fa-chevron-left"></i></a>',
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }

        // Top ten sliders
        if (jQuery.fn.slick && jQuery("#top-ten-slider").length) {
            jQuery("#top-ten-slider").slick({
                slidesToScroll: 1,
                slidesToShow: 1,
                arrows: false,
                fade: true,
                asNavFor: "#top-ten-slider-nav",
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            asNavFor: false,
                            arrows: true,
                            nextArrow:
                                '<button class="NextArrow"><i class="fa fa-angle-right"></i></button>',
                            prevArrow:
                                '<button class="PrevArrow"><i class="fa fa-angle-left"></i></button>'
                        }
                    }
                ]
            });
        }

        if (jQuery.fn.slick && jQuery("#top-ten-slider-nav").length) {
            jQuery("#top-ten-slider-nav").slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: "#top-ten-slider",
                dots: false,
                arrows: true,
                infinite: true,
                vertical: true,
                verticalSwiping: true,
                centerMode: false,
                nextArrow:
                    '<button class="NextArrow"><i class="fa fa-angle-down"></i></button>',
                prevArrow:
                    '<button class="PrevArrow"><i class="fa fa-angle-up"></i></button>',
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            asNavFor: false
                        }
                    }
                ]
            });
        }

        // Trending sliders
        if (jQuery.fn.slick && jQuery("#trending-slider").length) {
            jQuery("#trending-slider").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                draggable: false,
                asNavFor: "#trending-slider-nav"
            });
        }

        if (jQuery.fn.slick && jQuery("#trending-slider-nav").length) {
            jQuery("#trending-slider-nav").slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                asNavFor: "#trending-slider",
                dots: false,
                arrows: true,
                nextArrow:
                    '<a href="#" class="slick-arrow slick-next"><i class="fa fa-chevron-right"></i></a>',
                prevArrow:
                    '<a href="#" class="slick-arrow slick-prev"><i class="fa fa-chevron-left"></i></a>',
                infinite: true,
                centerMode: true,
                centerPadding: 0,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }

        // Episodes carousel
        if (jQuery.fn.owlCarousel && jQuery(".episodes-slider1").length) {
            jQuery(".episodes-slider1").owlCarousel({
                loop: true,
                margin: 20,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                dots: false,
                responsive: {
                    0: { items: 1 },
                    600: { items: 1 },
                    1000: { items: 4 }
                }
            });
        }

        // Trending content heights
        jQuery(".trending-content").each(function () {
            var highestBox = 0;

            jQuery(".tab-pane", this).each(function () {
                if (jQuery(this).height() > highestBox) {
                    highestBox = jQuery(this).height();
                }
            });

            jQuery(".tab-pane", this).height(highestBox);
        });

        // Season dropdown
        if (
            jQuery.fn.select2 &&
            jQuery("select.season-select").length
        ) {
            jQuery("select.season-select").select2({
                theme: "bootstrap4",
                allowClear: false,
                width: "resolve"
            });
        }

        // ==================================================
        // IMPROVEMENT: MY LIST / WATCHLIST
        // ==================================================

        var storageKey = "netflixCloneMyList";
        var myList = [];

        try {
            myList = JSON.parse(localStorage.getItem(storageKey)) || [];
            if (!Array.isArray(myList)) {
                myList = [];
            }
        } catch (error) {
            myList = [];
        }

        // Create the My List section automatically
        var $myListSection = jQuery("#my-list-section");

        if (!$myListSection.length) {
            $myListSection = jQuery(
                '<section id="my-list-section" class="container-fluid my-list-section">' +
                    '<div class="iq-main-header d-flex align-items-center justify-content-between">' +
                        '<h4 class="main-title">My List <span id="my-list-count">(0)</span></h4>' +
                    '</div>' +
                    '<div id="my-list-grid" class="my-list-grid"></div>' +
                    '<p id="my-list-empty" class="my-list-empty">Your list is empty. Click the + icon on a movie to save it here.</p>' +
                '</section>'
            );

            var $mainContent = jQuery(".main-content");

            if ($mainContent.length) {
                $mainContent.prepend($myListSection);
            } else {
                jQuery("body").append($myListSection);
            }
        }

        // Save list to browser storage
        function saveMyList() {
            try {
                localStorage.setItem(storageKey, JSON.stringify(myList));
            } catch (error) {
                console.warn("Could not save My List in localStorage.", error);
            }
        }

        // Find a movie card's information
        function getMovieData($card) {
            var title = $card.find(".iq-title a").first().text().trim();

            if (!title) {
                title = $card.find(".iq-title").first().text().trim();
            }

            var image = $card.find(".img-box img").first().attr("src") || "";
            var duration = $card.find(".movie-time span").first().text().trim();
            var rating = $card.find(".badge").first().text().trim();

            if (!title) {
                title = $card.find("img").first().attr("alt") || "Untitled movie";
            }

            return {
                id: title.toLowerCase(),
                title: title,
                image: image,
                duration: duration,
                rating: rating
            };
        }

        function isSaved(movie) {
            return myList.some(function (item) {
                return item.id === movie.id;
            });
        }

        // Render saved movie cards
        function renderMyList() {
            var $grid = jQuery("#my-list-grid");
            $grid.empty();

            jQuery("#my-list-count").text("(" + myList.length + ")");
            jQuery("#my-list-empty").toggle(myList.length === 0);

            myList.forEach(function (movie) {
                var $card = jQuery("<article>").addClass("my-list-card");
                var $image = jQuery("<img>")
                    .attr("src", movie.image)
                    .attr("alt", movie.title);

                var $title = jQuery("<h5>")
                    .text(movie.title);

                var $details = jQuery("<p>")
                    .text([movie.rating, movie.duration].filter(Boolean).join(" • "));

                var $remove = jQuery("<button>")
                    .attr("type", "button")
                    .addClass("my-list-remove")
                    .attr("data-remove-movie", movie.id)
                    .html('<i class="fa fa-trash"></i> Remove');

                $card.append($image, $title, $details, $remove);
                $grid.append($card);
            });

            // Update + icons on movie cards
            jQuery(".music-play-lists li").has("i.fa-plus").each(function () {
                var $button = jQuery(this);
                var $card = $button.closest(".block-images");
                var movie = getMovieData($card);
                var saved = isSaved(movie);

                $button.toggleClass("my-list-added", saved);
                $button.attr(
                    "title",
                    saved ? "Remove from My List" : "Add to My List"
                );
                $button.attr("aria-label", saved ? "Remove from My List" : "Add to My List");

                var $icon = $button.find("i.fa-plus, i.fa-check").first();

                if ($icon.length) {
                    $icon.toggleClass("fa-plus", !saved);
                    $icon.toggleClass("fa-check", saved);
                }
            });
        }

        // Add/remove a movie using the existing + buttons
        jQuery(document).on(
            "click",
            ".music-play-lists li:has(i.fa-plus), .music-play-lists li.my-list-added",
            function (event) {
                event.preventDefault();
                event.stopPropagation();

                var $card = jQuery(this).closest(".block-images");
                var movie = getMovieData($card);

                if (!movie.title || movie.title === "Untitled movie") {
                    return;
                }

                var existingIndex = myList.findIndex(function (item) {
                    return item.id === movie.id;
                });

                if (existingIndex >= 0) {
                    myList.splice(existingIndex, 1);
                } else {
                    myList.push(movie);
                }

                saveMyList();
                renderMyList();
            }
        );

        // Remove a movie from My List
        jQuery(document).on("click", "[data-remove-movie]", function () {
            var id = jQuery(this).attr("data-remove-movie");

            myList = myList.filter(function (movie) {
                return movie.id !== id;
            });

            saveMyList();
            renderMyList();
        });

        // Initial render
        renderMyList();

    });
})(jQuery);

jQuery(function ($) {
  // Create the search results area
  if (!$("#smart-search-results").length) {
    $(".main-content").before(`
      <section id="smart-search-results" class="container-fluid">
        <div class="d-flex align-items-center justify-content-between flex-wrap mb-3">
          <h4 id="smart-search-heading">Search Movies</h4>
          <button id="clear-smart-search" type="button">Clear Search ✕</button>
        </div>
        <div id="smart-search-grid"></div>
        <p id="smart-search-empty">No movies found. Try another title.</p>
      </section>
    `);
  }

  const $results = $("#smart-search-results");
  const $grid = $("#smart-search-grid");
  const $empty = $("#smart-search-empty");

  // Collect movies from the existing movie cards
  const movies = [];

  $(".block-images").each(function () {
    const $card = $(this);
    const $title = $card.find(".iq-title a, .block-description h5").first();
    const $img = $card.find(".img-box img, > a > img").first();

    if (!$title.length || !$img.length) return;

    const title = $title.text().trim();
    const image = $img.attr("src");

    if (!title || !image) return;

    const $section = $card.closest("section");
    const category = $section.find(".main-title").first().text().trim()
      || "Movies & Shows";

    movies.push({
      title: title,
      image: image,
      category: category
    });
  });

  // Remove duplicate entries
  const uniqueMovies = movies.filter((movie, index, list) =>
    list.findIndex(item =>
      item.title.toLowerCase() === movie.title.toLowerCase()
    ) === index
  );

  function runSearch(query) {
    const term = query.trim().toLowerCase();

    // Empty search: restore the normal homepage
    if (!term) {
      $results.hide();
      $(".main-content").show();
      return;
    }

    $(".main-content").hide();
    $results.show();
    $("#smart-search-heading").text("Search Results");

    const matches = uniqueMovies.filter(movie =>
      movie.title.toLowerCase().includes(term) ||
      movie.category.toLowerCase().includes(term)
    );

    $grid.empty();

    matches.forEach(movie => {
      const $card = $("<div>").addClass("smart-search-card");
      $("<img>").attr("src", movie.image).attr("alt", movie.title).appendTo($card);
      $("<h5>").text(movie.title).appendTo($card);
      $("<p>").text(movie.category).appendTo($card);
      $grid.append($card);
    });

    $empty.toggle(matches.length === 0);
  }

  // Connect both desktop and mobile search inputs
  $(".search-input").on("input", function () {
    const query = $(this).val();
    $(".search-input").not(this).val(query);
    runSearch(query);
  });

  // Prevent the search form from refreshing the page
  $(".searchbox").on("submit", function (event) {
    event.preventDefault();
    runSearch($(this).find(".search-input").val());
  });

  $("#clear-smart-search").on("click", function () {
    $(".search-input").val("");
    runSearch("");
  });

  $results.hide();
});
jQuery(function ($) {

    // 1. Create category buttons only if they don't already exist
    if (!$("#genre-filter-bar").length) {
        const genres = ["All", "Action", "Comedy", "Horror", "Drama"];
        const $bar = $('<div id="genre-filter-bar"></div>');

        genres.forEach(function (genre) {
            $("<button>")
                .addClass("genre-filter-btn")
                .attr("data-genre", genre)
                .text(genre)
                .toggleClass("active", genre === "All")
                .appendTo($bar);
        });

        $(".main-content").prepend($bar);
    }

    const $buttons = $("#genre-filter-bar .genre-filter-btn");

    // 2. Only filter original movie sections, not My List or sports
    const sections = "#iq-favorites, #iq-upcoming-movie, #iq-topten, #iq-trending";

    // 3. Movie genre mapping
    const genreMap = {
        "insidious": "Horror",
        "the conjuring": "Horror",
        "stranger things": "Horror",
        "laxmii": "Horror",
        "war": "Action",
        "mulan": "Action",
        "doctor strange": "Action",
        "captain america": "Action",
        "avengers": "Action",
        "harry potter": "Action",
        "mission impossible": "Action",
        "mission mangal": "Drama",
        "five feet apart": "Drama",
        "chhichore": "Comedy",
        "frozen": "Comedy",
        "dora and the lost city of gold": "Comedy",
        "bojack horseman": "Comedy",
        "bojack horsemen": "Comedy",
        "scam 1992": "Drama",
        "the queen's gambit": "Drama",
        "peaky blinders": "Drama"
    };

    function getTitle($slide) {
        return $slide
            .find(".iq-title a, .block-description h5, .block-description h6, h5, h6")
            .first()
            .text()
            .trim()
            .toLowerCase()
            .replace(/\s+/g, " ");
    }

    function getGenre($slide) {
        const title = getTitle($slide);

        for (const movie in genreMap) {
            if (title === movie || title.includes(movie)) {
                return genreMap[movie];
            }
        }

        return "Other";
    }

    // 4. Apply genre filter
    function applyGenre(selectedGenre) {

        $(sections).find(".favorites-slider, #top-ten-slider, #top-ten-slider-nav, #trending-slider")
            .each(function () {
                const $slider = $(this);

                if (!$slider.hasClass("slick-initialized")) return;

                // Clear the previous filter before applying a new one
                $slider.slick("slickUnfilter");

                if (selectedGenre !== "All") {
                    $slider.slick("slickFilter", function () {
                        return getGenre($(this)) === selectedGenre;
                    });
                }

                $slider.slick("setPosition");
            });

        // Handle non-Slick movie cards only
        $(sections).find(".block-images").each(function () {
            const $card = $(this);
            const $slide = $card.closest("li, .slide-item");
            const $slider = $slide.closest(".slick-initialized");

            if ($slider.length) return;

            const matches =
                selectedGenre === "All" ||
                getGenre($card) === selectedGenre;

            $slide.toggle(matches);
        });
    }

    // 5. Category button click
    $buttons.off("click.netflixCategory").on("click.netflixCategory", function (event) {
        event.preventDefault();

        const selectedGenre =
            $(this).attr("data-genre") || $(this).text().trim();

        $buttons.removeClass("active");
        $(this).addClass("active");

        applyGenre(selectedGenre);
    });

    // 6. Show all movies when the page first loads
    applyGenre("All");

});