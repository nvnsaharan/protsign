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
      <div id="qrcode" ref="qrcode"></div>
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
    async generator() {
      let text = "Do you want to generate this signature?";
      if (confirm(text) == true) {
        if (this.reason) {
          const uuid =
            this.$store.state.user.split(" ")[0] + "-" + String(Date.now());
          const SAVE = {
            user: this.$store.state.user,
            reason: this.reason,
            timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp(),
          };
          await this.$fire.firestore.collection("signs").doc(uuid).set(SAVE);
          var options_object = {
            text: this.reason,
            logo: this.$store.state.userimage,
            logoWidth: 100,
            logoHeight: 100,
          };
          if (this.$refs.qrcode.children.length > 0) {
            this.$refs.qrcode.innerHTML = "";
          }
          var qrcode = new QRCode(this.$refs.qrcode, options_object);
        } else {
          //
        }
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
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 700px !important;
}
.textarea {
  resize: none;
  width: 50% !important;
}
#qrcode {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
