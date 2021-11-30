(function (factory) {
    typeof define === 'function' && define.amd ? define('custom', factory) :
    factory();
})((function () { 'use strict';

    const btnsClose = document.querySelector('.btn-close-js');
    const btnsOpen = document.querySelectorAll('.btn-open-modal-js');
    const modal = document.querySelector('.modal');
    const thanks = modal.querySelector('.thanks');
    const thanksBtn = thanks.querySelector('.js-thanks__btn');
    const modalContainer = modal.querySelector('.modal__container');
    const submitBtns = modal.querySelectorAll('.js-submit__btn');

    const closeModal = className => {
      modal.classList.remove(`modal_opened`);
      setTimeout(() => {
        className === 'thanks' && modal.classList.remove('modal_no-btn-close');
        className === 'office' && modalContainer.classList.remove('modal_bg-white');
        const modalContent = modal.querySelector(`.${className}`);
        btnsClose.removeEventListener('click', () => closeModal(className));
        modal.removeEventListener("click", e => checkPressOverlay$1(e, className));
        document.removeEventListener("keydown", e => checkKeyPress$1(e, className));
        modalContent.classList.remove(`${className}_active`);
      }, 300);
    };

    const openModal = (className, text) => {
      console.log(className);

      if (className === "thanks") {
        modalContainer.classList.add('modal_no-btn-close');
      }

      className === 'office' && modalContainer.classList.add('modal_bg-white');
      modal.classList.add(`modal_opened`);
      const modalContent = modal.querySelector(`.${className}`);

      if (text) {
        modalContent.querySelector('.js-price__title').textContent = `Price request ${text}`;
      }

      modalContent.classList.add(`${className}_active`);
      btnsClose.addEventListener('click', () => closeModal(className));
      modal.addEventListener("click", e => checkPressOverlay$1(e, className));
      document.addEventListener("keydown", e => checkKeyPress$1(e, className));
    };

    const checkKeyPress$1 = (e, className) => {
      if (e.code === "Escape") {
        closeModal(className);
      }
    };

    const checkPressOverlay$1 = (e, className) => {
      if (e.target === modal) {
        closeModal(className);
      }
    };

    thanksBtn.addEventListener('click', () => closeModal('thanks'));
    btnsOpen.forEach(btn => btn.addEventListener('click', () => openModal(btn.dataset.name)));
    submitBtns.forEach(btn => btn.addEventListener('submit', e => {
      e.preventDefault();
      const modalContent = modal.querySelector(`.${btn.dataset.name}`);
      modalContent.classList.remove(`${btn.dataset.name}_active`);
      modalContainer.classList.add('modal_no-btn-close');
      thanks.classList.add('thanks_active');
    }));

    const inputFile$1 = document.querySelector('.response__input-file');
    const spanFile$1 = document.querySelector('.response__file');
    inputFile$1.addEventListener('change', () => {
      spanFile$1.textContent = inputFile$1.value;
    });

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var check = function (it) {
      return it && it.Math == Math && it;
    }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


    var global_1 = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
    function () {
      return this;
    }() || Function('return this')();

    var fails = function (exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };

    // Detect IE8's incomplete defineProperty implementation


    var descriptors = !fails(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        }
      })[1] != 7;
    });

    var call$2 = Function.prototype.call;
    var functionCall = call$2.bind ? call$2.bind(call$2) : function () {
      return call$2.apply(call$2, arguments);
    };

    var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

    var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

    var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({
      1: 2
    }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

    var f$5 = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor$1(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;

    var objectPropertyIsEnumerable = {
    	f: f$5
    };

    var createPropertyDescriptor = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };

    var FunctionPrototype$3 = Function.prototype;
    var bind$2 = FunctionPrototype$3.bind;
    var call$1 = FunctionPrototype$3.call;
    var callBind = bind$2 && bind$2.bind(call$1);
    var functionUncurryThis = bind$2 ? function (fn) {
      return fn && callBind(call$1, fn);
    } : function (fn) {
      return fn && function () {
        return call$1.apply(fn, arguments);
      };
    };

    var toString$1 = functionUncurryThis({}.toString);
    var stringSlice$4 = functionUncurryThis(''.slice);

    var classofRaw = function (it) {
      return stringSlice$4(toString$1(it), 8, -1);
    };

    var Object$5 = global_1.Object;
    var split = functionUncurryThis(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

    var indexedObject = fails(function () {
      // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
      // eslint-disable-next-line no-prototype-builtins -- safe
      return !Object$5('z').propertyIsEnumerable(0);
    }) ? function (it) {
      return classofRaw(it) == 'String' ? split(it, '') : Object$5(it);
    } : Object$5;

    var TypeError$d = global_1.TypeError; // `RequireObjectCoercible` abstract operation
    // https://tc39.es/ecma262/#sec-requireobjectcoercible

    var requireObjectCoercible = function (it) {
      if (it == undefined) throw TypeError$d("Can't call method on " + it);
      return it;
    };

    // toObject with fallback for non-array-like ES3 strings




    var toIndexedObject = function (it) {
      return indexedObject(requireObjectCoercible(it));
    };

    // `IsCallable` abstract operation
    // https://tc39.es/ecma262/#sec-iscallable
    var isCallable = function (argument) {
      return typeof argument == 'function';
    };

    var isObject$5 = function (it) {
      return typeof it == 'object' ? it !== null : isCallable(it);
    };

    var aFunction = function (argument) {
      return isCallable(argument) ? argument : undefined;
    };

    var getBuiltIn = function (namespace, method) {
      return arguments.length < 2 ? aFunction(global_1[namespace]) : global_1[namespace] && global_1[namespace][method];
    };

    var objectIsPrototypeOf = functionUncurryThis({}.isPrototypeOf);

    var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

    var process$1 = global_1.process;
    var Deno = global_1.Deno;
    var versions = process$1 && process$1.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match, version;

    if (v8) {
      match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
      // but their correct versions are not interesting for us

      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    } // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
    // so check `userAgent` even if `.v8` exists, but 0


    if (!version && engineUserAgent) {
      match = engineUserAgent.match(/Edge\/(\d+)/);

      if (!match || match[1] >= 74) {
        match = engineUserAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
      }
    }

    var engineV8Version = version;

    /* eslint-disable es/no-symbol -- required for testing */


     // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing


    var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
      var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
      // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

      return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && engineV8Version && engineV8Version < 41;
    });

    /* eslint-disable es/no-symbol -- required for testing */


    var useSymbolAsUid = nativeSymbol && !Symbol.sham && typeof Symbol.iterator == 'symbol';

    var Object$4 = global_1.Object;
    var isSymbol$2 = useSymbolAsUid ? function (it) {
      return typeof it == 'symbol';
    } : function (it) {
      var $Symbol = getBuiltIn('Symbol');
      return isCallable($Symbol) && objectIsPrototypeOf($Symbol.prototype, Object$4(it));
    };

    var String$4 = global_1.String;

    var tryToString = function (argument) {
      try {
        return String$4(argument);
      } catch (error) {
        return 'Object';
      }
    };

    var TypeError$c = global_1.TypeError; // `Assert: IsCallable(argument) is true`

    var aCallable = function (argument) {
      if (isCallable(argument)) return argument;
      throw TypeError$c(tryToString(argument) + ' is not a function');
    };

    // `GetMethod` abstract operation
    // https://tc39.es/ecma262/#sec-getmethod


    var getMethod = function (V, P) {
      var func = V[P];
      return func == null ? undefined : aCallable(func);
    };

    var TypeError$b = global_1.TypeError; // `OrdinaryToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-ordinarytoprimitive

    var ordinaryToPrimitive = function (input, pref) {
      var fn, val;
      if (pref === 'string' && isCallable(fn = input.toString) && !isObject$5(val = functionCall(fn, input))) return val;
      if (isCallable(fn = input.valueOf) && !isObject$5(val = functionCall(fn, input))) return val;
      if (pref !== 'string' && isCallable(fn = input.toString) && !isObject$5(val = functionCall(fn, input))) return val;
      throw TypeError$b("Can't convert object to primitive value");
    };

    // eslint-disable-next-line es/no-object-defineproperty -- safe


    var defineProperty$3 = Object.defineProperty;

    var setGlobal = function (key, value) {
      try {
        defineProperty$3(global_1, key, {
          value: value,
          configurable: true,
          writable: true
        });
      } catch (error) {
        global_1[key] = value;
      }

      return value;
    };

    var SHARED = '__core-js_shared__';
    var store$1 = global_1[SHARED] || setGlobal(SHARED, {});
    var sharedStore = store$1;

    var shared = createCommonjsModule(function (module) {
    (module.exports = function (key, value) {
      return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: '3.19.1',
      mode: 'global',
      copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
    });
    });

    var Object$3 = global_1.Object; // `ToObject` abstract operation
    // https://tc39.es/ecma262/#sec-toobject

    var toObject = function (argument) {
      return Object$3(requireObjectCoercible(argument));
    };

    var hasOwnProperty$1 = functionUncurryThis({}.hasOwnProperty); // `HasOwnProperty` abstract operation
    // https://tc39.es/ecma262/#sec-hasownproperty

    var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty$1(toObject(it), key);
    };

    var id$1 = 0;
    var postfix = Math.random();
    var toString = functionUncurryThis(1.0.toString);

    var uid = function (key) {
      return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id$1 + postfix, 36);
    };

    var WellKnownSymbolsStore = shared('wks');
    var Symbol$2 = global_1.Symbol;
    var symbolFor = Symbol$2 && Symbol$2['for'];
    var createWellKnownSymbol = useSymbolAsUid ? Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid;

    var wellKnownSymbol = function (name) {
      if (!hasOwnProperty_1(WellKnownSymbolsStore, name) || !(nativeSymbol || typeof WellKnownSymbolsStore[name] == 'string')) {
        var description = 'Symbol.' + name;

        if (nativeSymbol && hasOwnProperty_1(Symbol$2, name)) {
          WellKnownSymbolsStore[name] = Symbol$2[name];
        } else if (useSymbolAsUid && symbolFor) {
          WellKnownSymbolsStore[name] = symbolFor(description);
        } else {
          WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
        }
      }

      return WellKnownSymbolsStore[name];
    };

    var TypeError$a = global_1.TypeError;
    var TO_PRIMITIVE = wellKnownSymbol('toPrimitive'); // `ToPrimitive` abstract operation
    // https://tc39.es/ecma262/#sec-toprimitive

    var toPrimitive = function (input, pref) {
      if (!isObject$5(input) || isSymbol$2(input)) return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;

      if (exoticToPrim) {
        if (pref === undefined) pref = 'default';
        result = functionCall(exoticToPrim, input, pref);
        if (!isObject$5(result) || isSymbol$2(result)) return result;
        throw TypeError$a("Can't convert object to primitive value");
      }

      if (pref === undefined) pref = 'number';
      return ordinaryToPrimitive(input, pref);
    };

    // `ToPropertyKey` abstract operation
    // https://tc39.es/ecma262/#sec-topropertykey


    var toPropertyKey = function (argument) {
      var key = toPrimitive(argument, 'string');
      return isSymbol$2(key) ? key : key + '';
    };

    var document$1 = global_1.document; // typeof document.createElement is 'object' in old IE

    var EXISTS$1 = isObject$5(document$1) && isObject$5(document$1.createElement);

    var documentCreateElement = function (it) {
      return EXISTS$1 ? document$1.createElement(it) : {};
    };

    // Thank's IE8 for his funny defineProperty


    var ie8DomDefine = !descriptors && !fails(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
      return Object.defineProperty(documentCreateElement('div'), 'a', {
        get: function () {
          return 7;
        }
      }).a != 7;
    });

    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe


    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

    var f$4 = descriptors ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey(P);
      if (ie8DomDefine) try {
        return $getOwnPropertyDescriptor(O, P);
      } catch (error) {
        /* empty */
      }
      if (hasOwnProperty_1(O, P)) return createPropertyDescriptor(!functionCall(objectPropertyIsEnumerable.f, O, P), O[P]);
    };

    var objectGetOwnPropertyDescriptor = {
    	f: f$4
    };

    var String$3 = global_1.String;
    var TypeError$9 = global_1.TypeError; // `Assert: Type(argument) is Object`

    var anObject = function (argument) {
      if (isObject$5(argument)) return argument;
      throw TypeError$9(String$3(argument) + ' is not an object');
    };

    var TypeError$8 = global_1.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

    var $defineProperty = Object.defineProperty; // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty

    var f$3 = descriptors ? $defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (ie8DomDefine) try {
        return $defineProperty(O, P, Attributes);
      } catch (error) {
        /* empty */
      }
      if ('get' in Attributes || 'set' in Attributes) throw TypeError$8('Accessors not supported');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };

    var objectDefineProperty = {
    	f: f$3
    };

    var createNonEnumerableProperty = descriptors ? function (object, key, value) {
      return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };

    var functionToString$1 = functionUncurryThis(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

    if (!isCallable(sharedStore.inspectSource)) {
      sharedStore.inspectSource = function (it) {
        return functionToString$1(it);
      };
    }

    var inspectSource = sharedStore.inspectSource;

    var WeakMap$2 = global_1.WeakMap;
    var nativeWeakMap = isCallable(WeakMap$2) && /native code/.test(inspectSource(WeakMap$2));

    var keys = shared('keys');

    var sharedKey = function (key) {
      return keys[key] || (keys[key] = uid(key));
    };

    var hiddenKeys$1 = {};

    var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
    var TypeError$7 = global_1.TypeError;
    var WeakMap$1 = global_1.WeakMap;
    var set, get, has;

    var enforce = function (it) {
      return has(it) ? get(it) : set(it, {});
    };

    var getterFor = function (TYPE) {
      return function (it) {
        var state;

        if (!isObject$5(it) || (state = get(it)).type !== TYPE) {
          throw TypeError$7('Incompatible receiver, ' + TYPE + ' required');
        }

        return state;
      };
    };

    if (nativeWeakMap || sharedStore.state) {
      var store = sharedStore.state || (sharedStore.state = new WeakMap$1());
      var wmget = functionUncurryThis(store.get);
      var wmhas = functionUncurryThis(store.has);
      var wmset = functionUncurryThis(store.set);

      set = function (it, metadata) {
        if (wmhas(store, it)) throw new TypeError$7(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        wmset(store, it, metadata);
        return metadata;
      };

      get = function (it) {
        return wmget(store, it) || {};
      };

      has = function (it) {
        return wmhas(store, it);
      };
    } else {
      var STATE = sharedKey('state');
      hiddenKeys$1[STATE] = true;

      set = function (it, metadata) {
        if (hasOwnProperty_1(it, STATE)) throw new TypeError$7(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };

      get = function (it) {
        return hasOwnProperty_1(it, STATE) ? it[STATE] : {};
      };

      has = function (it) {
        return hasOwnProperty_1(it, STATE);
      };
    }

    var internalState = {
      set: set,
      get: get,
      has: has,
      enforce: enforce,
      getterFor: getterFor
    };

    var FunctionPrototype$2 = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

    var getDescriptor = descriptors && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwnProperty_1(FunctionPrototype$2, 'name'); // additional protection from minified / mangled / dropped function names

    var PROPER = EXISTS && function something() {
      /* empty */
    }.name === 'something';

    var CONFIGURABLE = EXISTS && (!descriptors || descriptors && getDescriptor(FunctionPrototype$2, 'name').configurable);
    var functionName = {
      EXISTS: EXISTS,
      PROPER: PROPER,
      CONFIGURABLE: CONFIGURABLE
    };

    var redefine = createCommonjsModule(function (module) {
    var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;

    var getInternalState = internalState.get;
    var enforceInternalState = internalState.enforce;
    var TEMPLATE = String(String).split('String');
    (module.exports = function (O, key, value, options) {
      var unsafe = options ? !!options.unsafe : false;
      var simple = options ? !!options.enumerable : false;
      var noTargetGet = options ? !!options.noTargetGet : false;
      var name = options && options.name !== undefined ? options.name : key;
      var state;

      if (isCallable(value)) {
        if (String(name).slice(0, 7) === 'Symbol(') {
          name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
        }

        if (!hasOwnProperty_1(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
          createNonEnumerableProperty(value, 'name', name);
        }

        state = enforceInternalState(value);

        if (!state.source) {
          state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
        }
      }

      if (O === global_1) {
        if (simple) O[key] = value;else setGlobal(key, value);
        return;
      } else if (!unsafe) {
        delete O[key];
      } else if (!noTargetGet && O[key]) {
        simple = true;
      }

      if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, 'toString', function toString() {
      return isCallable(this) && getInternalState(this).source || inspectSource(this);
    });
    });

    var ceil = Math.ceil;
    var floor$1 = Math.floor; // `ToIntegerOrInfinity` abstract operation
    // https://tc39.es/ecma262/#sec-tointegerorinfinity

    var toIntegerOrInfinity = function (argument) {
      var number = +argument; // eslint-disable-next-line no-self-compare -- safe

      return number !== number || number === 0 ? 0 : (number > 0 ? floor$1 : ceil)(number);
    };

    var max$1 = Math.max;
    var min$2 = Math.min; // Helper for a popular repeating case of the spec:
    // Let integer be ? ToInteger(index).
    // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

    var toAbsoluteIndex = function (index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max$1(integer + length, 0) : min$2(integer, length);
    };

    var min$1 = Math.min; // `ToLength` abstract operation
    // https://tc39.es/ecma262/#sec-tolength

    var toLength = function (argument) {
      return argument > 0 ? min$1(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
    };

    // `LengthOfArrayLike` abstract operation
    // https://tc39.es/ecma262/#sec-lengthofarraylike


    var lengthOfArrayLike = function (obj) {
      return toLength(obj.length);
    };

    // `Array.prototype.{ indexOf, includes }` methods implementation


    var createMethod$4 = function (IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value; // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check

        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

          if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
        } else for (; length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
      };
    };

    var arrayIncludes = {
      // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes
      includes: createMethod$4(true),
      // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod$4(false)
    };

    var indexOf$1 = arrayIncludes.indexOf;



    var push$2 = functionUncurryThis([].push);

    var objectKeysInternal = function (object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;

      for (key in O) !hasOwnProperty_1(hiddenKeys$1, key) && hasOwnProperty_1(O, key) && push$2(result, key); // Don't enum bug & hidden keys


      while (names.length > i) if (hasOwnProperty_1(O, key = names[i++])) {
        ~indexOf$1(result, key) || push$2(result, key);
      }

      return result;
    };

    // IE8- don't enum bug keys
    var enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

    var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    // eslint-disable-next-line es/no-object-getownpropertynames -- safe

    var f$2 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return objectKeysInternal(O, hiddenKeys);
    };

    var objectGetOwnPropertyNames = {
    	f: f$2
    };

    // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
    var f$1 = Object.getOwnPropertySymbols;

    var objectGetOwnPropertySymbols = {
    	f: f$1
    };

    var concat$2 = functionUncurryThis([].concat); // all object keys, includes non-enumerable and symbols

    var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
      var keys = objectGetOwnPropertyNames.f(anObject(it));
      var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
      return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
    };

    var copyConstructorProperties = function (target, source) {
      var keys = ownKeys(source);
      var defineProperty = objectDefineProperty.f;
      var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!hasOwnProperty_1(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    };

    var replacement = /#|\.prototype\./;

    var isForced = function (feature, detection) {
      var value = data[normalize(feature)];
      return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
    };

    var normalize = isForced.normalize = function (string) {
      return String(string).replace(replacement, '.').toLowerCase();
    };

    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = 'N';
    var POLYFILL = isForced.POLYFILL = 'P';
    var isForced_1 = isForced;

    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;










    /*
      options.target      - name of the target object
      options.global      - target is the global object
      options.stat        - export as static methods of target
      options.proto       - export as prototype methods of target
      options.real        - real prototype method for the `pure` version
      options.forced      - export even if the native feature is available
      options.bind        - bind methods to the target, required for the `pure` version
      options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
      options.unsafe      - use the simple assignment of property instead of delete + defineProperty
      options.sham        - add a flag to not completely full polyfills
      options.enumerable  - export as enumerable property
      options.noTargetGet - prevent calling a getter on target
      options.name        - the .name of the function if it does not match the key
    */


    var _export = function (options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED, target, key, targetProperty, sourceProperty, descriptor;

      if (GLOBAL) {
        target = global_1;
      } else if (STATIC) {
        target = global_1[TARGET] || setGlobal(TARGET, {});
      } else {
        target = (global_1[TARGET] || {}).prototype;
      }

      if (target) for (key in source) {
        sourceProperty = source[key];

        if (options.noTargetGet) {
          descriptor = getOwnPropertyDescriptor(target, key);
          targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];

        FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

        if (!FORCED && targetProperty !== undefined) {
          if (typeof sourceProperty == typeof targetProperty) continue;
          copyConstructorProperties(sourceProperty, targetProperty);
        } // add a flag to not completely full polyfills


        if (options.sham || targetProperty && targetProperty.sham) {
          createNonEnumerableProperty(sourceProperty, 'sham', true);
        } // extend global


        redefine(target, key, sourceProperty, options);
      }
    };

    var bind$1 = functionUncurryThis(functionUncurryThis.bind); // optional / simple context binding

    var functionBindContext = function (fn, that) {
      aCallable(fn);
      return that === undefined ? fn : bind$1 ? bind$1(fn, that) : function
        /* ...args */
      () {
        return fn.apply(that, arguments);
      };
    };

    // `IsArray` abstract operation
    // https://tc39.es/ecma262/#sec-isarray
    // eslint-disable-next-line es/no-array-isarray -- safe


    var isArray = Array.isArray || function isArray(argument) {
      return classofRaw(argument) == 'Array';
    };

    var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
    var test = {};
    test[TO_STRING_TAG$3] = 'z';
    var toStringTagSupport = String(test) === '[object z]';

    var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
    var Object$2 = global_1.Object; // ES3 wrong here

    var CORRECT_ARGUMENTS = classofRaw(function () {
      return arguments;
    }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

    var tryGet = function (it, key) {
      try {
        return it[key];
      } catch (error) {
        /* empty */
      }
    }; // getting tag from ES6+ `Object.prototype.toString`


    var classof = toStringTagSupport ? classofRaw : function (it) {
      var O, tag, result;
      return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
      : typeof (tag = tryGet(O = Object$2(it), TO_STRING_TAG$2)) == 'string' ? tag // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
      : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
    };

    var noop = function () {
      /* empty */
    };

    var empty = [];
    var construct = getBuiltIn('Reflect', 'construct');
    var constructorRegExp = /^\s*(?:class|function)\b/;
    var exec$1 = functionUncurryThis(constructorRegExp.exec);
    var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

    var isConstructorModern = function (argument) {
      if (!isCallable(argument)) return false;

      try {
        construct(noop, empty, argument);
        return true;
      } catch (error) {
        return false;
      }
    };

    var isConstructorLegacy = function (argument) {
      if (!isCallable(argument)) return false;

      switch (classof(argument)) {
        case 'AsyncFunction':
        case 'GeneratorFunction':
        case 'AsyncGeneratorFunction':
          return false;
        // we can't check .prototype since constructors produced by .bind haven't it
      }

      return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource(argument));
    }; // `IsConstructor` abstract operation
    // https://tc39.es/ecma262/#sec-isconstructor


    var isConstructor = !construct || fails(function () {
      var called;
      return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
        called = true;
      }) || called;
    }) ? isConstructorLegacy : isConstructorModern;

    var SPECIES$2 = wellKnownSymbol('species');
    var Array$1 = global_1.Array; // a part of `ArraySpeciesCreate` abstract operation
    // https://tc39.es/ecma262/#sec-arrayspeciescreate

    var arraySpeciesConstructor = function (originalArray) {
      var C;

      if (isArray(originalArray)) {
        C = originalArray.constructor; // cross-realm fallback

        if (isConstructor(C) && (C === Array$1 || isArray(C.prototype))) C = undefined;else if (isObject$5(C)) {
          C = C[SPECIES$2];
          if (C === null) C = undefined;
        }
      }

      return C === undefined ? Array$1 : C;
    };

    // `ArraySpeciesCreate` abstract operation
    // https://tc39.es/ecma262/#sec-arrayspeciescreate


    var arraySpeciesCreate = function (originalArray, length) {
      return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
    };

    var push$1 = functionUncurryThis([].push); // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation

    var createMethod$3 = function (TYPE) {
      var IS_MAP = TYPE == 1;
      var IS_FILTER = TYPE == 2;
      var IS_SOME = TYPE == 3;
      var IS_EVERY = TYPE == 4;
      var IS_FIND_INDEX = TYPE == 6;
      var IS_FILTER_REJECT = TYPE == 7;
      var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
      return function ($this, callbackfn, that, specificCreate) {
        var O = toObject($this);
        var self = indexedObject(O);
        var boundFunction = functionBindContext(callbackfn, that);
        var length = lengthOfArrayLike(self);
        var index = 0;
        var create = specificCreate || arraySpeciesCreate;
        var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
        var value, result;

        for (; length > index; index++) if (NO_HOLES || index in self) {
          value = self[index];
          result = boundFunction(value, index, O);

          if (TYPE) {
            if (IS_MAP) target[index] = result; // map
            else if (result) switch (TYPE) {
              case 3:
                return true;
              // some

              case 5:
                return value;
              // find

              case 6:
                return index;
              // findIndex

              case 2:
                push$1(target, value);
              // filter
            } else switch (TYPE) {
              case 4:
                return false;
              // every

              case 7:
                push$1(target, value);
              // filterReject
            }
          }
        }

        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
      };
    };

    var arrayIteration = {
      // `Array.prototype.forEach` method
      // https://tc39.es/ecma262/#sec-array.prototype.foreach
      forEach: createMethod$3(0),
      // `Array.prototype.map` method
      // https://tc39.es/ecma262/#sec-array.prototype.map
      map: createMethod$3(1),
      // `Array.prototype.filter` method
      // https://tc39.es/ecma262/#sec-array.prototype.filter
      filter: createMethod$3(2),
      // `Array.prototype.some` method
      // https://tc39.es/ecma262/#sec-array.prototype.some
      some: createMethod$3(3),
      // `Array.prototype.every` method
      // https://tc39.es/ecma262/#sec-array.prototype.every
      every: createMethod$3(4),
      // `Array.prototype.find` method
      // https://tc39.es/ecma262/#sec-array.prototype.find
      find: createMethod$3(5),
      // `Array.prototype.findIndex` method
      // https://tc39.es/ecma262/#sec-array.prototype.findIndex
      findIndex: createMethod$3(6),
      // `Array.prototype.filterReject` method
      // https://github.com/tc39/proposal-array-filtering
      filterReject: createMethod$3(7)
    };

    var arrayMethodIsStrict = function (METHOD_NAME, argument) {
      var method = [][METHOD_NAME];
      return !!method && fails(function () {
        // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
        method.call(null, argument || function () {
          throw 1;
        }, 1);
      });
    };

    var $forEach = arrayIteration.forEach;



    var STRICT_METHOD$1 = arrayMethodIsStrict('forEach'); // `Array.prototype.forEach` method implementation
    // https://tc39.es/ecma262/#sec-array.prototype.foreach

    var arrayForEach = !STRICT_METHOD$1 ? function forEach(callbackfn
    /* , thisArg */
    ) {
      return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined); // eslint-disable-next-line es/no-array-prototype-foreach -- safe
    } : [].forEach;

    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    // eslint-disable-next-line es/no-array-prototype-foreach -- safe


    _export({
      target: 'Array',
      proto: true,
      forced: [].forEach != arrayForEach
    }, {
      forEach: arrayForEach
    });

    // iterable DOM collections
    // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
    var domIterables = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    };

    // in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`


    var classList = documentCreateElement('span').classList;
    var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;
    var domTokenListPrototype = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;

    var handlePrototype$1 = function (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
        createNonEnumerableProperty(CollectionPrototype, 'forEach', arrayForEach);
      } catch (error) {
        CollectionPrototype.forEach = arrayForEach;
      }
    };

    for (var COLLECTION_NAME$1 in domIterables) {
      if (domIterables[COLLECTION_NAME$1]) {
        handlePrototype$1(global_1[COLLECTION_NAME$1] && global_1[COLLECTION_NAME$1].prototype);
      }
    }

    handlePrototype$1(domTokenListPrototype);

    var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
    var canUseDom = canUseDOM;

    var SPECIES$1 = wellKnownSymbol('species');

    var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
      // We can't use this feature detection in V8 since it causes
      // deoptimization and serious performance degradation
      // https://github.com/zloirock/core-js/issues/677
      return engineV8Version >= 51 || !fails(function () {
        var array = [];
        var constructor = array.constructor = {};

        constructor[SPECIES$1] = function () {
          return {
            foo: 1
          };
        };

        return array[METHOD_NAME](Boolean).foo !== 1;
      });
    };

    var $filter = arrayIteration.filter;



    var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter'); // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    // with adding support of @@species

    _export({
      target: 'Array',
      proto: true,
      forced: !HAS_SPECIES_SUPPORT
    }, {
      filter: function filter(callbackfn
      /* , thisArg */
      ) {
        return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });

    // `Object.keys` method
    // https://tc39.es/ecma262/#sec-object.keys
    // eslint-disable-next-line es/no-object-keys -- safe


    var objectKeys = Object.keys || function keys(O) {
      return objectKeysInternal(O, enumBugKeys);
    };

    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    // eslint-disable-next-line es/no-object-defineproperties -- safe


    var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var props = toIndexedObject(Properties);
      var keys = objectKeys(Properties);
      var length = keys.length;
      var index = 0;
      var key;

      while (length > index) objectDefineProperty.f(O, key = keys[index++], props[key]);

      return O;
    };

    var html$1 = getBuiltIn('document', 'documentElement');

    /* global ActiveXObject -- old IE, WSH */














    var GT = '>';
    var LT = '<';
    var PROTOTYPE = 'prototype';
    var SCRIPT = 'script';
    var IE_PROTO$1 = sharedKey('IE_PROTO');

    var EmptyConstructor = function () {
      /* empty */
    };

    var scriptTag = function (content) {
      return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
    }; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


    var NullProtoObjectViaActiveX = function (activeXDocument) {
      activeXDocument.write(scriptTag(''));
      activeXDocument.close();
      var temp = activeXDocument.parentWindow.Object;
      activeXDocument = null; // avoid memory leak

      return temp;
    }; // Create object with fake `null` prototype: use iframe Object with cleared prototype


    var NullProtoObjectViaIFrame = function () {
      // Thrash, waste and sodomy: IE GC bug
      var iframe = documentCreateElement('iframe');
      var JS = 'java' + SCRIPT + ':';
      var iframeDocument;
      iframe.style.display = 'none';
      html$1.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag('document.F=Object'));
      iframeDocument.close();
      return iframeDocument.F;
    }; // Check for document.domain and active x support
    // No need to use active x approach when document.domain is not set
    // see https://github.com/es-shims/es5-shim/issues/150
    // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
    // avoid IE GC bug


    var activeXDocument;

    var NullProtoObject = function () {
      try {
        activeXDocument = new ActiveXObject('htmlfile');
      } catch (error) {
        /* ignore */
      }

      NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH

      var length = enumBugKeys.length;

      while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];

      return NullProtoObject();
    };

    hiddenKeys$1[IE_PROTO$1] = true; // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create

    var objectCreate = Object.create || function create(O, Properties) {
      var result;

      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

        result[IE_PROTO$1] = O;
      } else result = NullProtoObject();

      return Properties === undefined ? result : objectDefineProperties(result, Properties);
    };

    var UNSCOPABLES = wellKnownSymbol('unscopables');
    var ArrayPrototype$1 = Array.prototype; // Array.prototype[@@unscopables]
    // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

    if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
      objectDefineProperty.f(ArrayPrototype$1, UNSCOPABLES, {
        configurable: true,
        value: objectCreate(null)
      });
    } // add a key to Array.prototype[@@unscopables]


    var addToUnscopables = function (key) {
      ArrayPrototype$1[UNSCOPABLES][key] = true;
    };

    var iterators = {};

    var correctPrototypeGetter = !fails(function () {
      function F() {
        /* empty */
      }

      F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing

      return Object.getPrototypeOf(new F()) !== F.prototype;
    });

    var IE_PROTO = sharedKey('IE_PROTO');
    var Object$1 = global_1.Object;
    var ObjectPrototype = Object$1.prototype; // `Object.getPrototypeOf` method
    // https://tc39.es/ecma262/#sec-object.getprototypeof

    var objectGetPrototypeOf = correctPrototypeGetter ? Object$1.getPrototypeOf : function (O) {
      var object = toObject(O);
      if (hasOwnProperty_1(object, IE_PROTO)) return object[IE_PROTO];
      var constructor = object.constructor;

      if (isCallable(constructor) && object instanceof constructor) {
        return constructor.prototype;
      }

      return object instanceof Object$1 ? ObjectPrototype : null;
    };

    var ITERATOR$6 = wellKnownSymbol('iterator');
    var BUGGY_SAFARI_ITERATORS$1 = false; // `%IteratorPrototype%` object
    // https://tc39.es/ecma262/#sec-%iteratorprototype%-object

    var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;
    /* eslint-disable es/no-array-prototype-keys -- safe */

    if ([].keys) {
      arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

      if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
        PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
      }
    }

    var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails(function () {
      var test = {}; // FF44- legacy iterators case

      return IteratorPrototype$2[ITERATOR$6].call(test) !== test;
    });
    if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {}; // `%IteratorPrototype%[@@iterator]()` method
    // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator

    if (!isCallable(IteratorPrototype$2[ITERATOR$6])) {
      redefine(IteratorPrototype$2, ITERATOR$6, function () {
        return this;
      });
    }

    var iteratorsCore = {
      IteratorPrototype: IteratorPrototype$2,
      BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
    };

    var defineProperty$2 = objectDefineProperty.f;





    var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');

    var setToStringTag = function (it, TAG, STATIC) {
      if (it && !hasOwnProperty_1(it = STATIC ? it : it.prototype, TO_STRING_TAG$1)) {
        defineProperty$2(it, TO_STRING_TAG$1, {
          configurable: true,
          value: TAG
        });
      }
    };

    var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;









    var returnThis$1 = function () {
      return this;
    };

    var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
      var TO_STRING_TAG = NAME + ' Iterator';
      IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, {
        next: createPropertyDescriptor(1, next)
      });
      setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
      iterators[TO_STRING_TAG] = returnThis$1;
      return IteratorConstructor;
    };

    var String$2 = global_1.String;
    var TypeError$6 = global_1.TypeError;

    var aPossiblePrototype = function (argument) {
      if (typeof argument == 'object' || isCallable(argument)) return argument;
      throw TypeError$6("Can't set " + String$2(argument) + ' as a prototype');
    };

    /* eslint-disable no-proto -- safe */




     // `Object.setPrototypeOf` method
    // https://tc39.es/ecma262/#sec-object.setprototypeof
    // Works with __proto__ only. Old v8 can't work with null proto objects.
    // eslint-disable-next-line es/no-object-setprototypeof -- safe


    var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
      var CORRECT_SETTER = false;
      var test = {};
      var setter;

      try {
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        setter = functionUncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
        setter(test, []);
        CORRECT_SETTER = test instanceof Array;
      } catch (error) {
        /* empty */
      }

      return function setPrototypeOf(O, proto) {
        anObject(O);
        aPossiblePrototype(proto);
        if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
        return O;
      };
    }() : undefined);

    var PROPER_FUNCTION_NAME = functionName.PROPER;
    var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
    var IteratorPrototype = iteratorsCore.IteratorPrototype;
    var BUGGY_SAFARI_ITERATORS = iteratorsCore.BUGGY_SAFARI_ITERATORS;
    var ITERATOR$5 = wellKnownSymbol('iterator');
    var KEYS = 'keys';
    var VALUES = 'values';
    var ENTRIES = 'entries';

    var returnThis = function () {
      return this;
    };

    var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
      createIteratorConstructor(IteratorConstructor, NAME, next);

      var getIterationMethod = function (KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

        switch (KIND) {
          case KEYS:
            return function keys() {
              return new IteratorConstructor(this, KIND);
            };

          case VALUES:
            return function values() {
              return new IteratorConstructor(this, KIND);
            };

          case ENTRIES:
            return function entries() {
              return new IteratorConstructor(this, KIND);
            };
        }

        return function () {
          return new IteratorConstructor(this);
        };
      };

      var TO_STRING_TAG = NAME + ' Iterator';
      var INCORRECT_VALUES_NAME = false;
      var IterablePrototype = Iterable.prototype;
      var nativeIterator = IterablePrototype[ITERATOR$5] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
      var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
      var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
      var CurrentIteratorPrototype, methods, KEY; // fix native

      if (anyNativeIterator) {
        CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));

        if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
          if (objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
            if (objectSetPrototypeOf) {
              objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
            } else if (!isCallable(CurrentIteratorPrototype[ITERATOR$5])) {
              redefine(CurrentIteratorPrototype, ITERATOR$5, returnThis);
            }
          } // Set @@toStringTag to native iterators


          setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
        }
      } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF


      if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        if (CONFIGURABLE_FUNCTION_NAME) {
          createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
        } else {
          INCORRECT_VALUES_NAME = true;

          defaultIterator = function values() {
            return functionCall(nativeIterator, this);
          };
        }
      } // export additional methods


      if (DEFAULT) {
        methods = {
          values: getIterationMethod(VALUES),
          keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
          entries: getIterationMethod(ENTRIES)
        };
        if (FORCED) for (KEY in methods) {
          if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
            redefine(IterablePrototype, KEY, methods[KEY]);
          }
        } else _export({
          target: NAME,
          proto: true,
          forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
        }, methods);
      } // define iterator


      if (IterablePrototype[ITERATOR$5] !== defaultIterator) {
        redefine(IterablePrototype, ITERATOR$5, defaultIterator, {
          name: DEFAULT
        });
      }

      iterators[NAME] = defaultIterator;
      return methods;
    };

    var ARRAY_ITERATOR = 'Array Iterator';
    var setInternalState$2 = internalState.set;
    var getInternalState$2 = internalState.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
    // https://tc39.es/ecma262/#sec-array.prototype.entries
    // `Array.prototype.keys` method
    // https://tc39.es/ecma262/#sec-array.prototype.keys
    // `Array.prototype.values` method
    // https://tc39.es/ecma262/#sec-array.prototype.values
    // `Array.prototype[@@iterator]` method
    // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
    // `CreateArrayIterator` internal method
    // https://tc39.es/ecma262/#sec-createarrayiterator

    var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
      setInternalState$2(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated),
        // target
        index: 0,
        // next index
        kind: kind // kind

      }); // `%ArrayIteratorPrototype%.next` method
      // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
    }, function () {
      var state = getInternalState$2(this);
      var target = state.target;
      var kind = state.kind;
      var index = state.index++;

      if (!target || index >= target.length) {
        state.target = undefined;
        return {
          value: undefined,
          done: true
        };
      }

      if (kind == 'keys') return {
        value: index,
        done: false
      };
      if (kind == 'values') return {
        value: target[index],
        done: false
      };
      return {
        value: [index, target[index]],
        done: false
      };
    }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
    // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
    // https://tc39.es/ecma262/#sec-createmappedargumentsobject

    iterators.Arguments = iterators.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

    addToUnscopables('keys');
    addToUnscopables('values');
    addToUnscopables('entries');

    // eslint-disable-next-line es/no-object-assign -- safe


    var $assign = Object.assign; // eslint-disable-next-line es/no-object-defineproperty -- required for testing

    var defineProperty$1 = Object.defineProperty;
    var concat$1 = functionUncurryThis([].concat); // `Object.assign` method
    // https://tc39.es/ecma262/#sec-object.assign

    var objectAssign = !$assign || fails(function () {
      // should have correct order of operations (Edge bug)
      if (descriptors && $assign({
        b: 1
      }, $assign(defineProperty$1({}, 'a', {
        enumerable: true,
        get: function () {
          defineProperty$1(this, 'b', {
            value: 3,
            enumerable: false
          });
        }
      }), {
        b: 2
      })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

      var A = {};
      var B = {}; // eslint-disable-next-line es/no-symbol -- safe

      var symbol = Symbol();
      var alphabet = 'abcdefghijklmnopqrst';
      A[symbol] = 7;
      alphabet.split('').forEach(function (chr) {
        B[chr] = chr;
      });
      return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
    }) ? function assign(target, source) {
      // eslint-disable-line no-unused-vars -- required for `.length`
      var T = toObject(target);
      var argumentsLength = arguments.length;
      var index = 1;
      var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
      var propertyIsEnumerable = objectPropertyIsEnumerable.f;

      while (argumentsLength > index) {
        var S = indexedObject(arguments[index++]);
        var keys = getOwnPropertySymbols ? concat$1(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
        var length = keys.length;
        var j = 0;
        var key;

        while (length > j) {
          key = keys[j++];
          if (!descriptors || functionCall(propertyIsEnumerable, S, key)) T[key] = S[key];
        }
      }

      return T;
    } : $assign;

    // `Object.assign` method
    // https://tc39.es/ecma262/#sec-object.assign
    // eslint-disable-next-line es/no-object-assign -- required for testing


    _export({
      target: 'Object',
      stat: true,
      forced: Object.assign !== objectAssign
    }, {
      assign: objectAssign
    });

    // `Object.prototype.toString` method implementation
    // https://tc39.es/ecma262/#sec-object.prototype.tostring


    var objectToString$3 = toStringTagSupport ? {}.toString : function toString() {
      return '[object ' + classof(this) + ']';
    };

    // `Object.prototype.toString` method
    // https://tc39.es/ecma262/#sec-object.prototype.tostring


    if (!toStringTagSupport) {
      redefine(Object.prototype, 'toString', objectToString$3, {
        unsafe: true
      });
    }

    var String$1 = global_1.String;

    var toString_1 = function (argument) {
      if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
      return String$1(argument);
    };

    // a string of all valid unicode whitespaces
    var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' + '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

    var replace$2 = functionUncurryThis(''.replace);
    var whitespace = '[' + whitespaces + ']';
    var ltrim = RegExp('^' + whitespace + whitespace + '*');
    var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

    var createMethod$2 = function (TYPE) {
      return function ($this) {
        var string = toString_1(requireObjectCoercible($this));
        if (TYPE & 1) string = replace$2(string, ltrim, '');
        if (TYPE & 2) string = replace$2(string, rtrim, '');
        return string;
      };
    };

    var stringTrim = {
      // `String.prototype.{ trimLeft, trimStart }` methods
      // https://tc39.es/ecma262/#sec-string.prototype.trimstart
      start: createMethod$2(1),
      // `String.prototype.{ trimRight, trimEnd }` methods
      // https://tc39.es/ecma262/#sec-string.prototype.trimend
      end: createMethod$2(2),
      // `String.prototype.trim` method
      // https://tc39.es/ecma262/#sec-string.prototype.trim
      trim: createMethod$2(3)
    };

    var trim = stringTrim.trim;



    var $parseInt = global_1.parseInt;
    var Symbol$1 = global_1.Symbol;
    var ITERATOR$4 = Symbol$1 && Symbol$1.iterator;
    var hex = /^[+-]?0x/i;
    var exec = functionUncurryThis(hex.exec);
    var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22 // MS Edge 18- broken with boxed symbols
    || ITERATOR$4 && !fails(function () {
      $parseInt(Object(ITERATOR$4));
    }); // `parseInt` method
    // https://tc39.es/ecma262/#sec-parseint-string-radix

    var numberParseInt = FORCED ? function parseInt(string, radix) {
      var S = trim(toString_1(string));
      return $parseInt(S, radix >>> 0 || (exec(hex, S) ? 16 : 10));
    } : $parseInt;

    // `parseInt` method
    // https://tc39.es/ecma262/#sec-parseint-string-radix


    _export({
      global: true,
      forced: parseInt != numberParseInt
    }, {
      parseInt: numberParseInt
    });

    var charAt$4 = functionUncurryThis(''.charAt);
    var charCodeAt = functionUncurryThis(''.charCodeAt);
    var stringSlice$3 = functionUncurryThis(''.slice);

    var createMethod$1 = function (CONVERT_TO_STRING) {
      return function ($this, pos) {
        var S = toString_1(requireObjectCoercible($this));
        var position = toIntegerOrInfinity(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
        first = charCodeAt(S, position);
        return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$4(S, position) : first : CONVERT_TO_STRING ? stringSlice$3(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
      };
    };

    var stringMultibyte = {
      // `String.prototype.codePointAt` method
      // https://tc39.es/ecma262/#sec-string.prototype.codepointat
      codeAt: createMethod$1(false),
      // `String.prototype.at` method
      // https://github.com/mathiasbynens/String.prototype.at
      charAt: createMethod$1(true)
    };

    var charAt$3 = stringMultibyte.charAt;







    var STRING_ITERATOR = 'String Iterator';
    var setInternalState$1 = internalState.set;
    var getInternalState$1 = internalState.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
    // https://tc39.es/ecma262/#sec-string.prototype-@@iterator

    defineIterator(String, 'String', function (iterated) {
      setInternalState$1(this, {
        type: STRING_ITERATOR,
        string: toString_1(iterated),
        index: 0
      }); // `%StringIteratorPrototype%.next` method
      // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
    }, function next() {
      var state = getInternalState$1(this);
      var string = state.string;
      var index = state.index;
      var point;
      if (index >= string.length) return {
        value: undefined,
        done: true
      };
      point = charAt$3(string, index);
      state.index += point.length;
      return {
        value: point,
        done: false
      };
    });

    var redefineAll = function (target, src, options) {
      for (var key in src) redefine(target, key, src[key], options);

      return target;
    };

    var arraySlice = functionUncurryThis([].slice);

    /* eslint-disable es/no-object-getownpropertynames -- safe */




    var $getOwnPropertyNames = objectGetOwnPropertyNames.f;



    var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

    var getWindowNames = function (it) {
      try {
        return $getOwnPropertyNames(it);
      } catch (error) {
        return arraySlice(windowNames);
      }
    }; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


    var f = function getOwnPropertyNames(it) {
      return windowNames && classofRaw(it) == 'Window' ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
    };

    var objectGetOwnPropertyNamesExternal = {
    	f: f
    };

    // FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it


    var arrayBufferNonExtensible = fails(function () {
      if (typeof ArrayBuffer == 'function') {
        var buffer = new ArrayBuffer(8); // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe

        if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', {
          value: 8
        });
      }
    });

    // eslint-disable-next-line es/no-object-isextensible -- safe


    var $isExtensible = Object.isExtensible;
    var FAILS_ON_PRIMITIVES = fails(function () {
      $isExtensible(1);
    }); // `Object.isExtensible` method
    // https://tc39.es/ecma262/#sec-object.isextensible

    var objectIsExtensible = FAILS_ON_PRIMITIVES || arrayBufferNonExtensible ? function isExtensible(it) {
      if (!isObject$5(it)) return false;
      if (arrayBufferNonExtensible && classofRaw(it) == 'ArrayBuffer') return false;
      return $isExtensible ? $isExtensible(it) : true;
    } : $isExtensible;

    var freezing = !fails(function () {
      // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
      return Object.isExtensible(Object.preventExtensions({}));
    });

    var internalMetadata = createCommonjsModule(function (module) {
    var defineProperty = objectDefineProperty.f;











    var REQUIRED = false;
    var METADATA = uid('meta');
    var id = 0;

    var setMetadata = function (it) {
      defineProperty(it, METADATA, {
        value: {
          objectID: 'O' + id++,
          // object ID
          weakData: {} // weak collections IDs

        }
      });
    };

    var fastKey = function (it, create) {
      // return a primitive with prefix
      if (!isObject$5(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

      if (!hasOwnProperty_1(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!objectIsExtensible(it)) return 'F'; // not necessary to add metadata

        if (!create) return 'E'; // add missing metadata

        setMetadata(it); // return object ID
      }

      return it[METADATA].objectID;
    };

    var getWeakData = function (it, create) {
      if (!hasOwnProperty_1(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!objectIsExtensible(it)) return true; // not necessary to add metadata

        if (!create) return false; // add missing metadata

        setMetadata(it); // return the store of weak collections IDs
      }

      return it[METADATA].weakData;
    }; // add metadata on freeze-family methods calling


    var onFreeze = function (it) {
      if (freezing && REQUIRED && objectIsExtensible(it) && !hasOwnProperty_1(it, METADATA)) setMetadata(it);
      return it;
    };

    var enable = function () {
      meta.enable = function () {
        /* empty */
      };

      REQUIRED = true;
      var getOwnPropertyNames = objectGetOwnPropertyNames.f;
      var splice = functionUncurryThis([].splice);
      var test = {};
      test[METADATA] = 1; // prevent exposing of metadata key

      if (getOwnPropertyNames(test).length) {
        objectGetOwnPropertyNames.f = function (it) {
          var result = getOwnPropertyNames(it);

          for (var i = 0, length = result.length; i < length; i++) {
            if (result[i] === METADATA) {
              splice(result, i, 1);
              break;
            }
          }

          return result;
        };

        _export({
          target: 'Object',
          stat: true,
          forced: true
        }, {
          getOwnPropertyNames: objectGetOwnPropertyNamesExternal.f
        });
      }
    };

    var meta = module.exports = {
      enable: enable,
      fastKey: fastKey,
      getWeakData: getWeakData,
      onFreeze: onFreeze
    };
    hiddenKeys$1[METADATA] = true;
    });
    internalMetadata.enable;
    internalMetadata.fastKey;
    internalMetadata.getWeakData;
    internalMetadata.onFreeze;

    var ITERATOR$3 = wellKnownSymbol('iterator');
    var ArrayPrototype = Array.prototype; // check on default Array iterator

    var isArrayIteratorMethod = function (it) {
      return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR$3] === it);
    };

    var ITERATOR$2 = wellKnownSymbol('iterator');

    var getIteratorMethod = function (it) {
      if (it != undefined) return getMethod(it, ITERATOR$2) || getMethod(it, '@@iterator') || iterators[classof(it)];
    };

    var TypeError$5 = global_1.TypeError;

    var getIterator = function (argument, usingIterator) {
      var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
      if (aCallable(iteratorMethod)) return anObject(functionCall(iteratorMethod, argument));
      throw TypeError$5(tryToString(argument) + ' is not iterable');
    };

    var iteratorClose = function (iterator, kind, value) {
      var innerResult, innerError;
      anObject(iterator);

      try {
        innerResult = getMethod(iterator, 'return');

        if (!innerResult) {
          if (kind === 'throw') throw value;
          return value;
        }

        innerResult = functionCall(innerResult, iterator);
      } catch (error) {
        innerError = true;
        innerResult = error;
      }

      if (kind === 'throw') throw value;
      if (innerError) throw innerResult;
      anObject(innerResult);
      return value;
    };

    var TypeError$4 = global_1.TypeError;

    var Result = function (stopped, result) {
      this.stopped = stopped;
      this.result = result;
    };

    var ResultPrototype = Result.prototype;

    var iterate = function (iterable, unboundFunction, options) {
      var that = options && options.that;
      var AS_ENTRIES = !!(options && options.AS_ENTRIES);
      var IS_ITERATOR = !!(options && options.IS_ITERATOR);
      var INTERRUPTED = !!(options && options.INTERRUPTED);
      var fn = functionBindContext(unboundFunction, that);
      var iterator, iterFn, index, length, result, next, step;

      var stop = function (condition) {
        if (iterator) iteratorClose(iterator, 'normal', condition);
        return new Result(true, condition);
      };

      var callFn = function (value) {
        if (AS_ENTRIES) {
          anObject(value);
          return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }

        return INTERRUPTED ? fn(value, stop) : fn(value);
      };

      if (IS_ITERATOR) {
        iterator = iterable;
      } else {
        iterFn = getIteratorMethod(iterable);
        if (!iterFn) throw TypeError$4(tryToString(iterable) + ' is not iterable'); // optimisation for array iterators

        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
            result = callFn(iterable[index]);
            if (result && objectIsPrototypeOf(ResultPrototype, result)) return result;
          }

          return new Result(false);
        }

        iterator = getIterator(iterable, iterFn);
      }

      next = iterator.next;

      while (!(step = functionCall(next, iterator)).done) {
        try {
          result = callFn(step.value);
        } catch (error) {
          iteratorClose(iterator, 'throw', error);
        }

        if (typeof result == 'object' && result && objectIsPrototypeOf(ResultPrototype, result)) return result;
      }

      return new Result(false);
    };

    var TypeError$3 = global_1.TypeError;

    var anInstance = function (it, Prototype) {
      if (objectIsPrototypeOf(Prototype, it)) return it;
      throw TypeError$3('Incorrect invocation');
    };

    var ITERATOR$1 = wellKnownSymbol('iterator');
    var SAFE_CLOSING = false;

    try {
      var called = 0;
      var iteratorWithReturn = {
        next: function () {
          return {
            done: !!called++
          };
        },
        'return': function () {
          SAFE_CLOSING = true;
        }
      };

      iteratorWithReturn[ITERATOR$1] = function () {
        return this;
      }; // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing


      Array.from(iteratorWithReturn, function () {
        throw 2;
      });
    } catch (error) {
      /* empty */
    }

    var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
      if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
      var ITERATION_SUPPORT = false;

      try {
        var object = {};

        object[ITERATOR$1] = function () {
          return {
            next: function () {
              return {
                done: ITERATION_SUPPORT = true
              };
            }
          };
        };

        exec(object);
      } catch (error) {
        /* empty */
      }

      return ITERATION_SUPPORT;
    };

    // makes subclassing work correct for wrapped built-ins


    var inheritIfRequired = function ($this, dummy, Wrapper) {
      var NewTarget, NewTargetPrototype;
      if ( // it can work only with native `setPrototypeOf`
      objectSetPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
      isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject$5(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) objectSetPrototypeOf($this, NewTargetPrototype);
      return $this;
    };

    var collection = function (CONSTRUCTOR_NAME, wrapper, common) {
      var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
      var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
      var ADDER = IS_MAP ? 'set' : 'add';
      var NativeConstructor = global_1[CONSTRUCTOR_NAME];
      var NativePrototype = NativeConstructor && NativeConstructor.prototype;
      var Constructor = NativeConstructor;
      var exported = {};

      var fixMethod = function (KEY) {
        var uncurriedNativeMethod = functionUncurryThis(NativePrototype[KEY]);
        redefine(NativePrototype, KEY, KEY == 'add' ? function add(value) {
          uncurriedNativeMethod(this, value === 0 ? 0 : value);
          return this;
        } : KEY == 'delete' ? function (key) {
          return IS_WEAK && !isObject$5(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : KEY == 'get' ? function get(key) {
          return IS_WEAK && !isObject$5(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : KEY == 'has' ? function has(key) {
          return IS_WEAK && !isObject$5(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
        } : function set(key, value) {
          uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
          return this;
        });
      };

      var REPLACE = isForced_1(CONSTRUCTOR_NAME, !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
        new NativeConstructor().entries().next();
      })));

      if (REPLACE) {
        // create collection constructor
        Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
        internalMetadata.enable();
      } else if (isForced_1(CONSTRUCTOR_NAME, true)) {
        var instance = new Constructor(); // early implementations not supports chaining

        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false

        var THROWS_ON_PRIMITIVES = fails(function () {
          instance.has(1);
        }); // most early implementations doesn't supports iterables, most modern - not close it correctly
        // eslint-disable-next-line no-new -- required for testing

        var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) {
          new NativeConstructor(iterable);
        }); // for early implementations -0 and +0 not the same

        var BUGGY_ZERO = !IS_WEAK && fails(function () {
          // V8 ~ Chromium 42- fails only with 5+ elements
          var $instance = new NativeConstructor();
          var index = 5;

          while (index--) $instance[ADDER](index, index);

          return !$instance.has(-0);
        });

        if (!ACCEPT_ITERABLES) {
          Constructor = wrapper(function (dummy, iterable) {
            anInstance(dummy, NativePrototype);
            var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
            if (iterable != undefined) iterate(iterable, that[ADDER], {
              that: that,
              AS_ENTRIES: IS_MAP
            });
            return that;
          });
          Constructor.prototype = NativePrototype;
          NativePrototype.constructor = Constructor;
        }

        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
          fixMethod('delete');
          fixMethod('has');
          IS_MAP && fixMethod('get');
        }

        if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

        if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
      }

      exported[CONSTRUCTOR_NAME] = Constructor;
      _export({
        global: true,
        forced: Constructor != NativeConstructor
      }, exported);
      setToStringTag(Constructor, CONSTRUCTOR_NAME);
      if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
      return Constructor;
    };

    var getWeakData = internalMetadata.getWeakData;















    var setInternalState = internalState.set;
    var internalStateGetterFor = internalState.getterFor;
    var find$1 = arrayIteration.find;
    var findIndex = arrayIteration.findIndex;
    var splice$1 = functionUncurryThis([].splice);
    var id = 0; // fallback for uncaught frozen keys

    var uncaughtFrozenStore = function (store) {
      return store.frozen || (store.frozen = new UncaughtFrozenStore());
    };

    var UncaughtFrozenStore = function () {
      this.entries = [];
    };

    var findUncaughtFrozen = function (store, key) {
      return find$1(store.entries, function (it) {
        return it[0] === key;
      });
    };

    UncaughtFrozenStore.prototype = {
      get: function (key) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) return entry[1];
      },
      has: function (key) {
        return !!findUncaughtFrozen(this, key);
      },
      set: function (key, value) {
        var entry = findUncaughtFrozen(this, key);
        if (entry) entry[1] = value;else this.entries.push([key, value]);
      },
      'delete': function (key) {
        var index = findIndex(this.entries, function (it) {
          return it[0] === key;
        });
        if (~index) splice$1(this.entries, index, 1);
        return !!~index;
      }
    };
    var collectionWeak = {
      getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
        var Constructor = wrapper(function (that, iterable) {
          anInstance(that, Prototype);
          setInternalState(that, {
            type: CONSTRUCTOR_NAME,
            id: id++,
            frozen: undefined
          });
          if (iterable != undefined) iterate(iterable, that[ADDER], {
            that: that,
            AS_ENTRIES: IS_MAP
          });
        });
        var Prototype = Constructor.prototype;
        var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

        var define = function (that, key, value) {
          var state = getInternalState(that);
          var data = getWeakData(anObject(key), true);
          if (data === true) uncaughtFrozenStore(state).set(key, value);else data[state.id] = value;
          return that;
        };

        redefineAll(Prototype, {
          // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
          // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
          // https://tc39.es/ecma262/#sec-weakset.prototype.delete
          'delete': function (key) {
            var state = getInternalState(this);
            if (!isObject$5(key)) return false;
            var data = getWeakData(key);
            if (data === true) return uncaughtFrozenStore(state)['delete'](key);
            return data && hasOwnProperty_1(data, state.id) && delete data[state.id];
          },
          // `{ WeakMap, WeakSet }.prototype.has(key)` methods
          // https://tc39.es/ecma262/#sec-weakmap.prototype.has
          // https://tc39.es/ecma262/#sec-weakset.prototype.has
          has: function has(key) {
            var state = getInternalState(this);
            if (!isObject$5(key)) return false;
            var data = getWeakData(key);
            if (data === true) return uncaughtFrozenStore(state).has(key);
            return data && hasOwnProperty_1(data, state.id);
          }
        });
        redefineAll(Prototype, IS_MAP ? {
          // `WeakMap.prototype.get(key)` method
          // https://tc39.es/ecma262/#sec-weakmap.prototype.get
          get: function get(key) {
            var state = getInternalState(this);

            if (isObject$5(key)) {
              var data = getWeakData(key);
              if (data === true) return uncaughtFrozenStore(state).get(key);
              return data ? data[state.id] : undefined;
            }
          },
          // `WeakMap.prototype.set(key, value)` method
          // https://tc39.es/ecma262/#sec-weakmap.prototype.set
          set: function set(key, value) {
            return define(this, key, value);
          }
        } : {
          // `WeakSet.prototype.add(value)` method
          // https://tc39.es/ecma262/#sec-weakset.prototype.add
          add: function add(value) {
            return define(this, value, true);
          }
        });
        return Constructor;
      }
    };
    collectionWeak.getConstructor;

    var enforceIternalState = internalState.enforce;



    var IS_IE11 = !global_1.ActiveXObject && 'ActiveXObject' in global_1;
    var InternalWeakMap;

    var wrapper = function (init) {
      return function WeakMap() {
        return init(this, arguments.length ? arguments[0] : undefined);
      };
    }; // `WeakMap` constructor
    // https://tc39.es/ecma262/#sec-weakmap-constructor


    var $WeakMap = collection('WeakMap', wrapper, collectionWeak); // IE11 WeakMap frozen keys fix
    // We can't use feature detection because it crash some old IE builds
    // https://github.com/zloirock/core-js/issues/485

    if (nativeWeakMap && IS_IE11) {
      InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
      internalMetadata.enable();
      var WeakMapPrototype = $WeakMap.prototype;
      var nativeDelete = functionUncurryThis(WeakMapPrototype['delete']);
      var nativeHas = functionUncurryThis(WeakMapPrototype.has);
      var nativeGet = functionUncurryThis(WeakMapPrototype.get);
      var nativeSet = functionUncurryThis(WeakMapPrototype.set);
      redefineAll(WeakMapPrototype, {
        'delete': function (key) {
          if (isObject$5(key) && !objectIsExtensible(key)) {
            var state = enforceIternalState(this);
            if (!state.frozen) state.frozen = new InternalWeakMap();
            return nativeDelete(this, key) || state.frozen['delete'](key);
          }

          return nativeDelete(this, key);
        },
        has: function has(key) {
          if (isObject$5(key) && !objectIsExtensible(key)) {
            var state = enforceIternalState(this);
            if (!state.frozen) state.frozen = new InternalWeakMap();
            return nativeHas(this, key) || state.frozen.has(key);
          }

          return nativeHas(this, key);
        },
        get: function get(key) {
          if (isObject$5(key) && !objectIsExtensible(key)) {
            var state = enforceIternalState(this);
            if (!state.frozen) state.frozen = new InternalWeakMap();
            return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
          }

          return nativeGet(this, key);
        },
        set: function set(key, value) {
          if (isObject$5(key) && !objectIsExtensible(key)) {
            var state = enforceIternalState(this);
            if (!state.frozen) state.frozen = new InternalWeakMap();
            nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
          } else nativeSet(this, key, value);

          return this;
        }
      });
    }

    var ITERATOR = wellKnownSymbol('iterator');
    var TO_STRING_TAG = wellKnownSymbol('toStringTag');
    var ArrayValues = es_array_iterator.values;

    var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
      if (CollectionPrototype) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
          createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
        } catch (error) {
          CollectionPrototype[ITERATOR] = ArrayValues;
        }

        if (!CollectionPrototype[TO_STRING_TAG]) {
          createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
        }

        if (domIterables[COLLECTION_NAME]) for (var METHOD_NAME in es_array_iterator) {
          // some Chrome versions have non-configurable methods on DOMTokenList
          if (CollectionPrototype[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
            createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, es_array_iterator[METHOD_NAME]);
          } catch (error) {
            CollectionPrototype[METHOD_NAME] = es_array_iterator[METHOD_NAME];
          }
        }
      }
    };

    for (var COLLECTION_NAME in domIterables) {
      handlePrototype(global_1[COLLECTION_NAME] && global_1[COLLECTION_NAME].prototype, COLLECTION_NAME);
    }

    handlePrototype(domTokenListPrototype, 'DOMTokenList');

    /**
     * lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright jQuery Foundation and other contributors <https://jquery.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */

    /** Used as the `TypeError` message for "Functions" methods. */
    var FUNC_ERROR_TEXT$2 = 'Expected a function';
    /** Used as references for various `Number` constants. */

    var NAN$1 = 0 / 0;
    /** `Object#toString` result references. */

    var symbolTag$1 = '[object Symbol]';
    /** Used to match leading and trailing whitespace. */

    var reTrim$1 = /^\s+|\s+$/g;
    /** Used to detect bad signed hexadecimal string values. */

    var reIsBadHex$1 = /^[-+]0x[0-9a-f]+$/i;
    /** Used to detect binary string values. */

    var reIsBinary$1 = /^0b[01]+$/i;
    /** Used to detect octal string values. */

    var reIsOctal$1 = /^0o[0-7]+$/i;
    /** Built-in method references without a dependency on `root`. */

    var freeParseInt$1 = parseInt;
    /** Detect free variable `global` from Node.js. */

    var freeGlobal$2 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    /** Detect free variable `self`. */

    var freeSelf$2 = typeof self == 'object' && self && self.Object === Object && self;
    /** Used as a reference to the global object. */

    var root$2 = freeGlobal$2 || freeSelf$2 || Function('return this')();
    /** Used for built-in method references. */

    var objectProto$2 = Object.prototype;
    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */

    var objectToString$2 = objectProto$2.toString;
    /* Built-in method references for those with the same name as other `lodash` methods. */

    var nativeMax$1 = Math.max,
        nativeMin$1 = Math.min;
    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */

    var now$2 = function () {
      return root$2.Date.now();
    };
    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */


    function debounce$1(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT$2);
      }

      wait = toNumber$1(wait) || 0;

      if (isObject$4(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax$1(toNumber$1(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time; // Start the timer for the trailing edge.

        timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            result = wait - timeSinceLastCall;
        return maxing ? nativeMin$1(result, maxWait - timeSinceLastInvoke) : result;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.

        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }

      function timerExpired() {
        var time = now$2();

        if (shouldInvoke(time)) {
          return trailingEdge(time);
        } // Restart the timer.


        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.

        if (trailing && lastArgs) {
          return invokeFunc(time);
        }

        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }

        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now$2());
      }

      function debounced() {
        var time = now$2(),
            isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }

          if (maxing) {
            // Handle invocations in a tight loop.
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }

        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }

        return result;
      }

      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */


    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT$2);
      }

      if (isObject$4(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      return debounce$1(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }
    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */


    function isObject$4(value) {
      var type = typeof value;
      return !!value && (type == 'object' || type == 'function');
    }
    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */


    function isObjectLike$1(value) {
      return !!value && typeof value == 'object';
    }
    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */


    function isSymbol$1(value) {
      return typeof value == 'symbol' || isObjectLike$1(value) && objectToString$2.call(value) == symbolTag$1;
    }
    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */


    function toNumber$1(value) {
      if (typeof value == 'number') {
        return value;
      }

      if (isSymbol$1(value)) {
        return NAN$1;
      }

      if (isObject$4(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject$4(other) ? other + '' : other;
      }

      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }

      value = value.replace(reTrim$1, '');
      var isBinary = reIsBinary$1.test(value);
      return isBinary || reIsOctal$1.test(value) ? freeParseInt$1(value.slice(2), isBinary ? 2 : 8) : reIsBadHex$1.test(value) ? NAN$1 : +value;
    }

    var lodash_throttle = throttle;

    /**
     * lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright jQuery Foundation and other contributors <https://jquery.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */

    /** Used as the `TypeError` message for "Functions" methods. */
    var FUNC_ERROR_TEXT$1 = 'Expected a function';
    /** Used as references for various `Number` constants. */

    var NAN = 0 / 0;
    /** `Object#toString` result references. */

    var symbolTag = '[object Symbol]';
    /** Used to match leading and trailing whitespace. */

    var reTrim = /^\s+|\s+$/g;
    /** Used to detect bad signed hexadecimal string values. */

    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    /** Used to detect binary string values. */

    var reIsBinary = /^0b[01]+$/i;
    /** Used to detect octal string values. */

    var reIsOctal = /^0o[0-7]+$/i;
    /** Built-in method references without a dependency on `root`. */

    var freeParseInt = parseInt;
    /** Detect free variable `global` from Node.js. */

    var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    /** Detect free variable `self`. */

    var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;
    /** Used as a reference to the global object. */

    var root$1 = freeGlobal$1 || freeSelf$1 || Function('return this')();
    /** Used for built-in method references. */

    var objectProto$1 = Object.prototype;
    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */

    var objectToString$1 = objectProto$1.toString;
    /* Built-in method references for those with the same name as other `lodash` methods. */

    var nativeMax = Math.max,
        nativeMin = Math.min;
    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */

    var now$1 = function () {
      return root$1.Date.now();
    };
    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */


    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT$1);
      }

      wait = toNumber(wait) || 0;

      if (isObject$3(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time; // Start the timer for the trailing edge.

        timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            result = wait - timeSinceLastCall;
        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.

        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }

      function timerExpired() {
        var time = now$1();

        if (shouldInvoke(time)) {
          return trailingEdge(time);
        } // Restart the timer.


        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.

        if (trailing && lastArgs) {
          return invokeFunc(time);
        }

        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }

        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now$1());
      }

      function debounced() {
        var time = now$1(),
            isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }

          if (maxing) {
            // Handle invocations in a tight loop.
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }

        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }

        return result;
      }

      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */


    function isObject$3(value) {
      var type = typeof value;
      return !!value && (type == 'object' || type == 'function');
    }
    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */


    function isObjectLike(value) {
      return !!value && typeof value == 'object';
    }
    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */


    function isSymbol(value) {
      return typeof value == 'symbol' || isObjectLike(value) && objectToString$1.call(value) == symbolTag;
    }
    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */


    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }

      if (isSymbol(value)) {
        return NAN;
      }

      if (isObject$3(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject$3(other) ? other + '' : other;
      }

      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }

      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }

    var lodash_debounce = debounce;

    /**
     * lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright jQuery Foundation and other contributors <https://jquery.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */

    /** Used as the `TypeError` message for "Functions" methods. */
    var FUNC_ERROR_TEXT = 'Expected a function';
    /** Used to stand-in for `undefined` hash values. */

    var HASH_UNDEFINED = '__lodash_hash_undefined__';
    /** `Object#toString` result references. */

    var funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]';
    /**
     * Used to match `RegExp`
     * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
     */

    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    /** Used to detect host constructors (Safari). */

    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    /** Detect free variable `global` from Node.js. */

    var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    /** Detect free variable `self`. */

    var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
    /** Used as a reference to the global object. */

    var root = freeGlobal || freeSelf || Function('return this')();
    /**
     * Gets the value at `key` of `object`.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */

    function getValue(object, key) {
      return object == null ? undefined : object[key];
    }
    /**
     * Checks if `value` is a host object in IE < 9.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
     */


    function isHostObject(value) {
      // Many host objects are `Object` objects that can coerce to strings
      // despite having improperly defined `toString` methods.
      var result = false;

      if (value != null && typeof value.toString != 'function') {
        try {
          result = !!(value + '');
        } catch (e) {}
      }

      return result;
    }
    /** Used for built-in method references. */


    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;
    /** Used to detect overreaching core-js shims. */

    var coreJsData = root['__core-js_shared__'];
    /** Used to detect methods masquerading as native. */

    var maskSrcKey = function () {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? 'Symbol(src)_1.' + uid : '';
    }();
    /** Used to resolve the decompiled source of functions. */


    var funcToString = funcProto.toString;
    /** Used to check objects for own properties. */

    var hasOwnProperty = objectProto.hasOwnProperty;
    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */

    var objectToString = objectProto.toString;
    /** Used to detect if a method is native. */

    var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
    /** Built-in value references. */

    var splice = arrayProto.splice;
    /* Built-in method references that are verified to be native. */

    var Map$1 = getNative(root, 'Map'),
        nativeCreate = getNative(Object, 'create');
    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */

    function Hash(entries) {
      var index = -1,
          length = entries ? entries.length : 0;
      this.clear();

      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */


    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }
    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */


    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }
    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */


    function hashGet(key) {
      var data = this.__data__;

      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }

      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }
    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */


    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
    }
    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */


    function hashSet(key, value) {
      var data = this.__data__;
      data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
      return this;
    } // Add methods to `Hash`.


    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */

    function ListCache(entries) {
      var index = -1,
          length = entries ? entries.length : 0;
      this.clear();

      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */


    function listCacheClear() {
      this.__data__ = [];
    }
    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */


    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }

      var lastIndex = data.length - 1;

      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }

      return true;
    }
    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */


    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);
      return index < 0 ? undefined : data[index][1];
    }
    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */


    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */


    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }

      return this;
    } // Add methods to `ListCache`.


    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */

    function MapCache(entries) {
      var index = -1,
          length = entries ? entries.length : 0;
      this.clear();

      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */


    function mapCacheClear() {
      this.__data__ = {
        'hash': new Hash(),
        'map': new (Map$1 || ListCache)(),
        'string': new Hash()
      };
    }
    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */


    function mapCacheDelete(key) {
      return getMapData(this, key)['delete'](key);
    }
    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */


    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */


    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */


    function mapCacheSet(key, value) {
      getMapData(this, key).set(key, value);
      return this;
    } // Add methods to `MapCache`.


    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */

    function assocIndexOf(array, key) {
      var length = array.length;

      while (length--) {
        if (eq$1(array[length][0], key)) {
          return length;
        }
      }

      return -1;
    }
    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */


    function baseIsNative(value) {
      if (!isObject$2(value) || isMasked(value)) {
        return false;
      }

      var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */


    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
    }
    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */


    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }
    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */


    function isKeyable(value) {
      var type = typeof value;
      return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
    }
    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */


    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to process.
     * @returns {string} Returns the source code.
     */


    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}

        try {
          return func + '';
        } catch (e) {}
      }

      return '';
    }
    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */


    function memoize(func, resolver) {
      if (typeof func != 'function' || resolver && typeof resolver != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }

      var memoized = function () {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }

        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result);
        return result;
      };

      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    } // Assign cache to `_.memoize`.


    memoize.Cache = MapCache;
    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */

    function eq$1(value, other) {
      return value === other || value !== value && other !== other;
    }
    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */


    function isFunction(value) {
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 8-9 which returns 'object' for typed array and other constructors.
      var tag = isObject$2(value) ? objectToString.call(value) : '';
      return tag == funcTag || tag == genTag;
    }
    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */


    function isObject$2(value) {
      var type = typeof value;
      return !!value && (type == 'object' || type == 'function');
    }

    var lodash_memoize = memoize;

    var resizeObservers = [];

    var hasActiveObservations = function () {
      return resizeObservers.some(function (ro) {
        return ro.activeTargets.length > 0;
      });
    };

    var hasSkippedObservations = function () {
      return resizeObservers.some(function (ro) {
        return ro.skippedTargets.length > 0;
      });
    };

    var msg = 'ResizeObserver loop completed with undelivered notifications.';

    var deliverResizeLoopError = function () {
      var event;

      if (typeof ErrorEvent === 'function') {
        event = new ErrorEvent('error', {
          message: msg
        });
      } else {
        event = document.createEvent('Event');
        event.initEvent('error', false, false);
        event.message = msg;
      }

      window.dispatchEvent(event);
    };

    var ResizeObserverBoxOptions;

    (function (ResizeObserverBoxOptions) {
      ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
      ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
      ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
    })(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));

    var freeze = function (obj) {
      return Object.freeze(obj);
    };

    var ResizeObserverSize = function () {
      function ResizeObserverSize(inlineSize, blockSize) {
        this.inlineSize = inlineSize;
        this.blockSize = blockSize;
        freeze(this);
      }

      return ResizeObserverSize;
    }();

    var DOMRectReadOnly = function () {
      function DOMRectReadOnly(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.top = this.y;
        this.left = this.x;
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;
        return freeze(this);
      }

      DOMRectReadOnly.prototype.toJSON = function () {
        var _a = this,
            x = _a.x,
            y = _a.y,
            top = _a.top,
            right = _a.right,
            bottom = _a.bottom,
            left = _a.left,
            width = _a.width,
            height = _a.height;

        return {
          x: x,
          y: y,
          top: top,
          right: right,
          bottom: bottom,
          left: left,
          width: width,
          height: height
        };
      };

      DOMRectReadOnly.fromRect = function (rectangle) {
        return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
      };

      return DOMRectReadOnly;
    }();

    var isSVG = function (target) {
      return target instanceof SVGElement && 'getBBox' in target;
    };

    var isHidden = function (target) {
      if (isSVG(target)) {
        var _a = target.getBBox(),
            width = _a.width,
            height = _a.height;

        return !width && !height;
      }

      var _b = target,
          offsetWidth = _b.offsetWidth,
          offsetHeight = _b.offsetHeight;
      return !(offsetWidth || offsetHeight || target.getClientRects().length);
    };

    var isElement = function (obj) {
      var _a, _b;

      if (obj instanceof Element) {
        return true;
      }

      var scope = (_b = (_a = obj) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.defaultView;
      return !!(scope && obj instanceof scope.Element);
    };

    var isReplacedElement = function (target) {
      switch (target.tagName) {
        case 'INPUT':
          if (target.type !== 'image') {
            break;
          }

        case 'VIDEO':
        case 'AUDIO':
        case 'EMBED':
        case 'OBJECT':
        case 'CANVAS':
        case 'IFRAME':
        case 'IMG':
          return true;
      }

      return false;
    };

    var global$1 = typeof window !== 'undefined' ? window : {};

    var cache = new WeakMap();
    var scrollRegexp = /auto|scroll/;
    var verticalRegexp = /^tb|vertical/;
    var IE = /msie|trident/i.test(global$1.navigator && global$1.navigator.userAgent);

    var parseDimension = function (pixel) {
      return parseFloat(pixel || '0');
    };

    var size = function (inlineSize, blockSize, switchSizes) {
      if (inlineSize === void 0) {
        inlineSize = 0;
      }

      if (blockSize === void 0) {
        blockSize = 0;
      }

      if (switchSizes === void 0) {
        switchSizes = false;
      }

      return new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
    };

    var zeroBoxes = freeze({
      devicePixelContentBoxSize: size(),
      borderBoxSize: size(),
      contentBoxSize: size(),
      contentRect: new DOMRectReadOnly(0, 0, 0, 0)
    });

    var calculateBoxSizes = function (target, forceRecalculation) {
      if (forceRecalculation === void 0) {
        forceRecalculation = false;
      }

      if (cache.has(target) && !forceRecalculation) {
        return cache.get(target);
      }

      if (isHidden(target)) {
        cache.set(target, zeroBoxes);
        return zeroBoxes;
      }

      var cs = getComputedStyle(target);
      var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
      var removePadding = !IE && cs.boxSizing === 'border-box';
      var switchSizes = verticalRegexp.test(cs.writingMode || '');
      var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || '');
      var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || '');
      var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
      var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
      var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
      var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
      var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
      var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
      var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
      var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
      var horizontalPadding = paddingLeft + paddingRight;
      var verticalPadding = paddingTop + paddingBottom;
      var horizontalBorderArea = borderLeft + borderRight;
      var verticalBorderArea = borderTop + borderBottom;
      var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
      var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
      var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
      var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
      var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
      var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
      var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
      var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
      var boxes = freeze({
        devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
        borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
        contentBoxSize: size(contentWidth, contentHeight, switchSizes),
        contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
      });
      cache.set(target, boxes);
      return boxes;
    };

    var calculateBoxSize = function (target, observedBox, forceRecalculation) {
      var _a = calculateBoxSizes(target, forceRecalculation),
          borderBoxSize = _a.borderBoxSize,
          contentBoxSize = _a.contentBoxSize,
          devicePixelContentBoxSize = _a.devicePixelContentBoxSize;

      switch (observedBox) {
        case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
          return devicePixelContentBoxSize;

        case ResizeObserverBoxOptions.BORDER_BOX:
          return borderBoxSize;

        default:
          return contentBoxSize;
      }
    };

    var ResizeObserverEntry = function () {
      function ResizeObserverEntry(target) {
        var boxes = calculateBoxSizes(target);
        this.target = target;
        this.contentRect = boxes.contentRect;
        this.borderBoxSize = freeze([boxes.borderBoxSize]);
        this.contentBoxSize = freeze([boxes.contentBoxSize]);
        this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
      }

      return ResizeObserverEntry;
    }();

    var calculateDepthForNode = function (node) {
      if (isHidden(node)) {
        return Infinity;
      }

      var depth = 0;
      var parent = node.parentNode;

      while (parent) {
        depth += 1;
        parent = parent.parentNode;
      }

      return depth;
    };

    var broadcastActiveObservations = function () {
      var shallowestDepth = Infinity;
      var callbacks = [];
      resizeObservers.forEach(function processObserver(ro) {
        if (ro.activeTargets.length === 0) {
          return;
        }

        var entries = [];
        ro.activeTargets.forEach(function processTarget(ot) {
          var entry = new ResizeObserverEntry(ot.target);
          var targetDepth = calculateDepthForNode(ot.target);
          entries.push(entry);
          ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);

          if (targetDepth < shallowestDepth) {
            shallowestDepth = targetDepth;
          }
        });
        callbacks.push(function resizeObserverCallback() {
          ro.callback.call(ro.observer, entries, ro.observer);
        });
        ro.activeTargets.splice(0, ro.activeTargets.length);
      });

      for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
        var callback = callbacks_1[_i];
        callback();
      }

      return shallowestDepth;
    };

    var gatherActiveObservationsAtDepth = function (depth) {
      resizeObservers.forEach(function processObserver(ro) {
        ro.activeTargets.splice(0, ro.activeTargets.length);
        ro.skippedTargets.splice(0, ro.skippedTargets.length);
        ro.observationTargets.forEach(function processTarget(ot) {
          if (ot.isActive()) {
            if (calculateDepthForNode(ot.target) > depth) {
              ro.activeTargets.push(ot);
            } else {
              ro.skippedTargets.push(ot);
            }
          }
        });
      });
    };

    var process = function () {
      var depth = 0;
      gatherActiveObservationsAtDepth(depth);

      while (hasActiveObservations()) {
        depth = broadcastActiveObservations();
        gatherActiveObservationsAtDepth(depth);
      }

      if (hasSkippedObservations()) {
        deliverResizeLoopError();
      }

      return depth > 0;
    };

    var trigger$1;
    var callbacks = [];

    var notify = function () {
      return callbacks.splice(0).forEach(function (cb) {
        return cb();
      });
    };

    var queueMicroTask = function (callback) {
      if (!trigger$1) {
        var toggle_1 = 0;
        var el_1 = document.createTextNode('');
        var config = {
          characterData: true
        };
        new MutationObserver(function () {
          return notify();
        }).observe(el_1, config);

        trigger$1 = function () {
          el_1.textContent = "" + (toggle_1 ? toggle_1-- : toggle_1++);
        };
      }

      callbacks.push(callback);
      trigger$1();
    };

    var queueResizeObserver = function (cb) {
      queueMicroTask(function ResizeObserver() {
        requestAnimationFrame(cb);
      });
    };

    var watching = 0;

    var isWatching = function () {
      return !!watching;
    };

    var CATCH_PERIOD = 250;
    var observerConfig = {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true
    };
    var events$1 = ['resize', 'load', 'transitionend', 'animationend', 'animationstart', 'animationiteration', 'keyup', 'keydown', 'mouseup', 'mousedown', 'mouseover', 'mouseout', 'blur', 'focus'];

    var time = function (timeout) {
      if (timeout === void 0) {
        timeout = 0;
      }

      return Date.now() + timeout;
    };

    var scheduled = false;

    var Scheduler = function () {
      function Scheduler() {
        var _this = this;

        this.stopped = true;

        this.listener = function () {
          return _this.schedule();
        };
      }

      Scheduler.prototype.run = function (timeout) {
        var _this = this;

        if (timeout === void 0) {
          timeout = CATCH_PERIOD;
        }

        if (scheduled) {
          return;
        }

        scheduled = true;
        var until = time(timeout);
        queueResizeObserver(function () {
          var elementsHaveResized = false;

          try {
            elementsHaveResized = process();
          } finally {
            scheduled = false;
            timeout = until - time();

            if (!isWatching()) {
              return;
            }

            if (elementsHaveResized) {
              _this.run(1000);
            } else if (timeout > 0) {
              _this.run(timeout);
            } else {
              _this.start();
            }
          }
        });
      };

      Scheduler.prototype.schedule = function () {
        this.stop();
        this.run();
      };

      Scheduler.prototype.observe = function () {
        var _this = this;

        var cb = function () {
          return _this.observer && _this.observer.observe(document.body, observerConfig);
        };

        document.body ? cb() : global$1.addEventListener('DOMContentLoaded', cb);
      };

      Scheduler.prototype.start = function () {
        var _this = this;

        if (this.stopped) {
          this.stopped = false;
          this.observer = new MutationObserver(this.listener);
          this.observe();
          events$1.forEach(function (name) {
            return global$1.addEventListener(name, _this.listener, true);
          });
        }
      };

      Scheduler.prototype.stop = function () {
        var _this = this;

        if (!this.stopped) {
          this.observer && this.observer.disconnect();
          events$1.forEach(function (name) {
            return global$1.removeEventListener(name, _this.listener, true);
          });
          this.stopped = true;
        }
      };

      return Scheduler;
    }();

    var scheduler = new Scheduler();

    var updateCount = function (n) {
      !watching && n > 0 && scheduler.start();
      watching += n;
      !watching && scheduler.stop();
    };

    var skipNotifyOnElement = function (target) {
      return !isSVG(target) && !isReplacedElement(target) && getComputedStyle(target).display === 'inline';
    };

    var ResizeObservation = function () {
      function ResizeObservation(target, observedBox) {
        this.target = target;
        this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
        this.lastReportedSize = {
          inlineSize: 0,
          blockSize: 0
        };
      }

      ResizeObservation.prototype.isActive = function () {
        var size = calculateBoxSize(this.target, this.observedBox, true);

        if (skipNotifyOnElement(this.target)) {
          this.lastReportedSize = size;
        }

        if (this.lastReportedSize.inlineSize !== size.inlineSize || this.lastReportedSize.blockSize !== size.blockSize) {
          return true;
        }

        return false;
      };

      return ResizeObservation;
    }();

    var ResizeObserverDetail = function () {
      function ResizeObserverDetail(resizeObserver, callback) {
        this.activeTargets = [];
        this.skippedTargets = [];
        this.observationTargets = [];
        this.observer = resizeObserver;
        this.callback = callback;
      }

      return ResizeObserverDetail;
    }();

    var observerMap = new WeakMap();

    var getObservationIndex = function (observationTargets, target) {
      for (var i = 0; i < observationTargets.length; i += 1) {
        if (observationTargets[i].target === target) {
          return i;
        }
      }

      return -1;
    };

    var ResizeObserverController = function () {
      function ResizeObserverController() {}

      ResizeObserverController.connect = function (resizeObserver, callback) {
        var detail = new ResizeObserverDetail(resizeObserver, callback);
        observerMap.set(resizeObserver, detail);
      };

      ResizeObserverController.observe = function (resizeObserver, target, options) {
        var detail = observerMap.get(resizeObserver);
        var firstObservation = detail.observationTargets.length === 0;

        if (getObservationIndex(detail.observationTargets, target) < 0) {
          firstObservation && resizeObservers.push(detail);
          detail.observationTargets.push(new ResizeObservation(target, options && options.box));
          updateCount(1);
          scheduler.schedule();
        }
      };

      ResizeObserverController.unobserve = function (resizeObserver, target) {
        var detail = observerMap.get(resizeObserver);
        var index = getObservationIndex(detail.observationTargets, target);
        var lastObservation = detail.observationTargets.length === 1;

        if (index >= 0) {
          lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
          detail.observationTargets.splice(index, 1);
          updateCount(-1);
        }
      };

      ResizeObserverController.disconnect = function (resizeObserver) {
        var _this = this;

        var detail = observerMap.get(resizeObserver);
        detail.observationTargets.slice().forEach(function (ot) {
          return _this.unobserve(resizeObserver, ot.target);
        });
        detail.activeTargets.splice(0, detail.activeTargets.length);
      };

      return ResizeObserverController;
    }();

    var ResizeObserver$1 = function () {
      function ResizeObserver(callback) {
        if (arguments.length === 0) {
          throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        }

        if (typeof callback !== 'function') {
          throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        }

        ResizeObserverController.connect(this, callback);
      }

      ResizeObserver.prototype.observe = function (target, options) {
        if (arguments.length === 0) {
          throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }

        if (!isElement(target)) {
          throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }

        ResizeObserverController.observe(this, target, options);
      };

      ResizeObserver.prototype.unobserve = function (target) {
        if (arguments.length === 0) {
          throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        }

        if (!isElement(target)) {
          throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        }

        ResizeObserverController.unobserve(this, target);
      };

      ResizeObserver.prototype.disconnect = function () {
        ResizeObserverController.disconnect(this);
      };

      ResizeObserver.toString = function () {
        return 'function ResizeObserver () { [polyfill code] }';
      };

      return ResizeObserver;
    }();

    var TypeError$2 = global_1.TypeError; // `Array.prototype.{ reduce, reduceRight }` methods implementation

    var createMethod = function (IS_RIGHT) {
      return function (that, callbackfn, argumentsLength, memo) {
        aCallable(callbackfn);
        var O = toObject(that);
        var self = indexedObject(O);
        var length = lengthOfArrayLike(O);
        var index = IS_RIGHT ? length - 1 : 0;
        var i = IS_RIGHT ? -1 : 1;
        if (argumentsLength < 2) while (true) {
          if (index in self) {
            memo = self[index];
            index += i;
            break;
          }

          index += i;

          if (IS_RIGHT ? index < 0 : length <= index) {
            throw TypeError$2('Reduce of empty array with no initial value');
          }
        }

        for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
          memo = callbackfn(memo, self[index], index, O);
        }

        return memo;
      };
    };

    var arrayReduce = {
      // `Array.prototype.reduce` method
      // https://tc39.es/ecma262/#sec-array.prototype.reduce
      left: createMethod(false),
      // `Array.prototype.reduceRight` method
      // https://tc39.es/ecma262/#sec-array.prototype.reduceright
      right: createMethod(true)
    };

    var engineIsNode = classofRaw(global_1.process) == 'process';

    var $reduce = arrayReduce.left;







    var STRICT_METHOD = arrayMethodIsStrict('reduce'); // Chrome 80-82 has a critical bug
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

    var CHROME_BUG = !engineIsNode && engineV8Version > 79 && engineV8Version < 83; // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce

    _export({
      target: 'Array',
      proto: true,
      forced: !STRICT_METHOD || CHROME_BUG
    }, {
      reduce: function reduce(callbackfn
      /* , initialValue */
      ) {
        var length = arguments.length;
        return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
      }
    });

    var FUNCTION_NAME_EXISTS = functionName.EXISTS;



    var defineProperty = objectDefineProperty.f;

    var FunctionPrototype$1 = Function.prototype;
    var functionToString = functionUncurryThis(FunctionPrototype$1.toString);
    var nameRE = /^\s*function ([^ (]*)/;
    var regExpExec = functionUncurryThis(nameRE.exec);
    var NAME = 'name'; // Function instances `.name` property
    // https://tc39.es/ecma262/#sec-function-instances-name

    if (descriptors && !FUNCTION_NAME_EXISTS) {
      defineProperty(FunctionPrototype$1, NAME, {
        configurable: true,
        get: function () {
          try {
            return regExpExec(nameRE, functionToString(this))[1];
          } catch (error) {
            return '';
          }
        }
      });
    }

    // `RegExp.prototype.flags` getter implementation
    // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags


    var regexpFlags = function () {
      var that = anObject(this);
      var result = '';
      if (that.global) result += 'g';
      if (that.ignoreCase) result += 'i';
      if (that.multiline) result += 'm';
      if (that.dotAll) result += 's';
      if (that.unicode) result += 'u';
      if (that.sticky) result += 'y';
      return result;
    };

    // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError


    var $RegExp$2 = global_1.RegExp;
    var UNSUPPORTED_Y$1 = fails(function () {
      var re = $RegExp$2('a', 'y');
      re.lastIndex = 2;
      return re.exec('abcd') != null;
    });
    var BROKEN_CARET = fails(function () {
      // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
      var re = $RegExp$2('^r', 'gy');
      re.lastIndex = 2;
      return re.exec('str') != null;
    });

    var regexpStickyHelpers = {
    	UNSUPPORTED_Y: UNSUPPORTED_Y$1,
    	BROKEN_CARET: BROKEN_CARET
    };

    // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError


    var $RegExp$1 = global_1.RegExp;
    var regexpUnsupportedDotAll = fails(function () {
      var re = $RegExp$1('.', 's');
      return !(re.dotAll && re.exec('\n') && re.flags === 's');
    });

    // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError


    var $RegExp = global_1.RegExp;
    var regexpUnsupportedNcg = fails(function () {
      var re = $RegExp('(?<a>b)', 'g');
      return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
    });

    /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */

    /* eslint-disable regexp/no-useless-quantifier -- testing */















    var getInternalState = internalState.get;





    var nativeReplace = shared('native-string-replace', String.prototype.replace);
    var nativeExec = RegExp.prototype.exec;
    var patchedExec = nativeExec;
    var charAt$2 = functionUncurryThis(''.charAt);
    var indexOf = functionUncurryThis(''.indexOf);
    var replace$1 = functionUncurryThis(''.replace);
    var stringSlice$2 = functionUncurryThis(''.slice);

    var UPDATES_LAST_INDEX_WRONG = function () {
      var re1 = /a/;
      var re2 = /b*/g;
      functionCall(nativeExec, re1, 'a');
      functionCall(nativeExec, re2, 'a');
      return re1.lastIndex !== 0 || re2.lastIndex !== 0;
    }();

    var UNSUPPORTED_Y = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

    var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
    var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || regexpUnsupportedDotAll || regexpUnsupportedNcg;

    if (PATCH) {
      // eslint-disable-next-line max-statements -- TODO
      patchedExec = function exec(string) {
        var re = this;
        var state = getInternalState(re);
        var str = toString_1(string);
        var raw = state.raw;
        var result, reCopy, lastIndex, match, i, object, group;

        if (raw) {
          raw.lastIndex = re.lastIndex;
          result = functionCall(patchedExec, raw, str);
          re.lastIndex = raw.lastIndex;
          return result;
        }

        var groups = state.groups;
        var sticky = UNSUPPORTED_Y && re.sticky;
        var flags = functionCall(regexpFlags, re);
        var source = re.source;
        var charsAdded = 0;
        var strCopy = str;

        if (sticky) {
          flags = replace$1(flags, 'y', '');

          if (indexOf(flags, 'g') === -1) {
            flags += 'g';
          }

          strCopy = stringSlice$2(str, re.lastIndex); // Support anchored sticky behavior.

          if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$2(str, re.lastIndex - 1) !== '\n')) {
            source = '(?: ' + source + ')';
            strCopy = ' ' + strCopy;
            charsAdded++;
          } // ^(? + rx + ) is needed, in combination with some str slicing, to
          // simulate the 'y' flag.


          reCopy = new RegExp('^(?:' + source + ')', flags);
        }

        if (NPCG_INCLUDED) {
          reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
        }

        if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
        match = functionCall(nativeExec, sticky ? reCopy : re, strCopy);

        if (sticky) {
          if (match) {
            match.input = stringSlice$2(match.input, charsAdded);
            match[0] = stringSlice$2(match[0], charsAdded);
            match.index = re.lastIndex;
            re.lastIndex += match[0].length;
          } else re.lastIndex = 0;
        } else if (UPDATES_LAST_INDEX_WRONG && match) {
          re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
        }

        if (NPCG_INCLUDED && match && match.length > 1) {
          // Fix browsers whose `exec` methods don't consistently return `undefined`
          // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
          functionCall(nativeReplace, match[0], reCopy, function () {
            for (i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === undefined) match[i] = undefined;
            }
          });
        }

        if (match && groups) {
          match.groups = object = objectCreate(null);

          for (i = 0; i < groups.length; i++) {
            group = groups[i];
            object[group[0]] = match[group[1]];
          }
        }

        return match;
      };
    }

    var regexpExec = patchedExec;

    // `RegExp.prototype.exec` method
    // https://tc39.es/ecma262/#sec-regexp.prototype.exec


    _export({
      target: 'RegExp',
      proto: true,
      forced: /./.exec !== regexpExec
    }, {
      exec: regexpExec
    });

    var SPECIES = wellKnownSymbol('species');
    var RegExpPrototype = RegExp.prototype;

    var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
      var SYMBOL = wellKnownSymbol(KEY);
      var DELEGATES_TO_SYMBOL = !fails(function () {
        // String methods call symbol-named RegEp methods
        var O = {};

        O[SYMBOL] = function () {
          return 7;
        };

        return ''[KEY](O) != 7;
      });
      var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
        // Symbol-named RegExp methods call .exec
        var execCalled = false;
        var re = /a/;

        if (KEY === 'split') {
          // We can't use real regex here since it causes deoptimization
          // and serious performance degradation in V8
          // https://github.com/zloirock/core-js/issues/306
          re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
          // a new one. We need to return the patched regex when creating the new one.

          re.constructor = {};

          re.constructor[SPECIES] = function () {
            return re;
          };

          re.flags = '';
          re[SYMBOL] = /./[SYMBOL];
        }

        re.exec = function () {
          execCalled = true;
          return null;
        };

        re[SYMBOL]('');
        return !execCalled;
      });

      if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
        var uncurriedNativeRegExpMethod = functionUncurryThis(/./[SYMBOL]);
        var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
          var uncurriedNativeMethod = functionUncurryThis(nativeMethod);
          var $exec = regexp.exec;

          if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
            if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
              // The native String method already delegates to @@method (this
              // polyfilled function), leasing to infinite recursion.
              // We avoid it by directly calling the native @@method method.
              return {
                done: true,
                value: uncurriedNativeRegExpMethod(regexp, str, arg2)
              };
            }

            return {
              done: true,
              value: uncurriedNativeMethod(str, regexp, arg2)
            };
          }

          return {
            done: false
          };
        });
        redefine(String.prototype, KEY, methods[0]);
        redefine(RegExpPrototype, SYMBOL, methods[1]);
      }

      if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
    };

    var charAt$1 = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
    // https://tc39.es/ecma262/#sec-advancestringindex


    var advanceStringIndex = function (S, index, unicode) {
      return index + (unicode ? charAt$1(S, index).length : 1);
    };

    var TypeError$1 = global_1.TypeError; // `RegExpExec` abstract operation
    // https://tc39.es/ecma262/#sec-regexpexec

    var regexpExecAbstract = function (R, S) {
      var exec = R.exec;

      if (isCallable(exec)) {
        var result = functionCall(exec, R, S);
        if (result !== null) anObject(result);
        return result;
      }

      if (classofRaw(R) === 'RegExp') return functionCall(regexpExec, R, S);
      throw TypeError$1('RegExp#exec called on incompatible receiver');
    };

    // @@match logic


    fixRegexpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
      return [// `String.prototype.match` method
      // https://tc39.es/ecma262/#sec-string.prototype.match
      function match(regexp) {
        var O = requireObjectCoercible(this);
        var matcher = regexp == undefined ? undefined : getMethod(regexp, MATCH);
        return matcher ? functionCall(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString_1(O));
      }, // `RegExp.prototype[@@match]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
      function (string) {
        var rx = anObject(this);
        var S = toString_1(string);
        var res = maybeCallNative(nativeMatch, rx, S);
        if (res.done) return res.value;
        if (!rx.global) return regexpExecAbstract(rx, S);
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
        var A = [];
        var n = 0;
        var result;

        while ((result = regexpExecAbstract(rx, S)) !== null) {
          var matchStr = toString_1(result[0]);
          A[n] = matchStr;
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
          n++;
        }

        return n === 0 ? null : A;
      }];
    });

    var FunctionPrototype = Function.prototype;
    var apply = FunctionPrototype.apply;
    var bind = FunctionPrototype.bind;
    var call = FunctionPrototype.call; // eslint-disable-next-line es/no-reflect -- safe

    var functionApply = typeof Reflect == 'object' && Reflect.apply || (bind ? call.bind(apply) : function () {
      return call.apply(apply, arguments);
    });

    var floor = Math.floor;
    var charAt = functionUncurryThis(''.charAt);
    var replace = functionUncurryThis(''.replace);
    var stringSlice$1 = functionUncurryThis(''.slice);
    var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
    var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g; // `GetSubstitution` abstract operation
    // https://tc39.es/ecma262/#sec-getsubstitution

    var getSubstitution = function (matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

      if (namedCaptures !== undefined) {
        namedCaptures = toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }

      return replace(replacement, symbols, function (match, ch) {
        var capture;

        switch (charAt(ch, 0)) {
          case '$':
            return '$';

          case '&':
            return matched;

          case '`':
            return stringSlice$1(str, 0, position);

          case "'":
            return stringSlice$1(str, tailPos);

          case '<':
            capture = namedCaptures[stringSlice$1(ch, 1, -1)];
            break;

          default:
            // \d\d?
            var n = +ch;
            if (n === 0) return match;

            if (n > m) {
              var f = floor(n / 10);
              if (f === 0) return match;
              if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
              return match;
            }

            capture = captures[n - 1];
        }

        return capture === undefined ? '' : capture;
      });
    };

    var REPLACE = wellKnownSymbol('replace');
    var max = Math.max;
    var min = Math.min;
    var concat = functionUncurryThis([].concat);
    var push = functionUncurryThis([].push);
    var stringIndexOf = functionUncurryThis(''.indexOf);
    var stringSlice = functionUncurryThis(''.slice);

    var maybeToString = function (it) {
      return it === undefined ? it : String(it);
    }; // IE <= 11 replaces $0 with the whole match, as if it was $&
    // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0


    var REPLACE_KEEPS_$0 = function () {
      // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
      return 'a'.replace(/./, '$0') === '$0';
    }(); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string


    var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
      if (/./[REPLACE]) {
        return /./[REPLACE]('a', '$0') === '';
      }

      return false;
    }();

    var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
      var re = /./;

      re.exec = function () {
        var result = [];
        result.groups = {
          a: '7'
        };
        return result;
      }; // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive


      return ''.replace(re, '$<a>') !== '7';
    }); // @@replace logic

    fixRegexpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
      var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
      return [// `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible(this);
        var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
        return replacer ? functionCall(replacer, searchValue, O, replaceValue) : functionCall(nativeReplace, toString_1(O), searchValue, replaceValue);
      }, // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (string, replaceValue) {
        var rx = anObject(this);
        var S = toString_1(string);

        if (typeof replaceValue == 'string' && stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf(replaceValue, '$<') === -1) {
          var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
          if (res.done) return res.value;
        }

        var functionalReplace = isCallable(replaceValue);
        if (!functionalReplace) replaceValue = toString_1(replaceValue);
        var global = rx.global;

        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }

        var results = [];

        while (true) {
          var result = regexpExecAbstract(rx, S);
          if (result === null) break;
          push(results, result);
          if (!global) break;
          var matchStr = toString_1(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;

        for (var i = 0; i < results.length; i++) {
          result = results[i];
          var matched = toString_1(result[0]);
          var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
          var captures = []; // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

          for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));

          var namedCaptures = result.groups;

          if (functionalReplace) {
            var replacerArgs = concat([matched], captures, position, S);
            if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
            var replacement = toString_1(functionApply(replaceValue, undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }

          if (position >= nextSourcePosition) {
            accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }

        return accumulatedResult + stringSlice(S, nextSourcePosition);
      }];
    }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

    /**
     * SimpleBar.js - v5.3.6
     * Scrollbars, simpler.
     * https://grsmto.github.io/simplebar/
     *
     * Made by Adrien Denat from a fork by Jonathan Nicol
     * Under MIT License
     */

    var getOptions = function getOptions(obj) {
      var options = Array.prototype.reduce.call(obj, function (acc, attribute) {
        var option = attribute.name.match(/data-simplebar-(.+)/);

        if (option) {
          var key = option[1].replace(/\W+(.)/g, function (x, chr) {
            return chr.toUpperCase();
          });

          switch (attribute.value) {
            case 'true':
              acc[key] = true;
              break;

            case 'false':
              acc[key] = false;
              break;

            case undefined:
              acc[key] = true;
              break;

            default:
              acc[key] = attribute.value;
          }
        }

        return acc;
      }, {});
      return options;
    };

    function getElementWindow(element) {
      if (!element || !element.ownerDocument || !element.ownerDocument.defaultView) {
        return window;
      }

      return element.ownerDocument.defaultView;
    }

    function getElementDocument(element) {
      if (!element || !element.ownerDocument) {
        return document;
      }

      return element.ownerDocument;
    }

    var cachedScrollbarWidth = null;
    var cachedDevicePixelRatio = null;

    if (canUseDom) {
      window.addEventListener('resize', function () {
        if (cachedDevicePixelRatio !== window.devicePixelRatio) {
          cachedDevicePixelRatio = window.devicePixelRatio;
          cachedScrollbarWidth = null;
        }
      });
    }

    function scrollbarWidth(el) {
      if (cachedScrollbarWidth === null) {
        var document = getElementDocument(el);

        if (typeof document === 'undefined') {
          cachedScrollbarWidth = 0;
          return cachedScrollbarWidth;
        }

        var body = document.body;
        var box = document.createElement('div');
        box.classList.add('simplebar-hide-scrollbar');
        body.appendChild(box);
        var width = box.getBoundingClientRect().right;
        body.removeChild(box);
        cachedScrollbarWidth = width;
      }

      return cachedScrollbarWidth;
    }

    var SimpleBar = /*#__PURE__*/function () {
      function SimpleBar(element, options) {
        var _this = this;

        this.onScroll = function () {
          var elWindow = getElementWindow(_this.el);

          if (!_this.scrollXTicking) {
            elWindow.requestAnimationFrame(_this.scrollX);
            _this.scrollXTicking = true;
          }

          if (!_this.scrollYTicking) {
            elWindow.requestAnimationFrame(_this.scrollY);
            _this.scrollYTicking = true;
          }
        };

        this.scrollX = function () {
          if (_this.axis.x.isOverflowing) {
            _this.showScrollbar('x');

            _this.positionScrollbar('x');
          }

          _this.scrollXTicking = false;
        };

        this.scrollY = function () {
          if (_this.axis.y.isOverflowing) {
            _this.showScrollbar('y');

            _this.positionScrollbar('y');
          }

          _this.scrollYTicking = false;
        };

        this.onMouseEnter = function () {
          _this.showScrollbar('x');

          _this.showScrollbar('y');
        };

        this.onMouseMove = function (e) {
          _this.mouseX = e.clientX;
          _this.mouseY = e.clientY;

          if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
            _this.onMouseMoveForAxis('x');
          }

          if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
            _this.onMouseMoveForAxis('y');
          }
        };

        this.onMouseLeave = function () {
          _this.onMouseMove.cancel();

          if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
            _this.onMouseLeaveForAxis('x');
          }

          if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
            _this.onMouseLeaveForAxis('y');
          }

          _this.mouseX = -1;
          _this.mouseY = -1;
        };

        this.onWindowResize = function () {
          // Recalculate scrollbarWidth in case it's a zoom
          _this.scrollbarWidth = _this.getScrollbarWidth();

          _this.hideNativeScrollbar();
        };

        this.hideScrollbars = function () {
          _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
          _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();

          if (!_this.isWithinBounds(_this.axis.y.track.rect)) {
            _this.axis.y.scrollbar.el.classList.remove(_this.classNames.visible);

            _this.axis.y.isVisible = false;
          }

          if (!_this.isWithinBounds(_this.axis.x.track.rect)) {
            _this.axis.x.scrollbar.el.classList.remove(_this.classNames.visible);

            _this.axis.x.isVisible = false;
          }
        };

        this.onPointerEvent = function (e) {
          var isWithinTrackXBounds, isWithinTrackYBounds;
          _this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
          _this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();

          if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
            isWithinTrackXBounds = _this.isWithinBounds(_this.axis.x.track.rect);
          }

          if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
            isWithinTrackYBounds = _this.isWithinBounds(_this.axis.y.track.rect);
          } // If any pointer event is called on the scrollbar


          if (isWithinTrackXBounds || isWithinTrackYBounds) {
            // Preventing the event's default action stops text being
            // selectable during the drag.
            e.preventDefault(); // Prevent event leaking

            e.stopPropagation();

            if (e.type === 'mousedown') {
              if (isWithinTrackXBounds) {
                _this.axis.x.scrollbar.rect = _this.axis.x.scrollbar.el.getBoundingClientRect();

                if (_this.isWithinBounds(_this.axis.x.scrollbar.rect)) {
                  _this.onDragStart(e, 'x');
                } else {
                  _this.onTrackClick(e, 'x');
                }
              }

              if (isWithinTrackYBounds) {
                _this.axis.y.scrollbar.rect = _this.axis.y.scrollbar.el.getBoundingClientRect();

                if (_this.isWithinBounds(_this.axis.y.scrollbar.rect)) {
                  _this.onDragStart(e, 'y');
                } else {
                  _this.onTrackClick(e, 'y');
                }
              }
            }
          }
        };

        this.drag = function (e) {
          var eventOffset;
          var track = _this.axis[_this.draggedAxis].track;
          var trackSize = track.rect[_this.axis[_this.draggedAxis].sizeAttr];
          var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
          var contentSize = _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollSizeAttr];
          var hostSize = parseInt(_this.elStyles[_this.axis[_this.draggedAxis].sizeAttr], 10);
          e.preventDefault();
          e.stopPropagation();

          if (_this.draggedAxis === 'y') {
            eventOffset = e.pageY;
          } else {
            eventOffset = e.pageX;
          } // Calculate how far the user's mouse is from the top/left of the scrollbar (minus the dragOffset).


          var dragPos = eventOffset - track.rect[_this.axis[_this.draggedAxis].offsetAttr] - _this.axis[_this.draggedAxis].dragOffset; // Convert the mouse position into a percentage of the scrollbar height/width.

          var dragPerc = dragPos / (trackSize - scrollbar.size); // Scroll the content by the same percentage.

          var scrollPos = dragPerc * (contentSize - hostSize); // Fix browsers inconsistency on RTL

          if (_this.draggedAxis === 'x') {
            scrollPos = _this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted ? scrollPos - (trackSize + scrollbar.size) : scrollPos;
            scrollPos = _this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted ? -scrollPos : scrollPos;
          }

          _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] = scrollPos;
        };

        this.onEndDrag = function (e) {
          var elDocument = getElementDocument(_this.el);
          var elWindow = getElementWindow(_this.el);
          e.preventDefault();
          e.stopPropagation();

          _this.el.classList.remove(_this.classNames.dragging);

          elDocument.removeEventListener('mousemove', _this.drag, true);
          elDocument.removeEventListener('mouseup', _this.onEndDrag, true);
          _this.removePreventClickId = elWindow.setTimeout(function () {
            // Remove these asynchronously so we still suppress click events
            // generated simultaneously with mouseup.
            elDocument.removeEventListener('click', _this.preventClick, true);
            elDocument.removeEventListener('dblclick', _this.preventClick, true);
            _this.removePreventClickId = null;
          });
        };

        this.preventClick = function (e) {
          e.preventDefault();
          e.stopPropagation();
        };

        this.el = element;
        this.minScrollbarWidth = 20;
        this.options = Object.assign({}, SimpleBar.defaultOptions, {}, options);
        this.classNames = Object.assign({}, SimpleBar.defaultOptions.classNames, {}, this.options.classNames);
        this.axis = {
          x: {
            scrollOffsetAttr: 'scrollLeft',
            sizeAttr: 'width',
            scrollSizeAttr: 'scrollWidth',
            offsetSizeAttr: 'offsetWidth',
            offsetAttr: 'left',
            overflowAttr: 'overflowX',
            dragOffset: 0,
            isOverflowing: true,
            isVisible: false,
            forceVisible: false,
            track: {},
            scrollbar: {}
          },
          y: {
            scrollOffsetAttr: 'scrollTop',
            sizeAttr: 'height',
            scrollSizeAttr: 'scrollHeight',
            offsetSizeAttr: 'offsetHeight',
            offsetAttr: 'top',
            overflowAttr: 'overflowY',
            dragOffset: 0,
            isOverflowing: true,
            isVisible: false,
            forceVisible: false,
            track: {},
            scrollbar: {}
          }
        };
        this.removePreventClickId = null; // Don't re-instantiate over an existing one

        if (SimpleBar.instances.has(this.el)) {
          return;
        }

        this.recalculate = lodash_throttle(this.recalculate.bind(this), 64);
        this.onMouseMove = lodash_throttle(this.onMouseMove.bind(this), 64);
        this.hideScrollbars = lodash_debounce(this.hideScrollbars.bind(this), this.options.timeout);
        this.onWindowResize = lodash_debounce(this.onWindowResize.bind(this), 64, {
          leading: true
        });
        SimpleBar.getRtlHelpers = lodash_memoize(SimpleBar.getRtlHelpers);
        this.init();
      }
      /**
       * Static properties
       */

      /**
       * Helper to fix browsers inconsistency on RTL:
       *  - Firefox inverts the scrollbar initial position
       *  - IE11 inverts both scrollbar position and scrolling offset
       * Directly inspired by @KingSora's OverlayScrollbars https://github.com/KingSora/OverlayScrollbars/blob/master/js/OverlayScrollbars.js#L1634
       */


      SimpleBar.getRtlHelpers = function getRtlHelpers() {
        var dummyDiv = document.createElement('div');
        dummyDiv.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
        var scrollbarDummyEl = dummyDiv.firstElementChild;
        document.body.appendChild(scrollbarDummyEl);
        var dummyContainerChild = scrollbarDummyEl.firstElementChild;
        scrollbarDummyEl.scrollLeft = 0;
        var dummyContainerOffset = SimpleBar.getOffset(scrollbarDummyEl);
        var dummyContainerChildOffset = SimpleBar.getOffset(dummyContainerChild);
        scrollbarDummyEl.scrollLeft = 999;
        var dummyContainerScrollOffsetAfterScroll = SimpleBar.getOffset(dummyContainerChild);
        return {
          // determines if the scrolling is responding with negative values
          isRtlScrollingInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left && dummyContainerChildOffset.left - dummyContainerScrollOffsetAfterScroll.left !== 0,
          // determines if the origin scrollbar position is inverted or not (positioned on left or right)
          isRtlScrollbarInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left
        };
      };

      SimpleBar.getOffset = function getOffset(el) {
        var rect = el.getBoundingClientRect();
        var elDocument = getElementDocument(el);
        var elWindow = getElementWindow(el);
        return {
          top: rect.top + (elWindow.pageYOffset || elDocument.documentElement.scrollTop),
          left: rect.left + (elWindow.pageXOffset || elDocument.documentElement.scrollLeft)
        };
      };

      var _proto = SimpleBar.prototype;

      _proto.init = function init() {
        // Save a reference to the instance, so we know this DOM node has already been instancied
        SimpleBar.instances.set(this.el, this); // We stop here on server-side

        if (canUseDom) {
          this.initDOM();
          this.setAccessibilityAttributes();
          this.scrollbarWidth = this.getScrollbarWidth();
          this.recalculate();
          this.initListeners();
        }
      };

      _proto.initDOM = function initDOM() {
        var _this2 = this; // make sure this element doesn't have the elements yet


        if (Array.prototype.filter.call(this.el.children, function (child) {
          return child.classList.contains(_this2.classNames.wrapper);
        }).length) {
          // assume that element has his DOM already initiated
          this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper);
          this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper);
          this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl);
          this.offsetEl = this.el.querySelector("." + this.classNames.offset);
          this.maskEl = this.el.querySelector("." + this.classNames.mask);
          this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder);
          this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl);
          this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl);
          this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal);
          this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
        } else {
          // Prepare DOM
          this.wrapperEl = document.createElement('div');
          this.contentWrapperEl = document.createElement('div');
          this.offsetEl = document.createElement('div');
          this.maskEl = document.createElement('div');
          this.contentEl = document.createElement('div');
          this.placeholderEl = document.createElement('div');
          this.heightAutoObserverWrapperEl = document.createElement('div');
          this.heightAutoObserverEl = document.createElement('div');
          this.wrapperEl.classList.add(this.classNames.wrapper);
          this.contentWrapperEl.classList.add(this.classNames.contentWrapper);
          this.offsetEl.classList.add(this.classNames.offset);
          this.maskEl.classList.add(this.classNames.mask);
          this.contentEl.classList.add(this.classNames.contentEl);
          this.placeholderEl.classList.add(this.classNames.placeholder);
          this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl);
          this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);

          while (this.el.firstChild) {
            this.contentEl.appendChild(this.el.firstChild);
          }

          this.contentWrapperEl.appendChild(this.contentEl);
          this.offsetEl.appendChild(this.contentWrapperEl);
          this.maskEl.appendChild(this.offsetEl);
          this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl);
          this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl);
          this.wrapperEl.appendChild(this.maskEl);
          this.wrapperEl.appendChild(this.placeholderEl);
          this.el.appendChild(this.wrapperEl);
        }

        if (!this.axis.x.track.el || !this.axis.y.track.el) {
          var track = document.createElement('div');
          var scrollbar = document.createElement('div');
          track.classList.add(this.classNames.track);
          scrollbar.classList.add(this.classNames.scrollbar);
          track.appendChild(scrollbar);
          this.axis.x.track.el = track.cloneNode(true);
          this.axis.x.track.el.classList.add(this.classNames.horizontal);
          this.axis.y.track.el = track.cloneNode(true);
          this.axis.y.track.el.classList.add(this.classNames.vertical);
          this.el.appendChild(this.axis.x.track.el);
          this.el.appendChild(this.axis.y.track.el);
        }

        this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar);
        this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar);

        if (!this.options.autoHide) {
          this.axis.x.scrollbar.el.classList.add(this.classNames.visible);
          this.axis.y.scrollbar.el.classList.add(this.classNames.visible);
        }

        this.el.setAttribute('data-simplebar', 'init');
      };

      _proto.setAccessibilityAttributes = function setAccessibilityAttributes() {
        var ariaLabel = this.options.ariaLabel || 'scrollable content';
        this.contentWrapperEl.setAttribute('tabindex', '0');
        this.contentWrapperEl.setAttribute('role', 'region');
        this.contentWrapperEl.setAttribute('aria-label', ariaLabel);
      };

      _proto.initListeners = function initListeners() {
        var _this3 = this;

        var elWindow = getElementWindow(this.el); // Event listeners

        if (this.options.autoHide) {
          this.el.addEventListener('mouseenter', this.onMouseEnter);
        }

        ['mousedown', 'click', 'dblclick'].forEach(function (e) {
          _this3.el.addEventListener(e, _this3.onPointerEvent, true);
        });
        ['touchstart', 'touchend', 'touchmove'].forEach(function (e) {
          _this3.el.addEventListener(e, _this3.onPointerEvent, {
            capture: true,
            passive: true
          });
        });
        this.el.addEventListener('mousemove', this.onMouseMove);
        this.el.addEventListener('mouseleave', this.onMouseLeave);
        this.contentWrapperEl.addEventListener('scroll', this.onScroll); // Browser zoom triggers a window resize

        elWindow.addEventListener('resize', this.onWindowResize); // Hack for https://github.com/WICG/ResizeObserver/issues/38

        var resizeObserverStarted = false;
        var resizeObserver = elWindow.ResizeObserver || ResizeObserver$1;
        this.resizeObserver = new resizeObserver(function () {
          if (!resizeObserverStarted) return;

          _this3.recalculate();
        });
        this.resizeObserver.observe(this.el);
        this.resizeObserver.observe(this.contentEl);
        elWindow.requestAnimationFrame(function () {
          resizeObserverStarted = true;
        }); // This is required to detect horizontal scroll. Vertical scroll only needs the resizeObserver.

        this.mutationObserver = new elWindow.MutationObserver(this.recalculate);
        this.mutationObserver.observe(this.contentEl, {
          childList: true,
          subtree: true,
          characterData: true
        });
      };

      _proto.recalculate = function recalculate() {
        var elWindow = getElementWindow(this.el);
        this.elStyles = elWindow.getComputedStyle(this.el);
        this.isRtl = this.elStyles.direction === 'rtl';
        var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
        var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1;
        var contentElOffsetWidth = this.contentEl.offsetWidth;
        var contentWrapperElOffsetWidth = this.contentWrapperEl.offsetWidth;
        var elOverflowX = this.elStyles.overflowX;
        var elOverflowY = this.elStyles.overflowY;
        this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft;
        this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
        var contentElScrollHeight = this.contentEl.scrollHeight;
        var contentElScrollWidth = this.contentEl.scrollWidth;
        this.contentWrapperEl.style.height = isHeightAuto ? 'auto' : '100%'; // Determine placeholder size

        this.placeholderEl.style.width = isWidthAuto ? contentElOffsetWidth + "px" : 'auto';
        this.placeholderEl.style.height = contentElScrollHeight + "px";
        var contentWrapperElOffsetHeight = this.contentWrapperEl.offsetHeight;
        this.axis.x.isOverflowing = contentElScrollWidth > contentElOffsetWidth;
        this.axis.y.isOverflowing = contentElScrollHeight > contentWrapperElOffsetHeight; // Set isOverflowing to false if user explicitely set hidden overflow

        this.axis.x.isOverflowing = elOverflowX === 'hidden' ? false : this.axis.x.isOverflowing;
        this.axis.y.isOverflowing = elOverflowY === 'hidden' ? false : this.axis.y.isOverflowing;
        this.axis.x.forceVisible = this.options.forceVisible === 'x' || this.options.forceVisible === true;
        this.axis.y.forceVisible = this.options.forceVisible === 'y' || this.options.forceVisible === true;
        this.hideNativeScrollbar(); // Set isOverflowing to false if scrollbar is not necessary (content is shorter than offset)

        var offsetForXScrollbar = this.axis.x.isOverflowing ? this.scrollbarWidth : 0;
        var offsetForYScrollbar = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
        this.axis.x.isOverflowing = this.axis.x.isOverflowing && contentElScrollWidth > contentWrapperElOffsetWidth - offsetForYScrollbar;
        this.axis.y.isOverflowing = this.axis.y.isOverflowing && contentElScrollHeight > contentWrapperElOffsetHeight - offsetForXScrollbar;
        this.axis.x.scrollbar.size = this.getScrollbarSize('x');
        this.axis.y.scrollbar.size = this.getScrollbarSize('y');
        this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px";
        this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px";
        this.positionScrollbar('x');
        this.positionScrollbar('y');
        this.toggleTrackVisibility('x');
        this.toggleTrackVisibility('y');
      }
      /**
       * Calculate scrollbar size
       */
      ;

      _proto.getScrollbarSize = function getScrollbarSize(axis) {
        if (axis === void 0) {
          axis = 'y';
        }

        if (!this.axis[axis].isOverflowing) {
          return 0;
        }

        var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];
        var trackSize = this.axis[axis].track.el[this.axis[axis].offsetSizeAttr];
        var scrollbarSize;
        var scrollbarRatio = trackSize / contentSize; // Calculate new height/position of drag handle.

        scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);

        if (this.options.scrollbarMaxSize) {
          scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
        }

        return scrollbarSize;
      };

      _proto.positionScrollbar = function positionScrollbar(axis) {
        if (axis === void 0) {
          axis = 'y';
        }

        if (!this.axis[axis].isOverflowing) {
          return;
        }

        var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
        var trackSize = this.axis[axis].track.el[this.axis[axis].offsetSizeAttr];
        var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
        var scrollbar = this.axis[axis].scrollbar;
        var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
        scrollOffset = axis === 'x' && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted ? -scrollOffset : scrollOffset;
        var scrollPourcent = scrollOffset / (contentSize - hostSize);
        var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
        handleOffset = axis === 'x' && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted ? handleOffset + (trackSize - scrollbar.size) : handleOffset;
        scrollbar.el.style.transform = axis === 'x' ? "translate3d(" + handleOffset + "px, 0, 0)" : "translate3d(0, " + handleOffset + "px, 0)";
      };

      _proto.toggleTrackVisibility = function toggleTrackVisibility(axis) {
        if (axis === void 0) {
          axis = 'y';
        }

        var track = this.axis[axis].track.el;
        var scrollbar = this.axis[axis].scrollbar.el;

        if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
          track.style.visibility = 'visible';
          this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'scroll';
        } else {
          track.style.visibility = 'hidden';
          this.contentWrapperEl.style[this.axis[axis].overflowAttr] = 'hidden';
        } // Even if forceVisible is enabled, scrollbar itself should be hidden


        if (this.axis[axis].isOverflowing) {
          scrollbar.style.display = 'block';
        } else {
          scrollbar.style.display = 'none';
        }
      };

      _proto.hideNativeScrollbar = function hideNativeScrollbar() {
        this.offsetEl.style[this.isRtl ? 'left' : 'right'] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
        this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
      }
      /**
       * On scroll event handling
       */
      ;

      _proto.onMouseMoveForAxis = function onMouseMoveForAxis(axis) {
        if (axis === void 0) {
          axis = 'y';
        }

        this.axis[axis].track.rect = this.axis[axis].track.el.getBoundingClientRect();
        this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
        var isWithinScrollbarBoundsX = this.isWithinBounds(this.axis[axis].scrollbar.rect);

        if (isWithinScrollbarBoundsX) {
          this.axis[axis].scrollbar.el.classList.add(this.classNames.hover);
        } else {
          this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
        }

        if (this.isWithinBounds(this.axis[axis].track.rect)) {
          this.showScrollbar(axis);
          this.axis[axis].track.el.classList.add(this.classNames.hover);
        } else {
          this.axis[axis].track.el.classList.remove(this.classNames.hover);
        }
      };

      _proto.onMouseLeaveForAxis = function onMouseLeaveForAxis(axis) {
        if (axis === void 0) {
          axis = 'y';
        }

        this.axis[axis].track.el.classList.remove(this.classNames.hover);
        this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
      };
      /**
       * Show scrollbar
       */


      _proto.showScrollbar = function showScrollbar(axis) {
        if (axis === void 0) {
          axis = 'y';
        }

        var scrollbar = this.axis[axis].scrollbar.el;

        if (!this.axis[axis].isVisible) {
          scrollbar.classList.add(this.classNames.visible);
          this.axis[axis].isVisible = true;
        }

        if (this.options.autoHide) {
          this.hideScrollbars();
        }
      }
      /**
       * Hide Scrollbar
       */
      ;
      /**
       * on scrollbar handle drag movement starts
       */


      _proto.onDragStart = function onDragStart(e, axis) {
        if (axis === void 0) {
          axis = 'y';
        }

        var elDocument = getElementDocument(this.el);
        var elWindow = getElementWindow(this.el);
        var scrollbar = this.axis[axis].scrollbar; // Measure how far the user's mouse is from the top of the scrollbar drag handle.

        var eventOffset = axis === 'y' ? e.pageY : e.pageX;
        this.axis[axis].dragOffset = eventOffset - scrollbar.rect[this.axis[axis].offsetAttr];
        this.draggedAxis = axis;
        this.el.classList.add(this.classNames.dragging);
        elDocument.addEventListener('mousemove', this.drag, true);
        elDocument.addEventListener('mouseup', this.onEndDrag, true);

        if (this.removePreventClickId === null) {
          elDocument.addEventListener('click', this.preventClick, true);
          elDocument.addEventListener('dblclick', this.preventClick, true);
        } else {
          elWindow.clearTimeout(this.removePreventClickId);
          this.removePreventClickId = null;
        }
      }
      /**
       * Drag scrollbar handle
       */
      ;

      _proto.onTrackClick = function onTrackClick(e, axis) {
        var _this4 = this;

        if (axis === void 0) {
          axis = 'y';
        }

        if (!this.options.clickOnTrack) return;
        var elWindow = getElementWindow(this.el);
        this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
        var scrollbar = this.axis[axis].scrollbar;
        var scrollbarOffset = scrollbar.rect[this.axis[axis].offsetAttr];
        var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
        var scrolled = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
        var t = axis === 'y' ? this.mouseY - scrollbarOffset : this.mouseX - scrollbarOffset;
        var dir = t < 0 ? -1 : 1;
        var scrollSize = dir === -1 ? scrolled - hostSize : scrolled + hostSize;

        var scrollTo = function scrollTo() {
          if (dir === -1) {
            if (scrolled > scrollSize) {
              var _this4$contentWrapper;

              scrolled -= _this4.options.clickOnTrackSpeed;

              _this4.contentWrapperEl.scrollTo((_this4$contentWrapper = {}, _this4$contentWrapper[_this4.axis[axis].offsetAttr] = scrolled, _this4$contentWrapper));

              elWindow.requestAnimationFrame(scrollTo);
            }
          } else {
            if (scrolled < scrollSize) {
              var _this4$contentWrapper2;

              scrolled += _this4.options.clickOnTrackSpeed;

              _this4.contentWrapperEl.scrollTo((_this4$contentWrapper2 = {}, _this4$contentWrapper2[_this4.axis[axis].offsetAttr] = scrolled, _this4$contentWrapper2));

              elWindow.requestAnimationFrame(scrollTo);
            }
          }
        };

        scrollTo();
      }
      /**
       * Getter for content element
       */
      ;

      _proto.getContentElement = function getContentElement() {
        return this.contentEl;
      }
      /**
       * Getter for original scrolling element
       */
      ;

      _proto.getScrollElement = function getScrollElement() {
        return this.contentWrapperEl;
      };

      _proto.getScrollbarWidth = function getScrollbarWidth() {
        // Try/catch for FF 56 throwing on undefined computedStyles
        try {
          // Detect browsers supporting CSS scrollbar styling and do not calculate
          if (getComputedStyle(this.contentWrapperEl, '::-webkit-scrollbar').display === 'none' || 'scrollbarWidth' in document.documentElement.style || '-ms-overflow-style' in document.documentElement.style) {
            return 0;
          } else {
            return scrollbarWidth(this.el);
          }
        } catch (e) {
          return scrollbarWidth(this.el);
        }
      };

      _proto.removeListeners = function removeListeners() {
        var _this5 = this;

        var elWindow = getElementWindow(this.el); // Event listeners

        if (this.options.autoHide) {
          this.el.removeEventListener('mouseenter', this.onMouseEnter);
        }

        ['mousedown', 'click', 'dblclick'].forEach(function (e) {
          _this5.el.removeEventListener(e, _this5.onPointerEvent, true);
        });
        ['touchstart', 'touchend', 'touchmove'].forEach(function (e) {
          _this5.el.removeEventListener(e, _this5.onPointerEvent, {
            capture: true,
            passive: true
          });
        });
        this.el.removeEventListener('mousemove', this.onMouseMove);
        this.el.removeEventListener('mouseleave', this.onMouseLeave);

        if (this.contentWrapperEl) {
          this.contentWrapperEl.removeEventListener('scroll', this.onScroll);
        }

        elWindow.removeEventListener('resize', this.onWindowResize);

        if (this.mutationObserver) {
          this.mutationObserver.disconnect();
        }

        if (this.resizeObserver) {
          this.resizeObserver.disconnect();
        } // Cancel all debounced functions


        this.recalculate.cancel();
        this.onMouseMove.cancel();
        this.hideScrollbars.cancel();
        this.onWindowResize.cancel();
      }
      /**
       * UnMount mutation observer and delete SimpleBar instance from DOM element
       */
      ;

      _proto.unMount = function unMount() {
        this.removeListeners();
        SimpleBar.instances.delete(this.el);
      }
      /**
       * Check if mouse is within bounds
       */
      ;

      _proto.isWithinBounds = function isWithinBounds(bbox) {
        return this.mouseX >= bbox.left && this.mouseX <= bbox.left + bbox.width && this.mouseY >= bbox.top && this.mouseY <= bbox.top + bbox.height;
      }
      /**
       * Find element children matches query
       */
      ;

      _proto.findChild = function findChild(el, query) {
        var matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
        return Array.prototype.filter.call(el.children, function (child) {
          return matches.call(child, query);
        })[0];
      };

      return SimpleBar;
    }();

    SimpleBar.defaultOptions = {
      autoHide: true,
      forceVisible: false,
      clickOnTrack: true,
      clickOnTrackSpeed: 40,
      classNames: {
        contentEl: 'simplebar-content',
        contentWrapper: 'simplebar-content-wrapper',
        offset: 'simplebar-offset',
        mask: 'simplebar-mask',
        wrapper: 'simplebar-wrapper',
        placeholder: 'simplebar-placeholder',
        scrollbar: 'simplebar-scrollbar',
        track: 'simplebar-track',
        heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
        heightAutoObserverEl: 'simplebar-height-auto-observer',
        visible: 'simplebar-visible',
        horizontal: 'simplebar-horizontal',
        vertical: 'simplebar-vertical',
        hover: 'simplebar-hover',
        dragging: 'simplebar-dragging'
      },
      scrollbarMinSize: 25,
      scrollbarMaxSize: 0,
      timeout: 1000
    };
    SimpleBar.instances = new WeakMap();

    SimpleBar.initDOMLoadedElements = function () {
      document.removeEventListener('DOMContentLoaded', this.initDOMLoadedElements);
      window.removeEventListener('load', this.initDOMLoadedElements);
      Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]'), function (el) {
        if (el.getAttribute('data-simplebar') !== 'init' && !SimpleBar.instances.has(el)) new SimpleBar(el, getOptions(el.attributes));
      });
    };

    SimpleBar.removeObserver = function () {
      this.globalObserver.disconnect();
    };

    SimpleBar.initHtmlApi = function () {
      this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this); // MutationObserver is IE11+

      if (typeof MutationObserver !== 'undefined') {
        // Mutation observer to observe dynamically added elements
        this.globalObserver = new MutationObserver(SimpleBar.handleMutations);
        this.globalObserver.observe(document, {
          childList: true,
          subtree: true
        });
      } // Taken from jQuery `ready` function
      // Instantiate elements already present on the page


      if (document.readyState === 'complete' || document.readyState !== 'loading' && !document.documentElement.doScroll) {
        // Handle it asynchronously to allow scripts the opportunity to delay init
        window.setTimeout(this.initDOMLoadedElements);
      } else {
        document.addEventListener('DOMContentLoaded', this.initDOMLoadedElements);
        window.addEventListener('load', this.initDOMLoadedElements);
      }
    };

    SimpleBar.handleMutations = function (mutations) {
      mutations.forEach(function (mutation) {
        Array.prototype.forEach.call(mutation.addedNodes, function (addedNode) {
          if (addedNode.nodeType === 1) {
            if (addedNode.hasAttribute('data-simplebar')) {
              !SimpleBar.instances.has(addedNode) && document.documentElement.contains(addedNode) && new SimpleBar(addedNode, getOptions(addedNode.attributes));
            } else {
              Array.prototype.forEach.call(addedNode.querySelectorAll('[data-simplebar]'), function (el) {
                if (el.getAttribute('data-simplebar') !== 'init' && !SimpleBar.instances.has(el) && document.documentElement.contains(el)) new SimpleBar(el, getOptions(el.attributes));
              });
            }
          }
        });
        Array.prototype.forEach.call(mutation.removedNodes, function (removedNode) {
          if (removedNode.nodeType === 1) {
            if (removedNode.getAttribute('data-simplebar') === 'init') {
              SimpleBar.instances.has(removedNode) && !document.documentElement.contains(removedNode) && SimpleBar.instances.get(removedNode).unMount();
            } else {
              Array.prototype.forEach.call(removedNode.querySelectorAll('[data-simplebar="init"]'), function (el) {
                SimpleBar.instances.has(el) && !document.documentElement.contains(el) && SimpleBar.instances.get(el).unMount();
              });
            }
          }
        });
      });
    };

    SimpleBar.getOptions = getOptions;
    /**
     * HTML API
     * Called only in a browser env.
     */

    if (canUseDom) {
      SimpleBar.initHtmlApi();
    }

    const burger = document.querySelector(".menu__burger");
    const burgerMenuItems = document.querySelectorAll('.menu__item');
    const btnCloseBurgerMenu = document.querySelector(".menu__burger-close-btn");
    const menu = document.querySelector(".header__menu-container");
    const contactBtns = document.querySelectorAll(".js-header-button");
    const body = document.body;

    const openBurgerMenu = () => {
      menu.classList.toggle("header__menu-container_active");
      body.classList.toggle('body_fixed');
      document.addEventListener("click", checkPressOverlay);
      document.addEventListener("keydown", checkKeyPress);
    };

    const burgerMenuClose = () => {
      body.classList.remove('body_fixed');
      menu.classList.remove("header__menu-container_active");
      document.removeEventListener("keydown", burgerMenuClose);
      document.removeEventListener("click", checkPressOverlay);
    };

    const checkKeyPress = e => {
      if (e.code === "Escape") {
        burgerMenuClose();
      }
    };

    const checkPressOverlay = e => {
      if (e.target.closest(".header__overlay") && e.target.closest(".content") && !e.target.closest(".menu__burger") && !(e.target.closest(".header__menu-container") == menu)) {
        burgerMenuClose();
      }
    };

    burger.addEventListener("click", openBurgerMenu);
    btnCloseBurgerMenu.addEventListener("click", burgerMenuClose);
    contactBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        window.location.href = "#contacts";
      });
    });
    burgerMenuItems.forEach(item => {
      item.addEventListener('click', burgerMenuClose);
    });

    /**
     * SSR Window 3.0.0
     * Better handling for window object in SSR environment
     * https://github.com/nolimits4web/ssr-window
     *
     * Copyright 2020, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: November 9, 2020
     */

    /* eslint-disable no-param-reassign */
    function isObject$1(obj) {
      return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
    }

    function extend$1(target, src) {
      if (target === void 0) {
        target = {};
      }

      if (src === void 0) {
        src = {};
      }

      Object.keys(src).forEach(function (key) {
        if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {
          extend$1(target[key], src[key]);
        }
      });
    }

    var ssrDocument = {
      body: {},
      addEventListener: function () {},
      removeEventListener: function () {},
      activeElement: {
        blur: function () {},
        nodeName: ''
      },
      querySelector: function () {
        return null;
      },
      querySelectorAll: function () {
        return [];
      },
      getElementById: function () {
        return null;
      },
      createEvent: function () {
        return {
          initEvent: function () {}
        };
      },
      createElement: function () {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function () {},
          getElementsByTagName: function () {
            return [];
          }
        };
      },
      createElementNS: function () {
        return {};
      },
      importNode: function () {
        return null;
      },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
      }
    };

    function getDocument() {
      var doc = typeof document !== 'undefined' ? document : {};
      extend$1(doc, ssrDocument);
      return doc;
    }

    var ssrWindow = {
      document: ssrDocument,
      navigator: {
        userAgent: ''
      },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
      },
      history: {
        replaceState: function () {},
        pushState: function () {},
        go: function () {},
        back: function () {}
      },
      CustomEvent: function CustomEvent() {
        return this;
      },
      addEventListener: function () {},
      removeEventListener: function () {},
      getComputedStyle: function () {
        return {
          getPropertyValue: function () {
            return '';
          }
        };
      },
      Image: function () {},
      Date: function () {},
      screen: {},
      setTimeout: function () {},
      clearTimeout: function () {},
      matchMedia: function () {
        return {};
      },
      requestAnimationFrame: function (callback) {
        if (typeof setTimeout === 'undefined') {
          callback();
          return null;
        }

        return setTimeout(callback, 0);
      },
      cancelAnimationFrame: function (id) {
        if (typeof setTimeout === 'undefined') {
          return;
        }

        clearTimeout(id);
      }
    };

    function getWindow() {
      var win = typeof window !== 'undefined' ? window : {};
      extend$1(win, ssrWindow);
      return win;
    }

    /**
     * Dom7 3.0.0
     * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
     * https://framework7.io/docs/dom7.html
     *
     * Copyright 2020, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: November 9, 2020
     */

    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;

      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }

    function _construct(Parent, args, Class) {
      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct(Parent, args, Class) {
          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) _setPrototypeOf(instance, Class.prototype);
          return instance;
        };
      }

      return _construct.apply(null, arguments);
    }

    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }

    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : undefined;

      _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;

        if (typeof Class !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }

        if (typeof _cache !== "undefined") {
          if (_cache.has(Class)) return _cache.get(Class);

          _cache.set(Class, Wrapper);
        }

        function Wrapper() {
          return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }

        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class);
      };

      return _wrapNativeSuper(Class);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }
    /* eslint-disable no-proto */


    function makeReactive(obj) {
      var proto = obj.__proto__;
      Object.defineProperty(obj, '__proto__', {
        get: function get() {
          return proto;
        },
        set: function set(value) {
          proto.__proto__ = value;
        }
      });
    }

    var Dom7 = /*#__PURE__*/function (_Array) {
      _inheritsLoose(Dom7, _Array);

      function Dom7(items) {
        var _this;

        _this = _Array.call.apply(_Array, [this].concat(items)) || this;
        makeReactive(_assertThisInitialized(_this));
        return _this;
      }

      return Dom7;
    }( /*#__PURE__*/_wrapNativeSuper(Array));

    function arrayFlat(arr) {
      if (arr === void 0) {
        arr = [];
      }

      var res = [];
      arr.forEach(function (el) {
        if (Array.isArray(el)) {
          res.push.apply(res, arrayFlat(el));
        } else {
          res.push(el);
        }
      });
      return res;
    }

    function arrayFilter(arr, callback) {
      return Array.prototype.filter.call(arr, callback);
    }

    function arrayUnique(arr) {
      var uniqueArray = [];

      for (var i = 0; i < arr.length; i += 1) {
        if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
      }

      return uniqueArray;
    }

    function qsa(selector, context) {
      if (typeof selector !== 'string') {
        return [selector];
      }

      var a = [];
      var res = context.querySelectorAll(selector);

      for (var i = 0; i < res.length; i += 1) {
        a.push(res[i]);
      }

      return a;
    }

    function $(selector, context) {
      var window = getWindow();
      var document = getDocument();
      var arr = [];

      if (!context && selector instanceof Dom7) {
        return selector;
      }

      if (!selector) {
        return new Dom7(arr);
      }

      if (typeof selector === 'string') {
        var html = selector.trim();

        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
          var toCreate = 'div';
          if (html.indexOf('<li') === 0) toCreate = 'ul';
          if (html.indexOf('<tr') === 0) toCreate = 'tbody';
          if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
          if (html.indexOf('<tbody') === 0) toCreate = 'table';
          if (html.indexOf('<option') === 0) toCreate = 'select';
          var tempParent = document.createElement(toCreate);
          tempParent.innerHTML = html;

          for (var i = 0; i < tempParent.childNodes.length; i += 1) {
            arr.push(tempParent.childNodes[i]);
          }
        } else {
          arr = qsa(selector.trim(), context || document);
        } // arr = qsa(selector, document);

      } else if (selector.nodeType || selector === window || selector === document) {
        arr.push(selector);
      } else if (Array.isArray(selector)) {
        if (selector instanceof Dom7) return selector;
        arr = selector;
      }

      return new Dom7(arrayUnique(arr));
    }

    $.fn = Dom7.prototype;

    function addClass() {
      for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
        classes[_key] = arguments[_key];
      }

      var classNames = arrayFlat(classes.map(function (c) {
        return c.split(' ');
      }));
      this.forEach(function (el) {
        var _el$classList;

        (_el$classList = el.classList).add.apply(_el$classList, classNames);
      });
      return this;
    }

    function removeClass() {
      for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        classes[_key2] = arguments[_key2];
      }

      var classNames = arrayFlat(classes.map(function (c) {
        return c.split(' ');
      }));
      this.forEach(function (el) {
        var _el$classList2;

        (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
      });
      return this;
    }

    function toggleClass() {
      for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        classes[_key3] = arguments[_key3];
      }

      var classNames = arrayFlat(classes.map(function (c) {
        return c.split(' ');
      }));
      this.forEach(function (el) {
        classNames.forEach(function (className) {
          el.classList.toggle(className);
        });
      });
    }

    function hasClass() {
      for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        classes[_key4] = arguments[_key4];
      }

      var classNames = arrayFlat(classes.map(function (c) {
        return c.split(' ');
      }));
      return arrayFilter(this, function (el) {
        return classNames.filter(function (className) {
          return el.classList.contains(className);
        }).length > 0;
      }).length > 0;
    }

    function attr(attrs, value) {
      if (arguments.length === 1 && typeof attrs === 'string') {
        // Get attr
        if (this[0]) return this[0].getAttribute(attrs);
        return undefined;
      } // Set attrs


      for (var i = 0; i < this.length; i += 1) {
        if (arguments.length === 2) {
          // String
          this[i].setAttribute(attrs, value);
        } else {
          // Object
          for (var attrName in attrs) {
            this[i][attrName] = attrs[attrName];
            this[i].setAttribute(attrName, attrs[attrName]);
          }
        }
      }

      return this;
    }

    function removeAttr(attr) {
      for (var i = 0; i < this.length; i += 1) {
        this[i].removeAttribute(attr);
      }

      return this;
    }

    function transform(transform) {
      for (var i = 0; i < this.length; i += 1) {
        this[i].style.transform = transform;
      }

      return this;
    }

    function transition$1(duration) {
      for (var i = 0; i < this.length; i += 1) {
        this[i].style.transitionDuration = typeof duration !== 'string' ? duration + "ms" : duration;
      }

      return this;
    }

    function on() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      var eventType = args[0],
          targetSelector = args[1],
          listener = args[2],
          capture = args[3];

      if (typeof args[1] === 'function') {
        eventType = args[0];
        listener = args[1];
        capture = args[2];
        targetSelector = undefined;
      }

      if (!capture) capture = false;

      function handleLiveEvent(e) {
        var target = e.target;
        if (!target) return;
        var eventData = e.target.dom7EventData || [];

        if (eventData.indexOf(e) < 0) {
          eventData.unshift(e);
        }

        if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
          var _parents = $(target).parents(); // eslint-disable-line


          for (var k = 0; k < _parents.length; k += 1) {
            if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
          }
        }
      }

      function handleEvent(e) {
        var eventData = e && e.target ? e.target.dom7EventData || [] : [];

        if (eventData.indexOf(e) < 0) {
          eventData.unshift(e);
        }

        listener.apply(this, eventData);
      }

      var events = eventType.split(' ');
      var j;

      for (var i = 0; i < this.length; i += 1) {
        var el = this[i];

        if (!targetSelector) {
          for (j = 0; j < events.length; j += 1) {
            var event = events[j];
            if (!el.dom7Listeners) el.dom7Listeners = {};
            if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
            el.dom7Listeners[event].push({
              listener: listener,
              proxyListener: handleEvent
            });
            el.addEventListener(event, handleEvent, capture);
          }
        } else {
          // Live events
          for (j = 0; j < events.length; j += 1) {
            var _event = events[j];
            if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
            if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

            el.dom7LiveListeners[_event].push({
              listener: listener,
              proxyListener: handleLiveEvent
            });

            el.addEventListener(_event, handleLiveEvent, capture);
          }
        }
      }

      return this;
    }

    function off() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      var eventType = args[0],
          targetSelector = args[1],
          listener = args[2],
          capture = args[3];

      if (typeof args[1] === 'function') {
        eventType = args[0];
        listener = args[1];
        capture = args[2];
        targetSelector = undefined;
      }

      if (!capture) capture = false;
      var events = eventType.split(' ');

      for (var i = 0; i < events.length; i += 1) {
        var event = events[i];

        for (var j = 0; j < this.length; j += 1) {
          var el = this[j];
          var handlers = void 0;

          if (!targetSelector && el.dom7Listeners) {
            handlers = el.dom7Listeners[event];
          } else if (targetSelector && el.dom7LiveListeners) {
            handlers = el.dom7LiveListeners[event];
          }

          if (handlers && handlers.length) {
            for (var k = handlers.length - 1; k >= 0; k -= 1) {
              var handler = handlers[k];

              if (listener && handler.listener === listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              } else if (!listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              }
            }
          }
        }
      }

      return this;
    }

    function trigger() {
      var window = getWindow();

      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }

      var events = args[0].split(' ');
      var eventData = args[1];

      for (var i = 0; i < events.length; i += 1) {
        var event = events[i];

        for (var j = 0; j < this.length; j += 1) {
          var el = this[j];

          if (window.CustomEvent) {
            var evt = new window.CustomEvent(event, {
              detail: eventData,
              bubbles: true,
              cancelable: true
            });
            el.dom7EventData = args.filter(function (data, dataIndex) {
              return dataIndex > 0;
            });
            el.dispatchEvent(evt);
            el.dom7EventData = [];
            delete el.dom7EventData;
          }
        }
      }

      return this;
    }

    function transitionEnd$1(callback) {
      var dom = this;

      function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off('transitionend', fireCallBack);
      }

      if (callback) {
        dom.on('transitionend', fireCallBack);
      }

      return this;
    }

    function outerWidth(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          var _styles = this.styles();

          return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
        }

        return this[0].offsetWidth;
      }

      return null;
    }

    function outerHeight(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          var _styles2 = this.styles();

          return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
        }

        return this[0].offsetHeight;
      }

      return null;
    }

    function offset() {
      if (this.length > 0) {
        var window = getWindow();
        var document = getDocument();
        var el = this[0];
        var box = el.getBoundingClientRect();
        var body = document.body;
        var clientTop = el.clientTop || body.clientTop || 0;
        var clientLeft = el.clientLeft || body.clientLeft || 0;
        var scrollTop = el === window ? window.scrollY : el.scrollTop;
        var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
        return {
          top: box.top + scrollTop - clientTop,
          left: box.left + scrollLeft - clientLeft
        };
      }

      return null;
    }

    function styles() {
      var window = getWindow();
      if (this[0]) return window.getComputedStyle(this[0], null);
      return {};
    }

    function css(props, value) {
      var window = getWindow();
      var i;

      if (arguments.length === 1) {
        if (typeof props === 'string') {
          // .css('width')
          if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
        } else {
          // .css({ width: '100px' })
          for (i = 0; i < this.length; i += 1) {
            for (var _prop in props) {
              this[i].style[_prop] = props[_prop];
            }
          }

          return this;
        }
      }

      if (arguments.length === 2 && typeof props === 'string') {
        // .css('width', '100px')
        for (i = 0; i < this.length; i += 1) {
          this[i].style[props] = value;
        }

        return this;
      }

      return this;
    }

    function each(callback) {
      if (!callback) return this;
      this.forEach(function (el, index) {
        callback.apply(el, [el, index]);
      });
      return this;
    }

    function filter(callback) {
      var result = arrayFilter(this, callback);
      return $(result);
    }

    function html(html) {
      if (typeof html === 'undefined') {
        return this[0] ? this[0].innerHTML : null;
      }

      for (var i = 0; i < this.length; i += 1) {
        this[i].innerHTML = html;
      }

      return this;
    }

    function text(text) {
      if (typeof text === 'undefined') {
        return this[0] ? this[0].textContent.trim() : null;
      }

      for (var i = 0; i < this.length; i += 1) {
        this[i].textContent = text;
      }

      return this;
    }

    function is(selector) {
      var window = getWindow();
      var document = getDocument();
      var el = this[0];
      var compareWith;
      var i;
      if (!el || typeof selector === 'undefined') return false;

      if (typeof selector === 'string') {
        if (el.matches) return el.matches(selector);
        if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
        if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        compareWith = $(selector);

        for (i = 0; i < compareWith.length; i += 1) {
          if (compareWith[i] === el) return true;
        }

        return false;
      }

      if (selector === document) {
        return el === document;
      }

      if (selector === window) {
        return el === window;
      }

      if (selector.nodeType || selector instanceof Dom7) {
        compareWith = selector.nodeType ? [selector] : selector;

        for (i = 0; i < compareWith.length; i += 1) {
          if (compareWith[i] === el) return true;
        }

        return false;
      }

      return false;
    }

    function index() {
      var child = this[0];
      var i;

      if (child) {
        i = 0; // eslint-disable-next-line

        while ((child = child.previousSibling) !== null) {
          if (child.nodeType === 1) i += 1;
        }

        return i;
      }

      return undefined;
    }

    function eq(index) {
      if (typeof index === 'undefined') return this;
      var length = this.length;

      if (index > length - 1) {
        return $([]);
      }

      if (index < 0) {
        var returnIndex = length + index;
        if (returnIndex < 0) return $([]);
        return $([this[returnIndex]]);
      }

      return $([this[index]]);
    }

    function append() {
      var newChild;
      var document = getDocument();

      for (var k = 0; k < arguments.length; k += 1) {
        newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

        for (var i = 0; i < this.length; i += 1) {
          if (typeof newChild === 'string') {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = newChild;

            while (tempDiv.firstChild) {
              this[i].appendChild(tempDiv.firstChild);
            }
          } else if (newChild instanceof Dom7) {
            for (var j = 0; j < newChild.length; j += 1) {
              this[i].appendChild(newChild[j]);
            }
          } else {
            this[i].appendChild(newChild);
          }
        }
      }

      return this;
    }

    function prepend(newChild) {
      var document = getDocument();
      var i;
      var j;

      for (i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          var tempDiv = document.createElement('div');
          tempDiv.innerHTML = newChild;

          for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
          }
        } else if (newChild instanceof Dom7) {
          for (j = 0; j < newChild.length; j += 1) {
            this[i].insertBefore(newChild[j], this[i].childNodes[0]);
          }
        } else {
          this[i].insertBefore(newChild, this[i].childNodes[0]);
        }
      }

      return this;
    }

    function next(selector) {
      if (this.length > 0) {
        if (selector) {
          if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
            return $([this[0].nextElementSibling]);
          }

          return $([]);
        }

        if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
        return $([]);
      }

      return $([]);
    }

    function nextAll(selector) {
      var nextEls = [];
      var el = this[0];
      if (!el) return $([]);

      while (el.nextElementSibling) {
        var _next = el.nextElementSibling; // eslint-disable-line

        if (selector) {
          if ($(_next).is(selector)) nextEls.push(_next);
        } else nextEls.push(_next);

        el = _next;
      }

      return $(nextEls);
    }

    function prev(selector) {
      if (this.length > 0) {
        var el = this[0];

        if (selector) {
          if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
            return $([el.previousElementSibling]);
          }

          return $([]);
        }

        if (el.previousElementSibling) return $([el.previousElementSibling]);
        return $([]);
      }

      return $([]);
    }

    function prevAll(selector) {
      var prevEls = [];
      var el = this[0];
      if (!el) return $([]);

      while (el.previousElementSibling) {
        var _prev = el.previousElementSibling; // eslint-disable-line

        if (selector) {
          if ($(_prev).is(selector)) prevEls.push(_prev);
        } else prevEls.push(_prev);

        el = _prev;
      }

      return $(prevEls);
    }

    function parent(selector) {
      var parents = []; // eslint-disable-line

      for (var i = 0; i < this.length; i += 1) {
        if (this[i].parentNode !== null) {
          if (selector) {
            if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
          } else {
            parents.push(this[i].parentNode);
          }
        }
      }

      return $(parents);
    }

    function parents(selector) {
      var parents = []; // eslint-disable-line

      for (var i = 0; i < this.length; i += 1) {
        var _parent = this[i].parentNode; // eslint-disable-line

        while (_parent) {
          if (selector) {
            if ($(_parent).is(selector)) parents.push(_parent);
          } else {
            parents.push(_parent);
          }

          _parent = _parent.parentNode;
        }
      }

      return $(parents);
    }

    function closest(selector) {
      var closest = this; // eslint-disable-line

      if (typeof selector === 'undefined') {
        return $([]);
      }

      if (!closest.is(selector)) {
        closest = closest.parents(selector).eq(0);
      }

      return closest;
    }

    function find(selector) {
      var foundElements = [];

      for (var i = 0; i < this.length; i += 1) {
        var found = this[i].querySelectorAll(selector);

        for (var j = 0; j < found.length; j += 1) {
          foundElements.push(found[j]);
        }
      }

      return $(foundElements);
    }

    function children(selector) {
      var children = []; // eslint-disable-line

      for (var i = 0; i < this.length; i += 1) {
        var childNodes = this[i].children;

        for (var j = 0; j < childNodes.length; j += 1) {
          if (!selector || $(childNodes[j]).is(selector)) {
            children.push(childNodes[j]);
          }
        }
      }

      return $(children);
    }

    function remove() {
      for (var i = 0; i < this.length; i += 1) {
        if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
      }

      return this;
    }

    var Methods = {
      addClass: addClass,
      removeClass: removeClass,
      hasClass: hasClass,
      toggleClass: toggleClass,
      attr: attr,
      removeAttr: removeAttr,
      transform: transform,
      transition: transition$1,
      on: on,
      off: off,
      trigger: trigger,
      transitionEnd: transitionEnd$1,
      outerWidth: outerWidth,
      outerHeight: outerHeight,
      styles: styles,
      offset: offset,
      css: css,
      each: each,
      html: html,
      text: text,
      is: is,
      index: index,
      eq: eq,
      append: append,
      prepend: prepend,
      next: next,
      nextAll: nextAll,
      prev: prev,
      prevAll: prevAll,
      parent: parent,
      parents: parents,
      closest: closest,
      find: find,
      children: children,
      filter: filter,
      remove: remove
    };
    Object.keys(Methods).forEach(function (methodName) {
      Object.defineProperty($.fn, methodName, {
        value: Methods[methodName],
        writable: true
      });
    });

    function deleteProps(obj) {
      var object = obj;
      Object.keys(object).forEach(function (key) {
        try {
          object[key] = null;
        } catch (e) {// no getter for object
        }

        try {
          delete object[key];
        } catch (e) {// something got wrong
        }
      });
    }

    function nextTick(callback, delay) {
      if (delay === void 0) {
        delay = 0;
      }

      return setTimeout(callback, delay);
    }

    function now() {
      return Date.now();
    }

    function getComputedStyle$1(el) {
      var window = getWindow();
      var style;

      if (window.getComputedStyle) {
        style = window.getComputedStyle(el, null);
      }

      if (!style && el.currentStyle) {
        style = el.currentStyle;
      }

      if (!style) {
        style = el.style;
      }

      return style;
    }

    function getTranslate(el, axis) {
      if (axis === void 0) {
        axis = 'x';
      }

      var window = getWindow();
      var matrix;
      var curTransform;
      var transformMatrix;
      var curStyle = getComputedStyle$1(el);

      if (window.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;

        if (curTransform.split(',').length > 6) {
          curTransform = curTransform.split(', ').map(function (a) {
            return a.replace(',', '.');
          }).join(', ');
        } // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case


        transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }

      if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
      }

      if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
      }

      return curTransform || 0;
    }

    function isObject(o) {
      return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
    }

    function isNode(node) {
      // eslint-disable-next-line
      if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
        return node instanceof HTMLElement;
      }

      return node && (node.nodeType === 1 || node.nodeType === 11);
    }

    function extend() {
      var to = Object(arguments.length <= 0 ? undefined : arguments[0]);
      var noExtend = ['__proto__', 'constructor', 'prototype'];

      for (var i = 1; i < arguments.length; i += 1) {
        var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

        if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
          var keysArray = Object.keys(Object(nextSource)).filter(function (key) {
            return noExtend.indexOf(key) < 0;
          });

          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

            if (desc !== undefined && desc.enumerable) {
              if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                if (nextSource[nextKey].__swiper__) {
                  to[nextKey] = nextSource[nextKey];
                } else {
                  extend(to[nextKey], nextSource[nextKey]);
                }
              } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                to[nextKey] = {};

                if (nextSource[nextKey].__swiper__) {
                  to[nextKey] = nextSource[nextKey];
                } else {
                  extend(to[nextKey], nextSource[nextKey]);
                }
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }

      return to;
    }

    function bindModuleMethods(instance, obj) {
      Object.keys(obj).forEach(function (key) {
        if (isObject(obj[key])) {
          Object.keys(obj[key]).forEach(function (subKey) {
            if (typeof obj[key][subKey] === 'function') {
              obj[key][subKey] = obj[key][subKey].bind(instance);
            }
          });
        }

        instance[key] = obj[key];
      });
    }

    function classesToSelector(classes) {
      if (classes === void 0) {
        classes = '';
      }

      return "." + classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
      .replace(/ /g, '.');
    }

    function createElementIfNotDefined($container, params, createElements, checkProps) {
      var document = getDocument();

      if (createElements) {
        Object.keys(checkProps).forEach(function (key) {
          if (!params[key] && params.auto === true) {
            var element = document.createElement('div');
            element.className = checkProps[key];
            $container.append(element);
            params[key] = element;
          }
        });
      }

      return params;
    }

    var support;

    function calcSupport() {
      var window = getWindow();
      var document = getDocument();
      return {
        touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        pointerEvents: !!window.PointerEvent && 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints >= 0,
        observer: function checkObserver() {
          return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
        }(),
        passiveListener: function checkPassiveListener() {
          var supportsPassive = false;

          try {
            var opts = Object.defineProperty({}, 'passive', {
              // eslint-disable-next-line
              get: function get() {
                supportsPassive = true;
              }
            });
            window.addEventListener('testPassiveListener', null, opts);
          } catch (e) {// No support
          }

          return supportsPassive;
        }(),
        gestures: function checkGestures() {
          return 'ongesturestart' in window;
        }()
      };
    }

    function getSupport() {
      if (!support) {
        support = calcSupport();
      }

      return support;
    }

    var device;

    function calcDevice(_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          userAgent = _ref.userAgent;

      var support = getSupport();
      var window = getWindow();
      var platform = window.navigator.platform;
      var ua = userAgent || window.navigator.userAgent;
      var device = {
        ios: false,
        android: false
      };
      var screenWidth = window.screen.width;
      var screenHeight = window.screen.height;
      var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

      var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
      var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
      var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      var windows = platform === 'Win32';
      var macos = platform === 'MacIntel'; // iPadOs 13 fix

      var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

      if (!ipad && macos && support.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad) ipad = [0, 1, '13_0_0'];
        macos = false;
      } // Android


      if (android && !windows) {
        device.os = 'android';
        device.android = true;
      }

      if (ipad || iphone || ipod) {
        device.os = 'ios';
        device.ios = true;
      } // Export object


      return device;
    }

    function getDevice(overrides) {
      if (overrides === void 0) {
        overrides = {};
      }

      if (!device) {
        device = calcDevice(overrides);
      }

      return device;
    }

    var browser;

    function calcBrowser() {
      var window = getWindow();

      function isSafari() {
        var ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
      }

      return {
        isEdge: !!window.navigator.userAgent.match(/Edge/g),
        isSafari: isSafari(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
      };
    }

    function getBrowser() {
      if (!browser) {
        browser = calcBrowser();
      }

      return browser;
    }

    var supportsResizeObserver = function supportsResizeObserver() {
      var window = getWindow();
      return typeof window.ResizeObserver !== 'undefined';
    };

    var Resize = {
      name: 'resize',
      create: function create() {
        var swiper = this;
        extend(swiper, {
          resize: {
            observer: null,
            createObserver: function createObserver() {
              if (!swiper || swiper.destroyed || !swiper.initialized) return;
              swiper.resize.observer = new ResizeObserver(function (entries) {
                var width = swiper.width,
                    height = swiper.height;
                var newWidth = width;
                var newHeight = height;
                entries.forEach(function (_ref) {
                  var contentBoxSize = _ref.contentBoxSize,
                      contentRect = _ref.contentRect,
                      target = _ref.target;
                  if (target && target !== swiper.el) return;
                  newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                  newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                });

                if (newWidth !== width || newHeight !== height) {
                  swiper.resize.resizeHandler();
                }
              });
              swiper.resize.observer.observe(swiper.el);
            },
            removeObserver: function removeObserver() {
              if (swiper.resize.observer && swiper.resize.observer.unobserve && swiper.el) {
                swiper.resize.observer.unobserve(swiper.el);
                swiper.resize.observer = null;
              }
            },
            resizeHandler: function resizeHandler() {
              if (!swiper || swiper.destroyed || !swiper.initialized) return;
              swiper.emit('beforeResize');
              swiper.emit('resize');
            },
            orientationChangeHandler: function orientationChangeHandler() {
              if (!swiper || swiper.destroyed || !swiper.initialized) return;
              swiper.emit('orientationchange');
            }
          }
        });
      },
      on: {
        init: function init(swiper) {
          var window = getWindow();

          if (swiper.params.resizeObserver && supportsResizeObserver()) {
            swiper.resize.createObserver();
            return;
          } // Emit resize


          window.addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

          window.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
        },
        destroy: function destroy(swiper) {
          var window = getWindow();
          swiper.resize.removeObserver();
          window.removeEventListener('resize', swiper.resize.resizeHandler);
          window.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
        }
      }
    };

    function _extends$2() {
      _extends$2 = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends$2.apply(this, arguments);
    }
    var Observer = {
      attach: function attach(target, options) {
        if (options === void 0) {
          options = {};
        }

        var window = getWindow();
        var swiper = this;
        var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
        var observer = new ObserverFunc(function (mutations) {
          // The observerUpdate event should only be triggered
          // once despite the number of mutations.  Additional
          // triggers are redundant and are very costly
          if (mutations.length === 1) {
            swiper.emit('observerUpdate', mutations[0]);
            return;
          }

          var observerUpdate = function observerUpdate() {
            swiper.emit('observerUpdate', mutations[0]);
          };

          if (window.requestAnimationFrame) {
            window.requestAnimationFrame(observerUpdate);
          } else {
            window.setTimeout(observerUpdate, 0);
          }
        });
        observer.observe(target, {
          attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
          childList: typeof options.childList === 'undefined' ? true : options.childList,
          characterData: typeof options.characterData === 'undefined' ? true : options.characterData
        });
        swiper.observer.observers.push(observer);
      },
      init: function init() {
        var swiper = this;
        if (!swiper.support.observer || !swiper.params.observer) return;

        if (swiper.params.observeParents) {
          var containerParents = swiper.$el.parents();

          for (var i = 0; i < containerParents.length; i += 1) {
            swiper.observer.attach(containerParents[i]);
          }
        } // Observe container


        swiper.observer.attach(swiper.$el[0], {
          childList: swiper.params.observeSlideChildren
        }); // Observe wrapper

        swiper.observer.attach(swiper.$wrapperEl[0], {
          attributes: false
        });
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.observer.observers.forEach(function (observer) {
          observer.disconnect();
        });
        swiper.observer.observers = [];
      }
    };
    var Observer$1 = {
      name: 'observer',
      params: {
        observer: false,
        observeParents: false,
        observeSlideChildren: false
      },
      create: function create() {
        var swiper = this;
        bindModuleMethods(swiper, {
          observer: _extends$2({}, Observer, {
            observers: []
          })
        });
      },
      on: {
        init: function init(swiper) {
          swiper.observer.init();
        },
        destroy: function destroy(swiper) {
          swiper.observer.destroy();
        }
      }
    };

    var modular = {
      useParams: function useParams(instanceParams) {
        var instance = this;
        if (!instance.modules) return;
        Object.keys(instance.modules).forEach(function (moduleName) {
          var module = instance.modules[moduleName]; // Extend params

          if (module.params) {
            extend(instanceParams, module.params);
          }
        });
      },
      useModules: function useModules(modulesParams) {
        if (modulesParams === void 0) {
          modulesParams = {};
        }

        var instance = this;
        if (!instance.modules) return;
        Object.keys(instance.modules).forEach(function (moduleName) {
          var module = instance.modules[moduleName];
          var moduleParams = modulesParams[moduleName] || {}; // Add event listeners

          if (module.on && instance.on) {
            Object.keys(module.on).forEach(function (moduleEventName) {
              instance.on(moduleEventName, module.on[moduleEventName]);
            });
          } // Module create callback


          if (module.create) {
            module.create.bind(instance)(moduleParams);
          }
        });
      }
    };

    /* eslint-disable no-underscore-dangle */
    var eventsEmitter = {
      on: function on(events, handler, priority) {
        var self = this;
        if (typeof handler !== 'function') return self;
        var method = priority ? 'unshift' : 'push';
        events.split(' ').forEach(function (event) {
          if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
          self.eventsListeners[event][method](handler);
        });
        return self;
      },
      once: function once(events, handler, priority) {
        var self = this;
        if (typeof handler !== 'function') return self;

        function onceHandler() {
          self.off(events, onceHandler);

          if (onceHandler.__emitterProxy) {
            delete onceHandler.__emitterProxy;
          }

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          handler.apply(self, args);
        }

        onceHandler.__emitterProxy = handler;
        return self.on(events, onceHandler, priority);
      },
      onAny: function onAny(handler, priority) {
        var self = this;
        if (typeof handler !== 'function') return self;
        var method = priority ? 'unshift' : 'push';

        if (self.eventsAnyListeners.indexOf(handler) < 0) {
          self.eventsAnyListeners[method](handler);
        }

        return self;
      },
      offAny: function offAny(handler) {
        var self = this;
        if (!self.eventsAnyListeners) return self;
        var index = self.eventsAnyListeners.indexOf(handler);

        if (index >= 0) {
          self.eventsAnyListeners.splice(index, 1);
        }

        return self;
      },
      off: function off(events, handler) {
        var self = this;
        if (!self.eventsListeners) return self;
        events.split(' ').forEach(function (event) {
          if (typeof handler === 'undefined') {
            self.eventsListeners[event] = [];
          } else if (self.eventsListeners[event]) {
            self.eventsListeners[event].forEach(function (eventHandler, index) {
              if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
                self.eventsListeners[event].splice(index, 1);
              }
            });
          }
        });
        return self;
      },
      emit: function emit() {
        var self = this;
        if (!self.eventsListeners) return self;
        var events;
        var data;
        var context;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
          events = args[0];
          data = args.slice(1, args.length);
          context = self;
        } else {
          events = args[0].events;
          data = args[0].data;
          context = args[0].context || self;
        }

        data.unshift(context);
        var eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach(function (event) {
          if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
            self.eventsAnyListeners.forEach(function (eventHandler) {
              eventHandler.apply(context, [event].concat(data));
            });
          }

          if (self.eventsListeners && self.eventsListeners[event]) {
            self.eventsListeners[event].forEach(function (eventHandler) {
              eventHandler.apply(context, data);
            });
          }
        });
        return self;
      }
    };

    function updateSize() {
      var swiper = this;
      var width;
      var height;
      var $el = swiper.$el;

      if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
        width = swiper.params.width;
      } else {
        width = $el[0].clientWidth;
      }

      if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
        height = swiper.params.height;
      } else {
        height = $el[0].clientHeight;
      }

      if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
        return;
      } // Subtract paddings


      width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
      height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
      if (Number.isNaN(width)) width = 0;
      if (Number.isNaN(height)) height = 0;
      extend(swiper, {
        width: width,
        height: height,
        size: swiper.isHorizontal() ? width : height
      });
    }

    function updateSlides() {
      var swiper = this;

      function getDirectionLabel(property) {
        if (swiper.isHorizontal()) {
          return property;
        } // prettier-ignore


        return {
          'width': 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          'marginRight': 'marginBottom'
        }[property];
      }

      function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
      }

      var params = swiper.params;
      var $wrapperEl = swiper.$wrapperEl,
          swiperSize = swiper.size,
          rtl = swiper.rtlTranslate,
          wrongRTL = swiper.wrongRTL;
      var isVirtual = swiper.virtual && params.virtual.enabled;
      var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
      var slides = $wrapperEl.children("." + swiper.params.slideClass);
      var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
      var snapGrid = [];
      var slidesGrid = [];
      var slidesSizesGrid = [];
      var offsetBefore = params.slidesOffsetBefore;

      if (typeof offsetBefore === 'function') {
        offsetBefore = params.slidesOffsetBefore.call(swiper);
      }

      var offsetAfter = params.slidesOffsetAfter;

      if (typeof offsetAfter === 'function') {
        offsetAfter = params.slidesOffsetAfter.call(swiper);
      }

      var previousSnapGridLength = swiper.snapGrid.length;
      var previousSlidesGridLength = swiper.slidesGrid.length;
      var spaceBetween = params.spaceBetween;
      var slidePosition = -offsetBefore;
      var prevSlideSize = 0;
      var index = 0;

      if (typeof swiperSize === 'undefined') {
        return;
      }

      if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
        spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
      }

      swiper.virtualSize = -spaceBetween; // reset margins

      if (rtl) slides.css({
        marginLeft: '',
        marginBottom: '',
        marginTop: ''
      });else slides.css({
        marginRight: '',
        marginBottom: '',
        marginTop: ''
      });
      var slidesNumberEvenToRows;

      if (params.slidesPerColumn > 1) {
        if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
          slidesNumberEvenToRows = slidesLength;
        } else {
          slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
        }

        if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
          slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
        }
      } // Calc slides


      var slideSize;
      var slidesPerColumn = params.slidesPerColumn;
      var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
      var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);

      for (var i = 0; i < slidesLength; i += 1) {
        slideSize = 0;
        var slide = slides.eq(i);

        if (params.slidesPerColumn > 1) {
          // Set slides order
          var newSlideOrderIndex = void 0;
          var column = void 0;
          var row = void 0;

          if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
            var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
            var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
            var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
            row = Math.floor(slideIndexInGroup / columnsInGroup);
            column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
            newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
            slide.css({
              '-webkit-box-ordinal-group': newSlideOrderIndex,
              '-moz-box-ordinal-group': newSlideOrderIndex,
              '-ms-flex-order': newSlideOrderIndex,
              '-webkit-order': newSlideOrderIndex,
              order: newSlideOrderIndex
            });
          } else if (params.slidesPerColumnFill === 'column') {
            column = Math.floor(i / slidesPerColumn);
            row = i - column * slidesPerColumn;

            if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
              row += 1;

              if (row >= slidesPerColumn) {
                row = 0;
                column += 1;
              }
            }
          } else {
            row = Math.floor(i / slidesPerRow);
            column = i - row * slidesPerRow;
          }

          slide.css(getDirectionLabel('margin-top'), row !== 0 ? params.spaceBetween && params.spaceBetween + "px" : '');
        }

        if (slide.css('display') === 'none') continue; // eslint-disable-line

        if (params.slidesPerView === 'auto') {
          var slideStyles = getComputedStyle(slide[0]);
          var currentTransform = slide[0].style.transform;
          var currentWebKitTransform = slide[0].style.webkitTransform;

          if (currentTransform) {
            slide[0].style.transform = 'none';
          }

          if (currentWebKitTransform) {
            slide[0].style.webkitTransform = 'none';
          }

          if (params.roundLengths) {
            slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
          } else {
            // eslint-disable-next-line
            var width = getDirectionPropertyValue(slideStyles, 'width');
            var paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
            var paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
            var marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
            var marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
            var boxSizing = slideStyles.getPropertyValue('box-sizing');

            if (boxSizing && boxSizing === 'border-box') {
              slideSize = width + marginLeft + marginRight;
            } else {
              var _slide$ = slide[0],
                  clientWidth = _slide$.clientWidth,
                  offsetWidth = _slide$.offsetWidth;
              slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
            }
          }

          if (currentTransform) {
            slide[0].style.transform = currentTransform;
          }

          if (currentWebKitTransform) {
            slide[0].style.webkitTransform = currentWebKitTransform;
          }

          if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
          slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
          if (params.roundLengths) slideSize = Math.floor(slideSize);

          if (slides[i]) {
            slides[i].style[getDirectionLabel('width')] = slideSize + "px";
          }
        }

        if (slides[i]) {
          slides[i].swiperSlideSize = slideSize;
        }

        slidesSizesGrid.push(slideSize);

        if (params.centeredSlides) {
          slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
          if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
          if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
          if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
          if (params.roundLengths) slidePosition = Math.floor(slidePosition);
          if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
          slidesGrid.push(slidePosition);
        } else {
          if (params.roundLengths) slidePosition = Math.floor(slidePosition);
          if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
          slidesGrid.push(slidePosition);
          slidePosition = slidePosition + slideSize + spaceBetween;
        }

        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
      }

      swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
      var newSlidesGrid;

      if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
        $wrapperEl.css({
          width: swiper.virtualSize + params.spaceBetween + "px"
        });
      }

      if (params.setWrapperSize) {
        var _$wrapperEl$css;

        $wrapperEl.css((_$wrapperEl$css = {}, _$wrapperEl$css[getDirectionLabel('width')] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css));
      }

      if (params.slidesPerColumn > 1) {
        var _$wrapperEl$css2;

        swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
        swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
        $wrapperEl.css((_$wrapperEl$css2 = {}, _$wrapperEl$css2[getDirectionLabel('width')] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css2));

        if (params.centeredSlides) {
          newSlidesGrid = [];

          for (var _i = 0; _i < snapGrid.length; _i += 1) {
            var slidesGridItem = snapGrid[_i];
            if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
          }

          snapGrid = newSlidesGrid;
        }
      } // Remove last grid elements depending on width


      if (!params.centeredSlides) {
        newSlidesGrid = [];

        for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
          var _slidesGridItem = snapGrid[_i2];
          if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);

          if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
            newSlidesGrid.push(_slidesGridItem);
          }
        }

        snapGrid = newSlidesGrid;

        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
          snapGrid.push(swiper.virtualSize - swiperSize);
        }
      }

      if (snapGrid.length === 0) snapGrid = [0];

      if (params.spaceBetween !== 0) {
        var _slides$filter$css;

        var key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
        slides.filter(function (_, slideIndex) {
          if (!params.cssMode) return true;

          if (slideIndex === slides.length - 1) {
            return false;
          }

          return true;
        }).css((_slides$filter$css = {}, _slides$filter$css[key] = spaceBetween + "px", _slides$filter$css));
      }

      if (params.centeredSlides && params.centeredSlidesBounds) {
        var allSlidesSize = 0;
        slidesSizesGrid.forEach(function (slideSizeValue) {
          allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        var maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map(function (snap) {
          if (snap < 0) return -offsetBefore;
          if (snap > maxSnap) return maxSnap + offsetAfter;
          return snap;
        });
      }

      if (params.centerInsufficientSlides) {
        var _allSlidesSize = 0;
        slidesSizesGrid.forEach(function (slideSizeValue) {
          _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        _allSlidesSize -= params.spaceBetween;

        if (_allSlidesSize < swiperSize) {
          var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
          snapGrid.forEach(function (snap, snapIndex) {
            snapGrid[snapIndex] = snap - allSlidesOffset;
          });
          slidesGrid.forEach(function (snap, snapIndex) {
            slidesGrid[snapIndex] = snap + allSlidesOffset;
          });
        }
      }

      extend(swiper, {
        slides: slides,
        snapGrid: snapGrid,
        slidesGrid: slidesGrid,
        slidesSizesGrid: slidesSizesGrid
      });

      if (slidesLength !== previousSlidesLength) {
        swiper.emit('slidesLengthChange');
      }

      if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        swiper.emit('snapGridLengthChange');
      }

      if (slidesGrid.length !== previousSlidesGridLength) {
        swiper.emit('slidesGridLengthChange');
      }

      if (params.watchSlidesProgress || params.watchSlidesVisibility) {
        swiper.updateSlidesOffset();
      }
    }

    function updateAutoHeight(speed) {
      var swiper = this;
      var activeSlides = [];
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      var newHeight = 0;
      var i;

      if (typeof speed === 'number') {
        swiper.setTransition(speed);
      } else if (speed === true) {
        swiper.setTransition(swiper.params.speed);
      }

      var getSlideByIndex = function getSlideByIndex(index) {
        if (isVirtual) {
          return swiper.slides.filter(function (el) {
            return parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index;
          })[0];
        }

        return swiper.slides.eq(index)[0];
      }; // Find slides currently in view


      if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) {
          swiper.visibleSlides.each(function (slide) {
            activeSlides.push(slide);
          });
        } else {
          for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
            var index = swiper.activeIndex + i;
            if (index > swiper.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index));
          }
        }
      } else {
        activeSlides.push(getSlideByIndex(swiper.activeIndex));
      } // Find new height from highest slide in view


      for (i = 0; i < activeSlides.length; i += 1) {
        if (typeof activeSlides[i] !== 'undefined') {
          var height = activeSlides[i].offsetHeight;
          newHeight = height > newHeight ? height : newHeight;
        }
      } // Update Height


      if (newHeight) swiper.$wrapperEl.css('height', newHeight + "px");
    }

    function updateSlidesOffset() {
      var swiper = this;
      var slides = swiper.slides;

      for (var i = 0; i < slides.length; i += 1) {
        slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
      }
    }

    function updateSlidesProgress(translate) {
      if (translate === void 0) {
        translate = this && this.translate || 0;
      }

      var swiper = this;
      var params = swiper.params;
      var slides = swiper.slides,
          rtl = swiper.rtlTranslate;
      if (slides.length === 0) return;
      if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
      var offsetCenter = -translate;
      if (rtl) offsetCenter = translate; // Visible Slides

      slides.removeClass(params.slideVisibleClass);
      swiper.visibleSlidesIndexes = [];
      swiper.visibleSlides = [];

      for (var i = 0; i < slides.length; i += 1) {
        var slide = slides[i];
        var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);

        if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
          var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
          var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
          var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

          if (isVisible) {
            swiper.visibleSlides.push(slide);
            swiper.visibleSlidesIndexes.push(i);
            slides.eq(i).addClass(params.slideVisibleClass);
          }
        }

        slide.progress = rtl ? -slideProgress : slideProgress;
      }

      swiper.visibleSlides = $(swiper.visibleSlides);
    }

    function updateProgress(translate) {
      var swiper = this;

      if (typeof translate === 'undefined') {
        var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

        translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
      }

      var params = swiper.params;
      var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
      var progress = swiper.progress,
          isBeginning = swiper.isBeginning,
          isEnd = swiper.isEnd;
      var wasBeginning = isBeginning;
      var wasEnd = isEnd;

      if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
      } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        isBeginning = progress <= 0;
        isEnd = progress >= 1;
      }

      extend(swiper, {
        progress: progress,
        isBeginning: isBeginning,
        isEnd: isEnd
      });
      if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

      if (isBeginning && !wasBeginning) {
        swiper.emit('reachBeginning toEdge');
      }

      if (isEnd && !wasEnd) {
        swiper.emit('reachEnd toEdge');
      }

      if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
        swiper.emit('fromEdge');
      }

      swiper.emit('progress', progress);
    }

    function updateSlidesClasses() {
      var swiper = this;
      var slides = swiper.slides,
          params = swiper.params,
          $wrapperEl = swiper.$wrapperEl,
          activeIndex = swiper.activeIndex,
          realIndex = swiper.realIndex;
      var isVirtual = swiper.virtual && params.virtual.enabled;
      slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
      var activeSlide;

      if (isVirtual) {
        activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
      } else {
        activeSlide = slides.eq(activeIndex);
      } // Active classes


      activeSlide.addClass(params.slideActiveClass);

      if (params.loop) {
        // Duplicate to all looped slides
        if (activeSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
        } else {
          $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
        }
      } // Next Slide


      var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);

      if (params.loop && nextSlide.length === 0) {
        nextSlide = slides.eq(0);
        nextSlide.addClass(params.slideNextClass);
      } // Prev Slide


      var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);

      if (params.loop && prevSlide.length === 0) {
        prevSlide = slides.eq(-1);
        prevSlide.addClass(params.slidePrevClass);
      }

      if (params.loop) {
        // Duplicate to all looped slides
        if (nextSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
        } else {
          $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
        }

        if (prevSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
        } else {
          $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
        }
      }

      swiper.emitSlidesClasses();
    }

    function updateActiveIndex(newActiveIndex) {
      var swiper = this;
      var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
      var slidesGrid = swiper.slidesGrid,
          snapGrid = swiper.snapGrid,
          params = swiper.params,
          previousIndex = swiper.activeIndex,
          previousRealIndex = swiper.realIndex,
          previousSnapIndex = swiper.snapIndex;
      var activeIndex = newActiveIndex;
      var snapIndex;

      if (typeof activeIndex === 'undefined') {
        for (var i = 0; i < slidesGrid.length; i += 1) {
          if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
              activeIndex = i;
            } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
              activeIndex = i + 1;
            }
          } else if (translate >= slidesGrid[i]) {
            activeIndex = i;
          }
        } // Normalize slideIndex


        if (params.normalizeSlideIndex) {
          if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
        }
      }

      if (snapGrid.indexOf(translate) >= 0) {
        snapIndex = snapGrid.indexOf(translate);
      } else {
        var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
      }

      if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

      if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
          swiper.snapIndex = snapIndex;
          swiper.emit('snapIndexChange');
        }

        return;
      } // Get real index


      var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
      extend(swiper, {
        snapIndex: snapIndex,
        realIndex: realIndex,
        previousIndex: previousIndex,
        activeIndex: activeIndex
      });
      swiper.emit('activeIndexChange');
      swiper.emit('snapIndexChange');

      if (previousRealIndex !== realIndex) {
        swiper.emit('realIndexChange');
      }

      if (swiper.initialized || swiper.params.runCallbacksOnInit) {
        swiper.emit('slideChange');
      }
    }

    function updateClickedSlide(e) {
      var swiper = this;
      var params = swiper.params;
      var slide = $(e.target).closest("." + params.slideClass)[0];
      var slideFound = false;
      var slideIndex;

      if (slide) {
        for (var i = 0; i < swiper.slides.length; i += 1) {
          if (swiper.slides[i] === slide) {
            slideFound = true;
            slideIndex = i;
            break;
          }
        }
      }

      if (slide && slideFound) {
        swiper.clickedSlide = slide;

        if (swiper.virtual && swiper.params.virtual.enabled) {
          swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
        } else {
          swiper.clickedIndex = slideIndex;
        }
      } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
      }

      if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
        swiper.slideToClickedSlide();
      }
    }

    var update = {
      updateSize: updateSize,
      updateSlides: updateSlides,
      updateAutoHeight: updateAutoHeight,
      updateSlidesOffset: updateSlidesOffset,
      updateSlidesProgress: updateSlidesProgress,
      updateProgress: updateProgress,
      updateSlidesClasses: updateSlidesClasses,
      updateActiveIndex: updateActiveIndex,
      updateClickedSlide: updateClickedSlide
    };

    function getSwiperTranslate(axis) {
      if (axis === void 0) {
        axis = this.isHorizontal() ? 'x' : 'y';
      }

      var swiper = this;
      var params = swiper.params,
          rtl = swiper.rtlTranslate,
          translate = swiper.translate,
          $wrapperEl = swiper.$wrapperEl;

      if (params.virtualTranslate) {
        return rtl ? -translate : translate;
      }

      if (params.cssMode) {
        return translate;
      }

      var currentTranslate = getTranslate($wrapperEl[0], axis);
      if (rtl) currentTranslate = -currentTranslate;
      return currentTranslate || 0;
    }

    function setTranslate(translate, byController) {
      var swiper = this;
      var rtl = swiper.rtlTranslate,
          params = swiper.params,
          $wrapperEl = swiper.$wrapperEl,
          wrapperEl = swiper.wrapperEl,
          progress = swiper.progress;
      var x = 0;
      var y = 0;
      var z = 0;

      if (swiper.isHorizontal()) {
        x = rtl ? -translate : translate;
      } else {
        y = translate;
      }

      if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
      }

      if (params.cssMode) {
        wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
      } else if (!params.virtualTranslate) {
        $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
      }

      swiper.previousTranslate = swiper.translate;
      swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

      var newProgress;
      var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (translate - swiper.minTranslate()) / translatesDiff;
      }

      if (newProgress !== progress) {
        swiper.updateProgress(translate);
      }

      swiper.emit('setTranslate', swiper.translate, byController);
    }

    function minTranslate() {
      return -this.snapGrid[0];
    }

    function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    }

    function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
      if (translate === void 0) {
        translate = 0;
      }

      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      if (translateBounds === void 0) {
        translateBounds = true;
      }

      var swiper = this;
      var params = swiper.params,
          wrapperEl = swiper.wrapperEl;

      if (swiper.animating && params.preventInteractionOnTransition) {
        return false;
      }

      var minTranslate = swiper.minTranslate();
      var maxTranslate = swiper.maxTranslate();
      var newTranslate;
      if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

      swiper.updateProgress(newTranslate);

      if (params.cssMode) {
        var isH = swiper.isHorizontal();

        if (speed === 0) {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        } else {
          // eslint-disable-next-line
          if (wrapperEl.scrollTo) {
            var _wrapperEl$scrollTo;

            wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = -newTranslate, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
          } else {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
          }
        }

        return true;
      }

      if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);

        if (runCallbacks) {
          swiper.emit('beforeTransitionStart', speed, internal);
          swiper.emit('transitionEnd');
        }
      } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);

        if (runCallbacks) {
          swiper.emit('beforeTransitionStart', speed, internal);
          swiper.emit('transitionStart');
        }

        if (!swiper.animating) {
          swiper.animating = true;

          if (!swiper.onTranslateToWrapperTransitionEnd) {
            swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
              if (!swiper || swiper.destroyed) return;
              if (e.target !== this) return;
              swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
              swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
              swiper.onTranslateToWrapperTransitionEnd = null;
              delete swiper.onTranslateToWrapperTransitionEnd;

              if (runCallbacks) {
                swiper.emit('transitionEnd');
              }
            };
          }

          swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
        }
      }

      return true;
    }

    var translate = {
      getTranslate: getSwiperTranslate,
      setTranslate: setTranslate,
      minTranslate: minTranslate,
      maxTranslate: maxTranslate,
      translateTo: translateTo
    };

    function setTransition(duration, byController) {
      var swiper = this;

      if (!swiper.params.cssMode) {
        swiper.$wrapperEl.transition(duration);
      }

      swiper.emit('setTransition', duration, byController);
    }

    function transitionStart(runCallbacks, direction) {
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      var swiper = this;
      var activeIndex = swiper.activeIndex,
          params = swiper.params,
          previousIndex = swiper.previousIndex;
      if (params.cssMode) return;

      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }

      var dir = direction;

      if (!dir) {
        if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
      }

      swiper.emit('transitionStart');

      if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
          swiper.emit('slideResetTransitionStart');
          return;
        }

        swiper.emit('slideChangeTransitionStart');

        if (dir === 'next') {
          swiper.emit('slideNextTransitionStart');
        } else {
          swiper.emit('slidePrevTransitionStart');
        }
      }
    }

    function transitionEnd(runCallbacks, direction) {
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      var swiper = this;
      var activeIndex = swiper.activeIndex,
          previousIndex = swiper.previousIndex,
          params = swiper.params;
      swiper.animating = false;
      if (params.cssMode) return;
      swiper.setTransition(0);
      var dir = direction;

      if (!dir) {
        if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
      }

      swiper.emit('transitionEnd');

      if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
          swiper.emit('slideResetTransitionEnd');
          return;
        }

        swiper.emit('slideChangeTransitionEnd');

        if (dir === 'next') {
          swiper.emit('slideNextTransitionEnd');
        } else {
          swiper.emit('slidePrevTransitionEnd');
        }
      }
    }

    var transition = {
      setTransition: setTransition,
      transitionStart: transitionStart,
      transitionEnd: transitionEnd
    };

    function slideTo(index, speed, runCallbacks, internal, initial) {
      if (index === void 0) {
        index = 0;
      }

      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      if (typeof index !== 'number' && typeof index !== 'string') {
        throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof index + "] given.");
      }

      if (typeof index === 'string') {
        /**
         * The `index` argument converted from `string` to `number`.
         * @type {number}
         */
        var indexAsNumber = parseInt(index, 10);
        /**
         * Determines whether the `index` argument is a valid `number`
         * after being converted from the `string` type.
         * @type {boolean}
         */

        var isValidNumber = isFinite(indexAsNumber);

        if (!isValidNumber) {
          throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + index + "] given.");
        } // Knowing that the converted `index` is a valid number,
        // we can update the original argument's value.


        index = indexAsNumber;
      }

      var swiper = this;
      var slideIndex = index;
      if (slideIndex < 0) slideIndex = 0;
      var params = swiper.params,
          snapGrid = swiper.snapGrid,
          slidesGrid = swiper.slidesGrid,
          previousIndex = swiper.previousIndex,
          activeIndex = swiper.activeIndex,
          rtl = swiper.rtlTranslate,
          wrapperEl = swiper.wrapperEl,
          enabled = swiper.enabled;

      if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
        return false;
      }

      var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
      var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
      if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

      if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
        swiper.emit('beforeSlideChangeStart');
      }

      var translate = -snapGrid[snapIndex]; // Update progress

      swiper.updateProgress(translate); // Normalize slideIndex

      if (params.normalizeSlideIndex) {
        for (var i = 0; i < slidesGrid.length; i += 1) {
          var normalizedTranslate = -Math.floor(translate * 100);
          var normalizedGird = Math.floor(slidesGrid[i] * 100);
          var normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

          if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGird) / 2) {
              slideIndex = i;
            } else if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext) {
              slideIndex = i + 1;
            }
          } else if (normalizedTranslate >= normalizedGird) {
            slideIndex = i;
          }
        }
      } // Directions locks


      if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
          return false;
        }

        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
          if ((activeIndex || 0) !== slideIndex) return false;
        }
      }

      var direction;
      if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

      if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
        swiper.updateActiveIndex(slideIndex); // Update Height

        if (params.autoHeight) {
          swiper.updateAutoHeight();
        }

        swiper.updateSlidesClasses();

        if (params.effect !== 'slide') {
          swiper.setTranslate(translate);
        }

        if (direction !== 'reset') {
          swiper.transitionStart(runCallbacks, direction);
          swiper.transitionEnd(runCallbacks, direction);
        }

        return false;
      }

      if (params.cssMode) {
        var isH = swiper.isHorizontal();
        var t = -translate;

        if (rtl) {
          t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
        }

        if (speed === 0) {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        } else {
          // eslint-disable-next-line
          if (wrapperEl.scrollTo) {
            var _wrapperEl$scrollTo;

            wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = t, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
          } else {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
          }
        }

        return true;
      }

      if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      } else {
        swiper.setTransition(speed);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.transitionStart(runCallbacks, direction);

        if (!swiper.animating) {
          swiper.animating = true;

          if (!swiper.onSlideToWrapperTransitionEnd) {
            swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
              if (!swiper || swiper.destroyed) return;
              if (e.target !== this) return;
              swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
              swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
              swiper.onSlideToWrapperTransitionEnd = null;
              delete swiper.onSlideToWrapperTransitionEnd;
              swiper.transitionEnd(runCallbacks, direction);
            };
          }

          swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
        }
      }

      return true;
    }

    function slideToLoop(index, speed, runCallbacks, internal) {
      if (index === void 0) {
        index = 0;
      }

      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      var swiper = this;
      var newIndex = index;

      if (swiper.params.loop) {
        newIndex += swiper.loopedSlides;
      }

      return swiper.slideTo(newIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideNext(speed, runCallbacks, internal) {
      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      var swiper = this;
      var params = swiper.params,
          animating = swiper.animating,
          enabled = swiper.enabled;
      if (!enabled) return swiper;
      var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;

      if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      }

      return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slidePrev(speed, runCallbacks, internal) {
      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      var swiper = this;
      var params = swiper.params,
          animating = swiper.animating,
          snapGrid = swiper.snapGrid,
          slidesGrid = swiper.slidesGrid,
          rtlTranslate = swiper.rtlTranslate,
          enabled = swiper.enabled;
      if (!enabled) return swiper;

      if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      }

      var translate = rtlTranslate ? swiper.translate : -swiper.translate;

      function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
      }

      var normalizedTranslate = normalize(translate);
      var normalizedSnapGrid = snapGrid.map(function (val) {
        return normalize(val);
      });
      var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

      if (typeof prevSnap === 'undefined' && params.cssMode) {
        snapGrid.forEach(function (snap) {
          if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
        });
      }

      var prevIndex;

      if (typeof prevSnap !== 'undefined') {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
      }

      return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideReset(speed, runCallbacks, internal) {
      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      var swiper = this;
      return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideToClosest(speed, runCallbacks, internal, threshold) {
      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      if (threshold === void 0) {
        threshold = 0.5;
      }

      var swiper = this;
      var index = swiper.activeIndex;
      var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
      var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
      var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

      if (translate >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        var currentSnap = swiper.snapGrid[snapIndex];
        var nextSnap = swiper.snapGrid[snapIndex + 1];

        if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
          index += swiper.params.slidesPerGroup;
        }
      } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        var prevSnap = swiper.snapGrid[snapIndex - 1];
        var _currentSnap = swiper.snapGrid[snapIndex];

        if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
          index -= swiper.params.slidesPerGroup;
        }
      }

      index = Math.max(index, 0);
      index = Math.min(index, swiper.slidesGrid.length - 1);
      return swiper.slideTo(index, speed, runCallbacks, internal);
    }

    function slideToClickedSlide() {
      var swiper = this;
      var params = swiper.params,
          $wrapperEl = swiper.$wrapperEl;
      var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
      var slideToIndex = swiper.clickedIndex;
      var realIndex;

      if (params.loop) {
        if (swiper.animating) return;
        realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

        if (params.centeredSlides) {
          if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
            swiper.loopFix();
            slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
            nextTick(function () {
              swiper.slideTo(slideToIndex);
            });
          } else {
            swiper.slideTo(slideToIndex);
          }
        } else if (slideToIndex > swiper.slides.length - slidesPerView) {
          swiper.loopFix();
          slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
          nextTick(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else {
        swiper.slideTo(slideToIndex);
      }
    }

    var slide = {
      slideTo: slideTo,
      slideToLoop: slideToLoop,
      slideNext: slideNext,
      slidePrev: slidePrev,
      slideReset: slideReset,
      slideToClosest: slideToClosest,
      slideToClickedSlide: slideToClickedSlide
    };

    function loopCreate() {
      var swiper = this;
      var document = getDocument();
      var params = swiper.params,
          $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
      var slides = $wrapperEl.children("." + params.slideClass);

      if (params.loopFillGroupWithBlank) {
        var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

        if (blankSlidesNum !== params.slidesPerGroup) {
          for (var i = 0; i < blankSlidesNum; i += 1) {
            var blankNode = $(document.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
            $wrapperEl.append(blankNode);
          }

          slides = $wrapperEl.children("." + params.slideClass);
        }
      }

      if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
      swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
      swiper.loopedSlides += params.loopAdditionalSlides;

      if (swiper.loopedSlides > slides.length) {
        swiper.loopedSlides = slides.length;
      }

      var prependSlides = [];
      var appendSlides = [];
      slides.each(function (el, index) {
        var slide = $(el);

        if (index < swiper.loopedSlides) {
          appendSlides.push(el);
        }

        if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
          prependSlides.push(el);
        }

        slide.attr('data-swiper-slide-index', index);
      });

      for (var _i = 0; _i < appendSlides.length; _i += 1) {
        $wrapperEl.append($(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
      }

      for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
        $wrapperEl.prepend($(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
      }
    }

    function loopFix() {
      var swiper = this;
      swiper.emit('beforeLoopFix');
      var activeIndex = swiper.activeIndex,
          slides = swiper.slides,
          loopedSlides = swiper.loopedSlides,
          allowSlidePrev = swiper.allowSlidePrev,
          allowSlideNext = swiper.allowSlideNext,
          snapGrid = swiper.snapGrid,
          rtl = swiper.rtlTranslate;
      var newIndex;
      swiper.allowSlidePrev = true;
      swiper.allowSlideNext = true;
      var snapTranslate = -snapGrid[activeIndex];
      var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

      if (activeIndex < loopedSlides) {
        newIndex = slides.length - loopedSlides * 3 + activeIndex;
        newIndex += loopedSlides;
        var slideChanged = swiper.slideTo(newIndex, 0, false, true);

        if (slideChanged && diff !== 0) {
          swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
        }
      } else if (activeIndex >= slides.length - loopedSlides) {
        // Fix For Positive Oversliding
        newIndex = -slides.length + activeIndex + loopedSlides;
        newIndex += loopedSlides;

        var _slideChanged = swiper.slideTo(newIndex, 0, false, true);

        if (_slideChanged && diff !== 0) {
          swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
        }
      }

      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      swiper.emit('loopFix');
    }

    function loopDestroy() {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl,
          params = swiper.params,
          slides = swiper.slides;
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
      slides.removeAttr('data-swiper-slide-index');
    }

    var loop = {
      loopCreate: loopCreate,
      loopFix: loopFix,
      loopDestroy: loopDestroy
    };

    function setGrabCursor(moving) {
      var swiper = this;
      if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
      var el = swiper.el;
      el.style.cursor = 'move';
      el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
      el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
      el.style.cursor = moving ? 'grabbing' : 'grab';
    }

    function unsetGrabCursor() {
      var swiper = this;

      if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
        return;
      }

      swiper.el.style.cursor = '';
    }

    var grabCursor = {
      setGrabCursor: setGrabCursor,
      unsetGrabCursor: unsetGrabCursor
    };

    function appendSlide(slides) {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl,
          params = swiper.params;

      if (params.loop) {
        swiper.loopDestroy();
      }

      if (typeof slides === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) $wrapperEl.append(slides[i]);
        }
      } else {
        $wrapperEl.append(slides);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!(params.observer && swiper.support.observer)) {
        swiper.update();
      }
    }

    function prependSlide(slides) {
      var swiper = this;
      var params = swiper.params,
          $wrapperEl = swiper.$wrapperEl,
          activeIndex = swiper.activeIndex;

      if (params.loop) {
        swiper.loopDestroy();
      }

      var newActiveIndex = activeIndex + 1;

      if (typeof slides === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) $wrapperEl.prepend(slides[i]);
        }

        newActiveIndex = activeIndex + slides.length;
      } else {
        $wrapperEl.prepend(slides);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!(params.observer && swiper.support.observer)) {
        swiper.update();
      }

      swiper.slideTo(newActiveIndex, 0, false);
    }

    function addSlide(index, slides) {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl,
          params = swiper.params,
          activeIndex = swiper.activeIndex;
      var activeIndexBuffer = activeIndex;

      if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children("." + params.slideClass);
      }

      var baseLength = swiper.slides.length;

      if (index <= 0) {
        swiper.prependSlide(slides);
        return;
      }

      if (index >= baseLength) {
        swiper.appendSlide(slides);
        return;
      }

      var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
      var slidesBuffer = [];

      for (var i = baseLength - 1; i >= index; i -= 1) {
        var currentSlide = swiper.slides.eq(i);
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
      }

      if (typeof slides === 'object' && 'length' in slides) {
        for (var _i = 0; _i < slides.length; _i += 1) {
          if (slides[_i]) $wrapperEl.append(slides[_i]);
        }

        newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
      } else {
        $wrapperEl.append(slides);
      }

      for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
        $wrapperEl.append(slidesBuffer[_i2]);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!(params.observer && swiper.support.observer)) {
        swiper.update();
      }

      if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
      } else {
        swiper.slideTo(newActiveIndex, 0, false);
      }
    }

    function removeSlide(slidesIndexes) {
      var swiper = this;
      var params = swiper.params,
          $wrapperEl = swiper.$wrapperEl,
          activeIndex = swiper.activeIndex;
      var activeIndexBuffer = activeIndex;

      if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children("." + params.slideClass);
      }

      var newActiveIndex = activeIndexBuffer;
      var indexToRemove;

      if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
        for (var i = 0; i < slidesIndexes.length; i += 1) {
          indexToRemove = slidesIndexes[i];
          if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
          if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        }

        newActiveIndex = Math.max(newActiveIndex, 0);
      } else {
        indexToRemove = slidesIndexes;
        if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        newActiveIndex = Math.max(newActiveIndex, 0);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!(params.observer && swiper.support.observer)) {
        swiper.update();
      }

      if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
      } else {
        swiper.slideTo(newActiveIndex, 0, false);
      }
    }

    function removeAllSlides() {
      var swiper = this;
      var slidesIndexes = [];

      for (var i = 0; i < swiper.slides.length; i += 1) {
        slidesIndexes.push(i);
      }

      swiper.removeSlide(slidesIndexes);
    }

    var manipulation = {
      appendSlide: appendSlide,
      prependSlide: prependSlide,
      addSlide: addSlide,
      removeSlide: removeSlide,
      removeAllSlides: removeAllSlides
    };

    function closestElement(selector, base) {
      if (base === void 0) {
        base = this;
      }

      function __closestFrom(el) {
        if (!el || el === getDocument() || el === getWindow()) return null;
        if (el.assignedSlot) el = el.assignedSlot;
        var found = el.closest(selector);
        return found || __closestFrom(el.getRootNode().host);
      }

      return __closestFrom(base);
    }

    function onTouchStart(event) {
      var swiper = this;
      var document = getDocument();
      var window = getWindow();
      var data = swiper.touchEventsData;
      var params = swiper.params,
          touches = swiper.touches,
          enabled = swiper.enabled;
      if (!enabled) return;

      if (swiper.animating && params.preventInteractionOnTransition) {
        return;
      }

      var e = event;
      if (e.originalEvent) e = e.originalEvent;
      var $targetEl = $(e.target);

      if (params.touchEventsTarget === 'wrapper') {
        if (!$targetEl.closest(swiper.wrapperEl).length) return;
      }

      data.isTouchEvent = e.type === 'touchstart';
      if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
      if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
      if (data.isTouched && data.isMoved) return; // change target el for shadow root component

      var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

      if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
        $targetEl = $(event.path[0]);
      }

      var noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass;
      var isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

      if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
        swiper.allowClick = true;
        return;
      }

      if (params.swipeHandler) {
        if (!$targetEl.closest(params.swipeHandler)[0]) return;
      }

      touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      var startX = touches.currentX;
      var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

      var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
      var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

      if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
        if (edgeSwipeDetection === 'prevent') {
          event.preventDefault();
        } else {
          return;
        }
      }

      extend(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
      });
      touches.startX = startX;
      touches.startY = startY;
      data.touchStartTime = now();
      swiper.allowClick = true;
      swiper.updateSize();
      swiper.swipeDirection = undefined;
      if (params.threshold > 0) data.allowThresholdMove = false;

      if (e.type !== 'touchstart') {
        var preventDefault = true;
        if ($targetEl.is(data.focusableElements)) preventDefault = false;

        if (document.activeElement && $(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
          document.activeElement.blur();
        }

        var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

        if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
          e.preventDefault();
        }
      }

      swiper.emit('touchStart', e);
    }

    function onTouchMove(event) {
      var document = getDocument();
      var swiper = this;
      var data = swiper.touchEventsData;
      var params = swiper.params,
          touches = swiper.touches,
          rtl = swiper.rtlTranslate,
          enabled = swiper.enabled;
      if (!enabled) return;
      var e = event;
      if (e.originalEvent) e = e.originalEvent;

      if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) {
          swiper.emit('touchMoveOpposite', e);
        }

        return;
      }

      if (data.isTouchEvent && e.type !== 'touchmove') return;
      var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
      var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
      var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

      if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
      }

      if (!swiper.allowTouchMove) {
        // isMoved = true;
        swiper.allowClick = false;

        if (data.isTouched) {
          extend(touches, {
            startX: pageX,
            startY: pageY,
            currentX: pageX,
            currentY: pageY
          });
          data.touchStartTime = now();
        }

        return;
      }

      if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) {
          // Vertical
          if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
            data.isTouched = false;
            data.isMoved = false;
            return;
          }
        } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
          return;
        }
      }

      if (data.isTouchEvent && document.activeElement) {
        if (e.target === document.activeElement && $(e.target).is(data.focusableElements)) {
          data.isMoved = true;
          swiper.allowClick = false;
          return;
        }
      }

      if (data.allowTouchCallbacks) {
        swiper.emit('touchMove', e);
      }

      if (e.targetTouches && e.targetTouches.length > 1) return;
      touches.currentX = pageX;
      touches.currentY = pageY;
      var diffX = touches.currentX - touches.startX;
      var diffY = touches.currentY - touches.startY;
      if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;

      if (typeof data.isScrolling === 'undefined') {
        var touchAngle;

        if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
          data.isScrolling = false;
        } else {
          // eslint-disable-next-line
          if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
          }
        }
      }

      if (data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }

      if (typeof data.startMoving === 'undefined') {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
          data.startMoving = true;
        }
      }

      if (data.isScrolling) {
        data.isTouched = false;
        return;
      }

      if (!data.startMoving) {
        return;
      }

      swiper.allowClick = false;

      if (!params.cssMode && e.cancelable) {
        e.preventDefault();
      }

      if (params.touchMoveStopPropagation && !params.nested) {
        e.stopPropagation();
      }

      if (!data.isMoved) {
        if (params.loop) {
          swiper.loopFix();
        }

        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);

        if (swiper.animating) {
          swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
        }

        data.allowMomentumBounce = false; // Grab Cursor

        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
          swiper.setGrabCursor(true);
        }

        swiper.emit('sliderFirstMove', e);
      }

      swiper.emit('sliderMove', e);
      data.isMoved = true;
      var diff = swiper.isHorizontal() ? diffX : diffY;
      touches.diff = diff;
      diff *= params.touchRatio;
      if (rtl) diff = -diff;
      swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
      data.currentTranslate = diff + data.startTranslate;
      var disableParentSwiper = true;
      var resistanceRatio = params.resistanceRatio;

      if (params.touchReleaseOnEdges) {
        resistanceRatio = 0;
      }

      if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
      } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
      }

      if (disableParentSwiper) {
        e.preventedByNestedSwiper = true;
      } // Directions locks


      if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      }

      if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      }

      if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
        data.currentTranslate = data.startTranslate;
      } // Threshold


      if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
          if (!data.allowThresholdMove) {
            data.allowThresholdMove = true;
            touches.startX = touches.currentX;
            touches.startY = touches.currentY;
            data.currentTranslate = data.startTranslate;
            touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
            return;
          }
        } else {
          data.currentTranslate = data.startTranslate;
          return;
        }
      }

      if (!params.followFinger || params.cssMode) return; // Update active index in free mode

      if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }

      if (params.freeMode) {
        // Velocity
        if (data.velocities.length === 0) {
          data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
            time: data.touchStartTime
          });
        }

        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
          time: now()
        });
      } // Update progress


      swiper.updateProgress(data.currentTranslate); // Update translate

      swiper.setTranslate(data.currentTranslate);
    }

    function onTouchEnd(event) {
      var swiper = this;
      var data = swiper.touchEventsData;
      var params = swiper.params,
          touches = swiper.touches,
          rtl = swiper.rtlTranslate,
          $wrapperEl = swiper.$wrapperEl,
          slidesGrid = swiper.slidesGrid,
          snapGrid = swiper.snapGrid,
          enabled = swiper.enabled;
      if (!enabled) return;
      var e = event;
      if (e.originalEvent) e = e.originalEvent;

      if (data.allowTouchCallbacks) {
        swiper.emit('touchEnd', e);
      }

      data.allowTouchCallbacks = false;

      if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) {
          swiper.setGrabCursor(false);
        }

        data.isMoved = false;
        data.startMoving = false;
        return;
      } // Return Grab Cursor


      if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(false);
      } // Time diff


      var touchEndTime = now();
      var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

      if (swiper.allowClick) {
        swiper.updateClickedSlide(e);
        swiper.emit('tap click', e);

        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
          swiper.emit('doubleTap doubleClick', e);
        }
      }

      data.lastClickTime = now();
      nextTick(function () {
        if (!swiper.destroyed) swiper.allowClick = true;
      });

      if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
      }

      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      var currentPos;

      if (params.followFinger) {
        currentPos = rtl ? swiper.translate : -swiper.translate;
      } else {
        currentPos = -data.currentTranslate;
      }

      if (params.cssMode) {
        return;
      }

      if (params.freeMode) {
        if (currentPos < -swiper.minTranslate()) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }

        if (currentPos > -swiper.maxTranslate()) {
          if (swiper.slides.length < snapGrid.length) {
            swiper.slideTo(snapGrid.length - 1);
          } else {
            swiper.slideTo(swiper.slides.length - 1);
          }

          return;
        }

        if (params.freeModeMomentum) {
          if (data.velocities.length > 1) {
            var lastMoveEvent = data.velocities.pop();
            var velocityEvent = data.velocities.pop();
            var distance = lastMoveEvent.position - velocityEvent.position;
            var time = lastMoveEvent.time - velocityEvent.time;
            swiper.velocity = distance / time;
            swiper.velocity /= 2;

            if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
              swiper.velocity = 0;
            } // this implies that the user stopped moving a finger then released.
            // There would be no events with distance zero, so the last event is stale.


            if (time > 150 || now() - lastMoveEvent.time > 300) {
              swiper.velocity = 0;
            }
          } else {
            swiper.velocity = 0;
          }

          swiper.velocity *= params.freeModeMomentumVelocityRatio;
          data.velocities.length = 0;
          var momentumDuration = 1000 * params.freeModeMomentumRatio;
          var momentumDistance = swiper.velocity * momentumDuration;
          var newPosition = swiper.translate + momentumDistance;
          if (rtl) newPosition = -newPosition;
          var doBounce = false;
          var afterBouncePosition;
          var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
          var needsLoopFix;

          if (newPosition < swiper.maxTranslate()) {
            if (params.freeModeMomentumBounce) {
              if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                newPosition = swiper.maxTranslate() - bounceAmount;
              }

              afterBouncePosition = swiper.maxTranslate();
              doBounce = true;
              data.allowMomentumBounce = true;
            } else {
              newPosition = swiper.maxTranslate();
            }

            if (params.loop && params.centeredSlides) needsLoopFix = true;
          } else if (newPosition > swiper.minTranslate()) {
            if (params.freeModeMomentumBounce) {
              if (newPosition - swiper.minTranslate() > bounceAmount) {
                newPosition = swiper.minTranslate() + bounceAmount;
              }

              afterBouncePosition = swiper.minTranslate();
              doBounce = true;
              data.allowMomentumBounce = true;
            } else {
              newPosition = swiper.minTranslate();
            }

            if (params.loop && params.centeredSlides) needsLoopFix = true;
          } else if (params.freeModeSticky) {
            var nextSlide;

            for (var j = 0; j < snapGrid.length; j += 1) {
              if (snapGrid[j] > -newPosition) {
                nextSlide = j;
                break;
              }
            }

            if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
              newPosition = snapGrid[nextSlide];
            } else {
              newPosition = snapGrid[nextSlide - 1];
            }

            newPosition = -newPosition;
          }

          if (needsLoopFix) {
            swiper.once('transitionEnd', function () {
              swiper.loopFix();
            });
          } // Fix duration


          if (swiper.velocity !== 0) {
            if (rtl) {
              momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
            } else {
              momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
            }

            if (params.freeModeSticky) {
              // If freeModeSticky is active and the user ends a swipe with a slow-velocity
              // event, then durations can be 20+ seconds to slide one (or zero!) slides.
              // It's easy to see this when simulating touch with mouse events. To fix this,
              // limit single-slide swipes to the default slide duration. This also has the
              // nice side effect of matching slide speed if the user stopped moving before
              // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
              // For faster swipes, also apply limits (albeit higher ones).
              var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
              var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

              if (moveDistance < currentSlideSize) {
                momentumDuration = params.speed;
              } else if (moveDistance < 2 * currentSlideSize) {
                momentumDuration = params.speed * 1.5;
              } else {
                momentumDuration = params.speed * 2.5;
              }
            }
          } else if (params.freeModeSticky) {
            swiper.slideToClosest();
            return;
          }

          if (params.freeModeMomentumBounce && doBounce) {
            swiper.updateProgress(afterBouncePosition);
            swiper.setTransition(momentumDuration);
            swiper.setTranslate(newPosition);
            swiper.transitionStart(true, swiper.swipeDirection);
            swiper.animating = true;
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
              swiper.emit('momentumBounce');
              swiper.setTransition(params.speed);
              setTimeout(function () {
                swiper.setTranslate(afterBouncePosition);
                $wrapperEl.transitionEnd(function () {
                  if (!swiper || swiper.destroyed) return;
                  swiper.transitionEnd();
                });
              }, 0);
            });
          } else if (swiper.velocity) {
            swiper.updateProgress(newPosition);
            swiper.setTransition(momentumDuration);
            swiper.setTranslate(newPosition);
            swiper.transitionStart(true, swiper.swipeDirection);

            if (!swiper.animating) {
              swiper.animating = true;
              $wrapperEl.transitionEnd(function () {
                if (!swiper || swiper.destroyed) return;
                swiper.transitionEnd();
              });
            }
          } else {
            swiper.emit('_freeModeNoMomentumRelease');
            swiper.updateProgress(newPosition);
          }

          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        } else if (params.freeMode) {
          swiper.emit('_freeModeNoMomentumRelease');
        }

        if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }

        return;
      } // Find current slide


      var stopIndex = 0;
      var groupSize = swiper.slidesSizesGrid[0];

      for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
        var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

        if (typeof slidesGrid[i + _increment] !== 'undefined') {
          if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
            stopIndex = i;
            groupSize = slidesGrid[i + _increment] - slidesGrid[i];
          }
        } else if (currentPos >= slidesGrid[i]) {
          stopIndex = i;
          groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
      } // Find current slide size


      var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
      var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

      if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }

        if (swiper.swipeDirection === 'next') {
          if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
        }

        if (swiper.swipeDirection === 'prev') {
          if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
        }
      } else {
        // Short swipes
        if (!params.shortSwipes) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }

        var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

        if (!isNavButtonTarget) {
          if (swiper.swipeDirection === 'next') {
            swiper.slideTo(stopIndex + increment);
          }

          if (swiper.swipeDirection === 'prev') {
            swiper.slideTo(stopIndex);
          }
        } else if (e.target === swiper.navigation.nextEl) {
          swiper.slideTo(stopIndex + increment);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    }

    function onResize() {
      var swiper = this;
      var params = swiper.params,
          el = swiper.el;
      if (el && el.offsetWidth === 0) return; // Breakpoints

      if (params.breakpoints) {
        swiper.setBreakpoint();
      } // Save locks


      var allowSlideNext = swiper.allowSlideNext,
          allowSlidePrev = swiper.allowSlidePrev,
          snapGrid = swiper.snapGrid; // Disable locks on resize

      swiper.allowSlideNext = true;
      swiper.allowSlidePrev = true;
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateSlidesClasses();

      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
        swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }

      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.run();
      } // Return locks after resize


      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;

      if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
    }

    function onClick(e) {
      var swiper = this;
      if (!swiper.enabled) return;

      if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault();

        if (swiper.params.preventClicksPropagation && swiper.animating) {
          e.stopPropagation();
          e.stopImmediatePropagation();
        }
      }
    }

    function onScroll() {
      var swiper = this;
      var wrapperEl = swiper.wrapperEl,
          rtlTranslate = swiper.rtlTranslate,
          enabled = swiper.enabled;
      if (!enabled) return;
      swiper.previousTranslate = swiper.translate;

      if (swiper.isHorizontal()) {
        if (rtlTranslate) {
          swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
        } else {
          swiper.translate = -wrapperEl.scrollLeft;
        }
      } else {
        swiper.translate = -wrapperEl.scrollTop;
      } // eslint-disable-next-line


      if (swiper.translate === -0) swiper.translate = 0;
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
      var newProgress;
      var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
      }

      if (newProgress !== swiper.progress) {
        swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
      }

      swiper.emit('setTranslate', swiper.translate, false);
    }

    var dummyEventAttached = false;

    function dummyEventListener() {}

    function attachEvents() {
      var swiper = this;
      var document = getDocument();
      var params = swiper.params,
          touchEvents = swiper.touchEvents,
          el = swiper.el,
          wrapperEl = swiper.wrapperEl,
          device = swiper.device,
          support = swiper.support;
      swiper.onTouchStart = onTouchStart.bind(swiper);
      swiper.onTouchMove = onTouchMove.bind(swiper);
      swiper.onTouchEnd = onTouchEnd.bind(swiper);

      if (params.cssMode) {
        swiper.onScroll = onScroll.bind(swiper);
      }

      swiper.onClick = onClick.bind(swiper);
      var capture = !!params.nested; // Touch Events

      if (!support.touch && support.pointerEvents) {
        el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
        document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
        document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (support.touch) {
          var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
          } : false;
          el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          el.addEventListener(touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
            passive: false,
            capture: capture
          } : capture);
          el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

          if (touchEvents.cancel) {
            el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
          }

          if (!dummyEventAttached) {
            document.addEventListener('touchstart', dummyEventListener);
            dummyEventAttached = true;
          }
        }

        if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
          el.addEventListener('mousedown', swiper.onTouchStart, false);
          document.addEventListener('mousemove', swiper.onTouchMove, capture);
          document.addEventListener('mouseup', swiper.onTouchEnd, false);
        }
      } // Prevent Links Clicks


      if (params.preventClicks || params.preventClicksPropagation) {
        el.addEventListener('click', swiper.onClick, true);
      }

      if (params.cssMode) {
        wrapperEl.addEventListener('scroll', swiper.onScroll);
      } // Resize handler


      if (params.updateOnWindowResize) {
        swiper.on(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
      } else {
        swiper.on('observerUpdate', onResize, true);
      }
    }

    function detachEvents() {
      var swiper = this;
      var document = getDocument();
      var params = swiper.params,
          touchEvents = swiper.touchEvents,
          el = swiper.el,
          wrapperEl = swiper.wrapperEl,
          device = swiper.device,
          support = swiper.support;
      var capture = !!params.nested; // Touch Events

      if (!support.touch && support.pointerEvents) {
        el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
        document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (support.touch) {
          var passiveListener = touchEvents.start === 'onTouchStart' && support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
          } : false;
          el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
          el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

          if (touchEvents.cancel) {
            el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
          }
        }

        if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
          el.removeEventListener('mousedown', swiper.onTouchStart, false);
          document.removeEventListener('mousemove', swiper.onTouchMove, capture);
          document.removeEventListener('mouseup', swiper.onTouchEnd, false);
        }
      } // Prevent Links Clicks


      if (params.preventClicks || params.preventClicksPropagation) {
        el.removeEventListener('click', swiper.onClick, true);
      }

      if (params.cssMode) {
        wrapperEl.removeEventListener('scroll', swiper.onScroll);
      } // Resize handler


      swiper.off(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize);
    }

    var events = {
      attachEvents: attachEvents,
      detachEvents: detachEvents
    };

    function setBreakpoint() {
      var swiper = this;
      var activeIndex = swiper.activeIndex,
          initialized = swiper.initialized,
          _swiper$loopedSlides = swiper.loopedSlides,
          loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
          params = swiper.params,
          $el = swiper.$el;
      var breakpoints = params.breakpoints;
      if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

      var breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
      if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
      var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

      if (breakpointOnlyParams) {
        ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function (param) {
          var paramValue = breakpointOnlyParams[param];
          if (typeof paramValue === 'undefined') return;

          if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
            breakpointOnlyParams[param] = 'auto';
          } else if (param === 'slidesPerView') {
            breakpointOnlyParams[param] = parseFloat(paramValue);
          } else {
            breakpointOnlyParams[param] = parseInt(paramValue, 10);
          }
        });
      }

      var breakpointParams = breakpointOnlyParams || swiper.originalParams;
      var wasMultiRow = params.slidesPerColumn > 1;
      var isMultiRow = breakpointParams.slidesPerColumn > 1;
      var wasEnabled = params.enabled;

      if (wasMultiRow && !isMultiRow) {
        $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
        swiper.emitContainerClasses();
      } else if (!wasMultiRow && isMultiRow) {
        $el.addClass(params.containerModifierClass + "multirow");

        if (breakpointParams.slidesPerColumnFill && breakpointParams.slidesPerColumnFill === 'column' || !breakpointParams.slidesPerColumnFill && params.slidesPerColumnFill === 'column') {
          $el.addClass(params.containerModifierClass + "multirow-column");
        }

        swiper.emitContainerClasses();
      }

      var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
      var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

      if (directionChanged && initialized) {
        swiper.changeDirection();
      }

      extend(swiper.params, breakpointParams);
      var isEnabled = swiper.params.enabled;
      extend(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
      });

      if (wasEnabled && !isEnabled) {
        swiper.disable();
      } else if (!wasEnabled && isEnabled) {
        swiper.enable();
      }

      swiper.currentBreakpoint = breakpoint;
      swiper.emit('_beforeBreakpoint', breakpointParams);

      if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
      }

      swiper.emit('breakpoint', breakpointParams);
    }

    function getBreakpoint(breakpoints, base, containerEl) {
      if (base === void 0) {
        base = 'window';
      }

      if (!breakpoints || base === 'container' && !containerEl) return undefined;
      var breakpoint = false;
      var window = getWindow();
      var currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
      var points = Object.keys(breakpoints).map(function (point) {
        if (typeof point === 'string' && point.indexOf('@') === 0) {
          var minRatio = parseFloat(point.substr(1));
          var value = currentHeight * minRatio;
          return {
            value: value,
            point: point
          };
        }

        return {
          value: point,
          point: point
        };
      });
      points.sort(function (a, b) {
        return parseInt(a.value, 10) - parseInt(b.value, 10);
      });

      for (var i = 0; i < points.length; i += 1) {
        var _points$i = points[i],
            point = _points$i.point,
            value = _points$i.value;

        if (base === 'window') {
          if (window.matchMedia("(min-width: " + value + "px)").matches) {
            breakpoint = point;
          }
        } else if (value <= containerEl.clientWidth) {
          breakpoint = point;
        }
      }

      return breakpoint || 'max';
    }

    var breakpoints = {
      setBreakpoint: setBreakpoint,
      getBreakpoint: getBreakpoint
    };

    function prepareClasses(entries, prefix) {
      var resultClasses = [];
      entries.forEach(function (item) {
        if (typeof item === 'object') {
          Object.keys(item).forEach(function (classNames) {
            if (item[classNames]) {
              resultClasses.push(prefix + classNames);
            }
          });
        } else if (typeof item === 'string') {
          resultClasses.push(prefix + item);
        }
      });
      return resultClasses;
    }

    function addClasses() {
      var swiper = this;
      var classNames = swiper.classNames,
          params = swiper.params,
          rtl = swiper.rtl,
          $el = swiper.$el,
          device = swiper.device,
          support = swiper.support; // prettier-ignore

      var suffixes = prepareClasses(['initialized', params.direction, {
        'pointer-events': support.pointerEvents && !support.touch
      }, {
        'free-mode': params.freeMode
      }, {
        'autoheight': params.autoHeight
      }, {
        'rtl': rtl
      }, {
        'multirow': params.slidesPerColumn > 1
      }, {
        'multirow-column': params.slidesPerColumn > 1 && params.slidesPerColumnFill === 'column'
      }, {
        'android': device.android
      }, {
        'ios': device.ios
      }, {
        'css-mode': params.cssMode
      }], params.containerModifierClass);
      classNames.push.apply(classNames, suffixes);
      $el.addClass([].concat(classNames).join(' '));
      swiper.emitContainerClasses();
    }

    function removeClasses() {
      var swiper = this;
      var $el = swiper.$el,
          classNames = swiper.classNames;
      $el.removeClass(classNames.join(' '));
      swiper.emitContainerClasses();
    }

    var classes = {
      addClasses: addClasses,
      removeClasses: removeClasses
    };

    function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
      var window = getWindow();
      var image;

      function onReady() {
        if (callback) callback();
      }

      var isPicture = $(imageEl).parent('picture')[0];

      if (!isPicture && (!imageEl.complete || !checkForComplete)) {
        if (src) {
          image = new window.Image();
          image.onload = onReady;
          image.onerror = onReady;

          if (sizes) {
            image.sizes = sizes;
          }

          if (srcset) {
            image.srcset = srcset;
          }

          if (src) {
            image.src = src;
          }
        } else {
          onReady();
        }
      } else {
        // image already loaded...
        onReady();
      }
    }

    function preloadImages() {
      var swiper = this;
      swiper.imagesToLoad = swiper.$el.find('img');

      function onReady() {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
        if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

        if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
          if (swiper.params.updateOnImagesReady) swiper.update();
          swiper.emit('imagesReady');
        }
      }

      for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
        var imageEl = swiper.imagesToLoad[i];
        swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
      }
    }

    var images = {
      loadImage: loadImage,
      preloadImages: preloadImages
    };

    function checkOverflow() {
      var swiper = this;
      var params = swiper.params;
      var wasLocked = swiper.isLocked;
      var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;

      if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
        swiper.isLocked = lastSlidePosition <= swiper.size;
      } else {
        swiper.isLocked = swiper.snapGrid.length === 1;
      }

      swiper.allowSlideNext = !swiper.isLocked;
      swiper.allowSlidePrev = !swiper.isLocked; // events

      if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

      if (wasLocked && wasLocked !== swiper.isLocked) {
        swiper.isEnd = false;
        if (swiper.navigation) swiper.navigation.update();
      }
    }

    var checkOverflow$1 = {
      checkOverflow: checkOverflow
    };

    var defaults = {
      init: true,
      direction: 'horizontal',
      touchEventsTarget: 'container',
      initialSlide: 0,
      speed: 300,
      cssMode: false,
      updateOnWindowResize: true,
      resizeObserver: false,
      nested: false,
      createElements: false,
      enabled: true,
      focusableElements: 'input, select, option, textarea, button, video, label',
      // Overrides
      width: null,
      height: null,
      //
      preventInteractionOnTransition: false,
      // ssr
      userAgent: null,
      url: null,
      // To support iOS's swipe-to-go-back gesture (when being used in-app).
      edgeSwipeDetection: false,
      edgeSwipeThreshold: 20,
      // Free mode
      freeMode: false,
      freeModeMomentum: true,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: true,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: false,
      freeModeMinimumVelocity: 0.02,
      // Autoheight
      autoHeight: false,
      // Set wrapper width
      setWrapperSize: false,
      // Virtual Translate
      virtualTranslate: false,
      // Effects
      effect: 'slide',
      // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
      // Breakpoints
      breakpoints: undefined,
      breakpointsBase: 'window',
      // Slides grid
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: 'column',
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: false,
      centeredSlidesBounds: false,
      slidesOffsetBefore: 0,
      // in px
      slidesOffsetAfter: 0,
      // in px
      normalizeSlideIndex: true,
      centerInsufficientSlides: false,
      // Disable swiper and hide navigation when container not overflow
      watchOverflow: false,
      // Round length
      roundLengths: false,
      // Touches
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
      shortSwipes: true,
      longSwipes: true,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: true,
      allowTouchMove: true,
      threshold: 0,
      touchMoveStopPropagation: false,
      touchStartPreventDefault: true,
      touchStartForcePreventDefault: false,
      touchReleaseOnEdges: false,
      // Unique Navigation Elements
      uniqueNavElements: true,
      // Resistance
      resistance: true,
      resistanceRatio: 0.85,
      // Progress
      watchSlidesProgress: false,
      watchSlidesVisibility: false,
      // Cursor
      grabCursor: false,
      // Clicks
      preventClicks: true,
      preventClicksPropagation: true,
      slideToClickedSlide: false,
      // Images
      preloadImages: true,
      updateOnImagesReady: true,
      // loop
      loop: false,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: false,
      loopPreventsSlide: true,
      // Swiping/no swiping
      allowSlidePrev: true,
      allowSlideNext: true,
      swipeHandler: null,
      // '.swipe-handler',
      noSwiping: true,
      noSwipingClass: 'swiper-no-swiping',
      noSwipingSelector: null,
      // Passive Listeners
      passiveListeners: true,
      // NS
      containerModifierClass: 'swiper-container-',
      // NEW
      slideClass: 'swiper-slide',
      slideBlankClass: 'swiper-slide-invisible-blank',
      slideActiveClass: 'swiper-slide-active',
      slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideDuplicateClass: 'swiper-slide-duplicate',
      slideNextClass: 'swiper-slide-next',
      slideDuplicateNextClass: 'swiper-slide-duplicate-next',
      slidePrevClass: 'swiper-slide-prev',
      slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
      wrapperClass: 'swiper-wrapper',
      // Callbacks
      runCallbacksOnInit: true,
      // Internals
      _emitClasses: false
    };

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var prototypes = {
      modular: modular,
      eventsEmitter: eventsEmitter,
      update: update,
      translate: translate,
      transition: transition,
      slide: slide,
      loop: loop,
      grabCursor: grabCursor,
      manipulation: manipulation,
      events: events,
      breakpoints: breakpoints,
      checkOverflow: checkOverflow$1,
      classes: classes,
      images: images
    };
    var extendedDefaults = {};

    var Swiper = /*#__PURE__*/function () {
      function Swiper() {
        var el;
        var params;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
          params = args[0];
        } else {
          el = args[0];
          params = args[1];
        }

        if (!params) params = {};
        params = extend({}, params);
        if (el && !params.el) params.el = el;

        if (params.el && $(params.el).length > 1) {
          var swipers = [];
          $(params.el).each(function (containerEl) {
            var newParams = extend({}, params, {
              el: containerEl
            });
            swipers.push(new Swiper(newParams));
          });
          return swipers;
        } // Swiper Instance


        var swiper = this;
        swiper.__swiper__ = true;
        swiper.support = getSupport();
        swiper.device = getDevice({
          userAgent: params.userAgent
        });
        swiper.browser = getBrowser();
        swiper.eventsListeners = {};
        swiper.eventsAnyListeners = [];

        if (typeof swiper.modules === 'undefined') {
          swiper.modules = {};
        }

        Object.keys(swiper.modules).forEach(function (moduleName) {
          var module = swiper.modules[moduleName];

          if (module.params) {
            var moduleParamName = Object.keys(module.params)[0];
            var moduleParams = module.params[moduleParamName];
            if (typeof moduleParams !== 'object' || moduleParams === null) return;

            if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
              params[moduleParamName] = {
                auto: true
              };
            }

            if (!(moduleParamName in params && 'enabled' in moduleParams)) return;

            if (params[moduleParamName] === true) {
              params[moduleParamName] = {
                enabled: true
              };
            }

            if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
              params[moduleParamName].enabled = true;
            }

            if (!params[moduleParamName]) params[moduleParamName] = {
              enabled: false
            };
          }
        }); // Extend defaults with modules params

        var swiperParams = extend({}, defaults);
        swiper.useParams(swiperParams); // Extend defaults with passed params

        swiper.params = extend({}, swiperParams, extendedDefaults, params);
        swiper.originalParams = extend({}, swiper.params);
        swiper.passedParams = extend({}, params); // add event listeners

        if (swiper.params && swiper.params.on) {
          Object.keys(swiper.params.on).forEach(function (eventName) {
            swiper.on(eventName, swiper.params.on[eventName]);
          });
        }

        if (swiper.params && swiper.params.onAny) {
          swiper.onAny(swiper.params.onAny);
        } // Save Dom lib


        swiper.$ = $; // Extend Swiper

        extend(swiper, {
          enabled: swiper.params.enabled,
          el: el,
          // Classes
          classNames: [],
          // Slides
          slides: $(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          // isDirection
          isHorizontal: function isHorizontal() {
            return swiper.params.direction === 'horizontal';
          },
          isVertical: function isVertical() {
            return swiper.params.direction === 'vertical';
          },
          // Indexes
          activeIndex: 0,
          realIndex: 0,
          //
          isBeginning: true,
          isEnd: false,
          // Props
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: false,
          // Locks
          allowSlideNext: swiper.params.allowSlideNext,
          allowSlidePrev: swiper.params.allowSlidePrev,
          // Touch Events
          touchEvents: function touchEvents() {
            var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
            var desktop = ['mousedown', 'mousemove', 'mouseup'];

            if (swiper.support.pointerEvents) {
              desktop = ['pointerdown', 'pointermove', 'pointerup'];
            }

            swiper.touchEventsTouch = {
              start: touch[0],
              move: touch[1],
              end: touch[2],
              cancel: touch[3]
            };
            swiper.touchEventsDesktop = {
              start: desktop[0],
              move: desktop[1],
              end: desktop[2]
            };
            return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
          }(),
          touchEventsData: {
            isTouched: undefined,
            isMoved: undefined,
            allowTouchCallbacks: undefined,
            touchStartTime: undefined,
            isScrolling: undefined,
            currentTranslate: undefined,
            startTranslate: undefined,
            allowThresholdMove: undefined,
            // Form elements to match
            focusableElements: swiper.params.focusableElements,
            // Last click time
            lastClickTime: now(),
            clickTimeout: undefined,
            // Velocities
            velocities: [],
            allowMomentumBounce: undefined,
            isTouchEvent: undefined,
            startMoving: undefined
          },
          // Clicks
          allowClick: true,
          // Touches
          allowTouchMove: swiper.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          // Images
          imagesToLoad: [],
          imagesLoaded: 0
        }); // Install Modules

        swiper.useModules();
        swiper.emit('_swiper'); // Init

        if (swiper.params.init) {
          swiper.init();
        } // Return app instance


        return swiper;
      }

      var _proto = Swiper.prototype;

      _proto.enable = function enable() {
        var swiper = this;
        if (swiper.enabled) return;
        swiper.enabled = true;

        if (swiper.params.grabCursor) {
          swiper.setGrabCursor();
        }

        swiper.emit('enable');
      };

      _proto.disable = function disable() {
        var swiper = this;
        if (!swiper.enabled) return;
        swiper.enabled = false;

        if (swiper.params.grabCursor) {
          swiper.unsetGrabCursor();
        }

        swiper.emit('disable');
      };

      _proto.setProgress = function setProgress(progress, speed) {
        var swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        var min = swiper.minTranslate();
        var max = swiper.maxTranslate();
        var current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      };

      _proto.emitContainerClasses = function emitContainerClasses() {
        var swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        var classes = swiper.el.className.split(' ').filter(function (className) {
          return className.indexOf('swiper-container') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit('_containerClasses', classes.join(' '));
      };

      _proto.getSlideClasses = function getSlideClasses(slideEl) {
        var swiper = this;
        return slideEl.className.split(' ').filter(function (className) {
          return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(' ');
      };

      _proto.emitSlidesClasses = function emitSlidesClasses() {
        var swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        var updates = [];
        swiper.slides.each(function (slideEl) {
          var classNames = swiper.getSlideClasses(slideEl);
          updates.push({
            slideEl: slideEl,
            classNames: classNames
          });
          swiper.emit('_slideClass', slideEl, classNames);
        });
        swiper.emit('_slideClasses', updates);
      };

      _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
        var swiper = this;
        var params = swiper.params,
            slides = swiper.slides,
            slidesGrid = swiper.slidesGrid,
            swiperSize = swiper.size,
            activeIndex = swiper.activeIndex;
        var spv = 1;

        if (params.centeredSlides) {
          var slideSize = slides[activeIndex].swiperSlideSize;
          var breakLoop;

          for (var i = activeIndex + 1; i < slides.length; i += 1) {
            if (slides[i] && !breakLoop) {
              slideSize += slides[i].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize) breakLoop = true;
            }
          }

          for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
            if (slides[_i] && !breakLoop) {
              slideSize += slides[_i].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize) breakLoop = true;
            }
          }
        } else {
          for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
            if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) {
              spv += 1;
            }
          }
        }

        return spv;
      };

      _proto.update = function update() {
        var swiper = this;
        if (!swiper || swiper.destroyed) return;
        var snapGrid = swiper.snapGrid,
            params = swiper.params; // Breakpoints

        if (params.breakpoints) {
          swiper.setBreakpoint();
        }

        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();

        function setTranslate() {
          var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
          var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
          swiper.setTranslate(newTranslate);
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }

        var translated;

        if (swiper.params.freeMode) {
          setTranslate();

          if (swiper.params.autoHeight) {
            swiper.updateAutoHeight();
          }
        } else {
          if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
            translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
          } else {
            translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
          }

          if (!translated) {
            setTranslate();
          }
        }

        if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
          swiper.checkOverflow();
        }

        swiper.emit('update');
      };

      _proto.changeDirection = function changeDirection(newDirection, needUpdate) {
        if (needUpdate === void 0) {
          needUpdate = true;
        }

        var swiper = this;
        var currentDirection = swiper.params.direction;

        if (!newDirection) {
          // eslint-disable-next-line
          newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
        }

        if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
          return swiper;
        }

        swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.each(function (slideEl) {
          if (newDirection === 'vertical') {
            slideEl.style.width = '';
          } else {
            slideEl.style.height = '';
          }
        });
        swiper.emit('changeDirection');
        if (needUpdate) swiper.update();
        return swiper;
      };

      _proto.mount = function mount(el) {
        var swiper = this;
        if (swiper.mounted) return true; // Find el

        var $el = $(el || swiper.params.el);
        el = $el[0];

        if (!el) {
          return false;
        }

        el.swiper = swiper;

        var getWrapperSelector = function getWrapperSelector() {
          return "." + (swiper.params.wrapperClass || '').trim().split(' ').join('.');
        };

        var getWrapper = function getWrapper() {
          if (el && el.shadowRoot && el.shadowRoot.querySelector) {
            var res = $(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items

            res.children = function (options) {
              return $el.children(options);
            };

            return res;
          }

          return $el.children(getWrapperSelector());
        }; // Find Wrapper


        var $wrapperEl = getWrapper();

        if ($wrapperEl.length === 0 && swiper.params.createElements) {
          var document = getDocument();
          var wrapper = document.createElement('div');
          $wrapperEl = $(wrapper);
          wrapper.className = swiper.params.wrapperClass;
          $el.append(wrapper);
          $el.children("." + swiper.params.slideClass).each(function (slideEl) {
            $wrapperEl.append(slideEl);
          });
        }

        extend(swiper, {
          $el: $el,
          el: el,
          $wrapperEl: $wrapperEl,
          wrapperEl: $wrapperEl[0],
          mounted: true,
          // RTL
          rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
          rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
          wrongRTL: $wrapperEl.css('display') === '-webkit-box'
        });
        return true;
      };

      _proto.init = function init(el) {
        var swiper = this;
        if (swiper.initialized) return swiper;
        var mounted = swiper.mount(el);
        if (mounted === false) return swiper;
        swiper.emit('beforeInit'); // Set breakpoint

        if (swiper.params.breakpoints) {
          swiper.setBreakpoint();
        } // Add Classes


        swiper.addClasses(); // Create loop

        if (swiper.params.loop) {
          swiper.loopCreate();
        } // Update size


        swiper.updateSize(); // Update slides

        swiper.updateSlides();

        if (swiper.params.watchOverflow) {
          swiper.checkOverflow();
        } // Set Grab Cursor


        if (swiper.params.grabCursor && swiper.enabled) {
          swiper.setGrabCursor();
        }

        if (swiper.params.preloadImages) {
          swiper.preloadImages();
        } // Slide To Initial Slide


        if (swiper.params.loop) {
          swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
        } else {
          swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
        } // Attach events


        swiper.attachEvents(); // Init Flag

        swiper.initialized = true; // Emit

        swiper.emit('init');
        swiper.emit('afterInit');
        return swiper;
      };

      _proto.destroy = function destroy(deleteInstance, cleanStyles) {
        if (deleteInstance === void 0) {
          deleteInstance = true;
        }

        if (cleanStyles === void 0) {
          cleanStyles = true;
        }

        var swiper = this;
        var params = swiper.params,
            $el = swiper.$el,
            $wrapperEl = swiper.$wrapperEl,
            slides = swiper.slides;

        if (typeof swiper.params === 'undefined' || swiper.destroyed) {
          return null;
        }

        swiper.emit('beforeDestroy'); // Init Flag

        swiper.initialized = false; // Detach events

        swiper.detachEvents(); // Destroy loop

        if (params.loop) {
          swiper.loopDestroy();
        } // Cleanup styles


        if (cleanStyles) {
          swiper.removeClasses();
          $el.removeAttr('style');
          $wrapperEl.removeAttr('style');

          if (slides && slides.length) {
            slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
          }
        }

        swiper.emit('destroy'); // Detach emitter events

        Object.keys(swiper.eventsListeners).forEach(function (eventName) {
          swiper.off(eventName);
        });

        if (deleteInstance !== false) {
          swiper.$el[0].swiper = null;
          deleteProps(swiper);
        }

        swiper.destroyed = true;
        return null;
      };

      Swiper.extendDefaults = function extendDefaults(newDefaults) {
        extend(extendedDefaults, newDefaults);
      };

      Swiper.installModule = function installModule(module) {
        if (!Swiper.prototype.modules) Swiper.prototype.modules = {};
        var name = module.name || Object.keys(Swiper.prototype.modules).length + "_" + now();
        Swiper.prototype.modules[name] = module;
      };

      Swiper.use = function use(module) {
        if (Array.isArray(module)) {
          module.forEach(function (m) {
            return Swiper.installModule(m);
          });
          return Swiper;
        }

        Swiper.installModule(module);
        return Swiper;
      };

      _createClass(Swiper, null, [{
        key: "extendedDefaults",
        get: function get() {
          return extendedDefaults;
        }
      }, {
        key: "defaults",
        get: function get() {
          return defaults;
        }
      }]);

      return Swiper;
    }();

    Object.keys(prototypes).forEach(function (prototypeGroup) {
      Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
      });
    });
    Swiper.use([Resize, Observer$1]);
    var Swiper$1 = Swiper;

    function _extends$1() {
      _extends$1 = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends$1.apply(this, arguments);
    }
    var Navigation = {
      toggleEl: function toggleEl($el, disabled) {
        $el[disabled ? 'addClass' : 'removeClass'](this.params.navigation.disabledClass);
        if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;
      },
      update: function update() {
        // Update Navigation Buttons
        var swiper = this;
        var params = swiper.params.navigation;
        var toggleEl = swiper.navigation.toggleEl;
        if (swiper.params.loop) return;
        var _swiper$navigation = swiper.navigation,
            $nextEl = _swiper$navigation.$nextEl,
            $prevEl = _swiper$navigation.$prevEl;

        if ($prevEl && $prevEl.length > 0) {
          if (swiper.isBeginning) {
            toggleEl($prevEl, true);
          } else {
            toggleEl($prevEl, false);
          }

          if (swiper.params.watchOverflow && swiper.enabled) {
            $prevEl[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
          }
        }

        if ($nextEl && $nextEl.length > 0) {
          if (swiper.isEnd) {
            toggleEl($nextEl, true);
          } else {
            toggleEl($nextEl, false);
          }

          if (swiper.params.watchOverflow && swiper.enabled) {
            $nextEl[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
          }
        }
      },
      onPrevClick: function onPrevClick(e) {
        var swiper = this;
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop) return;
        swiper.slidePrev();
      },
      onNextClick: function onNextClick(e) {
        var swiper = this;
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop) return;
        swiper.slideNext();
      },
      init: function init() {
        var swiper = this;
        var params = swiper.params.navigation;
        swiper.params.navigation = createElementIfNotDefined(swiper.$el, swiper.params.navigation, swiper.params.createElements, {
          nextEl: 'swiper-button-next',
          prevEl: 'swiper-button-prev'
        });
        if (!(params.nextEl || params.prevEl)) return;
        var $nextEl;
        var $prevEl;

        if (params.nextEl) {
          $nextEl = $(params.nextEl);

          if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
            $nextEl = swiper.$el.find(params.nextEl);
          }
        }

        if (params.prevEl) {
          $prevEl = $(params.prevEl);

          if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
            $prevEl = swiper.$el.find(params.prevEl);
          }
        }

        if ($nextEl && $nextEl.length > 0) {
          $nextEl.on('click', swiper.navigation.onNextClick);
        }

        if ($prevEl && $prevEl.length > 0) {
          $prevEl.on('click', swiper.navigation.onPrevClick);
        }

        extend(swiper.navigation, {
          $nextEl: $nextEl,
          nextEl: $nextEl && $nextEl[0],
          $prevEl: $prevEl,
          prevEl: $prevEl && $prevEl[0]
        });

        if (!swiper.enabled) {
          if ($nextEl) $nextEl.addClass(params.lockClass);
          if ($prevEl) $prevEl.addClass(params.lockClass);
        }
      },
      destroy: function destroy() {
        var swiper = this;
        var _swiper$navigation2 = swiper.navigation,
            $nextEl = _swiper$navigation2.$nextEl,
            $prevEl = _swiper$navigation2.$prevEl;

        if ($nextEl && $nextEl.length) {
          $nextEl.off('click', swiper.navigation.onNextClick);
          $nextEl.removeClass(swiper.params.navigation.disabledClass);
        }

        if ($prevEl && $prevEl.length) {
          $prevEl.off('click', swiper.navigation.onPrevClick);
          $prevEl.removeClass(swiper.params.navigation.disabledClass);
        }
      }
    };
    var Navigation$1 = {
      name: 'navigation',
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: false,
          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
          lockClass: 'swiper-button-lock'
        }
      },
      create: function create() {
        var swiper = this;
        bindModuleMethods(swiper, {
          navigation: _extends$1({}, Navigation)
        });
      },
      on: {
        init: function init(swiper) {
          swiper.navigation.init();
          swiper.navigation.update();
        },
        toEdge: function toEdge(swiper) {
          swiper.navigation.update();
        },
        fromEdge: function fromEdge(swiper) {
          swiper.navigation.update();
        },
        destroy: function destroy(swiper) {
          swiper.navigation.destroy();
        },
        'enable disable': function enableDisable(swiper) {
          var _swiper$navigation3 = swiper.navigation,
              $nextEl = _swiper$navigation3.$nextEl,
              $prevEl = _swiper$navigation3.$prevEl;

          if ($nextEl) {
            $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
          }

          if ($prevEl) {
            $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
          }
        },
        click: function click(swiper, e) {
          var _swiper$navigation4 = swiper.navigation,
              $nextEl = _swiper$navigation4.$nextEl,
              $prevEl = _swiper$navigation4.$prevEl;
          var targetEl = e.target;

          if (swiper.params.navigation.hideOnClick && !$(targetEl).is($prevEl) && !$(targetEl).is($nextEl)) {
            if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
            var isHidden;

            if ($nextEl) {
              isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
            } else if ($prevEl) {
              isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
            }

            if (isHidden === true) {
              swiper.emit('navigationShow');
            } else {
              swiper.emit('navigationHide');
            }

            if ($nextEl) {
              $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
            }

            if ($prevEl) {
              $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
            }
          }
        }
      }
    };

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }
    var Pagination = {
      update: function update() {
        // Render || Update Pagination bullets/items
        var swiper = this;
        var rtl = swiper.rtl;
        var params = swiper.params.pagination;
        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
        var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        var $el = swiper.pagination.$el; // Current/Total

        var current;
        var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

        if (swiper.params.loop) {
          current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

          if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
            current -= slidesLength - swiper.loopedSlides * 2;
          }

          if (current > total - 1) current -= total;
          if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
        } else if (typeof swiper.snapIndex !== 'undefined') {
          current = swiper.snapIndex;
        } else {
          current = swiper.activeIndex || 0;
        } // Types


        if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
          var bullets = swiper.pagination.bullets;
          var firstIndex;
          var lastIndex;
          var midIndex;

          if (params.dynamicBullets) {
            swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
            $el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");

            if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
              swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;

              if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
                swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
              } else if (swiper.pagination.dynamicBulletIndex < 0) {
                swiper.pagination.dynamicBulletIndex = 0;
              }
            }

            firstIndex = current - swiper.pagination.dynamicBulletIndex;
            lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
            midIndex = (lastIndex + firstIndex) / 2;
          }

          bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");

          if ($el.length > 1) {
            bullets.each(function (bullet) {
              var $bullet = $(bullet);
              var bulletIndex = $bullet.index();

              if (bulletIndex === current) {
                $bullet.addClass(params.bulletActiveClass);
              }

              if (params.dynamicBullets) {
                if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                  $bullet.addClass(params.bulletActiveClass + "-main");
                }

                if (bulletIndex === firstIndex) {
                  $bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                }

                if (bulletIndex === lastIndex) {
                  $bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                }
              }
            });
          } else {
            var $bullet = bullets.eq(current);
            var bulletIndex = $bullet.index();
            $bullet.addClass(params.bulletActiveClass);

            if (params.dynamicBullets) {
              var $firstDisplayedBullet = bullets.eq(firstIndex);
              var $lastDisplayedBullet = bullets.eq(lastIndex);

              for (var i = firstIndex; i <= lastIndex; i += 1) {
                bullets.eq(i).addClass(params.bulletActiveClass + "-main");
              }

              if (swiper.params.loop) {
                if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                  for (var _i = params.dynamicMainBullets; _i >= 0; _i -= 1) {
                    bullets.eq(bullets.length - _i).addClass(params.bulletActiveClass + "-main");
                  }

                  bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
                } else {
                  $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                  $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                }
              } else {
                $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
              }
            }
          }

          if (params.dynamicBullets) {
            var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
            var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
            var offsetProp = rtl ? 'right' : 'left';
            bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
          }
        }

        if (params.type === 'fraction') {
          $el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
          $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
        }

        if (params.type === 'progressbar') {
          var progressbarDirection;

          if (params.progressbarOpposite) {
            progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
          } else {
            progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
          }

          var scale = (current + 1) / total;
          var scaleX = 1;
          var scaleY = 1;

          if (progressbarDirection === 'horizontal') {
            scaleX = scale;
          } else {
            scaleY = scale;
          }

          $el.find(classesToSelector(params.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
        }

        if (params.type === 'custom' && params.renderCustom) {
          $el.html(params.renderCustom(swiper, current + 1, total));
          swiper.emit('paginationRender', $el[0]);
        } else {
          swiper.emit('paginationUpdate', $el[0]);
        }

        if (swiper.params.watchOverflow && swiper.enabled) {
          $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        }
      },
      render: function render() {
        // Render Container
        var swiper = this;
        var params = swiper.params.pagination;
        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
        var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        var $el = swiper.pagination.$el;
        var paginationHTML = '';

        if (params.type === 'bullets') {
          var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

          if (swiper.params.freeMode && !swiper.params.loop && numberOfBullets > slidesLength) {
            numberOfBullets = slidesLength;
          }

          for (var i = 0; i < numberOfBullets; i += 1) {
            if (params.renderBullet) {
              paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
            } else {
              paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
            }
          }

          $el.html(paginationHTML);
          swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
        }

        if (params.type === 'fraction') {
          if (params.renderFraction) {
            paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
          } else {
            paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + ("<span class=\"" + params.totalClass + "\"></span>");
          }

          $el.html(paginationHTML);
        }

        if (params.type === 'progressbar') {
          if (params.renderProgressbar) {
            paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
          } else {
            paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
          }

          $el.html(paginationHTML);
        }

        if (params.type !== 'custom') {
          swiper.emit('paginationRender', swiper.pagination.$el[0]);
        }
      },
      init: function init() {
        var swiper = this;
        swiper.params.pagination = createElementIfNotDefined(swiper.$el, swiper.params.pagination, swiper.params.createElements, {
          el: 'swiper-pagination'
        });
        var params = swiper.params.pagination;
        if (!params.el) return;
        var $el = $(params.el);
        if ($el.length === 0) return;

        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
          $el = swiper.$el.find(params.el);
        }

        if (params.type === 'bullets' && params.clickable) {
          $el.addClass(params.clickableClass);
        }

        $el.addClass(params.modifierClass + params.type);

        if (params.type === 'bullets' && params.dynamicBullets) {
          $el.addClass("" + params.modifierClass + params.type + "-dynamic");
          swiper.pagination.dynamicBulletIndex = 0;

          if (params.dynamicMainBullets < 1) {
            params.dynamicMainBullets = 1;
          }
        }

        if (params.type === 'progressbar' && params.progressbarOpposite) {
          $el.addClass(params.progressbarOppositeClass);
        }

        if (params.clickable) {
          $el.on('click', classesToSelector(params.bulletClass), function onClick(e) {
            e.preventDefault();
            var index = $(this).index() * swiper.params.slidesPerGroup;
            if (swiper.params.loop) index += swiper.loopedSlides;
            swiper.slideTo(index);
          });
        }

        extend(swiper.pagination, {
          $el: $el,
          el: $el[0]
        });

        if (!swiper.enabled) {
          $el.addClass(params.lockClass);
        }
      },
      destroy: function destroy() {
        var swiper = this;
        var params = swiper.params.pagination;
        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
        var $el = swiper.pagination.$el;
        $el.removeClass(params.hiddenClass);
        $el.removeClass(params.modifierClass + params.type);
        if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

        if (params.clickable) {
          $el.off('click', classesToSelector(params.bulletClass));
        }
      }
    };
    var Pagination$1 = {
      name: 'pagination',
      params: {
        pagination: {
          el: null,
          bulletElement: 'span',
          clickable: false,
          hideOnClick: false,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: false,
          type: 'bullets',
          // 'bullets' or 'progressbar' or 'fraction' or 'custom'
          dynamicBullets: false,
          dynamicMainBullets: 1,
          formatFractionCurrent: function formatFractionCurrent(number) {
            return number;
          },
          formatFractionTotal: function formatFractionTotal(number) {
            return number;
          },
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          modifierClass: 'swiper-pagination-',
          // NEW
          currentClass: 'swiper-pagination-current',
          totalClass: 'swiper-pagination-total',
          hiddenClass: 'swiper-pagination-hidden',
          progressbarFillClass: 'swiper-pagination-progressbar-fill',
          progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
          clickableClass: 'swiper-pagination-clickable',
          // NEW
          lockClass: 'swiper-pagination-lock'
        }
      },
      create: function create() {
        var swiper = this;
        bindModuleMethods(swiper, {
          pagination: _extends({
            dynamicBulletIndex: 0
          }, Pagination)
        });
      },
      on: {
        init: function init(swiper) {
          swiper.pagination.init();
          swiper.pagination.render();
          swiper.pagination.update();
        },
        activeIndexChange: function activeIndexChange(swiper) {
          if (swiper.params.loop) {
            swiper.pagination.update();
          } else if (typeof swiper.snapIndex === 'undefined') {
            swiper.pagination.update();
          }
        },
        snapIndexChange: function snapIndexChange(swiper) {
          if (!swiper.params.loop) {
            swiper.pagination.update();
          }
        },
        slidesLengthChange: function slidesLengthChange(swiper) {
          if (swiper.params.loop) {
            swiper.pagination.render();
            swiper.pagination.update();
          }
        },
        snapGridLengthChange: function snapGridLengthChange(swiper) {
          if (!swiper.params.loop) {
            swiper.pagination.render();
            swiper.pagination.update();
          }
        },
        destroy: function destroy(swiper) {
          swiper.pagination.destroy();
        },
        'enable disable': function enableDisable(swiper) {
          var $el = swiper.pagination.$el;

          if ($el) {
            $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
          }
        },
        click: function click(swiper, e) {
          var targetEl = e.target;

          if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !$(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
            if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
            var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);

            if (isHidden === true) {
              swiper.emit('paginationShow');
            } else {
              swiper.emit('paginationHide');
            }

            swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
          }
        }
      }
    };

    Swiper$1.use([Navigation$1, Pagination$1]);
    new Swiper$1(".partners__swiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        prevEl: ".partners__left-btn",
        nextEl: ".partners__right-btn"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        620: {
          slidesPerView: 2,
          spaceBetween: 59
        },
        880: {
          slidesPerView: 3,
          spaceBetween: 59
        },
        1040: {
          slidesPerView: 4,
          spaceBetween: 59
        }
      }
    });

    new Swiper$1(".products_swiper", {
      slidesPerView: "auto",
      spaceBetween: 8,
      slideToClickedSlide: true
    });
    const productsItems = document.querySelectorAll(".products__item");
    const productContent = document.querySelectorAll(".products__tabs-container");
    const costBtns = document.querySelectorAll(".js-products__cost");

    const removeActive = () => productsItems.forEach(item => item.classList.remove("products__item_active"));

    const removeActiveContent = () => productContent.forEach(content => content.classList.remove("products__tabs-container_active"));

    const openTabs = tab => {
      removeActive();
      tab.classList.add("products__item_active");
      const tabContent = document.getElementById(tab.dataset.id);
      removeActiveContent();
      tabContent.classList.add("products__tabs-container_active");
    };

    costBtns.forEach(btn => {
      const text = btn.previousSibling.textContent;
      btn.addEventListener("click", () => openModal("price", text));
    });
    productsItems.forEach(item => {
      item.addEventListener("click", () => openTabs(item));
    });
    const step = 5; // Размер этих самых порций. Чтобы легко можно было поменять.

    const prod = document.querySelectorAll('.products__tabs-container');
    const products = document.querySelector('#products').offsetTop;

    for (let i = 0; i < prod.length; i++) {
      let product = prod[i];
      let li = product.querySelectorAll('li');

      for (let j = 0; j < step; j++) {
        //Для начала перебираем - показываем первые step пунктов.
        // Но только если такие существуют
        if (li[j]) {
          li[j].classList.add('visi');
        }
      }

      let more = product.querySelector('.js-products__cost-all');
      more.addEventListener('click', function () {
        let visi = product.querySelectorAll('.visi');
        let next = visi[visi.length - 1].nextElementSibling; // Достали следующий элемент ПОСЛЕДНЕГО элемента visi. 
        //Предполагается, что никогда не будет добавлено полностью пустых ul.

        function expandList() {
          let it = 0;

          while (it < step) {
            if (next) {
              next.classList.add('visi');
              next = next.nextElementSibling;
              more.scrollIntoView(false);
              it++;
            } else {
              more.classList.add('products__cost-all_rotate');
              more.textContent = "Сollapse the list";
              break; // Если следующего элемента не оказалось - выключаем цикл.
            }
          }
        }

        function collapseList() {
          window.scrollTo({
            top: products + 250
          });
          li.forEach((item, idx) => {
            idx + 1 > step && item.classList.remove('visi');
          });
          more.classList.remove('products__cost-all_rotate');
          more.textContent = "Expand the list";
        }

        more.classList.contains('products__cost-all_rotate') ? collapseList() : expandList();
      });
    }

    // const allListBtn = document.querySelector(".invest__all");
    document.querySelectorAll(".invest__parametr");
    const playVideoBtn = document.querySelector(".invest__link-img");
    const videoContainer = document.querySelector(".invest__video");
    const videoCloseBtn = document.querySelector(".invest__video-close");
    const videoPlayer = document.querySelector(".js-invest__video-player");
    videoCloseBtn.addEventListener("click", () => {
      videoContainer.classList.remove("invest__video_active");
      videoPlayer.pause();
    });
    playVideoBtn.addEventListener("click", () => {
      videoContainer.classList.add("invest__video_active");
      videoPlayer.play();
    }); // allListBtn.addEventListener("click", () => {
    //     elements.forEach((element) => {
    //         element.classList.toggle("invest__parametr_all");
    //     });
    //     allListBtn.textContent === "Раскрыть весь список" ? (allListBtn.textContent = "Свернуть весь список") : (allListBtn.textContent = "Раскрыть весь список");
    // });

    const vacancys = document.querySelectorAll(".career__vacancy");
    const echoBtns = document.querySelectorAll(".career__vacancy-button ");

    const openedVacancy = vacancy => {
      const vacancyContent = vacancy.querySelector(".career__vacancy-content");
      const vacancyTitle = vacancy.querySelector(".career__vacancy-title");
      vacancyContent.classList.toggle("career__vacancy-content_opened");
      vacancyTitle.classList.toggle("open");
    };

    vacancys.forEach(vacancy => {
      vacancy.addEventListener("click", () => openedVacancy(vacancy));
    });
    echoBtns.forEach(btn => {
      btn.addEventListener("click", () => openModal("response"));
    });

    const offices = document.querySelectorAll(".contacts__office-item");
    const officeTitle = document.querySelectorAll(".contacts__office-item-title");
    const inputFile = document.querySelector(".contacts__input-file");
    const spanFile = document.querySelector(".contacts__file");
    const officeContainer$1 = document.querySelector(".office");
    const submitButton = document.querySelector(".contacts__btn");

    const openedOffice = office => {
      const officeContent = office.querySelector(".contacts__office-item-content");
      const officeTitle = office.querySelector(".contacts__office-item-title");
      officeContent.classList.toggle("contacts__office-item-content_opened");
      officeTitle.classList.toggle("open");
    };

    offices.forEach(office => {
      office.addEventListener("click", () => openedOffice(office));
    });
    inputFile.addEventListener("change", () => {
      spanFile.textContent = inputFile.value;
    });

    const openCountry = office => {
      const countryId = office.dataset.id;
      console.log(countryId);
      const content = document.querySelector(`.geography__tabs-content_${countryId}`).innerHTML;
      officeContainer$1.innerHTML = content;
      openModal("office");
    };

    function breakpointChecker() {
      if (window.innerWidth > 767) {
        officeTitle.forEach(office => {
          office.addEventListener('click', () => openCountry(office));
        });
      }
    }

    submitButton.addEventListener('click', e => {
      e.preventDefault();
      openModal("thanks");
    });
    breakpointChecker();
    window.addEventListener('resize', breakpointChecker);

    const agreement = document.querySelector(".js-agreement");
    agreement.addEventListener("click", () => openModal("agreement"));

    const geographyTabs = document.querySelectorAll(".geography__tabs-item");
    const countrys = document.querySelectorAll(".geography__country");
    const officeContainer = document.querySelector(".office");
    new Swiper$1(".geography__swiper", {
      slidesPerView: "auto",
      spaceBetween: 8,
      slideToClickedSlide: true
    });

    const removeTab = () => {
      geographyTabs.forEach(item => {
        item.classList.remove("geography__tabs-item_active");
      });
    };

    const removeTabContent = () => {
      const tabsContent = document.querySelectorAll(".geography__tabs-content");
      tabsContent.forEach(item => {
        item.classList.remove("geography__tabs-content_active");
      });
    };

    const openTab = e => {
      const tab = e.target;
      const tabId = e.target.dataset.id;
      const tabContent = document.querySelector(`.geography__tabs-content_${tabId}`);
      removeTab();
      removeTabContent();
      tab.classList.add("geography__tabs-item_active");
      tabContent.classList.add("geography__tabs-content_active");
    };

    geographyTabs.forEach(item => {
      item.addEventListener("click", openTab);
    });
    countrys.forEach(country => {
      country.addEventListener("click", () => {
        const countryId = country.dataset.country;
        const content = document.querySelector(`.geography__tabs-content_${countryId}`).innerHTML;
        officeContainer.innerHTML = content;
        openModal("office");
      });
    });

}));
