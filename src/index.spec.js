import "./index";

describe("testEnvironment", () => {
  test("jsdom is loaded", () => {
    expect(document.body).toBeDefined();
  });

  test("heading is added to page", () => {
    const heading = document.body.querySelector("h1");
    expect(heading).toBeTruthy();
    expect(heading.textContent).toEqual("Hello, World!");
  })
});
