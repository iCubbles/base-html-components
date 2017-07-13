(function () {
  'use strict';
  CubxPolymer({
    is: 'cubx-table',

    dataKey: false,
    hasAdvancedCol: false,
    hasAddRow: false,

    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    cubxReady: function () {
      var data = this.getData();
      if (data && (data.length || data.length === 0)) {
        this.updateTable(data);
      }
    },

    updateTable: function (data) {
      var tHead = this.$$('thead tr');
      var tBody = this.$$('tbody');
      var tFoot = this.$$('tfoot tr');
      var i, j;
      if (data[0]) {
        var offset = 0;
        for (i=0; i<data[0].length; i++) {
          // update table head
          if (this.dataKey === false || data[0][i] != this.dataKey) {
            if (!tHead.children[i+offset]) {
              tHead.appendChild(document.createElement("th"));
            }
            tHead.children[i+offset].innerHTML = data[0][i];
          }
          else {
            offset--;
          }
        }
        while (tHead.children.length > data[0].length + offset) {
          tHead.removeChild(tHead.children[data[0].length + offset]);
        }
        if (this.hasAdvancedCol) {
          tHead.appendChild(document.createElement("th"));
        }
        if (this.dataKey !== false && false) {
          // a key has been specified; only remove rows absent in data and add new rows
          for (i=1; i<data.length; i++) {
            // TODO implement
          }
        }
        else {
          // no key specified; remove all rows and add new rows from data
          var keyPos = data[0].indexOf(this.dataKey);
          while (tBody.children.length) {
            tBody.removeChild(tBody.firstChild);
          }
          for (i=1; i<data.length; i++) {
            var dataRow = document.createElement("tr");
            for (j=0; j<data[i].length; j++) {
              if (keyPos != j) {
                var dataCell = document.createElement("td");
                dataCell.innerHTML = data[i][j];
                dataRow.appendChild(dataCell);
              }
            }
            if (this.hasAdvancedCol) {
              dataCell = document.createElement("td");
              var settings = this.getSettings();
              settings = settings.advancedCol;
              dataCell.innerHTML = settings.content;
              dataCell.classList.add("advanced");
              if (settings.class) {
                dataCell.classList.add(settings.class);
              }
              else if (settings.color) {
                dataCell.style.backgroundColor = settings.color;
              }
              if (settings.link) {
                var link = settings.link;
                if (data[0].indexOf(settings.ref) > -1) {
                  link += data[i][data[0].indexOf(settings.ref)];
                }
                dataCell.onclick = (function(link){ return function(){ window.open(link, '_blank');}})(link);
              }
              dataRow.appendChild(dataCell);
            }
            tBody.appendChild(dataRow);
          }
        }
      }
      else {
        // no data; clear table
        while (tHead.children.length) {
          tHead.removeChild(tHead.firstChild);
        }
        while (tBody.children.length) {
          tBody.removeChild(tBody.firstChild);
        }
        while (tFoot.children.length) {
          tFoot.removeChild(tFoot.firstChild);
        }
      }
    },

    modelDataChanged: function (value) {
      if (value && (value.length || value.length === 0)) {
        this.updateTable(value);
      }
    },

    modelSettingsChanged: function (value) {
      if (value && value.advancedCol) {
        this.hasAdvancedCol = true;
      }
      else {
        this.hasAdvancedCol = false;
      }
      if (value && value.key) {
        this.dataKey = value.key;
      }
      else {
        this.dataKey = false;
      }
    }
  });
}());
