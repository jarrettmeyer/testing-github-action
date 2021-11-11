/**
 * 
 * @param {HTMLElement} parent 
 * @param {string} childTag name of the tag for new element
 * @param {AppendElementInput} opts 
 * @returns {HTMLElement} newly created element
 */
export function appendElement(parent, childTag, opts = {}) {
  opts = opts || {};

  const el = document.createElement(childTag);

  if (Array.isArray(opts.classes) && opts.classes.length > 0) {
    el.classList.add(...opts.classes);
  }

  if (typeof opts.id === "string" && opts.id.length > 0) {
    el.id = opts.id;
  }

  if (typeof opts.inlineStyle === "object") {
    const styles = Object.keys(opts.inlineStyle);
    for (let i = 0; i < styles.length; i++) {
      const style = styles[i];
      const value = opts.inlineStyle[style];
      el.style[style] = value;
    }
  }

  if (typeof opts.textContent === "string") {
    el.textContent = opts.textContent;
  }

  parent.appendChild(el);
  return el;
}
