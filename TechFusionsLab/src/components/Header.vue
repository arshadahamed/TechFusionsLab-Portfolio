<template>
  <!--===== PRELOADER STARTS =======-->
  <div class="preloader">
    <div class="loading-container">
      <div class="loading"></div>
      <div id="loading-icon">
        <img src="/public/assets/img/logo/preloader.png" alt="" />
      </div>
    </div>
  </div>
  <!--===== PRELOADER ENDS =======-->

  <!--===== PROGRESS STARTS=======-->
  <div class="paginacontainer">
    <div class="progress-wrap">
      <svg
        class="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  </div>
  <!--===== PROGRESS ENDS=======-->

  <!--=====HEADER START=======-->
  <header>
    <div id="vl-header-sticky" class="vl-header-area vl-transparent-header">
      <div class="container headerfix">
        <div class="row align-items-center row-bg4">
          <div class="col-lg-2 col-md-6 col-6">
            <div class="vl-logo">
              <a href="index.html"
                ><img src="/public/assets/img/logo/logo1.png" alt=""
              /></a>
            </div>
          </div>
          <div class="col-lg-7 d-none d-lg-block">
            <div class="vl-main-menu text-center">
              <nav class="vl-mobile-menu-active">
                <ul>
                  <li class="has-dropdown">
                    <router-link to="/">Home</router-link>
                  </li>

                  <li class="has-dropdown">
                    <router-link to="/about">About Us</router-link>
                  </li>
                  <li>
                    <router-link to="/service">Services</router-link>
                  </li>
                  <li>
                    <router-link to="/case">Our Works</router-link>
                  </li>
                  <li>
                    <router-link to="/blog">Blogs</router-link>
                  </li>
                  <li>
                    <router-link to="/contact">Contact</router-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-6">
            <div class="vl-hero-btn d-none d-lg-block text-end">
              <span class="vl-btn-wrap text-end">
                <a href="contact.html" class="vl-btn5"
                  ><span class="demo">Get In Touch</span
                  ><span class="arrow"
                    ><i class="fa-solid fa-arrow-right"></i
                  ></span>
                </a>
              </span>
            </div>
            <div class="vl-header-action-item d-block d-lg-none">
              <button type="button" class="vl-offcanvas-toggle">
                <i class="fa-solid fa-bars-staggered"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!--=====HEADER END =======-->

  <!--===== MOBILE HEADER STARTS =======-->
  <div class="vl-offcanvas">
    <div class="vl-offcanvas-wrapper">
      <div
        class="vl-offcanvas-header d-flex justify-content-between align-items-center mb-90"
      >
        <div class="vl-offcanvas-logo">
          <a href="index.html"
            ><img src="/public/assets/img/logo/logo1.png" alt=""
          /></a>
        </div>
        <div class="vl-offcanvas-close">
          <button class="vl-offcanvas-close-toggle">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <div class="vl-offcanvas-menu d-lg-none mb-40">
        <nav></nav>
      </div>

      <div class="space20"></div>
      <div class="vl-offcanvas-info">
        <h3 class="vl-offcanvas-sm-title">Contact Us</h3>
        <div class="space20"></div>
        <span
          ><a href="#">
            <i class="fa-regular fa-envelope"></i> +94 7655 228340
          </a></span
        >
        <span
          ><a href="#">
            <i class="fa-regular fa-envelope"></i> +65 8434 3894
          </a></span
        >
        <span
          ><a href="#"
            ><i class="fa-solid fa-phone"></i> info@techfusionslab.com</a
          ></span
        >
        <!-- <span><a href="#"><i class="fa-solid fa-location-dot"></i> Siyambalagaskotuwa</a></span> -->
      </div>
      <div class="space20"></div>
      <div class="vl-offcanvas-social">
        <h3 class="vl-offcanvas-sm-title">Follow Us</h3>
        <div class="space20"></div>
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </div>
  <div class="vl-offcanvas-overlay"></div>
  <!--===== MOBILE HEADER STARTS =======-->
</template>
<script>
import { watch } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    watch(route, () => {
      setTimeout(() => {
        document.querySelectorAll("img").forEach((img) => {
          img.src = img.src + "?v=" + new Date().getTime();
        });
      }, 500); 
    });
  },
};
</script>
