<template>
  <div>
    <div class="nav">
      <div class="left">
        <img src="/logo.png" alt="" srcset="" />
      </div>
      <div class="right">
        <md-avatar>
          <img :src="userimage" @error="setAltImg" alt="Avatar" />
        </md-avatar>
        <md-button @click="doLogout" class="md-accent">
          Logout <md-icon>logout </md-icon>
        </md-button>
      </div>
    </div>
    <TabRouter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: this.$store.state.user,
      userimage: this.$store.state.userimage,
    };
  },
  methods: {
    doLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
    setAltImg() {
      this.userimage = this.$store.state.userimage;
    },
  },
};
</script>

<style>
.nav {
  background-color: white;
  display: flex;
  height: 50px;
  align-items: center;
  box-shadow: lightgrey 2px 2px 10px;
  padding: 0 5%;
  justify-content: space-between;
}
.right {
  display: flex;
  align-items: center;
}
.left > img {
  height: 40px;
}
</style>
