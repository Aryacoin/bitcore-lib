'use strict';

var ayacore = module.exports;

// module information
ayacore.version = 'v' + require('./package.json').version;
ayacore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of ayacore-lib found. ' +
      'Please make sure to require ayacore-lib and check that submodules do' +
      ' not also include their own ayacore-lib dependency.';
    throw new Error(message);
  }
};
ayacore.versionGuard(global._ayacore);
global._ayacore = ayacore.version;

// crypto
ayacore.crypto = {};
ayacore.crypto.BN = require('./lib/crypto/bn');
ayacore.crypto.ECDSA = require('./lib/crypto/ecdsa');
ayacore.crypto.Hash = require('./lib/crypto/hash');
ayacore.crypto.Random = require('./lib/crypto/random');
ayacore.crypto.Point = require('./lib/crypto/point');
ayacore.crypto.Signature = require('./lib/crypto/signature');

// encoding
ayacore.encoding = {};
ayacore.encoding.Base58 = require('./lib/encoding/base58');
ayacore.encoding.Base58Check = require('./lib/encoding/base58check');
ayacore.encoding.BufferReader = require('./lib/encoding/bufferreader');
ayacore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
ayacore.encoding.Varint = require('./lib/encoding/varint');

// utilities
ayacore.util = {};
ayacore.util.buffer = require('./lib/util/buffer');
ayacore.util.js = require('./lib/util/js');
ayacore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
ayacore.errors = require('./lib/errors');

// main bitcoin library
ayacore.Address = require('./lib/address');
ayacore.Block = require('./lib/block');
ayacore.MerkleBlock = require('./lib/block/merkleblock');
ayacore.BlockHeader = require('./lib/block/blockheader');
ayacore.HDPrivateKey = require('./lib/hdprivatekey.js');
ayacore.HDPublicKey = require('./lib/hdpublickey.js');
ayacore.Networks = require('./lib/networks');
ayacore.Opcode = require('./lib/opcode');
ayacore.PrivateKey = require('./lib/privatekey');
ayacore.PublicKey = require('./lib/publickey');
ayacore.Script = require('./lib/script');
ayacore.Transaction = require('./lib/transaction');
ayacore.URI = require('./lib/uri');
ayacore.Unit = require('./lib/unit');

// dependencies, subject to change
ayacore.deps = {};
ayacore.deps.bnjs = require('bn.js');
ayacore.deps.bs58 = require('bs58');
ayacore.deps.Buffer = Buffer;
ayacore.deps.elliptic = require('elliptic');
ayacore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
ayacore.Transaction.sighash = require('./lib/transaction/sighash');
