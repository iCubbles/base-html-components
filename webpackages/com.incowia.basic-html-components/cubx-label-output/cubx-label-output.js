(function () {
  'use strict';

  CubxComponent({
    is: 'cubx-label-output',

    /**
     * Manipulate an element’s local DOM when the element is created and initialized.
     */
    contextReady: function () {
      this._handelComponentInit();
    },

    _handelComponentInit: function () {
      this.updateOutputLabel(this.getOutputLabel());
      this.updateOutputText(this.getOutputText());
      this.updateId(this.getId());
    },

    /**
     *  Called when slot 'id' has changed
     *  @param {boolean} id value for the input
     */
    modelIdChanged: function (id) {
      this.updateId(id);
    },
    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'outputLabel' has changed ...
     */
    modelOutputLabelChanged: function (newValue) {
      this.updateOutputLabel(newValue);
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'outputText' has changed ...
     */
    modelOutputTextChanged: function (newValue) {
      this.updateOutputText(newValue);
    },

    /**
     *  Called when slot 'lang' has changed
     */
    modelLangChanged: function (lang) {
      this.updateLang(lang);
    },

    updateOutputLabel: function (label) {
      this.getOutputLabelElement().innerHTML = label;
    },

    updateId: function (id) {
      if (id !== undefined) {
        this.getOutputTextElement().setAttribute('id', id);
        this.getOutputLabelElement().setAttribute('for', id);
      }
    },

    updateOutputText: function (text) {
      this.getOutputTextElement().innerHTML = text;
    },

    getOutputLabelElement: function (label) {
      return this.$$('label');
    },

    getOutputTextElement: function (text) {
      return this.$$('span');
    },

    updateLang: function (lang) {
      this.setAttribute('lang', lang);
    }
  });
}());
