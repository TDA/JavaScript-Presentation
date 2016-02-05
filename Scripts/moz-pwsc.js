/**
 * Created by schandramouli on 2/5/16.
 */

function bf(BloomFilter, bloomdata) {
  'use strict';

  return function (options) {
    options = options || {};
    var minLength = options.minLength || 8;

    var numberOfHashes = bloomdata.numberOfHashes || 8;
    var bloomFilterData = bloomdata.bloomFilterData || {};
    var bloom = new BloomFilter(bloomFilterData, numberOfHashes);

    var MESSAGES = {
      ALL_LETTERS_OR_NUMBERS: 'ALL_LETTERS_OR_NUMBERS',
      BLOOMFILTER_HIT: 'BLOOMFILTER_HIT',
      BLOOMFILTER_MISS: 'BLOOMFILTER_MISS',
      LONG_ENOUGH: 'LONG_ENOUGH',
      MISSING_PASSWORD: 'MISSING_PASSWORD',
      NOT_A_STRING: 'NOT_A_STRING',
      TOO_SHORT: 'TOO_SHORT'
    };

    function isAllLetters(password) {
      return /^[a-zA-Z]+$/.test(password);
    }

    function isAllNumbers(password) {
      return /^[0-9]+$/.test(password);
    }

    function isTooShort(password) {
      return password.length < minLength;
    }

    function isLongEnough(password) {
      return password.length >= (minLength + 4);
    }

    return function (password, callback) {
      if (!password) {
        callback(MESSAGES.MISSING_PASSWORD);
      } else if (typeof password !== 'string') {
        callback(MESSAGES.NOT_A_STRING);
      } else if (isTooShort(password)) {
        callback(MESSAGES.TOO_SHORT);
      } else if (isLongEnough(password)) {
        // password is long enough, it's automatically good.
        callback(MESSAGES.LONG_ENOUGH);
        // password is non-empty, a string and length greater
        // than minimum length, shorter than the strong length.
      } else if (isAllLetters(password)) {
        callback(MESSAGES.ALL_LETTERS_OR_NUMBERS);
      } else if (isAllNumbers(password)) {
        callback(MESSAGES.ALL_LETTERS_OR_NUMBERS);
        // Only if the password has a chance of being
        // strong, but not too strong, is the bloom filter
        // checked. All the above tests mean the bloomfilter
        // data set can be shrunk significantly.
      } else if (bloom.test(password)) {
        callback(MESSAGES.BLOOMFILTER_HIT);
      } else {
        callback(MESSAGES.BLOOMFILTER_MISS);
      }
    };
  };
}

var x  = new bf(new Function(), {});
console.log(x, x());
console.log(x.toString());

console.log("----------------------------------------------------");
console.log(x().toString());