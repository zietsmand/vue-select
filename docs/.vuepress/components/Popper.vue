<template>
  <v-select :options="books" :position="position" label="title"/>
</template>

<script>
import books from '../data/books';
import Popper from 'popper.js';

export default {
  data: () => ({
    books,
  }),
  methods: {
    position ({$refs}) {
      if ($refs.dropdownMenu) {
        new Popper($refs.toggle, $refs.dropdownMenu, {
          placement: 'top',
        });
      }
    },
  },
};
</script>
