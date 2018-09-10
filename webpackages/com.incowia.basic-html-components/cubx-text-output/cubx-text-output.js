(function () {
  'use strict';

  CubxComponent({
    is: 'cubx-text-output',

    contextReady: function () {
      this.updateValue(this.getValue());
      this.updateVisibility(this.getVisible());
      this.updateLang(this.getLang());
      this.updateId(this.getId());
    },

    modelIdChanged: function (id) {
      this.updateId(id);
    },

    modelValueChanged: function (newValue) {
      this.updateValue(newValue);
    },

    modelVisibleChanged: function (newValue) {
      this.updateVisibility(newValue);
    },

    __isHidden: function() {
      return !this.getVisible();
    },

    /**
     *  Called when slot 'lang' has changed
     */
    modelLangChanged: function (lang) {
      this.updateLang(lang);
    },

    updateValue: function (value) {
      if (value){
        this.getMainHTMLElement().innerHTML = value;
      }
    },

    updateVisibility: function(isVisible) {
      if (!isVisible) {
        this.setAttToMainHTMLElement('hidden', 'hidden');
      } else {
        this.removeAttToMainHTMLElement('hidden')
      }
    },

    updateLang: function(lang) {
      this.setAttToMainHTMLElement('lang', lang);
    },

    updateId: function(id) {
      this.setAttToMainHTMLElement('id', id);
    },

    setAttToMainHTMLElement: function(att, val) {
      if (val !== undefined) {
        this.getMainHTMLElement().setAttribute(att, val);
      }
    },

    removeAttToMainHTMLElement: function(att) {
      this.getMainHTMLElement().removeAttribute(att);
    },

    getMainHTMLElement: function() {
      return this.$$('span');
    }
  });
}());
