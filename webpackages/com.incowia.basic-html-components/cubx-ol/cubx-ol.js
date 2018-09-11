(function () {
  'use strict';

  CubxComponent({
    is: 'cubx-ol',

    _validTypes:[
      '1',
      'A',
      'a',
      'I',
      'i'
    ],

    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    contextReady: function () {
      this._handleComponentInit();
    },

    _handleComponentInit: function() {
      this._fillOlList();
      this._updateAttributes();
    },

    _updateAttributes: function () {
      this.updateId(this.getId());
      this.updateType(this.getType());
      this.updateStart(this.getStart());
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
     *  Observe the Cubbles-Component-Model: If value for slot 'list' has changed ...
     */
    modelListChanged: function (newValue) {
      this._emptyOlList();
      this._fillOlList();
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'type' has changed ...
     */
    modelTypeChanged: function (type) {
      this.updateType(type);
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'start' has changed ...
     */
    modelStartChanged: function (start) {
      // update the view
      this.updateStart(start);
    },

    /**
     *  Called when slot 'lang' has changed
     */
    modelLangChanged: function (lang) {
      this.updateLang(lang);
    },

    /**
     * Fill the list of the ol component
     * @private
     */
    _fillOlList: function () {
      var list = this.getList() || [];
      for (var i in list) {
       this.getMainHTMLElement().appendChild(this._createLiElement(list[i]));
      }
    },

    /**
     * Empty the ol list
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
      return this.$$('ol');
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

    updateType: function (type) {
      if (typeof type === 'string' && this._validTypes.indexOf(type) === -1) {
        console.log('type : "' + type + '" is not a valid input type. Using type ' +
          this._validTypes[0] + ' instead.');
        type = this._validTypes[0];
      }
      // update the view
      this.setAttToMainHTMLElement('type', type);
    },

    updateStart: function (start) {
      // update the view
      this.setAttToMainHTMLElement('start', start);
    },

    updateLang: function (lang) {
      this.setAttToMainHTMLElement('lang', lang);
    }
  });
}());
