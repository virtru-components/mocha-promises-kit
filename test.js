var itAsync = require('./index').itAsync;
var Q = require('q');
var assert = require('chai').assert;

describe('itAsync', function() {
  itAsync('passes', function() {
    return Q.fcall(function() {
      assert.equal(1,1);
    });
  });

  // FIXME... might be a better way than to just fail. It's strange that the
  // passing tests is one test passes and one test fails
  itAsync('fails', function() {
    return Q.fcall(function() {
      assert.equal(2+2, 5, 'This should fail');
    });
  });
});
