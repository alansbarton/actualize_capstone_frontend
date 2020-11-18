<template>
  <main>
    <div class="main-wrapper pb-0 mb-0">
      <div class="timeline-wrapper">
        <div class="timeline-header">
          <div class="container-fluid p-0">
            <div class="row no-gutters align-items-center">
              <div class="col-lg-6">
                <div class="timeline-logo-area d-flex align-items-center">
                  <div class="timeline-logo">
                    <a href="index.html">
                      <img src="assets/images/logo/logo.png" alt="timeline logo" />
                    </a>
                  </div>
                  <div class="timeline-tagline">
                    <h6 class="tagline">This icon doesnt work</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="login-area">
                  <div class="row align-items-center">
                    <div class="col-12 col-sm">
                      <input type="text" placeholder="Email or Userame" class="single-field" v-model="email" />
                    </div>
                    <div class="col-12 col-sm">
                      <input type="password" placeholder="Password" class="single-field" v-model="password" />
                    </div>
                    <div class="col-12 col-sm-auto">
                      <input type="submit" class="btn btn-primary" value="Submit" v-on:click="submitLogin()" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline-page-wrapper">
          <div class="container-fluid p-0">
            <div class="row no-gutters">
              <div class="col-lg-6 order-2 order-lg-1">
                <div class="timeline-bg-content bg-img" data-bg="assets/images/timeline/adda-timeline.jpg">
                  <h3 class="timeline-bg-title">Let’s find your next belay partner!</h3>
                </div>
              </div>
              <div class="col-lg-6 order-1 order-lg-2 d-flex align-items-center justify-content-center">
                <div class="signup-form-wrapper">
                  <h1 class="create-acc text-center">Create An Account</h1>
                  <div class="signup-inner text-center">
                    <h3 class="title">Welcome to Climbers</h3>

                    <form class="signup-inner--form" v-on:submit.prevent="submitSignup()">
                      <div class="row">
                        <div class="col-12">
                          <input type="email" class="single-field" placeholder="Email" v-model="email" />
                        </div>
                        <div class="col-md-6">
                          <input type="text" class="single-field" placeholder="First Name" v-model="firstName" />
                        </div>
                        <div class="col-md-6">
                          <input type="text" class="single-field" placeholder="Last Name" v-model="lastName" />
                        </div>
                        <div class="col-12">
                          <input type="password" class="single-field" placeholder="Password" v-model="passwordCreate" />
                        </div>
                        <div class="col-12">
                          <input
                            type="password"
                            class="single-field"
                            placeholder="Password Confirmation"
                            v-model="passwordConfirmation"
                          />
                        </div>
                        <div class="col-md-6">
                          <select class="nice-select" name="sortby">
                            <option value="trending">Font Scale</option>
                            <option value="sales">5.9</option>
                            <option value="sales">5.10</option>
                            <option value="sales">5.11</option>
                            <option value="sales">5.12</option>
                            <option value="sales">5.13</option>
                          </select>
                        </div>
                        <div class="col-md-6">
                          <select class="nice-select" name="sortby">
                            <option value="trending">Victor scale</option>
                            <option value="sales">V1</option>
                            <option value="sales">V2</option>
                            <option value="sales">V3</option>
                            <option value="sales">V4</option>
                            <option value="sales">V5</option>
                            <option value="sales">V6</option>
                            <option value="sales">V7</option>
                          </select>
                        </div>
                        <div class="col-12">
                          <select class="nice-select" name="sortby">
                            <option value="trending">State</option>
                            <option value="sales">CT</option>
                            <option value="sales">RI</option>
                            <option value="sales">FL</option>
                            <option value="sales">CO</option>
                            <option value="sales">TN</option>
                            <option value="sales">GA</option>
                            <option value="sales">SC</option>
                          </select>
                        </div>
                        <div class="col-12">
                          <input type="submit" class="submit-btn" value="Submit" />
                        </div>
                      </div>
                      <h6 class="terms-condition">
                        I have read & accepted the
                        <a href="#">terms of use</a>
                      </h6>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      passwordCreate: "",
      errors: [],
    };
  },
  methods: {
    submitSignup: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.passwordCreate,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/home");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    submitLogin: function() {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/home");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
  mounted: function() {
    $(".msg-trigger-btn").on("click", function(event) {
      event.stopPropagation();
      event.preventDefault();
      var $this = $(this);
      var $prevTartget = $(this)
        .parent()
        .siblings()
        .children(".msg-trigger-btn")
        .attr("href");
      var target = $this.attr("href");
      $(target).slideToggle();
      $($prevTartget).slideUp();
    });

    //Close When Click Outside
    $("body").on("click", function(e) {
      var $target = e.target;
      if (
        !$($target).is(".message-dropdown") &&
        !$($target)
          .parents()
          .is(".message-dropdown")
      ) {
        $(".message-dropdown").slideUp("slow");
      }
    });

    //Background Image JS start
    var bgSelector = $(".bg-img");
    bgSelector.each(function(index, elem) {
      var element = $(elem),
        bgSource = element.data("bg");
      element.css("background-image", "url(" + bgSource + ")");
    });

    // video player active js
    var plyrVideo = new Plyr(".plyr-video"),
      plyrAudio = new Plyr(".plyr-audio"),
      plyrYoutube = new Plyr(".plyr-youtube"),
      plyrVimeo = new Plyr(".plyr-vimeo");

    //   active profile carousel js
    $(".active-profile-carousel").slick({
      speed: 800,
      slidesToShow: 10,
      prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left-rounded"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right-rounded"></i></button>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 8,
          },
        },
      ],
    });

    // active profile carousel js
    $(".active-profile-mobile").slick({
      speed: 800,
      slidesToShow: 6,
      arrows: false,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
          },
        },
      ],
    });

    // active profile carousel js
    $(".favorite-item-carousel").slick({
      autoplay: true,
      speed: 800,
      slidesToShow: 5,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });

    // live chat box and friend search box active js
    $(".profile-active").on("click", function() {
      $(".chat-output-box").addClass("show");
    });
    $(".search-field").on("click", function() {
      $(".friend-search-list").addClass("show");
    });
    $(".close-btn").on("click", function() {
      var $this = $(this),
        $target = $this.data("close");
      $("." + $target).removeClass("show");
    });

    // mobile header seach box active
    $(".search-trigger").on("click", function() {
      $(".search-trigger, .mob-search-box").toggleClass("show");
    });

    $(".chat-trigger, .close-btn").on("click", function() {
      $(".mobile-chat-box").toggleClass("show");
    });
    $(".request-trigger").on("click", function() {
      $(".frnd-request-list").toggleClass("show");
    });

    // mobile friend search active js
    $(".search-toggle-btn").on("click", function() {
      $(".mob-frnd-search-inner").toggleClass("show");
    });

    // profile dropdown triger js
    $(".profile-triger").on("click", function(event) {
      event.stopPropagation();
      $(".profile-dropdown").slideToggle();
    });

    //Close When Click Outside
    $("body").on("click", function(e) {
      var $target = e.target;
      if (
        !$($target).is(".profile-dropdown") &&
        !$($target)
          .parents()
          .is(".profile-dropdown")
      ) {
        $(".profile-dropdown").slideUp("slow");
      }
    });

    // perfect scroll bar js
    $(".custom-scroll").each(function() {
      var ps = new PerfectScrollbar($(this)[0]);
    });

    // light gallery active js
    $(document).ready(function() {
      $(".img-popup").lightGallery();

      // light gallery images
      $(".img-gallery").lightGallery({
        selector: ".gallery-selector",
        hash: false,
      });
    });

    $(".gallery-toggle").on("click", function() {
      var productThumb = $(this).find(".product-thumb-large-view img"),
        imageSrcLength = productThumb.length,
        images = [];
      for (var i = 0; i < imageSrcLength; i++) {
        images[i] = { src: productThumb[i].src, thumb: productThumb[i].src };
      }

      $(this).lightGallery({
        dynamic: true,
        actualSize: false,
        hash: false,
        index: 0,
        dynamicEl: images,
      });
    });

    // photo filter active js
    $(".photo-filter").imagesLoaded(function() {
      var $grid = $(".photo-filter, .friends-list").isotope({});
      // filter items on button click
      $(".filter-menu").on("click", "button", function() {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
        $(this)
          .siblings(".active")
          .removeClass("active");
        $(this).addClass("active");
      });
    });

    // nice select active js
    $("select").niceSelect();

    // Scroll to top active js
    $(window).on("scroll", function() {
      if ($(this).scrollTop() > 600) {
        $(".scroll-top").removeClass("not-visible");
      } else {
        $(".scroll-top").addClass("not-visible");
      }
    });
    $(".scroll-top").on("click", function(event) {
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    });

    $("#email").bind("cut copy paste", function(e) {
      e.preventDefault();
    });
  },
};
</script>
