import { shallowMount } from "@vue/test-utils";
import VueSelect from "../../src/components/Select";

describe("Labels", () => {
  it("can generate labels using a custom label key", () => {
    const Select = shallowMount(VueSelect, {
      propsData: {
        options: [{ name: "Foo" }],
        label: "name",
        value: { name: "Foo" }
      }
    });
    expect(Select.find(".selected-tag").text()).toBe("Foo");
  });
  //
  //   it("will console.warn when options contain objects without a valid label key", done => {
  //     spyOn(console, "warn");
  //     const vm = new Vue({
  //       template: '<div><v-select :options="[{}]"></v-select></div>'
  //     }).$mount();
  //     vm.$children[0].open = true;
  //     Vue.nextTick(() => {
  //       expect(console.warn).toHaveBeenCalledWith(
  //         '[vue-select warn]: Label key "option.label" does not exist in options object {}.' +
  //         "\nhttp://sagalbot.github.io/vue-select/#ex-labels"
  //       );
  //       done();
  //     });
  //   });
  //
  //   it("should display a placeholder if the value is empty", done => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :options="options" placeholder="foo"></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         options: [{ label: "one" }]
  //       }
  //     }).$mount();
  //
  //     expect(vm.$children[0].searchPlaceholder).toEqual("foo");
  //     vm.$children[0].mutableValue = { label: "one" };
  //     Vue.nextTick(() => {
  //       expect(vm.$children[0].searchPlaceholder).not.toBeDefined();
  //       done();
  //     });
  //   });
});
