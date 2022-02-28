<template>
  <div v-if="loaded">
    <header
      class="w-full mx-auto bg-center bg-bottom"
      :style="'background-image: url(' + article.cover + ');'"
    >
      <div class="flex flex-col items-center py-32">
        <h1 class="font-bold text-white uppercase text-5xl" href="#">
          {{ article.title }}
        </h1>
        <p class="text-lg text-white">
          {{ article.author }} ||
          {{ new Date(article.created_at).toLocaleDateString() }}
        </p>
      </div>
    </header>
    <div class="max-w-5xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <vue-notion-render :unofficial="false" :data="blockList" />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({ article: "", blockList: null, loaded: false }),
  async mounted() {
    const response = await this.$axios.$get(
      `/getArticle?slug=${this.$route.params.slug}`
    );

    this.article = response.page;
    this.blockList = response.content.results;
    this.loaded = true;
  },
};
</script>
