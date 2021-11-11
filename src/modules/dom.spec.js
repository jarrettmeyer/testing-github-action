import { appendElement } from "./dom";

describe("dom.appendElement", () => {
  it("adds a new element to the DOM", () => {
    const h1 = appendElement(document.body, "h1");
    h1.textContent = "Hello, World!";

    expect(document.body.querySelector("h1")).toBeTruthy();
  });

  it("adds is to the element", () => {
    appendElement(document.body, "div", {
      id: "me",
    });
    const div = document.body.querySelector("#me");
    expect(div.id).toEqual("me");
  });

  it("adds classes to the element", () => {
    appendElement(document.body, "div", {
      classes: ["one", "two"],
    });
    const div = document.body.querySelector("div.one");
    expect(div.classList).toContain("one");
    expect(div.classList).toContain("two");
  });
});
