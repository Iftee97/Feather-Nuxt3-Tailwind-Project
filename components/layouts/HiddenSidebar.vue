<template>
  <div style="position: fixed; z-index: 9999; top: 16px; left: 16px; right: 16px; bottom: 16px; pointer-events: none"></div>

  <div class="pointer-events-none fixed inset-0 z-20 bg-gray-500 bg-opacity-75 transition-opacity ease-in-out" :class="[toggleValue ? 'pointer-events-auto opacity-100 duration-500' : 'pointer-events-none opacity-0 duration-300']" aria-hidden="true"></div>

  <aside class="fixed inset-0 z-40 h-screen w-full max-w-xs transform bg-white transition-all duration-500 ease-in-out sm:duration-700 lg:hidden" :class="[toggleValue ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0']">
    <div class="flex h-full flex-col divide-y divide-gray-200">
      <div class="flex-shrink-0 px-4 sm:px-6">
        <div class="flex h-[72px] items-center justify-between">
          <div class="flex flex-shrink-0">
            <nuxt-link to="/" title="Feather" class="inline-flex items-center rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-8">
              <img class="h-9 w-auto" src="https://feather.so/build/_assets/logo-dark-NENIW3C5.svg" alt />
              <span class="ml-1 text-2xl font-bold tracking-tight text-gray-900">feather</span>
            </nuxt-link>
          </div>

          <button @click="toggle" id="close-btn" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="sr-only">Close panel</span>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <div class="flex h-0 flex-1 flex-col overflow-y-auto px-4 py-6 sm:px-6">
        <div class="flex items-center">
          <div class="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300"></div>
          <div class="ml-3 flex-1 overflow-hidden">
            <p class="truncate text-base font-semibold text-gray-900">example user</p>
            <p class="truncate text-sm font-medium text-gray-500 transition-all duration-200 hover:text-gray-900 hover:underline">
              <a target="_blank" rel="noopener" href="https://example.feather.blog">example.feather.blog</a>
            </p>
          </div>
        </div>

        <nav class="space-y-1 mt-6" aria-label="Sidebar">
          <SidebarNav1 />
        </nav>

        <hr class="mt-6 border-gray-200" />

        <nav class="mt-6 space-y-1" aria-label="Sidebar">
          <SidebarNav2 />
        </nav>
      </div>

      <div class="mt-auto flex">
        <a href="#" class="flex w-full items-center px-4 py-4 font-semibold text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 sm:px-6">
          <svg class="mr-2 h-6 w-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5303 5.46967C14.8232 5.76256 14.8232 6.23744 14.5303 6.53033L10.7931 10.2676C10.3883 10.6724 10.117 10.9444 9.92491 11.1708C9.73847 11.3904 9.67102 11.5171 9.63961 11.6137C9.55804 11.8648 9.55804 12.1352 9.63961 12.3863C9.67102 12.4829 9.73847 12.6096 9.92491 12.8292C10.117 13.0556 10.3883 13.3276 10.7931 13.7324L14.5303 17.4697C14.8232 17.7626 14.8232 18.2374 14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303L9.73241 14.7931L9.71089 14.7715C9.33318 14.3939 9.01791 14.0786 8.7814 13.8C8.53473 13.5094 8.32999 13.2098 8.21302 12.8498C8.03357 12.2975 8.03357 11.7025 8.21302 11.1502C8.32999 10.7902 8.53473 10.4906 8.78141 10.2C9.01791 9.9214 9.33318 9.60615 9.71089 9.22845L9.73242 9.20693L13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967Z"></path>
          </svg>
          Go back to main dashboard
        </a>
      </div>
    </div>
  </aside>
</template>

<script>
import { useStore } from '@/stores/pinia_store';

import SidebarNav1 from '@/components/layouts/SidebarNav1.vue';
import SidebarNav2 from '@/components/layouts/SidebarNav2.vue';

export default {
  name: 'HiddenSidebar',

  props: ['toggleValue'],

  components: {
    SidebarNav1,
    SidebarNav2,
  },

  setup() {
    const store = useStore();

    const toggle = () => {
      store.toggleHiddenSidebar();
      // console.log('from HiddenSidebar Component toggle() function:', store.showHiddenSidebar);
    };

    return {
      toggle,
    };
  },
};
</script>
