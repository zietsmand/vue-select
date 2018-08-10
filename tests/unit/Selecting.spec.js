import { shallowMount } from "@vue/test-utils";
import VueSelect from "@/components/Select.vue";

describe("VS - Selecting Values", () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      value: "one",
      options: ["one", "two", "three"]
    };
  });

  it("can accept an array with pre-selected values", () => {
    const Select = shallowMount(VueSelect, {
      propsData: defaultProps
    });
    expect(Select.mutableValue).toEqual(Select.value);
  });

  it("can accept an array of objects and pre-selected value (single)", () => {
    const Select = shallowMount(VueSelect, {
      propsData: {
        value: { label: "This is Foo", value: "foo" },
        options: [
          { label: "This is Foo", value: "foo" },
          { label: "This is Bar", value: "bar" }
        ]
      }
    });
    expect(Select.mutableValue).toEqual(Select.value);
  });

  it("can accept an array of objects and pre-selected values (multiple)", () => {
    const Select = shallowMount(VueSelect, {
      propsData: {
        value: [
          { label: "This is Foo", value: "foo" },
          { label: "This is Bar", value: "bar" }
        ],
        options: [
          { label: "This is Foo", value: "foo" },
          { label: "This is Bar", value: "bar" }
        ]
      },
      multiple: true
    });

    expect(Select.mutableValue).toEqual(Select.value);
  });

  it("can select an option on tab", () => {
    const Select = shallowMount(VueSelect, {
      propsData: {
        options: defaultProps.options,
        selectOnTab: true
      }
    });

    Select.typeAheadPointer = 0;

    Select.find({ ref: "search" }).trigger("keydown", {
      keyCode: 9
    });

    expect(Select.mutableValue).toEqual("one");
  });
  //
  // it('can deselect a pre-selected object', () => {
  //   const vm = new Vue({
  //     template:
  //       '<div><v-select :options="options" :value="value" :multiple="true"></v-select></div>',
  //     data: {
  //       value: [
  //         {label: 'This is Foo', value: 'foo'},
  //         {label: 'This is Bar', value: 'bar'},
  //       ],
  //       options: [
  //         {label: 'This is Foo', value: 'foo'},
  //         {label: 'This is Bar', value: 'bar'},
  //       ],
  //     },
  //   }).$mount();
  //   vm.$children[0].deselect({label: 'This is Foo', value: 'foo'});
  //   expect(vm.$children[0].mutableValue.length).toEqual(1);
  // });
  //
  // it('can deselect a pre-selected string', () => {
  //   const vm = new Vue({
  //     template:
  //       '<div><v-select :options="options" :value="value" :multiple="true"></v-select></div>',
  //     data: {
  //       value: ['foo', 'bar'],
  //       options: ['foo', 'bar'],
  //     },
  //   }).$mount();
  //   vm.$children[0].deselect('foo');
  //   expect(vm.$children[0].mutableValue.length).toEqual(1);
  // }),
  //   it('can deselect an option when multiple is false', () => {
  //     const vm = new Vue({
  //       template: `<div><v-select :value="'foo'"></v-select></div>`,
  //     }).$mount();
  //     vm.$children[0].deselect('foo');
  //     expect(vm.$children[0].mutableValue).toEqual(null);
  //   });
  //
  // it('can determine if the value prop is empty', () => {
  //   const vm = new Vue({
  //     template:
  //       '<div><v-select :options="options" :value="value"></v-select></div>',
  //     components: {vSelect},
  //     data: {
  //       value: [],
  //       options: ['one', 'two', 'three'],
  //     },
  //   }).$mount();
  //   var select = vm.$children[0];
  //   expect(select.isValueEmpty).toEqual(true);
  //
  //   select.select(['one']);
  //   expect(select.isValueEmpty).toEqual(false);
  //
  //   select.select([{l: 'f'}]);
  //   expect(select.isValueEmpty).toEqual(false);
  //
  //   select.select('one');
  //   expect(select.isValueEmpty).toEqual(false);
  //
  //   select.select({label: 'foo', value: 'foo'});
  //   expect(select.isValueEmpty).toEqual(false);
  //
  //   select.select('');
  //   expect(select.isValueEmpty).toEqual(true);
  //
  //   select.select(null);
  //   expect(select.isValueEmpty).toEqual(true);
  // });
  //
  // it('should reset the selected values when the multiple property changes',
  //   done => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :options="options" :value="value" :multiple="multiple"></v-select></div>',
  //       components: {vSelect},
  //       data: {
  //         value: ['one'],
  //         multiple: true,
  //         options: ['one', 'two', 'three'],
  //       },
  //     }).$mount();
  //
  //     vm.multiple = false;
  //
  //     Vue.nextTick(() => {
  //       expect(vm.$children[0].mutableValue).toEqual(null);
  //       vm.multiple = true;
  //       Vue.nextTick(() => {
  //         expect(vm.$children[0].mutableValue).toEqual([]);
  //         done();
  //       });
  //     });
  //   });
  //
  // it('can retain values present in a new array of options', () => {
  //   const vm = new Vue({
  //     template:
  //       '<div><v-select :options="options" v-model="value"></v-select></div>',
  //     components: {vSelect},
  //     data: {
  //       value: ['one'],
  //       options: ['one', 'two', 'three'],
  //     },
  //   }).$mount();
  //   vm.options = ['one', 'five', 'six'];
  //   expect(vm.$children[0].mutableValue).toEqual(['one']);
  // });
  //
  // it('can determine if an object is already selected', () => {
  //   const vm = new Vue({
  //     template:
  //       '<div><v-select :options="options" multiple v-model="value"></v-select></div>',
  //     components: {vSelect},
  //     data: {
  //       value: [{label: 'one'}],
  //       options: [{label: 'one'}],
  //     },
  //   }).$mount();
  //
  //   expect(vm.$children[0].isOptionSelected({label: 'one'})).toEqual(true);
  // });
  //
  // it('can use v-model syntax for a two way binding to a parent component',
  //   done => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :options="options" v-model="value"></v-select></div>',
  //       components: {vSelect},
  //       data: {
  //         value: 'foo',
  //         options: ['foo', 'bar', 'baz'],
  //       },
  //     }).$mount();
  //
  //     expect(vm.$children[0].value).toEqual('foo');
  //     expect(vm.$children[0].mutableValue).toEqual('foo');
  //
  //     vm.$children[0].mutableValue = 'bar';
  //
  //     Vue.nextTick(() => {
  //       expect(vm.value).toEqual('bar');
  //       done();
  //     });
  //   }),
  //   it(
  //     'can check if a string value is selected when the value is an object and multiple is true',
  //     () => {
  //       const vm = new Vue({
  //         template: `<div><v-select multiple :value="[{label: 'foo', value: 'bar'}]"></v-select></div>`,
  //       }).$mount();
  //       expect(vm.$children[0].isOptionSelected('foo')).toEqual(true);
  //     }),
  //   describe('change Event', () => {
  //     it('will trigger the input event when the selection changes', done => {
  //       const vm = new Vue({
  //         template: `<div><v-select ref="select"  :value="['foo']" :options="['foo','bar','baz']" v-on:input="foo = arguments[0]"></v-select></div>`,
  //         data: {
  //           foo: '',
  //         },
  //       }).$mount();
  //
  //       vm.$refs.select.select('bar');
  //
  //       Vue.nextTick(() => {
  //         expect(vm.foo).toEqual('bar');
  //         done();
  //       });
  //     });
  //
  //     it('should run change when multiple is true and the value changes',
  //       done => {
  //         const vm = new Vue({
  //           template: `<div><v-select ref="select" :value="['foo']" :options="['foo','bar','baz']" multiple v-on:input="foo = arguments[0]"></v-select></div>`,
  //           data: {
  //             foo: '',
  //           },
  //         }).$mount();
  //
  //         vm.$refs.select.select('bar');
  //
  //         Vue.nextTick(() => {
  //           expect(vm.foo).toEqual(['foo', 'bar']);
  //           done();
  //         });
  //       });
  //   });
});
