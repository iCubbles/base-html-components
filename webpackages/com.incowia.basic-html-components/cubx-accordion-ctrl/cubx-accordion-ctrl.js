(function () {
  'use strict';

  CubxPolymer({
    is: 'cubx-accordion-ctrl',

    classes: {
      COLLAPSED: 'collapsed',
      EXPANDED: 'expanded'
    },

    cubxReady: function () {
      this._cubxReady = true;
      this._handleConfigChanges();
    },

    modelItemSelectorsChanged: function (selectors) {
      if (selectors instanceof Array && this._cubxReady) {
        this._handleConfigChanges();
      }
    },

    modelMultipleChanged: function (multiple) {
      if (typeof multiple === 'boolean' && this._cubxReady) {
        this._handleConfigChanges();
      }
    },

    _handleConfigChanges: function () {
      var itemSelectors = this.model.itemSelectors;
      var multiple = this.model.multiple || false;

      itemSelectors instanceof Array ? this._initAccordionForGivenSelectors(itemSelectors) : null;
    },

    _initAccordionForGivenSelectors: function (itemSelectors) {
      var items = [];
      for (var i = 0; i < itemSelectors.length; i++) {
        var item = {
          head: document.querySelector(itemSelectors[i].head),
          body: document.querySelector(itemSelectors[i].body)
        };
        items.push(item);
        this._initItem(item);
      }
      this.items = items;
    },

    _initItem: function (item) {
      if (item.head === null || item.body === null) {
        console.error('invalid selector');
        return;
      }
      var self = this;
      item.head.classList.add('cubx-accordion-ctrl-item-head');
      item.head.classList.add(this.classes.COLLAPSED);
      item.body.classList.add('cubx-accordion-ctrl-item-body');
      item.body.classList.add('hidden');
      item.head.addEventListener('click', function (event) {
        item.body.classList.contains('hidden') ? self._expandItem(item) : self._collapseItem(item);
        self._checkForMultiple(item);
      });
    },

    _checkForMultiple: function (item) {
      if (this.model.multiple === false) {
        for(var i = 0; i < this.items.length; i++) {
          this.items[i].body !== item.body ? this._collapseItem(this.items[i]) : null;
        }
      }
    },

    _expandItem: function (item) {
      item.body.classList.remove('hidden');
      item.head.classList.add(this.classes.EXPANDED);
      item.head.classList.remove(this.classes.COLLAPSED);
    },

    _collapseItem: function (item) {
      item.body.classList.add('hidden');
      item.head.classList.add(this.classes.COLLAPSED);
      item.head.classList.remove(this.classes.EXPANDED);
    }
  });
}());
