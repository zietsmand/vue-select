<template>
  <v-select :options="books" label="title" multiple>
    <template #selected-option="{author, title, focus}">
      <component :is="option" v-bind="{author, title}" @click="focus"/>
    </template>
    <template #option="{author, title}">
      <component :is="option" v-bind="{author, title}"/>
    </template>
  </v-select>
</template>

<script>
import vSelect from '../../../src/components/Select';
import books from '../data/books';

export default {
  components: {vSelect},
  computed: {
    books: () => books,
    option: () => ({
      functional: true,
      render: (h, {props}) => h('div', {class: {author: true}}, [
        h('strong', props.title),
        h('i', `${props.author.firstName} ${props.author.lastName}`),
      ]),
    }),
  },
};
</script>

<style scoped>

</style>
