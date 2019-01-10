/* globals CubxComponent */
(function () {
  'use strict';

  CubxComponent({
    is: 'cubx-accordion-ctrl',

    classes: {
      COLLAPSED: 'collapsed',
      EXPANDED: 'expanded'
    },

    contextReady: function () {
      this._cubxReady = true;
      this._handleConfigChanges();
    },

    modelExpandAllChanged: function (value) {
      if (this._cubxReady && typeof value === 'boolean' && value) {
        this._handleConfigChanges(true);
      }
    },

    modelItemSelectorsChanged: function (selectors) {
      if (selectors instanceof Array && this._cubxReady) {
        this._handleConfigChanges();
      }
    },

    modelMultipleChanged: function (multiple) {
      if (typeof multiple === 'boolean' && this._cubxReady) {
        this._handleConfigChanges(true);
      }
    },

    _handleConfigChanges: function (skipInit) {
      var itemSelectors = this.model.itemSelectors;
      var multiple = this.model.multiple || false;
      var expandAll = this.model.expandAll || false;

      if (itemSelectors instanceof Array && !skipInit) {
        this._initAccordionForGivenSelectors(itemSelectors)
      };
      if (expandAll && multiple) {
        this._expandItems();
      }
    },

    _expandItems: function () {
      for (var i = 0; i < this.items.length; i++) {
        this._expandItem(this.items[i]);
      }
    },

    _initAccordionForGivenSelectors: function (itemSelectors) {
      var items = [];
      var lastSelectedItem;
      for (var i = 0; i < itemSelectors.length; i++) {
        var item = {
          head: document.querySelector(itemSelectors[i].head),
          body: document.querySelector(itemSelectors[i].body)
        };
        if (itemSelectors[i].hasOwnProperty('expanded') && itemSelectors[i].expanded === true) {
          item.expanded = true;
        } else {
          item.expanded = false;
        }
        items.push(item);
        this._initItem(item);
        if (item.expanded === true) {
          lastSelectedItem = item;
        }
      }
      this.items = items;
      if (lastSelectedItem) {
        this._checkForMultiple(lastSelectedItem);
      }
    },

    _initItem: function (item) {
      if (item.head === null || item.body === null) {
        console.error('invalid selector');
        return;
      }
      if (item.initialised) {
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
      if (item.expanded === true) {
        this._expandItem(item);
      }
      item.initialised = true;
    },

    _checkForMultiple: function (item) {
      if (this.model.multiple === false) {
        for (var i = 0; i < this.items.length; i++) {
          if (this.items[ i ].body !== item.body) {
            this._collapseItem(this.items[ i ]);
          }
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
    },

    /**
     *  Called when slot 'lang' has changed
     */
    modelLangChanged: function (lang) {
      this.setAttribute('lang', lang);
    }
  });
}());
