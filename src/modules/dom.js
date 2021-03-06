/**
 * Append an element to the DOM. This function does the work of `document.createElement()`
 * and `parent.appendChild()` in a single function.
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

/**
 * Update an element
 *
 * @param {HTMLElement} element element to be updated
 * @param {UpdateElementInput} opts options
 * @returns {HTMLElement} updated element
 */
export function updateElement(element, opts = {}) {
  opts = opts || {};

  if (typeof opts.inlineStyle === "object") {
    const styles = Object.keys(opts.inlineStyle);
    for (let i = 0; i < styles.length; i++) {
      const style = styles[i];
      const value = opts.inlineStyle[style];
      element.style[style] = value;
    }
  }
  return element;
}
