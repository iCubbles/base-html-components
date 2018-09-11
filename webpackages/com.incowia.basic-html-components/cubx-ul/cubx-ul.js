(function () {
  'use strict';

  CubxComponent({
    is: 'cubx-ul',

    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    contextReady: function () {
      this._handelComponentInit();
    },

    _handelComponentInit: function () {
      this._fillOlList();
      this._updateAttributes();
    },

    _updateAttributes: function () {
      this.updateId(this.getId());
      this.updateLang(this.getLang());
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'list' has changed ...
     */
    modelListChanged: function (newValue) {
      this._emptyOlList();
      this._fillOlList();
    },

    /**
     *  Called when slot 'id' has changed
     *  @param {boolean} id value for the input
     */
    modelIdChanged: function (id) {
      this.updateId(id);
    },

    /**
     *  Called when slot 'lang' has changed
     */
    modelLangChanged: function (lang) {
      this.updateLang(lang);
    },

    /**
     * Fill the ol list
     * @private
     */
    _fillOlList: function () {
      var list = this.getList() || [];
      for (var i in list) {
        this.getMainHTMLElement().appendChild(this._createLiElement(list[i]));
      }
    },

    /**
     * Clear the ul list
     * @private
     */
    _emptyOlList: function () {
      this.getMainHTMLElement().innerHTML = "";
    },

    /**
     * Create a new <li> element with a text
     * @param text - Text to be displayed within the <li>
     * @returns {Element}
     * @private
     */
    _createLiElement: function (text) {
      var node = document.createElement("li");
      var textNode = document.createTextNode(text);
      node.appendChild(textNode);
      return node;
    },

    getMainHTMLElement: function () {
      return this.$$('ul');
    },

    setAttToMainHTMLElement: function (att, val) {
      if (val !== undefined) {
        this.getMainHTMLElement().setAttribute(att, val);
      }
    },

    removeAttToMainHTMLElement: function (att) {
      this.getMainHTMLElement().removeAttribute(att);
    },

    updateId: function (id) {
      this.setAttToMainHTMLElement('id', id);
    },

    updateLang: function (lang) {
      this.setAttToMainHTMLElement('lang', lang);
    }
  });
}());
