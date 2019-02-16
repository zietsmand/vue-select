import { mount, shallowMount } from "@vue/test-utils";
import VueSelect from "../../src/components/Select.vue";

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
        selectOnTab: true
      }
    });

    const spy = jest.spyOn(Select.vm, "typeAheadSelect");

    Select.find({ ref: "search" }).trigger("keyup.tab");

    expect(spy).toHaveBeenCalledWith();
  });

  it("can deselect a pre-selected object", () => {
    const Select = shallowMount(VueSelect, {
      propsData: {
        multiple: true,
        value: [
          { label: "This is Foo", value: "foo" },
          { label: "This is Bar", value: "bar" }
        ],
        options: [
          { label: "This is Foo", value: "foo" },
          { label: "This is Bar", value: "bar" }
        ]
      }
    });

    Select.vm.deselect({ label: "This is Foo", value: "foo" });
    expect(Select.vm.mutableValue.length).toEqual(1);
  });

  it("can deselect a pre-selected string", () => {
    const Select = shallowMount(VueSelect, {
      propsData: {
        multiple: true,
        value: ["foo", "bar"],
        options: ["foo", "bar"]
      }
    });
    Select.vm.deselect("foo");
    expect(Select.vm.mutableValue.length).toEqual(1);
  });

  it("can deselect an option when multiple is false", () => {
    const Select = shallowMount(VueSelect, {
      propsData: {
        value: "foo"
      }
    });
    Select.vm.deselect("foo");
    expect(Select.vm.mutableValue).toEqual(null);
  });

  it("can determine if the value prop is empty", () => {
    const Select = shallowMount(VueSelect, {
      propsData: {
        value: [],
        options: ["one", "two", "three"]
      }
    });

    const select = Select.vm;
    expect(select.isValueEmpty).toEqual(true);

    select.select(["one"]);
    expect(select.isValueEmpty).toEqual(false);

    select.select("one");
    expect(select.isValueEmpty).toEqual(false);

    select.select({ label: "foo", value: "foo" });
    expect(select.isValueEmpty).toEqual(false);

    select.select("");
    expect(select.isValueEmpty).toEqual(true);

    select.select(null);
    expect(select.isValueEmpty).toEqual(true);
  });

  it("should reset the selected values when the multiple property changes", () => {
    const Select = shallowMount(VueSelect, {
      propsData: {
        value: ["one"],
        multiple: true,
        options: ["one", "two", "three"]
      }
    });

    expect(Select.vm.mutableValue).toEqual(["one"]);

    Select.setProps({ multiple: false });
    expect(Select.vm.mutableValue).toEqual(null);

    Select.setProps({ multiple: true });
    expect(Select.vm.mutableValue).toEqual([]);
  });

  it("can retain values present in a new array of options", () => {
    const Select = shallowMount(VueSelect, {
      propsData: {
        value: ["one"],
        options: ["one", "two", "three"]
      }
    });

    Select.setProps({ options: ["one", "five", "six"] });
    expect(Select.vm.mutableValue).toEqual(["one"]);
  });

  it("can determine if an object is already selected", () => {
    const Select = shallowMount(VueSelect, {
      propsData: {
        value: [{ label: "one" }],
        options: [{ label: "one" }]
      }
    });

    expect(Select.vm.isOptionSelected({ label: "one" })).toEqual(true);
  });

  it("can use v-model syntax for a two way binding to a parent component", () => {
    const Parent = mount({
      data: () => ({ value: "foo", options: ["foo", "bar", "baz"] }),
      template: `<div><v-select :options="options" v-model="value" /></div>`,
      components: { "v-select": VueSelect }
    });
    const Select = Parent.vm.$children[0];

    expect(Select.value).toEqual("foo");
    expect(Select.mutableValue).toEqual("foo");

    Select.select("bar");
    expect(Parent.vm.value).toEqual("bar");
  });

  it("can check if a string value is selected when the value is an object and multiple is true", () => {
    const Select = shallowMount(VueSelect, {
      propsData: {
        multiple: true,
        value: [{ label: "foo", value: "bar" }]
      }
    });
    expect(Select.vm.isOptionSelected("foo")).toEqual(true);
  });

  describe("change Event", () => {
    it("will trigger the input event when the selection changes", () => {
      const Select = shallowMount(VueSelect);
      Select.vm.select("bar");
      expect(Select.emitted("input")[0]).toEqual(["bar"]);
    });

    it("will trigger the input event when the selection changes and multiple is true", () => {
      const Select = shallowMount(VueSelect, {
        propsData: { multiple: true, value: ["foo"], options: ["foo", "bar"] }
      });
      Select.vm.select("bar");
      expect(Select.emitted("input")[0]).toEqual([["foo", "bar"]]);
    });
  });
});
