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
    }
  });
}());
