'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../_lib/buildLocalizeFn/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eraValues = {
  narrow: ['f.Kr.', 'e.Kr.'],
  abbreviated: ['f.Kr.', 'e.Kr.'],
  wide: ['före Kristus', 'efter Kristus']
};

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1:a kvartalet', '2:a kvartalet', '3:e kvartalet', '4:e kvartalet']
};

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['jan', 'feb', 'marts', 'april', 'maj', 'juni', 'juli', 'aug', 'sep', 'okt', 'nov', 'dec'],
  wide: ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december']
};

var dayValues = {
  narrow: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
  short: ['sö', 'må', 'ti', 'on', 'to', 'fr', 'lö'],
  abbreviated: ['søn', 'man', 'tirs', 'ons', 'tors', 'fre', 'lør'],
  wide: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag']
};

// https://www.unicode.org/cldr/charts/32/summary/sv.html#1888
var dayPeriodValues = {
  narrow: {
    am: 'fm',
    pm: 'em',
    midnight: 'midnatt',
    noon: 'middag',
    morning: 'morg.',
    afternoon: 'efterm.',
    evening: 'kväll',
    night: 'natt'
  },
  abbreviated: {
    am: 'f.m.',
    pm: 'e.m.',
    midnight: 'midnatt',
    noon: 'middag',
    morning: 'morgon',
    afternoon: 'efterm.',
    evening: 'kväll',
    night: 'natt'
  },
  wide: {
    am: 'förmiddag',
    pm: 'eftermiddag',
    midnight: 'midnatt',
    noon: 'middag',
    morning: 'morgon',
    afternoon: 'eftermiddag',
    evening: 'kväll',
    night: 'natt'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'fm',
    pm: 'em',
    midnight: 'midnatt',
    noon: 'middag',
    morning: 'på morg.',
    afternoon: 'på efterm.',
    evening: 'på kvällen',
    night: 'på natten'
  },
  abbreviated: {
    am: 'fm',
    pm: 'em',
    midnight: 'midnatt',
    noon: 'middag',
    morning: 'på morg.',
    afternoon: 'på efterm.',
    evening: 'på kvällen',
    night: 'på natten'
  },
  wide: {
    am: 'fm',
    pm: 'em',
    midnight: 'midnatt',
    noon: 'middag',
    morning: 'på morgonen',
    afternoon: 'på eftermiddagen',
    evening: 'på kvällen',
    night: 'på natten'
  }
};

function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber);

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
      case 2:
        return number + ':a';
    }
  }
  return number + ':e';
}

var localize = {
  ordinalNumber: ordinalNumber,

  era: (0, _index2.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),

  quarter: (0, _index2.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return Number(quarter) - 1;
    }
  }),

  month: (0, _index2.default)({
    values: monthValues,
    defaultWidth: 'wide'
  }),

  day: (0, _index2.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),

  dayPeriod: (0, _index2.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};

exports.default = localize;
module.exports = exports['default'];