import { shallowMount } from "@vue/test-utils";
import VueSelect from "../../src/components/Select";

describe("Asynchronous Loading", () => {
  it("can toggle the loading class", () => {
    const Select = shallowMount(VueSelect);

    Select.vm.toggleLoading();
    expect(Select.vm.mutableLoading).toEqual(true);

    Select.vm.toggleLoading(true);
    expect(Select.vm.mutableLoading).toEqual(true);
  });
  //
  //   it("should trigger the onSearch callback when the search text changes", done => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select ref="select" :on-search="foo"></v-select></div>',
  //       data: {
  //         called: false
  //       },
  //       methods: {
  //         foo(val) {
  //           this.called = val;
  //         }
  //       }
  //     }).$mount();
  //
  //     vm.$refs.select.search = "foo";
  //
  //     Vue.nextTick(() => {
  //       expect(vm.called).toEqual("foo");
  //       done();
  //     });
  //   });
  //
  //   it("should not trigger the onSearch callback if the search text is empty", done => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select ref="select" search="foo" :on-search="foo"></v-select></div>',
  //       data: { called: false },
  //       methods: {
  //         foo(val) {
  //           this.called = !this.called;
  //         }
  //       }
  //     }).$mount();
  //
  //     vm.$refs.select.search = "foo";
  //     Vue.nextTick(() => {
  //       expect(vm.called).toBe(true);
  //       vm.$refs.select.search = "";
  //       Vue.nextTick(() => {
  //         expect(vm.called).toBe(true);
  //         done();
  //       });
  //     });
  //   });
  //
  //   it("should trigger the search event when the search text changes", done => {
  //     const vm = new Vue({
  //       template: '<div><v-select ref="select" @search="foo"></v-select></div>',
  //       data: {
  //         called: false
  //       },
  //       methods: {
  //         foo(val) {
  //           this.called = val;
  //         }
  //       }
  //     }).$mount();
  //
  //     vm.$refs.select.search = "foo";
  //
  //     Vue.nextTick(() => {
  //       expect(vm.called).toEqual("foo");
  //       done();
  //     });
  //   });
  //
  //   it("should not trigger the search event if the search text is empty", done => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select ref="select" search="foo" @search="foo"></v-select></div>',
  //       data: { called: false },
  //       methods: {
  //         foo(val) {
  //           this.called = !this.called;
  //         }
  //       }
  //     }).$mount();
  //
  //     vm.$refs.select.search = "foo";
  //     Vue.nextTick(() => {
  //       expect(vm.called).toBe(true);
  //       vm.$refs.select.search = "";
  //       Vue.nextTick(() => {
  //         expect(vm.called).toBe(true);
  //         done();
  //       });
  //     });
  //   });
  //
  //   it("can set loading to false from the onSearch callback", done => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select loading ref="select" :on-search="foo"></v-select></div>',
  //       methods: {
  //         foo(search, loading) {
  //           loading(false);
  //         }
  //       }
  //     }).$mount();
  //
  //     vm.$refs.select.search = "foo";
  //     Vue.nextTick(() => {
  //       expect(vm.$refs.select.mutableLoading).toEqual(false);
  //       done();
  //     });
  //   });
  //
  //   it("can set loading to true from the onSearch callback", done => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select loading ref="select" :on-search="foo"></v-select></div>',
  //       methods: {
  //         foo(search, loading) {
  //           loading(true);
  //         }
  //       }
  //     }).$mount();
  //
  //     let select = vm.$refs.select;
  //     select.onSearch(select.search, select.toggleLoading);
  //
  //     Vue.nextTick(() => {
  //       expect(vm.$refs.select.mutableLoading).toEqual(true);
  //       done();
  //     });
  //   });
  //
  //   it("will sync mutable loading with the loading prop", done => {
  //     const vm = new Vue({
  //       template:
  //         '<div><v-select ref="select" :loading="loading"></v-select></div>',
  //       data: { loading: false }
  //     }).$mount();
  //     vm.loading = true;
  //     Vue.nextTick(() => {
  //       expect(vm.$refs.select.mutableLoading).toEqual(true);
  //       done();
  //     });
  //   });
});
