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

    _validTypes:[
      'submit',
      'reset',
      'button',
    ],

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
      if (typeof newType === 'string' && this._validTypes.indexOf(newType) === -1) {
        console.log('type : "' + newType + '" is not a valid input type. Using type '
          + this._validTypes[0] + ' instead.');
        newType = this._validTypes[0];
      }
      // update the view
      document.getElementById(this.getId()).setAttribute('type', newType);
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'value' has changed
     */
    modelValueChanged: function (newValue) {
      // update the view
      document.getElementById(this.getId()).setAttribute('value', newValue);
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'text' has changed
     */
    modelTextChanged: function (newText) {
      // update the view
      document.getElementById(this.getId()).innerHTML = newText;
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'onclick' has changed
     */
    modelOnclickChanged: function (newValue) {
      // update the view
      document.getElementById(this.getId()).setAttribute('onclick', newValue);
    },

    /**
     *  Called when slot 'name' has changed
     */
    modelNameChanged: function (name) {
      // update the view
      document.getElementById(this.getId()).setAttribute('name', name);
    },

    /**
     *  Called when slot 'disabled' has changed
     */
    modelDisabledChanged: function (disabled) {
      document.getElementById(this.getId()).disabled = disabled;
    },
  });
}());
