<template>
  <div>
    <!-- Text Header -->
    <header
      class="w-full mx-auto bg-cover bg-bottom"
      style="
        background-image: url('https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
      "
    >
      <div class="flex flex-col items-center py-32">
        <h1 class="font-bold text-white uppercase text-5xl" href="#">
          Notion Blog
        </h1>
        <p class="text-lg text-white">Lorem Ipsum Dolor Sit Amet</p>
      </div>
    </header>

    <div class="max-w-7xl mx-auto">
      <div class="mt-12 flex flex-wrap space-x-2">
        <!-- Article -->
        <Article
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data: () => ({
    articles: [],
  }),
  async mounted() {
    try {
      const response = await this.$axios.$get("/getBlog");
      console.log(response);

      this.articles = response.articles;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
