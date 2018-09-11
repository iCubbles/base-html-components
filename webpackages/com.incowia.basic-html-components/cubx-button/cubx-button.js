(function () {
  'use strict';

  CubxComponent({
    is: 'cubx-button',

    _validTypes: [
      'submit',
      'reset',
      'button'
    ],

    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    contextReady: function () {
      this._handelComponentInit();
    },

    _handelComponentInit: function () {
      // add event listener to set the clicked output to true every time the button is clicked
      this.getMainHTMLElement().addEventListener("click", function () {
        this.setClicked(true);
      }.bind(this), false);
      this._updateAttributes();
    },

    _updateAttributes: function () {
      this.updateHidden(this.getHidden());
      this.updateId(this.getId());
      this.updateType(this.getType());
      this.updateValue(this.getValue());
      this.updateText(this.getText());
      this.updateOnclick(this.getOnclick());
      this.updateName(this.getName());
      this.updateTabindex(this.getTabindex());
      this.updateDisabled(this.getDisabled());
      this.updateLang(this.getLang());
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
     *  Observe the Cubbles-Component-Model: If value for slot 'type' has changed
     */
    modelTypeChanged: function (type) {
      this.updateType(type);
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'value' has changed
     */
    modelValueChanged: function (value) {
      this.updateValue(value);
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'text' has changed
     */
    modelTextChanged: function (text) {
      this.updateText(text);
    },

    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'onclick' has changed
     */
    modelOnclickChanged: function (callback) {
      // update the view
      this.updateOnclick(callback);
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
    modelTabindexChanged: function (tabindex) {
      this.updateTabindex(tabindex);
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

    getMainHTMLElement: function () {
      return this.$$('button');
    },

    setAttToMainHTMLElement: function (att, val) {
      if (val !== undefined) {
        this.getMainHTMLElement().setAttribute(att, val);
      }
    },

    removeAttToMainHTMLElement: function (att) {
      this.getMainHTMLElement().removeAttribute(att);
    },

    updateHidden: function (hidden) {
      // update the view
      if (hidden) {
        this.setAttToMainHTMLElement('hidden', 'hidden');
      } else {
        this.removeAttToMainHTMLElement('hidden');
      }
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

    updateValue: function (value) {
      // update the view
      this.setAttToMainHTMLElement('value', value);
    },

    updateText: function (text) {
      // update the view
      if (text !== undefined) {
        this.getMainHTMLElement().innerHTML = text;
      }
    },

    updateOnclick: function (value) {
      // update the view
      this.setAttToMainHTMLElement('onclick', value);
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

    updateLang: function (lang) {
      this.setAttToMainHTMLElement('lang', lang);
    }
  });
}());
