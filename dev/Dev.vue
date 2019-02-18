<template>
  <div id="app">

    <div id="config">
      <div class="form-control">
        <label for="multiple">
          <input id="multiple" type="checkbox" v-model="configuration.multiple">
          <code>multiple</code>
        </label>
      </div>

      <div class="form-control">
        <label for="disabled">
          <input id="disabled" type="checkbox" v-model="configuration.disabled">
          <code>disabled</code>
        </label>
      </div>

      <div class="form-control">
        <label for="rtl">
          <input id="rtl" type="radio" v-model="configuration.dir" value="rtl">
          <code>dir="rtl"</code>
        </label>
        <label for="ltr">
          <input id="ltr" type="radio" v-model="configuration.dir" value="ltr">
          <code>dir="ltr"</code>
        </label>
      </div>

      <div class="form-control">
        <label for="taggable">
          <input id="taggable" type="checkbox" v-model="configuration.taggable">
          <code>taggable</code>
        </label>
      </div>

      <div class="form-control">
        <label for="noDrop">
          <input id="noDrop" type="checkbox" v-model="configuration.noDrop">
          <code>no-drop</code>
        </label>
      </div>

      <div class="form-control">
        <label for="pushTags">
          <input id="pushTags" type="checkbox" v-model="configuration.pushTags">
          <code>push-tags</code>
        </label>
      </div>

      <div class="form-control">
        <label for="selectOnTab">
          <input id="selectOnTab" type="checkbox" v-model="configuration.selectOnTab">
          <code>select-on-tab</code>
        </label>
      </div>

      <div class="form-control">
        <label for="clearable">
          <input id="clearable" type="checkbox" v-model="configuration.clearable">
          <code>clearable</code>
        </label>
      </div>

      <div class="form-control">
        <label for="searchable">
          <input id="searchable" type="checkbox" v-model="configuration.searchable">
          <code>searchable</code>
        </label>
      </div>

      <div class="form-control">
        <label for="closeOnSelect">
          <input id="closeOnSelect" type="checkbox" v-model="configuration.closeOnSelect">
          <code>close-on-select</code>
        </label>
      </div>
    </div>

    <div id="sandbox">

      <div class="example">
        <v-select v-bind="configuration" placeholder="country objects"></v-select>
      </div>

      <div class="example">
        <v-select v-bind="configuration" placeholder="country objects, using option scoped slots">
          <template slot="selected-option" slot-scope="{ label, value }">
            {{ label }} -- {{ value }}
          </template>
          <template slot="option" slot-scope="{ label, value }">
            {{ label }} ({{ value }})
          </template>
        </v-select>
      </div>

      <div class="example">
        <v-select v-bind="configuration" :options="['cat', 'dog', 'bear']" placeholder="string options, option slots">
          <template slot="selected-option" slot-scope="{ label }">
            {{ label }}
          </template>
          <template slot="option" slot-scope="{ label }">
            {{ label }}
          </template>
        </v-select>
      </div>

      <div class="example">
        <v-select v-bind="configuration" options="[1,5,10]" placeholder="options=[1,5,10]"></v-select>
      </div>

      <div class="example">
        <v-select v-bind="configuration" label="title" :options="optionDataSets.books" :filter="fuseSearch" placeholder="advanced filtering w/ fuse.js + scoped slots">
          <template slot="option" slot-scope="option">
            <strong>{{ option.title }}</strong><br>
            <em>{{ `${option.author.firstName} ${option.author.lastName}` }}</em>
          </template>
        </v-select>
      </div>

      <div class="example">
        <v-select v-bind="configuration" :options="[]" placeholder=":options=[]"></v-select>
      </div>
    </div>


    <!--<v-select placeholder="search github.." label="full_name" @search="search" :options="ajaxRes"></v-select>-->


    <!--<v-select multiple placeholder="custom label template" :options="options">-->
    <!--<span-->
    <!--slot="selected-option-container"-->
    <!--slot-scope="props"-->
    <!--class="selected-tag"-->
    <!--&gt;-->
    <!--{{ props.option.label }} ({{ props.option.value }})-->
    <!--<button v-if="props.multiple" @click="props.deselect(props.option)" type="button" class="close" aria-label="Remove option">-->
    <!--<span aria-hidden="true">&times;</span>-->
    <!--</button>-->
    <!--</span>-->
    <!--</v-select>-->
    <!--<v-select placeholder="filterable=false, @search=searchPeople" label="first_name" :filterable="false" @search="searchPeople" :options="people"></v-select>-->
  </div>
</template>

<script>
import Fuse from 'fuse.js';
import debounce from 'lodash/debounce';
import vSelect from '../src/components/Select.vue';
import countries from './data/countryCodes';
import books from './data/books';

const defaultConfig = () => ({
  options: countries,
  multiple: false,
  dir: 'ltr',
  clearable: true,
  searchable: true,
  noDrop: false,
  closeOnSelect: true,
  disabled: false,
  selectOntab: false,
  placeholder: 'placeholder',
});

export default {
  components: {vSelect},
  data () {
    return {
      configuration: defaultConfig(),
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
};
</script>

<style>
  /*@import "https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/css/foundation.min.css";*/
  /*@import "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.2/css/bulma.min.css";*/
  /*@import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css";*/
  /*@import "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css";*/

  body,
  html {
    margin: 0;
    height: 100%;
    font-family: -apple-system, sans-serif;
  }

  #app {
    min-height: 100%;
    display: grid;
    grid-template-columns: 25% 75%;
    grid-template-rows: 100%;
  }

  #config {
    border-right: 1px solid #d9d9d9;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #sandbox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form-control {
    margin-bottom: 1rem;
    padding: 1rem 1rem 0;
  }

  .form-control:not(:first-child) {
    border-top: 1px solid #d9d9d9;
  }

  .example {
    margin-bottom: 2rem;
  }

  .v-select {
    width: 25em;
  }
</style>
