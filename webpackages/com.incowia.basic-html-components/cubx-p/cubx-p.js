(function () {
  'use strict';
  CubxComponent({
    is: 'cubx-p',

    contextReady: function () {
      this._updateAttributes();
    },

    _updateAttributes: function() {
      this.updateText(this.getText());
      this.updateId(this.getId());
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
     *  Observe the Cubbles-Component-Model: If value for slot 'text' has changed
     */
    modelTextChanged: function (text) {
      this.updateText(text);
    },

    /**
     *  Called when slot 'lang' has changed
     */
    modelLangChanged: function (lang) {
      this.updateLang(lang);
    },

    getMainHTMLElement: function() {
      return this.$$('p');
    },

    setAttToMainHTMLElement: function(att, val) {
      if (val !== undefined) {
        this.getMainHTMLElement().setAttribute(att, val);
      }
    },

    removeAttToMainHTMLElement: function(att) {
      this.getMainHTMLElement().removeAttribute(att);
    },

    updateText: function (text) {
      // update the view
      if (text !== undefined) {
        this.getMainHTMLElement().innerHTML = text;
      }
    },

    updateId: function (id) {
      this.setAttToMainHTMLElement('id', id);
    },

    updateLang: function (lang) {
      this.setAttToMainHTMLElement('lang', lang);
    }
  });
}());
