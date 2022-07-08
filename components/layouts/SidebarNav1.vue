<template>
  <a href="#" class="group flex items-center rounded-lg px-3 py-2 text-base transition-all duration-200 bg-gray-200 font-semibold text-gray-900">
    <Dashboard />
    <span class="truncate">Dashboard</span>
  </a>

  <a href="#" class="group flex items-center rounded-lg px-3 py-2 text-base transition-all duration-200 font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900">
    <Content />
    <span class="truncate">Content</span>
  </a>

  <a href="#" class="group flex items-center rounded-lg px-3 py-2 text-base transition-all duration-200 font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900">
    <Pages />
    <span class="truncate">Pages</span>
  </a>

  <a href="#" class="group flex items-center rounded-lg px-3 py-2 text-base transition-all duration-200 font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900">
    <Tags />
    <span class="truncate">Tags</span>
  </a>

  <a href="#" class="group flex items-center rounded-lg px-3 py-2 text-base transition-all duration-200 font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900">
    <Authors />
    <span class="truncate">Authors</span>
  </a>
</template>

<script>
import Dashboard from '@/assets/icons/Dashboard.vue';
import Content from '@/assets/icons/Content.vue';
import Pages from '@/assets/icons/Pages.vue';
import Tags from '@/assets/icons/Tags.vue';
import Authors from '@/assets/icons/Authors.vue';

export default {
  name: 'SidebarNav1',

  components: {
    Dashboard,
    Content,
    Pages,
    Tags,
    Authors,
  },

  setup() {},
};
</script>

// selected sidebar nav menu classes:
group flex items-center rounded-lg px-3 py-2 text-base transition-all duration-200 bg-gray-200 font-semibold text-gray-900

// unselected sidebar nav menu classes:
group flex items-center rounded-lg px-3 py-2 text-base transition-all duration-200 font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900