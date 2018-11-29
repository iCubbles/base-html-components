(function () {
  'use strict';

  CubxComponent({
    is: 'cubx-textarea',

    contextReady: function() {
      this._initComponent();
    },

    _initComponent: function() {
      // add input listener to clear (custom) validation message based on validity of input
      this.getMainHTMLElement().addEventListener("change", function () {
        this.setValue(event.target.value);
      }.bind(this), false);
      this._updateAllAttributes();
    },

    _updateAllAttributes: function () {
      this.updateId(this.getId());
    },

    /**
     *  Called when slot 'id' has changed
     *  @param {boolean} id value for the input
     */
    modelIdChanged: function (id) {
      this.updateId(id);
      this.updateLabel(this.getLabel());
      this.updateValue(this.getValue());
      this.updateMinLength(this.getMinLength());
      this.updateMaxLength(this.getMaxLength());
      this.updateRows(this.getRows());
      this.updateCols(this.getColumns());
      this.updateName(this.getName());
      this.updateTabindex(this.getTabindex());
      this.updateDisabled(this.getDisabled());
      this.updateReadonly(this.getReadonly());
      this.updateRequired(this.getRequired());
      this.updateLang(this.getLang());
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
     *  Called when slot 'value' has changed
     */
    modelValueChanged: function (newValue) {
     this.updateValue(newValue);
    },

    /**
     *  Called when slot 'minLength' has changed
     */
    modelMinLengthChanged: function (newMinLength) {
     this.updateMinLength(newMinLength);
    },

    /**
     *  Called when slot 'maxLength' has changed
     */
    modelMaxLengthChanged: function (newMaxLength) {
     this.updateMaxLength(newMaxLength);
    },

    /**
     *  Called when slot 'rows' has changed
     */
    modelRowsChanged: function (newRows) {
     this.updateRows(newRows);
    },

    /**
     *  Called when slot 'cols' has changed
     */
    modelColsChanged: function (newColumns) {
     this.updateCols(newColumns);
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
      return this.$$('textarea');
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
      return this.$$('label');
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
      if (newValue !== undefined) {
        // update the view
        this.getMainHTMLElement().value = newValue;
      }
    },

    updateMinLength: function (newMinLength) {
      if (newMinLength >= 0) {
        this.setAttToMainHTMLElement('minLength', newMinLength);
      }
    },

    updateMaxLength: function (newMaxLength) {
      if (newMaxLength > 0) {
        this.setAttToMainHTMLElement('maxLength', newMaxLength);
      }
    },

    updateRows: function (newRows) {
      if (newRows > 0) {
        this.setAttToMainHTMLElement('rows', newRows);
      }
    },

    updateCols: function (newColumns) {
      if (newColumns > 0) {
        this.setAttToMainHTMLElement('cols', newColumns);
      }
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

    updateReadonly: function (readonly) {
      this.getMainHTMLElement().readOnly = readonly;
    },

    updateRequired: function (required) {
      this.getMainHTMLElement().required = required;
    },

    updateLang: function (lang) {
      this.setAttToMainHTMLElement('lang', lang);
    },
  });
}());
