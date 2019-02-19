import { selectWithProps } from "../helpers";

describe("Removing values", () => {
  it("can remove the given tag when its close icon is clicked", () => {
    const Select = selectWithProps({ multiple: true, value: ["foo"] });

    Select.find(".vs__deselect").trigger("click");
    expect(Select.vm.mutableValue).toEqual([]);
  });

  it("should not remove tag when close icon is clicked and component is disabled", () => {
    const Select = selectWithProps({
      value: ["one"],
      options: ["one", "two", "three"],
      multiple: true,
      disabled: true
    });

    Select.find(".vs__deselect").trigger("click");
    expect(Select.vm.mutableValue).toEqual(["one"]);
  });

  it("should remove the last item in the value array on delete keypress when multiple is true", () => {
    const Select = selectWithProps({
      multiple: true,
      value: ["one", "two"],
      options: ["one", "two", "three"]
    });

    Select.vm.maybeDeleteValue();
    expect(Select.vm.mutableValue).toEqual(["one"]);
  });

  it("should set value to null on delete keypress when multiple is false", () => {
    const Select = selectWithProps({
      value: "one",
      options: ["one", "two", "three"]
    });

    Select.vm.maybeDeleteValue();
    expect(Select.vm.mutableValue).toEqual(null);
  });

  describe("Clear button", () => {
    it("should be displayed on single select when value is selected", () => {
      const Select = selectWithProps({
        options: ["foo", "bar"],
        value: "foo"
      });

      expect(Select.vm.showClearButton).toEqual(true);
    });

    it("should not be displayed on multiple select", () => {
      const Select = selectWithProps({
        options: ["foo", "bar"],
        value: "foo",
        multiple: true
      });

      expect(Select.vm.showClearButton).toEqual(false);
    });

    it("should remove selected value when clicked", () => {
      const Select = selectWithProps({
        options: ["foo", "bar"],
        value: "foo"
      });

      expect(Select.vm.mutableValue).toEqual("foo");
      Select.find("button.vs__clear").trigger("click");
      expect(Select.vm.mutableValue).toEqual(null);
    });

    it("should be disabled when component is disabled", () => {
      const Select = selectWithProps({
        options: ["foo", "bar"],
        value: "foo",
        disabled: true
      });

      expect(Select.find("button.vs__clear").attributes().disabled).toEqual(
        "disabled"
      );
    });
  });
});
