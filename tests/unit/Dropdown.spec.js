import { shallowMount } from "@vue/test-utils";
import VueSelect from "../../src/components/Select";

describe("Toggling Dropdown", () => {
  it("should not open the dropdown when the el is clicked but the component is disabled", () => {
    const Select = shallowMount(VueSelect, {
      propsData: { disabled: true }
    });

    Select.vm.toggleDropdown({ target: Select.vm.$refs.search });
    expect(Select.vm.open).toEqual(false);
  });
  //
  //   it("should open the dropdown when the el is clicked", done => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :options="options" :value="value"></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         value: [{ label: "one" }],
  //         options: [{ label: "one" }]
  //       }
  //     }).$mount();
  //
  //     vm.$children[0].toggleDropdown({ target: vm.$children[0].$refs.search });
  //     Vue.nextTick(() => {
  //       Vue.nextTick(() => {
  //         expect(vm.$children[0].open).toEqual(true);
  //         done();
  //       });
  //     });
  //   });
  //
  //   it("should open the dropdown when the selected tag is clicked", done => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :options="options" :value="value"></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         value: [{ label: "one" }],
  //         options: [{ label: "one" }]
  //       }
  //     }).$mount();
  //
  //     const selectedTag = vm.$children[0].$el.getElementsByClassName(
  //       "selected-tag"
  //     )[0];
  //     vm.$children[0].toggleDropdown({ target: selectedTag });
  //     Vue.nextTick(() => {
  //       Vue.nextTick(() => {
  //         expect(vm.$children[0].open).toEqual(true);
  //         done();
  //       });
  //     });
  //   });
  //
  //   it("can close the dropdown when the el is clicked", done => {
  //     const vm = new Vue({
  //       template: "<div><v-select></v-select></div>",
  //       components: { vSelect }
  //     }).$mount();
  //
  //     spyOn(vm.$children[0].$refs.search, "blur");
  //
  //     vm.$children[0].open = true;
  //     vm.$children[0].toggleDropdown({ target: vm.$children[0].$el });
  //
  //     Vue.nextTick(() => {
  //       expect(vm.$children[0].$refs.search.blur).toHaveBeenCalled();
  //       done();
  //     });
  //   });
  //
  //   it("closes the dropdown when an option is selected, multiple is true, and closeOnSelect option is true", done => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select ref="select" :options="options" multiple :value="value"></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         value: [],
  //         options: ["one", "two", "three"]
  //       }
  //     }).$mount();
  //
  //     vm.$children[0].open = true;
  //     vm.$refs.select.select("one");
  //
  //     Vue.nextTick(() => {
  //       expect(vm.$children[0].open).toEqual(false);
  //       done();
  //     });
  //   });
  //
  //   it("does not close the dropdown when the el is clicked, multiple is true, and closeOnSelect option is false", done => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select ref="select" :options="options" multiple :closeOnSelect="false" :value="value"></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         value: [],
  //         options: ["one", "two", "three"]
  //       }
  //     }).$mount();
  //
  //     vm.$children[0].open = true;
  //     vm.$refs.select.select("one");
  //
  //     Vue.nextTick(() => {
  //       expect(vm.$children[0].open).toEqual(true);
  //       done();
  //     });
  //   });
  //
  //   it("should close the dropdown on search blur", () => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :options="options" multiple :value="value"></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         value: [{ label: "one" }],
  //         options: [{ label: "one" }]
  //       }
  //     }).$mount();
  //
  //     vm.$children[0].open = true;
  //     triggerFocusEvent(vm.$children[0].$refs.toggle, "blur");
  //     expect(vm.$children[0].open).toEqual(true);
  //   });
  //
  //   it("will close the dropdown and emit the search:blur event from onSearchBlur", () => {
  //     const vm = new Vue({
  //       template: "<div><v-select></v-select></div>"
  //     }).$mount();
  //
  //     spyOn(vm.$children[0], "$emit");
  //     vm.$children[0].open = true;
  //     vm.$children[0].onSearchBlur();
  //
  //     expect(vm.$children[0].open).toEqual(false);
  //     expect(vm.$children[0].$emit).toHaveBeenCalledWith("search:blur");
  //   });
  //
  //   it("will open the dropdown and emit the search:focus event from onSearchFocus", () => {
  //     const vm = new Vue({
  //       template: "<div><v-select></v-select></div>"
  //     }).$mount();
  //
  //     spyOn(vm.$children[0], "$emit");
  //     vm.$children[0].onSearchFocus();
  //
  //     expect(vm.$children[0].open).toEqual(true);
  //     expect(vm.$children[0].$emit).toHaveBeenCalledWith("search:focus");
  //   });
  //
  //   it("will close the dropdown on escape, if search is empty", done => {
  //     const vm = new Vue({
  //       template: "<div><v-select></v-select></div>",
  //       components: { vSelect }
  //     }).$mount();
  //
  //     spyOn(vm.$children[0].$refs.search, "blur");
  //
  //     vm.$children[0].open = true;
  //     vm.$children[0].onEscape();
  //
  //     Vue.nextTick(() => {
  //       expect(vm.$children[0].$refs.search.blur).toHaveBeenCalled();
  //       done();
  //     });
  //   });
  //
  //   it("should remove existing search text on escape keyup", () => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select :options="options" multiple :value="value"></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         value: [{ label: "one" }],
  //         options: [{ label: "one" }]
  //       }
  //     }).$mount();
  //
  //     vm.$children[0].search = "foo";
  //     vm.$children[0].onEscape();
  //     expect(vm.$children[0].search).toEqual("");
  //   });
  //
  //   it("should have an open class when dropdown is active", () => {
  //     const vm = new Vue({
  //       template: "<div><v-select></v-select></div>",
  //       components: { vSelect }
  //     }).$mount();
  //
  //     expect(vm.$children[0].dropdownClasses.open).toEqual(false);
  //   });
});
