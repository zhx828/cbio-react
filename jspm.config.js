SystemJS.config({
  devConfig: {
    'map': {
      'react-addons-test-utils': 'npm:react-addons-test-utils@15.2.1',
      'babel-preset-react': 'npm:babel-preset-react@6.11.1',
      'plugin-babel': 'npm:systemjs-plugin-babel@0.0.10'
    },
    'packages': {
      'npm:babel-preset-react@6.11.1': {
        'map': {
          'babel-plugin-transform-react-jsx-source': 'npm:babel-plugin-transform-react-jsx-source@6.9.0',
          'babel-plugin-syntax-jsx': 'npm:babel-plugin-syntax-jsx@6.8.0',
          'babel-plugin-syntax-flow': 'npm:babel-plugin-syntax-flow@6.8.0',
          'babel-plugin-transform-react-jsx': 'npm:babel-plugin-transform-react-jsx@6.8.0',
          'babel-plugin-transform-react-jsx-self': 'npm:babel-plugin-transform-react-jsx-self@6.11.0',
          'babel-plugin-transform-react-display-name': 'npm:babel-plugin-transform-react-display-name@6.8.0',
          'babel-plugin-transform-flow-strip-types': 'npm:babel-plugin-transform-flow-strip-types@6.8.0'
        }
      },
      'npm:babel-plugin-transform-react-jsx-source@6.9.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-plugin-syntax-jsx': 'npm:babel-plugin-syntax-jsx@6.8.0'
        }
      },
      'npm:babel-plugin-transform-react-jsx@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-plugin-syntax-jsx': 'npm:babel-plugin-syntax-jsx@6.8.0',
          'babel-helper-builder-react-jsx': 'npm:babel-helper-builder-react-jsx@6.9.0'
        }
      },
      'npm:babel-plugin-syntax-flow@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-plugin-transform-react-jsx-self@6.11.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-plugin-syntax-jsx': 'npm:babel-plugin-syntax-jsx@6.8.0'
        }
      },
      'npm:babel-plugin-syntax-jsx@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-plugin-transform-react-display-name@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6'
        }
      },
      'npm:babel-plugin-transform-flow-strip-types@6.8.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-plugin-syntax-flow': 'npm:babel-plugin-syntax-flow@6.8.0'
        }
      },
      'npm:babel-helper-builder-react-jsx@6.9.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.11.6',
          'babel-types': 'npm:babel-types@6.11.1',
          'esutils': 'npm:esutils@2.0.2',
          'lodash': 'npm:lodash@4.14.0'
        }
      }
    }
  },
  packages: {
    'src': {
      'defaultExtension': 'js'
    }
  },
  transpiler: 'plugin-babel',
  babelOptions: {
    'presets': [
      'babel-preset-react'
    ]
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
    'babel': 'npm:babel-core@6.11.4',
    'babel-polyfill': 'npm:babel-polyfill@6.9.1',
    'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
    'child_process': 'github:jspm/nodelibs-child_process@0.2.0-alpha',
    'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
    'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha',
    'domain': 'github:jspm/nodelibs-domain@0.2.0-alpha',
    'events': 'github:jspm/nodelibs-events@0.2.0-alpha',
    'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
    'http': 'github:jspm/nodelibs-http@0.2.0-alpha',
    'https': 'github:jspm/nodelibs-https@0.2.0-alpha',
    'material-ui': 'npm:material-ui@0.15.2',
    'module': 'github:jspm/nodelibs-module@0.2.0-alpha',
    'path': 'github:jspm/nodelibs-path@0.2.0-alpha',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'react': 'npm:react@15.2.1',
    'react-dom': 'npm:react-dom@15.2.1',
    'react-router': 'npm:react-router@2.6.0',
    'react-tap-event-plugin': 'npm:react-tap-event-plugin@1.0.0',
    'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
    'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.0-alpha',
    'url': 'github:jspm/nodelibs-url@0.2.0-alpha',
    'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
    'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha',
    'zlib': 'github:jspm/nodelibs-zlib@0.2.0-alpha'
  },
  packages: {
    'npm:react-router@2.6.0': {
      'map': {
        'invariant': 'npm:invariant@2.2.1',
        'loose-envify': 'npm:loose-envify@1.2.0',
        'hoist-non-react-statics': 'npm:hoist-non-react-statics@1.2.0',
        'history': 'npm:history@2.1.2',
        'warning': 'npm:warning@3.0.0'
      }
    },
    'npm:react@15.2.1': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.2.0',
        'object-assign': 'npm:object-assign@4.1.0',
        'fbjs': 'npm:fbjs@0.8.3'
      }
    },
    'npm:babel-core@6.11.4': {
      'map': {
        'babel-code-frame': 'npm:babel-code-frame@6.11.0',
        'babel-messages': 'npm:babel-messages@6.8.0',
        'babel-helpers': 'npm:babel-helpers@6.8.0',
        'babel-generator': 'npm:babel-generator@6.11.4',
        'debug': 'npm:debug@2.2.0',
        'path-exists': 'npm:path-exists@1.0.0',
        'private': 'npm:private@0.1.6',
        'shebang-regex': 'npm:shebang-regex@1.0.0',
        'source-map': 'npm:source-map@0.5.6',
        'babel-template': 'npm:babel-template@6.9.0',
        'babel-register': 'npm:babel-register@6.11.6',
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'convert-source-map': 'npm:convert-source-map@1.3.0',
        'lodash': 'npm:lodash@4.14.0',
        'json5': 'npm:json5@0.4.0',
        'babylon': 'npm:babylon@6.8.4',
        'minimatch': 'npm:minimatch@3.0.2',
        'babel-traverse': 'npm:babel-traverse@6.12.0',
        'slash': 'npm:slash@1.0.0',
        'path-is-absolute': 'npm:path-is-absolute@1.0.0',
        'babel-types': 'npm:babel-types@6.11.1'
      }
    },
    'npm:babel-polyfill@6.9.1': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'core-js': 'npm:core-js@2.4.1',
        'regenerator-runtime': 'npm:regenerator-runtime@0.9.5'
      }
    },
    'npm:babel-code-frame@6.11.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'esutils': 'npm:esutils@2.0.2',
        'js-tokens': 'npm:js-tokens@2.0.0',
        'chalk': 'npm:chalk@1.1.3'
      }
    },
    'npm:invariant@2.2.1': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.2.0'
      }
    },
    'npm:history@2.1.2': {
      'map': {
        'warning': 'npm:warning@2.1.0',
        'invariant': 'npm:invariant@2.2.1',
        'deep-equal': 'npm:deep-equal@1.0.1',
        'query-string': 'npm:query-string@3.0.3'
      }
    },
    'npm:fbjs@0.8.3': {
      'map': {
        'core-js': 'npm:core-js@1.2.7',
        'loose-envify': 'npm:loose-envify@1.2.0',
        'object-assign': 'npm:object-assign@4.1.0',
        'promise': 'npm:promise@7.1.1',
        'isomorphic-fetch': 'npm:isomorphic-fetch@2.2.1',
        'immutable': 'npm:immutable@3.8.1',
        'ua-parser-js': 'npm:ua-parser-js@0.7.10'
      }
    },
    'npm:babel-register@6.11.6': {
      'map': {
        'babel-core': 'npm:babel-core@6.11.4',
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'core-js': 'npm:core-js@2.4.1',
        'lodash': 'npm:lodash@4.14.0',
        'path-exists': 'npm:path-exists@1.0.0',
        'home-or-tmp': 'npm:home-or-tmp@1.0.0',
        'mkdirp': 'npm:mkdirp@0.5.1',
        'source-map-support': 'npm:source-map-support@0.2.10'
      }
    },
    'npm:babel-helpers@6.8.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'babel-template': 'npm:babel-template@6.9.0'
      }
    },
    'npm:babel-runtime@6.11.6': {
      'map': {
        'core-js': 'npm:core-js@2.4.1',
        'regenerator-runtime': 'npm:regenerator-runtime@0.9.5'
      }
    },
    'npm:babel-generator@6.11.4': {
      'map': {
        'babel-messages': 'npm:babel-messages@6.8.0',
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'babel-types': 'npm:babel-types@6.11.1',
        'lodash': 'npm:lodash@4.14.0',
        'source-map': 'npm:source-map@0.5.6',
        'detect-indent': 'npm:detect-indent@3.0.1'
      }
    },
    'npm:babel-template@6.9.0': {
      'map': {
        'babylon': 'npm:babylon@6.8.4',
        'babel-traverse': 'npm:babel-traverse@6.12.0',
        'babel-types': 'npm:babel-types@6.11.1',
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'lodash': 'npm:lodash@4.14.0'
      }
    },
    'npm:babylon@6.8.4': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.11.6'
      }
    },
    'npm:babel-traverse@6.12.0': {
      'map': {
        'babel-code-frame': 'npm:babel-code-frame@6.11.0',
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'babylon': 'npm:babylon@6.8.4',
        'invariant': 'npm:invariant@2.2.1',
        'babel-messages': 'npm:babel-messages@6.8.0',
        'babel-types': 'npm:babel-types@6.11.1',
        'debug': 'npm:debug@2.2.0',
        'lodash': 'npm:lodash@4.14.0',
        'globals': 'npm:globals@8.18.0'
      }
    },
    'npm:babel-messages@6.8.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.11.6'
      }
    },
    'npm:loose-envify@1.2.0': {
      'map': {
        'js-tokens': 'npm:js-tokens@1.0.3'
      }
    },
    'npm:warning@3.0.0': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.2.0'
      }
    },
    'npm:minimatch@3.0.2': {
      'map': {
        'brace-expansion': 'npm:brace-expansion@1.1.6'
      }
    },
    'npm:babel-types@6.11.1': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.11.6',
        'babel-traverse': 'npm:babel-traverse@6.12.0',
        'lodash': 'npm:lodash@4.14.0',
        'esutils': 'npm:esutils@2.0.2',
        'to-fast-properties': 'npm:to-fast-properties@1.0.2'
      }
    },
    'npm:warning@2.1.0': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.2.0'
      }
    },
    'npm:debug@2.2.0': {
      'map': {
        'ms': 'npm:ms@0.7.1'
      }
    },
    'npm:promise@7.1.1': {
      'map': {
        'asap': 'npm:asap@2.0.4'
      }
    },
    'npm:query-string@3.0.3': {
      'map': {
        'strict-uri-encode': 'npm:strict-uri-encode@1.1.0'
      }
    },
    'npm:home-or-tmp@1.0.0': {
      'map': {
        'user-home': 'npm:user-home@1.1.1',
        'os-tmpdir': 'npm:os-tmpdir@1.0.1'
      }
    },
    'npm:chalk@1.1.3': {
      'map': {
        'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
        'has-ansi': 'npm:has-ansi@2.0.0',
        'strip-ansi': 'npm:strip-ansi@3.0.1',
        'ansi-styles': 'npm:ansi-styles@2.2.1',
        'supports-color': 'npm:supports-color@2.0.0'
      }
    },
    'npm:detect-indent@3.0.1': {
      'map': {
        'minimist': 'npm:minimist@1.2.0',
        'get-stdin': 'npm:get-stdin@4.0.1',
        'repeating': 'npm:repeating@1.1.3'
      }
    },
    'npm:mkdirp@0.5.1': {
      'map': {
        'minimist': 'npm:minimist@0.0.8'
      }
    },
    'npm:isomorphic-fetch@2.2.1': {
      'map': {
        'whatwg-fetch': 'npm:whatwg-fetch@1.0.0',
        'node-fetch': 'npm:node-fetch@1.5.3'
      }
    },
    'npm:brace-expansion@1.1.6': {
      'map': {
        'concat-map': 'npm:concat-map@0.0.1',
        'balanced-match': 'npm:balanced-match@0.4.2'
      }
    },
    'npm:source-map-support@0.2.10': {
      'map': {
        'source-map': 'npm:source-map@0.1.32'
      }
    },
    'github:jspm/nodelibs-stream@0.2.0-alpha': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'github:jspm/nodelibs-buffer@0.2.0-alpha': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.7.1'
      }
    },
    'npm:has-ansi@2.0.0': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.0.0'
      }
    },
    'npm:strip-ansi@3.0.1': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.0.0'
      }
    },
    'npm:node-fetch@1.5.3': {
      'map': {
        'is-stream': 'npm:is-stream@1.1.0',
        'encoding': 'npm:encoding@0.1.12'
      }
    },
    'npm:repeating@1.1.3': {
      'map': {
        'is-finite': 'npm:is-finite@1.0.1'
      }
    },
    'npm:source-map@0.1.32': {
      'map': {
        'amdefine': 'npm:amdefine@1.0.0'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'readable-stream': 'npm:readable-stream@2.1.4',
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:buffer@4.7.1': {
      'map': {
        'base64-js': 'npm:base64-js@1.1.2',
        'ieee754': 'npm:ieee754@1.1.6',
        'isarray': 'npm:isarray@1.0.0'
      }
    },
    'npm:readable-stream@2.1.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'isarray': 'npm:isarray@1.0.0',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7',
        'string_decoder': 'npm:string_decoder@0.10.31',
        'buffer-shims': 'npm:buffer-shims@1.0.0',
        'util-deprecate': 'npm:util-deprecate@1.0.2'
      }
    },
    'npm:is-finite@1.0.1': {
      'map': {
        'number-is-nan': 'npm:number-is-nan@1.0.0'
      }
    },
    'github:jspm/nodelibs-http@0.2.0-alpha': {
      'map': {
        'http-browserify': 'npm:stream-http@2.3.1'
      }
    },
    'github:jspm/nodelibs-domain@0.2.0-alpha': {
      'map': {
        'domain-browserify': 'npm:domain-browser@1.1.7'
      }
    },
    'npm:encoding@0.1.12': {
      'map': {
        'iconv-lite': 'npm:iconv-lite@0.4.13'
      }
    },
    'github:jspm/nodelibs-url@0.2.0-alpha': {
      'map': {
        'url-browserify': 'npm:url@0.11.0'
      }
    },
    'github:jspm/nodelibs-zlib@0.2.0-alpha': {
      'map': {
        'zlib-browserify': 'npm:browserify-zlib@0.1.4'
      }
    },
    'npm:stream-http@2.3.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'readable-stream': 'npm:readable-stream@2.1.4',
        'builtin-status-codes': 'npm:builtin-status-codes@2.0.0',
        'to-arraybuffer': 'npm:to-arraybuffer@1.0.1',
        'xtend': 'npm:xtend@4.0.1'
      }
    },
    'npm:browserify-zlib@0.1.4': {
      'map': {
        'readable-stream': 'npm:readable-stream@2.1.4',
        'pako': 'npm:pako@0.2.9'
      }
    },
    'npm:url@0.11.0': {
      'map': {
        'querystring': 'npm:querystring@0.2.0',
        'punycode': 'npm:punycode@1.3.2'
      }
    },
    'github:jspm/nodelibs-string_decoder@0.2.0-alpha': {
      'map': {
        'string_decoder-browserify': 'npm:string_decoder@0.10.31'
      }
    },
    'github:jspm/nodelibs-crypto@0.2.0-alpha': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.0'
      }
    },
    'npm:crypto-browserify@3.11.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'create-hash': 'npm:create-hash@1.1.2',
        'randombytes': 'npm:randombytes@2.0.3',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'pbkdf2': 'npm:pbkdf2@3.0.4',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2',
        'browserify-sign': 'npm:browserify-sign@4.0.0'
      }
    },
    'npm:create-hash@1.1.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'cipher-base': 'npm:cipher-base@1.0.2',
        'ripemd160': 'npm:ripemd160@1.0.1',
        'sha.js': 'npm:sha.js@2.4.5'
      }
    },
    'npm:create-hmac@1.1.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'randombytes': 'npm:randombytes@2.0.3',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'bn.js': 'npm:bn.js@4.11.5'
      }
    },
    'npm:pbkdf2@3.0.4': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.4'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'bn.js': 'npm:bn.js@4.11.5',
        'miller-rabin': 'npm:miller-rabin@4.0.0'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.5',
        'elliptic': 'npm:elliptic@6.3.1'
      }
    },
    'npm:browserify-sign@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'inherits': 'npm:inherits@2.0.1',
        'bn.js': 'npm:bn.js@4.11.5',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'elliptic': 'npm:elliptic@6.3.1'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'browserify-des': 'npm:browserify-des@1.0.0',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'browserify-aes': 'npm:browserify-aes@1.0.6'
      }
    },
    'npm:cipher-base@1.0.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:sha.js@2.4.5': {
      'map': {
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:parse-asn1@5.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'pbkdf2': 'npm:pbkdf2@3.0.4',
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'asn1.js': 'npm:asn1.js@4.8.0'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'bn.js': 'npm:bn.js@4.11.5'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'cipher-base': 'npm:cipher-base@1.0.2',
        'inherits': 'npm:inherits@2.0.1',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:evp_bytestokey@1.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:miller-rabin@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.5',
        'brorand': 'npm:brorand@1.0.5'
      }
    },
    'npm:browserify-aes@1.0.6': {
      'map': {
        'cipher-base': 'npm:cipher-base@1.0.2',
        'create-hash': 'npm:create-hash@1.1.2',
        'inherits': 'npm:inherits@2.0.1',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:elliptic@6.3.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.5',
        'inherits': 'npm:inherits@2.0.1',
        'hash.js': 'npm:hash.js@1.0.3',
        'brorand': 'npm:brorand@1.0.5'
      }
    },
    'npm:asn1.js@4.8.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.5',
        'inherits': 'npm:inherits@2.0.1',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0',
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:hash.js@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:material-ui@0.15.2': {
      'map': {
        'simple-assign': 'npm:simple-assign@0.1.0',
        'keycode': 'npm:keycode@2.1.2',
        'react-event-listener': 'npm:react-event-listener@0.2.1',
        'react-addons-transition-group': 'npm:react-addons-transition-group@15.2.1',
        'recompose': 'npm:recompose@0.20.2',
        'warning': 'npm:warning@3.0.0',
        'inline-style-prefixer': 'npm:inline-style-prefixer@2.0.1',
        'react-addons-create-fragment': 'npm:react-addons-create-fragment@15.2.1',
        'lodash': 'npm:lodash@4.14.1'
      }
    },
    'npm:react-tap-event-plugin@1.0.0': {
      'map': {
        'fbjs': 'npm:fbjs@0.2.1'
      }
    },
    'npm:react-event-listener@0.2.1': {
      'map': {
        'fbjs': 'npm:fbjs@0.8.3'
      }
    },
    'npm:recompose@0.20.2': {
      'map': {
        'fbjs': 'npm:fbjs@0.8.3',
        'symbol-observable': 'npm:symbol-observable@0.2.4',
        'hoist-non-react-statics': 'npm:hoist-non-react-statics@1.2.0',
        'change-emitter': 'npm:change-emitter@0.1.2'
      }
    },
    'npm:inline-style-prefixer@2.0.1': {
      'map': {
        'hyphenate-style-name': 'npm:hyphenate-style-name@1.0.1',
        'bowser': 'npm:bowser@1.4.3'
      }
    },
    'npm:fbjs@0.2.1': {
      'map': {
        'promise': 'npm:promise@7.1.1',
        'whatwg-fetch': 'npm:whatwg-fetch@0.9.0',
        'core-js': 'npm:core-js@1.2.7'
      }
    }
  }
});
