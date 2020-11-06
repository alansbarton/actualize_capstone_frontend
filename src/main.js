import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from "axios";
import ActionCable from "actioncable";

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
    this.messages.unshift(data); // update the messages in real time
  }
});

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
