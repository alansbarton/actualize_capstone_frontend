<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/logout">Logout</router-link>
    </div> -->
    
    <!-- header area start -->
    <header v-if="$route.meta.header != 0">
        <div class="header-top sticky bg-white d-none d-lg-block">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-5">
                        <!-- header top navigation start -->
                        <div class="header-top-navigation">
                            <nav>
                                <ul>
                                    <li class="active"><a href="/">Home</a></li>
                                    <li class="msg-trigger"><a class="msg-trigger-btn" href="#a">message</a>
                                        <div class="message-dropdown" id="a">
                                            <div class="dropdown-title">
                                                <p class="recent-msg">recent message</p>
                                                <div class="message-btn-group">
                                                    <button>New group</button>
                                                    <button>New Message</button>
                                                </div>
                                            </div>
                                            <ul class="dropdown-msg-list">
                                                <li class="msg-list-item d-flex justify-content-between">
                                                    <!-- profile picture end -->
                                                    <div class="profile-thumb">
                                                        <figure class="profile-thumb-middle">
                                                            <img src="assets/images/profile/profile-small-3.jpg" alt="profile picture">
                                                        </figure>
                                                    </div>
                                                    <!-- profile picture end -->

                                                    <!-- message content start -->
                                                    <div class="msg-content">
                                                        <h6 class="author"><a href="/user/1">Mili Raoulin</a></h6>
                                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</p>
                                                    </div>
                                                    <!-- message content end -->

                                                    <!-- message time start -->
                                                    <div class="msg-time">
                                                        <p>25 Apr 2019</p>
                                                    </div>
                                                    <!-- message time end -->
                                                </li>
                                                <li class="msg-list-item d-flex justify-content-between">
                                                    <!-- profile picture end -->
                                                    <div class="profile-thumb">
                                                        <figure class="profile-thumb-middle">
                                                            <img src="assets/images/profile/profile-small-4.jpg" alt="profile picture">
                                                        </figure>
                                                    </div>
                                                    <!-- profile picture end -->

                                                    <!-- message content start -->
                                                    <div class="msg-content">
                                                        <h6 class="author"><a href="profile.html">Jhon Doe</a></h6>
                                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</p>
                                                    </div>
                                                    <!-- message content end -->

                                                    <!-- message time start -->
                                                    <div class="msg-time">
                                                        <p>15 May 2019</p>
                                                    </div>
                                                    <!-- message time end -->
                                                </li>
                                                <li class="msg-list-item d-flex justify-content-between">
                                                    <!-- profile picture end -->
                                                    <div class="profile-thumb">
                                                        <figure class="profile-thumb-middle">
                                                            <img src="assets/images/profile/profile-small-5.jpg" alt="profile picture">
                                                        </figure>
                                                    </div>
                                                    <!-- profile picture end -->

                                                    <!-- message content start -->
                                                    <div class="msg-content">
                                                        <h6 class="author"><a href="profile.html">Jon Wileyam</a></h6>
                                                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default</p>
                                                    </div>
                                                    <!-- message content end -->

                                                    <!-- message time start -->
                                                    <div class="msg-time">
                                                        <p>20 Jun 2019</p>
                                                    </div>
                                                    <!-- message time end -->
                                                </li>
                                            </ul>
                                            <div class="msg-dropdown-footer">
                                                <button>See all in messenger</button>
                                                <button>Mark All as Read</button>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="notification-trigger"><a class="msg-trigger-btn" href="#b">notification</a>
                                        <div class="message-dropdown" id="b">
                                            <div class="dropdown-title">
                                                <p class="recent-msg">Notification</p>
                                                <button>
                                                    <i class="flaticon-settings"></i>
                                                </button>
                                            </div>
                                            <ul class="dropdown-msg-list">
                                                <li class="msg-list-item d-flex justify-content-between">
                                                    <!-- profile picture end -->
                                                    <div class="profile-thumb">
                                                        <figure class="profile-thumb-middle">
                                                            <img src="assets/images/profile/profile-small-3.jpg" alt="profile picture">
                                                        </figure>
                                                    </div>
                                                    <!-- profile picture end -->

                                                    <!-- message content start -->
                                                    <div class="msg-content notification-content">
                                                        <a href="profile.html">Robert Faul</a>,
                                                        <a href="profile.html">william jhon</a>
                                                        <p>and 35 other people reacted to your photo</p>
                                                    </div>
                                                    <!-- message content end -->

                                                    <!-- message time start -->
                                                    <div class="msg-time">
                                                        <p>25 Apr 2019</p>
                                                    </div>
                                                    <!-- message time end -->
                                                </li>
                                                <li class="msg-list-item d-flex justify-content-between">
                                                    <!-- profile picture end -->
                                                    <div class="profile-thumb">
                                                        <figure class="profile-thumb-middle">
                                                            <img src="assets/images/profile/profile-small-4.jpg" alt="profile picture">
                                                        </figure>
                                                    </div>
                                                    <!-- profile picture end -->

                                                    <!-- message content start -->
                                                    <div class="msg-content notification-content">
                                                        <a href="profile.html">Robert mushkil</a>,
                                                        <a href="profile.html">Terry jhon</a>
                                                        <p>and 20 other people reacted to your photo</p>
                                                    </div>
                                                    <!-- message content end -->

                                                    <!-- message time start -->
                                                    <div class="msg-time">
                                                        <p>20 May 2019</p>
                                                    </div>
                                                    <!-- message time end -->
                                                </li>
                                                <li class="msg-list-item d-flex justify-content-between">
                                                    <!-- profile picture end -->
                                                    <div class="profile-thumb">
                                                        <figure class="profile-thumb-middle">
                                                            <img src="assets/images/profile/profile-small-6.jpg" alt="profile picture">
                                                        </figure>
                                                    </div>
                                                    <!-- profile picture end -->

                                                    <!-- message content start -->
                                                    <div class="msg-content notification-content">
                                                        <a href="profile.html">Horijon Mbala</a>,
                                                        <a href="profile.html">Bashu jhon</a>
                                                        <p>and 55 other people reacted to your post</p>
                                                    </div>
                                                    <!-- message content end -->

                                                    <!-- message time start -->
                                                    <div class="msg-time">
                                                        <p>15 Jan 2019</p>
                                                    </div>
                                                    <!-- message time end -->
                                                </li>
                                            </ul>
                                            <div class="msg-dropdown-footer">
                                                <button>See all in messenger</button>
                                                <button>Mark All as Read</button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <!-- header top navigation start -->
                    </div>

                    <div class="col-md-2">
                        <!-- brand logo start -->
                        <div class="brand-logo text-center">
                            <a href="index.html">
                                <img src="assets/images/logo/logo.png" alt="brand logo">
                            </a>
                        </div>
                        <!-- brand logo end -->
                    </div>

                    <div class="col-md-5">
                        <div class="header-top-right d-flex align-items-center justify-content-end">
                            <!-- header top search start -->
                            <div class="header-top-search">
                                <form class="top-search-box">
                                    <input type="text" placeholder="Search" class="top-search-field">
                                    <button class="top-search-btn"><i class="flaticon-search"></i></button>
                                </form>
                            </div>
                            <!-- header top search end -->

                            <!-- profile picture start -->
                            <div class="profile-setting-box">
                                <div class="profile-thumb-small">
                                    <a href="javascript:void(0)" class="profile-triger">
                                        <figure>
                                            <img src="assets/images/profile/profile-small-1.jpg" alt="profile picture">
                                        </figure>
                                    </a>
                                    <div class="profile-dropdown">
                                        <div class="profile-head">
                                            <h5 class="name"><a href="#">{{ current_user.name }}</a></h5>
                                            <a class="mail" href="#">{{ user.email }}</a>
                                        </div>
                                        <div class="profile-body">
                                            <ul>
                                                <li><a href="`/users/1"><i class="flaticon-user"></i>Profile</a></li>
                                                <li><a href="#"><i class="flaticon-message"></i>Inbox</a></li>
                                                <li><a href="#"><i class="flaticon-document"></i>Activity</a></li>
                                            </ul>
                                            <ul>
                                                <li><a href="#"><i class="flaticon-settings"></i>Setting</a></li>
                                                <li><a href="/logout"><i class="flaticon-unlock"></i>Sing out</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- profile picture end -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- header area end -->

    <!-- header area start -->
   <header v-if="$route.meta.header != 0">
        <div class="mobile-header-wrapper sticky d-block d-lg-none">
            <div class="mobile-header position-relative ">
                <div class="mobile-logo">
                    <a href="index.html">
                        <img src="assets/images/logo/logo-white.png" alt="logo">
                    </a>
                </div>
                <div class="mobile-menu w-100">
                    <ul>
                        <li>
                            <button class="notification request-trigger"><i class="flaticon-users"></i>
                                <span>03</span>
                            </button>
                            <ul class="frnd-request-list">
                                <li>
                                    <div class="frnd-request-member">
                                        <figure class="request-thumb">
                                            <a href="profile.html">
                                                <img src="assets/images/profile/profile-midle-1.jpg" alt="proflie author">
                                            </a>
                                        </figure>
                                        <div class="frnd-content">
                                            <h6 class="author"><a href="profile.html">merry watson</a></h6>
                                            <p class="author-subtitle">Works at HasTech</p>
                                            <div class="request-btn-inner">
                                                <button class="frnd-btn">confirm</button>
                                                <button class="frnd-btn delete">delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="frnd-request-member">
                                        <figure class="request-thumb">
                                            <a href="profile.html">
                                                <img src="assets/images/profile/profile-midle-2.jpg" alt="proflie author">
                                            </a>
                                        </figure>
                                        <div class="frnd-content">
                                            <h6 class="author"><a href="profile.html">merry watson</a></h6>
                                            <p class="author-subtitle">Works at HasTech</p>
                                            <div class="request-btn-inner">
                                                <button class="frnd-btn">confirm</button>
                                                <button class="frnd-btn delete">delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="frnd-request-member">
                                        <figure class="request-thumb">
                                            <a href="profile.html">
                                                <img src="assets/images/profile/profile-midle-3.jpg" alt="proflie author">
                                            </a>
                                        </figure>
                                        <div class="frnd-content">
                                            <h6 class="author"><a href="profile.html">merry watson</a></h6>
                                            <p class="author-subtitle">Works at HasTech</p>
                                            <div class="request-btn-inner">
                                                <button class="frnd-btn">confirm</button>
                                                <button class="frnd-btn delete">delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button class="notification"><i class="flaticon-notification"></i>
                                <span>03</span>
                            </button>
                        </li>
                        <li>
                            <button class="chat-trigger notification"><i class="flaticon-chats"></i>
                                <span>04</span>
                            </button>
                            <div class="mobile-chat-box">
                                <div class="live-chat-title">
                                    <!-- profile picture end -->
                                    <div class="profile-thumb">
                                        <a href="profile.html">
                                            <figure class="profile-thumb-small profile-active">
                                                <img src="assets/images/profile/profile-small-15.jpg" alt="profile picture">
                                            </figure>
                                        </a>
                                    </div>
                                    <!-- profile picture end -->
                                    <div class="posted-author">
                                        <h6 class="author"><a href="profile.html">Robart Marloyan</a></h6>
                                        <span class="active-pro">active now</span>
                                    </div>
                                    <div class="live-chat-settings ml-auto">
                                        <button class="chat-settings"><img src="assets/images/icons/settings.png" alt=""></button>
                                        <button class="close-btn"><img src="assets/images/icons/close.png" alt=""></button>
                                    </div>
                                </div>
                                <div class="message-list-inner">
                                    <ul class="message-list custom-scroll">
                                      <!-- <div v-for="message in messages">
                                        <li class="text-friends">
                                            <p>{{message.message}}</p>
                                            <div class="message-time">10 minute ago</div>
                                        </li>
                                      </div> -->
                                        <!-- <li class="text-author">
                                            <p>Many desktop publishing packages and web page editors</p>
                                            <div class="message-time">5 minute ago</div>
                                        </li>
                                        <li class="text-friends">
                                            <p>packages and web page editors </p>
                                            <div class="message-time">2 minute ago</div>
                                        </li>
                                        <li class="text-friends">
                                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                                            <div class="message-time">10 minute ago</div>
                                        </li>
                                        <li class="text-author">
                                            <p>Many desktop publishing packages and web page editors</p>
                                            <div class="message-time">5 minute ago</div>
                                        </li>
                                        <li class="text-friends">
                                            <p>packages and web page editors </p>
                                            <div class="message-time">2 minute ago</div>
                                        </li> -->
                                    </ul>
                                </div>
                                <div class="chat-text-field mob-text-box">
                                    <textarea class="live-chat-field custom-scroll" placeholder="Text Message"></textarea>
                                    <button class="chat-message-send" type="submit" value="submit" v-on:click="createMessage()">
                                        <img src="assets/images/icons/plane.png" alt="">
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li>
                            <button class="search-trigger">
                                <i class="search-icon flaticon-search"></i>
                                <i class="close-icon flaticon-cross-out"></i>
                            </button>
                            <div class="mob-search-box">
                                <form class="mob-search-inner">
                                    <input type="text" placeholder="Search Here" class="mob-search-field">
                                    <button class="mob-search-btn"><i class="flaticon-search"></i></button>
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="mobile-header-profile">
                    <!-- profile picture end -->
                    <div class="profile-thumb profile-setting-box">
                        <a href="javascript:void(0)" class="profile-triger">
                            <figure class="profile-thumb-middle">
                                <img src="assets/images/profile/profile-small-1.jpg" alt="profile picture">
                            </figure>
                        </a>
                        <div class="profile-dropdown text-left">
                            <div class="profile-head">
                                <h5 class="name"><a href="#">Madison Howard</a></h5>
                                <a class="mail" href="#">mailnam@mail.com</a>
                            </div>
                            <div class="profile-body">
                                <ul>
                                    <li><a href="profile.html"><i class="flaticon-user"></i>Profile</a></li>
                                    <li><a href="#"><i class="flaticon-message"></i>Inbox</a></li>
                                    <li><a href="#"><i class="flaticon-document"></i>Activity</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#"><i class="flaticon-settings"></i>Setting</a></li>
                                    <li><a href="signup.html"><i class="flaticon-unlock"></i>Sing out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- profile picture end -->
                </div>
            </div>
        </div>
    </header>
    <!-- header area end -->

    <router-view/>

    <div class="scroll-top not-visible">
      <i class="bi bi-finger-index"></i>
    </div>


  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import ActionCable from "actioncable";

