(function () {
  'use strict';

  CubxComponent({
    is: 'cubx-img',
    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    contextReady: function () {
      this._updateAttributes();
    },

    _updateAttributes: function () {
      this.updateId(this.getId());
      this.updateSrc(this.getSrc());
      this.updateAlt(this.getAlt());
      this.updateHeight(this.getHeight());
      this.updateWidth(this.getWidth());
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
     *  Called when slot 'height' has changed
     */
    modelWidthChanged: function (width) {
      this.updateWidth(width);
    },

    /**
     *  Called when slot 'lang' has changed
     */
    modelLangChanged: function (lang) {
      this.updateLang(lang);
    },

    getMainHTMLElement: function() {
      return this.$$('img');
    },

    setAttToMainHTMLElement: function(att, val) {
      if (val !== undefined) {
        this.getMainHTMLElement().setAttribute(att, val);
      }
    },

    removeAttToMainHTMLElement: function(att) {
      this.getMainHTMLElement().removeAttribute(att);
    },

    updateId: function (id) {
      this.setAttToMainHTMLElement('id', id);
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

    updateLang: function (lang) {
      this.setAttToMainHTMLElement('lang', lang);
    }
  });
}());
