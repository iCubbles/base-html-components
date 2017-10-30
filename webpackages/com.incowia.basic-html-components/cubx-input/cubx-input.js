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

    properties: {
      hidden: {
        type: Boolean,
        value: false
      }
    },

    //valid cubx-input types
    _validTypes:[
      'text',
      'number',
      'checkbox',
      'radio',
      'range',
      'date',
      'file',
      'image',
      'email',
      'color',
      'datetime-local',
      'month',
      'search',
      'tel',
      'time',
      'url',
      'week'
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
      // add change listener to output a (custom) validation message on invalid input
      this.$$('input').addEventListener("change", function(){
        if (!this.$$('input').validity.valid) {
          var customMessage = this.getCustomValidationMessage();
          if (customMessage !== undefined && typeof customMessage === 'string' && customMessage.length > 0) {
            this.$$('input').setCustomValidity(customMessage);
          }
        }
        this.setValidationMessage(this.$$('input').validationMessage);
      }.bind(this), false);

      // add input listener to clear (custom) validation message based on validity of input
      this.$$('input').addEventListener("input", function(){
        this.$$('input').setCustomValidity("");
        if (this.$$('input').validity.valid) {
          this.setValidationMessage(this.$$('input').validationMessage);
        }
      }.bind(this), false);
    },

    /**
     * A handler to be called by a dom-element
     * @param {event} event
     */
    inputFieldSlotValueChanged: function (event) {
      // update the cubbles-model
      this.setValue(event.target.value);
    },

    keyPressed: function (event) {
      if(event.keyCode === 13){
        event.preventDefault();
        this.setValue(event.target.value);
      }
    },

    /**
     *  Called when slot 'value' has changed
     */
    modelValueChanged: function (value) {
      // update the view
      if (this.getType() !== 'file') {
        this.$$('input').value = value;
        if (this.getType() === 'checkbox' || this.getType() === 'radio') {
          this.setChecked(this.$$('input').checked);
        } else {
          this.setChangeObject({newValue: value, customValue: this.getCustomValue()});
        }
      }
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
      this.$$('input').setAttribute('type', type);
    },

    /**
     *  Called when slot 'placeholder' has changed
     */
    modelPlaceholderChanged: function (placeholder) {
      // update the view
      this.$$('input').setAttribute('placeholder', placeholder);
    },

    /**
     *  Called when slot 'pattern' has changed
     *  @param {string} pattern - a regex pattern (see html5pattern)
     */
    modelPatternChanged: function (pattern) {
      // update the view
      this.$$('input').setAttribute('pattern', pattern);
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
     *  Called when slot 'min' has changed
     */
    modelMinChanged: function (min) {
      // update the view
      this.$$('input').setAttribute('min', min);
    },
    /**
     *  Called when slot 'max' has changed
     */

    modelMaxChanged: function (max) {
      // update the view
      this.$$('input').setAttribute('max', max);
    },

    /**
     *  Called when slot 'step' has changed
     */
    modelStepChanged: function (step) {
      // update the view
      this.$$('input').setAttribute('step', step);
    },

    /**
     *  Called when slot 'checked' has changed
     */
    modelCheckedChanged: function (checked) {
      // update the view
      this.$$('input').checked = checked;
      this.setChangeObject({newValue: checked, customValue: this.getCustomValue()});
    },

    /**
     *  Called when slot 'accept' has changed
     */
    modelAcceptChanged: function (accept) {
      // update the view
      this.$$('input').setAttribute('accept', accept);
    },

    /**
     *  Called when slot 'src' has changed
     */
    modelSrcChanged: function (src) {
      // update the view
      this.$$('input').setAttribute('src', src);
    },

    /**
     *  Called when slot 'alt' has changed
     */
    modelAltChanged: function (alt) {
      // update the view
      this.$$('input').setAttribute('alt', alt);
    },

    /**
     *  Called when slot 'height' has changed
     */
    modelHeightChanged: function (height) {
      // update the view
      this.$$('input').setAttribute('height', height);
    },

    /**
     *  Called when slot 'width' has changed
     */
    modelWidthChanged: function (width) {
      // update the view
      this.$$('input').setAttribute('width', width);
    },

    /**
     *  Called when slot 'name' has changed
     */
    modelNameChanged: function (name) {
      // update the view
      this.$$('input').setAttribute('name', name);
    },

    /**
     *  Called when slot 'tabindex' has changed
     */
    modelTabindexChanged: function (newTabindex) {
      // update the view
      this.$$('input').setAttribute('tabindex', newTabindex);
    },

    /**
     *  Called when slot 'disabled' has changed
     */
    modelDisabledChanged: function (disabled) {
      this.$$('input').disabled = disabled;
    },

    /**
     *  Called when slot 'readonly' has changed
     */
    modelReadonlyChanged: function (readonly) {
      this.$$('input').readOnly = readonly;
    },

    /**
     *  Called when slot 'required' has changed
     */
    modelRequiredChanged: function (required) {
      this.$$('input').required = required;
    },

    /**
     *  Called when slot 'lang' has changed
     */
    modelLangChanged: function (lang) {
      this.$$('input').setAttribute('lang', lang);
    }
  });
}());
