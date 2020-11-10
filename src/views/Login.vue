<template>
  <!-- <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email">
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password">
      </div>
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>
  </div> -->
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
                                            <img src="assets/images/logo/logo.png" alt="timeline logo">
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
                                            <input type="text" placeholder="Email or Userame" class="single-field" v-model="email">
                                        </div>
                                        <div class="col-12 col-sm">
                                            <input type="password" placeholder="Password" class="single-field" v-model="password">
                                        </div>
                                        <div class="col-12 col-sm-auto">
                                            <input type="submit" class="btn btn-primary" value="Submit" v-on:click="submitLogin()">
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
                                    <h3 class="timeline-bg-title">Let’s see what’s happening to you and your world. Welcome in Adda.</h3>
                                </div>
                            </div>
                            <div class="col-lg-6 order-1 order-lg-2 d-flex align-items-center justify-content-center">
                                <div class="signup-form-wrapper">
                                    <h1 class="create-acc text-center">Create An Account</h1>
                                    <div class="signup-inner text-center">
                                        <h3 class="title">Welcome to Adda</h3>

                                        <form class="signup-inner--form" v-on:submit.prevent="submitSignup()">
                                            <div class="row">
                                                <div class="col-12">
                                                    <input type="email" class="single-field" placeholder="Email" v-model="email">
                                                </div>
                                                <div class="col-md-6">
                                                    <input type="text" class="single-field" placeholder="First Name" v-model="firstName">
                                                </div>
                                                <div class="col-md-6">
                                                    <input type="text" class="single-field" placeholder="Last Name" v-model="lastName">
                                                </div>
                                                <div class="col-12">
                                                    <input type="password" class="single-field" placeholder="Password" v-model="passwordCreate">
                                                </div>
                                                <div class="col-12">
                                                    <input type="password" class="single-field" placeholder="Password Confirmation" v-model="passwordConfirmation">
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
                                                    <input type="submit" class="submit-btn" value="Submit">
                                                </div>
                                            </div>
                                            <h6 class="terms-condition">I have read & accepted the <a href="#">terms of use</a></h6>
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
      errors: []
    };
  },
  methods: {
    submitSignup: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.passwordCreate,
        password_confirmation: this.passwordConfirmation
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
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/home");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>