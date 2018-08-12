import { shallowMount } from "@vue/test-utils";
import VueSelect from "../../src/components/Select";

describe("Moving the Typeahead Pointer", () => {
  it("should set the pointer to zero when the filteredOptions change", () => {
    const Select = shallowMount(VueSelect, {
      propsData: { options: ["one", "two", "three"] }
    });
    Select.vm.search = "two";
    expect(Select.vm.typeAheadPointer).toEqual(0);
  });

  //   it("should move the pointer visually up the list on up arrow keyDown", () => {
  //     const vm = new Vue({
  //       template: '<div><v-select :options="options"></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         options: ["one", "two", "three"]
  //       }
  //     }).$mount();
  //
  //     vm.$children[0].typeAheadPointer = 1;
  //
  //     trigger(vm.$children[0].$refs.search, "keydown", e => (e.keyCode = 38));
  //     expect(vm.$children[0].typeAheadPointer).toEqual(0);
  //   });
  //
  //   it("should move the pointer visually down the list on down arrow keyDown", () => {
  //     const vm = new Vue({
  //       template: '<div><v-select :options="options"></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         options: ["one", "two", "three"]
  //       }
  //     }).$mount();
  //
  //     vm.$children[0].typeAheadPointer = 1;
  //     trigger(vm.$children[0].$refs.search, "keydown", e => (e.keyCode = 40));
  //     expect(vm.$children[0].typeAheadPointer).toEqual(2);
  //   });
  //
  //   it("should not move the pointer past the end of the list", () => {
  //     const vm = new Vue({
  //       template: '<div><v-select :options="options"></v-select></div>',
  //       components: { vSelect },
  //       data: {
  //         options: ["one", "two", "three"]
  //       }
  //     }).$mount();
  //
  //     vm.$children[0].typeAheadPointer = 2;
  //     vm.$children[0].typeAheadDown();
  //     expect(vm.$children[0].typeAheadPointer).toEqual(2);
  //   });
  //
  //   describe("Automatic Scrolling", () => {
  //     it("should check if the scroll position needs to be adjusted on up arrow keyDown", () => {
  //       const vm = new Vue({
  //         template: '<div><v-select :options="options"></v-select></div>',
  //         components: { vSelect },
  //         data: {
  //           options: ["one", "two", "three"]
  //         }
  //       }).$mount();
  //
  //       vm.$children[0].typeAheadPointer = 1;
  //       spyOn(vm.$children[0], "maybeAdjustScroll");
  //       trigger(vm.$children[0].$refs.search, "keydown", e => (e.keyCode = 38));
  //       expect(vm.$children[0].maybeAdjustScroll).toHaveBeenCalled();
  //     });
  //
  //     it("should check if the scroll position needs to be adjusted on down arrow keyDown", () => {
  //       const vm = new Vue({
  //         template: '<div><v-select :options="options"></v-select></div>',
  //         components: { vSelect },
  //         data: {
  //           options: ["one", "two", "three"]
  //         }
  //       }).$mount();
  //
  //       spyOn(vm.$children[0], "maybeAdjustScroll");
  //       trigger(vm.$children[0].$refs.search, "keydown", e => (e.keyCode = 40));
  //       expect(vm.$children[0].maybeAdjustScroll).toHaveBeenCalled();
  //     });
  //
  //     it("should check if the scroll position needs to be adjusted when filtered options changes", done => {
  //       const vm = new Vue({
  //         template: '<div><v-select :options="options"></v-select></div>',
  //         components: { vSelect },
  //         data: {
  //           options: ["one", "two", "three"]
  //         }
  //       }).$mount();
  //
  //       spyOn(vm.$children[0], "maybeAdjustScroll");
  //       vm.$children[0].search = "two";
  //
  //       Vue.nextTick(() => {
  //         expect(vm.$children[0].maybeAdjustScroll).toHaveBeenCalled();
  //         done();
  //       });
  //     });
  //
  //     it("should scroll up if the pointer is above the current viewport bounds", () => {
  //       let methods = Object.assign(pointerScroll.methods, {
  //         pixelsToPointerTop() {
  //           return 1;
  //         },
  //         viewport() {
  //           return { top: 2, bottom: 0 };
  //         }
  //       });
  //       const vm = new Vue({
  //         template:
  //           "<div><v-select :options=\"['one', 'two', 'three']\"></v-select></div>",
  //         components: {
  //           "v-select": Mock({
  //             "../mixins/pointerScroll": { methods }
  //           })
  //         }
  //       }).$mount();
  //
  //       spyOn(vm.$children[0], "scrollTo");
  //       vm.$children[0].maybeAdjustScroll();
  //       expect(vm.$children[0].scrollTo).toHaveBeenCalledWith(1);
  //     });
  //
  //     /**
  //      * @link 	https://github.com/vuejs/vue-loader/issues/434
  //      * @todo 	vue-loader/inject-loader fails when used twice in the same file,
  //      *        so the mock here is abastracted to a separate file.
  //      */
  //     xit("should scroll down if the pointer is below the current viewport bounds", () => {
  //       let methods = Object.assign(pointerScroll.methods, {
  //         pixelsToPointerBottom() {
  //           return 2;
  //         },
  //         viewport() {
  //           return { top: 0, bottom: 1 };
  //         }
  //       });
  //       const vm = new Vue({
  //         template: `<div><v-select :options="['one', 'two', 'three']"></v-select></div>`,
  //         components: {
  //           "v-select": Mock({
  //             "../mixins/pointerScroll": { methods }
  //           })
  //         }
  //       }).$mount();
  //
  //       spyOn(vm.$children[0], "scrollTo");
  //       vm.$children[0].maybeAdjustScroll();
  //       expect(vm.$children[0].scrollTo).toHaveBeenCalledWith(
  //         vm.$children[0].viewport().top + vm.$children[0].pointerHeight()
  //       );
  //     });
  //   });
  //
  //   describe("Measuring pixel distances", () => {
  //     it("should calculate pointerHeight as the offsetHeight of the pointer element if it exists", () => {
  //       const vm = new Vue({
  //         template: `<div><v-select :options="['one', 'two', 'three']"></v-select></div>`
  //       }).$mount();
  //
  //       // dropdown must be open for $refs to exist
  //       vm.$children[0].open = true;
  //
  //       Vue.nextTick(() => {
  //         //  Fresh instances start with the pointer at -1
  //         vm.$children[0].typeAheadPointer = -1;
  //         expect(vm.$children[0].pointerHeight()).toEqual(0);
  //
  //         vm.$children[0].typeAheadPointer = 100;
  //         expect(vm.$children[0].pointerHeight()).toEqual(0);
  //
  //         vm.$children[0].typeAheadPointer = 1;
  //         expect(vm.$children[0].pointerHeight()).toEqual(
  //           vm.$children[0].$refs.dropdownMenu.children[1].offsetHeight
  //         );
  //       });
  //     });
  //   });
});
