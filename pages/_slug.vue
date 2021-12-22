<template>
  <div>{{ this.slug }}</div>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    const slug = params.slug;
    await app.$fire.firestore
      .collection("signs")
      .doc(slug)
      .get()
      .then(function (query) {
        const DATA = query.data();
      });
    return { slug };
  },
};
</script>

<style></style>
