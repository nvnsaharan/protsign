<template>
  <div>
    <div><Navbar /></div>
    <div class="cards-div">
      <div class="the-card" v-for="(item, index) in array" :key="index">
        <md-card>
          <md-card-header>
            <div class="md-title">{{ item.title }}</div>
          </md-card-header>
          <md-card-media class="the-card-image">
            <img :src="item.theNft" alt="" />
          </md-card-media>
          <md-card-actions>
            <md-button class="md-accent">Price : ${{ item.price }}</md-button>
            <md-button v-if="item.ownedBy" class="md-raised md-accent">
              Request
            </md-button>
            <md-button v-else class="md-raised md-accent"> Buy </md-button>
          </md-card-actions>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array: [],
    };
  },
  methods: {},
  mounted() {
    if (!this.$store.state.loginStatus) {
      this.$router.push("/login");
    }
  },
};
</script>

<style>
.cards-div {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
}
.the-card {
  width: 350px;
  margin: 2.5px;
}
.md-card-actions {
  padding-bottom: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
}
.the-card-image {
  width: 200px !important;
  height: 250px !important;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