export default {
  data: function() {
    return {
      current_user: "",
      users: [],
      user: [],
      messages: [],
      newMessageBody: "",
    };
  },
  created: function() {
    this.indexMessages();

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
      }
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
        receiver_id: this.$route.params.id,


      };
      axios.post("/api/messages/" + this.$route.params.id, params).then(response => {
        console.log("messages index", response);
        this.newMessageBody = "";
      });
    },
  },
  mounted: function() {
    (function ($) {
      "use strict";

      $(".msg-trigger-btn").on("click", function (event) {
        event.stopPropagation();
        event.preventDefault();
        var $this = $(this);
        var $prevTartget = $(this).parent().siblings().children(".msg-trigger-btn").attr('href');
        var target = $this.attr('href');
        $(target).slideToggle();
        $($prevTartget).slideUp();
        
      });

      //Close When Click Outside
      $('body').on('click', function(e) {
        var $target = e.target;
        if (!$($target).is('.message-dropdown') && !$($target).parents().is('.message-dropdown')) {
          $(".message-dropdown").slideUp("slow");
        }
      });

      //Background Image JS start
      var bgSelector = $(".bg-img");
      bgSelector.each(function (index, elem) {
        var element = $(elem),
          bgSource = element.data('bg');
        element.css('background-image', 'url(' + bgSource + ')');
      });

      // video player active js
      var plyrVideo = new Plyr('.plyr-video'),
        plyrAudio = new Plyr('.plyr-audio'),
        plyrYoutube = new Plyr('.plyr-youtube'),
        plyrVimeo = new Plyr('.plyr-vimeo');
          
      // active profile carousel js
      $('.active-profile-carousel').slick({
        speed: 800,
        slidesToShow: 10,
        prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left-rounded"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right-rounded"></i></button>',
        responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 8,
          }
        }]
      });

      // active profile carousel js
      $('.active-profile-mobile').slick({
        speed: 800,
        slidesToShow: 6,
        arrows: false,
        responsive: [{
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
          }
        }]
      });

      // active profile carousel js
      $('.favorite-item-carousel').slick({
        autoplay: true,
        speed: 800,
        slidesToShow: 5,
        arrows: false,
        responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
          }
        }]
      });

      // live chat box and friend search box active js
      $(".profile-active").on('click', function() {
        $(".chat-output-box").addClass('show');
      });
      $(".search-field").on('click', function() {
        $(".friend-search-list").addClass('show');
      });
      $(".close-btn").on('click', function() {
        var $this = $(this),
          $target = $this.data('close');
        $('.' + $target).removeClass('show');
      });
      
      // mobile header seach box active
      $(".search-trigger").on('click', function() {
        $('.search-trigger, .mob-search-box').toggleClass('show');
      });
      
      $(".chat-trigger, .close-btn").on('click', function() {
        $('.mobile-chat-box').toggleClass('show');
      });
      $(".request-trigger").on('click', function() {
        $('.frnd-request-list').toggleClass('show');
      });

      // mobile friend search active js
      $(".search-toggle-btn").on('click', function() {
        $('.mob-frnd-search-inner').toggleClass('show');
      });

      // profile dropdown triger js
      $('.profile-triger').on('click', function(event) {
        event.stopPropagation();
        $(".profile-dropdown").slideToggle();
      });

      //Close When Click Outside
      $('body').on('click', function(e) {
        var $target = e.target;
        if (!$($target).is('.profile-dropdown') && !$($target).parents().is('.profile-dropdown')) {
          $(".profile-dropdown").slideUp("slow");
        }
      });

      // perfect scroll bar js
      $('.custom-scroll').each(function() {
        var ps = new PerfectScrollbar($(this)[0]);
      });


      // light gallery active js
      $(document).ready(function() {
        $(".img-popup").lightGallery(); 

        // light gallery images
        $(".img-gallery").lightGallery({
          selector: ".gallery-selector",
          hash: false
        }); 
      });

      $('.gallery-toggle').on('click', function () {

        var productThumb = $(this).find(".product-thumb-large-view img"),
          imageSrcLength = productThumb.length,
          images = [];
        for (var i = 0; i < imageSrcLength; i++) {
          images[i] = {"src": productThumb[i].src, "thumb": productThumb[i].src};
        }

        $(this).lightGallery({
          dynamic: true,
          actualSize: false,
          hash: false,
          index: 0,
          dynamicEl: images
        });

      });

      // photo filter active js
      $('.photo-filter').imagesLoaded( function() {
        var $grid = $('.photo-filter, .friends-list').isotope({
        });
        // filter items on button click
        $('.filter-menu').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
          $(this).siblings('.active').removeClass('active');
          $(this).addClass('active');
        });
        
      });

      // nice select active js
      $('select').niceSelect();

      // Scroll to top active js
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
          $('.scroll-top').removeClass('not-visible');
        } else {
          $('.scroll-top').addClass('not-visible');
        }
      });
      $('.scroll-top').on('click', function (event) {
        $('html,body').animate({
          scrollTop: 0
        }, 1000);
      });


      $('#email').bind("cut copy paste",function(e) {
        e.preventDefault();
      });
    
    })(jQuery);


  }
};
</script>