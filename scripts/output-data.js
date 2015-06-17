'use strict';
/*global module: false, require: false*/

var State = deps('ampersand-state');
var Collection = deps('ampersand-collection');

var OutputModel = State.extend({
  props: {
    label:   'string',
    choices: 'array',
    mapping: 'string'
  },

  session: {
    editable: {
      type: 'boolean',
      default: true
    },
    focused: 'boolean'
  }
});

module.exports = {
  Model: OutputModel,
  Collection: Collection.extend({
    model: OutputModel
  })
};
