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

    properties: {
      hidden: {
        type: Boolean,
        value: false
      }
    },

    _validTypes:[
      'submit',
      'reset',
      'button'
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
      // add event listener to set the clicked output to true every time the button is clicked
      this.$$('button').addEventListener("click", function(){
        this.setClicked(true);
      }.bind(this), false);
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
      this.$$('button').setAttribute('type', newType);
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'value' has changed
     */
    modelValueChanged: function (newValue) {
      // update the view
      this.$$('button').setAttribute('value', newValue);
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'text' has changed
     */
    modelTextChanged: function (newText) {
      // update the view
      this.$$('button').innerHTML = newText;
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'onclick' has changed
     */
    modelOnclickChanged: function (newValue) {
      // update the view
      this.$$('button').setAttribute('onclick', newValue);
    },

    /**
     *  Called when slot 'hidden' has changed
     *  @param {boolean} hidden - true to hide this artifact
     */
    modelHiddenChanged: function (hidden) {
      // update the view
      this.hidden = hidden;
    },

    /**
     *  Called when slot 'name' has changed
     */
    modelNameChanged: function (name) {
      // update the view
      this.$$('button').setAttribute('name', name);
    },

    /**
     *  Called when slot 'tabindex' has changed
     */
    modelTabindexChanged: function (newTabindex) {
      // update the view
      this.$$('button').setAttribute('tabindex', newTabindex);
    },

    /**
     *  Called when slot 'disabled' has changed
     */
    modelDisabledChanged: function (disabled) {
      this.$$('button').disabled = disabled;
    },

    /**
     *  Called when slot 'lang' has changed
     */
    modelLangChanged: function (lang) {
      this.setAttribute('lang', lang);
    }
  });
}());
