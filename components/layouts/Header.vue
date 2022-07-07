<template>
  <header class="relative z-10 w-full flex-shrink-0">
    <div class="absolute -inset-0.5 rotate-180 opacity-30 blur-lg bg-conic-gradient" style="filter: blur(16px)"></div>

    <div class="relative flex h-18 items-center border-b border-gray-200 bg-white/90 px-4 py-4 backdrop-blur-lg sm:px-6" style="backdrop-filter: blur(16px)">
      <div class="flex w-full items-center justify-between">
        <button id="hamburger-btn" class="-m-2 inline-flex items-center justify-center rounded-lg bg-transparent p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <div class="ml-6 mr-auto flex flex-shrink-0 lg:ml-0 lg:mr-0">
          <a href="/" title="Feather" class="inline-flex items-center rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-8">
            <img class="h-9 w-auto" src="https://feather.so/build/_assets/logo-dark-NENIW3C5.svg" alt="Feather Logo" />
            <span class="ml-1 text-2xl font-bold tracking-tight text-gray-900">feather</span>
          </a>
        </div>

        <div class="mr-4 lg:hidden">
          <span class="relative inline-block">
            <!-- SOMETHING BAT SHIT CRAZY GOES ON IN HERE -->

            <strong class="z-1 relative font-bold">
              <button type="button" class="font-semibold">Premium User</button>
            </strong>
          </span>
        </div>

        <div class="relative flex lg:hidden">
          <button class="inline-flex items-center" aria-expanded="false" aria-controls="dropdown-button">
            <span class="sr-only">Open dropdown menu</span>
            <span class="inline-block h-8 w-8 overflow-hidden rounded-lg bg-gray-100">
              <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </span>
          </button>
        </div>

        <div class="hidden lg:ml-12 lg:mr-auto lg:flex lg:items-center lg:space-x-12">
          <a href="/dashboard" class="inline-flex items-center rounded text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-4 font-medium text-gray-500 hover:text-gray-900 focus:ring-gray-900">Home</a>
          <a href="/showcase" class="inline-flex items-center rounded text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-4 font-medium text-gray-500 hover:text-gray-900 focus:ring-gray-900">Showcase</a>
          <a href="/billing" class="inline-flex items-center rounded text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-4 font-medium text-gray-500 hover:text-gray-900 focus:ring-gray-900">Billing & Plans</a>
        </div>

        <div class="hidden lg:flex lg:items-center lg:justify-end lg:space-x-10">
          <div class="hidden lg:block">
            <span class="relative inline-block">
              <!-- SOMETHING BAT SHIT CRAZY GOES ON IN HERE TOO -->

              <strong class="z-1 relative font-bold">
                <button type="button" class="font-semibold">Premium User</button>
              </strong>
            </span>
          </div>

          <div class="relative">
            <button @click="toggleDropdown" aria-controls="dropdown-button" aria-expanded="false" type="button" class="inline-flex items-center justify-center rounded-lg border border-transparent bg-gray-100 px-4 py-2 text-base font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
              <span class="sr-only">Open dropdown menu</span>
              <svg class="-ml-1 h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM7 16.3333C7 14.4924 8.49238 13 10.3333 13H13.6667C15.5076 13 17 14.4924 17 16.3333C17 17.2538 16.2538 18 15.3333 18H8.66667C7.74619 18 7 17.2538 7 16.3333ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"></path>
              </svg>
              <span class="ml-2 max-w-[120px] truncate">example@email.com</span>
              <svg class="ml-1 -mr-1 h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.46967 8.46967C5.76256 8.17678 6.23744 8.17678 6.53033 8.46967L10.2676 12.2069C10.6724 12.6117 10.9444 12.883 11.1708 13.0751C11.3904 13.2615 11.5171 13.329 11.6137 13.3604C11.8648 13.442 12.1352 13.442 12.3863 13.3604C12.4829 13.329 12.6096 13.2615 12.8292 13.0751C13.0556 12.883 13.3276 12.6117 13.7324 12.2069L17.4697 8.46967C17.7626 8.17678 18.2374 8.17678 18.5303 8.46967C18.8232 8.76256 18.8232 9.23744 18.5303 9.53033L14.7931 13.2676L14.7715 13.2891C14.3938 13.6668 14.0786 13.9821 13.8 14.2186C13.5094 14.4653 13.2098 14.67 12.8498 14.787C12.2975 14.9664 11.7025 14.9664 11.1502 14.787C10.7902 14.67 10.4906 14.4653 10.2 14.2186C9.9214 13.9821 9.60615 13.6668 9.22846 13.2891L9.20693 13.2676L5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967Z"></path>
              </svg>
            </button>

            <div v-if="openDropdown" id="dropdown-button" class="absolute right-0 mt-3 w-48 divide-y divide-gray-100 rounded-lg border border-gray-100 bg-white shadow-xl">
              <div class="px-4 py-3" role="none">
                <p class="text-sm font-medium text-gray-500" role="none">Signed in as</p>
                <p class="truncate text-sm font-semibold text-gray-900" role="none">example@email.com</p>
              </div>

              <div class="py-1">
                <a href="/onboarding" class="flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Create Blog</a>
                <a href="/billing" class="flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Billing & Plans</a>
              </div>

              <div class="py-1">
                <button type="submit" class="flex w-full items-center px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" role="menu-item">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue';
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  setup() {
    const openDropdown = ref(false);

    function toggleDropdown() {
      openDropdown.value = !openDropdown.value;
    }

    return {
      openDropdown,
      toggleDropdown,
    };
  },

  mounted() {
    console.log('Hello');
  },
};
</script>

<style>
.bg-conic-gradient {
  background: linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%);
}
</style>
