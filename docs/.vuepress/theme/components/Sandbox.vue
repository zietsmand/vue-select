<template>
  <div id="sandbox-wrap">
    <div id="sidebar">

      <div class="list-item" v-if="!hideHelp">
        <CodeFund/>
      </div>

      <template v-for="config in configuration">
        <h5 v-if="config.type === types.HEADING" class="list-item">{{ config.title }}</h5>
        <div v-else-if="config.type === types.CHECKBOX" class="list-item">
          <label :for="config.prop">
            <input :id="config.prop" type="checkbox" v-model="props[config.prop]">
            <code>:{{ config.prop }}="{{ props[config.prop] ? 'true' : 'false' }}"</code>
          </label>
        </div>
      </template>

      <h5 class="list-item">Localization / i18n</h5>

      <div class="list-item">
        <label for="rtl">
          <input id="rtl" type="radio" v-model="configuration.dir" value="rtl">
          <code>dir="rtl"</code>
        </label>
        <label for="ltr">
          <input id="ltr" type="radio" v-model="configuration.dir" value="ltr">
          <code>dir="ltr"</code>
        </label>
      </div>
    </div>


    <div id="sandbox">
      <slot v-bind="props">
        <div class="example">
          <v-select v-bind="props" placeholder="country objects"></v-select>
        </div>

        <div class="example">
          <v-select v-bind="props" placeholder="country objects, using option scoped slots">
            <template slot="selected-option" slot-scope="{ label, value }">
              {{ label }} -- {{ value }}
            </template>
            <template slot="option" slot-scope="{ label, value }">
              {{ label }} ({{ value }})
            </template>
          </v-select>
        </div>

        <div class="example">
          <v-select v-bind="props" :options="['cat', 'dog', 'bear']"
                    placeholder="string options, option slots">
            <template slot="selected-option" slot-scope="{ label }">
              {{ label }}
            </template>
            <template slot="option" slot-scope="{ label }">
              {{ label }}
            </template>
          </v-select>
        </div>

        <div class="example">
          <v-select v-bind="props" :options="[1,5,10]" placeholder="options=[1,5,10]"></v-select>
        </div>

        <div class="example">
          <v-select v-bind="props" label="title" :options="optionDataSets.books"
                    :filter="fuseSearch"
                    placeholder="advanced filtering w/ fuse.js + scoped slots">
            <template slot="option" slot-scope="option">
              <strong>{{ option.title }}</strong><br>
              <em>{{ `${option.author.firstName} ${option.author.lastName}` }}</em>
            </template>
          </v-select>
        </div>

        <div class="example">
          <v-select
                  v-bind="props"
                  placeholder="search github repositories.."
                  label="full_name"
                  @search="search"
                  :options="ajaxRes"
          >
          </v-select>
        </div>

        <div class="example">
          <v-select v-bind="props" :options="[]" placeholder="options=[]"></v-select>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import Fuse from 'fuse.js';
import debounce from 'lodash/debounce';
import CodeFund from './CodeFund';
import vSelect from '../../../../src/components/Select.vue';
import countries from '../../data/countryCodes';
import books from '../../data/books';

const defaultConfig = () => ({
  options: countries,
  multiple: false,
  dir: 'ltr',
  clearable: true,
  searchable: true,
  filterable: true,
  noDrop: false,
  closeOnSelect: true,
  disabled: false,
  selectOntab: false,
  placeholder: 'Select a Country...',
});

const HEADING = 'heading';
const CHECKBOX = 'checkbox';

export default {
  props: {
    hideHelp: {
      type: Boolean,
      default: false,
    },
  },
  components: {vSelect, CodeFund},
  data () {
    return {
      props: defaultConfig(),
      value: null,
      ajaxRes: [],
      people: [],
      optionDataSet: 'countries',
      optionDataSets: {
        countries,
        books,
      },
    };
  },
  methods: {
    search (search, loading) {
      loading(true);
      this.getRepositories(search, loading, this);
    },
    searchPeople (search, loading) {
      loading(true);
      this.getPeople(loading, this);
    },
    getPeople: debounce((loading, vm) => {
      vm.$http.get(`https://reqres.in/api/users?per_page=10`).then(res => {
        vm.people = res.data.data;
        loading(false);
      });
    }, 250),
    getRepositories: debounce((search, loading, vm) => {
      vm.$http
        .get(`https://api.github.com/search/repositories?q=${search}`)
        .then(res => {
          vm.ajaxRes = res.data.items;
          loading(false);
        });
    }, 250),
    fuseSearch (options, search) {
      return new Fuse(options, {
        keys: ['title', 'author.firstName', 'author.lastName'],
      }).search(search);
    },
  },
  computed: {
    types () {
      return {HEADING, CHECKBOX};
    },
    configuration () {
      return [
        {
          type: HEADING,
          title: 'Basics',
        },
        {
          prop: 'multiple',
          type: CHECKBOX,
        },
        {
          prop: 'disabled',
          type: CHECKBOX,
        },
        {
          prop: 'clearable',
          type: CHECKBOX,
        },
        {
          prop: 'searchable',
          type: CHECKBOX,
        },

        {
          type: HEADING,
          title: 'Tagging',
        },
        {
          prop: 'taggable',
          type: CHECKBOX,
        },
        {
          prop: 'noDrop',
          type: CHECKBOX,
        },
        {
          prop: 'pushTags',
          type: CHECKBOX,
        },

        {
          type: HEADING,
          title: 'UX',
        },
        {
          prop: 'selectOnTab',
          type: CHECKBOX,
        },
        {
          prop: 'closeOnSelect',
          type: CHECKBOX,
        },
      ];
    },
  },
};
</script>

<style scoped>

</style>
