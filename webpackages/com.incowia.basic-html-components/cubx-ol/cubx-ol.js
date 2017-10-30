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
    is: 'cubx-ol',

    _validTypes:[
      '1',
      'A',
      'a',
      'I',
      'i'
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
      this._fillOlList();
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
    modelTypeChanged: function (newType) {
      if (typeof newType === 'string' && this._validTypes.indexOf(newType) === -1) {
        console.log('type : "' + newType + '" is not a valid input type. Using type '
          + this._validTypes[0] + ' instead.');
        newType = this._validTypes[0];
      }
      this.$$('ol').setAttribute('type', newType);
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'start' has changed ...
     */
    modelStartChanged: function (newStart) {
      // update the view
      this.$$('ol').setAttribute('start', newStart);
    },

    /**
     * Fill the list of the ol component
     * @private
     */
    _fillOlList: function () {
      var list = this.getList() || [];
      for (var i in list) {
       this.$$('ol').appendChild(this._createLiElement(list[i]));
      }
    },

    /**
     * Empty the ol list
     * @private
     */
    _emptyOlList: function () {
      this.$$('ol').innerHTML = "";
    },

    /**
     * Create a new <li> element with a text
     * @param text - Text to be displayed within the <li>
     * @returns {Element}
     * @private
     */
    _createLiElement: function (text) {
      var node = document.createElement("LI");
      var textNode = document.createTextNode(text);
      node.appendChild(textNode);
      return node;
    },

    /**
     *  Called when slot 'lang' has changed
     */
    modelLangChanged: function (lang) {
      this.setAttribute('lang', lang);
    }
  });
}());
