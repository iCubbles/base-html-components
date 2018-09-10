(function () {
  'use strict';
  CubxComponent({
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
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    contextReady: function () {
      this.initComponent();
    },

    initComponent: function() {
      // add change listener to output a (custom) validation message on invalid input
      this.getMainHTMLElement().addEventListener("change", function(){
        if (!this.getMainHTMLElement().validity.valid) {
          var customMessage = this.getCustomValidationMessage();
          if (customMessage !== undefined && typeof customMessage === 'string' && customMessage.length > 0) {
            this.getMainHTMLElement().setCustomValidity(customMessage);
          }
        }
        this.setValidationMessage(this.getMainHTMLElement().validationMessage);
      }.bind(this), false);

      // add input listener to clear (custom) validation message based on validity of input
      this.getMainHTMLElement().addEventListener("input", function(){
        this.getMainHTMLElement().setCustomValidity("");
        if (this.getMainHTMLElement().validity.valid) {
          this.setValidationMessage(this.getMainHTMLElement().validationMessage);
        }
      }.bind(this), false);
      this.updateAttributes();
    },

    updateAttributes: function() {
      this.updateValue(this.getValue());
      this.updateType(this.getType());
      this.updatePlaceholder(this.getPlaceholder());
      this.updatePattern(this.getPattern());
      this.updateHidden(this.getHidden());
      this.updateId(this.getId());
      this.updateLabel(this.getLabel());
      this.updateRightText(this.getRightText());
      this.updateMin(this.getMin());
      this.updateMax(this.getMax());
      this.updateStep(this.getStep());
      this.updateChecked(this.getChecked());
      this.updateAccept(this.getAccept());
      this.updateSrc(this.getSrc());
      this.updateAlt(this.getAlt());
      this.updateHeight(this.getHeight());
      this.updateWidth(this.getWidth());
      this.updateName(this.getName());
      this.updateTabindex(this.getTabindex());
      this.updateDisabled(this.getDisabled());
      this.updateReadonly(this.getReadonly());
      this.updateRequired(this.getRequired());
      this.updateLang(this.getLang());
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
      this.updateValue(value);
    },

    /**
     *  Called when slot 'type' has changed
     */
    modelTypeChanged: function (type) {
      this.updateType(type);
    },

    /**
     *  Called when slot 'placeholder' has changed
     */
    modelPlaceholderChanged: function (placeholder) {
      this.updatePlaceholder(placeholder);
    },

    /**
     *  Called when slot 'pattern' has changed
     *  @param {string} pattern - a regex pattern (see html5pattern)
     */
    modelPatternChanged: function (pattern) {
      this.updatePattern(pattern);
    },

    /**
     *  Called when slot 'hidden' has changed
     *  @param {boolean} hidden - true to hide this artifact
     */
    modelHiddenChanged: function (hidden) {
      this.updateHidden(hidden);
    },

    /**
     *  Called when slot 'id' has changed
     *  @param {boolean} id value for the input
     */
    modelIdChanged: function (id) {
      this.updateId(id);
    },

    /**
     *  Called when slot 'label' has changed
     *  @param {boolean} label value for the input
     */
    modelLabelChanged: function (label) {
      this.updateLabel(label);
    },

    /**
     *  Called when slot 'rightText' has changed
     *  @param {boolean} rightText value for the input
     */
    modelRightTextChanged: function (rightText) {
      this.updateRightText(rightText);
    },

    /**
     *  Called when slot 'min' has changed
     */
    modelMinChanged: function (min) {
      this.updateMin(min);
    },

    /**
     *  Called when slot 'max' has changed
     */
    modelMaxChanged: function (max) {
      this.updateMax(max);
    },

    /**
     *  Called when slot 'step' has changed
     */
    modelStepChanged: function (step) {
      this.updateStep(step);
    },

    /**
     *  Called when slot 'checked' has changed
     */
    modelCheckedChanged: function (checked) {
      this.updateChecked(checked);
    },

    /**
     *  Called when slot 'accept' has changed
     */
    modelAcceptChanged: function (accept) {
      this.updateAccept(accept);
    },

    /**
     *  Called when slot 'src' has changed
     */
    modelSrcChanged: function (src) {
      this.updateSrc(src);
    },

    /**
     *  Called when slot 'alt' has changed
     */
    modelAltChanged: function (alt) {
      this.updateAlt(alt);
    },

    /**
     *  Called when slot 'height' has changed
     */
    modelHeightChanged: function (height) {
      this.updateHeight(height);
    },

    /**
     *  Called when slot 'width' has changed
     */
    modelWidthChanged: function (width) {
      this.updateWidth(width);
    },

    /**
     *  Called when slot 'name' has changed
     */
    modelNameChanged: function (name) {
      this.updateName(name);
    },

    /**
     *  Called when slot 'tabindex' has changed
     */
    modelTabindexChanged: function (newTabindex) {
      this.updateTabindex(newTabindex);
    },

    /**
     *  Called when slot 'disabled' has changed
     */
    modelDisabledChanged: function (disabled) {
      this.updateDisabled(disabled);
    },

    /**
     *  Called when slot 'readonly' has changed
     */
    modelReadonlyChanged: function (readonly) {
      this.updateReadonly(readonly);
    },

    /**
     *  Called when slot 'required' has changed
     */
    modelRequiredChanged: function (required) {
      this.updateRequired(required);
    },

    /**
     *  Called when slot 'lang' has changed
     */
    modelLangChanged: function (lang) {
      this.updateLang(lang);
    },

    getMainHTMLElement: function() {
      return this.$$('input');
    },

    setAttToMainHTMLElement: function(att, val) {
      if (val !== undefined) {
        this.getMainHTMLElement().setAttribute(att, val);
      }
    },

    removeAttToMainHTMLElement: function(att) {
      this.getMainHTMLElement().removeAttribute(att);
    },

    getLabelElement: function () {
      return this.$$('#mainLabel');
    },

    getRightLabelElement: function () {
      return this.$$('#rightLabel');
    },

    updateId: function (id) {
      if (id !== undefined) {
        this.setAttToMainHTMLElement('id', id);
        this.getLabelElement().setAttribute('for', id);
        this.getRightLabelElement().setAttribute('for', id);
      }
    },

    updateValue: function (value) {
      if (value !== undefined){
        if (this.getType() !== 'file') {
          this.getMainHTMLElement().value = value;
          if (this.getType() === 'checkbox' || this.getType() === 'radio') {
            this.setChecked(this.getMainHTMLElement().checked);
          } else {
            this.setChangeObject({newValue: value, customValue: this.getCustomValue()});
          }
        }
      }
    },

    updateType: function (type) {
      if (typeof type === 'string' && this._validTypes.indexOf(type) === -1) {
        console.log('type : "' + type + '" is not a valid input type. Using type '
          + this._validTypes[0] + ' instead.');
        type = this._validTypes[0];
      }
      // update the view
      this.setAttToMainHTMLElement('type', type);
    },

    updatePlaceholder: function (placeholder) {
      // update the view
      this.setAttToMainHTMLElement('placeholder', placeholder);
    },

    updatePattern: function (pattern) {
      // update the view
      this.setAttToMainHTMLElement('pattern', pattern);
    },

    updateHidden: function (hidden) {
      // update the view
      if (hidden) {
        this.setAttToMainHTMLElement('hidden', 'hidden');
      } else {
        this.removeAttToMainHTMLElement('hidden');
      }
    },

    updateLabel: function (label) {
      if (label !== undefined) {
        this.getLabelElement().innerHTML = label;
      }
    },

    updateRightText: function (rightText) {
      if (rightText !== undefined) {
        this.getRightLabelElement().innerHTML = rightText;
      }
    },

    updateMin: function (min) {
      // update the view
      this.setAttToMainHTMLElement('min', min);
    },

    updateMax: function (max) {
      // update the view
      this.setAttToMainHTMLElement('max', max);
    },

    updateStep: function (step) {
      // update the view
      this.setAttToMainHTMLElement('step', step);
    },

    updateChecked: function (checked) {
      // update the view
      this.getMainHTMLElement().checked = checked;
      this.setChangeObject({newValue: checked, customValue: this.getCustomValue()});
    },

    updateAccept: function (accept) {
      // update the view
      this.setAttToMainHTMLElement('accept', accept);
    },

    updateSrc: function (src) {
      // update the view
      this.setAttToMainHTMLElement('src', src);
    },

    updateAlt: function (alt) {
      // update the view
      this.setAttToMainHTMLElement('alt', alt);
    },

    updateHeight: function (height) {
      // update the view
      this.setAttToMainHTMLElement('height', height);
    },

    updateWidth: function (width) {
      // update the view
      this.setAttToMainHTMLElement('width', width);
    },

    updateName: function (name) {
      // update the view
      this.setAttToMainHTMLElement('name', name);
    },

    updateTabindex: function (newTabindex) {
      // update the view
      this.setAttToMainHTMLElement('tabindex', newTabindex);
    },

    updateLang: function (lang) {
      this.setAttToMainHTMLElement('lang', lang);
    },

    updateDisabled: function (disabled) {
      this.getMainHTMLElement().disabled = disabled;
    },

    updateReadonly: function (readonly) {
      this.getMainHTMLElement().readOnly = readonly;
    },

    updateRequired: function (required) {
      this.getMainHTMLElement().required = required;
    }
  });
}());
