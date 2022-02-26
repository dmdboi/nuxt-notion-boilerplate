<template>
  <div>
    <div class="bg-blue-400">
      <div class="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2
            class="
              mt-1
              text-4xl
              font-extrabold
              text-white
              sm:text-5xl sm:tracking-tight
              lg:text-6xl
            "
          >
            {{ title }}
          </h2>
        </div>
      </div>
    </div>
    <div class="max-w-5xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <vue-notion-render :unofficial="false" :data="blockList" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({ title: "", blockList: null, loaded: false }),
  async mounted() {
    const response = await this.$axios.$get(
      `/getArticle?slug=${this.$route.params.slug}`
    );

    console.log(response);

    this.title = response.name;
    this.blockList = response.content.results;
    this.loaded = true;
  },
};
</script>
