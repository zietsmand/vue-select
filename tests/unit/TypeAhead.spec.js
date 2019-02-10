import { shallowMount } from "@vue/test-utils";
import VueSelect from "../../src/components/Select";

describe("Moving the Typeahead Pointer", () => {
  const mountDefault = () =>
    shallowMount(VueSelect, {
      propsData: { options: ["one", "two", "three"] }
    });

  it("should set the pointer to zero when the filteredOptions change", () => {
    const Select = mountDefault();
    Select.vm.search = "two";
    expect(Select.vm.typeAheadPointer).toEqual(0);
  });

  it("should move the pointer visually up the list on up arrow keyDown", () => {
    const Select = mountDefault();

    Select.vm.typeAheadPointer = 1;

    Select.find({ ref: "search" }).trigger("keydown", { keyCode: 38 });

    expect(Select.vm.typeAheadPointer).toEqual(0);
  });

  it("should move the pointer visually down the list on down arrow keyDown", () => {
    const Select = mountDefault();

    Select.vm.typeAheadPointer = 1;

    Select.find({ ref: "search" }).trigger("keydown", { keyCode: 40 });

    expect(Select.vm.typeAheadPointer).toEqual(2);
  });

  it("should not move the pointer past the end of the list", () => {
    const Select = mountDefault();

    Select.vm.typeAheadPointer = 2;
    Select.vm.typeAheadDown();
    expect(Select.vm.typeAheadPointer).toEqual(2);
  });

  describe("Automatic Scrolling", () => {
    it("should check if the scroll position needs to be adjusted on up arrow keyDown", () => {
      const Select = mountDefault();
      const spy = jest.spyOn(Select.vm, "maybeAdjustScroll");

      Select.vm.typeAheadPointer = 1;

      Select.find({ ref: "search" }).trigger("keydown", { keyCode: 38 });
      expect(spy).toHaveBeenCalled();
    });

    it("should check if the scroll position needs to be adjusted on down arrow keyDown", () => {
      const Select = mountDefault();
      const spy = jest.spyOn(Select.vm, "maybeAdjustScroll");

      Select.vm.typeAheadPointer = 1;

      Select.find({ ref: "search" }).trigger("keydown", { keyCode: 40 });
      expect(spy).toHaveBeenCalled();
    });

    it("should check if the scroll position needs to be adjusted when filtered options changes", () => {
      const Select = mountDefault();
      const spy = jest.spyOn(Select.vm, "maybeAdjustScroll");

      Select.vm.search = "two";

      expect(spy).toHaveBeenCalled();
    });

    it("should scroll up if the pointer is above the current viewport bounds", () => {
      const Select = mountDefault();
      const spy = jest.spyOn(Select.vm, "scrollTo");

      Select.setMethods({
        pixelsToPointerTop() {
          return 1;
        },
        viewport() {
          return { top: 2, bottom: 0 };
        }
      });

      Select.vm.maybeAdjustScroll();

      expect(spy).toHaveBeenCalledWith(1);
    });

    it("should scroll down if the pointer is below the current viewport bounds", () => {
      const Select = mountDefault();
      const spy = jest.spyOn(Select.vm, "scrollTo");

      Select.setMethods({
        pixelsToPointerBottom() {
          return 2;
        },
        viewport() {
          return { top: 0, bottom: 1 };
        }
      });

      Select.vm.maybeAdjustScroll();
      expect(spy).toHaveBeenCalledWith(
        Select.vm.viewport().top + Select.vm.pointerHeight()
      );
    });
  });

  describe("Measuring pixel distances", () => {
    it("should calculate pointerHeight as the offsetHeight of the pointer element if it exists", () => {
      const Select = mountDefault();

      // Drop down must be open for $refs to exist
      Select.vm.open = true;

      /**
       * Since JSDom doesn't render layouts, set the offsetHeight explicitly
       * to 25px for each list item.
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
       */
      let i = 0;
      for (let option of Select.vm.$refs.dropdownMenu.children) {
        Object.defineProperty(option, "offsetHeight", {
          value: 1 + i
        });
        i++;
      }

      //  Fresh instances start with the pointer at -1
      Select.vm.typeAheadPointer = -1;
      expect(Select.vm.pointerHeight()).toEqual(0);

      Select.vm.typeAheadPointer = 0;
      expect(Select.vm.pointerHeight()).toEqual(1);

      Select.vm.typeAheadPointer = 1;
      expect(Select.vm.pointerHeight()).toEqual(2);

      Select.vm.typeAheadPointer = 2;
      expect(Select.vm.pointerHeight()).toEqual(3);
    });
  });
});
