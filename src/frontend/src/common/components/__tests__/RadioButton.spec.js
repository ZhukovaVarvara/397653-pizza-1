﻿import { shallowMount } from "@vue/test-utils";
import RadioButton from "@/common/components/RadioButton";

describe("RadioButton", () => {
  const defaultPropsData = {
    name: "testName",
    value: "testValue",
    isChecked: false,
  };

  const getPropsData = (params) => {
    return {
      propsData: {
        ...defaultPropsData,
        ...params,
      },
    };
  };

  let wrapper;
  const createComponent = (options) => {
    wrapper = shallowMount(RadioButton, options);
  };

  afterEach(() => {
    wrapper.destroy();
  });

  it("sets the initial model value", () => {
    createComponent(getPropsData());
    const input = wrapper.find("input");
    expect(input.element.value).toBe(defaultPropsData.itemName);
    expect(input.element.name).toBe(defaultPropsData.name);
    expect(input.element.checked).toBe(defaultPropsData.checked);
  });

  it("emits change event on click and changes the value", async () => {
    createComponent(getPropsData());
    await wrapper.trigger("click");
    expect(wrapper.emitted("changeItem")[0]).toStrictEqual([
      defaultPropsData.item,
    ]);
  });

  it("emits an input event when change value", () => {
    createComponent(getPropsData());
    const input = wrapper.find("input");
    input.trigger("input");
    expect(wrapper.emitted().input).toBeTruthy();
  });
});
