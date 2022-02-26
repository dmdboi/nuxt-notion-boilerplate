<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-gray-400">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2
            class="
              mt-1
              text-4xl
              font-extrabold
              text-gray-900
              sm:text-5xl sm:tracking-tight
              lg:text-6xl
            "
          >
            Blog
          </h2>
        </div>
      </div>
    </div>

    <div class="mt-12 max-w-7xl mx-auto grid gap-5 lg:grid-cols-3 py-16">
      <div
        class="flex flex-col rounded-lg shadow-lg overflow-hidden"
        v-for="item in notionData.results"
        :key="item.id"
      >
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <router-link
              :to="'/blog/' + item.properties.Slug.rich_text[0].plain_text"
              class="block mt-2"
            >
              <p class="text-xl font-semibold text-gray-900">
                {{ item.properties.Name.title[0]["plain_text"] }}
              </p>
            </router-link>
          </div>
          <div class="mt-6 flex items-center">
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">
                <a href="#" class="hover:underline">
                  {{ item.properties.Author.title[0]["plain_text"] }}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data: () => ({
    notionData: [],
  }),
  mounted: {
    async asyncData({ $axios }) {
      const response = await $axios.$get("/api/getBlog");
      this.notionData = response.data;
    },
  },
};
</script>
