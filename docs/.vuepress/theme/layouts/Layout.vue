<template>
  <SandboxLayout v-if="isSandbox"/>
  <ParentLayout v-else>
    <CodeFund slot="sidebar-top"/>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue';
import CodeFund from '../components/CodeFund.vue';
import SandboxLayout from './SandboxLayout';

export default {
  data: () => ({
    isSidebarOpen: false,
  }),
  components: {
    SandboxLayout,
    ParentLayout,
    CodeFund,
  },
  computed: {
    isSandbox () {
      const {frontmatter} = this.$page;
      return frontmatter.hasOwnProperty('isSandbox');
    },
  },
};
</script>

<style>
  #codefund {
    border-bottom: 1px solid #eaecef;
    min-height: 115px;
  }

  #codefund + .sidebar-links {
    padding-top: 1rem;
  }
</style>
