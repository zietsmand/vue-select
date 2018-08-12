import { shallowMount } from "@vue/test-utils";
import VueSelect from "../../src/components/Select";

describe("When index prop is defined", () => {
  it("can accept an array of objects and pre-selected value (single)", () => {
    const Select = shallowMount(VueSelect, {
      propsData: {
        index: "value",
        value: "foo",
        options: [{ label: "This is Foo", value: "foo" }]
      }
    });
    expect(Select.vm.mutableValue).toEqual("foo");
  });
  //
  //   it("can determine if an object is pre-selected", () => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :options="options" v-model="value" index="id"></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         value: "foo",
  //         options: [
  //           {
  //             id: "foo",
  //             label: "This is Foo"
  //           }
  //         ]
  //       }
  //     }).$mount();
  //
  //     expect(
  //       vm.$children[0].isOptionSelected({
  //         id: "foo",
  //         label: "This is Foo"
  //       })
  //     ).toEqual(true);
  //   });
  //
  //   it("can determine if an object is selected after it has been chosen", () => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :options="options" index="id"></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         options: [{ id: "foo", label: "FooBar" }]
  //       }
  //     }).$mount();
  //
  //     vm.$children[0].select({ id: "foo", label: "FooBar" });
  //
  //     // Vue.nextTick(() => {
  //     expect(
  //       vm.$children[0].isOptionSelected({
  //         id: "foo",
  //         label: "This is Foo"
  //       })
  //     ).toEqual(true);
  //     // done()
  //     // })
  //   });
  //
  //   it("can accept an array of objects and pre-selected values (multiple)", () => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :index="index" :options="options" :value="value" :multiple="true"></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         index: "value",
  //         value: ["foo", "bar"],
  //         options: [
  //           { label: "This is Foo", value: "foo" },
  //           { label: "This is Bar", value: "bar" }
  //         ]
  //       }
  //     }).$mount();
  //     expect(vm.$children[0].mutableValue).toEqual(vm.value);
  //   });
  //
  //   it("can deselect a pre-selected object", () => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :index="index" :options="options" :value="value" :multiple="true"></v-select></div>',
  //       data: {
  //         index: "value",
  //         value: ["foo", "bar"],
  //         options: [
  //           { label: "This is Foo", value: "foo" },
  //           { label: "This is Bar", value: "bar" }
  //         ]
  //       }
  //     }).$mount();
  //     vm.$children[0].deselect("foo");
  //     expect(vm.$children[0].mutableValue.length).toEqual(1);
  //     expect(vm.$children[0].mutableValue).toEqual(["bar"]);
  //   });
  //
  //   it("can deselect an option when multiple is false", () => {
  //     const vm = new Vue({
  //       template: `<div><v-select :index="index" :options="options" :value="value"></v-select></div>`,
  //       data: {
  //         index: "value",
  //         value: "foo",
  //         options: [
  //           { label: "This is Foo", value: "foo" },
  //           { label: "This is Bar", value: "bar" }
  //         ]
  //       }
  //     }).$mount();
  //     vm.$children[0].deselect("foo");
  //     expect(vm.$children[0].mutableValue).toEqual(null);
  //   });
  //
  //   it("can use v-model syntax for a two way binding to a parent component", done => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :index="index" :options="options" v-model="value"></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         index: "value",
  //         value: "foo",
  //         options: [
  //           { label: "This is Foo", value: "foo" },
  //           { label: "This is Bar", value: "bar" },
  //           { label: "This is Baz", value: "baz" }
  //         ]
  //       }
  //     }).$mount();
  //
  //     expect(vm.$children[0].value).toEqual("foo");
  //     expect(vm.$children[0].mutableValue).toEqual("foo");
  //
  //     vm.$children[0].mutableValue = "bar";
  //
  //     Vue.nextTick(() => {
  //       expect(vm.value).toEqual("bar");
  //       done();
  //     });
  //   }),
  //     it("can work with an array of integers", () => {
  //       const vm = new Vue({
  //         template:
  //           '<div><v-select :options="[1,2,3,4,5]" v-model="value"></v-select></div>',
  //         components: { vSelect },
  //         data: {
  //           value: 5
  //         }
  //       }).$mount();
  //
  //       expect(vm.$children[0].isOptionSelected(5)).toEqual(true);
  //       expect(vm.$children[0].isValueEmpty).toEqual(false);
  //     });
  //
  //   it("can generate labels using a custom label key", () => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :index="index" label="name" :options="options" v-model="value" :multiple="true"></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         index: "value",
  //         value: ["baz"],
  //         options: [
  //           { value: "foo", name: "Foo" },
  //           { value: "baz", name: "Baz" }
  //         ]
  //       }
  //     }).$mount();
  //     expect(
  //       vm.$children[0].$refs.toggle.querySelector(".selected-tag").textContent
  //     ).toContain("Baz");
  //   });
  //
  //   it("will console.warn when attempting to select an option with an undefined index", () => {
  //     spyOn(console, "warn");
  //
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select index="value" :options="options"></v-select></div>',
  //       data: {
  //         options: [{ label: "Foo" }]
  //       }
  //     }).$mount();
  //     vm.$children[0].select({ label: "Foo" });
  //     expect(console.warn).toHaveBeenCalledWith(
  //       `[vue-select warn]: Index key "option.value" does not exist in options object {"label":"Foo"}.`
  //     );
  //   });
  //
  //   it("can find the original option within this.options", () => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select index="id" :options="options"></v-select></div>',
  //       data: {
  //         options: [{ id: 1, label: "Foo" }, { id: 2, label: "Bar" }]
  //       }
  //     }).$mount();
  //
  //     expect(vm.$children[0].findOptionByIndexValue(1)).toEqual({
  //       id: 1,
  //       label: "Foo"
  //     });
  //     expect(
  //       vm.$children[0].findOptionByIndexValue({ id: 1, label: "Foo" })
  //     ).toEqual({ id: 1, label: "Foo" });
  //   });
  //
  //   describe("And when option[index] is a nested object", () => {
  //     it("can determine if an object is pre-selected", () => {
  //       const nestedOption = {
  //         value: {
  //           nested: true
  //         },
  //         label: "foo"
  //       };
  //       const vm = new Vue({
  //         template:
  //           '<div><v-select index="value" :options="options" :value="value"></v-select></div>',
  //         components: { vSelect },
  //         data: {
  //           value: {
  //             nested: true
  //           },
  //           options: [nestedOption]
  //         }
  //       }).$mount();
  //       expect(
  //         vm.$children[0].isOptionSelected({
  //           nested: true
  //         })
  //       ).toEqual(true);
  //     });
  //
  //     it("can determine if an object is selected after it is chosen", () => {
  //       const nestedOption = {
  //         value: {
  //           nested: true
  //         },
  //         label: "foo"
  //       };
  //       const vm = new Vue({
  //         template:
  //           '<div><v-select index="value" :options="options"></v-select></div>',
  //         components: { vSelect },
  //         data: {
  //           options: [nestedOption]
  //         }
  //       }).$mount();
  //       vm.$children[0].select(nestedOption);
  //       expect(vm.$children[0].isOptionSelected(nestedOption)).toEqual(true);
  //     });
  //
  //     it("can determine a selected values label", () => {
  //       const nestedOption = {
  //         value: {
  //           nested: true
  //         },
  //         label: "foo"
  //       };
  //       const vm = new Vue({
  //         template:
  //           '<div><v-select index="value" :options="options" :value="value"></v-select></div>',
  //         components: { vSelect },
  //         data: {
  //           value: {
  //             nested: true
  //           },
  //           options: [nestedOption]
  //         }
  //       }).$mount();
  //
  //       expect(
  //         vm.$children[0].getOptionLabel({
  //           nested: true
  //         })
  //       ).toEqual("foo");
  //     });
  //   });
});
