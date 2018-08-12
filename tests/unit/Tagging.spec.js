import { shallowMount } from "@vue/test-utils";
import VueSelect from "../../src/components/Select";

describe("When Tagging Is Enabled", () => {
  it("can determine if a given option string already exists", () => {
    const Select = shallowMount(VueSelect, {
      propsData: { taggable: true, options: ["one", "two"] }
    });
    expect(Select.vm.optionExists("one")).toEqual(true);
    expect(Select.vm.optionExists("three")).toEqual(false);
  });

  //   it("can determine if a given option object already exists", () => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select ref="select" :options="options" taggable></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         options: [{ label: "one" }, { label: "two" }]
  //       }
  //     }).$mount();
  //
  //     expect(vm.$refs.select.optionExists("one")).toEqual(true);
  //     expect(vm.$refs.select.optionExists("three")).toEqual(false);
  //   });
  //
  //   it("can determine if a given option object already exists when using custom labels", () => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select ref="select" :options="options" label="foo" taggable></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         options: [{ foo: "one" }, { foo: "two" }]
  //       }
  //     }).$mount();
  //
  //     expect(vm.$refs.select.optionExists("one")).toEqual(true);
  //     expect(vm.$refs.select.optionExists("three")).toEqual(false);
  //   });
  //
  //   it("can add the current search text as the first item in the options list", () => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :options="options" :value="value" :multiple="true" taggable></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         value: ["one"],
  //         options: ["one", "two"]
  //       }
  //     }).$mount();
  //
  //     vm.$children[0].search = "three";
  //     expect(vm.$children[0].filteredOptions).toEqual(["three"]);
  //   });
  //
  //   it("can select the current search text as a string", done => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :options="options" :value="value" :multiple="true" taggable></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         value: ["one"],
  //         options: ["one", "two"]
  //       }
  //     }).$mount();
  //
  //     searchSubmit(vm, "three");
  //     Vue.nextTick(() => {
  //       expect(vm.$children[0].mutableValue).toEqual(["one", "three"]);
  //       done();
  //     });
  //   });
  //
  //   it("can select the current search text as an object", done => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :options="options" :value="value" :multiple="true" taggable></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         value: [{ label: "one" }],
  //         options: [{ label: "one" }]
  //       }
  //     }).$mount();
  //
  //     searchSubmit(vm, "two");
  //     Vue.nextTick(() => {
  //       expect(vm.$children[0].mutableValue).toEqual([
  //         { label: "one" },
  //         { label: "two" }
  //       ]);
  //       done();
  //     });
  //   });
  //
  //   it("should add a freshly created option/tag to the options list when pushTags is true", () => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :options="options" push-tags :value="value" :multiple="true" taggable></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         value: ["one"],
  //         options: ["one", "two"]
  //       }
  //     }).$mount();
  //
  //     searchSubmit(vm, "three");
  //     expect(vm.$children[0].mutableOptions).toEqual(["one", "two", "three"]);
  //   });
  //
  //   it("should add a freshly created option/tag to the options list when pushTags is true and filterable is false", () => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :options="options" push-tags :value="value" :filterable="false" :multiple="true" :taggable="true"></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         value: ["one"],
  //         options: ["one", "two"]
  //       }
  //     }).$mount();
  //
  //     searchSubmit(vm, "three");
  //     expect(vm.$children[0].mutableOptions).toEqual(["one", "two", "three"]);
  //     expect(vm.$children[0].filteredOptions).toEqual(["one", "two", "three"]);
  //   });
  //
  //   it("wont add a freshly created option/tag to the options list when pushTags is false", () => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :options="options" :value="value" :multiple="true" :taggable="true"></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         value: ["one"],
  //         options: ["one", "two"]
  //       }
  //     }).$mount();
  //
  //     searchSubmit(vm, "three");
  //     expect(vm.$children[0].mutableOptions).toEqual(["one", "two"]);
  //   });
  //
  //   it("wont add a freshly created option/tag to the options list when pushTags is false and filterable is false", () => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :options="options" :value="value" :multiple="true" :filterable="false" :taggable="true"></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         value: ["one"],
  //         options: ["one", "two"]
  //       }
  //     }).$mount();
  //
  //     searchSubmit(vm, "three");
  //     expect(vm.$children[0].mutableOptions).toEqual(["one", "two"]);
  //     expect(vm.$children[0].filteredOptions).toEqual(["one", "two"]);
  //   });
  //
  //   it("should select an existing option if the search string matches a string from options", done => {
  //     let two = "two";
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :options="options" :value="value" :multiple="true" taggable></v-select></div>',
  //       data: {
  //         value: null,
  //         options: ["one", two]
  //       }
  //     }).$mount();
  //     vm.$children[0].search = "two";
  //
  //     searchSubmit(vm);
  //
  //     Vue.nextTick(() => {
  //       expect(vm.$children[0].mutableValue[0]).toBe(two);
  //       done();
  //     });
  //   });
  //
  //   it("should select an existing option if the search string matches an objects label from options", done => {
  //     let two = { label: "two" };
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :options="options" taggable></v-select></div>',
  //       data: {
  //         options: [{ label: "one" }, two]
  //       }
  //     }).$mount();
  //
  //     vm.$children[0].search = "two";
  //
  //     Vue.nextTick(() => {
  //       searchSubmit(vm);
  //       //  This needs to be wrapped in nextTick() twice so that filteredOptions can
  //       //  calculate after setting the search text, and move the typeAheadPointer index to 0.
  //       Vue.nextTick(() => {
  //         expect(vm.$children[0].mutableValue.label).toBe(two.label);
  //         done();
  //       });
  //     });
  //   });
  //
  //   it("should select an existing option if the search string matches an objects label from options when filter-options is false", done => {
  //     let two = { label: "two" };
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :options="options" taggable :filterable="false"></v-select></div>',
  //       data: {
  //         options: [{ label: "one" }, two]
  //       }
  //     }).$mount();
  //
  //     vm.$children[0].search = "two";
  //
  //     Vue.nextTick(() => {
  //       searchSubmit(vm);
  //       //	This needs to be wrapped in nextTick() twice so that filteredOptions can
  //       //	calculate after setting the search text, and move the typeAheadPointer index to 0.
  //       Vue.nextTick(() => {
  //         expect(vm.$children[0].mutableValue.label).toBe(two.label);
  //         done();
  //       });
  //     });
  //   });
  //
  //   it("should not reset the selected value when the options property changes", done => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :options="options" :value="value" :multiple="true" taggable></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         value: [{ label: "one" }],
  //         options: [{ label: "one" }]
  //       }
  //     }).$mount();
  //     vm.$children[0].mutableOptions = [{ label: "two" }];
  //     Vue.nextTick(() => {
  //       expect(vm.$children[0].mutableValue).toEqual([{ label: "one" }]);
  //       done();
  //     });
  //   });
  //
  //   it("should not reset the selected value when the options property changes when filterable is false", done => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :options="options" :value="value" :multiple="true" :filterable="false" taggable></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         value: [{ label: "one" }],
  //         options: [{ label: "one" }]
  //       }
  //     }).$mount();
  //     vm.$children[0].mutableOptions = [{ label: "two" }];
  //     Vue.nextTick(() => {
  //       expect(vm.$children[0].mutableValue).toEqual([{ label: "one" }]);
  //       done();
  //     });
  //   });
  //
  //   it("should not allow duplicate tags when using string options", done => {
  //     const vm = new Vue({
  //       template: `<div><v-select ref="select" taggable multiple></v-select></div>`
  //     }).$mount();
  //     vm.$refs.select.search = "one";
  //     searchSubmit(vm);
  //     Vue.nextTick(() => {
  //       expect(vm.$refs.select.mutableValue).toEqual(["one"]);
  //       expect(vm.$refs.select.search).toEqual("");
  //       vm.$refs.select.search = "one";
  //       searchSubmit(vm);
  //       Vue.nextTick(() => {
  //         expect(vm.$refs.select.mutableValue).toEqual(["one"]);
  //         expect(vm.$refs.select.search).toEqual("");
  //         done();
  //       });
  //     });
  //   });
  //
  //   it("should not allow duplicate tags when using object options", done => {
  //     const vm = new Vue({
  //       template: `<div><v-select ref="select" taggable multiple></v-select></div>`
  //     }).$mount();
  //     vm.$refs.select.search = "one";
  //     searchSubmit(vm);
  //     Vue.nextTick(() => {
  //       expect(vm.$refs.select.mutableValue).toEqual(["one"]);
  //       expect(vm.$refs.select.search).toEqual("");
  //       vm.$refs.select.search = "one";
  //       searchSubmit(vm);
  //       Vue.nextTick(() => {
  //         expect(vm.$refs.select.mutableValue).toEqual(["one"]);
  //         expect(vm.$refs.select.search).toEqual("");
  //         done();
  //       });
  //     });
  //   });
});
