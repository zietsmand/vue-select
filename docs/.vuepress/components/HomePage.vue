<template>
  <div id="home">
    <div class="container">
    <h1>Vue Select</h1>

    <p class="accolades lead">
      <a href="https://github.com/sagalbot/vue-select">
        <img src="https://img.shields.io/github/stars/sagalbot/vue-select.svg?label=Stars&style=flat-square"
             alt="GitHub Stars">
      </a>
      <a href="https://www.npmjs.com/package/vue-select">
        <img src="https://img.shields.io/npm/dm/vue-select.svg?style=flat-square" alt="Downloads per Month">
      </a>
      <a href="https://codeclimate.com/github/sagalbot/vue-select/maintainability">
        <img src="https://img.shields.io/codeclimate/maintainability/sagalbot/vue-select.svg?style=flat-square"
             alt="Maintainability"/>
      </a>

      <img src="https://img.shields.io/github/license/sagalbot/vue-select.svg?style=flat-square" alt="MIT License">
      <img src="https://img.shields.io/github/release/sagalbot/vue-select.svg?style=flat-square"
           alt="Current Release">
    </p>

    <p class="lead">
      A Vue.js select component that provides similar functionality
      to Select2/Chosen without the overhead of jQuery.
    </p>

    <ClientOnly>
      <v-select id="v-select" :options="options" @input="redirect" label="title">
        <template slot="option" slot-scope="option">
          <span class="octicon" :class="option.icon"></span>
          {{ option.title }}
        </template>
      </v-select>
    </ClientOnly>

    <section class="content">
      <div class="feature-list">
        <ul class="list-vue">
          <li>Supports Vuex</li>
          <li>Tagging Support</li>
          <li>Custom Templating</li>
          <li>Zero JS/CSS dependencies</li>
          <li>Custom Filtering Algorithms</li>
        </ul>

        <ul class="list-vue">
          <li>+95% Test Coverage</li>
          <li>Select Single/Multiple</li>
          <li>Typeahead Suggestions</li>
          <li>Supports RTL & Translations</li>
          <li>Plays nice with CSS Frameworks</li>
        </ul>
      </div>

      <p>
        And so much more! Get started with: <br>
        <code>yarn add vue-select</code>
      </p>

      <div class="cta">
        <a class="btn btn-primary btn-outline btn-lg" href="https://github.com/sagalbot/vue-select">
          <span class="octicon octicon-mark-github"></span> View on GitHub
        </a>

        <router-link class="btn btn-primary btn-outline btn-lg" to="/docs/">
          <span class="octicon octicon-book"></span> Read the Docs
        </router-link>
      </div>
    </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../scss/home";
</style>

<script>
export default {
  data () {
    return {
      loading: false,
      selected: null,
      options: [
        {
          title: 'Read the Docs',
          icon: 'octicon-book',
          url: 'docs/',
        },
        {
          title: 'View on GitHub',
          icon: 'octicon-mark-github',
          url: 'https://github.com/sagalbot/vue-select',
        },
        {
          title: 'View on NPM',
          icon: 'octicon-database',
          url: 'https://www.npmjs.com/package/vue-select',
        },
        {
          title: 'View Code Climate Analysis',
          icon: 'octicon-graph',
          url: 'https://codeclimate.com/github/sagalbot/vue-select',
        },
        {
          title: 'View Codepen Examples',
          icon: 'octicon-pencil',
          url: 'https://codepen.io/collection/nrkgxV/',
        },
      ],
    };
  },
  methods: {
    redirect (option) {
      // if (window) {
      //   window.location = option.url;
      // }
    },
  },
};
</script>
