<template>
  <div class="full">
    <div class="main-div">
      <img id="logo-img" src="/logo.png" alt="" srcset="" />
      <span class="fillers">This document was signed by </span>
      <span class="data"> {{ this.user }} </span>
      <span class="fillers"> for the reason </span>
      <span class="data"> {{ this.reason }} </span>
      <span class="fillers"> on </span>
      <span class="data"> {{ this.timestamp }} </span>
      <span class="note">* The data is stored on a blockchain, so it is immutable and secure.</span>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    const slug = params.slug;
   return await app.$fire.firestore
      .collection("signs")
      .doc(slug)
      .get()
      .then(function (query) {
        const DATA = query.data();
        const thedate = new Date( DATA.timestamp.toDate())
        return {
          timestamp :thedate.getDate()+ "/" + thedate.getMonth() + "/" + thedate.getFullYear(),
          reason: DATA.reason,
          user: DATA.user
        }
      });
    
  },
};
</script>

<style>
.full{
  background-color: whitesmoke;
  height: 100vh;
  display: flex;
}
.main-div{
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  width: 500px;
  align-items: center;
  text-align: center;
  padding: 40px;
  margin: 0 auto;
  border-radius: 20px;
  margin-top: 50px;
  max-height: 500px;
  position: relative;
}
#logo-img{
  width: 200px;
  margin-bottom: 20px;
}
.fillers{
  font-size: 20px;
  line-height: 34px;
  color: gray;
}
.data{
  font-size: 26px;
  line-height: 34px;
  font-weight: 500;
}
.note{
  position: absolute;
  bottom: 0;
  left: 2%;
}
</style>
