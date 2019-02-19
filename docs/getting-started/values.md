# Selecting Values

The most common use case for `vue-select` is to have the chosen value synced with a parent component. `vue-select` takes advantage of the `v-model` syntax to sync values with a parent.

```html
<v-select v-model="selected"></v-select>
```

<CodePen url="Kqxbjw" height="250"/>

If you don't require the `value` to be synced, you can also pass the prop directly:

```html
<v-select :value="selected"></v-select>
```

This method allows you to pre-select a value(s), without syncing any changes to the parent component. This is also very useful when using a state management tool, like Vuex.

## Single/Multiple Selection

By default, `vue-select` supports choosing a single value. If you need multiple values, use the `multiple` prop:

```html
<v-select multiple v-model="selected"></v-select>
```

<CodePen url="opMGro" height="250"/>

## Tagging

To allow input that's not present within the options, set the `taggable` prop to true.
If you want new tags to be pushed to the options list, set `push-tags` to true.

<CodePen url="XVoWxm" height="350"/>

## Return a Single Key from an Object

When the `options` array contains objects, `vue-select` returns the whole object as dropdown value upon selection. You can specify your own `index` prop to return only the value contained in the specific property.

For example, consider an object with `value` and `label` properties:

```json
{
  value: "CA",
  label: "Canada"
}
```

If you wanted to return `CA` in the dropdown when `Canada` is selected, you'd use the `index` key:

```html
<v-select index="value" :options="countries"></v-select>
```
