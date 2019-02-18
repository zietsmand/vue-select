<template>
  <div id="app">
    <sandbox hide-help>
      <template slot-scope="config">

      <v-select v-bind="config" />

      </template>
    </sandbox>
  </div>
</template>

<script>
import vSelect from '../src/components/Select';
import Sandbox from '../docs/.vuepress/components/Sandbox';
// import countries from '../docs/.vuepress/data/countryCodes';
// import books from '../docs/.vuepress/data/books';

export default {
  components: {Sandbox, vSelect},
};
</script>

<style>
  html,
  body {
    margin: 0;
    height: 100%;
    font-family: -apple-system, sans-serif;
  }
</style>
