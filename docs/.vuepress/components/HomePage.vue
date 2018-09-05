<template>
  <div id="home" class="flex flex-col items-center justify-center">
    <header class="w-1/2 text-center">
      <h1>Vue Select</h1>
      <p class="mx-auto my-5">
        Everything you wish the native <span class="font-mono">&#x3C;select&#x3E;</span> element could do,
        wrapped up into a zero dependency, highly extensible Vue component.
      </p>
    </header>

    <section class="flex">
      <div>
        <ul class="list-reset text-right">
          <li>
            <a href="https://github.com/sagalbot/vue-select"><img
                    src="https://img.shields.io/github/stars/sagalbot/vue-select.svg?label=Stars&style=for-the-badge"
                    alt="GitHub Stars"></a>
          </li>
          <li>
            <a href="https://github.com/sagalbot/vue-select/releases">
              <img src="https://img.shields.io/github/release/sagalbot/vue-select.svg?style=for-the-badge"
                   alt="Current Release"></a>
          </li>
          <li><a href="https://www.npmjs.com/package/vue-select"><img
                  src="https://img.shields.io/npm/dm/vue-select.svg?style=for-the-badge" alt="Downloads per Month"></a>
          </li>
          <li><a href="https://coveralls.io/github/sagalbot/vue-select">
            <img src="https://img.shields.io/coveralls/github/sagalbot/vue-select/ft%2Fvue-cli-v3.svg?style=for-the-badge"
                 alt="Code Coverage"/></a></li>
          <li><a href="https://github.com/sagalbot/vue-select/blob/master/LICENSE.md"><img
                  src="https://img.shields.io/github/license/sagalbot/vue-select.svg?style=for-the-badge"
                  alt="MIT License"></a></li>
        </ul>

        <ul>
          <li>Supports Vuex</li>
          <li>Tagging Support</li>
          <li>Custom Templating</li>
          <li>Zero JS/CSS dependencies</li>
          <li>Custom Filtering Algorithms</li>
        </ul>

        <ul>
          <li>+95% Test Coverage</li>
          <li>Select Single/Multiple</li>
          <li>Typeahead Suggestions</li>
          <li>Supports RTL & Translations</li>
          <li>Plays nice with CSS Frameworks</li>
        </ul>

        <p>And so much more! Get started with:</p>

        <p>
          <code class="p-5 m-5 bg-grey-lighter">yarn add vue-select</code>
        </p>

        <p class="cta">
          <a class="btn" href="https://github.com/sagalbot/vue-select">
            <span class="octicon octicon-mark-github"></span> View on GitHub
          </a>

          <router-link class="btn" to="/docs/">
            <span class="octicon octicon-book"></span> Read the Docs
          </router-link>
        </p>
      </div>

      <div>

      </div>
    </section>
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
