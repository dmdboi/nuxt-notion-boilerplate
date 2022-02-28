<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-white shadow-lg">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-gray-500 hover:bg-gray-100
            "
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="openMenu = !openMenu"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          class="
            flex-1 flex
            items-center
            justify-center
            sm:items-stretch sm:justify-between
          "
        >
          <router-link to="/" class="flex-shrink-0 flex items-center font-bold"
            >✒ My Blog</router-link
          >
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8"></div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu" v-if="openMenu">
      <div class="pt-2 pb-4 space-y-1"></div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      openMenu: false,
    };
  },
};
</script>