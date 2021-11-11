import { appendElement } from "./modules/dom";

const div = appendElement(document.body, "div", { classes: ["container"] });
const h1 = appendElement(div, "h1", {
  textContent: "Hello, World!",
});
