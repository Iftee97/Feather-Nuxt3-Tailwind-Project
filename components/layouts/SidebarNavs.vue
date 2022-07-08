<template>
  <div v-for="(navItem, index) in navItemsData" :key="index">
    <a :href="navItem.link" @click="selected = index" class="group flex items-center rounded-lg px-3 py-2 text-base transition-all duration-200" :class="[selected === index ? 'bg-gray-200 font-semibold text-gray-900' : 'font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900']">
      <component :is="navItem.icon" />
      <span style="margin-left: 1rem">{{ navItem.name }}</span>
    </a>

    <hr class="my-4 border-gray-200" v-if="index === 4" />
  </div>
</template>

<script>
import Dashboard from '@/assets/icons/Dashboard.vue';
import Content from '@/assets/icons/Content.vue';
import Pages from '@/assets/icons/Pages.vue';
import Tags from '@/assets/icons/Tags.vue';
import Authors from '@/assets/icons/Authors.vue';
import Analytics from '@/assets/icons/Analytics.vue';
import Domains from '@/assets/icons/Domains.vue';
import Settings from '@/assets/icons/Settings.vue';

export default {
  name: 'SidebarNavs',

  components: {
    Dashboard,
    Content,
    Pages,
    Tags,
    Authors,
    Analytics,
    Domains,
    Settings,
  },

  setup() {},

  data() {
    return {
      selected: 0,

      navItemsData: [
        {
          name: 'Dashboard',
          icon: 'Dashboard',
          link: '#',
        },
        {
          name: 'Content',
          icon: 'Content',
          link: '#',
        },
        {
          name: 'Pages',
          icon: 'Pages',
          link: '#',
        },
        {
          name: 'Tags',
          icon: 'Tags',
          link: '#',
        },
        {
          name: 'Authors',
          icon: 'Authors',
          link: '#',
        },
        {
          name: 'Analytics',
          icon: 'Analytics',
          link: '#',
        },
        {
          name: 'Domains',
          icon: 'Domains',
          link: '#',
        },
        {
          name: 'Settings',
          icon: 'Settings',
          link: '#',
        },
      ],
    };
  },
};
</script>
