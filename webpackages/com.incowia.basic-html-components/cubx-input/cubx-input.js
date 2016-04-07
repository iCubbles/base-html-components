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
    is: 'cubx-input',

    //valid cubx-input types
    _validTypes:[
      'text',
      'number',
      'checkbox',
      'radio',
      'range',
      'date',
      'file',
      'image'
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
    modelValueChanged: function (value) {
      // update the view
      this.$.input.setAttribute('value', value);
    },

    /**
     *  Called when slot 'type' has changed
     */
    modelTypeChanged: function (type) {
      if (typeof type === 'string' && this._validTypes.indexOf(type) === -1) {
        console.log('type : "' + type + '" is not a valid input type. Using type '
          + this._validTypes[0] + ' instead.');
        type = this._validTypes[0];
      }
      // update the view
      this.$.input.setAttribute('type', type);
    },

    /**
     *  Called when slot 'placeholder' has changed
     */
    modelPlaceholderChanged: function (placeholder) {
      // update the view
      this.$.input.setAttribute('placeholder', placeholder);
    },

    /**
     *  Called when slot 'min' has changed
     */
    modelMinChanged: function (min) {
      // update the view
      this.$.input.setAttribute('min', min);
    },
    /**
     *  Called when slot 'max' has changed
     */

    modelMaxChanged: function (max) {
      // update the view
      this.$.input.setAttribute('max', max);
    },

    /**
     *  Called when slot 'step' has changed
     */
    modelStepChanged: function (step) {
      // update the view
      this.$.input.setAttribute('step', step);
    },

    /**
     *  Called when slot 'checked' has changed
     */
    modelCheckedChanged: function (checked) {
      // update the view
      this.$.input.checked = checked;
    },

    /**
     *  Called when slot 'step' has changed
     */
    modelNameChanged: function (name) {
      // update the view
      this.$.input.setAttribute('name', name);
    },

    /**
     *  Called when slot 'accept' has changed
     */
    modelAcceptChanged: function (accept) {
      // update the view
      this.$.input.setAttribute('accept', accept);
    },

    /**
     *  Called when slot 'src' has changed
     */
    modelSrcChanged: function (src) {
      // update the view
      this.$.input.setAttribute('src', src);
    },

    /**
     *  Called when slot 'alt' has changed
     */
    modelAltChanged: function (alt) {
      // update the view
      this.$.input.setAttribute('alt', alt);
    },

    /**
     *  Called when slot 'height' has changed
     */
    modelHeightChanged: function (height) {
      // update the view
      this.$.input.setAttribute('height', height);
    },

    /**
     *  Called when slot 'height' has changed
     */
    modelWidthChanged: function (width) {
      // update the view
      this.$.input.setAttribute('width', width);
    },

    /**
     *  Called when slot 'height' has changed
     */
    modelRightTextChanged: function (rightText) {
      // update the view
      this.$.rightText.innerHTML = rightText;
    }


  });
}());
