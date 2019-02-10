import { selectWithProps } from "../helpers";

describe("Asynchronous Loading", () => {
  it("can toggle the loading class", () => {
    const Select = selectWithProps();

    Select.vm.toggleLoading();
    expect(Select.vm.mutableLoading).toEqual(true);

    Select.vm.toggleLoading(true);
    expect(Select.vm.mutableLoading).toEqual(true);
  });

  it("should trigger the onSearch callback when the search text changes", () => {
    const propsData = { onSearch: () => {} };
    const spy = jest.spyOn(propsData, "onSearch");
    const Select = selectWithProps(propsData);

    Select.vm.search = "foo";

    expect(spy).toHaveBeenCalled();
  });

  it("should not trigger the onSearch callback if the search text is empty", () => {
    let calledWith = [];
    const propsData = {
      onSearch: search => {
        calledWith.push(search);
      }
    };
    const spy = jest.spyOn(propsData, "onSearch");
    const Select = selectWithProps(propsData);

    Select.vm.search = "foo";
    Select.vm.search = "";

    expect(spy).toHaveBeenCalledTimes(1);
    expect(calledWith).toEqual(["foo"]);
  });

  it("should trigger the search event when the search text changes", () => {
    const Select = selectWithProps();

    Select.vm.search = "foo";

    const events = Select.emitted("search");

    expect(events).toContainEqual(["foo", Select.vm.toggleLoading]);
    expect(events.length).toEqual(1);
  });

  it("should not trigger the search event if the search text is empty", () => {
    const Select = selectWithProps();

    Select.vm.search = "foo";
    Select.vm.search = "";

    const events = Select.emitted("search");

    expect(events).toContainEqual(["foo", Select.vm.toggleLoading]);
    expect(events.length).toEqual(1);
  });

  it("can set loading to false from the onSearch callback", () => {
    const Select = selectWithProps({
      onSearch: (search, loading) => loading(false)
    });

    Select.vm.search = "foo";

    expect(Select.vm.mutableLoading).toEqual(false);
  });

  it("can set loading to true from the onSearch callback", () => {
    const Select = selectWithProps({
      onSearch: (search, loading) => loading(true)
    });

    Select.vm.search = "foo";

    expect(Select.vm.mutableLoading).toEqual(true);
  });

  it("will sync mutable loading with the loading prop", () => {
    const Select = selectWithProps({ loading: false });
    Select.setProps({ loading: true });
    expect(Select.vm.mutableLoading).toEqual(true);
  });
});
