<template>
  <p :data-height="height"
     data-theme-id="dark"
     :data-slug-hash="url"
     data-default-tab="result"
     data-user="sagalbot"
     class="codepen">
  </p>
</template>

<script>
export default {
  props: ['url', 'height'],
};
</script>
