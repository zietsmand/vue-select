import { shallowMount } from "@vue/test-utils";
import VueSelect from "../../src/components/Select";

describe("Removing values", () => {
  it("can remove the given tag when its close icon is clicked", () => {
    const Select = shallowMount(VueSelect, {
      propsData: { multiple: true, value: ["foo"] }
    });

    Select.find(".close").trigger("click");
    expect(Select.vm.mutableValue).toEqual([]);
  });
  //
  //   it("should not remove tag when close icon is clicked and component is disabled", done => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select disabled multiple :options="options" v-model="value"></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         value: ["one"],
  //         options: ["one", "two", "three"]
  //       }
  //     }).$mount();
  //     vm.$children[0].$refs.toggle.querySelector(".close").click();
  //     Vue.nextTick(() => {
  //       expect(vm.$children[0].mutableValue).toEqual(["one"]);
  //       done();
  //     });
  //   });
  //
  //   it("should remove the last item in the value array on delete keypress when multiple is true", () => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :options="options" v-model="value" :multiple="true"></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         value: ["one", "two"],
  //         options: ["one", "two", "three"]
  //       }
  //     }).$mount();
  //     vm.$children[0].maybeDeleteValue();
  //     Vue.nextTick(() => {
  //       expect(vm.$children[0].mutableValue).toEqual(["one"]);
  //     });
  //   });
  //
  //   it("should set value to null on delete keypress when multiple is false", () => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :options="options" v-model="value"></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         value: "one",
  //         options: ["one", "two", "three"]
  //       }
  //     }).$mount();
  //     vm.$children[0].maybeDeleteValue();
  //     Vue.nextTick(() => {
  //       expect(vm.$children[0].mutableValue).toEqual(null);
  //     });
  //   });

  // describe("Clear button", () => {
  //   it("should be displayed on single select when value is selected", () => {
  //     const VueSelect = Vue.extend(vSelect);
  //     const vm = new VueSelect({
  //       propsData: {
  //         options: ["foo", "bar"],
  //         value: "foo"
  //       }
  //     }).$mount();
  //
  //     expect(vm.showClearButton).toEqual(true);
  //   });
  //
  //   it("should not be displayed on multiple select", () => {
  //     const VueSelect = Vue.extend(vSelect);
  //     const vm = new VueSelect({
  //       propsData: {
  //         options: ["foo", "bar"],
  //         value: "foo",
  //         multiple: true
  //       }
  //     }).$mount();
  //
  //     expect(vm.showClearButton).toEqual(false);
  //   });
  //
  //   it("should remove selected value when clicked", () => {
  //     const VueSelect = Vue.extend(vSelect);
  //     const vm = new VueSelect({
  //       propsData: {
  //         options: ["foo", "bar"],
  //         value: "foo"
  //       }
  //     }).$mount();
  //
  //     expect(vm.mutableValue).toEqual("foo");
  //     vm.$el.querySelector("button.clear").click();
  //     expect(vm.mutableValue).toEqual(null);
  //   });
  //
  //   it("should be disabled when component is disabled", () => {
  //     const VueSelect = Vue.extend(vSelect);
  //     const vm = new VueSelect({
  //       propsData: {
  //         options: ["foo", "bar"],
  //         value: "foo",
  //         disabled: true
  //       }
  //     }).$mount();
  //
  //     const buttonEl = vm.$el.querySelector("button.clear");
  //     expect(buttonEl.disabled).toEqual(true);
  //   });
  // });
});
