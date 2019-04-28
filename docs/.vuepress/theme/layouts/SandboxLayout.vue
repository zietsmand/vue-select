<template>
  <div
          class="theme-container"
          :class="pageClasses"
          @touchstart="onTouchStart"
          @touchend="onTouchEnd"
  >
    <Navbar v-if="shouldShowNavbar"/>
    <sandbox/>
  </div>
</template>
<script>
import Navbar from '@parent-theme/components/Navbar.vue';
import Layout from '@parent-theme/layouts/Layout.vue';
import Sandbox from '../components/Sandbox.vue';

export default {
  name: 'SandboxLayout',
  components: {Navbar, Sandbox},
  computed: {
    ...Layout.computed,
  },
  methods: {
    ...Layout.methods,
  },
};
</script>
