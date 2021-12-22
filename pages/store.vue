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
            <md-button
              v-if="item.ownedBy"
              @click="requestNFT"
              class="md-raised md-accent"
            >
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
      array: this.arrayCreate(),
    };
  },
  computed: {},
  methods: {
    requestNFT() {
      alert("The request has been sent to the owner of NFT.");
    },
    arrayCreate() {
      const arr = [];
      this.$fire.firestore
        .collection("nfts")
        .get()
        .then(function (query) {
          query.docs.forEach((doc) => {
            arr.push(doc.data());
          });
        });
      return arr;
    },
  },
  async mounted() {
    if (!this.$store.state.loginStatus) {
      this.$router.push("/login");
    }
  },
};
</script>

<style>
.cards-div {
  display: grid;
  margin: 0 auto;
  width: 1050px;
  grid-template-columns: auto auto auto;
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

@media screen and (max-width: 700px) {
  .cards-div {
    grid-template-columns: auto auto;
  }
}

@media screen and (max-width: 400px) {
  .cards-div {
    grid-template-columns: auto;
  }
}
</style>
