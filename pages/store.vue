<template>
  <div><Navbar /></div>
</template>

<script>
export default {
  mounted() {
    if (!this.$store.state.loginStatus) {
      this.$router.push("/login");
    }
  },
};
</script>

<style></style>
