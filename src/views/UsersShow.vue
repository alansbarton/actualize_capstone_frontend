<template>
  <div class="users-show">
    <!-- <div>
      <h3>{{ user.name }}</h3>
      
      <p>Climbing experiance: {{ user.years_experiance }} years</p>
      <p>skill level: {{ user.font_scale }} and {{ user.victor_scale }}</p> -->
    <!-- <p v-for="climbing_style in climbing_styles">{{ climbing_style.name }}</p> -->
    <!-- <p>area: {{ user.location }}</p>
      <p>{{ user.description }}</p>
      <router-link v-bind:to="`/messages/${user.id}`">message</router-link> | 
      <router-link v-bind:to="`/`">All users</router-link>
    </div> -->
    <main>
      <div class="main-wrapper">
        <!-- <div class="profile-banner-large bg-img" data-bg="/assets/images/banner/profile-banner.jpg"></div> -->

        <div class="profile-banner-large bg-img" :data-bg="user.images[1].image_url"></div>
        <div class="profile-menu-area bg-white">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-3 col-md-3">
                <div class="profile-picture-box">
                  <figure class="profile-picture">
                    <a href="#">
                      <img :src="user.images[0].image_url" alt="profile picture" />
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
                        <li class="d-inline-block d-md-none"><a href="profile.html">edit profile</a></li>
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
        <div class="container">
          <div class="row">
            <div class="col-lg-3 order-2 order-lg-1">
              <aside class="widget-area profile-sidebar">
                <!-- widget single item start -->
                <div class="card widget-item">
                  <h4 class="widget-title">{{ user.name }}</h4>
                  <div class="widget-body">
                    <div class="about-author">
                      <p>
                        {{ user.description }}
                      </p>
                      <ul class="author-into-list">
                        <li>
                          <a href="#">
                            <i class="bi bi-office-bag"></i>
                            Sport/Boulder Climber
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="bi bi-home"></i>
                            {{ user.location }}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="bi bi-heart-beat"></i>
                            {{ user.victor_scale }} / {{ user.font_scale }}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- widget single item end -->

                <!-- widget single item start -->
                <div class="card widget-item">
                  <h4 class="widget-title">Sweets Memories</h4>
                  <div class="widget-body">
                    <div class="sweet-galley img-gallery">
                      <div class="row row-5">
                        <div class="col-4">
                          <div class="gallery-tem">
                            <figure class="post-thumb">
                              <a class="gallery-selector" href="/assets/images/gallery/gallery-1.jpg">
                                <img src="/assets/images/gallery/gallery-1.jpg" alt="sweet memory" />
                              </a>
                            </figure>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="gallery-tem">
                            <figure class="post-thumb">
                              <a class="gallery-selector" href="/assets/images/gallery/gallery-2.jpg">
                                <img src="/assets/images/gallery/gallery-2.jpg" alt="sweet memory" />
                              </a>
                            </figure>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="gallery-tem">
                            <figure class="post-thumb">
                              <a class="gallery-selector" href="/assets/images/gallery/gallery-3.jpg">
                                <img src="/assets/images/gallery/gallery-3.jpg" alt="sweet memory" />
                              </a>
                            </figure>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="gallery-tem">
                            <figure class="post-thumb">
                              <a class="gallery-selector" href="/assets/images/gallery/gallery-4.jpg">
                                <img src="/assets/images/gallery/gallery-4.jpg" alt="sweet memory" />
                              </a>
                            </figure>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="gallery-tem">
                            <figure class="post-thumb">
                              <a class="gallery-selector" href="/assets/images/gallery/gallery-5.jpg">
                                <img src="/assets/images/gallery/gallery-5.jpg" alt="sweet memory" />
                              </a>
                            </figure>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="gallery-tem">
                            <figure class="post-thumb">
                              <a class="gallery-selector" href="/assets/images/gallery/gallery-6.jpg">
                                <img src="/assets/images/gallery/gallery-6.jpg" alt="sweet memory" />
                              </a>
                            </figure>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="gallery-tem">
                            <figure class="post-thumb">
                              <a class="gallery-selector" href="/assets/images/gallery/gallery-7.jpg">
                                <img src="/assets/images/gallery/gallery-7.jpg" alt="sweet memory" />
                              </a>
                            </figure>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="gallery-tem">
                            <figure class="post-thumb">
                              <a class="gallery-selector" href="/assets/images/gallery/gallery-8.jpg">
                                <img src="/assets/images/gallery/gallery-8.jpg" alt="sweet memory" />
                              </a>
                            </figure>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="gallery-tem">
                            <figure class="post-thumb">
                              <a class="gallery-selector" href="/assets/images/gallery/gallery-9.jpg">
                                <img src="/assets/images/gallery/gallery-9.jpg" alt="sweet memory" />
                              </a>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- widget single item end -->

                <!-- widget single item start -->
                <div class="card widget-item">
                  <h4 class="widget-title">page you may like</h4>
                  <div class="widget-body">
                    <ul class="like-page-list-wrapper">
                      <li class="unorder-list">
                        <!-- profile picture end -->
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img src="/assets/images/profile/profile-small-33.jpg" alt="profile picture" />
                            </figure>
                          </a>
                        </div>
                        <!-- profile picture end -->

                        <div class="unorder-list-info">
                          <h3 class="list-title"><a href="#">Travel The World</a></h3>
                          <p class="list-subtitle"><a href="#">adventure</a></p>
                        </div>
                        <button class="like-button active">
                          <img class="heart" src="/assets/images/icons/heart.png" alt="" />
                          <img class="heart-color" src="/assets/images/icons/heart-color.png" alt="" />
                        </button>
                      </li>
                      <li class="unorder-list">
                        <!-- profile picture end -->
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img src="/assets/images/profile/profile-small-30.jpg" alt="profile picture" />
                            </figure>
                          </a>
                        </div>
                        <!-- profile picture end -->

                        <div class="unorder-list-info">
                          <h3 class="list-title"><a href="#">Foodcort Nirala</a></h3>
                          <p class="list-subtitle"><a href="#">food</a></p>
                        </div>
                        <button class="like-button">
                          <img class="heart" src="/assets/images/icons/heart.png" alt="" />
                          <img class="heart-color" src="/assets/images/icons/heart-color.png" alt="" />
                        </button>
                      </li>
                      <li class="unorder-list">
                        <!-- profile picture end -->
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img src="/assets/images/profile/profile-small-5.jpg" alt="profile picture" />
                            </figure>
                          </a>
                        </div>
                        <!-- profile picture end -->

                        <div class="unorder-list-info">
                          <h3 class="list-title"><a href="#">Rolin Theitar</a></h3>
                          <p class="list-subtitle"><a href="#">drama</a></p>
                        </div>
                        <button class="like-button">
                          <img class="heart" src="/assets/images/icons/heart.png" alt="" />
                          <img class="heart-color" src="/assets/images/icons/heart-color.png" alt="" />
                        </button>
                      </li>
                      <li class="unorder-list">
                        <!-- profile picture end -->
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img src="/assets/images/profile/profile-small-29.jpg" alt="profile picture" />
                            </figure>
                          </a>
                        </div>
                        <!-- profile picture end -->

                        <div class="unorder-list-info">
                          <h3 class="list-title"><a href="#">Active Mind</a></h3>
                          <p class="list-subtitle"><a href="#">fitness</a></p>
                        </div>
                        <button class="like-button">
                          <img class="heart" src="/assets/images/icons/heart.png" alt="" />
                          <img class="heart-color" src="/assets/images/icons/heart-color.png" alt="" />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- widget single item end -->
              </aside>
            </div>

            <div class="col-lg-6 order-1 order-lg-2">
              <!-- share box start -->
              <div class="card card-small">
                <div class="share-box-inner">
                  <!-- profile picture end -->
                  <div class="profile-thumb">
                    <a href="#">
                      <figure class="profile-thumb-middle">
                        <img :src="user.images[0].image_url" alt="profile picture" />
                      </figure>
                    </a>
                  </div>
                  <!-- profile picture end -->

                  <!-- share content box start -->
                  <div class="share-content-box w-100">
                    <form class="share-text-box">
                      <textarea
                        name="share"
                        class="share-text-field"
                        aria-disabled="true"
                        placeholder="Say Something"
                        data-toggle="modal"
                        data-target="#textbox"
                        id="email"
                      ></textarea>
                      <button class="btn-share" type="submit">share</button>
                    </form>
                  </div>
                  <!-- share content box end -->
                  <!-- Modal start -->
                  <div class="modal fade" id="textbox" aria-labelledby="textbox">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Share Your Mood</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body custom-scroll">
                          <textarea
                            name="share"
                            class="share-field-big custom-scroll"
                            placeholder="Say Something"
                          ></textarea>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="post-share-btn" data-dismiss="modal">cancel</button>
                          <button type="button" class="post-share-btn">post</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Modal end -->
                </div>
              </div>
              <!-- share box end -->

              <!-- post status start -->
              <div class="card">
                <!-- post title start -->
                <div class="post-title d-flex align-items-center">
                  <!-- profile picture end -->
                  <div class="profile-thumb">
                    <a href="#">
                      <figure class="profile-thumb-middle">
                        <img src="/assets/images/profile/profile-small-5.jpg" alt="profile picture" />
                      </figure>
                    </a>
                  </div>
                  <!-- profile picture end -->

                  <div class="posted-author">
                    <h6 class="author"><a href="profile.html">Kate Palson</a></h6>
                    <span class="post-time">35 min ago</span>
                  </div>

                  <div class="post-settings-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="post-settings arrow-shape">
                      <ul>
                        <li><button>copy link to adda</button></li>
                        <li><button>edit post</button></li>
                        <li><button>embed adda</button></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- post title start -->
                <div class="post-content">
                  <p class="post-desc">
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                  </p>
                  <div class="post-thumb-gallery img-gallery">
                    <div class="row no-gutters">
                      <div class="col-8">
                        <figure class="post-thumb">
                          <a class="gallery-selector" href="/assets/images/post/post-large-2.jpg">
                            <img src="/assets/images/post/post-2.jpg" alt="post image" />
                          </a>
                        </figure>
                      </div>
                      <div class="col-4">
                        <div class="row">
                          <div class="col-12">
                            <figure class="post-thumb">
                              <a class="gallery-selector" href="/assets/images/post/post-large-3.jpg">
                                <img src="/assets/images/post/post-3.jpg" alt="post image" />
                              </a>
                            </figure>
                          </div>
                          <div class="col-12">
                            <figure class="post-thumb">
                              <a class="gallery-selector" href="/assets/images/post/post-large-4.jpg">
                                <img src="/assets/images/post/post-4.jpg" alt="post image" />
                              </a>
                            </figure>
                          </div>
                          <div class="col-12">
                            <figure class="post-thumb">
                              <a class="gallery-selector" href="/assets/images/post/post-large-5.jpg">
                                <img src="/assets/images/post/post-5.jpg" alt="post image" />
                              </a>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="post-meta">
                    <button class="post-meta-like">
                      <i class="bi bi-heart-beat"></i>
                      <span>You and 207 people like this</span>
                      <strong>207</strong>
                    </button>
                    <ul class="comment-share-meta">
                      <li>
                        <button class="post-comment">
                          <i class="bi bi-chat-bubble"></i>
                          <span>41</span>
                        </button>
                      </li>
                      <li>
                        <button class="post-share">
                          <i class="bi bi-share"></i>
                          <span>07</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- post status end -->

              <!-- post status start -->
              <div class="card">
                <!-- post title start -->
                <div class="post-title d-flex align-items-center">
                  <!-- profile picture end -->
                  <div class="profile-thumb">
                    <a href="#">
                      <figure class="profile-thumb-middle">
                        <img src="/assets/images/profile/profile-small-3.jpg" alt="profile picture" />
                      </figure>
                    </a>
                  </div>
                  <!-- profile picture end -->

                  <div class="posted-author">
                    <h6 class="author"><a href="profile.html">Jon Wileyam</a></h6>
                    <span class="post-time">15 min ago</span>
                  </div>

                  <div class="post-settings-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="post-settings arrow-shape">
                      <ul>
                        <li><button>copy link to adda</button></li>
                        <li><button>edit post</button></li>
                        <li><button>embed adda</button></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- post title start -->
                <div class="post-content">
                  <p class="post-desc pb-0">
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                    text, and a search for
                  </p>
                  <div class="post-meta">
                    <button class="post-meta-like">
                      <i class="bi bi-heart-beat"></i>
                      <span>You and 201 people like this</span>
                      <strong>201</strong>
                    </button>
                    <ul class="comment-share-meta">
                      <li>
                        <button class="post-comment">
                          <i class="bi bi-chat-bubble"></i>
                          <span>41</span>
                        </button>
                      </li>
                      <li>
                        <button class="post-share">
                          <i class="bi bi-share"></i>
                          <span>07</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- post status end -->

              <!-- post status start -->
              <div class="card">
                <!-- post title start -->
                <div class="post-title d-flex align-items-center">
                  <!-- profile picture end -->
                  <div class="profile-thumb">
                    <a href="#">
                      <figure class="profile-thumb-middle">
                        <img src="/assets/images/profile/profile-small-4.jpg" alt="profile picture" />
                      </figure>
                    </a>
                  </div>
                  <!-- profile picture end -->

                  <div class="posted-author">
                    <h6 class="author"><a href="profile.html">william henry</a></h6>
                    <span class="post-time">35 min ago</span>
                  </div>

                  <div class="post-settings-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="post-settings arrow-shape">
                      <ul>
                        <li><button>copy link to adda</button></li>
                        <li><button>edit post</button></li>
                        <li><button>embed adda</button></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- post title start -->
                <div class="post-content">
                  <p class="post-desc">
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                  </p>
                  <div class="plyr__video-embed plyr-video">
                    <iframe
                      src="https://www.youtube.com/embed/WeA7edXsU40"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div class="post-meta">
                    <button class="post-meta-like">
                      <i class="bi bi-heart-beat"></i>
                      <span>You and 201 people like this</span>
                      <strong>201</strong>
                    </button>
                    <ul class="comment-share-meta">
                      <li>
                        <button class="post-comment">
                          <i class="bi bi-chat-bubble"></i>
                          <span>41</span>
                        </button>
                      </li>
                      <li>
                        <button class="post-share">
                          <i class="bi bi-share"></i>
                          <span>07</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- post status end -->

              <!-- post status start -->
              <div class="card">
                <!-- post title start -->
                <div class="post-title d-flex align-items-center">
                  <!-- profile picture end -->
                  <div class="profile-thumb">
                    <a href="#">
                      <figure class="profile-thumb-middle">
                        <img src="/assets/images/profile/profile-small-8.jpg" alt="profile picture" />
                      </figure>
                    </a>
                  </div>
                  <!-- profile picture end -->

                  <div class="posted-author">
                    <h6 class="author"><a href="profile.html">Mili Raoulin</a></h6>
                    <span class="post-time">50 min ago</span>
                  </div>

                  <div class="post-settings-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="post-settings arrow-shape">
                      <ul>
                        <li><button>copy link to adda</button></li>
                        <li><button>edit post</button></li>
                        <li><button>embed adda</button></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- post title start -->
                <div class="post-content">
                  <p class="post-desc">
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                  </p>
                  <div class="post-thumb-gallery img-gallery">
                    <div class="row no-gutters">
                      <div class="col-6">
                        <figure class="post-thumb">
                          <a class="gallery-selector" href="/assets/images/post/post-large-6.jpg">
                            <img src="/assets/images/post/post-6.jpg" alt="post image" />
                          </a>
                        </figure>
                      </div>
                      <div class="col-6">
                        <figure class="post-thumb">
                          <a class="gallery-selector" href="/assets/images/post/post-large-7.jpg">
                            <img src="/assets/images/post/post-7.jpg" alt="post image" />
                          </a>
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div class="post-meta">
                    <button class="post-meta-like">
                      <i class="bi bi-heart-beat"></i>
                      <span>You and 230 people like this</span>
                      <strong>230</strong>
                    </button>
                    <ul class="comment-share-meta">
                      <li>
                        <button class="post-comment">
                          <i class="bi bi-chat-bubble"></i>
                          <span>65</span>
                        </button>
                      </li>
                      <li>
                        <button class="post-share">
                          <i class="bi bi-share"></i>
                          <span>04</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- post status end -->

              <!-- post status start -->
              <div class="card">
                <!-- post title start -->
                <div class="post-title d-flex align-items-center">
                  <!-- profile picture end -->
                  <div class="profile-thumb">
                    <a href="#">
                      <figure class="profile-thumb-middle">
                        <img src="/assets/images/profile/profile-small-6.jpg" alt="profile picture" />
                      </figure>
                    </a>
                  </div>
                  <!-- profile picture end -->

                  <div class="posted-author">
                    <h6 class="author"><a href="profile.html">Robart Faul</a></h6>
                    <span class="post-time">40 min ago</span>
                  </div>

                  <div class="post-settings-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="post-settings arrow-shape">
                      <ul>
                        <li><button>copy link to adda</button></li>
                        <li><button>edit post</button></li>
                        <li><button>embed adda</button></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- post title start -->
                <div class="post-content">
                  <p class="post-desc pb-0">
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                    text, and a search for Many desktop publishing packages and web page editors now use Lorem Ipsum as
                    their default model text, and a search for Many desktop publishing duskam azer.
                  </p>
                  <div class="post-meta">
                    <button class="post-meta-like">
                      <i class="bi bi-heart-beat"></i>
                      <span>You and 250 people like this</span>
                      <strong>250</strong>
                    </button>
                    <ul class="comment-share-meta">
                      <li>
                        <button class="post-comment">
                          <i class="bi bi-chat-bubble"></i>
                          <span>80</span>
                        </button>
                      </li>
                      <li>
                        <button class="post-share">
                          <i class="bi bi-share"></i>
                          <span>10</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- post status end -->

              <!-- post status start -->
              <div class="card">
                <!-- post title start -->
                <div class="post-title d-flex align-items-center">
                  <!-- profile picture end -->
                  <div class="profile-thumb">
                    <a href="#">
                      <figure class="profile-thumb-middle">
                        <img src="/assets/images/profile/profile-small-2.jpg" alt="profile picture" />
                      </figure>
                    </a>
                  </div>
                  <!-- profile picture end -->

                  <div class="posted-author">
                    <h6 class="author"><a href="profile.html">merry watson</a></h6>
                    <span class="post-time">20 min ago</span>
                  </div>

                  <div class="post-settings-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="post-settings arrow-shape">
                      <ul>
                        <li><button>copy link to adda</button></li>
                        <li><button>edit post</button></li>
                        <li><button>embed adda</button></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- post title start -->
                <div class="post-content">
                  <p class="post-desc">
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                  </p>
                  <div class="post-thumb-gallery">
                    <figure class="post-thumb img-popup">
                      <a href="/assets/images/post/post-large-1.jpg">
                        <img src="/assets/images/post/post-1.jpg" alt="post image" />
                      </a>
                    </figure>
                  </div>
                  <div class="post-meta">
                    <button class="post-meta-like">
                      <i class="bi bi-heart-beat"></i>
                      <span>You and 201 people like this</span>
                      <strong>201</strong>
                    </button>
                    <ul class="comment-share-meta">
                      <li>
                        <button class="post-comment">
                          <i class="bi bi-chat-bubble"></i>
                          <span>41</span>
                        </button>
                      </li>
                      <li>
                        <button class="post-share">
                          <i class="bi bi-share"></i>
                          <span>07</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- post status end -->

              <!-- post status start -->
              <div class="card">
                <!-- post title start -->
                <div class="post-title d-flex align-items-center">
                  <!-- profile picture end -->
                  <div class="profile-thumb">
                    <a href="#">
                      <figure class="profile-thumb-middle">
                        <img src="/assets/images/profile/profile-small-3.jpg" alt="profile picture" />
                      </figure>
                    </a>
                  </div>
                  <!-- profile picture end -->

                  <div class="posted-author">
                    <h6 class="author"><a href="profile.html">Jon Wileyam</a></h6>
                    <span class="post-time">15 min ago</span>
                  </div>

                  <div class="post-settings-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="post-settings arrow-shape">
                      <ul>
                        <li><button>copy link to adda</button></li>
                        <li><button>edit post</button></li>
                        <li><button>embed adda</button></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- post title start -->
                <div class="post-content">
                  <p class="post-desc pb-0">
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                    text, and a search for
                  </p>
                  <div class="post-meta">
                    <button class="post-meta-like">
                      <i class="bi bi-heart-beat"></i>
                      <span>You and 204 people like this</span>
                      <strong>204</strong>
                    </button>
                    <ul class="comment-share-meta">
                      <li>
                        <button class="post-comment">
                          <i class="bi bi-chat-bubble"></i>
                          <span>41</span>
                        </button>
                      </li>
                      <li>
                        <button class="post-share">
                          <i class="bi bi-share"></i>
                          <span>07</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- post status end -->
            </div>

            <div class="col-lg-3 order-3">
              <aside class="widget-area">
                <!-- widget single item start -->
                <div class="card widget-item">
                  <h4 class="widget-title">Recent Notifications</h4>
                  <div class="widget-body">
                    <ul class="like-page-list-wrapper">
                      <li class="unorder-list">
                        <!-- profile picture end -->
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img src="/assets/images/profile/profile-small-9.jpg" alt="profile picture" />
                            </figure>
                          </a>
                        </div>
                        <!-- profile picture end -->

                        <div class="unorder-list-info">
                          <h3 class="list-title"><a href="#">Any one can join with us if you want</a></h3>
                          <p class="list-subtitle">5 min ago</p>
                        </div>
                      </li>
                      <li class="unorder-list">
                        <!-- profile picture end -->
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img src="/assets/images/profile/profile-small-35.jpg" alt="profile picture" />
                            </figure>
                          </a>
                        </div>
                        <!-- profile picture end -->

                        <div class="unorder-list-info">
                          <h3 class="list-title"><a href="#">Any one can join with us if you want</a></h3>
                          <p class="list-subtitle">10 min ago</p>
                        </div>
                      </li>
                      <li class="unorder-list">
                        <!-- profile picture end -->
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img src="/assets/images/profile/profile-small-15.jpg" alt="profile picture" />
                            </figure>
                          </a>
                        </div>
                        <!-- profile picture end -->

                        <div class="unorder-list-info">
                          <h3 class="list-title"><a href="#">Any one can join with us if you want</a></h3>
                          <p class="list-subtitle">18 min ago</p>
                        </div>
                      </li>
                      <li class="unorder-list">
                        <!-- profile picture end -->
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img src="/assets/images/profile/profile-small-6.jpg" alt="profile picture" />
                            </figure>
                          </a>
                        </div>
                        <!-- profile picture end -->

                        <div class="unorder-list-info">
                          <h3 class="list-title"><a href="#">Any one can join with us if you want</a></h3>
                          <p class="list-subtitle">25 min ago</p>
                        </div>
                      </li>
                      <li class="unorder-list">
                        <!-- profile picture end -->
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img src="/assets/images/profile/profile-small-34.jpg" alt="profile picture" />
                            </figure>
                          </a>
                        </div>
                        <!-- profile picture end -->

                        <div class="unorder-list-info">
                          <h3 class="list-title"><a href="#">Any one can join with us if you want</a></h3>
                          <p class="list-subtitle">39 min ago</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- widget single item end -->

                <!-- widget single item start -->
                <div class="card widget-item">
                  <h4 class="widget-title">Advertizement</h4>
                  <div class="widget-body">
                    <div class="add-thumb">
                      <a href="#">
                        <img src="/assets/images/banner/advertise.jpg" alt="advertisement" />
                      </a>
                    </div>
                  </div>
                </div>
                <!-- widget single item end -->

                <!-- widget single item start -->
                <div class="card widget-item">
                  <h4 class="widget-title">Friends Zone</h4>
                  <div class="widget-body">
                    <ul class="like-page-list-wrapper">
                      <li class="unorder-list">
                        <!-- profile picture end -->
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img src="/assets/images/profile/profile-small-10.jpg" alt="profile picture" />
                            </figure>
                          </a>
                        </div>
                        <!-- profile picture end -->

                        <div class="unorder-list-info">
                          <h3 class="list-title"><a href="#">arfim bolt</a></h3>
                          <p class="list-subtitle"><a href="#">10 mutual</a></p>
                        </div>
                        <button class="like-button">
                          <img class="heart" src="/assets/images/icons/heart.png" alt="" />
                          <img class="heart-color" src="/assets/images/icons/heart-color.png" alt="" />
                        </button>
                      </li>
                      <li class="unorder-list">
                        <!-- profile picture end -->
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img src="/assets/images/profile/profile-small-2.jpg" alt="profile picture" />
                            </figure>
                          </a>
                        </div>
                        <!-- profile picture end -->

                        <div class="unorder-list-info">
                          <h3 class="list-title"><a href="#">marry wither</a></h3>
                          <p class="list-subtitle"><a href="#">02 mutual</a></p>
                        </div>
                        <button class="like-button active">
                          <img class="heart" src="/assets/images/icons/heart.png" alt="" />
                          <img class="heart-color" src="/assets/images/icons/heart-color.png" alt="" />
                        </button>
                      </li>
                      <li class="unorder-list">
                        <!-- profile picture end -->
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img src="/assets/images/profile/profile-small-5.jpg" alt="profile picture" />
                            </figure>
                          </a>
                        </div>
                        <!-- profile picture end -->

                        <div class="unorder-list-info">
                          <h3 class="list-title"><a href="#">Rolin Theitar</a></h3>
                          <p class="list-subtitle"><a href="#">drama</a></p>
                        </div>
                        <button class="like-button">
                          <img class="heart" src="/assets/images/icons/heart.png" alt="" />
                          <img class="heart-color" src="/assets/images/icons/heart-color.png" alt="" />
                        </button>
                      </li>
                      <li class="unorder-list">
                        <!-- profile picture end -->
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img src="/assets/images/profile/profile-small-14.jpg" alt="profile picture" />
                            </figure>
                          </a>
                        </div>
                        <!-- profile picture end -->

                        <div class="unorder-list-info">
                          <h3 class="list-title"><a href="#">Active Mind</a></h3>
                          <p class="list-subtitle"><a href="#">fitness</a></p>
                        </div>
                        <button class="like-button">
                          <img class="heart" src="/assets/images/icons/heart.png" alt="" />
                          <img class="heart-color" src="/assets/images/icons/heart-color.png" alt="" />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- widget single item end -->
              </aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      selectedUser: {
        id: "",
        messages: [],
        images: [{}, {}],
      },
      climbing_style: [],
      user: {
        current_user_images: [{}, {}],
      },
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      console.log("user show", response);
      this.user = response.data;
      this.$nextTick(() => {
        this.setUpTheme();
      });
    });
  },
  methods: {
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

      // active profile carousel js
      //   $('.active-profile-carousel').slick({
      //     speed: 800,
      //     slidesToShow: 10,
      //     prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left-rounded"></i></button>',
      //     nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right-rounded"></i></button>',
      //     responsive: [{
      //       breakpoint: 1200,
      //       settings: {
      //         slidesToShow: 5,
      //       }
      //     },
      //     {
      //       breakpoint: 992,
      //       settings: {
      //         slidesToShow: 8,
      //       }
      //     }]
      //   });

      //   // active profile carousel js
      //   $('.active-profile-mobile').slick({
      //     speed: 800,
      //     slidesToShow: 6,
      //     arrows: false,
      //     responsive: [{
      //       breakpoint: 480,
      //       settings: {
      //         slidesToShow: 4,
      //       }
      //     }]
      //   });

      //   // active profile carousel js
      //   $('.favorite-item-carousel').slick({
      //     autoplay: true,
      //     speed: 800,
      //     slidesToShow: 5,
      //     arrows: false,
      //     responsive: [{
      //       breakpoint: 992,
      //       settings: {
      //         slidesToShow: 3,
      //       }
      //     },
      //     {
      //       breakpoint: 576,
      //       settings: {
      //         slidesToShow: 2,
      //       }
      //     }]
      //   });

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
