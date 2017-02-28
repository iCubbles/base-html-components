(function () {
  'use strict';
  /**
   * Get help:
   * > Lifecycle callbacks:
   * https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#lifecycle-callbacks
   */
  CubxPolymer({
    is: 'cubx-label-output',

    /**
     * Manipulate an element’s local DOM when the element is created.
     */
    created: function () {
    },

    /**
     * Manipulate an element’s local DOM when the element is created and initialized.
     */
    ready: function () {
      this.model.outputLabel = this.getOutputLabel();
      this.model.outputText = this.getOutputText();
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
     *  Observe the Cubbles-Component-Model: If value for slot 'outputLabel' has changed ...
     */
    modelOutputLabelChanged: function (newValue) {
      this.model.outputLabel = newValue;
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'outputText' has changed ...
     */
    modelOutputTextChanged: function (newValue) {
      this.model.outputText = newValue;
    }
  });
}());
