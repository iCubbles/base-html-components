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
    is: 'cubx-button',

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
     *  Observe the Cubbles-Component-Model: If value for slot 'type' has changed
     */
    modelTypeChanged: function (newType) {
      // update the view
      this.$.button.setAttribute('type', newType);
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'value' has changed
     */
    modelValueChanged: function (newValue) {
      // update the view
      this.$.button.setAttribute('value', newValue);
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'text' has changed
     */
    modelTextChanged: function (newText) {
      // update the view
      this.$.button.innerHTML = newText;
    }
  });
}());
