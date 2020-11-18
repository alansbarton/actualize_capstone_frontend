<template>
  <div class="home">
    <main>
      <div class="main-wrapper">
        <!-- profile banner area start -->
        <div class="profile-banner-large bg-img" :data-bg="user.current_user_images[1].image_url"></div>
        <!-- profile banner area end -->

        <!-- profile menu area start -->
        <div class="profile-menu-area secondary-navigation-style bg-white">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-3 col-md-3">
                <div class="profile-picture-box">
                  <figure class="profile-picture">
                    <a href="#">
                      <img :src="user.current_user_images[0].image_url" alt="profile picture" />
                    </a>
                  </figure>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 offset-lg-1">
                <div class="profile-menu-wrapper">
                  <div class="main-menu-inner header-top-navigation">
                    <nav>
                      <ul class="main-menu">
                        <li class="active"><a href="#">timeline</a></li>
                        <li><a href="/Map">map</a></li>
                        <li><a href="photos.html">photos</a></li>
                        <li><a href="friends.html">friends</a></li>
                        <li><a href="about.html">more</a></li>
                        <!-- <li class="d-inline-block d-md-none"><a href="profile.html">edit profile</a></li> -->
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 d-none d-md-block">
                <div class="profile-edit-panel">
                  <button class="edit-btn">edit profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- profile menu area end -->

        <!-- sendary menu start -->
        <div class="menu-secondary">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="secondary-menu-wrapper secondary-menu-2 bg-white">
                  <div class="page-title-inner">
                    <h4 class="page-title">friends (1250)</h4>
                  </div>
                  <div class="filter-menu">
                    <button class="active" data-filter="*">all</button>
                    <button data-filter=".recently">recently</button>
                    <button data-filter=".relative">relative</button>
                    <button data-filter=".collage">collage</button>
                    <button data-filter=".request">request</button>
                  </div>
                  <div class="post-settings-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="post-settings arrow-shape">
                      <ul>
                        <li><button>edit profile</button></li>
                        <li><button>activity log</button></li>
                        <li><button>embed adda</button></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- sendary menu end -->

        <!-- photo section start -->
        <div class="friends-section mt-20">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="content-box friends-zone">
                  <div class="row mt--20 friends-list">
                    <div class="col-lg-3 col-sm-6 recently request" v-for="user in users">
                      <div class="friend-list-view">
                        <!-- profile picture end -->
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-middle">
                              <img v-bind:src="user.images.image_url" alt="profile picture" />
                            </figure>
                          </a>
                        </div>
                        <!-- profile picture end -->

                        <div class="posted-author">
                          <h6 class="author">
                            <router-link v-bind:to="`/users/${user.id}`">{{ user.name }}</router-link>
                          </h6>
                          <button class="add-frnd">add friend</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- photo section end -->
      </div>
    </main>

    <!-- Scroll to top start -->
    <div class="scroll-top not-visible">
      <i class="bi bi-finger-index"></i>
    </div>
    <!-- Scroll to Top End -->
    <!-- footer area start -->
    <footer class="d-none d-lg-block">
      <div class="footer-area reveal-footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="footer-wrapper">
                <div class="footer-card position-relative">
                  <div class="friends-search">
                    <form class="search-box">
                      <input
                        type="text"
                        placeholder="Search Your Friends"
                        class="search-field"
                        v-model="searchFilter"
                      />
                      <button class="search-btn"><i class="flaticon-search"></i></button>
                    </form>
                  </div>
                  <div class="friend-search-list">
                    <div class="frnd-search-title">
                      <button class="frnd-search-icon"><i class="flaticon-settings"></i></button>
                      <p>search friends</p>
                      <button class="close-btn" data-close="friend-search-list">
                        <i class="flaticon-cross-out"></i>
                      </button>
                    </div>
                    <div class="frnd-search-inner custom-scroll">
                      <ul>
                        <li
                          v-for="user in filterBy(
                            users,
                            searchFilter,
                            'name',
                            'location',
                            'victor_scale',
                            'font_scale'
                          )"
                          class="d-flex align-items-center profile-active"
                          v-on:click="selectedUser = user"
                        >
                          <!-- profile picture end -->
                          <div class="profile-thumb active">
                            <a href="#">
                              <figure class="profile-thumb-small">
                                <img :src="user.images.image_url" alt="profile picture" />
                              </figure>
                            </a>
                          </div>
                          <!-- profile picture end -->

                          <div class="posted-author">
                            <h6 class="author">{{ user.name }}</h6>
                            <p>{{ user.location }}</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card card-small mb-0 active-profile-wrapper">
                  <div class="active-profiles-wrapper">
                    <div class="active-profile-carousel slick-row-20 slick-arrow-style">
                      <!-- profile picture end -->
                      <div v-for="user in users" class="single-slide" v-on:click="selectedUser = user">
                        <div class="profile-thumb active profile-active">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img :src="user.images.image_url" alt="profile picture" />
                            </figure>
                          </a>
                        </div>
                      </div>
                      <!-- profile picture end -->
                    </div>
                  </div>
                </div>
                <div class="footer-card position-relative">
                  <div class="live-chat-inner">
                    <div class="chat-text-field">
                      <textarea
                        class="live-chat-field custom-scroll"
                        placeholder="Text Message"
                        v-model="newMessageBody"
                      ></textarea>
                      <button class="chat-message-send" type="submit" value="submit" v-on:click="createMessage()">
                        <img src="assets/images/icons/plane.png" alt="" />
                      </button>
                    </div>
                    <div class="chat-output-box">
                      <div class="live-chat-title">
                        <!-- profile picture end -->
                        <div class="profile-thumb active">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img :src="selectedUser.images.image_url" alt="profile picture" />
                            </figure>
                          </a>
                        </div>
                        <!-- profile picture end -->
                        <div class="posted-author">
                          <h6 class="author">
                            <a href="profile.html">{{ selectedUser.name }}</a>
                          </h6>
                          <span class="active-pro">active now</span>
                        </div>
                        <div class="live-chat-settings ml-auto">
                          <button class="chat-settings"><i class="flaticon-settings"></i></button>
                          <button class="close-btn" data-close="chat-output-box">
                            <i class="flaticon-cross-out"></i>
                          </button>
                        </div>
                      </div>
                      <div class="message-list-inner">
                        <ul class="message-list custom-scroll">
                          <li
                            :class="{
                              'text-friends': selectedUser.id === message.sender_id,
                              'text-author': selectedUser.id !== message.sender_id,
                            }"
                            v-for="message in selectedUser.messages"
                          >
                            <p>
                              {{ message.message }}
                            </p>
                            <div class="message-time">{{ message.created_at }}</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- footer area end -->
    <!-- footer area start -->
    <footer class="d-block d-lg-none">
      <div class="footer-area reveal-footer">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="mobile-footer-inner d-flex">
                <div class="mobile-frnd-search">
                  <button class="search-toggle-btn"><i class="flaticon-search"></i></button>
                </div>
                <div class="mob-frnd-search-inner">
                  <form class="mob-frnd-search-box d-flex">
                    <input type="text" placeholder="Search Your Friends" class="mob-frnd-search-field" />
                  </form>
                </div>
                <div class="card card-small mb-0 active-profile-mob-wrapper">
                  <div class="active-profiles-mob-wrapper slick-row-10">
                    <div class="active-profile-mobile">
                      <!-- profile picture end -->
                      <div class="single-slide">
                        <div class="profile-thumb active profile-active">
                          <a href="#">
                            <figure class="profile-thumb-small profile-active">
                              <img src="assets/images/profile/profile-small-1.jpg" alt="profile picture" />
                            </figure>
                          </a>
                        </div>
                      </div>
                      <!-- profile picture end -->

                      <!-- profile picture end -->
                      <div class="single-slide">
                        <div class="profile-thumb active profile-active">
                          <a href="javascript:void(0)">
                            <figure class="profile-thumb-small profile-active">
                              <img src="assets/images/profile/profile-small-8.jpg" alt="profile picture" />
                            </figure>
                          </a>
                        </div>
                      </div>

                      <!-- profile picture end -->
                      <div class="single-slide">
                        <div class="profile-thumb active profile-active">
                          <a href="javascript:void(0)">
                            <figure class="profile-thumb-small profile-active">
                              <img src="assets/images/profile/profile-small-2.jpg" alt="profile picture" />
                            </figure>
                          </a>
                        </div>
                      </div>
                      <!-- profile picture end -->

                      <!-- profile picture end -->
                      <div class="single-slide">
                        <div class="profile-thumb active profile-active">
                          <a href="javascript:void(0)">
                            <figure class="profile-thumb-small profile-active">
                              <img src="assets/images/profile/profile-small-3.jpg" alt="profile picture" />
                            </figure>
                          </a>
                        </div>
                      </div>
                      <!-- profile picture end -->

                      <!-- profile picture end -->
                      <div class="single-slide">
                        <div class="profile-thumb active profile-active">
                          <a href="javascript:void(0)">
                            <figure class="profile-thumb-small profile-active">
                              <img src="assets/images/profile/profile-small-4.jpg" alt="profile picture" />
                            </figure>
                          </a>
                        </div>
                      </div>
                      <!-- profile picture end -->

                      <!-- profile picture end -->
                      <div class="single-slide">
                        <div class="profile-thumb active profile-active">
                          <a href="javascript:void(0)">
                            <figure class="profile-thumb-small profile-active">
                              <img src="assets/images/profile/profile-small-5.jpg" alt="profile picture" />
                            </figure>
                          </a>
                        </div>
                      </div>
                      <!-- profile picture end -->

                      <!-- profile picture end -->
                      <div class="single-slide">
                        <div class="profile-thumb active profile-active">
                          <a href="javascript:void(0)">
                            <figure class="profile-thumb-small profile-active">
                              <img src="assets/images/profile/profile-small-9.jpg" alt="profile picture" />
                            </figure>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- footer area end -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import ActionCable from "actioncable";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],

  data: function() {
    return {
      searchFilter: "",
      users: [],
      messages: [],
      newMessageBody: "",
      selectedUser: {
        id: "",
        messages: [],
        images: {
          image_url: "",
        },
      },
      user: {
        current_user_images: [{}, {}],
      },
    };
  },
  created: function() {
    this.indexUsers();
    this.showCurrentUser();
    // this.indexMessages();

    var cable = ActionCable.createConsumer("ws://localhost:3000/cable");

    cable.subscriptions.create("MessagesChannel", {
      connected: () => {
        // Called when the subscription is ready for use on the server
        console.log("Connected to MessagesChannel");
      },
      disconnected: () => {
        // Called when the subscription has been terminated by the server
      },
      received: data => {
        // Called when there's incoming data on the websocket for this channel
        console.log("Data from MessagesChannel:", data);
        // todo: Fix web sockets
        this.messages.unshift(data); // update the messages in real time
      },
    });
  },
  methods: {
    indexMessages: function() {
      axios.get("/api/messages/" + this.$route.params.id).then(response => {
        console.log("messages index", response);
        this.messages = response.data;
      });
    },

    createMessage: function() {
      var params = {
        message: this.newMessageBody,
        receiver_id: this.selectedUser.id,
      };
      axios.post("/api/messages/" + this.$route.params.id, params).then(response => {
        console.log("messages index", response);
        this.newMessageBody = "";
      });
    },

    indexUsers: function() {
      axios.get("/api/users").then(response => {
        console.log("Users index", response);
        this.users = response.data;
        this.$nextTick(() => {
          this.setUpTheme();
        });
      });
    },

    showCurrentUser: function() {
      axios.get("/api/current_user").then(response => {
        console.log("user show", response);
        this.user = response.data;
      });
    },

    setUpTheme: function() {
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
  },
};
</script>
