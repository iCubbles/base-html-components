(function () {
  'use strict';

  CubxPolymer({
    is: 'cubx-text-output',

    created: function () {
    },

    ready: function () {
      this.value = this.getValue();
    },

    attached: function () {
    },

    cubxReady: function () {
    },

    modelValueChanged: function (newValue) {
      this.value = newValue;
    },

    __isHidden: function() {
      return !this.model.visible;
    },

    /**
     *  Called when slot 'lang' has changed
     */
    modelLangChanged: function (lang) {
      this.setAttribute('lang', lang);
    }
  });
}());
