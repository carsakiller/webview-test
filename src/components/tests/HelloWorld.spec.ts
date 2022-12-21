import { describe, it } from "vitest";
import { mount } from "@vue/test-utils";

import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld);
  });
});
