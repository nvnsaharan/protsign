<template>
  <div>
    <div>{{ this.timestamp }}</div>
    <div>{{ this.reason }}</div>
    <div>{{ this.user }}</div>
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
        return {
          timestamp : DATA.timestamp.toDate(),
          reason: DATA.reason,
          user: DATA.user
        }
      });
    
  },
};
</script>

<style></style>
