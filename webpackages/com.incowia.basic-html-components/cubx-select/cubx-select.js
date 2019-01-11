/* globals CubxComponent, Option */
(function () {
  'use strict';

  CubxComponent({
    is: 'cubx-select',

    listener: {
      'select.change': 'inputFieldSlotValueChanged'
    },
    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    contextReady: function () {
      this._fillSelect();
      this._updateAllAttributes();
    },

    _updateAllAttributes: function () {
      this.updateId(this.getId());
      this.updateLabel(this.getLabel());
      this.updateValue(this.getValue());
      this.updateSize(this.getSize());
      this.updateOptions();
      this.updateName(this.getName());
      this.updateTabindex(this.getTabindex());
      this.updateDisabled(this.getDisabled());
      this.updateRequired(this.getRequired());
      this.updateLang(this.getLang());
    },

    /**
     * A handler to be called by a dom-element
     * @param {event} event
     */
    inputFieldSlotValueChanged: function (event) {
      // update the cubbles-model
      if (this.getMainHTMLElement().getAttribute('multiple')) {
        this.setValue(event.target.value);
        this.setValue(this._getSelectValues(this.$$('select')));
      } else {
        // update the cubbles-model
        this.setValue(event.target.value);
      }
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
     * Called when slot 'value' has changed
     */
    modelValueChanged: function (newValue) {
      this.updateValue(newValue);
    },

    /**
     * Called when slot 'size' has changed
     */
    modelSizeChanged: function (newSize) {
      this.updateSize(newSize);
    },

    /**
     * Called when slot 'optionsValues' has changed
     */
    modelOptionsChanged: function () {
      this.updateOptions();
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
     *  Called when slot 'lang' has changed
     */
    modelLangChanged: function (lang) {
      this.updateLang(lang);
    },

    /**
     *  Called when slot 'required' has changed
     */
    modelRequiredChanged: function (required) {
      this.updateRequired(required);
    },

    /**
     *  Called when slot 'required' has changed
     */
    modelMultipleChanged: function (multiple) {
      if (multiple) {
        this.getMainHTMLElement().setAttribute('multiple', true);
      } else {
        this.getMainHTMLElement().removeAttribute('multiple');
      }
    },

    /**
     * Fill the options of the select component
     * @private
     */
    _fillSelect: function () {
      var options = this.getOptions() || [];

      var value;
      var text;
      for (var i in options) {
        value = options[ i ][ 0 ];
        text = options[ i ][ 1 ];
        if (value === this.getValue()) {
          this.getMainHTMLElement().options[ i ] = new Option(text, value, false, true);
        } else {
          this.getMainHTMLElement().options[ i ] = new Option(text, value, false, false);
        }
      }
    },

    /**
     * Empty the select component's options list
     * @private
     */
    _emptySelect: function () {
      this.getMainHTMLElement().options.length = 0;
    },

    getMainHTMLElement: function () {
      return this.$$('select');
    },

    setAttToMainHTMLElement: function (att, val) {
      if (val !== undefined) {
        this.getMainHTMLElement().setAttribute(att, val);
      }
    },

    removeAttToMainHTMLElement: function (att) {
      this.getMainHTMLElement().removeAttribute(att);
    },

    getLabelElement: function () {
      return this.$$('label');
    },

    updateLang: function (lang) {
      this.setAttToMainHTMLElement('lang', lang);
    },

    updateId: function (id) {
      if (id !== undefined) {
        this.setAttToMainHTMLElement('id', id);
        this.getLabelElement().setAttribute('for', id);
      }
    },

    updateLabel: function (label) {
      this.getLabelElement().innerHTML = label;
    },

    updateValue: function (newValue) {
      // update the view
      this.setAttToMainHTMLElement('select', newValue);
    },

    updateSize: function (newSize) {
      // update the view
      this.setAttToMainHTMLElement('size', newSize);
    },

    updateOptions: function () {
      // update the view
      this._emptySelect();
      this._fillSelect();
    },

    updateName: function (name) {
      // update the view
      this.setAttToMainHTMLElement('name', name);
    },

    updateTabindex: function (newTabindex) {
      // update the view
      this.setAttToMainHTMLElement('tabindex', newTabindex);
    },

    updateDisabled: function (disabled) {
      this.getMainHTMLElement().disabled = disabled;
    },

    updateRequired: function (required) {
      this.getMainHTMLElement().required = required;
    },

    _getSelectValues: function (select) {
      var result = [];
      var options = select && select.options;
      var opt;

      for (var i = 0, iLen = options.length; i < iLen; i++) {
        opt = options[ i ];

        if (opt.selected) {
          result.push(opt.value || opt.text);
        }
      }
      return result;
    }

  });
}());
