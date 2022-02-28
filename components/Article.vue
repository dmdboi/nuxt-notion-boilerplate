<template>
  <div class="w-full md:w-1/3 rounded-lg shadow-lg overflow-hidden">
    <div class="flex-shrink-0">
      <img class="h-48 w-full object-cover" :src="article.cover" alt="" />
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <router-link :to="'/blog/' + article.slug" class="block mt-2">
          <p class="text-2xl font-semibold text-gray-900">
            {{ article.title }}
          </p>
          <p class="mt-3 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            accusantium praesentium eius, ut atque fuga culpa, similique sequi
            cum eos quis dolorum.
          </p>
        </router-link>
      </div>
      <div class="mt-6 flex items-center">
        <div>
          <p class="text-sm font-medium text-gray-900">{{ article.author }}</p>
          <div class="text-sm text-gray-500">
            <time datetime="2020-03-16">{{
              new Date(article.created_at).toLocaleDateString()
            }}</time>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: Object,
  },
  mounted() {
    console.log(this.article);
  },
};
</script>