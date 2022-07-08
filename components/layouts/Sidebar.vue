<template>
  <nav class="hidden lg:block lg:flex-shrink-0 lg:overflow-y-auto lg:border-r lg:border-gray-200 lg:bg-white" aria-label="Sidebar">
    <div class="relative flex w-64 flex-col space-y-5 p-4">
      <div class="flex items-center">
        <div class="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-300"></div>
        <div class="ml-3 flex-1 overflow-hidden">
          <p class="truncate text-base font-semibold text-gray-900">example user</p>
          <p class="truncate text-sm font-medium text-gray-500 transition-all duration-200 hover:text-gray-900 hover:underline">
            <a target="_blank" rel="noopener" href="https://swadhin.feather.blog">example.feather.blog</a>
          </p>
        </div>
      </div>

      <nav class="space-y-1">
        <SidebarNavs />
      </nav>
    </div>
  </nav>
</template>

<script>
import SidebarNavs from '@/components/layouts/SidebarNavs.vue';

export default {
  name: 'Sidebar',

  components: {
    SidebarNavs,
  },
};
</script>
