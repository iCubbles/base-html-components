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
    is: 'cubx-textarea',

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
     * A handler to be called by a dom-element
     * @param {event} event
     */
    inputFieldSlotValueChanged: function (event) {
      // update the cubbles-model
      this.setValue(event.target.value);
    },

    /**
     *  Called when slot 'value' has changed
     */
    modelValueChanged: function (newValue) {
      // update the view
      //this.$.textarea.setAttribute('value', newValue);
     document.getElementById(this.getId()).value = newValue;
    },

    /**
     *  Called when slot 'minLength' has changed
     */
    modelMinLengthChanged: function (newMinLength) {
      // update the view
     document.getElementById(this.getId()).setAttribute('minLength', newMinLength);
    },

    /**
     *  Called when slot 'maxLength' has changed
     */
    modelMaxLengthChanged: function (newMaxLength) {
      // update the view
     document.getElementById(this.getId()).setAttribute('maxLength', newMaxLength);
    },

    /**
     *  Called when slot 'rows' has changed
     */
    modelRowsChanged: function (newRows) {
      // update the view
     document.getElementById(this.getId()).setAttribute('rows', newRows);
    },

    /**
     *  Called when slot 'cols' has changed
     */
    modelColsChanged: function (newColumns) {
      // update the view
     document.getElementById(this.getId()).setAttribute('cols', newColumns);
    },

    /**
     *  Called when slot 'name' has changed
     */
    modelNameChanged: function (name) {
      // update the view
      document.getElementById(this.getId()).setAttribute('name', name);
    },

    /**
     *  Called when slot 'tabindex' has changed
     */
    modelTabindexChanged: function (newTabindex) {
      // update the view
      document.getElementById(this.getId()).setAttribute('tabindex', newTabindex);
    },

    /**
     *  Called when slot 'disabled' has changed
     */
    modelDisabledChanged: function (disabled) {
      document.getElementById(this.getId()).disabled = disabled;
    },

    /**
     *  Called when slot 'readonly' has changed
     */
    modelReadonlyChanged: function (readonly) {
      document.getElementById(this.getId()).readOnly = readonly;
    },

    /**
     *  Called when slot 'required' has changed
     */
    modelRequiredChanged: function (required) {
      document.getElementById(this.getId()).required = required;
    }

  });
}());
