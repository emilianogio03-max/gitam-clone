/*
 * Minimal stand-ins for the two Drupal globals the theme's app.js closes over.
 * The real Drupal runtime is gone (this is a static build), but app.js is wrapped in
 *   (function ($, Drupal, once) { ... })(jQuery, Drupal, once);
 * so an undefined `Drupal`/`once` throws a ReferenceError and kills the whole file.
 *
 * Only two APIs are actually used: Drupal.behaviors and once(id, selector, context).
 */
(function (w) {
  'use strict';

  w.Drupal = w.Drupal || {
    behaviors: {},
    t: function (s) { return s; }
  };

  // once(id, selector, context) -> array of elements not yet processed for `id`
  w.once = w.once || function (id, selector, context) {
    var ctx = context || document;
    var els;
    if (typeof selector === 'string') {
      els = ctx.querySelectorAll(selector);
    } else if (selector && selector.length !== undefined) {
      els = selector;
    } else {
      els = selector ? [selector] : [];
    }
    var attr = 'data-once-' + id;
    return Array.prototype.filter.call(els, function (el) {
      if (el.hasAttribute && el.hasAttribute(attr)) { return false; }
      if (el.setAttribute) { el.setAttribute(attr, 'true'); }
      return true;
    });
  };

  // Run every registered behaviour once the DOM is parsed, the way Drupal would.
  function attachAll() {
    Object.keys(w.Drupal.behaviors).forEach(function (name) {
      var b = w.Drupal.behaviors[name];
      if (b && typeof b.attach === 'function') {
        try {
          b.attach(document, {});
        } catch (e) {
          // A single broken behaviour must not take down the rest of the page.
          if (w.console) { console.warn('behavior "' + name + '" failed:', e); }
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachAll);
  } else {
    attachAll();
  }
})(window);
