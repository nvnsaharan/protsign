<template>
  <div>
    <md-tabs md-sync-route class="md-primary" md-alignment="centered">
      <md-tab id="tab-home" md-label="Home" to="/" exact></md-tab>
      <md-tab id="tab-pages" md-label="Store" to="/store"></md-tab>
      <md-tab id="tab-posts" md-label="Account" to="/account"></md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default {
  name: "TabRouter",
};
</script>
