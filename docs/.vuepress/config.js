const meta = {
  title: 'Vue Select | VueJS Select2/Chosen Component',
  description: 'A well-tested, native Vue.js component that provides similar functionality to Select2/Chosen without the overhead of jQuery.',
  icon: 'static/vue-logo.png',
};

module.exports = {
  title: 'Vue Select',
  description: meta.description,
  head: [
    [
      'link',
      {
        href: '//fonts.googleapis.com/css?family=Source+Sans+Pro:400,600|Roboto Mono',
        rel: 'stylesheet',
        type: 'text/css',
      }],
    [
      'link',
      {
        href: '//fonts.googleapis.com/css?family=Dosis:300&amp;text=Vue Select',
        rel: 'stylesheet',
        type: 'text/css',
      }],
    [
      'link',
      {
        href: 'https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/font/octicons.min.css',
        rel: 'stylesheet',
        type: 'text/css',
      }],
    ['meta', {name: 'title', content: meta.title}],
    ['meta', {name: 'description', content: meta.description}],
    ['link', {rel: 'icon', href: meta.icon, type: 'image/png'}],
    ['meta', {property: 'og:image', content: meta.icon}],
    ['meta', {property: 'twitter:image', content: meta.icon}],
    ['meta', {name: 'description', content: meta.description}],
    ['meta', {property: 'og:description', content: ''}],
    ['meta', {property: 'twitter:description', content: meta.description}],
    ['meta', {property: 'twitter:title', content: meta.title}],
    ['meta', {property: 'og:title', content: meta.title}],
    ['meta', {property: 'og:site_name', content: meta.title}],
    [
      'meta',
      {property: 'og:url', content: 'http://sagalbot.github.io/vue-select/'}],
  ],
  serviceWorker: true,
  ga: 'UA-12818324-8',
  themeConfig: {
    repo: 'sagalbot/vue-select',
    editLinks: true,
    docsDir: 'docs',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Sandbox', link: '/sandbox' }
    ],
    sidebar: {
      '/': [
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            ['getting-started/install', 'Installation'],
            ['getting-started/options', 'Dropdown Options'],
            ['getting-started/values', 'Selecting Values'],
            ['getting-started/localization', 'Localization'],
          ],
        },
        {
          title: 'Digging Deeper',
          collapsable: false,
          children: [
            ['digging-deeper/templating', 'Templating & Slots'],
            ['digging-deeper/vuex', 'Vuex'],
            ['digging-deeper/ajax', 'AJAX'],
            ['digging-deeper/examples', 'Examples'],
          ],
        },
        {
          title: 'API',
          collapsable: false,
          children: [
            ['api/props', 'Props'],
            ['api/slots', 'Slots'],
            ['api/events', 'Events'],
          ],
        },
      ],
      '/sandbox': false,
    },
  },

};
