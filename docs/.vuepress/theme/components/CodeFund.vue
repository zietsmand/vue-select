<script>
export default {
  render (h) {
    return h('div', {
      attrs: {id: this.adProvider}, class: {
        'carbon-ads': this.adProvider === 'carbon',
      },
    });
  },
  data: () => ({
    adProvider: null,
  }),
  mounted () {
    // this.loadAds();
    this.loadCarbon();
  },
  watch: {
    '$route' (to, from) {
      if (
        to.path !== from.path
        // Only reload if the ad has been loaded
        // otherwise it's possible that the script is appended but
        // the ads are not loaded yet. This would result in duplicated ads.
        && (this.$el.querySelector('#cf') || this.$el.querySelector('#carbonads'))
      ) {
        this.$el.innerHTML = '';
        this.loadAds();
      }
    },
  },
  methods: {
    gaSendEvent ({category, action, label}) {
      if (typeof ga === 'function') {
        return ga('send', 'event', category, action, label);
      }
    },
    loadAds () {
      this.loadCodeFund();
    },
    createScript ({src, id, async = 'async'}) {
      const script = document.createElement('script');
      script.id = id;
      script.src = src;
      script.async = async;
      return script;
    },
    carbonFallback () {
      this.$el.innerHTML = '';
      this.loadCarbon();
    },
    loadCodeFund () {
      window.addEventListener('codefund', ({detail}) => {
        /**
         * Loading an unpaid impression
         * @see https://medium.com/codefund/feature-ad-callbacks-ac2ca43a6cd6
         */
        if (detail.house || detail.status !== 'ok') {
          console.log('Loading Carbon ads.', detail);
          this.carbonFallback();
        } else {
          this.gaSendEvent({category: 'ad', action: 'rendered', label: 'CodeFund'})
        }
      });

      this.adProvider = 'codefund';
      const template = 'centered';
      this.$el.appendChild(this.createScript({
        src: `//codefund.app/properties/193/funder.js?template=${template}`,
        id: '_codefund_js',
      }));
    },
    loadCarbon () {
      this.adProvider = 'carbon';
      this.$el.appendChild(this.createScript({
        id: '_carbonads_js',
        src: '//cdn.carbonads.com/carbon.js?serve=CK7I65QY&placement=vue-selectorg',
      }));
    },
  },
};
</script>

<style lang="stylus">
  .carbon-ads
    min-height 102px
    padding 1.5rem 1.5rem 0
    margin-bottom -0.5rem
    font-size 0.75rem

    a
      color #444
      font-weight normal
      display inline

    .carbon-img
      float left
      margin-right 1rem
      border 1px solid $borderColor

      img
        display block

    .carbon-poweredby
      color #999
      display block
      margin-top 0.5em

  @media (max-width: $MQMobile)
    .carbon-ads
      .carbon-img img
        width 100px
        height 77px
</style>
