<template>
  <div class="the-div">
    <Navbar />
    <div class="main-div">
      <md-field>
        <label>Reason</label>
        <md-textarea class="textarea" v-model="reason"></md-textarea>
      </md-field>
      <md-button @click="generator" class="md-raised md-primary">
        Generate
      </md-button>
      <div ref="qrcode"></div>
    </div>
  </div>
</template>

<script>
import QRCode from "easyqrcodejs";

export default {
  data() {
    return {
      reason: "",
      qrcode: "",
    };
  },
  methods: {
    generator() {
      if (this.reason) {
        var options_object = {
          text: this.reason,
          logo: "https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png",
          logoWidth: 100,
          logoHeight: 100,
        };
        if (this.$refs.qrcode.children.length > 0) {
          this.$refs.qrcode.innerHTML = "";
        }
        var qrcode = new QRCode(this.$refs.qrcode, options_object);
      }
    },
  },
  mounted() {
    if (!this.$store.state.loginStatus) {
      this.$router.push("/register");
    }
  },
  watch: {},
};
</script>

<style>
.the-div {
  background-color: #e9ebee81;
  min-height: 100vh;
  width: 100%;
}
.main-div {
  width: 50% !important;
}
.textarea {
  width: 50% !important;
}
</style>
