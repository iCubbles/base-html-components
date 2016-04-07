(function () {
  'use strict';
  /**
   * Get help:
   * > Lifecycle callbacks:
   * https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#lifecycle-callbacks
   *
   * Access the Cubbles-Component-Model:
   * > Access slot values:
   * slot 'a': this.getA(); | this.setA(value)
   */
  CubxPolymer({
    is: 'cubx-img',

    /**
     * Manipulate an element’s local DOM when the element is created.
     */
    created: function () {
    },

    /**
     * Manipulate an element’s local DOM when the element is created and initialized.
     */
    ready: function () {
    },

    /**
     * Manipulate an element’s local DOM when the element is attached to the document.
     */
    attached: function () {
    },

    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    cubxReady: function () {
    },

    /**
     *  Called when slot 'src' has changed
     */
    modelSrcChanged: function (src) {
      // update the view
      this.$.img.setAttribute('src', src);
    },

    /**
     *  Called when slot 'alt' has changed
     */
    modelAltChanged: function (alt) {
      // update the view
      this.$.img.setAttribute('alt', alt);
    },

    /**
     *  Called when slot 'height' has changed
     */
    modelHeightChanged: function (height) {
      // update the view
      this.$.img.setAttribute('height', height);
    },

    /**
     *  Called when slot 'height' has changed
     */
    modelWidthChanged: function (width) {
      // update the view
      this.$.img.setAttribute('width', width);
    }
  });
}());
