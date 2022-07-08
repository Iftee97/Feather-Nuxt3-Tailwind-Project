<template class="class=h-full overflow-x-hidden bg-gray-50 font-sans text-gray-900 antialiased overflow-y-hidden">
  <HiddenSidebar :toggleValue="store.showHiddenSidebar" />

  <div class="flex h-full flex-col">
    <Header />

    <div class="flex min-h-0 flex-1 overflow-hidden">
      <Sidebar />
      <slot />
    </div>
  </div>
</template>


<script setup>
import Header from '@/components/layouts/Header.vue';
import Sidebar from '@/components/layouts/Sidebar.vue';
import HiddenSidebar from '@/components/layouts/HiddenSidebar.vue';

import { useStore } from '@/stores/pinia_store';
const store = useStore();
store.showHiddenSidebar;
</script>
