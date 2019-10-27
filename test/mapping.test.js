/* eslint-env mocha */
const assert = require('assert');
const Mapping = require('../lib/mapping');
const Sys = require('../lib/sys');

describe('Mapping', () => {
  it('should have Sys.STD', () => {
    Object.keys(Mapping)
        .filter((key) => {
          if (!(Sys.STD in Mapping[key])) {
            return true;
          }
        })
        .map((key) => {
          assert.fail('"' + key + '" does not have Sys.STD');
        });
  });
});
