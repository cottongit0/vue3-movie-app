import { shallowMount } from "@vue/test-utils";
import router from "~/routes";
import store from "~/store";
import Header from "~/components/Header";
// import { describe } from "yargs";
import { expect, test } from "@jest/globals";

describe("components/Header.vue", () => {
  test("경로 정규표현식이 없는 경우, 일치하지 않습니다.", () => {
    const wrapper = shallowMount(Header, {
      global: {
        plugins: [router, store],
      },
    });
    const regExp = undefined;
    expect(wrapper.vm.isMatch(regExp)).toBe(false);
  });
});
