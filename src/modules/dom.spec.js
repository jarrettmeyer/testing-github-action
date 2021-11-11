import { appendElement, updateElement } from "./dom";

describe("dom.appendElement", () => {
  afterEach(() => {
    document.body.outerHTML = "<body></body>";
  });

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

describe("dom.updateElement", () => {
  /** @type {HTMLElement} */
  let element = null;

  beforeEach(() => {
    document.body.innerHTML = `<h1 id="title">Hello, World!</h1>`;
    element = document.body.querySelector("#title");
  });

  afterEach(() => {
    document.body.outerHTML = "<body></body>";
  });

  it("can set the color of an element", () => {
    updateElement(element, { inlineStyle: { color: "#900000" } });
    expect(element.style.getPropertyValue("color")).toEqual("rgb(144, 0, 0)");
  });
});
