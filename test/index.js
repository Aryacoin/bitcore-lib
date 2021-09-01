"use strict";

var should = require("chai").should();
var ayacore = require("../");

describe('#versionGuard', function() {
  it('global._ayacore should be defined', function() {
    should.equal(global._ayacore, ayacore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      ayacore.versionGuard('version');
    }).should.throw('More than one instance of ayacore');
  });
});
