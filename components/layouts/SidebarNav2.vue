<template>
  <a href="#" class="group flex items-center rounded-lg px-3 py-2 text-base transition-all duration-200 font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900">
    <Analytics />
    <span class="truncate">Analytics</span>
  </a>

  <a href="#" class="group flex items-center rounded-lg px-3 py-2 text-base transition-all duration-200 font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900">
    <Domains />
    <span class="truncate">Domains</span>
  </a>

  <a href="#" class="group flex items-center rounded-lg px-3 py-2 text-base transition-all duration-200 font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900">
    <Settings />
    <span class="truncate">Settings</span>
  </a>
</template>

<script>
import Analytics from '@/assets/icons/Analytics.vue';
import Domains from '@/assets/icons/Domains.vue';
import Settings from '@/assets/icons/Settings.vue';

export default {
  name: 'SidebarNav2',

  components: {
    Analytics,
    Domains,
    Settings,
  },

  setup() {},
};
</script>
