/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(7);
	__webpack_require__(11);
	__webpack_require__(14);
	__webpack_require__(18);

	__webpack_require__(21);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(2);
	__webpack_require__(3);

	$('nav ul li.dropdown > a.expand').on('click', function(){
		if(!$(this).parent('li.dropdown').hasClass('active')){
			$("li.dropdown.active").children("ul").slideUp(100);
			$("li.dropdown.active").removeClass("active");
		}
			
		$(this).parent('li.dropdown').addClass('active');
		$(this).parent('li.dropdown').children("ul").slideToggle(200);

		hideAccount();
			
		return false;
	});

	$('nav ul li.dropdown ul li.dropright a.expand').on('click', function(){
		if($('.mobile-btn').hasClass('active')) $(this).parent('li.dropright').children("ul").slideToggle(200);
			
		return false;
	});

	$(".account-btn").on('click', function(){
		hideMenu();

		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			if(window.innerWidth <= 900) $('body').css({'overflow': 'auto'});
		} else {
			$(this).addClass('active');
			if(window.innerWidth <= 900) $('body').css({'overflow': 'hidden'});
		} 
			
		$('.user-card').slideToggle(200);
			
		return false;
	});

	$('body').on('click', function(){
		hideAccount();
		if(!$(this).hasClass('expand')) hideMenu();
	});

	$('.mobile-search .rf').on('click', function(){
		return false;
	});

	$('.mobile-btn').on('click', function(){
		hideAccount();

		if($(this).hasClass('active')){
			$('body').css({'overflow': 'auto'});
			$(this).removeClass('active');
		} else {
			$('body').css({'overflow': 'hidden'});
			$(this).addClass('active');
		}
		$('ul.left-btns').slideToggle(200);

		return false;
	});

	function hideAccount(){
		if($(".account-btn").hasClass('active')) {
			$('.user-card').slideUp(200);
			$(".account-btn").removeClass('active');
			$('body').css({'overflow': 'auto'});
		}
	}

	function hideMenu(){
		if($('.mobile-btn').hasClass('active')){
			$('ul.left-btns').slideUp(100);
			$('.mobile-btn').removeClass('active');
		}
		$('body').css({'overflow': 'auto'});
		$("li.dropdown.active").children("ul").slideUp(100);
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*eslint-disable no-unused-vars*/
	/*!
	 * jQuery JavaScript Library v3.1.0
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-07-07T21:44Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};



		function DOMEval( code, doc ) {
			doc = doc || document;

			var script = doc.createElement( "script" );

			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.1.0",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.0
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-01-04
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true;
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
		// Known :disabled false positives:
		// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
		// not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Check form elements and option elements for explicit disabling
			return "label" in elem && elem.disabled === disabled ||
				"form" in elem && elem.disabled === disabled ||

				// Check non-disabled form elements for fieldset[disabled] ancestors
				"form" in elem && elem.disabled === false && (
					// Support: IE6-11+
					// Ancestry is covered for us
					elem.isDisabled === disabled ||

					// Otherwise, assume any non-<option> under fieldset[disabled] is disabled
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						("label" in elem || !disabledAncestor( elem )) !== disabled
				);
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnotwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? JSON.parse( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) ),
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support: IE <=9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox <=42
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				return ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

				/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;

		} else {
			opt.duration = typeof opt.duration === "number" ?
				opt.duration : opt.duration in jQuery.fx.speeds ?
					jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in uncached url if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rts, "" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win, rect, doc,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;

				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}

			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	jQuery.parseJSON = JSON.parse;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}





	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}


	return jQuery;
	} );


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./navigation.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./navigation.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "nav{\n\tbackground: #fff;\n\tborder-bottom: 1px solid #E6E6E6;\n\tdisplay: block;\n\twidth: 100%;\n\theight: 48px;\n}\n\nnav div#logo{\n\tfloat: left;\n}\n\nnav div#logo a{\n\tmargin-top: 13px;\n\tdisplay: inline-block;\n}\n\nnav div#logo a img{\n\theight: 23px;\n\twidth: 100px;\n}\n\nnav ul.left-btns{\n\tlist-style: none;\n\tmargin: 0;\n\tpadding: 0;\n\tfloat: left;\n\tmargin-left: 18px;\n\tposition: relative;\n\theight: 50px;\n\tz-index: 2;\n}\n\nnav ul.left-btns > li{\n\tfloat: left;\n\tposition: relative;\n}\n\nnav ul.left-btns > li > a{\n\tpadding: 14px 20px;\n\tdisplay: inline-block;\n\ttext-decoration: none;\n\tcolor: #2F2F2F;\n\tfont-size: 15px;\n\tbackground: #fff;\n\tposition: relative;\n\ttransition: 1s;\n}\n\nnav ul.left-btns > li > a:hover, nav ul.left-btns > li > a:focus{\n\tbackground: #F2F2F2;\n\ttransition: 0.3s;\n}\n\nnav ul.left-btns > li.dropdown > a:after{\n    content: \"\\2039\";\n    display: block;\n    position: absolute;\n    top: 18px;\n    right: 10px;\n    font-size: 13px;\n    font-weight: 100;\n    transform: rotate(-90deg);\n}\n\n\n/*** navi drops ***/\nnav ul.left-btns > li.dropdown > ul{\n\tlist-style: none;\n\tmargin: 0;\n\tpadding: 0;\n\tposition: absolute;\n\ttop: 48px;\n\tleft: 0px;\n\tbackground: #F2F2F2;\n\twidth: 250px;\n\tborder-right: 1px solid #E6E6E6;\n\tborder-left: 1px solid #E6E6E6;\n\tborder-bottom: 1px solid #AAAAAA;\n\tdisplay: none;\n}\n\nnav ul.left-btns > li.dropdown > ul > li > a{\n\tpadding: 15px 20px;\n\tdisplay: block;\n\ttext-decoration: none;\n\tcolor: #2F2F2F;\n\tfont-size: 15px;\n\tposition: relative;\n\ttransition: 1s;\n}\n\nnav ul.left-btns > li.dropdown > ul > li > a:hover{\n\tbackground: #E5E5E5;\n\ttransition: 0.2s;\n}\n\nnav ul.left-btns > li.dropdown > ul > li.dropright > a:after{\n\tcontent: \"\\203A\";\n    display: block;\n    position: absolute;\n    top: 18px;\n    right: 10px;\n    font-size: 13px;\n    font-weight: 100;\n}\n\nnav ul.left-btns > li.dropdown > ul > li.dropright > ul{\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0;\n\tposition: absolute;\n\ttop: 0px;\n\tfont-size: 15px;\n\tleft: 250px;\n\tbackground: #E5E5E5;\n\tdisplay: none;\n\twidth: 300px;\n\tmin-height: 100%;\n\tborder-bottom: 1px solid #AAAAAA;\n}\n\nnav ul.left-btns > li.dropdown > ul > li.dropright:hover{\n\tbackground: #E5E5E5;\n}\n\nnav ul.left-btns > li.dropdown > ul > li.dropright:hover > ul{\n\tdisplay: block;\n}\n\nnav ul.left-btns > li.dropdown > ul > li.dropright > ul > li > a{\n\tpadding: 15px 20px;\n\tdisplay: block;\n\tcolor: #333333;\n\ttext-decoration: none;\n\ttransition: 1s;\n}\n\nnav ul.left-btns > li.dropdown > ul > li.dropright > ul > li > a:hover{\n\tbackground:#DBDBDB;\n\ttransition: 0.2s;\n}\n/*** /navi drops ***/\n\n/*** search ***/\nnav .search{\n\tfloat: right;\n\tdisplay: block;\n\tposition: relative;\n}\n\nnav .search input{\n\twidth: 200px;\n\theight: 20px;\n\tpadding: 6px 30px 6px 10px;\n\tfont-size: 17px;\n\tmargin-top: 6px;\n\tcolor: #333;\n}\nnav .search input::-webkit-input-placeholder,\nnav .search input::-moz-placeholder,\nnav .search input:-moz-placeholder,\nnav .search input:-ms-input-placeholder{\n\tcolor:#2F2F2F;\n}\n\nnav .search input:focus{\n\toutline: none;\n}\n\n\nnav .search i{\n\tposition: absolute;\n\ttop: 14px;\n\tright: 10px;\n\tcolor: #ABABB3;\n}\n/*** /search ***/\n\n/*** cart ***/\n.cart-btn{\n\tpadding: 14px 10px;\n\tdisplay: inline-block;\n\ttext-decoration: none;\n\tcolor: #666;\n\tfont-size: 15px;\n\tbackground: #fff;\n\tposition: relative;\n\tfloat: right;\n\tmargin: 0 0 0 10px;\n\ttransition: 1s; \n}\n\n.cart-btn:hover, .cart-btn:focus{\n\tbackground: #F2F2F2;\n\ttransition: 0.3s;\n}\n\n.cart-btn span{\n\tfont-size: 13px;\n}\n/*** /cart ***/\n\n/*** account-btn ***/\n.account-btn{\n\tpadding: 5px 10px;\n\tdisplay: inline-block;\n\ttext-decoration: none;\n\tcolor: #2F2F2F;\n\tfont-size: 14px;\n\tbackground: #fff;\n\tposition: relative;\n\tfloat: right;\n\tborder-left: 1px solid #fff;\n\tborder-right: 1px solid #fff;\n\ttransition: 1s;\n}\n\n.account-btn:hover, .account-btn:focus{\n\tbackground: #F2F2F2;\n\ttransition: 0.3s;\n}\n\n.account-btn.active{\n\tbackground: #fff;\n\tz-index: 4;\n\tborder-left: 1px solid #DFDFDF;\n\tborder-right: 1px solid #DFDFDF;\n}\n\n.account-btn img{\n\t-webkit-border-radius: 90px;\n\t-moz-border-radius: 90px;\n\tborder-radius: 90px;\n\theight: 38px;\n}\n\n.account-btn span{\n\tpadding-top: 10px;\n\tpadding-right: 5px;\n\tcolor: #666;\n\tdisplay: inline-block;\n\tfont-size: 14px;\n}\n/*** /account-btn ***/\n\n/*** user-card ***/\n.user-card{\n\tdisplay: block;\n\tposition: absolute;\n\tz-index: 2;\n\tright: 0;\n\ttop: 47px;\n\tpadding: 10px;\n\tbackground: #fff;\n\tborder: 1px solid #E6E6E6;\n\tdisplay: none;\n}\n\n.user-card img{\n\twidth: 64px;\n\theight: 64px;\n\t-webkit-border-radius: 90px;\n\t-moz-border-radius: 90px;\n\tborder-radius: 90px;\n}\n\n.user-card .user-menu{\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 10px -10px -10px -10px; \n}\n\n.user-card .user-menu li a{\n\tpadding: 10px 10px;\n\tcolor: #333;\n\ttext-decoration: none;\n\tfont-size: 15px;\n\tdisplay: block;\n\ttransition: 1s;\n}\n\n.user-card .user-menu li a:hover{\n\tbackground: #DFDFDF;\n\ttransition: 0.2s;\n}\n\n.user-card > div > span{\n\tdisplay: block;\n\tfont-size: 18px;\n\tcolor: #333;\n\tfont-weight: normal;\n\tmargin: 0 0 0 80px;\n}\n\n.user-card > div > span:nth-child(3){\n\tfont-size: 15px;\n\tcolor: #666;\n}\n/*** /user-card ***/\n\n.mobile-btn{\n\tpadding: 14px 10px;\n\tdisplay: inline-block;\n\ttext-decoration: none;\n\tcolor: #666;\n\tfont-size: 15px;\n\tbackground: #fff;\n\tposition: relative;\n\tfloat: right;\n\tdisplay: none;\n\ttransition: 1s; \n}\n\n.mobile-btn:hover, .mobile-btn:focus{\n\tbackground: #F2F2F2;\n\ttransition: 0.3s;\n}\n\n.mobile-btn.active{\n\tbackground: #fff;\n\tborder-left: 1px solid #DFDFDF;\n\tborder-right: 1px solid #DFDFDF;\n\tz-index: 4;\n}\n\n.mobile-search{\n\tdisplay: none;\n\tpadding: 15px 20px;\n}\n\n.mobile-search input{\n\tpadding: 5px 4%;\n\twidth:72%;\n\tmargin: 0;\n}\n\n.mobile-search button{\n\tmargin: 0;\n\twidth: 16%;\n\tpadding: 5px 2%;\n\tbackground: transparent;\n\tborder: none;\n}\n\n@media screen and (max-width: 1130px) {\n \tnav div#logo{\n \t\tmargin-left: 15px;\n \t}\n}\n\n@media screen and (max-width: 900px) {\n    nav .search input{\n        display: none;\n    }\n\n    nav .search i{\n    \tdisplay: none;\n    }\n\n\t.mobile-btn{\n\t\tdisplay: block;\n\t}\n\n    nav ul.left-btns{\n    \tposition: absolute;\n    \tz-index: 2;\n    \ttop: 47px;\n    \tright: 0;\n    \twidth: 250px;\n    \tmargin-left: 0;\n    \tborder-top: 1px solid #DFDFDF;\n    \tbackground: #fff;\n    \toverflow-x: hidden;\n    \toverflow-y: auto;\n    \tdisplay: none;\n    }\n\n    nav ul.left-btns li{\n    \tfloat: none;\n    \tposition: relative;\n    }\n\n    nav ul.left-btns li a{\n    \tdisplay: block;\n    }\n\n   nav ul.left-btns > li.dropdown > ul{\n    \tposition: relative;\n    \ttop: 0px;\n    \twidth: 100%;\n    \tborder: 0;\n    }\n\n     nav ul.left-btns > li.dropdown{\n     \twidth: 100%;\n     }\n\n    nav ul.left-btns > li.dropdown > ul > li.dropright > ul{\n\t\tlist-style: none;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t\tposition: relative;\n\t\ttop: 0px;\n\t\tfont-size: 15px;\n\t\tleft: 0px;\n\t\tbackground: #E5E5E5;\n\t\tdisplay: none;\n\t\twidth: 100%;\n\t\tmin-height: 100%;\n\t\tborder-bottom: none;\n\t}\n\n\tnav ul.left-btns > li.dropdown > ul > li.dropright > a:after{\n\t\ttransform: rotate(90deg);\n\t}\n\n\tnav ul.left-btns > li.dropdown > ul > li.dropright:hover > ul{\n\t\tdisplay: none;\n\t}\n\n\tnav ul.left-btns > li.dropdown > a:after{\n\t\tright: 10px;\n\t}\n\n\t.user-card{\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\tz-index: 2;\n\t\tright: 0;\n\t\twidth: 300px;\n\t\ttop: 47px;\n\t\tbackground: #fff;\n\t\tdisplay: none;\n\t}\n}\n\n@media screen and (max-width: 680px) {\n\t.mobile-btn{\n\t\tdisplay: block;\n\t}\n\n    nav ul.left-btns{\n    \tposition: absolute;\n    \tz-index: 2;\n    \ttop: 47px;\n    \twidth: 100%;\n    \tmargin-left: 0;\n    \tborder-top: 1px solid #DFDFDF;\n    \tbackground: #fff;\n    \toverflow-x: hidden;\n    \toverflow-y: auto;\n    \tdisplay: none;\n    }\n\n    nav ul.left-btns li{\n    \tfloat: none;\n    \tposition: relative;\n    }\n\n    nav ul.left-btns li a{\n    \tdisplay: block;\n    }\n\n   nav ul.left-btns > li.dropdown > ul{\n    \tposition: relative;\n    \ttop: 0px;\n    \twidth: 100%;\n    \tborder: 0;\n    }\n\n     nav ul.left-btns > li.dropdown{\n     \twidth: 100%;\n     }\n\n    nav ul.left-btns > li.dropdown > ul > li.dropright > ul{\n\t\tlist-style: none;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t\tposition: relative;\n\t\ttop: 0px;\n\t\tfont-size: 15px;\n\t\tleft: 0px;\n\t\tbackground: #E5E5E5;\n\t\tdisplay: none;\n\t\twidth: 100%;\n\t\tmin-height: 100%;\n\t\tborder-bottom: none;\n\t}\n\n\tnav ul.left-btns > li.dropdown > ul > li.dropright > a:after{\n\t\ttransform: rotate(90deg);\n\t}\n\n\tnav ul.left-btns > li.dropdown > ul > li.dropright:hover > ul{\n\t\tdisplay: none;\n\t}\n\n\tnav ul.left-btns > li.dropdown > a:after{\n\t\tright: 10px;\n\t}\n\n\t.user-card{\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\tz-index: 2;\n\t\tright: 0px;\n\t\tleft: 0px;\n\t\twidth: 100%;\n\t\ttop: 47px;\n\t\tbackground: #fff;\n\t\tdisplay: none;\n\t}\n\n\tnav .search i{\n\t\tdisplay: none;\n\t}\n\n\t.mobile-search{\n\t\tdisplay: block;\n\t}\n}\n\n@media screen and (max-width: 450px) {\n\t.account-btn span{\n\t\tdisplay: none;\n\t}\n}\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(2);
	__webpack_require__(8);

		function nameValid(){
			var name = $("#invision-form input[name=name]").val();
			var valid = false;

			if(name.length >= 2 && name.length <= 16){
				if($("#invision-form input[name=name]").hasClass('invalid')) $("#invision-form input[name=name]").removeClass('invalid'); 
				$("#invision-form input[name=name]").addClass('valid');
				valid = true;
			} else {
				if($("#invision-form input[name=name]").hasClass('valid')) $("#invision-form input[name=name]").removeClass('valid');
				$("#invision-form input[name=name]").addClass('invalid');
			}

			return valid;
		}

		function emailValid(){
			var email = $("#invision-form input[name=email]").val();
			var valid = false;

			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if(re.test(email)){
				if($("#invision-form input[name=email]").hasClass('invalid')) $("#invision-form input[name=email]").removeClass('invalid'); 
				$("#invision-form input[name=email]").addClass('valid');
				valid = true;
			} else {
				if($("#invision-form input[name=email]").hasClass('valid')) $("#invision-form input[name=email]").removeClass('valid');
				$("#invision-form input[name=email]").addClass('invalid');
			}

			return valid;
		}

		function passValid(){
			var pass = $("#invision-form input[name=pass]").val();
			var valid = false;

			if(pass.length >= 4 && pass.length <= 16){
				if($("#invision-form input[name=pass]").hasClass('invalid')) $("#invision-form input[name=pass]").removeClass('invalid'); 
				$("#invision-form input[name=pass]").addClass('valid');
				valid = true;
			} else {
				if($("#invision-form input[name=pass]").hasClass('valid')) $("#invision-form input[name=pass]").removeClass('valid');
				$("#invision-form input[name=pass]").addClass('invalid');
			}

			return valid;
		}

		$('#invision-form').on('submit', function(e){
			var test  = 0;
			var valid = 3;

			if(nameValid())  test++;
			if(emailValid()) test++;
			if(passValid())  test++;

			if(test != valid){
				e.preventDefault();
				return false;
			}
		});

		$('#invision-form input[name=name]').on('change', function(){ nameValid() });
		$('#invision-form input[name=email]').on('change', function(){ emailValid() });
		$('#invision-form input[name=pass]').on('change', function(){ passValid() });

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./invision-form.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./invision-form.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "#invision{\n\tbackground: #323A45;\n\tdisplay: block;\n\twidth: 100%;\n\tpadding: 110px 0 100px 0;\n}\n\n#invision h2{\n\tcolor: #fff;\n\ttext-align: center;\n\tfont-weight: 100;\n}\n#invision .four-box{\n\twidth: 23%;\n\tmargin: 15px 0;\n\tpadding: 0 1%;\n\tdisplay: block;\n\tfloat: left;\n\tposition: relative;\n}\n\n#invision .four-box input{\n\tborder: 2px solid #323A45;\n\tpadding: 15px 10px 15px 40px;\n\tfont-size: 20px;\n\t-webkit-border-radius: 4px;\n\t-moz-border-radius: 4px;\n\tborder-radius: 4px;\n\tdisplay: block;\n\tmax-width: 85%;\n\tmargin: 5px 0;\n}\n\n#invision .four-box input.invalid{\n\tborder: 2px solid #FF3366;\n}\n\n#invision .four-box input.valid{\n\tborder: 2px solid #323A45;\n}\n\n#invision .four-box input:focus{\n\toutline: none;\n}\n\n#invision .four-box input:after{\n\tcontent: \"\";\n\tbackground: url(" + __webpack_require__(10) + ");\n\twidth: 24px;\n\theight: 24px;\n\tposition: absolute;\n\tleft: 5px;\n\ttop: 15px;\n}\n\n#invision .four-box span{\n\tposition: absolute;\n\ttop: 20px;\n\tleft: 20px;\n\twidth: 24px;\n\theight: 24px;\n\tbackground: url(" + __webpack_require__(10) + ");\n\tbackground-position: 0px 0px;\n}\n\n#invision .four-box button{\n\tbackground: #FF3366;\n\tcolor: #fff;\n\twidth: 100%;\n\ttext-align: center;\n\tpadding: 17px 5px;\n\ttext-transform: uppercase;\n\tfont-size: 13px;\n\tborder: 2px solid #FF3366;\n\t-webkit-border-radius: 4px;\n\t-moz-border-radius: 4px;\n\tborder-radius: 4px; \n\tmargin-top: 7px;\n\tcursor: pointer;\n\ttransition: 0.3s;\n}\n\n#invision .four-box button:hover{\n\tbackground: #F42156;\n\ttransition: 0.3s;\n}\n\n#invision p{\n\tcolor: #747C83;\n\ttext-align: center;\n\tfont-size: 13px;\n}\n\n#invision p a{\n\tcolor: #747C83;\n}\n\n@media screen and (max-width: 1070px) {\n\t#invision .four-box{\n\t\twidth: 300px;\n\t\tfloat: none;\n\t\tdisplay: table;\n\t\tmargin: 0 auto;\n\t}\n\n\t#invision  h2,#invision p{\n\t\tpadding-left: 10px;\n\t\tpadding-right: 10px;\n\t}\n\n\t#invision .four-box button {\n\t\twidth: 100%;\n\t\tmargin-left: 0px;\n\t}\n}\n\n@media screen and (max-width: 450px) {\n\t#invision .four-box span{\n\t\tleft: 15px;\n\t}\n}\n\n\n@media screen and (max-width: 345px) {\n\t#invision .four-box{\n\t\twidth: 290px;\n\t}\n\n\t#invision .four-box button{\n\t\twidth: 101.2%;\n\t\tmargin-left: -2px;\n\t}\n}", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAABICAYAAADs+TUPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM3RUU0RTZFNDQ4RDExRTZCODgyQzFFQUI2NkMwNjMwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM3RUU0RTZGNDQ4RDExRTZCODgyQzFFQUI2NkMwNjMwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzdFRTRFNkM0NDhEMTFFNkI4ODJDMUVBQjY2QzA2MzAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzdFRTRFNkQ0NDhEMTFFNkI4ODJDMUVBQjY2QzA2MzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5IYvNcAAAEU0lEQVR42uyZ22sUVxzHd7KTrlrFS4xWY0lUKt5QUbHUUkuttbViaelDVQR98UH70EfxL/BP0BcFseqDYuk1EKjQSqtQW7y0IlaN1WhsEtv1GhOzGb8/+AyMm5nZnZ1dasUDH3azu3N+5/zu58TxPC9Ty1GXqfGouQB3x8690/X6rhhexXn/Fa3bt2zsdJn8hLgpnCpMbnO0iFVijwkYLU6JwSru4K54zbeBV+XJbRTCjGw7+UzMr8D4WbFUfFqsZjfw/o74BpvMEm0iX2J3NvEEnrGJj6CRUDe1Ly6ZYRC2USwUuYjJh7PqdeKy2Cc6h7hpyIMPxXfinHhfzBBHRTe6rReTxAp+v1/8HRkHMdu/xm6Wi0/EcdEu5ogF4jfxc7FKyhFgK2wWL4mz7Mb8+m3xFmo4ILpEo5iJ4M6g94QJMHtMZIUz0etDvrvCpGbQ62IgoM5GnvldnBc9UQKGiXfY8mEiOzh6xV8hAWWeM5XdmW0ORQl4JI6x3aSjHabx96AfD3X4cj0C2lNG8GVeR/gCXCZdgxtmqpTszEEu+ALaSEyTqpiL8rhwxnleMv/7muy/UW2OW8QE6kWWKM6TKkKHanFZyc7GKFJ2C2k7S76xqL5IwutLmuz88aJYKRpwuXNEqD0zj1pgu/qeIE0kwD5fJMaLgxQgfwywckvn68UNEt1gEiM3kMB+LJo8OLrZ2by4nipKwGh0/mcJG51hMbmkAtyAOuJGH4nSqSQOvFoG2oOw8hezkHvleJEZ6gNy+ShK4aYyBDTS4vQRgF8Fdx8UYBPPFl8EIjZXhgBz2RewxXvi6ygBNm7TCFc63ixlgzTte/1Tn64tYrcS4TURMFa8QhKsiYAOjlr5WgkYJC17tRJgcXG/jPxUdsEJa+evPdNdRaEcFeVStJBumMrdouJhLrg2RS3oGNIJ/+97U7dEVxfMlH7ttYDrj6t4STq7Og4Tr5LkctSM09SN+2kCzVZrd0mrOQXtpkdq4ergZfEtB8GKbGD9zuuUxC9ZuYewXWTVRZTXxAIcTowe3Z0/5pCybbRynm6oREUjUUUXzcAITv9LMXYr3XWWw3t3VOzECWji7u0NMU6M4RzdgKAmftvECf9REgEFblB68JTrHEv7+b4FFQ6gTiepivxDRntEA3wFbFe34mpEXcyl3gPuiuJuuyaLf+JuxaIE9KOWZvQfNhbTk3ZVGgeXEPIR/WdwzOZ24JdSgRYXyWaDH8THYoP4g/sh0/sS8RPe46XJpnkm8dvCMailF+MX0uQiP6KbuaZpo8XvxfjTCbaKBEyhVZyCh5wOqC1DJp0rNiP8bJSxiwXMIsE5XKmdxNA9Rb+zz6+yAKvhHyL8GPExRIBDIluOZ3QwaW9ME3YDRgaOvWvIvFeLBQwLeMavCaviPejA6MvE58Ve5LKKNKebAs9PjrJBNuB2Tgoh2TABHhVqWxUuBL0wAZaSd2Sq8y+WJxLfYwEGAJwaFIV8powhAAAAAElFTkSuQmCC"

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(2);
	__webpack_require__(12);

	$('.footer-toggle').on('click', function(){
		if(window.innerWidth <= 720){
			$($(this).data('id')).toggle(200);
			if($(this).hasClass('active')) $(this).removeClass('active'); else $(this).addClass('active');
		}
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./apple-footer.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./apple-footer.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "#apple{\n\tbackground: #F2F2F2;\n}\n\n#apple div.container{\n\tpadding-top: 30px;\n\tpadding-bottom: 20px;\n}\n\n#apple .fives{\n\tdisplay: block;\n\twidth: 18%;\n\tfloat: left;\n\tpadding: 0 1%;\n}\n\n\n#apple .fives h5{\n\tmargin: 0;\n\tmargin-top: 15px;\n\tfont-size: 13px;\n\tfont-weight: normal;\n\tcolor: #000;\n}\n\n#apple .fives ul{\n\tlist-style: none;\n\tpadding:0;\n\tmargin: 0;\n}\n\n\n#apple .fives ul li a{\n\tfont-size: 11px;\n\tcolor: #666666;\n\ttext-decoration: none;\n}\n\n#apple .fives ul li a:hover{\n\ttext-decoration: underline;\n}\n\n#apple .moreways{\n\tfont-size: 11px;\n\tcolor: #999999;\n\tdisplay: block;\n\tpadding: 20px 10px 0 10px;\n\n}\n\n#apple .moreways a{\n\tcolor: #0088CC;\n\ttext-decoration: none;\n}\n#apple .moreways a:hover{\n\ttext-decoration: underline;\n\tcolor: #333;\n}\n\n#apple .copyright{\n\tfont-size: 11px;\n\tcolor: #999999;\n\tdisplay: inline-block;\n\tmargin-top: 10px;\n\tfloat: left;\n\tpadding: 0 10px;\n}\n\n#apple ul.terms{\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 5px 0;\n\tmargin-left: 20px;\n\tdisplay: inline-block;\n\tfloat: left;\n}\n\n#apple ul.terms li{\n\tfloat: left;\n\tpadding: 0;\n\tmargin: 0 10px;\n\tposition: relative;\n}\n\n#apple ul.terms li:after{\n\tcontent: \"|\";\n\tdisplay: block;\n\tposition: absolute;\n\tright: -15px;\n\ttop: 2px;\n\tcolor: #D6D6D6;\n}\n\n#apple ul.terms li:nth-last-child(1):after{\n\tdisplay: none;\n}\n\n#apple ul.terms li a{\n\tcolor: #666666;\n\tfont-size: 12px;\n\ttext-decoration: none;\n}\n\n#apple ul.terms li a:hover{\n\tcolor: #333;\n\ttext-decoration: underline;\n}\n\n#apple .language{\n\tcolor: #999;\n\ttext-decoration: none;\n\tfont-size: 12px;\n\tdisplay: block;\n\tfloat: right;\n\tmargin-top: 10px;\n}\n\n#apple .language img{\n\tmargin-right: 5px;\n}\n\n@media screen and (max-width: 828px) {\n\t#apple ul.terms{\n\t\tmargin-left: 0px;\n\t}\n}\n\n@media screen and (max-width: 720px) {\n\t#apple .language{\n\t\tfloat: none;\n\t\tmargin-left: 10px;\n\t}\n\n\t#apple .fives{\n\t\twidth: 96%;\n\t\tpadding: 0 2%;\n\t}\n\n\t#apple .fives h5{\n\t\tborder-bottom: 1px solid #E3E3E3;\n\t\tpadding: 10px 0;\n\t\tmargin-top: 0;\n\t\tcursor: pointer;\n\t\tposition: relative;\n\t}\n\n\t#apple .fives h5:after{\n\t\tcontent: \"+\";\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\tcolor: #000;\n\t\tright: 10px;\n\t\ttop: 8px;\n\t\ttransition: 0.2s;\n\t}\n\n\t#apple .fives h5.active:after{\n\t\ttransform: rotate(45deg);\n\t\ttransition: 0.2s;\n\t}\n\n\t#apple .fives h5:hover{\n\t\tcolor: #000;\n\t}\n\n\t#apple .fives ul{\n\t\tdisplay: none;\n\t}\n\n\t#apple .fives ul li{\n\t\tpadding: 10px;\n\t}\n}\n", ""]);

	// exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(15);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./hero.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./hero.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "#hero{\n\tmin-height: 700px;\n\tmargin-top: 0;\n\tbackground: #F7F7F7;\n}\n\n#hero .back{\n\tbackground: #F7F7F7 url(" + __webpack_require__(17) + ") no-repeat;\n\twidth: 60%;\n\tleft: 40%;\n\tmin-height: 700px;\n\tposition: absolute;\n}\n\n#hero h1{\n\tmargin-top: 100px;\n\tdisplay: inline-block;\n\twidth: 40%;\n\tfont-weight: 100;\n\tmargin-bottom: 10px;\n\tcolor: #47525D;\n\tfont-size: 40px;\n\tline-height: 1.5;\n}\n\n#hero p{\n\tfont-size: 22px;\n\twidth: 40%;\n\tcolor: #57616B;\n\tmargin-top: 0px;\n}\n\n#hero a.btn{\n\tbackground: #0071E0;\n\tpadding: 15px 20px;\n\tcolor: #fff;\n\tfont-size: 20px;\n\t-webkit-border-radius: 5px;\n\t-moz-border-radius: 5px;\n\tborder-radius: 5px;\n\tdisplay: inline-block;\n\tmargin-top: 50px;\n\ttext-decoration: none;\n}\n\n#hero span{\n\tdisplay: block;\n\tmargin-top: 20px;\n}\n\n#hero span a{\n\tcolor: #0071E0;\n\ttext-decoration: none;\n\tborder-bottom: 1px solid #0071E0;\n}\n\n@media screen and (min-width: 1710px) {\n\t#hero .back{\n\t\tright: 0px;\n\t\tbackground-position: right center\n\t}\n}\n\n@media screen and (max-width: 1140px) {\n\t#hero h1,#hero p,#hero span{\n\t\tpadding-left: 20px;\n\t}\n\n\t#hero a.btn{\n\t\tmargin-left: 20px;\n\t}\n}\n\n@media screen and (max-width: 1070px) {\n\t#hero .back{\n\t\twidth: 50%;\n\t\tleft: 50%;\n\t\tmin-height: 700px;\n\t\tposition: absolute;\n\t}\n\n\t#hero h1,#hero p{\n\t\twidth: 50%;\n\t} \n}\n\n@media screen and (max-width: 1000px) {\n\t#hero h1{\n\t\tfont-size: 30px;\n\t\tline-height: 1.2;\n\t}\n}\n\n@media screen and (max-width: 900px) {\n    #hero a.btn{\n\t\tfont-size: 16px;\n\t\tmargin-right: 20px;\n\t\ttext-align: center;\n\t}\n}\n\n@media screen and (max-width: 680px) {\n\n\t#hero h1{\n\t\tmargin-top: 40px;\n\t\tfont-size: 25px;\n\t\tfont-weight: bold;\n\t}\n\n\t#hero h1,#hero p{\n\t\twidth: 70%;\n\t}\n\n\t#hero .back{\n\t\twidth: 30%;\n\t\tleft: 70%;\n\t\tmin-height: 700px;\n\t\tposition: absolute;\n\t}\n\n\t#hero span{\n\t\tdisplay: table;\n\t\tmargin: 20px auto;\n\t}\n\n\t#hero, #hero .back{\n\t\tmin-height: 500px;\n\t}\n}\n\n@media screen and (max-width: 450px) {\n\t#hero h1,#hero p{\n\t\twidth: 90%;\n\t\tpadding: 0 5%;\n\t\ttext-align: center;\n\t}\n\n\t#hero,#hero .back{\n\t\tmin-height: 550px;\n\t}\n\n\t#hero .back{\n\t\tdisplay: none;\n\t}\n}\n\n\n@media screen and (max-width: 345px) {\n\t#hero h1{\n\t\tfont-size: 22px;\n\t}\n\t#hero p{\n\t\tfont-size: 19px;\n\t}\n}", ""]);

	// exports


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx//2wBDAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wgARCAK8A/sDAREAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAECAwQFBgcI/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/9oADAMBAAIQAxAAAAH6eUPncvyqzAQQCQAZjfsuQaMuubSZlsdFOfWK5nO4LJkNkzGso3DpnfPPHMB0DRBiOobBuFY1K1TObhJoHqDVOWa5ppsrmNY3CxjOmc0wmmbRhO2cqIqTWMpsm6QSYTkGYxnqDeUUMKeUPMnrT0gAKlipUuVBBJJBIBBjIMdEiWpWypiO5L9EAAABINY+TS/P7KgAGY6VmMgwxprlNkxl09GuqY+vm0pvDz671Yo9SvbPIGqa5uGQ68edrpmM6ZoGuapsmwdiMZw62jEYCpvnVLFTEYTCZjAaJvmwd85ZrmmaZsGA2jEdMqc00jvGyZDVOWerMpKwlThnijrHsTOCCCCCAACoLAgEgoVKlCAQRWMHNPrMdUAAAkA40fGl8xYJLm1ZsmcwHNlg27IlqUJNg3zmFi5U206cvoTkVqmsYjqmiZDKSeyOIc41TAdM5kbNbJhLFDWNsxncMi85OedM5hnKmEsdwymKNM0K65yzcNoqYjWMJrnoTkmY9EZiCq6KeKMB7Q6JYkggoCgBBYEEEgmoipUgqkLUEJSoIJBjX6/AAAEgFTkx+dqoZzcskyFzRjXXcB3TinU9Pg08ddbj6aFzOuY1iDaO9HXrz5y0ld00S5jOoZY2lxJgrTNo6JY0D1BwI061TWOuYShvFwdc45hNA3DGd44xjIKnXKgqYShzjZMR6Y3lkgwp5Q80euPRklSQQQVIKAkEgggqSAYwQKpFRZBSUk2wll009lL7QAAEgEGE+GHlzoWXJJJNaXAZT1xrHnjHrFJroFY7C7pyzUNc2zYOzHm66RU6ZmOKaZsGwdGWicetsg0TKdE3ImtcwmEk6BpmgdYqetOEUNY5huGqbRrHRjIRUlSDGahU9YZyywYzhp4o657EzEkAgAoQQCoBBNIoSKrEFSSthaEpQmVVUAlZOafYY2gACQAYjyq/E027JLEliscld9JXaOWZkssGc6J1zTNM1Sp000zIuUzntDmHCNRMK9M55mNg1j0OOno89uHJyevDQuewaZyix1DmGYJVcx1zOpNY452DkG6bJjKQqAYznHSPRmwtSqaS+JTTPbnTLEFQVAJIKEElCCSSAUAKkFQVoIqWqSpELJJlizCvTj6YAASACDXPl54YtZkJLEmnLqnRTXXIZDKa5U2U70vUPP1zSTcMAMZ1TYN6XUTVrVNk6Bc5J6uOvz9PUawzXDxvzno8GlZhN4zFZrqy8fWNY1U6S4DvHHMRUk3SSCIrVQaJJ6c3C61TEeUPLnrj0ZckgqChAABBQEAgtVYkgqQVSCqwBVJBdVEmWKkJC0OSfbIykgEgAgoc5fi6c2y5kLkkRx130k7C7xyDVNYzJuLuxx63kqvYMJzzUNo2zry6xw03Kk0gdaN89Bz9XYbouhw68Xv5Ob18+kco7cvs+Xr6tzwGfN9PPqVqnRNMzmsdMsYjHEVEXrEaR3jsFiVqnEPEHWPYGgdUkuQQVMQJAIIJIKgEEEkFSCCCpWoSFlJibUQSTZZYTGtE5B9il6ZIBIABQxni5fl2s2MxMWLGscde4mReoYDTTWXCb6apkXMZj1EUPP1qmA6hpGQ3TEDGap0Csej4+v1N1z+HZGPpj5/6fBhsxiX6py9u9rOLF89rlw+nn5Vdk5BumyVBQxlChpnSPRGwpKGmvi00T3BBiOqvLTqkFyhQEkEkEEAEFCQULFarAisZMVqqASSCVklIlrZUqcGX70XBIJAAKlTXPkJwbMsZDIWIOKtjbOzG0cuucY02zAuQqbqbMu0YTWrUM51Cxpnq5djPTUzvy++XM1jtGrx9HtfL7c9mXeanlvR4+P0465izr6Hx9/Rmdfn1vrn4b1eHDc4zqFAVAMZoFz05umQqYjyp5c9UegOSdhd0qcRNsygkLVIW6VlWQVBIKEy3XBcwCpBFkLVC0kmiksQSSQsRWzCcGX6Qe5LAAkAAgqVPPHyJLljMWJMJ5pfQJC70cWsqDOStDCZjbN+KHHrZLmkkr2zp46e4z3ovL59PA9/FXWJzv3fj+hYhcus8/py8t6PFjNLO/X+P6fWmclX1nzPbzcvr5pL0BQqYjUO6dgzELVOMeJOqeyOYbB2VgAqedTqFixnnTJLgzuOPbazvJZi6ctfpx1t8oE1HH09jn227jDrOjvlzenHBZJQiyks2VJLAkEEkFDmS6B9QX1qZgCQSAAQQQYT5uePszGWLllhOQuinoDmLlNosQQYzEQb5pFjcNcsUMB0T0HPt7Z1g0efXyV5c7t5PPV7byfQ7+NZKtWlZ5j1fPtZwpfaeP6nVmS5LnV6c/I9/FWzJUAoaBvneNkuuNNQ8eaJ7YkwHeXICACDnprG6Zsdenj0a01o8OvQS9lkvZZKbxq9McXj6djn07GsbGud7JFnM3z43Xhr3KscioLEgkEFTWOFL6pfoh0kzEkgAkAAgEFTnHx8xplMi2JMZ5Y7aWOvL1TSMtcQoYTXM5vlzWPVGjHCrWMB6vn19tPReub5+2lc+U9Xz8iavH0+/4+jJZJjXy/p8fH1y49em8n0vV4ua5tVLPFenw4bm1DUB6E3TIpMZ5U80erO+cs6y7xETQAEwXj8+m/npglyTtyM63ee983bzzWXstc1KLWtWbx51sM57nNrNVFrPP9vNyt8qWVMgILkFCpw5dhfpS+gTaTISSQSASAACAQYzxcfPdTPGUyErBonnD0yYJfZGqYzkViOYZSxcxHVN2MdYjWNcw519Q8vvrnUCzzHo8mz04ebx2+keb1Xsi2seR7efm9vPxjf4ez6Lx65UhY1PJ9/Ly98cVYDtnYLkrCcY8WdM9gc8znZWSSCSCBF8d82euny6Zcby3NrJTUs5V3zJro410pN/WM9xNVlW5LmK8/z62mupeeay+spaaz5H0+LGzWpJllIJrnnJl97Ne0rfTKlwASACQAACCCDWPkpoWZYzKSVg80Zk2l7MYytc01DOYDMdA56bi5ToRStE0DYPceP6G/nV7IXg758j0+Li539T8/rQqk15vpz43fx6yc7n3+p+f1WIFnG68vGdvJv16AzkkGseNNA9sZDWO4uUkAAgqa8ZOHttjexjcmVm9kk3MVRefLrW6OenVy6O+WxZJFiXU1n59b3+XfvzOfWbJl1ni9vPwenCCSxFmA4cvel+i29hNhLkgAAAkkAAgkgEFTzh8vTYMhdbEJrr5A9RZrS9A45ZIXcPSHlipBU7BgjXrbM5hj0fD1dvl3LBqr8/9fztM+teX20WSDSXwvr+fZOTnr9V8ntstaXNNTgenw71zYgqeZPMHqjvHLOqu8CQAAViCDy/L097j6upCLplstZCUXFneXWc+s82zw06eo5dO9vjeyktrM1z5Xpx8BvPr/N7/WTGa5yWTqeL9HixXM20k41s5v0ZfTWbpkSwAAAJAJAAABAIMJ81jz9mcsXWSDhnPTvHPLLkO+DlGMoQQWOiaRrnVMMdLHX1Pl9ubWZMU14rv5fLdeH2Dye+spZsHz30eTX6cdXn2+peb2XWbK2YTmejxt8qnLPGHTzv6Jx9fSTzXbzblxILVUkQFQIqVPHHLx39By793l3302EuzaytWM2pETZwdY+e7x7Lze70d5ZWbVksvZ847ebnZ9Ht/P6ezrjYtZzO3Dy/Xz6CcpfczXt66SZksSAAAACQSAACAACpy1+SplTItkssJU8gvZSy9WOvXHjTqAQYk1F6BqGUylYzGgv0Hy+7py2MS+f3z8d6PH9N8f0KzV7Mms1l8904+G9Hknn2+seb2ZqqVTCvK7+XT68PIponr19T5fodrfPJc8fWNDfBQQAIAJIKmoeJs4hMvRz09hw9foeXXZucusZNSVrFi1z5XWPCbz7nze70LleyUvZTePmPXn6Tze70rnnuSZd5+U+jx9Rfoi9m52i6SAAAAAACwAAIAABiPES+KudpbpJaol0DyyenNZd8pEAqc2tksYjMZJfp3P0anPrwunHxfTz+j4+n2nLvZKry5r5v7Pn/AFXye+y2kmpudBfnvq+fwl+xeP6W/c1KlDidOXzL0eP0x3jmc/R7rj6t7fLLrHHs52/PYiogVpGzne9ntiuNW5w650IOcnmjg1gIOljr7nze3v41n3i1mRJrKlDxG+fAnb2fDt17zyJNZNZ4vTl5DPf3HLe7rnJk1l149fpx3rMiWAAAAAABIJAAAIAAINNflaa1mWLrayIL5cyJtG3LJU0jHWc1zbJBWX63j0RN8zj28P38egn07h6qwrDnXzLv5vbc+3cxsZNSsVPCejy+U6cfoXk9/p5qCUouCzzvq8PPuaHQ8/u9e3nuLazzk53TyiSBVYqX5er0KzWJeNy3g6+WOnKppJwzztaRBaPT8fV7rh6ty4yJkrJrMlDwG8Yufq9RyvQ1yyVksyaz5TTb5d+3eUFrMus+g9Hk2LmQSACAAAAASSAAACAACh5uX5tc7lWllJC4jxJ6tOeuxGlWwUMhcyGQgtH0Dn6unbyvN6eLvn4j0eH6x5vbWWEovna851830rj6LLaoITzms/PvT4vQ+f1/Q+fUTVYoeX7+fP04c1NrzfR9XZnuaHPNLv4poRAkqcbl6vXzpsakzPE8/qyM63bhXv5MaaZxLPPGiQD0nH0fRfP6thJMmpl1mUwr833jrcfX3852rjNWbWbWaE3miIyVl1nc6ce7280gAAEAAAAAsAAACCQQAYD5qcZM5dQJThryz0BzkzrlO0cUuWAMket4+zo8uuPOtVfm3r+f9U8/rTURazBNfKPV4vrvn9WyAVNNr5b6vBGOn13z+qTJrOOarHN3jn+jx+eTs+b6XpY2tc8ON6c3p+nwTvmpCoIjzc13uHu6OdY+e9jWZZ15rDvng9Hkxa589OGcStMgHu/P6vY8fRkJMus5LLWatngp19Fy6dG886Z9TJZa5hay1lvZbWev28/R3yAAAAgAAAFgAAACCQQCDky/K7M9losSslU8WvdQvWjtHCNYVYRrGnXsvN7fQc+lZrXXw3fzevzrq56ViyY5fC9eXak9XNgUmsS/Le/l4G+P2rx/Q3EUSi6tcL0+HzOs9ny/R9XnW3vlGbgmtDpyx9/IFRCojXPF56+183u6WbcWJMtmE1evDR68OVrnx645pkFj6V5fd6Dn1tF0y6mbWVmA5HPtts3TLWWzJZNggiVWfXPu9/NnuQAAIAAAALAAAAEAkAgxnhpfIWbITIsoNBfJnrTTO5G4ciqxWuUbpaOlx9Ps+XfFneKXy/TGr183vOXorLZBy5rxfo8v0zj2vbBimqr5Tpx+d9/H9G8vt9XjcrbWYTGvne3n8h14bfn9/teXbdvOSDVt0/V86CaEERWziR5jHf3vn9vSzbplTNcKxy4pdHeOL383kunHSMBUyy/SPN7fRc+lovZl1MliypWKFJq5YlLWRQqt03OnHudvPIABAABIIALAAAAEAkAEGkfKCqXWxJIs8rLmNw6MbpzjnVQymgdQ18b+leX33Sk1oS/Lfb877F5vZnlE2YJrwPXl73nvasmXGtWtNPj3q8Hoefb6dw72WbIsoah869Pi0+fo995/b0mMiVXDWj6vAuIogERiPLnEz19x5/b2sb2mMtklZYWDEvE68PMd/JxdZ0iDJH1jy+/r51ZLLl1maiIQVKS1mr1KQk2QsmfeOr14dDfIACAACQQAWAAAABBIABQ8uvzlNwkksSYDxJ61Oeu2c82zUJIJLR7rze3vzVY089PA9/P2Gfa8+sTUWUl4rXO6cPX43dca0mqnmdY5ese+57lZqLKknjenD5914fSPJ9TvTFpZrFXO9HhjfJUARFVih5WvOy+w4e31vHtts5bms1Ru1l2RqWeP7+XyfTjqWQel5dvp3n9ebWUskk0CExrWWstrIgTZaslmXWO7382a5AEAAAEkAsAAAACASACDAfMzkWZ5bAFjgnNPQGkWJMxqmMwG5HZ5d/ec+8S4Jrl538+9Xh+u8PRJVamCa8P05fQsastVotYwrzZrrXnkWyUq1g1k+Oenx+t83v8AXYu1c3MC8jv5adOEihAEUrEecPMHoOXp975/V0GZIasSmWyUwS8HePn3o8nL1j0PPr9P83s2dYssxCyTSwVihSWSAWSyXq2psb593t5pAIAAAABYAAAAAAAAqceX5XZnS5IWyQeKXvJVe4dGPP1rmExGA2s7+p+b1xLVrHL8868vYM97O6y0KS+Yt9QxnWFglMa0iS63sqTZazHHhOnLTz09fy79K87pVeN144e3mVETZCkgiIMS+dTy9b2On0Xze7sRYmMtl7L1Qxy4DxXXz5s9fXY6bl52E0JKrWWblVYglKrZBdC31Js6XXh1OnGAAAAAAWAAAAAAAAIMR4SXyVmwglbFjmnlz15onVilYzAYjlGQ+leX29DO7VWa47Xle/i+lcu9JYKS6zU3G8FlJsrLUiW9XuaLBBCap4nU9Vx77+ueVMa8reNT0eOSqTUEEkExonFOZXKLS+x4+r13HvuRey5eyaJWKrhlwtb2ueRKywtZbWYs7JbUlFJIoWRLJNlqyax2+3n2NYAAAAAFgAAAAAAAAQaK/JkIJWyWWyeUXYTaXomQoco1zvG9F+Xp9Nx9F7JNfO/DdeXvpnNNM6oYiDaslYpJNQiW1kmOaxk2WspHDm9vO9pnY1jFLpLyfX8+SEmkVq0Yq4RJ0o1jg1xzGdHO/onm9nXxvNZkS9WsELCVlGSwVjFNJaywW1m9lkioCSTLBYtZbU2d8+51882AAAAAWAAAAAAAAAMZ5aX53c7NCYtWQ15fFHrU0F3zmHTO4dkwHzyX6T5vbv51cVypvn9fP6rGomsUuMvZkWyyiwSlQsRhzqtXuZsg15rUz02mc9zBgXjenxY9c4oQQcyNGuqZow1Y1jlHENUvHtuPq9jw9GxZdL1YmwVlgE2CkVmqkSzZNlqSRUlkRC2SavZbWel05dPpyJCkAAAFgAAAAAAAACDXPmMcuzIpBcsvBOaeiNY7B6EynnzkHlT1PLt9H4eqUvWFfPW+qvOM2k1hi9lrblqhIJQQRLrZ1NgWWshdTG8xluYTA1z+3m5/XzqtGkcut01I6dC0QK0o4Fc0xG/nfpOXo9hy7b0ZLLoWaQLWTZUpLWKKlWQXRUQJSVlJqSbJszaz3O3nzWQhSAAAWAAAAAAAAABU4a/LU2ELYksQeKPSHUOqWOIebOWd00Jfrfl9u2og4k33t8pzay4pq1za25VSQSiyTHLilmySq2ZmqS6+d52YrFLi6cuJ6PHirjljrQOeK2TIUOVGOuUa8vp89OhN6i7kd7l23sayF6slqskUSpWWqRLCwQSEEkpBYmpCTZezc3js9eFrIUAgAFgAAAAAAAAAQYTwK+VudiLLUukrzjzB7YscU88dc9GWPPnoePo9xy7CDVm8lxtUlw51Nl7JWAViC2siJcUs2WsrFqggwZ1aJrFLbWfF+nxcfWe4bcVIK1xTqmoaZhTky+sm/Ytbaak1y5rUMp0OXXpc+kl7myiq1CSQgCyBLKoWVi9SkqRVrBezf6cuv14yQAAgFgAAAAAAAAACpzl+UoS9JboUedOUWMh6U3All55wJfr/AJvZnmoMUua5yWStM6xy5NYlayipKLBBVYS1VJiKiKrjzq9mKVqeS9Hkzb5WJKlYVpRyK2TinXzr6C16G52DEaU1orzprUlxS7/Pr0ee8ms2KzWLOqF7JSUWCalEsqRKJSagRaySatZNm1vHV6cM+oACAWAAAAAAAAAAIMZ5GXwNzsliVsEg1Fk2wELUqeePW8fR7Hl3RUtZksS0mqS3uJWFgqtmVkLEUFWsEERBWXHLcosWee9HkpvkqpjJOUYk0Vxy+9m/X2dJnJUFJdc1JdBrm51zprSXqcuvWzqzNZotYJeoSbJqySsxIJiSaqCQEtVkmpLWdDrx6e+SgASwAAAAAAAAAAINRfl0mhZlLEqFiCgVJSCV5xoZ39Z83smUWuZEtJZIslCzEWwk2SUmqiyyUJSCq1lxy2KLFnnvR5I6chU5hpmNOYvs879udezZssCCpjlwmnNaDXKzrjTXOl7/AD6dbNkrLESuVFkWWsssxZIllZBayJYqYlFk0LE1JKbXTn1+vC9gBLAAAAAAAAAAAFDz8vzC52lhBcEE0EQoFzWPOn0vz+vs462QgrLWavYSELJCxZJJEYlvciCIrUERWaqUlnTgejx36ctU4xQ5J3Zv6BL37nbsuY5efjpgmxZN3fLNZgNOa57XIzrizXOl9Py6b2dRAsZAWstZJJIiFsTLawKiLWSCEkVYmrJezodeO9vlehZAAAAAAAAAAAIMB87l87rOaBBJJFRFiAsJJVeUbHPr9L4eq6QsRCxFkVKQogkColqSyqFrEJUFFiXHLNcD0+Ph9OWI0y0vv5v1dzvWZTSzvh8vTpc+uRbkpEYZrY3z2d88msYE0reVLyF0o9pw7WJgSSZEmrWSiWaiCpbgmyQWpIqUqsk1KSTV7nodeW/vlmuQAAAAAAAAAABU5i/JkyWSRCkCCRSIBK6qedX6z5vZv46QqS9QSkgJChLNEFSbIC0glSpVa5tFnU8X6fHob5849tN+1Orc5yx5rj6uVy9OxZdlFwSQspKVWkak3oTXN1FnXw2mSWALF0F7JSbZSJYlkhbElrJCyhIUAWsmr2bnTj2evC9gAAAAAAAAAAAGI8ZL4S5z0BAETSCggqcNdzHT6f5vWVLKSk1ZKqAIlshRWy1lQVlhKLWIKy1pZ829Xi6dfQpe5c7VXBy8dfOef27FxXTTx0pi3jLWVL2XZvZaolGNdPO1lERdmUkhalixZJLJNWBCxLYkEklkmoIIJWUtZsbx6D0eS1WQAAAAAAAAAAACDTPlUalioBEStUsSsJBNI0188fSvP6vR8+tiCyCaRSWC1kLMskpWoslCxEFCpWWi1Isj1eX0lxv2ZCQQee5ejm8vRfUxlbORx7Z4vGwWM9zlub1ILFSDBLp51a4kgsgkFiZZSakkLJIBIJJL2CsCamz0Pp8m3vAsgAAAAAAAAAAAAxnnZfl1zsArViIE0iCCSTEcpb439Y8/ryEAEiIlgWVlsFskWRRCxELRKxWqTVbFeq9Xi2rLAAg4md8Pn2lcdizm43TO9rGsbWxm5TPJlssl6sAYlxRhCQSggFpbJKySVWySQsk1MCSbLEoFVTp9uPc7+cC6AAAAAAAAAAAACDWPm8vntZsSQCSsQtrIipcgwHEX6L5/V6THSREWSqBEtQFkkhI1JBEsFCIqmJa1ez2Hr8WQBCiCpiiFgk1zmzfDzvSxvHnWea2s6yZuezLF7JWCkuMqlCpCQspYkmJWq2BKQFsSSCQSWsJBl3j0/q8mSwC6AAAAAAAAAAAACCpyV+RpksiJoQTFQCpJAXRMOd/XPN67kkIJlERVYJCiCdZlCootJYTGYxWfePW+nyWBJAAAAIKmKNZdOa581zc6xY3mzvNnWaLLKVWCsUKEEpILEKiCy1gCxYkmpJIJJSalO56fL0+vIAXQAAAAAAAAAAAACDCeKl8Fc56gmFRAqpIqYhZTGvFPo/n9XocdLBIEtiJalSs1YmyCblQiWsUloYylWs3uvL03fzXAIAAAABBBBQwy86a5WdaedzjebO5lShJC0ACSARLEoqspJMtqtFqtYVJNQXszax6n1+KaAF0AAAAAAAAAAAAAgg0V+TyamoAhVYEFSQSDRXZ59fqHD02SCBLYS1KS0XISkVNhBWWq45cZQrZbWe324dvrxsCElYCFAAAAEAoYY1JrlTXPztnSanNnOqSxLJKApBUpNVIlsTFiy2SxarE2SSTZ2fR5et24yAC6AAAAAAAAAAAAACDGebl+WXO1QiIqIFSASFhKLxD6z5vZ05pJWC3IIlpLC2IKiybJBSXHLjWjMVbWfU+nybus2AIAAAAAAABBUwxpzWk1qxhmsctZUsZ1XG6yyEgpLSWqzLYsTF1sWSxapQTVrn1nt8OWwAUMyAAAAAAAAAAAAACAai/NI4FzYkkhapBAqCILJzjqc+v0nh6bFYEha5VUslZZsqgtZC1KS4ypFzl3n13q8eUEgEAAAAAAAAEFDHGNcUYFwLglwriissTVZay0zrHnePNSzLYmLF1lJWSyTROn34eh9PlkAoYZNygAAAAAAAAAAAAAIKnHl+Q3OapiKiIqIioiKiIJKLxT6j5vX287iSFsRLBSakhSCpKTQpLQoUFm/wBeXpfR5cgJBAAAAAAAAAAIIIKlIouIxS4lxGJcUuMpLTOseN0xumNRLMXWQtkkLa59V7fDtbwJBhjCb9gAAAAAAAAAAAAAAgwHhZfD6zmhYWsQVJIUVSCV0oyZ6fVvP6rpEJYWsFSrSViKEkAxkFCNZ63bh3+3CwAAAAAAAAAAAAAIIIipUqtDHGJcK4TBLilx51ix0x8+kyxmyJRY3OvL1Xs8Ugkg04wHXsAAAAAAAAAAAAAAEEGhL8gsxWTAiqxBUlSVUkrQ5J7vh6fWc+kkSorKWSFgpKSagkqUIKi57Hfz9ztxkAAAAAAAAAAAEggkgAgEEEFYquMxRrrrNa8uHNx46Y+fSM2ssS3O/wCny9jvwkkGGNNbp07AAAAAAAAAAAAAAAIMR5iX5Xc7oIIqpEtEsSVJBgXmS/W/N696WJUoQWstRUEpVZKlFgqk3PY9Hn7fXjIAAAAAAAAAAJAAAABABAIIKxRcRry6q6s1gzced0xvFz3Evsfb4dnWZJINSKFTrWAAAAAAAAAAAAAAAQDTX5jHEubEEEFASVBYqDjL3efX6Xw9CUJUVUVlgmyFEFVrEVVJuer34d7twkAAAAAAAAAAkAAAAAAAgAggqlJcS60uquvNYYx51Gd+s7+W1SSYI14xrjru3IAAAAAAAAAAAAAAAgoceX49ZtpWoiqxZEFJJUxHLXpY6emz09Ty6bGdViJRVZiFgWQogqCktbJs6vbz9/vwAAAAAAAAAAAkAIUAAAAAQACpWMa4owLrrry1jvbxZmSF1JaGMtXauQAAAAAAAAAAAAAAAIMB4KXxFzsVEsIIILEHKXNNe6zv0CXNfn1z8utZYgVVLAokKIKxC0Fk3PS7cfQ9/OAAAAAAAAABIAAQAAskAAAAgAggpFDDLrrrL02ctkpqy6q3Bc7GsgAAAAAAAAAAAAAAACpoS/IUpZFRElCTSXTl9rN+yOtc3MMaE3reb1RERJC1iLRKQqSLakLWK2Tc9Htx9F388gAAAAAAAAAEgIAUgKSVAEAAEEkAEEGOMK6kusu8mazQiCS4O5rIAAAAAAAAAAAAAAAAgxnmJfktz1aQNdeSesmveS9WzaS9QYY05rleX2IQIWCkoWAsEFZaE2Rc9Ttx9B388gAAAAAAAAAEgIABKgACAhQABAABUxxgXTlklMRBckk7msgAAAAAAAAAAAAAAAAQaa+Kl+bXMpjXty/S17KZ6yAkgxxrLw/L7WUkRC0lopJskkqsEFFhFz2vR5+114yAAAAAAAAAACQAgBSFkEIJUCAAAQACpjjWXXiDGWIJLnb1kAAAAAAAAACCQAAAAAAYzTXTl5punRNmy5JIBBQ15eF5fZETFZaNVipWWUtqSQVWIxqsi59H6fL0+nOQAAAAAAAAAASAEAAEqISQFAgAAgAAqYI0JdNdgzpiMpB2tZAAAAAAAAAAAAAAAAAFShRYLFyUkAKIKmCXh+b1482Jay1WsQtIlLVKQsVSWCLmLPUevyb2sSAAAAAAAAAAhQSVIAAAAJUACAACAADEasulLgBtIB3dZAAAAAAAAAAAAAAAAAggAgkAAKAKGGXjef062OlYrLEtFiILJaoAqktUiydZ9V6vJtazIAAAAAAAAAACSQSpABKwgEkAlQBAABAAIMRgjXXVlxGU2U7WsgAAAAAAAAAQSAAAAACAAACAAFAFDDLyuPo0eXauUJCxLBAWUmwsFYpVUtvPrPV49mwAAAAAAAAAAAEEqQASQpAWUgAkKIAAIABUoY4wLqRrrU9TrAAAAAAAAAAEEggAEgAgAAAAEABQBQxRzOXfn8fRSEkLWWqiUCpIIKFUtvPrfV489gAAAAAAAAAAAEgBAAJWEAAkgAkLAAAIBBUoa8utGBfRawAAAAAAAAAAIAAAAAAAAABAAUAUMUaOOvM8/prLCVlgiWoqwQSUMSwmTpj1np8eagAAAAAAAAAAABIQAAAAAASFAgAAEAAqUMEYl6tyAAAAAAAAAABAAAAAAAAAAIACgVMUamd8nzeusChEtVIWUE0TGuKVc5N59X6fHmoAAAAAAAAAAAASAhSASoAhJIBJBKiCSAAAQAQUKRt2AAAAAAAAACCSAAAAAAAAAACAAFFTHGtNcfzeussRBBWFWTPvGxrOXWb2QYZrFGs16Pt5stAAAAAAAAAAAACQAhSAFIAAAJUAQAhQAIBBUzoAAAAAAAAAABAAAAAAAAAAIACgVKRry8fz+vHm2s2t89jeNjWc+s5bCFEEJBValjIAAAAAAAAAAAAASAEBSSQSohACgkqIQoIUACAAZEAAAAAAAAAAAEAAAAAAAAAAgBQIMaYZrl8fRua59DpytQAIAIIWEhalS5kAAAAAAAAAAAAAJACFIUkqBCSoJBKiElYAAAIABkQAAAAAAAAAAQAAAAAAAAAACAAFgoYozFqAJJBIBBCwQkEFVFjIAAAAAAAAAAAACQAAASQkqAAAABAAABABkQAAAAAAAAAQAAAAAAAAAAACAAFFBE1ISQACCAohIUQVSFkuWAAAAAAAAAAAAJAAAABIAAAISVgAIUAAC6AAAAAAAACAAAAAAAAAAAAAQAAFpBLVIABAIAIIBKkqY1kuWJAAAAAAAAAAAABIAAAJAAAAAIAAAABdAAAAAAAAIAAAAAAAAAAAAAIAAIKRFspIBUFSJVkSzZSWCAChNCSxskgAAAAAAAAAAAEgAAAAEgAAAgkgBCgAXQAAAAAAACAAAAAAAAAAAAACAAQYYoCpVZKgsVIBJBiKkGUqUJLmQVuJZQAAAAAAAAAAABIAAAAASVAAEEggAAAugAAAAAAAEAAAAAAAAAAAAAEAAg15aFiDGCQXSiwVJBjAJMZBYyFitbZlQoAAAAAAAAAAAkgkAAAAEgAAAAgAAAugAAAAAAAEAAAAAAAAAAAAAAgEFFxxUhBVaAtVopVYqZCTCChYqCS5kIrYMyAFAAAAAAAAAAAkAAAAAkAAAEAAAAF0AAAAAAAEAAAAAAAAAAAAAAgAgxLUiSFokKKkGQqYyTIRWKFViSQQSZC1ZTOgKCFAAAAAAAAAAEgAAAAAkAAgAABCgXQAAAAAAAQAAAAAAAAAAAAACACDEtSCIoKrApV4kxklqqREVSBYgsVMlSZjYQAFAAAAAAAAAAAAkAAAAAkAEAAAAAugAAAAAAAgAAAAAAAAAAAAAgAEGJYKRUEAqUJJKFilZIxGMuQVLFyagymU2EABQAAAAAAAAAAAJAAAABJAAAAAAALoAAAAAAAIAAIJAAAAAAAAAIAABBjWhWBQkggoWFVgQXKFCpBUyElipkrIbaAAFAAAAAAAAAAAAkAAAAAAAAAAAF0AAAAAAAEAAAAAAAAAAAAAEAAgouIhEtSCpYxkkgqQSUMZBBYguCpnJrdSQFAAAAAAAAAAAAAEgAAAAAAAAAAF0AAAAAAAEAAAAAAAAAAAAEAAAgouMoSVkhagxmQggxlSQULGMkqFlLmUVumRACgAAAAAAAAAAACQAAAAAAAAAAAXQAAAAAAAQAAAAAAAAAAACAAACCq4isSVKkJC0AKGMFjGQZCCq4yhmjJZcyVspmAUAAAAAAAAAAASQASAAAAAAAAAAAXQAAAAAAAQAAAAAAAAAAAQSQAAAUMa0IihUgsVBBiKElzGSQQQuMuSQZ0yGxWwgKAAAAAAAAAAAJBABIBBIAAAAAAAALoAAAAAABAAAAAAAAAAAAIAAABBVcQihBjKljCZDGASChAKkkLZIlVkQbJt0AAAAAAAAAAAAJAIAJAAAAAAAAAALoAAAAAABAAAAAAAAAAABAAAABBUxLCUlgwlzESXIKgFjGVIJBVRKWJJMxuVIAAAAABCSoAAAAEggAAkgAAkAAAAAAF0AAAAAAEAAAAAAAAAAEEkAAAAAgquMqUjGQXMYJKAAsYihYqQSVUZUksXN6yQoAAAAAAgkAAAAAAAAAAEkEgAAAAAugAAAAAEAAAAAAAAAAAgkgAAAAEFVxlErLhIJJBBry7NlChJJhXMlAIi2khbVkTIb1lgoAAAAAAEEgAAAAAAAAkgAAAEgAAA/8QAMhAAAQQBAwMBBwQDAAMBAAAAAQACAwQRBRASEyAhMRQiMDJAQVAGI0JgJDNDFTQ1cP/aAAgBAQABBQJPY17dX00YmifFJ8BrPI2L2tT53FAZTYkTgRwSyiem6tI5pJdDIxrVyliXSc5ByZWCLU4JhIdK0lQuZIOhBNAVNPHGYK88r32WNBDnOIwMqRos1qs3WjRCIU0scQotc42LlaEssRWIYXR+1cpIqVqvExhCLVMw4tMFurXvwviddnsGtpscZvSSMZV06Rxiph7OKLVLHzbHi5VoSnAIUuoDLKRJdec9Oivwi232ulpt1PmmlXFcUWKXNaxeqSmSOletKCrFCBu9zQ23rICayxZlp6NGxYXjbG57PPwvUd00Ykj/AE1qBa74ViBs0WraeXIjB7WR8j0mNHFfZ8yJJTYyV4aOsnnk2tbjdpz5HGOtZjgms2eo6EFxD2cpvTT60JUzI5IS1Oasea58xu6E0l32eLqWbJgpQwtf1ZSyhiPinBEYVeXpSzD2Wwnua1rrUkro6MUIktyypkLGLl0ZbjMipekEbnve7CLVwVD/AHP0yoZH3mtXPUGqfjcpaZdcF7ZNBM/3nFqc1OLoJr1Z5La920jNVqL2aew5oYxpKhd7LZmYaVtpQWFPJFE2Iy25Io+EWBuXK5qkECsW7Fp9TRpHqKCKJmx7ft3eO8rz32muY/TLzbtT4Wo0RYj1SmQdw0lNjwm7OwA55cmsJTWBqL1wKPhMOHRu6Ukh8F5cRGxizJIOkxMHIabZfE6a2ZGEJwRanjAdF7RCyhHGpLT8V7D3kPMdus/qwWGxZLU5qLciqfaIBanrJlG1ZdJZjiUdOxPJx2cqMnln+NaairFqKBCO3cJmrU2P9osJsYaHKtL7NYstNS03YqUsjbC508pliqwGS3aUNaKEbFTRCSOP/Mq6fKQQQBLqBcYNMc9zGNa3bKsW4oG29WmmVPTLFlVqMFVD03K87n4eUT3ErK+22ARpdw6bf+HboVZ2vHvKNme2c+I25JIaGQyyCHSpnBwWmxMetRqNgka3qMEGEHEptdEJwQypAoXslY9sU0DlNOxhhrTyPfbjYg2d7sbPAtV68vUjKKc1SPjiGnNe909utAYbMdljXQi5H030JAzm4JwRDlIGXKle6zgbViya2mxsV58jYqencpfYIpK2E9ifGJG13mzXoSFrlNeBLKRy68XGKoOeezK5KXlDPepvkUdK/aUFSKEAbZTpGgXNaaE1lm3LU0eKLYjszsdvTsCzvnb07MrHf99rMPUZ+m9S60Hwitfpez30B2zj3Yj70g8V7Fd9GzqE8okkAUViaF+JZXNcxqlxiONjVchiZK5qcF6GFwDo39CaXUXQ1+pPZMFSKEP6spq6e+dSwM9hcEQq83SlnBrzo4CfbfI6PT4oRLelkTYmtTHmOS9FybVskxotXFcVpzv8mbTaz5JLzGLN0KThbp0LEmJLcHVwixOYpuUElyuZQIb1lOnq1Aa9iwWtawbZWUUcKWZkYrMmmmrwCOEDclXNThgVi5Ysup6M96ihjibtjt9Vjf07Dv4Wdj8P0XndzpKlqtYjswfBcFrWnC5Vewsf2uaCiC0tdybC7g95wvU9NrFyfIOmxN8qm9cj0nBPai1EeCzqwtpRRp9mRQTyOcyWSC3X9nmdNdfLVcE5qLcio7rQtlngeKNmy42Yq6EEsr6GnNlHsFTFrR4lW5xSf+raU0zIlO4pkNq2urVptlNmyWxhoKgm6E1thrzMII2mfHG1sj7MhmiqwdW5bUFaGAZ7i8BGxJKaum4cxgC5b2LUUDLmsTTKpp1iyqmn166DUdsBFZWV9kEe3HZ99srO5+CMbyN5N/Td0w2fhOav1BpeJBnsxtYZkRu4ufFzb0CmnKbWwiE7Y8io5BJHZirvgcpZmNUMEr3OsBcXEkY2w2eCrKXsITwnBSPZGNPa577FyCBQ2YbLIGNjlkmkjpUXzyV08ZVmq2eKeP2mvBdYGG3POa2msYrr5GxQ0HBewcaxanNTmgqq7qw03GGUKbUBllIuLrpcY6bQ4+uVlZ7JbLQ6KjNYMVdka4obOka0XNbAQFm3NU0WKNeO052yvC+3aUF90D47SshfbbOw3ztjbKOFaLopopBLF8Eq1XbNFfrOhlQ2G8sfB9Z/Js6gg5marDFEWpzV6GI4dFJ0ZJLDYmmSewYascScJJXQ6dmOzUkryOCcFBN032AYZA7LZC0J1l0jo6MUQkuTPTYg1cunLaZ1GVLsjY9NeTXynHABViMstyUar3y3Y2DqW8yOZbpU2Yj4gq3SyXMTmJ3OJ9quLEQr3Z0+erUXQnsFoY0FFZWd5ZY42gWbJrUIomhu5crmqQQKzdsWXU9FlkUUUMDDqdQSbZWezCwgvv2ZKysrOVnys7ffwvG5X37/AAso7ai7EWmAjTvhELXaIezjxcAhthYU0XNrHljiGyMpyOBwnNTmotTwOIZ1Y21I2IzPUMj88y2fjHZhuurdBwTgsKnJziNiWoWU7NomaOFR1pppCzCIRWnygO/9a1pkvu9SNjZJnSEBStPCd88pDUfCbI5jq59zKlPi3CpSxjY3PsSulirRGa1bMNeKHbOxRRWUbD3mvpnmOJrRjbKsWoYW3NYmlVTT7Fk1NPrVlZvRxubTs2U+tC6CjI9ZCz34ys7+u2PKz4O3nfwgd/VZWdhv5ws75WQE4Ovagxoa34cjA4avQdBMEAgNyFbi4vqSeZmEGKRsjLBruTlLMxqjhlkJnAAYSfA2GJYq7y4FEIhSPZGqLXudNbhhMFmKw1vEWqroTWdpNUmXSIsWakkJeDjLLtTTp3tugeA1eAir8UDDhPamszJTkaGOtL3iS0OB093VfeUVQc89mVlFSWGtdFSmnMFaONAbZTngC5rbWoNs25qmjMjMs8MEYdduqrTr1htqEb2FsjXs7Cvt4Xlee/yuEmPv5XlffY7D0+69Nhv9llZTpA0WLjpT+ndF9iZ8QrVaXtFd7CyQL77yR82kOY6Jwljid0ZJZo2AyTWC2OKFe/Ig3CwjtG/g+X9p2UXAB1l8jo6cUQktPcuKDiySyzrR6PZZJYwEQpYmOE8Bjl08/wCRPwhuN2xtYLI3YTmp3uy1m+6BhZG2rU+q4NYwZ7pJWRhos2TWoRRAN2yESrepQVlZu2LTqeiyPUMUMEb7rpXQ6cwP3KKib7LaQ8LwhE8oVipGBiawlCNcQjA1OgfsAvCb5MbFgJ8DHJ9Ip8cke2UUSivG33x2nOxVi9HEq9TUNSk0rRa1INHxnBa7Q4uHo1BfbBWFdhyKsvCR8TXj2SNi5vcoab3J0bmuwsIhEIKueTXSyV0yrPYPWZEOm4nijtRmw7TK4ZdRUuOWrU3TnnWqNuOmkWk2jNUwgsKyznEEW5Vw8TTeOnsFabyhPZlZARndIYNP8sjAQ2yprMULLesTSKpp9i0amn16ys3YYXCnZtFjGRt7rtb2iGtP1o1X4k5U84jaz3i0DtexjkawR582erHeNzjEtOJylhljX3+/Lxvnsyi5SzxxNfas2pNO/TbQoa7Wta36C1A2aK1A6CcIIbfZwCni6UlObmyfCqCmHCWrXiMEkxdSMsWEQiFI5jFT5SOltQwqGzFOBxFjS2cmXqtZic1FqcDjSbYlsMPup7+TrUZkhr0XON6j0qf6fdiYbkJ7OEk11ubNefjpUvOFoQCwnt8SDi/eSw1hZUnsGKu1iAQXonPDRb1loQFm3NU0aJilmhgj5XbirU4Kw78FFq9nIudFCCaOR8z2iSVxeywMRzAoOCHaQCnVmlN5MIkQcsonbAxcq9M9nhDbkiuQDZ9RAVPRrdt1LTYK7GRYQH0JC1ylzjHgjfCwrUHVjhkMcjgJWV3eD/49kMjWNe+/YMZRIAdYc9zKsbE6xI9QVJHrJY+ZnWjrWSYSE5qLUWqrJ0rnNwc5znLCI8WI+Ms1uRlbS341cDs1WrJNOZalMWG2ZVor/fbuVqLONhPkYwD2iwq1COIYWBtlW9SggFm7Ysmpo8kiiiigjfefI+DTmh/wGonAPvoDbCwpKVeRSabK1OfNA6O4CmWAmyAoO3wvRPa14l5RvjsJj/CBXJPaHse1zXZWe6xciiUcV7UH6boUECjgwmswsfRysDm6pUdXnHlDCAWNiFeh4voTKdpa6vZf0sIqe1GxCCac9eONcC4qres1dqr8PP7E+FhTSxxBkVm2rIq1oaUvVqoYCzlakCInODoq54amFlZCK1rl7LHXihVn00p3G83031KPMJmc8waf7zI+KxsSp7McLberSyqrRsWVV06vWVi7FCRUtWjHGyNnb672XObBWsMlY9/OTiggFjsOMOp1pC7TnhNsOjfHPlNdlDbkgrlX2iL2tzX1baZJuFqMG2V4X2Us0cYkuzzPofp5zlXpsY1kQCx9KVqtPrQhvGQIbfdTRB8ZD4pI3tmhhcYppZ44wZLNlBsFZO6kigqSyptavVjcG8tiMoFtmvFZa0OtyzGvp7Gm657WRaeCtJ6La4OwCss5MjzC8nja3yrcAmgqyu42PSj/APRas7yta9kVdkaDd3ODRb1ljV/k2pqmjRsUssULBJctirTgrj4OUVUnEUsTxz5bjswm7XqbLMbbEsElW21ya5Zysb65pnWYyV7FQu8gx2QgiA4TQuilWVyAE+ogKnpNu46hpUFdscICDfqHBa1Q4PY7KHptlELUIMtpz9OSaBsg9kiiRklkUVf3o9PnjYZqsSeXvdxWFhFqpvIszVYJE62xixaXizWrv6kYnqVpxlY2ctRq8jwnMx9dz6alE6G1K4Obp3/0GD3cBYRCKOOaJVrUIK6s3Z7BpaNNMaunwwM9nGJNNrts+e7PfqtV3Ui1KZir6zE5MttKa8FByzsQVhALO2qaaLbI5ZYH0r/IB2Vk7BArWtO6EtFVJMtaVlBajDziyp7kUSYy7ffp2gQxKKvhNYAsfVXK7Zopo3QTfYLysIL7WoOjLTm5ss4VOJj5GTR1GWJhI7YLClkjjDW2LSBrVGv6sxAAA9WP6EttphlvtyKE/tFXCwitQapeRsHYeix41KHkD+06g7F+LywryinKf3XzTxxNtatI9VqViya1CCsKsZTPCIVrw7fPZ6900fJtumQSCEHEKtqNmA1dYryoSBNOw2zvrGmddsMjmPpWw4NII2BU0Uc8JifTu13cXRu8beCNQNhluh+nnOVakyNrIgEB9Y4LW6PJsRXleEF91br9aGGUxyFrZY6rljscQAbD3ubVhiT7UsqYwN2iHKSGtFHHYrRvU9MRxkFi/Tk2Y97cfOF0vnIIwhvbj5xWWiVjS+OWpJyi7NUL46mbFmWpo7GqWSKGOvYfYngHiNEq535UTA4dBhRqJ0TgiNipog5WKafE5p2rX7FdUNTisBsi5LKwUNiFrGlqtLhVp8tB7NWoe1wVbCgOW7AroRvljgAQb9fNGHN1Cs6vYaQvuBsdtRr8JNPnVmMgxyB7NprLGJtaWZe0sY0RlzsLCwnZDYpBJE5SYc3Ua2Voj5I9T3c1axX6NjSbPXprCGzhkXYeEtkedCm501jeaNr44oIoGvvcnNpe9V96SFDwcq2P2x3FUZecDfRPbkOPvIpykjU9cFTQ8dwS009aexQyse0ILKzsQtUoezSVZlDIgdggtR0z92i/3dggVE/mz68hapU60LfccEN/KlibJG5r4pYpGzRNJhmkljjGbNlMFesnCSVBuEAsblvu6Y7/AAvdxnKvx5jDjFePrvrFbq1v09Y42VjY7anDmO01fpyX3uw+l6kZpmMjiZO7C0//AFwlHwusArMoc0dxVB3Tmik8ZViQRMDVwCI47FSNU8Smiwd9J1AQua7cFA7PY1wvVX0Z6k/JNcsoFDY1Q1wJ2G1eXg78A9q1ikY5WPDmZ7MLUq/JtKfpyzQNlaKdeFc5JFFBlT6Z02YWFjbG2mzN9kfIXnCkGReZwka7k3YhSNy2yx9K/C9r2bHadgc223idHm6d8blFWB4efFp3ih/riTkQpGoDHfqTHxvp22yxmRyAygEUW5JY4IoqRqmjUkeOzRdQ6jWnYFZQ2sV4p4jWlqSQPBAQ7eKxsFWl/A3azZoXgwzDbKxscK3X6E1Kfqx2fBpMrOMkkVVSyukONsLClnjiQZatrSQBVDfCctbj4v0x/U0/YohfqCv4/T9jqUtyneVrjCy40ljq8gkh7Jm5a/0uuWlvzBGVnwiE9uD25UjQ9jJH0bMM7XtCLllBcU6MFOiKkjKkj8yxKSLG4JB0zURajHnYIIbTQslb7M6NwB2DllDua5RSc2/XuC1ukCI3Ib/dW6/XggmMUjw2SOo90b6oBnrubPK7BKc9rWusyzOr0GMVtzwzQyI3hFOWssLqv6dtr1aFja5C2WLRHmtqQ3O2twAxy/N+n7PUp9hVtnA3VpMn7cbsppXhHCkHhZQ7CtRqiWOrbkrPr2WvAdsENiE5qkhYVYrPYJ3DLon7xyPjfpmpstDYIdnEItC4od4Khk4u/ATRhzb1d1WwD3ajX4SadOrMZVS5I1st2Z4U1xjU2pLKjaZGM2c8hZrVbBitNKwiFKwOB6tO7BK2WLdwWsQuhnglbJF2WYhLFLEY3fp2XjcHbYh6jLrSFpkvGaB3Y7PwCPGoUsqtakruq3o5Wh6BQ2O2EY1PpsTlPBwMse7HuY7TrgtV1j4XjbKzuFWl/AELVqfWhYeL/tv95oxLGRJFJFI2aFpME0tmKND2m2m+zVVI6WYhuNopelLdi4rSbHtFTCIT2rXa3n9NWuUHZfgEkWgTkwjsKuaZWmli02OpZHdrdbAB4yU3AtCDSvBTmo+Hd7mgi7RQdJG7TtTD0x6BQR2CGEWqatHILumSNUkWN9CsmO4302HdjvCCBwopObfr3tWr0ulKx4c3Zux9NSg5NpT9OSWFkobTqwJ00sqhrlzp6xhlwiEQoX84f08/hLsVartkjpyO0/UwvO7wCGZqa59kdsJzVNXym/L2zxNljuQuhn01/KGI5Gxa1SeJNx2ublXKeU5paaOrPiUEzHtaUUF6obYRarmlwzq5SnrvWhw9S81D4B+ANopCxwII+uKvVhNC9pgsBeuwQWMq1B0ZqU/UjuBU4mOJm6LHl7hxRC4p2WGnYEOoZ3cFrlfB0W17RR2KK1itzZC/qRDfCIWNx2FfqGp7uk/6YENnKz83wXMyrtVuHNLTUuzVn070VljX529V6obkKSJr23f0/wCdMrOgZE4YHads/Ery4/AOC1yjkROJb52++V9rlfrQwTGKR7WyxVJPKwsItT+IDpHTGxFhun2faKmd7tds0X6fmdBf7JmcmUfFfvG53sRMmh0uJ8Sam7FWR7o+DLZa1pfJO6WpxBaQo5Hxuqa61QzMkaFlZ3wsLCdG0oR8SOwLO2Vn4YUEnJv188Yc29A6pZ3BO+o1+nJp1hW4yFDK2RhCwp7jGJlSacxxxsD9NYIdOdHA8+gPhSDxq0D4pYJmzQ7FFQDGx+Dnsni4ztTTsVK3IHbnZ8rWKe7yTKsjzx4CRnIWK/lzC3andmqvpahDaaHd/hcUPpI3lpaQR9cQtWp9WGLwe2aJssZD4pIZWzQsd7PPLaijGbVtQVIolDTc4FtOIz2G1or1qd1qlZZZr7EK1CHx6E4xjY7N9fvtjuKKBWdpGcmsQ2KKlbxk7HOa1ti4GBkc04giiiR2wnAETV8qWEt2Y9zHUNca5NcEDsDvjbHZjsHxAVWk8/XyNWr0jDM1wc0dupV8tozdOWeu2VsOmxsPEhtSnmCW1iV07ulYsxRiWZ0h/Ttssm2+zgi3oajsUUN89xR2HZIMEbFFWxuFJZa0CSWd8dOIKoTBNnws7YViaKIOEs6ka1pAyoqpKqWpa6hnZI0OQPbhD6RpUb+bfrir9UTwkdKbcIYRaFZh6MtGx1YlSkjUlpsUM06sai5yjilmdHpzWCTlDPXlZNFsfTUoyYWnk1YWNh8ArHcQm+NiUVO3lCnytYZrfJRVXyJrWgeVdh6scEolizscNYbUszuhXgU9wvUNWaY19K4I1eIMPmHLDFNlA9xOx+iChl4uBBH1z2rXKQxE8lq+y+6u1+tFBMYpGua5uVZ1BjE+SSV1fTHFRxNYHK2zK/TlvLNipgDHW8V9ih9C7s/jatdIhs85r1mRLPhZWMJ3+La85sXI4iYJJTPeYxoZYsupaGoaDWjoAKSFPhXDCaopfIIQ2ysrK5LkuSz9DlQTcUCCPrrETXsuQOrWNhheNsq/SOYrM0SltzyCvSmmUFWODbxhTMCjlfVtRSskjRR9G7n6Ipq+201WM2vQfdfba8YhWh9tmi51qjJLM07qWjySGnpjIwyABcE5icxPiT4kWrKhnygUFlZRPxcfCimcxRzMf9c4LWKXVhjKz2j1krwSJtOsw487Z2e3Ktxr9OWuVfYoIIrKPx87+hzvKcT4384Bw19173NgjjNjUCTW0+xYdR0dkahqtamswsLCITmpzE+NSMTwiVVt8llZ78/SRWcfXSNWq1DXsNILd/v3eVnKKnZladY9l1BD6U7nY7T/APs7YCmuRRHozTGa5FE1rLVt9DQ2tUFJrQyMBY7SE5qcxSRqWNSsTvCpW+osrKysofBz8PPZFM5iY9rx9WQtRqdeAZZJ8TKeMi0xaTa9poj6yZv+TxBU88MYfJatIGtVa+zPO6lob3qrpzIwyEBBu0ksUadqVYL/AMq1f+SQ1KNR2IJUQnNT2KRiljUsaOWmpaE7PjD4zXFpZbTXtd9W9q1ylh0R5tWfGe3zt5xnCyirDPGg2ujcHxyh8E72DixLdfI5sDQp9Q81dLs2DR0mOIRVw1Bqwp7kEKkvWZUI0I1wWEQummOmYhdnC9sanWYE+WAqTpFSMCaXska7kOwfDz8PO/IhR2iuoz6q1A2SOeJ1Wxnsys7/AH2ztK3xMCx9C2LVXP1d+Ey3ZrMMDWRW7r6GhsjUNRrU2MBY2t33OcGIYXILmuQRchjYLCwi1PhCkiTocqKu7LG8O7KysrP0WVnevDzOPqnBa1R6kcTvHZ984GV5XhfbPgYTwrDcrRb/ALNZ+oO+ozTvv0dBc41qDGBkQCxvqExjgjZ7oY0p0bE7IWUHlB6yUHLPZhOYCnV2ldEtXBDfx3Z+jCijMjwAB9XKzK1Sma1jkC3ztjx35WPErFK3B0W97RVCx9Keyvp0YkjrhqDVjs1LztyRcUWksBwQVnw1yyMhZ3B2wsJzSiDn4Od87ZWe7Pd5VeLgz6whalUE8LcxSobHb79zlPEtJsez3x9MeyNmBjuvxPc3qPz1XIyTJxvEOMrUJY16rkcByD8oOCBWewoorH02VnfKpxcnfXSNWuUcOZJzblZ38bZ7nN8TswtGve01vpjsPUd5C6TV0WrpNXTCdWYVLQjcpNNewmOy1CTCa+ND0BKDkOw/WRsL3saGN+uKtQNljsRPq2fv3+u2d5mZWnWjTuj6UooKMZk+LhFgTq7Sn0mFSaeE6m9i5SNQe0oEoFZWQs/CzvlZ3Hw6UXFn4B7VrdLqRQu8fYHc9pR2cPE7Folrr0fg5+CUUTvUbmcfQYXFOiBUlUFSU105GIPQ+gz2Z+DEwySfgpWZWqVHVbOWkedh3Y2ys+Jm5WhWeheHYOw7D4BPbQZ4+jwiwJ8AKkqoxOaublyC8fFzvnsz3UWePwTgtTp9eBmY5O7O+dspwUoc19C0LNbvPfnco7edqzeMX0uE5ifAE6ujXRgK4OC87YCwe0n44yVGzgzsz9fI1a9R4vjeXN3O33PdO3I0C50rA7T3eO87xty8fUYRajGjEjCjCjAjCukVxKwuK4Lgi1cVhY+HRj5Sdjisj68hW67ZY5o3VbPgbZ+E4KUFrtLui1W+kqNzMPqsLCwuKLEY0YkYUYUYUYkYyuJRauC4IjYfArx9OLscV7/4B7VrtHqRV3eO7HdKzI0m37JcB+koj3x9fhYXFcVwRjRiRiRiRiRYsIsXE99ZnObsJTiV1B+AKmZkapUdUtBwcPuPXbCydvHYQp41ol/rwd2OzHwaCH4PCwsLiixGNGJOjRYuKIXHbKysrT2e72PKL2rP4FwWq0RZrxHg/Y/AG0jciOWSrYqWY7EPwj8Ch6/iMLiixOjTo0WLC4osWF4UDeEO5KLl4Iw3P4GRq16hwkifzZuV67DusuZy/T9l8c30VD5/xWFhFidGnRoxotXFNiy/scUC0riFzm/BEK3WZLFLG+pZPbx3+xUkjI06aac1tKcVHR4iJ3JiP0FD/Z+MwiEWpzE5iLEwYfuSnOGXtBR5hcx+De1a/p/VigeMYXnsGx8CW6q2mTzmppLGNZUARhCDeJ+ho/7fx2FhFqc1YwWuDt3yLqNcuLghKs/gypWLVabqdsFpbt9kFNajjUUFy66jobI1BTa1NiAXFOantQ+D4+BR/wB35AhOCc1e80smBTnYDi9DpvXvBZD17Oz8I4LVKItV2SmCVYWFJJGxGaxYfp/6aKhpMaGQgINWFhEJ7fjnegP3PyJCcE9qEae4r31yyvfagQ9cD+FkatX0WO4pGX6LhqRw69YkVH9OXLBpaZWqsbGg1Y7CnBH1HxTvQH5MhPCEmC4ZQasrg4IEPXE/hSE9idECDpNBxhpQRJsaDe8pyKH0FEftfk3J4WSC2XKwFxXuOXF34bC4rguPwnJ3r8DPeFVH7H5MpzU5iLUHuCDw5OIzh35MqUe9vn4gUH+r8oQi1OYnMWE16938m5TfOfjhQ/6/yuEWpzU5iIXn8mVP8Y7NUfyflyEWpzVx/JlTfKfiHcKP5PzGEWrj+TKl+U/EO2E1M+X8yQsfkyn9mNsbAFCvM5ClKhRK9iavYWI0EaEidXlYmfL/AG0pycPKATaspTaIQqQBCKIfCB/txTkWOdJHTCa1rfjg/wBtKIymgD6If/gI/wDwAFZ/tWVlclyXILkuS5Lmg/K5rkVyXLK5LmVzK5uXUK5rkVyWUP7QTt9ycHks+c+XHDSmZ4t+Z3zP9MhNzn/ofRwOD8uP2yP2z6jZvp/Zijsfm/l/0/6HPJ58fZnoPmd8zspo8D1/m5OK8ccePPDzuz0/sx2ITvX+Q+Y/7D87k5M9GHyfmd8o9B6n/Y9P8A/J/H/mfQ7M/s53++Pe9H+OofLnk8SVH6N+Y/M7OAEB5d4e5OWPd/jk8P47M/s53/mD7wPvf9f+jyU70Z4awJ3zOITflGM/dyPlfxb8o8tx7oOUEz+znY+hzzHq1fz/AOj0/wCRvo0jB/2PKZ8v3y5EAJ6yHNafdafAzj7Jv9nOzvQ+rR7zF9wP3Hjy8DA+Vnyke89N9G55HwX4Tl/BnHg0+G4X8Ew+f7Mdj6fyb6t9AfOf3Hn3pD49GRr+bz4BHFvzPwU9P+XPuA+4w+GkIfL5TUP7Mdivu30Z6MQ+d3zvPjHuMIw0/uEofIw+8cku5KTIGfGfcz7jD7rQcN9AfLPT+ynYoerfRnysX/R3zv8ATPuMPgfM5fwZ4QOXFSBO+V3hjQeAwGg+59lH6f2coeo9GejSsfuO9Xen8Y/QfO9H5WhAHqH1flSDIflO8Ik8TnjjyFH/AGpvoz0HhZ/ckKd5a35WI/7JB4+zPQZ5n5iE/wBH4w7iF4wR4/llR+v9pHpGfA+d+Ob/AEPyM9Aj87x4TeIQ9T8zy1P9HhPHg+C71I98JueX9oHoz5W/N/NwUi/hF6Ae88eX5K/i1f8AT/q9PUmVInk5OOX/AECB8/2gZTPQf7PHVf6v+UY6cPp55yYw75WY4Nwm46vjJT8J3rIn55H/AGD5wm+o/K//xAAuEQABAwMDAwQCAgIDAQAAAAABAAIRAxAgEjFAITBQBBNBYCJRMnEUYUJwsPD/2gAIAQMBAT8B4xKDwTH3+vSLxAMKlS0j/f20/wDR3rHkf/bL0tYvb13+/vphwgoCP+mGMle2F7MpzY++s2sE9soiMQ2UWH7tT2uVWb84xFnMn7rR2UEprIRThIRu3dOChNCqs+ft0IU17SfTIv6c/lYm9dsG7N04FCl+1CcnCD4KFGYaSiw/QqdpUSE9sGzDBRQU2rD8b0/5IKb1m/PODCvaQooUgLFOogo0iLhsplD9qLFoKNFFsefpXZsvUN6Tei6W4OEi43xeJHNphQgEBkWyvaCY0CxGEJ1JOYR348dSPVHewEJwnojb05+Magg3pOlqJwdyYKbRJXsBNpxcBFvYDyFMqFCi5VRkdyPIMMFRKAAU2rNg2on8sa4v6d3RHCsOvHZTQag3IPQfYtRbmCoRF4ThKI84wyFNoVVsi1PfGsPxv6c/ljVbI47dk0dnZB6BlFqIvFpTawW6Iwqt7EeUonoiLtThBhN3xiUbUf5Wi8IiONQd8dkI2CbV/aLZRGL2ptUtTH6gjchOEYx5akYOAXqB1Qyrjrah/LKrvixmpNYGokFPbHfb6ghNrtK3UKMJRu5splYsK6PEhRjUbC9MU7Cq3CPMNdIuFWH4oboY1x0tQ/kjjXHXABNbpCcpVTgym1nBMrtP+lCIRyeyf7VGppK3whEKmdLkERdyI6qPKgICEIKqUvkWonCJ6LY5RIizTBRxqjph6ZsuT061QdOwxsrQF7aNMqOwysWplQP/ALRCjJ7PkKk9EYuaqL5T8HhT5UWCAVVkFUj1wBXqGwZ/apmW4hVmwbUzLRkRF/TDono2eenYpbIoII0wU+kR2Wep/eco9DKY5OFzZo6p+BCcI8zUbITD1xe2Wqg7rFpwqiW29OehGVZvW9L+KegvbKdS6digeiIUJjdRvUozsiOxRqx0O3YnSf8ASBlEYh+NRvlmNlqa2LvEOQwCeNLsgnCCqB/LKqOl2bJ6ClSqrYObHaTKEHqgLFCz2Ap1MjsUanwjnSRwjIp7fK0D+KJv6hvyqZ6Y+obIlUzLcq46oGMjsjal/FOwrNkdilU0/wBIHAqbOoj4TmEZ0qmr+8x0Qf23BOEeUoHCsPxVF3xY3HXoqf4ujAWrDpakZb/WVZvzb056IojuUqun+kD2HUgU+kRiDCp1NX99iVPae3ylN0FFSpsRpKmcazf+S3xiURCoHrkRIREL07usI4v37NOqWpj57Ep9EHZFsYApjtQtPAKe3yjHSLgr1DPlUXdIxHUQqf6/WT6QcmUYOdZvymmCvi2q9X+XaDoVKtO++AsUVKIBT6MbYUD14ZCcI8nROG6jQ7EFP6P/ALznsOEKkZCIuFXHXuU68brdR2HUwU9hFqI/Kx4Tmz5Nhg4Bepb0lMdIxLdQxntVm/KobJ1wq/dp1C1NeHbIjsuo/pUacIhHhvb5NhkXCiRCZ+JjFpT9+/SEWNgqo/HvAwmeo/a37IKlHOO4U4R4E8Gi74wC9Q3/AJBAoYO77bG52R77HlqZUDuzPFcPJSmukYArTpMZDtm4OVQdeCyv++aU8eBPBou+MAn9evFbjVHBDU10IGeYURHkQUDg3jTg8d8BARcFNfPMc2fJUnfGDd07ew4YwKeIPchAKVOLX5wo4cJzfAkcAGEDYWNxxiq38u2G5i7XWPKcyUWx5CkcDYcitv2Q1bKewLh2E8iE5nPPAYYKHMKrb5gKFPbBu081zJREeOpukc2rvkGqVNwCUKLl/jlf469gpzCMRcHmkSjTUeMpu68AI9yrvgBabtplybQA3WylTYWLAUaAXsle0VoKg+BhOpqPFsdPMqb2AUInClR+TYqFChRmLFq09mOJF6jo8ZTdBQ5b90Apxotkolaig8oHEhRiCtS1Kec90c48Cm6RyypyoYSp8W90nxzDB5RRzYVqWpalKDlrWpalPgYxqu+PAHgU3SOSezKlSpUoOQeta1LUtWc8xxhE+QY6DyXbcCVqWtBy1IOU+Aqu6+Spu6ciqenDlStSDkHKea8wPCHv0j15FU8aUHKVqWta1PJrO+PKNMjjuPXjypUqVKlalrWtarzwSiZPhT36TvjjOPMlSpUqbStS1rWtQQ71Z3TyzHSOLU2583lSpUqVKD0KiD1PZKe6T5ZjoPFq+HlTcOQqLVnVdA8Se/TdPEreKlTaUHqVOFc/HmAYQM8Ot42bStaDlKlPMnxR79I8Ot4+bhy1+ZDLDglVdvIz5kNWylSmHhVdvtAChEqbtPCq7eVjyQClTiEOAVV2+yx2hwav28cAqrv9vbwCn7/b2bcAp2/2+ntwCjv9vpcAo7/b6e/AKP29u/AKP28IZyvcC94L3l7xXvFe8veWsFH7gLEo1AjVXuFaj96DoCNVH/xyv//EACoRAAEDAgcBAQACAQUAAAAAAAEAAhEDIBASITAxQFBgE0FRcAQiMnGw/9oACAECAQE/AesEWn7+k8NKe+f89/6dsqszKfv2uI4RM/4YJUlZ0D96ecCE0wptlZvtjzgUCqZtGAP2r+UXAJz5QTTFhQwemO+vzLOg6cao0wAxpnTF3CBRq/0plAoeFOwSsw+CdjwmmcHDS2nzi7hFRjTPezLMnPhGocJQqFB4xJhOq45iEKiB99+L1TONQQbGnXEo2NPdccCYROE2ByzpxwFkoPQdPuvQwc6SgcawtadMag1tHZlGoF+qL5Uo7UKFKm1rvccFmhF040zphU4tpnGqLWdcuUpz7ZwyqMJvIwnGUCh7jhqowlUzrg7i2mdcavFrD2HHZzKFlU2TjkRCmxh9yoMRgEbeManFw61QbQxLFwgbWuRbKe2EMQUPbeNLCqR0RupnTCpxczi1xhFxKCB3zTCNI3whi10IsBREYTYwqpaw+44QbKZ1RupHCpxdTNpMlDBvScwFOpEYC9roThKIiwIFHUIoYgoH2DKa/CqLJi8aYG6mdbKh0QTcBsEqVKzbLmApzC1Spua7+E8WhNcntQsYfYODHSFUGlhCpHRPEG6mdMHj/dcDjUOqahgNh3KGELPCa8HZdR/qybGmU5t02goH2JTDBThawwVVGl1M64VhdTOL+U3DOg/Yehg90YtqbNRk7A1ThcRa0+sXQU584tMi0ppkXgqoNLmHXF3KCOLDpeQuEXWtfCDp2KjP5tGLtdsJp9WryoxpFO5tolPGt1M6XjF/KFlM7DmyiLxUQdN9RkWCwjbBQPqVbKR1VUWzCfqJQtpnXCoNbqZwqc7z2SiNgVCmvm59ONmNpp9RwkYQoQQ1F1M/xdKCqi4aIKoLm8bLmSnNjZZU/tA2ubBwjoBNPqPGtlF38KoLnj+bmvITnyL6ZRRwjFnG0Qn09kGE2pZVGnTBQPp1LBov+Qu5b/1vgynjVCynxuPpqNlr4TXThU46jT6bhpbRKcNbWmN+mVV5tp7rmynNI2m1f7VR07M7jT6bhY0wn6ibhvvtpnXehOpf0uOlO4E0+lUFtM/wiLR0RiOg5spzCO80+m4RaddejOyw6dF9L+u6E0+lUFreqbaZ6MpzZREdwIH0iO83fmyE5ncafSqCwodU2BDqObdKnCelKa7wR0CEbB2mcbc7Tm4DtByB9CoO8zjZndc3utf57hp3mcddze61yB85417tPjblGoF+oX6r9Qg4HYI7oKD/ADXju0+NkuARqHCFFgcV+i/RZwswU4Hvyg9T5bhHcZxsPfjKlSp2ZU+AxvmPE9xvF7zAwyrKERZKlTbChR32ifOeO2L6lseWwR5zhp2hsEKFCjDKi1ZVCjxqbfQeOyN6FlRasqyqPDaJQHoOE9lvPRhQsqLVl8Gm30njXsU+epChFqyqO6wSfEG+8adimOvChZVkWRQo7FIeo4R128dmFChQsqyosWVQoUKOgEBHqVB1m96FCjCFlWRZFlUb1JvrObHUCp8+PCyo00WFRtMED1nCerS8mMC1Gmi3CLaYk+w9vUp+bCLFlUWURp7BCIjpBU/PhFiLVChNED2ag6dP0oWT2S7AjohUvqpwjB46IVP6qLHdKnz9eegFT+vPQCp/XnoBU+Prz0AmcfXv6AQ+vqdAIfX1OgEPr38dAIfXnoD7E3wvzK/JfkvyX5BfkvyWSPsTgAhTKFJZAoH3RGqFP/xhR8N//8QASBAAAQICBQkDCwIFAwMEAwAAAQACAxESITFBUQQQEyAiMmFxgVLB4SMwM0BCUJGhsdHwYnIUU2CC8UOSoiQ0Y3CTwuKAg7P/2gAIAQEABj8CRa6sFGG6w7j0WPtHma89aqqGbazF0jRFslo3ynKcxWD1UgJlCI5smusUrnKQEwVSimpUILeqm7adnBFou/MU2PDtFY4/5TXz2HWyt4rybWQ429CZSLnOYBXSuBzS3n9kIRYlQbW0KULalVS9kdbzyVNx2rj9sM1siKwfzBUhU4W8CPt9FtekbU8cdSbzyF60rhRJpVYAykPlNbZ2hYBWU/QumZfNRocpbphfsAqCg6JxYyITpojbaU7D0UJ8Kl5QHZib1R3uRz02+kh1tKbHZU9t2BCnFeGPbVEBxVDJW0W/zTb0CpvNJ5tKosNAbLZio7VgGFlaLYLNI5gmfBRIZaW5WzbYDVNotbL55y03ow3+mhVH7o5O/fh7vFuahk40r8fZC02Vvm4Y2BGFkTJ4xDZ+c1pm5QXvFbmmySblELebaOVvwTYtr2TD29JIaR5fLHUblIradmKOCGVZLW60y+qBynZYPZs+Sk3lPULnGQF6Lcmr/wDIe5bIMSIbVSj+Uf2fZ8fXKPwRyCMa7YXO8ebLHdDgUWkSjMs4qR1sAqs+yq1XUsFYphaMgU2HZBnKu2oWkXTTYZ3WTo9VpHMpkDY4HFGWxDNYhTqUzYpTE1wuTjIFjACGmwlzg0UuFdajBwkINJrnOY2GQ8VtoyuNktTRk1Os/ONqLD6OJZwd4osmIYdvEDbdwnapQhQZeVSO07FUXbLbSzCdlLE8EIsZ2hhy2S7ed+1mGpXuPqPBCMPRuqiDh4ZiSZAXrR5K2Z/mHuWmyp83Yn8+ioZONGy935Yu07EoR2DhEbiEzKYFbm7TTjiFpIDy0PtCpPJc42k6j6FcJ5cOE2yM/nJGK6rEXLRZG2ke3d4rSiPSeK9H7KERtRv4EfZCJ/qQ9mKzEX/FShRdNBbtQ6e1IG7EEIukBSM5CzO2O3lEGITcoyat1okhpzRZ2BUFo4Q0kbsj8qVPKnSbdBbYqLRIYZqJ9BG+R/KlS/0Ylv5wWOelEdRC3JQRXRPtG6eATWD2QBPlqlu/E7I7ytsz7LBYqUfYb2BveCoMAY38t16s3f6q3KIdTmSrHyKbGG9ZEbg7zc2+lbZx4IxWiv2x5nhm4qqtbWaVxsX6Cp/NSYJ8VOIZnBVbLM1A9EYdVQlRdWHNNrSqNCVUplznmWApWak7K7eaFKom3mPFaSO+YCoQGBvP7XdUYUcbRsleiH7sb2v1D7qQDP4qB6OJE/lz41TatmIYrzMxH2NJ4X55Iwn+kZVXePypfw5ZpJejP3QflLpMuZ4LQZIyk+yf5atucWMbGjUOSvNRrhH5+K0Zqhxd3g7xz7R2rmi1bXkoPZHeVoxtxBUGD8qXljRZ/LH59VIVZpH0Ea3g5aYejNUTl4Kqy0HPSeZN4phDJQGmlXa+VnRMbEfuiQC8n5GB2vaK2BXe6/ULfgnQInpoV/0PcUcnfvM3eS5Xqhkopu7Z3fFaXKXFz+P5UpNEtSlEdLAXlUYfk4fzKpbkL+Y7uxXkxN97zb0w8xxUjqVa8/OEFUXf9vFqd3Hp5xxdDGkINaNUuGuFwzUpbItTqi14kGslWSRMcrMzgTLabOqZcDctnZa4UmtNoVa2zUFRhN6qbqznqtCZFhW2hNf7Jt70/RQKJD2sgUZl7saWNVeaQ2n4BCJEqAra1CHB2nfLxVOKdq4YZuIsU/bFvA/la2t9lTx36k3nkL0Y0pW/CqX0XlHbXZFZTtE6uXWtR4bG0GmRgj9IFi9JoWQv+5awbT57p/zUjQBay4Gs55tqezaYVpLHCp/Aj7fRUY7qEWHU6f1VDJW0W/zT3BU37T7yVJmw0SnL9RkAMLK0ITJU69s/OSdFybSRCwgEltTsaItqzlpvRgRPSwtkjFHJX2trhnFuahkw0r73eyFpcqdSP6rB0+60eRtpG+IbFpIx0sTjZrtyhldz24puVZLW6p1X1X/Umizs2fJbA66hJMgEWZPWe2bOiqnEiG0qlFlFiYeyPuuWbu8x9VNcPNz81NVbwsX8LEPlYO7xb4eciSHk4m2zrrtOC5oG5CG91AsN06wa5gCQpjFyApFoE5kGRdO2lJSWkY6i5UjXO0lUaVarQoibcMVOD6KIKcPEA3HkdSid13581I+jifJ3itEX0IdZk2101RhihDvKmaz2jYi0mi2olmE7KWJ4JwgyL2tnK8jAXKG8NlEbEfDi44iecE1MfU9CMNyx4/T4ZpmoXlaPJW0ndpafLHzd+fHoqGTjRwx7V/gsTiUIrbW7zcQfv9UzKoFu8w/mK0kIyERpa4c7RqvDNx05gYiufctI662yS0WSNme3d4rSfxBpD2LkTYbH8CPyfJV7OUQDI9LCm5TSc+LayBY1jr68NRuUs9mp4xamx4G9vMcpZQaMPsjZCoQxTjXNb+eKpZU6iy6E1UWiQw15vMk17mShN2mwza43TwCbD7A1ZTpxOyO9bRquYLFTyjYb2BveCoMbRZgNTgjrSz93mPrq8PNMyuDj+fFMjQ914n4ebI/1GVsKk60a0lK8ZqBsuzbAU4hmcFVssXeqB6IwXWt3eS0dVGlSsrnZbqV1fn4VJ1th6eKpxXVBSgtDBx+1yoRgJmwi/ghEnLSS2sHtsPVRHzECM6G8RG2NdMbzcDO5aKI0F9IOMW8yEq+PHPK4owYlboeOFngV/D6PSfy7quKByh9GH2B3LQ5IybrCbvFUok4kTsiv6dypxdz2WCr/AApaFvwVKFsns2hOyONYa4f1q+qLD6KKfg7xzClW5261Tyg0B7MIbx6XdV/Lg4fcqg3biASkO/BeWNGHdDb3+KkBLNP/AE31O4cU3KYe6KnjFvggW1g1jPSiGiMU2TZZODSPafJAPdKQq8F5PyME+2d4rZG1e4269ao5OJ4xDurSRNqJ2jb0wVWpSiulgL0WwvJw/mVMbMO+IbPFbAm++IbfDU4eqz88Wu3SnZDENT9z93j5zTMGy63mq7RUdakLrVXYsDcVOI6oKjCHVTdtOzzvCERlorCD23rS5MCBCkyKDbwidc0htOwCESJYKwFKHXdSu8VScZn8swzfRV22Pl9R9VQf6WHU7uOpN9XC9GNKiDP4SkpPO0PZFZ8EdG6vA1EJ8GwyBbPgK/8AkoT8lOhh7kYMqOkxJtruTX5RPTHenUfyWejuuFbHXg3FODxKKzZiDAj8mqEd1CLDqdO9UcmbIfzTb/aqcXbfxVFpoNqrstMgBhxVGG2ZFrzV8FEm2cWbaEuzXSzyNhRgP9JDsnePyoo5I6zegk4YZqGTDSvvd7I6rTZW+kR2qgOi0WRspG+IbFpI7tNFxNinr0GinE7DUHRzs3MG74oSus4alImQF5VHJ9o/zDZ0CqnFiFB+UeUf2Bujnj6th6pCjsqcDbyTIgse0O+Pm3MN6dO0VO1JZ5XXKRtC/LUyHCFbyA0cSj5ZsSNSkGsrEr5zAv1KJNTrEQ7cf9fFGbpTqIF6kwUGKZrKk6oVEs52TxKEV8VkFjqmOie1LAC5UIkrJgisEG8HPSsa6p35wQyhljanD9Hgpiw2KkahiVo8mbSd2lpssfSOH5aqMIaJlnH/AOuYR2jaG8MQm5TA3t5h/MVpIBkIgrvkR3hNLjSLpkk2znXmmczYjbIgoxP7a2lU3ixaPJWz/Xd4/RUxlBp9m5TNtjxx/KwmzrzFzbcM7YzN5vz4JsWDvb7HXzUspfsdgVA81o2CnFuY38q+qpZUZMugt71RaJDAa83mSk0GFD/5kdylLnx546tHfidkd62zVcwWIPj+Th9n2iqMIBrRb4lUKRN1Mbs+asz1efkq19F9fMyzDP8AXU4Zm12uWTTt0bfp5zTgWVP5Itwv4a3EbqpBc7FojU5u7q8rFJ1thVOK6oKjCFEXf4uVCLXO9TduxJA/uAq+IUECKyFFgt0bmRDRBE5ggqDChvL4kAUaUtgg1mV9WeSMJ+8zHCzwRhBlNn+nO0cCqeUuosuZ4LRZKyuwuun/APJWOixcBWflZ0WEs7smfuvrhnu/L0Wn0UY24O8U9l8J/wAnVqbipWNwzGVty8qauxd+c89W6+QcEM9MdVSeaLcU2i0iACHHF0sEKbgOHzqXk/Iwe1eVsDa7Rt8xRycT/wDIbOi0kY0n4m3wUgNSlEdIfM8kWwvJw/8AkVNoky+IbFNopxP5h7sFQE4sY2Q21lUssdRZdk7P/kUYNECHKVEJ2TxT5WBVzbcfMV6vLP36vHNjm4eoQslhV10fuUGt3WiQ6eckbCiBZazlqSz0huu+q0Z6IRG2hBwvQ0cMwz7QpUh0vzStdgg99TblKHtcbvFUnmv8+CqzEO3rHfcfVSd6SHU7uOpN3wRjSkLvhJbRmRcKyjo3bWBtTmSkCxujHBo2h8UyAIj4T5nSMhjaiYbXAKpzwMKjXzWw89VtCq5wsVW8K2qkajY/n+VowolUQtou4lth+GrMBwikzuoy+s87GmwlbZsWw3qVM2qRTomVPpUTabJclosjZSN8S5aSOdLE42eYoN239hqnG3ewN3xVQr1JkyAvRbk+0e2bOiqnFiFUso8o7sDd8VOIQxgsH2C8l/02T/zDvHkvJjaO881uOduVw9+FvjFl6DmnYcJhTzSUvOSvVikp6/DWrXDUkiTVxWhycTLqqQtPJaeN/wBy8WdkYc/PGXpG1sUrj9dYtNhUjU5q+oUjuut5+Km4yUoYotxVe0/BbW72bvHVn7Jt5eCEZvs7w/T4Kqw2KZqGKoZO2ke0tLlTqTsOPeqMMaNnz/8ArmEVm+N7iE2LB3t6GePjYv1OZV03hndDcKinMNyfQrhmo8wJzUGKKpOr5HVZGezSUN1t07p8M7Oa56jHucaA3mC9UWiQ4a83mQWzOFDP+4qzn4m/VlOnE7A71tGq5gsVPKPJs7PtH7KjCaGMv8StFkTNM/2oh3B1Wlyl2nj4ndHIa38MfQxNqB3t1bVxuCrWAViwWOfDUrC2T0K2xLjq92v3ZuKnhdmkNp+A71s+j7RqYFSbtxr4p7sPUNK0bL/kVxGtpBa3e+6r3XWohUojptVGEKLfn4LYYXm+Qnai1wouFoNusYZtbYD8JHlYjDDabPYxHAoOjmi25vgtHk7a7KV3/wBlSeZv+fh01Dk7t19cPvH5eo0QWyBPW09dRlF1Ee3yWjZtxBd98FSf/tuTZnaZsu6WLhnIztdgU3UcOo16OTiljEO6EIkQ0n9o9wUhqUojpC7wRbB8mzH2iptqZfEdZ4oFgpRP5ht6YKh6SMbITKyqeWuoQ7snb/8AIoMY0NaLANctFUQbUN2BCpkUYg2YgwcMzze2r45uNwVI1k620JqYr5rbFHAa1di2dk/JV/HPjnx4a83notFk7TX7ItQfle0f5Ys6m9BrRICwD1FzDejSHB2tjwRbd7J4Kid5qm66z41n4JumBoXXNE73XlEFgGU7TIzGEiYJk4YBsqwtPFlAgSDWudM1NEhRFrkYmTQToYYJMRxrdK2oVCWGpNx6IxJSF3wkpOtwFvgjQNd4NqoSlsN0f9to+KylohNjEtadG6zerruRdk8ZrxOToc9oHgfaHHPs7wraVXbEhyP7m19+eqwJzRUSKiqDJU+JDfhNMMVhZGfEdvdloHeVGhcA74f51XDBUII0j/8AiOq0kd21cE3EapbgdSiNuIbGBTjbt0MWdUKrPyzUJJkMVRyfaPbNnRVTiRCqWUGm7sCzripxCGNFngF5Efw+TH/UO8eS8m3aO887x6+ZrRjQ3bLxKM3E3HMXw3BzHbzeV4VYVJ3mZGtbOyqLqtauxUmbpuz4a+AvJVGDWe0tJHJYw3nePJUYTKOJvPM+qaYCsb3JFt7c5z1DbFbfsg/C1VX1hGEbRYoQyVmmyu1ocKW9wFRc3iqeWPMWN/Kaa/7n+zyCMJpEOHMEMZVKWF+auxUIApHFaTKXTOH5apQthmN/gjooZiFopOkJy4oRW2i3imvhb29DPHxsTyyyM2g8YVz1WxWbrXil1tRkqzVhnIxrUGHDcHNDPKMcKTZlxMjPAKwN0gcJCzHVbJ9GERthUGCnFuA/KvqqUYyF0NUNWdzhmm4yCkwaOGb/AGirOfjqynSidgd62zs3MFip5R5OH2faP2UobQxl5+5WiyJmlffE9gLTZQ7Tx8TujkPNVmpfpuC7lXnrbI4tqXknB/A1FeUYWjirfMUSi02j5qvVLDeiHWtMtarNXtv7IUmDZvuaEHO8pF7Ru5D1Yg2G1GV1nEKq9S1Kui0g3X28CtEf7UIjLQjo3UWxN6VvKdueW8/AKlGNFnZWjydszj+WqlENJ2Z+gfQ0gk6/Noidl9n5x+qpH0cUyfwfcf7s+2eQvVXk4OKMJhpRL5W+ChxO00T56mlbvQ6+bbwpiw2KAf1y+OrSaZSMieBqUmVu7WYDHVp3s+iowBSxed0KnENN+J7hcrNSlEdJUYU2MvN5U2iTL4hsU2inEviO7sFQ9JFNkJtZVLLHUIV2Ts70GMaGsFw8y8s3gJhBzd0iaoiweY7l6MA4tqXkonR33WjiCi4Xass2zsxG+jd3Iw4ooPaZEcVROrpRyf3FcdWbytHABFK4bxQflX/tDvKDWtDWiwD1g9ttYVD/AG/bNw1Cwmo/LBSse0qeO8EYbrHfXxW2el6lDFCHj4rtxfz4Lbqb2UWwWUpW/wCSnDKYZdVNsSQG25u622dXzRo1tunn43La5RAPqPqEYcdwbEh2k3i4hUMlb/f9lTjeUepN2QBXLiZADBFtJrJCbojzIDl+TVCE4vYCaLnCU8SBhPUKdkzt22EfqFCdg9v11Xwj7QkjDielhVHlmh89VzHVtcJHqhIWWalZkFRgbR7RsV8SIUH5Rtuuh+z1xVJ5DIYqb4BeR/6fJ/5p3jyC8mNo2xDvHzkTJzVIzZy81VmlZEG478uRhRanNtGpUFX8M38TCHlWekHaH3CqK2tQtIqNRCdDN1h4Z5k1XqjCr/VctJE2IZ9o2nkFKG2u9xtPrdNlQdWOBU/iNbSttbU/lcVI7rlI1HFU4rqSlDFBmKDWik82YrT1CNC2xCMrG1zPNO/hxpBFIdo4g2WSrAxJBRe4zcTM9bdVwbumo/VTf7K0eStn+q7xWk07qYrlcj2gJOA+NX1CLH+kh1O7isjAi0naMQ3MbYC80iXHmVLUdR3t5pTNJVtD66xjNur5tvQIsKacJoZrPjnMs8iaT+wFtGTbmBAxfJsN3tH7KjDbIXrasRixC6M72adg6ee0rLVJ219VRfsniqjMeapMqjt3TjwKkaiLWlSnraWGPIxP+LsE4YV6ulG8z6Zu07sqiwTA6NHNB0TysTE2DkPXXMN9iINQsOrUsRgi32bWHgpHfbbyUzwl8dr5IiiHEMJhQ7A43BOD4bW5QTTa1orbgCbuWClDGjgCpkIVAX9azqzceQWzsQsVQbtxLx+WLypk25g/PqpCpVWoOsY6p3D/ABahlDRZvjFvgqbbLQVDi3ubXzFuoHdPiofBzSf90keeqD0RhHdNbO8JvGYQ1Z9pUojqLVRg7DMb1sjZviGxUhtRO2e5UjaVxuzDz5LQq1UZLZdSbe1yAd5N+Bs+PmdNCHlm2jtD767oT91yMJ/KeIuOrI2G1PyVrdoGQlaZqnlX/tDvKDWtDWiwD1/SgfuVE2jPWuOarfbWzvCDh1VVc7CtE60burXVxVDJxSPaWlyp1J+H5apQ/Jw/n4dFV8czWkyDiBPmg1jQ0LbYHc1Q9j2Z/JHJzZWYfeOiiwD7BpDkbdRwHRBzt5pk/op3W55DMQLbuamKr+RTX3tM01wsIVuo+IwTcytXxIhVLKNs/wAsWdVN+wwWfYBCiwtgXOda7Ub5iZ6ZqjqnV2TNnYNilY/s+YOUwBXbEZ3hT+KGrNvpoe5x4IUrRUdUPoinKjSvl7hINhUwLPouBz2q1d60jdx9vBy0J5t+yERu8EHDPIbT8AqeUOoMHsrR5M3+78tVKIaTjqFwtFY6JkQWPAcOuaRVW+K2nv8Aug19WkBb36pI3Ylf3UN3tN2Hcx4KxV/DUcLnV/HM0Xtq1XMdY4SPVFkNtHE48ytHkjdLE7XshaTKnaaLh7IRPTUn5hjv3T5zzzFqOOqatSYMiL0Gx9pvbv8AFBzTMGw6/wDEQh5F3pG4KWscpg+16VvHFSNo1Z33+4SRvtsVC72ftq2IsdY75HFSNT2FUsbQi07r7/zFTcei2PJwsVJopxMfyxeUNXZu+H314IwaE4m4TzTvCgxOy4OPKeq6W8zaanQDZFFX7hrUr2/TNEh9dYU4hECVcMXnmqENtFuAzTxz2KzzEaFOx1IN5qvMAwzc4fDP+nzOhinyTrHdk/ZV6xBEwbQqvQO3Dhw16cO+0avC/wBxU2VNdWOBQPxU83dm7lpm7zKonK4qidx9vNUXVYFUojqWA8L1IbDRcLepu6KTZTAJlZZhx+afRfpIsORc1o9hwnT14RFdRFXNcM0iiOymO7QB+Wrs+w6mzkmvG64THXVIxRF4TMHbPmR5xuVw7W7w4IOabVUp36lWodUZLFO2PRHEYa5hRBNrlQdXg7EecoHp7hcw32c0Wmr2X8/HPPPjcRwRZ7NrDwUjvst7lTOFXx2vkjpJSA8m2uiT/bMqGKLdK0bUm0X2ThmuwtvCwAmGNFwJnLlq7VtzRauxCwWjFejcRqNidoSd0WTn9NE9Kl3qrOyMPZqKDJ7UI0elo1v0uE0HXgzCZEHtCeqcxTeHnC02FFp9G5VHPP4ebmKiLCpOqyhu8MeI15OCld5zjf7h04HCJyxUjvN/J60h6RlcPjiEH/Hkpiw2FaOZDm1wzf8AgQc6sMnEf/bX8yizKITXGi52wKLyW3CUh8QiW1C4W5puMhiqGTN/uVKKab1JuyJVyqtMgFGyfCTx9DqFw9mtRMldftw+8KpYlYnM5psKdk7v9TZ6isazYsq4ffm0ftQzLpdrHA5pYHPw81P2gqLt1Tnr2LBUg2nyXbPZbujrepuzh7DRcLCFRdsxxaMeI9T+vuEg2G1EXD5s8Fw1e9aVo2IlowdeFoXf2/ZB7d4Wc/FaSCaLntok3jkiBJlL0pbUXn9RzUWbb/ktJlLpNF35YqGTN/u+2KpiK6lh+VKftXj51fUKFEda00IvI3qVpzkGwqY34Tpg/mKZEZuvEx11WZVDtYQmRG7rxSHXVcw+0E9j99pkU5nbb9NaSINoRbjn4KzkjZ5mky1cLwqj5ipF0MBrypOEtQOaZOFYKET2rHjj6nQPT3DSbvsrC0Zs9n7axhuscPgbipbr2H5hUsRJwRDt131x6qs14BVeThKTBTij86Lyhq7Is+H3z0vZfU5UhYbeXgmOO8Nl/MajY45O7k/JzbDNJvI+OqQU/Jnb8B1XI+OtTeDM3tUKPDiEgOrB41a+lAqNTlNDNs/BSIkfNlzVUZFCHEMn3cfMycFMbbB8dTR+zFq6iz1Oanff7hpssdW3gcFMX5uGppm7zaonK4qi7cf9VRcqcU0sB4XqTfJs4W9T3BBjBN2AHcjDNct1wsINhGeSMJ28z6KNAxk9o+R1HNNhTaW7Oi/9p1ZJvYj7Px8fMDWcx1jqinMNrSmnPX5ycpFSKoRtpnavCDmmYN+rwu1JjYiY/dSe2Tbn3HMHXQxS9Umpj3A5h6HiiDUHGTv3eOsRbi3miz2bWngpHebUVSPD67SdJoiODJwYZsP0sFy0cVoEQBwMNl7InsPNxbaE0OMwwUW8tQPFoUGJYx1R5Oq1REHIphO/D2HdLPlqiIN5hmCmv7Qn54ZQ27Zf3Lhqg+bpGpVqbK23suU2Gu9t4VebhrUXibTaCi/JT/8ArPcU6qURxvUr/VKJsu9w6VvJ/wB1RO+2o6taqG22tveEHjryX6XbpRgPtbu6s3GQWjhNmLyuIUOLeRJ3MVFcM7muvT8lf/qVS/U3VIQb2SR550N+64SKiQn2sfLz5LZSFsQ7g+54BeTBn/OcK/7G2NHFWzKrVNhouF4QblIke2LOoQexwc24j1/iPcBabDauF/7Vwu1tINx/ydetEebEIzN5qDxfnos23qnHMhc1SaJNUSLlRc1sOU4bBN+1Ya6pL+Ga6cN7dLAdYS048VPUZlcKp8MgnomRm7sQT1XDGvz+kHt73Medla42MFZVHfP8tp2B+53tcgqeUGsbrbJDg2wLZsz15qUOz2mXFbBk/wBpht9empj3BSG836LRm7d/OGfDNwRY6w34YKVj2FA41OCLSdh162jX2QqvJwsVUNrtH8qWkf5OCN6JK7gFDZR/6bKGS/iDvTx4USoTHFmUPAcyI1pm0wjYCedibHqY5ktGG1BoFgCZFHtXYG9d2chRcjd/pmnD/a7x9UI1nDrq0nGQvKrOjF3bdybdzK7EL2gDb+99p5LZkSLPBcc/0X0GcOaZOFhCDMp2XfzLuqn67RN/uGmyw1t+yBF+tp22ip/K4qid131UnVYFUnGmuCblEICJG2vIvFVV/NQ8qNbIrdHHg4S3hL5rQg+RpUmg2raNfZCwGCdk53YlbP3Dw1YMSwO2Hf3ePqtK426od01DRkaO872RzPcFNk53RSP/AObLuZRp10t6us8ynZI6sGuCeGaa+uc0zLDE9FMjRwrsSqs218FR3ofY+ypNNXrs77/cBZf7PNFrqg4/B3jn45uKNIVG0c0WXeyeCk47bLcz8nimUKL7R9l4sK/hsniOIpUzE3a+HBGJFfWbXFUYVQ7V6k0UjeVN+275JsVlrDMJkVu68TGpSG82sdEHY1+qy+Goc1dbjutFZVAbX/jadn+9/cEHRjZuiWyP2ts+KqqnXzQn1VNnpYdbChFEh2hgVwzUnVAKhkonK2KbAqcV2ki2lxs6KTfiqh1UzWVZmmKlx9cndepj3BphYan/AHVe82p2aeps+kZWO8IP+I4IOFYOajD2nY3LaNI3Kcar9F/VUWiQwGd+SutZtQ+V+oQmDAeqz1CEWbuBtcf2t7yiBssO9XWf3O7kKpkXrgp5hcqVkCNU7gc2jb5SN2AqeWOssgtu5rRwhIYNsWKpRK+CqGtI+uS9lTHr5a6w2og2X/tx6a5jQhs2vaLuPJbDpDBSc6rAVKe6ztFbI2u0bc1SrzMjNtafkmxGbrhMevPeeFSlL4K3NUpZnCKd7dF801rn6OD2ryFJg2v+RVEWXNCm+zBVDzNE2+ucMFxw9fpt32fRFh9nd5eC783FV5pzW3DbO8jZ+im2GOtf1X0XHWdk7t6Eav2nx9eOapdVzUyaIRh5KKZvimwLSx3aSJ2jYOhREP8A3KZsN6sr85Qedq44+uyfZj6/SZuu2md4VIWHzWGqx53HbL+R9eOC+i4i/NRG3EuY1UspOzdCatHDr4CxVV/RBz9pys89o3+kFhx9dxGCmPXXMvtbzRY6/wCvjq26nevpqFTUNx327D+Y9dJGGabnDhj8FseSg9u8/nBVWm87yoQ58gqUb/agANTbcG81VN3IKqEfivRfNbTCFsOrwsOvMVEWFSNUQbw7/XZhbfxVR9c0zRU7e5qveFTh5g16luYowHbkaofuFnrribALTcqGTNpuvdcEYkd2kfeTu+KlD/3KlEm0H4qpupImb+wLVs+Tbwt+K4462w8hVgO+SrhkK/4LeW8MwdD3hYuN49fk/wCKtun09acx1hRDrBUf255K2vNX5kOFRFiZGFpqeMHX+uP0jvJCUmC+pUIY/sFnVVbuPshBx2n9o92qYcEybe/7efsVL3BSO6PXNK3fZbyWjN1nLW4ZrdfRvPkYtR4G4+uRoUPtSkEHR6/0fdCQs1SBvOqU7FXNbMx1VvnLM8vXaPxKkLB67NlhrZ9lMGo63HPPWouM4kLZdyuPrb4gbXEMyddvBSwz80Rqc/c9e8bfXi32hW1GG6x1nPzVqxVeYpkzJj9h3Wz1sa82bwXoXfEL0D/iF/2//JbLGs/5FeUhlx7QVc28wuGK5KXuamd1tnP3Bpm2G3gVO8VO83PU2vSw9l/HA+4rFYrM1isU4ZkqxSVYIR2vj7kDReg0WD3A5jrHIg3VO5Y5q9Xh5hrj6N2y/kfWWjj6nsraE1Ua8D7hpm11nL3FpW7zLeS0Ztbu8vPtnvwth3d8vWBwr9VqVSrqWPrrW/H3JNm6a2/ZBwsOvhr6I7karrd6w5/T1mutWetmJjUPchb7YrYjDN5q5+eDhaLCmRcRtDjf6u0e9OKDcPcumaKn28Cp+0Knc/OW5jk7t2Lu/u8fVgMfetI2M+vuZzHWORa6wGTuWfFfU5pLHXpC0Xpr/wDUFUQcfH1VvCv3qBfafc+maNtm9yWjNos5eeAdVCibL+4+qnl70aLhWemtZMKw4e4tndtZywQcLCq/MzzzWiefKwvm31R3vRz8ahqyV4Vo9xFvttrYUYbr/r55sWHvNP4E2KzdddgcPU3e9GN4auBWPEe5P4hm6/e4OX6haM3HUr15Csowz6GJ8nXepnl7zA460pz4LZ+Cs+tvuN0N+65Fj6pVHliqlO7Nw16z0VCGLbgpvr4XIITtv9SPL3m08dW2Sn/yW1tDFW3e5NOwbcPe4tVA7ws5Ljmw1ZuqClC/3KlEm0H/AHFSDZKz1Tp70mM9hPJdoKbT0VE1Fbox9yzb6N1bPsqYsOrJSG07BbI2b3eyECdp/aPcrPVunvSYVdRzWT5LbEnfBVbQ+aka1afcroft2wzxToUUSr2hgVzsK45ts9L1ooLTtWNFqD8rt/lDvKADZAWAesdPe+PBBrxLmqtrhevya3v8e5tIzYyge1c7mqEVhaONbehW5WqDBKdwrKp5T5FnHfPRUYLKOLvaPM+tOPvWRVVYVUwcFJ1nyU2V/pUnb3zW/wD49zyImMCpnJoc/wBq8lDaz9ol65zPvapbS4KTf9pVY2vmrf8AH9Ct988VtVDFb3vQ+os5e+pH4/0M3l/V49Rby/8AQBvL+rz6iOX9b1VrcKrkFW/5LeK3iqn/ACW8FWKsQhy/rA57KPNbTvgrJ81U0f10QAts9FUJf19V/wDkPy1RqTXOz+sCOE1LgmjFdUeSHBPwTV1QRwkhmK6IDgpyuQ/qwoLojyUuCauq6LmU5BdUAuiC4ZuiHKzMP6tGZy6JuY8kOaKYimo8kM9lUkMJLhJD+rnJy6III8kCjyTfmjzQR5ZyugXRBTXP+rOiKdwRzBFBH6rijzTeaOeuxDuXKecf1aZoooIckU3kj88xQXQ/gQuszEmy1dNQf1ZUnc0eadmErPkuq6I5uqarJIKripoKrMUVz/qzrmdmb9VViuiKmuCHVY8u/McPkhghgvsuqK6of1UOeoUe5BdV0XVV/nVTXxVe8MbV1zVLoq/mq7eK/PkjUm/1WV8UEUUJ2fJT43Loq0OfT4KvpPMSN2XRVY1qpVWocPggm48M7a/6qCKC63p3eigQuqrtkjwX59V4dyHJG+zmuH5YhPNL8+CGYd6GKb/VZKGZ2YfQ/fNVxThyQqqmvwLopIoL7KWauxVeC4ILr/VR6oL8xRTZ8JL48l0XVPwQP+VdbzQxkie7uXxQmq199SXjm61f1SEeqCdNcOPcguq6KvFOGKBVU7bl0tTsakUFhyzfk1KWYStzdf6pC6op6Mrak2aOK+yPymuCrXC9fGSPcqv7kJLaVdnDMLEO9fdDFdfe/wD/xAArEAACAQMDAwQCAwEBAQAAAAAAAREhMUFRYXEQgZGhscHw0eEgUPFAYDD/2gAIAQEAAT8hEFWbRCnJ9vUSFDx/zqxTF1EWWIKX8lYaFgkV8wY0KrFqvgYPhITh1SBtJTCfnLGxFFLgPKyrTkQGGWSq2OsMNSUTRekOhFNv+/8AYmXiCjjlGEUxp2HNWmX9/wBsQbfJfNd9espCl/dNI7KcwKKr9W7PUmspOg0WCmkobRVnMlnPWklKhFqfBCOx8hpSr0TvKWRCUnrM6mkK7QRmGl+jXBU9b3ExJRoJ7LsBis91fKF+Cnj96Z+RUEh87C57j9SluTMuYOzVuEVRG75vby3+hCa1aEPixfS6as0ycXtyQlhHERx7jddJmkExQ6WqakHlSIE1BRVpaLpVrEG2GU2lX+fJqJjK8XZvwLtZxw4ZSzOxME2jXV9v8N9DFW3eX+PLORJQbNPKyHbdh+iiEJpOjg3nyXj2Eyl7FVYavUdIvhR74Y9X6Hl4XdZ7nciux4EFXF3obL1/OyMUSTMUjZOi7+Bx4Zu9ffwHHINnyo7xwLpirp4OWqthrpqcFm20ne8yVp1krawIPDpOt7LZbPoLHbKV1awWU1dDFh2zqHhUWUw4lk1psuCStbYxKG5EIbp2kl3I5S7C4fkfrmvfu3hFl0dvn6QpXpSEsfoaSrxWpi3Gwm8if+8ESmo38DZiryJw1BO37NprKvuUX8iivpFBIck0MUE3LVZY69rE6jvcaCHJFamJQtIHNnYUOkcyMTXdW3wRiJOX65uv/nkyr4hntUU074GMRDV1/J0L3GJrDvkhpWwlFVEsi1SvcYS0seYBLTPvku0I0Q/I4Ps2CpZwK7axSO2nC1V7U6Spgctb2P8AEUgb0CSNuXplkGKYjZJyJS7SSNTsU8pSb7JjCTlEPhZVg5hLGDhLKsZjbvLqn1qj3IgZu8yy3VrsUN0y2lstj4Elf8JVS3GpDyuLZQNw/wB9jd4GqiKW9lFXT8jP2hWaRJlUNirGEskebKNOglR7ENFX06crdVTIyy82ZUT7THDWg1Ip95hPl6eCZtWarfcQVumou5Ow6kFOwu6NWTXTd7BBStG0faJXqfA+l35dausP5G9lqKiZ98wOYLAYNT3FXzqICSUHSd05Uoc78nLY/WJGKUUovRwNo9IlYVVpR8/Irc1v7mKOyGi7kIVLKWPQeyIo/XU/DHz1Lm9wI+HqOKjCwolSegOo7q5HopLmi06dWhUaVrl+YXklvTUyTrbKaOxFPNl8exHwWiwvdqexSxJoS5pE509xYSXhQgfBP97tbT+W0ETrAiwsrlhDiHC89aEzBN3wsiTFv3IId8Dr7SLrZLW2QUrQiK8Dcc6CP0RI47Pt7XuLkiTo3CyxgmvuDnAXUxdLL3XZC7FNYMvVjVY/Q/8ARtLjQUzU9SVZ4G9a6CcTXXJCuqRkWGylPUo1rT6yRHbY7cm8yXqs2HK31G4/I1UvYbDruZa3qUdGT49ROZUVwyl0vA61vM8DQQ6K3YL9ndf/ADidR7X1QjKJz8/n+FsEtVSxEttiaSh2G6RUfaYIsapqNtdQxuFk8/blSWljKjGh5ID1B+7CVM0kJMm+qF23iUxPkIr31f2xMYVffSvFmVSGxEWEjkjtZyqLJruLjFd+p1CFlQiWVWOHUQkiUjayviwm082abVfwUAKtGvtSb1C4kMPYjusqWrDLJgq0IXZKjZHWk6oTVbhacFfY0HIb6t2zz9GYbOtvuolXlMuwUv1eR65KhjhxpwIg1Z+PkziwNVKv2bUQpw1xwu1EuIW7JRCUJUS0GoVRomVKs1s7oT2QfclvSG8knVVOjTW0pQ0qwlKlCmZZT/iSEby8/tb0FiibHCbmt6neXLO/RUPO+/giIMNvnUlOhh98aMT4+OBORNGWqifP4ajJpOpktQmRQV10GhXW+GRsBZqVpaSuyLgkoXcXhXJep92sPj48kWkzLu/4JlD9DaOSt+X7M1Wmu4oBRhzcpddhgbcK5nCXI01tDtHtqJylXV2VvqxT2aL3ME1HqdGQTr+gSJzRqes/wUMtSx2Xbgr2Eu/s7BVZbUzemRTqQ74sSu+x2TuLTQms1wYylqsRZ7yVWXuTJKs0MnSk+CtzbTDJUKtWYhZHL4/BG5zWwxMlT+CYfJY3JiIpJkUckqP/AApLfJe1G7Cs48ZGpMp0S5Jr2G4h+q1xNNSnKdmv/kx4hBLKbcUmLjEpyptPQQXbsJJUVhfUK2mxXxaB0erbfawivZc9sJDEzKvBNpJ2nncVdaJJ+Q6qMXPNIIm07q5E86gwmSpdlOSOq5U5jo081uiNV1k9yV97ue2L99SJ3fX7Xrj0P8rHrbwMasr/AEvmwi7awrrhqiF9+aglrU6Fk8CVjLuNn2q7Ky7oKdlkgEoYTusVq1LbgVJ6WsNsLtXccBy7Nqo6uor+1+yhMUI4KyuHRsx8Sx38vkVVEMxTA8jhDz1XTuSJzMv9FRocbFP47mSiTTorSjrvkgptxemfY5laiwkzUTaWu04coDcuL6Bbug6X04iZKhXlV/YpooEC3k9znkLslQeUYak4DHDTV/b/AAqbncl93+PLGJ0eahtyNhU20J8yydG1YFL8VepSLIZLdyKNUm3sxhbLS+jw+wo1OssLJ91SeGMRzrwcolJaaseYr+/eRin9W6ONqL6gfOxU835YrJNu6k4T6ZqdxwNvJOYHT8pgYRXyvUZ1itQ5smtLohJUZqHhE/akdqru/XY7Ak/2OCn1FYK5t0UEQcTtOGe4/wAb4YW7skW7H3K/sIdFKn0aQI7+wlCrWozE3qerMPvgac3XxUhFc6FIxWqEm1LXgh14qIU4K2lSLpu4knGt5pyNq5p/g224IbrmwrI4YnhK5Fiq9CUmtrqaDhKlXuVlS7WHUHVLo+j0zPYrNXYdXKyVW56Degcsq7OyFRpff49yToq+/wCW3/5MeB9MMkxFbXZiVUiBJYRsLmScDb14KwyafeqEJloNYpRlfm6aM6RPDKJkJEUCIw1UgqxZUGWT0RYI2k1FnySTHLVS2+bsZ0u7JxCr3lKeyEEGVPGF6tVrqLr5XVM3DNMyr0L53NVqsoYK9nn4h6ySD6lXZauyQR1ZmUnXy1VrGg27HeI3eCzJUtE0VdCjkpi3CLOJvVcFkeLVHNKVGivaiEJ7IiGcKuylK6cTpR4E587CeH2b8cCw6+VZPf6QSnaqdU9UOmZJqyiJ3Haadl8siBvNN0nSVVtgpw5h2xK7ZZVcs7nFfUTPWhVMilv0D3mU5k1js9eTCpAOlDE97DnQUx3oddKNW7CE4UiQIhUC0Tb7kKsyjRh3nCEUHJCacrZrRCbix0tlMdNO0DXRKPmTuk/INQeDbmfwKjC6RLAaJZSrCvkc6urlzyylXoqvpfLlPvYdLCwteq+c78kbqxUnOX29BQxrGb1iY9RqGFFHN/yRXY0JSG83RYOHI0kVRjUR2WXwhn13Eb1m7eLSJE5SUm9iBQlB2JVyhShP0mz1TnVIj7pv9dkjGu6rzn6ZFUrF6t3fJfnGSrhRXW16FESnF7joxMWV8l1Q1l0krV9/JJtw44GqLP5LNeC5Gp24KZ7/AHYuktp3CdJX1DrjHbUmO5Myoq8llJmtdxS2m/RpE03+2gxDKpa8DfrrpyWdth8F76i8jXnKYlfCZCwKE9NXuS6uKFZWPuCn5E3pOU9kHlTELR5bdP8A+Yiave+Xch5DIZQzUo/mSLivqKW+VA4tRgpetmhznV1cWkui3L6nbyKimC89EGpgf6foVy8zxD4syjqLfo7DnKpJXCxyRGOqoFKTQlKc1atwwm016MtD9FBU0XYmn78ECILQ9cO44hgFLZSqmB5KpXTQZsIvcZw1YdCbgRN9yJt1ZtKRzBwJSESx/wBmGQ/st1Sc/sIkaEybktHAjr1V8L5ZTPvmSvLu68E42lkgvYtvUVxJXFQcXnQWiHufl1JMrzNLU8aoiC1LuO5NvEN5EnRN1jV2SfaCTzcm1wgzBDrX6x5egpEa6XfucehQmoKbrWG1PWppB7L1fWhB0mi+SS1QqXTj2xwXtwKylEbh+C8DWo8uqYuBqRkVTl7LUVj1EmTKSWE2r/4JvpaZmrSXdxqOq+sL0/XkzOapu+Ow1ig2sDJkUE0Ki0JXbokOEInFGnGr+wRzdSr2Le7gX0RNe+r1EmcWJrSzG6kWK8jcLJUA6jh0t3jsOY6n4LLcCf6xuFZODcGdVH6NIrA2OQ1HoQVFSbli9e4oDcVdVlEMKtiHO402Kt/3A265IXizPdliaarEa45KTaqVBp5o9MlVgvdHxYeeaF0jR3qOtXl6FJnGw26n5KOj57DVa+CXZXdDbUmtysSLwh1STvqJJar2KQ7xhZXJn77i66oU+6lfVNzwunD/AOTJhFAYWAllHkCkC0WbiWRQMVIC9Rwwxeo3EIUwf4Cjod78jEp/U/urFVPJYjEJdEx/r8PsNY8fJavNmYOnh5Qr57OTe0nKe4utxj8ScsZ5GwqZjIpTnkmvNqvwV1YW7rsp2V3EJCUImaZzV9abypW/JwZss9i3aUOl9j10OUSdQmhsycIct4BckRc0kbVVhMG4WrqYdwWfkg5I9uagXtKThmgOuWS1Cp0TMfA2t4dEo9YJkdkbOqO5fwnoL7NmxpS7LLNaiLpxPdDHPsSc76t1V3f48soJCSFV7sLttB5cBZzOz1e5ONS7M29h4IegsZC4q0wmTSvn1BpLnN0bX5qveRoT0VWxl4rs8+RkoTsWzUS5XYcoVtu9b9yuQ7ids/aDhWullvJ7E0oS5PtU8klS6xctXceRVDVIoVGiSolwYNCL9VG4GFJCXQSHTThwPc7kYTvf6SJwK4vWH+CxJJKLJQlCtTCF9ViItKjwZ2u2NtP7U1ESomaknNIWvORQrnH7NEE020JVa0yzbUc+bFXs7SyFq0+3KHSmKe5KTUo7lc+BDRE6V/ZFZw+yTbR3HKfA35vGhDPZWIK3W5TCplTZUHbcg1zqLbFCq10VyVqiExjBiCHcaoScLGbWEzWR6TTPk8otnI7J/wDixC02tHo8MiZDYfZimaidndCShcCRMuSF59hrWu2qyTWSr7MTcrfBak7adlfEkSj1SUFL+ScISxaFT1xQl1hqxXVPIl/5m159ybUX3hYv6uTjqslVZmIypNxYf5YlUd5t2RhM6IlmjDYqxZF/Zoc5IlngilKD/DspPosvpkg28AWZ7nK2b0EGYFmUet+I0EofKpZaMQNiTegiet2inZfLI9G5OVOlKtshy4zcoUdKU4KpUolzMtZ1ivl1E2kTUmo0+beC+RIQzs+FHutx4TRQaUhhOiZZjgLT3LS1NiC2WEJa+RIVelapwMo5/VkoWs0IWGyy8l+cBS3N6errTTtAwU1pMSTp3jURXSUKW7jUgUk1Ver9laqiOgqElkRodPK3gYhDQlZxvDiu6nUSqDLVm5JT29BQoY4Xs/WXkRz6q0iX13EtNdihH8C2sim+Sjqxq+ETOGsL9BN36lENbL9y/s2IEqCX+kpXxYciTlB2uVUjUR07tkqRpPRPbHcyzpWd2XfIuwkzVMmApVO6Sbp20Ic4aIX8PccX1JilUNzmUVWdFoJGnlLI0RWfcm5LdDlumcPUhwptOBTzOfcdJGiU25vszh2VyVIurFCr8lhWMTiMMVXH1Df7D1W0Wuwm8L153JlbaDbzdyNCvSxWiOYMDcny0G5ppgbcP3Mh1vTsSkeWNIi02g1LgN0jR03kibk2Psl+xR6l/wDIyQqBNINdQ3c8NQ/YJSYIl6nEdXwTKWZt7ruKOC62Mfoq3HBrqGzT8FX5/hQpNuJKXLr+RNli9Cjr6oltDTKXkeUNGSrzh3FGk1KTdW7qwkdtb0hPwjzJLweogQZrNUO2BHJpMzyURsdN0uxPOmjKUbaVj1NdWxIE3eiT2BVevLvG2HcSQFK5bJdUqy2ohHbaLJF6U28htDWCLRsRr5PLValdKfdO/JxK2DTYvAYXsl+0N1mn2amqCyu/BSCOv7DLD9x7hYQllUJ2zz4DeFn8vLEbbldau4JzPb2kWCYVHWaCOW3fUf1kZfGovWDDtvMJhSr2KPDLhWW22S8siyT529v15Fcbit+nYk5VJZWNBdUapN2irbpHLHqRs7F+psvS3xNFb3cFDdaa7vctwUz3I9yB/EvYXZAuSjfuPHYuZf2rvgXp3QJfb/oTlbgje8EZkbUIHdZ0CEt1uhG6VT/cFCl8xHkqbJwvHBMY5MN5dxxNFtLIUVfGgk1RLWFcyqFEJf73HSqpoOabkwE95zcovnSR8zLphIu5qI03LjO43Tb7cSunavscL5IlU+9xOVrhEaFEp1faHvoeWRs79sCwxsYtD0Zd7oSj8m5UnlG8j7tdTKVVmIHS8U2Gmo4iy85L+BJ/aiSKHyC9khf/ACYxhRKIa2FETda5Im4c0dVqYPsCGvsCEUtsN8WKB6m2Xm5VWHX8Sgi/1/djmKLfInfNGfpUkm9RajiHE+WNJgcp+iDUrXVc3bglwfqXGOypCKIWg6r8Xi9N1EoTjgeexaP/ANxg2fTMTiiSNMn2HKaRwekIbukvgUNp8C307lPZE5VCTnOSeYz0oHLW2PR2vLG66kksDJzHau2arCZaLxFP8FyT7gQk2nzq6f1eRxcoYFhKys0s2lHv2GHuidG6uwoT+IaSoAK5q9tQiSGNDntUX1Ha940Eun3NBudyGGonRl0vJQJcIsS58CW3qkVO8u/cuV7ux2yP9CRsp1GqRQb7XO5KrUnUctXceRYqyKJVKbKyExXx0hVW4HFZeWzoRDwu04Z5KUXvP6SFyg8Dl3b0LYqK2wj4LAbeH24+1IT+9Ifwi9LkIWPNFfadrkwKQ8/gSTuteT11eScqMb5as5fiBbhOVr351Ig7rYUqXaoikWE4zyc3n1LZJcKxNU1i2SGbRTqHfNCzcvgIhKzqyE+WKuG3yN09yuX8dz3CdauFqZInZr+BPZSxLibYZCk2LXzJCYeMIWlEu5C0jImpe2BNuMJYE6t/ooPLdjGEiuxOS5cPDCD2JVNlPq1ZF/8ARBCiZb3Q1QaZbTJHoualTgghOyroyX92F0rY2eGPNQV5RP8ALUbmRrG67TB/V5Im9Cu3wjTkXl3Y79GrzGFux7S6H0/YKVRik/ccDEh+COexEcftc8PYR7La2a73TbgaNJtNRtmOrUi7USJhmaPZfkhlZZm+zVtkL5yKUpHR3XBSxKlijmMTrmXu6ilsKWkpXmz7CXqVj2h+tukRdUbexsgSBboTMg44D1WGRuqNG1hcNepGKC1okjxUtXqNt0QvIhYJ+Kbc4lu1o6wO+ej6u9CdfJiE0QshPkWqsyYhNdMUE12QkJkkamSSH1ltXwiGJ4L9IW9uSAq+y8/RS2wpY2RSJRcoVXjdk9tOPlj3Ixe/rssg2u/pvbu8DiolL8ZuMYIDNh84SMy/S/knXpJASVESmqpocx0SueH9oK6Vi5QekXE8E+CvWnXyI1iijzL12PwLpo2sZ3yFOyMyOqn4iMwo4a/BDWzV0SVmNRwV4ZnXQ0JElSruSUXeMmTHh5Khzr7VGFRnop2wUxgaxR9iUyZZiNfA6o2Moo67DeLCd6YtUrculWvoTRy/BHnYNrCnFfwJQHMQhZINL9mSbtKwuRQSEdZuDq+BQRKqWvC4epCv/q+gl8a9AvKTpNaMg6LsXQuGuDRm5SjKyNmmptYbsxvWOyxBLQcsMeCIaj9eRPuMYt63Lmrzb8PcSCR4i6poU3bl6jS7MLQj3TqIMvjopiYmzdYePw9imhckX5BthrUS93faJa7b+MOWOHNUr5K6UVZeEVWsy34Uom3kUq1vAg1D12F1zUrVfqP2bjNk0SKlWcHFS95JHUCMr1RdoGt2BLogQ0hRzqlflleaXSUTtfux6+9dzuiyFyYsLo1miVyhZg4xtUDjLuBOleBqVZb9GtyXcVSUzgoT0YaDbolljYjBxR/kZO5Pq019tLd12RQiFl3l6vLYir5Zkd+o2L6674XZXU2jxOcdiKFf8ZluBLlF1Ozb3FRJ2oN9BZ1A4+n2C2yVQjB7GT3H6kfouIfhryLXMHnjsykXpljaIEfkJEiUXemsycnKq2XDtkc3wrISeSJIrNiyG7IrdbS4VnlhdUQU1CgnTYTnorQSWumSj29J8BtKytNUNtQWSaqR8D5BKxjO5NXmXcu71BUTMaFYpjUV62G60VnQlhS7P8CKtiRAm2T4RSA21W5eBw1nVr9FhCGmQhJbJCUJf/ZothrR6PDFLEk/xsZKKXuK7MW2mSH5xsdyGpToarg0/wBD7rfqCv8AqbrUgm8ntJG6tFFOtKL4SoJxKV9RCKuUKGXcQanRxS4hXEAOIMrwr23KlKfpySVGXLRqPPqqSg0yfYa4A+yEN5hMqTK1jnuC2eouwScknQtC7JHPW2QuBqLJQqRY5nBHqUqDWIEkaOrX402FedvHkmEE0vcl5UkPcXdUMTZK7K1oFuOIbCBw0+UKM1U2ksb0mVfUixIaoaiFFqySS/ZoLlASEhJdJEb0nHAk2r2vUyJybGdFcYIrsDbtyNv79CGZbu5CuS46KiHqm53iwsP1M08lft5QqRJopCXFiI2S1gmz1EAkqW1FBMqwOw4ZKId//SRErY7V7v8ABjNd8fiEvUvLPtwRXmByfgLoiSaEyXJLEFUjmhFMr80LGJFLVbiTAqejTsZZ9yfOrtHrYUmWwsEVUjlIwMhCGZoI4YaOvuSjraXX6GhMsPD4EG+JRD4LwnnBPBJbAhEyfDuh4rhDVNp+yUdWuMkZpQ6FGqU0IqevsR5SJj73Gz4bopHvrqNs3R0HckeQ27LIvVjXeA7csWlE5PcBSWEoS/4JkJqKguoVsJdBPVYZVWBQ09KCdGa/0T0VOxsq1kUxeouvehLq4NVklrJpJPb9oe8r16aFeoqNoaYdoIDk+9amypSd3ghoMWNa5ZTVt1EHBtCXbK5rSn2X5Eb71NT79hTbFh+HZUi7OWI+uSB+gVIOlebeCcVEZulPgpbwLaVSLwRlzQplC1+kgS1SijaE9tfJkgrfE2FLplsKqh8jXn2udGCeCzoJVQQHCUoSrp0IoQ9Som2UdpLT8umCkVYdHu6ggedKxz+6k2onIpCJ6EYKT7qjJNt634Qrkx2i1SpC39StVc9z5O/FthR+CpapSaYGro6Dt9IuwWyy/RZI5jvUel8iMZV1Iyy4zQh1vfdza7BBPwRBwZ5LipVDcCd57lZOOBLjtlNF7u7FpS4lWCnCdf2RINRFBR3Il+CWaTH+ccv8lPNhRQU0sWXJKEpjrRCaYVxJt8uxdLOdHqiRfxHZiZhhLlJuI1gpcWLTqw++RAUON20MU39uQr6MxvsUppRLUcN1t9oTqrqJXi5Q2h+zeCsQrq9W/rIVbXRvtVi7lUQEI/4WJjlEJsXYqreXQ7RPBKZSlRPJI5wUfAlSFeLkVLlwIZMSQxlXe6Lr7y/mhYVSsa/u3gTsRxv7DaRwxTQSxLr81uxcg1UlHHGOWRIebHmb+wrP3LLb/Bf4O2kWZUbTZrUmuqytdSeuqe7X4eBKwSrHsKV5nQ0DgTyBu3VuEP6JL/k88IlOKoSjnHuNe2OCj9UJYGuQngzIjJLafpUqJjpTLLRmN5T2PktIdJ9BFnXUhSrKuFwLIMLe7407dPRyaGhNRySy5DZMt7qMbqBppN8lxPry07vCEKkoaqa8t5Yv8k61KF4+2HVJYpq9ksk5TUSUvhcDaiXpX5fBAxKwquFvcXM1VW9dCqpVYjz+9ixCVFC34I8vpD0kpG/Rk30ETS0jWCvfCfh8HJU+f0SiSiOojo4VxpE6p5EU7wfSF6C2XNr7w/A3tXz/AGwuFSEVqfI4VbL3GlijguqygvdMtOrZjewwawgpqWuOCYd93oJzRwmJpV7jYS9EfS2S/wBQNHWKFkWi5sf39FbqsO24yw9NfBjTCTPgHjO8vteyLTIVCXQEEv8AkQQ8l7KMdGjmC1yKIrkZOJFaw50wTQ2o1/ByqP5EbNfVkODfNIWsEjdyUUXU+X1qT+PRatwhroN59/gjFe4vj3GXzpbd5+fA8oDKKFxMCluinsQkqdQcSvJU01VFxIohmh1pDjEpTUggakKY11dt6Stxtyj1jsfEUWhMUzDMonMerr2fLJVNtXNV31G9tVeh0N6Ny3oJauoolRtKt3xLCXd/yqeRawSZUvwSs1ehDyyA6oZgZfQ1TN5h6BuEIcIg+TJ5o98PyPIoZG82J9iphYh+4LBwuyExUewkiSU9EhixFYUW1hYIsXsYg4jcaHAXb0JBfjvCyJQl5/8ASRI1Nse4IytgtbCCHK239Hvu5cxqXUqKjIkqVKyNxcmV01ge4hEOqahrYgrk4JesdhGVpEkCiZE0u4xJSBx3xohu37ipUSotjfe6b0e4Vw2YZ9sIU5oIo0PWoRTub48sW6XhLCfkUymKOHP0oQ1hWInKwqRWIQxPyV3BcIuc4PuKa82HU5VN9R2hKtb1J2r1aNFkTmPA6H22KKba7mfwjCCUhL/mZOhj1XRoEfVXkVyPNYIPWpGvsQuH95FxU98t7FmcWb2eGcLD63E7RU1f2y29iybpg/1wqldbcRUs9lX8j005U6dZUaaqSFGtXNSKpqcOijUaCdMerT6hpp1WSoRYFKNpSqXD9yPVC0Qkld1dl6CSPweWvJ0FM9JNYK8Kz4go7WozT2F4hvlcTo8onKiorlpzBRCK3KFNCFngjQWVyOWoVpRVTtPeIfYhq2Ol9Be2G2vxkTrahXPQTjMmy1LO3twVS1ymKnoDLwUjWrIr/sVQPmqRaMibpqN10EJ3oxZQNrvfQhVR0H7ZLPULE4w3ZFX3jfLuzDJaILogLF7KShLP2FS4nWMN0F6mIJruVDv7E1qTcxUmo7+heuOlyGRRmwimvE7PJFNDcqoklVRB0KqGHtkrNmg6o9CNc4I7JPQj9oY2zMxeJoWtqMiq79ugth8nkE082ytcfB3Q9MlAhESLoYhEYn96FzjNZEETRs13eCRu69yGKUNYPMX5Ym5CQQj/AKGhIf5BTkj3Zsn8Cl7rkXCyrE/eh6Hj9iUbq1X6Gk6ko4eDTo13G31+S9vFmZ+o7sGMtGyn2ddb0epXQUsXFmMS4TrEGd2zDeW3FqW01RkeG1FQhM5q7pyyBx1MiXI+CnrrvnvnhFVMFBw53dk9R50ToF4fv4EUYP73JQqhobeo0TPrcNm1gk1KhNsiXqW3Alb5aFtHVMXg56b1ISdHpI1py3FnqJoDA72IvLJyyFWInC72EmplpLQwbG4VWa4EaI1NsP4WL+kQNNTwUI4V9P2YZiy/Il84EisWW6H/AOYcZZJqfm++CdxTi1PnL4IrQVcM9uPcYW7v8EEovg/ZTrcSTrQjpLnC6JWg3sTTT5NBkcdvyTXjUobSKdKIikXGEJDL2cHBJ2MupX6HTfmXH5DCUOgsWpC19Rw6TO1l3KlRRFkKm7wkR5JymKWD4FNUauhJTf6KQHX8ideB4sWVw9Vo1ujBi9hljkpisSdH2BSFSiODG5lIal1JqNUOUyMy1+LhFisShIQWEoj/AK5EK4tH3Gw2a72wxaaq7Q2lqrH3JCI0JovRYNXl1XoTCS9Hn4HHkwJUTVZMRkn2vS42vMsrTsNOC1ekDA2grtYl12VPvItqbfDeiz2UKVxqJVGXK9HkK6aq2XbTombJNEokSjGl3y7tj9JS9CZGMtKXI0PZTHBiuqdPdYezVR431IrHJgaQ9ihtOWjwzEyKVuTp4lCZZXB81IQposJ5Hl0tl2JlJEw6vHka/wB3H4Zv0WE6Zn3Jp+n+hiKIeDEMFAXDSzXl0HMRZaEUF1oFWjo32kfBQr/pIYp6wt9TPYTGJOMY2HwRECtwKnZEAanBQY12/wACqb9Kom6E8jRF8amE1f6EpVeCDMtHgY1qthi5JoRcKRVZNxbqlVltU6uEteq9mnYwH3e/bVdBLGqEmyRoU3f4IK1XqxIoEzpmgz82o9kjFUWEtbCdhOomJg6TbaM/juP0KS9URD6T0FWU2NWCm4tsKQl/2sTnKIaH6RfTL/ZJM3RR9iVcuBmsVmNhXTUkqTjUofoGr+v7EcqrQrZF3ui4361F/cXm3qqeDI2hkjf2q7sf5SxaXe3coTjZTnD5OhIJfNv74VBWR6FPQuGHkaT2uaElorYPaKaAvK9VKdjEO1/isQ9V0fSZMYlQvyX0ycHKPRV5gRmp8knq0S37E+4RHjBKCViiZViWr6lyTU/wx6EJKO3dkeBSkvK2oFdFUp94ag57v+1b2EcOt40sjxNlCdicDyE24RHJdNFS+R16ZsYp3I1LG8rBzwnA8jqobG9wEyLJQeZhPAisyDUKmrENR6FkNhrShqOi69VJKNDpPDC3lBClOVZRsuPF/wA9CoFMFIYyvKGbytmITqpgU8iyajqxcTqIwfR+SYxdCepgOT3VhSOJNyP++ZEYKLfAlTRdqpfsIzDrsRpSkV5I7bbEKjrIlJ+7ko7JidC3Yxm9rGjbxGk8oenoNSuv1eSmFpc32E5C4G+e+exIQO7Ua5dl9SAewWid1+fAQkJR9zqZ+mCCRlqibSL4JshVnBqEwtmaaZMYGzgXyXBjsS0KeSazxfyhLjeeb6qRJtL/AFih8vJjYRx0k11Pl0IpGir0ZgY16DtuIxTZa3addEEIClT3uSI6iUtdm/XpOElEx5XuNMkaYE1WtRVZX89LIdh9/SGlEuu4uAa3uhNSWj3M7244qjd2Gw1lVWBFpcnVBNmS0DUdUmI6tkzyyYhKE30KAyMoIZZpiU5t+vy8CkSbFwLoKujqiOx7GQuxGS8SOR0ChqVb+gkQhoky6OO4qGsI7poTKGJl7a/cGzfgJu0cpkORSyitV29mz7EQ2KGzBl5AKhnmGK70SSw6BdA3RwRTjUaLJ2FY1nyYRN3ZkVIlLpMzfFulUiDWRBKRR5DULOPdIe61GEOVMjsu8Pi6jtUQscpa+ZEO/r+Cz2eJqISh3vqIdOhKqYG8pX4KzKXGkkCTPhcgceyNMm+40+wiY77d7eo8oUzAjRnU2DYPRmpImwhp3UPFDU89GVOlRk1p0qvl9I1wMdqmm76x34j8MQVd7jGbOWuymngpt5GXB5Nmgkt4ejFhw7Mnp5kS7ImxOoNR1shNXB71gnUFV/EI3ArrOGt0K9IuLA+dRD1PtDidhMT1GkxpJSIclj6dP6BowpqtMDPigastnxAhLWFWMCw7bWOwX1Vfcsq28CWtRdTlqNDLu3Je37HS80dTWQ8mBEywnXW9HaSQsHPGVZxoqsK+pXBqNE1G7Rl83EZtJewXkLu0bpJIS6XAXVy+6Diu8ny7t7Cuz5HPz0jX+iyiNlT3Mn2qLucd8TTmKx4diIhJCeSiipq8soP2HtR8N29SXJNOt3+IujsQRSgfdEq3s/YXeiXYqPIojyFclXHtm5X8D1h3lXPAwTWa0PsQwNS4FMqGLEkvXgdOLwTLJZ6CzWwXuqeNxSciZHBuUHmvZBf2JX0DmDM0MhQyeg6ojovvbUoumhOYkeL9pMhag3keBkyCrtpsxZZixK6gsykIMJkj6S5IIYuXH+gToaJVI1nDkiRbY3qsdyG9RKHEUOak5OiuSrPkmsw76apStxFLKi6tdEqE0zghr5mGQzQBbSLSVmwpi5B1lK6taCF6JafJcmW4QobXLHJLFYU+BIiUXdrEsnNVjZY5LlG+V3eSWVI32CaKbvQa515D6IeVoNWbEoEkS2S7QIqofkq12qTUT1KKXbVKH/giKCS5TDQ3+Ej9Y9x+q15HUjzbInb9jWvoIkO6cqi9iFbBHkj9C0JQlmXOTIibUyQkIagmirlbZihDaCczQ9xQiYuOtz6y4blWkyoeDqtBfSUngPqFLBpdCW8jXn1JmldlfXXRblLlS5JN7nEaEPT7Yajowe3N8mLMaGz9lUXQkXDiIKOjNqeioOQo1E+k9GywNU8YbCaaTVnb/vYvOVwguC4cj9xLFZfKqJ76De1hXrP24nabaCunbKshqxFwGULfIXRlN39/kLZLLfWFOYGyxAJolNydnS5JpqodEibldFQn/BrDxWcv8D3Pk6QvbuI6uapyl+boOTHap6p6r8IJJrE0vGXsB6fkdNfIiTbYK6u76KSqEMeYd6Ic+gd2km/KWHaxCVu7KRrGBlNoQNDh9nQanRfAJkwNJ7dLL7FOm5da/Z/JMtn+Wkt6YQx7iG542ZEJqSUS24Va5RZLCadqtWNyitLlX1KqZdxvvBJk5Z6D1K31wTMmW1+RDb5vwKDqaCmyRGgsSnkUfvUhYXelZWDKWkKj/A9kusPUjbflDUdGdnYd00W9Lx1+HdEPpVxOnSOlxpDFRibZJ1H0HDEOTfTx/QTInEX91ZRISSr8+xkyk2Rmtd9SU4xr/hw/rHLbFbL4Gwap4PY9hjb2QFaFOYZQ1KvfGj6XkVTM1qzYro5Ove77Db4z05dveSCC9Uk7vfwEJTNx05NLdpd57X4kezVQaVfW5bcDLG5uz6qvRNJeGpDv+4kv+c/j3dI1VdByth1qL2lNQxx9V3Xx0HYY07lo9q1w3RbVVkSRYkFbY56aD0uN0gUjqflMOH3GrSkMhHS4tNVoIVbl/hjXkAPtNF6FapqhbdNsPBWLzI7HfpGmLbTj5Jm5eUbiWx+3UdRoyyJcuYWgjTrOCZNvjoVm9HlcEvvhKjlfgm06zLZl5G+BpCsRJQJrt0YkQoGGTD/RM1x0XS7boeyRw1ZiE9h/QTIfCQ6fy8GKeJVaPK7MTpW+CsKmiBLxX7Yy15WBU4QRisRl/Bsxe0D2wZZI7Sl7lVtcOV3oshMJdmG8EWBslzpKe7Sbd9x1ipOwadk0x9ElptnOmjLIbU1oouYtwyoUJGF6UO1BDETFd0YZJGE5Gf5G0Y4W7nrqxjTqK0oqTxNC9CExfoUwMLaKNrWRp2BawVqIa9OiopUFwcJv58DcsqMSkhDqoqW9yLaOGyLMUoj2K2HscBX5OcFXQlyxd6uImoM/CMmwXcmqF46pJY8IlbUwQqlZCSussEHDws+RVfI+kluOqj4D23/gT+OkjXHdZe5Q9h6dIoQ4F1mOjA+i6Kt+lnSILZWwoVE7f96F3J10ksWN8NAhFK1sXe46cPBhSHcm1Ldc5Y7ZFprA1Q14GXpuU9h3z+LDIInsi2WDdprsY/6e+VhOVRqVSPRy1JSJkS5YmLFE4DpKY8sfRMrpGtap0/TFXqFxl3BQqj6TqpE63gwSNn8nd4F1uehQQgsBiLDVRCfF5qehiQ5YJDeQ1TomMEVp0ToJcptWHA7vgVvabTKKeESEQjkSCTgkboJx0u6dJjJcQsPwKvTK7IgkPR3J0SXrvw9y3Iv+oQou1HCrcWpcDYWDdOq3I2ilD7Au/udmTc9YhFFqOVpS7KSBtWJ8kyttBlmO/wCif9f4OHn+aET0TyTs7wf9BOijV6C9BnQcuU1yXRnGywKXtuTEt7igsNOo3Mk8G+zvr5MFqhUXVrlDWJ7FH8MgVxZvRY5RCsh55HIqFCiLtkrHofwhnfJWszTiRDR0v0i5TnUx4dk/YctCyqJcobpGndLypFYfr0aEPcla37TNPcjBEdJ06NVLFxBnXoRNRY1d+bsRPh1lxAsP5GoR41H8E0tBpSwO0IuN0L7j0GPHsQ8XGwtRdhmkqvMMWU4ylWB090HO49r1Ld/W7HMJDE9uwBzgPlvpgbSWqGm9SrfZCY36Wb9DFxVdcj5k2yupQY4Vhho6exCTmnBwj7g2lx/70jrPRMQ9Shve/wC9ieZXCDQ2qfLX2E6TyZ6P9Gy8jboqa9hRukC+Kd7G7xVLMlB4a5SwWd7ojTfb8jXyZsCba9PNn2GO0Sq0eUeIdGoyfAKye7/AqtY2/wCjjelnnJDcKioJfKDai3EqDkkNMQxFWsrL7koN+jWxVSQLdR9i16V2m67OhEkLrc8MK/Qj5GJDQiUOJHiIio0rCYyFR4E90QaWopUFpkVP8EktRnEPio7XJf5H4G/8NHoK0jpPNdUO8YW7oSWsWqDxb7Bci3IpNSTSp9zwWMVOWrzy7t8ikxfcqoU6P560lpL3PpO5ZkbJxqt+gmnjwKFkSJ6bkMND0k9HYqiXBWyfgiMCF0p1XRdFYsLK4Euw/wDvmRPJvtb5IabWPjoJ/f3YtamSawlBZZMX4XHIndROVCmpVT5K77gZW9saIMfRaHRM+jWnD7+5J9lUb7Fpv9Xe77C28l7wxcbczqoncdVEnJgTVw0lUiOmjAFOyqtAgtBJYSNDC2quGieRUcPt+QvUU0P0pTT7jJf3ku3uIqRBIZR6OuH0JE1Y+jgao3ddNhuwpx2fsStZ2ZOIyLBK4stGgzcO5Pgk1yygxIqqyiKlnqUieat/Sh2UT1bP1jdnoJlHQkLSjHN9x4plW0ktqdXHfUbVs7xLj/CPa1yJ0xwebDRvHjozu7LUNMoDsJbuOORhJHR1TVU1qfWDEGQVOkGNeCBD6RXYaEQ+ly4qhLpuZLlOi/gQYVnP9BIiCEefzxdil0sMrbsJ73WSU3L7waNZuKjnMF6fUxK8KldnwshWY3Nlgy4BgN2gk1C7oU5FFE0qLRaDLY5Ir2RdJmHcU1zj7rYQ1lgSchHUKDdL4lXWpF5nqrnfQmbWgHF/tjz7CFckoxJcgWrbtkp7OqbiV6VEi6JJFEj6MNUgQkQ0UJ8B6jp5FFjWMtCuvSR8/WI9Q8MExx7y+4LkKE1KPBzu41rQXs5753wqcjcXXTLYWhiVdnS34Jn8tGJIUPE8Niab+y2FRRVVX+StUdUvwCOUvSsTdZfsRC31GNCUvQZT4yF5rY54FSVkrNbNCqaHcJ3JJoRNxQqIOC2Oj6R1TJrHRdJPfrIhqhq4vsCb/wDekofJam0Dl6gPZ+A1n1tBMYiLOxO07tOSUxpx4JFDoGoSJjWVDQ19W/UawrBBblhk1GErVpYqfjYooNV5kisirZNRSc0xty7fuymO+u40JKm1+RslJDpZ+SzBTnTksFvanHZ0Lv2ExAw31czSJV2VeSnpuuXSKeh1VOmOkkit03T0iCMmopgS057oRuyTKR/gSmlawtInURFLUJjRfNh7uBleAvBE+DcbLHCtBPhcp2yNa9Yfc79yHUlLsthyfORxjuToipa1NxSmbrf6XfaacDuMS926LvqPzaWmPJRd/BMfFhPY79xth1X7FS0O72InKsSBysK+y2ERmmjBOJ0E0IVSkFAnokfWCpIie3Sei6T1ZDNYsEJkp2/75kSCdB1wGrO/Z3HWfZiroL7BZv0Wg2qMO79jTMO6z8lCSZNd/kuhXLW1muh4MKU0NEn5ZKbvg/JP2NonwkiDdHR7mBFSxe5uxJTRXZgmFrWu3s6krWugr9DVWgmzuldHYQYS6QyuCaVE56TI0VXBp0aXcWejF8BVUyMY66xDJClxAvrNDkRI95etPh4QiilnguEre+46EVZzNiFdD3+67llVOiwKRJkrLR5oWFS9g0oFEznLm2hFWZwqql6vXglsi6Qvg7VIUkbSc6ijd8adixVBGSUkRLCNCLA2YZooLmH1hPPRaOkdRu6kokfSSOqpfouqRPRQGvKrXEBkp2f/AHNCVpXCCFKKNrh7nBSkw4toK1pepQ9xVRYURNh2Oz/FhGePunKLV6FLdcyXhnJvpPQjUVWvxK7MtW/ZRcCVIjuvYTg9FSfCg9XuzLyo1yXdDnJWfs+tZgU06YFMijsMqMYq36SNyMsy/THSz2IMa60GGbIS3La0JhRV3xZCUcCVISU+wRRVKssXLVmmqz7o3HEehSHJ6U09TEzTPEEUWFbBaFsJFKUTXbZfsN1AajbryvC8FbKs0G4lLBMQr7EF1NRARDgLqdjef31cF3GthpNRP+E0JEyOsdEfwnokcilDSlchQE41v+6dEwrPzo7Dkqi4ShCn2VK0rUvwvklpxQiKPS+31CNQwadGNpa1pn6F6FREqzL0iVEU+vQVHOocTNlFxpBNYwOWbRroZFySQuvtwJgaE6bhtCwqqhWMj/jTuOB9EPqewx3dRUDucDU7Wj8FCc1mkmFl8drQO1Lrhr9kq2dkUJRaCrboo1bI8JSh80epuQfo1zv4OPPdxJCNq412JlfkxAqCE6H/ACDTGPQh19mRyKBGK5PYhEkVFJLmwxUr0x1QuSIsMW3SP47idR0K2GfcTTUqqef+xk6IEVO5buC9qCT+4JeF3sJuKVcW4E8MeyciSTmIzoS3RiNIuS0ia3qLKVpV9yEJprQamvuVSxqSEhnpc9nUx89DETUbyTX56ZGxsoUKGCBroumReonRiCYwtRHciCE3Zqrst+KiSd6+AVG62hPYtGnDHo2va5EuJHWJRmunq+CCKha253KaNJvZRojuP4FaAkohGOkDX8Qi4NQrEJN1DH8oQbY6JfUNLFpcfBAlKEus9FCesiELpIgiejiOUSBnVaf9kyFxus+skW4T2tBQ6x4+SWSpeGiU6Oi8l8K3TIlJLSyG1SlMInS7wOsKzsNU1uJetcfioowpSoJdIZSVvv4G4bCWKU/I91D6InpIxE9+jNByZ6yO1BX6Po5JkdR9GMwOdYaWg7ylI1Ij0YehZFUb0tmIq/RuYHXWs347CkqDor75Hi8C3d5FUUlYX2EIg8NjV8XPx7PWBsveUX5Ob64JXdlD/BbF6vsP+ODfoQYIV7qEYaKEO7dmxVEiZKYmX6JronUmpJk5G1JE0+CBaC1JJ6pySSxMli09iaEnYIqT/wCuZC9KUcJWfkbJ7k6pbkLXuOXCo8M4ZTS2P2d5pYTcRFj4ehGBBTKczYWTsXHh0eBQiZLca5JJknhHYPmWLiRtEjLEdGLUf8F0JXpjoyOr0LDPRbAklNKob85tq743YzSXbF5jypsPbVXq+LCXvlf2wJqUtXl8sTKgtCHrKnuwu5SG2/e/AS226tlV9Cg1iWJW5PABMrw5KF6+9BuvWzT/AAOZXlviS1L3TXwPYYYjT7jPq1nsVz8Bj1Li6k+k+Okkm5JJNBBOR+/WdRdJJE+iRMTCadRTKvI2P1T/ANLUiEKcP8l4rh1lft7DSZpGMktVXYTtuku9CxyozVZpoN0TwxvS5NXsyatOrZauupS6KGV/f6ETntkZDLlldNVTLG1sj6aGJfcROOu5t/BDK/g9RXGPoyOjHeB26QLBq1UoV0VdakMk/U12yll1bPyEUdo9mBYqGIF0Rxii7v4LcWqu5EREJKwnAzIohBppUYW8DFVcasFRcywrWz6FFrlfI5gr/BCECK/ghdhEsT16KwmfBnqxDfg1dEiPBNq9CGm3/VOillDu/QfgOc3n9LFkvUw9rEKk0bqmVvdDrL0FgaBSvfR6jcNWUUbOkChyZqNGSaawQKro7Y8FYWrMTcfUT6dyCongRHROoz7BkYhoyWM9LMfSR69Cv0mSbbrVbihvJo27lfsIJKVCSUJcIX2FES6MJije2SFGexZZhjh/4Lq61fwgz5LUTzempIqIgi4wyYRmV0a6UA13FQk6MdEOR8sdJG4VL26JtE9UiZKYxkMehPSaCYySboggQhBAS19BC0iKCX/WxSOVKd0QSrciz8BK5VRfhl1VzBz5FrRpb6xxqSoq/NaFZhoTK2yS/b0LaONHgnXyJY2KrlDuUnNadPcqiWo/wKFQxYgVMCoe49ui6oaGukGOjHHRB9MkfB3Ocub6CqwtL+Kabj9SYa0IJGlHVZDHOHkluyXNFWJqhVKtQ1uMJc+RMmSpqSmOQ2seAKBOkkki6VEJ9EPcnoli6EiZJJIhRdyY6pkiL3P4f9syIRe46dzIQp0/dFZaX+CTSe42p2yihriSWqzK9R0+QnRfOhLbynn6ydKvVibzwgT/AA6Enh+hI9WB3iBdTsxtrC6TQT89I06WfWRE0J8dIJJcDGl1MYlAvhIX8TN1ghoqlzDEaTOQwm7/AKHcN/kp6HNTjU8qILOX9qqSiSnLYWKV3dD7CnPg+clM+z56hoExem5NRvAxF4HFkECQxMqITKST1bwSNifjoqEyJ9bkSPobmzu/T/vmRTqH28s/JU3zu3Ilfw8D3cESvixDdLMqv4J747EJWR1bjGTGu5M5rehiimXIos3SMkzLOMl0vJFJ5j1E+UV+kEGCadGvTo34NzPRkiLEDGNDjpq2JQtxP5QJY34Gy6bbLyFgYHH2HLi5KH6QMio13VV8DWCcI0Sqvuq9VutTgkp+xBrA1qNFh9EZt19ivRNEk7Cci6Y6KelbEklS/tc9FllGtcL/AL0lFsKidNH2Jp12Dw7PYctNUO9Srhfgq5fpYbq/PnQ4s6Dy1RKw3P5Cb5WphLrqYgeUVyx6DtipWU5YwLA+t2uNMRXfb+bt0hGejK/xaQ3A2UdTfxPcX/zgaGrHi5IwBhoZSzXBo74ZjjgGQUT7RS3PQShwN9F0jpNOiTPUno3SScdKoZNOSZSFD46Tn2j3/oZESqdKs/qV1X3j4NKUKRlEZp2Krksl3dtSXm9hp9ydp3JetdC6bt3RL9iVfgmo8mdXIu88lS8LpZ1LEzQQ5MIYmYuuBcj6MkN0GxG1a3b/AO6COhozFGKIbB7VoJsstVb8kmpVGwykfA6MuMfTb+OSSRyEyWSIJifRit7kXFohamuF1bK4kkklRKiX9C0LRpqU6NEZqk+z+kXArFcKFXGqqXXnJT9DcXvqNqa1Uk1mOBWNVuKijroK8qxZ7ng+5FIyoMIv01f4HLDdRvqv0Yl/wShdG6jfQboNiEcyo92L/igZewYYvQhtSjIaJ3E92Qm1n5GnGw7kkijpJQkbJH0Jk9CE5E+jG/Tf0FnXpXy+Cr/0ciEqllN9O5byuwX8jVXNp9SqnTTUuowPm1hpqV6I78FClXQpdsVgTr9RVbhD+obKBzVq2HIwxPcVmLPeLQWnqJ1KfwbocdC6vpLLCaXGQ79DEEauRL5dRf8AJAwljGBegsUHaG9SXuiT9jx9a9GDkkrAn1RSwhX6TMkicSIxJKWouWLX4R3z/H5/9zJ0WTYvLPe5IUL6rkUN1dMoSdsb6irVu2pKJy7irKv8Di5L9Es8E/mBxb0Kzlk9kOXap9y6VeSScVp4X8KDUGWJqSN0fR9LBifSo7DJdMm5ZIXwL/mgZSIYk2jbNoYhpwPRHrQ00HoZMYrobXFX1Ji6J6ki3F0ydlrl/GBG1n/vmQiulE6PD7Cp4gfofYqTpZ/cFr3ITTYOI9gikPAnOx/aFlhNBxOq1G61pN2Ueo5vdnuLhp5tUW2wyUmqyhqX6M59xPWnRxHJ3EPrIiRsYxqgxHcTw/6cEdRlqJEs2TYEadVwBgnQa3Q+pg+tekkiJ3v8r/jWgnQrxfGv9BMjbM79fYkZtO7P6lEoiqFiVP5Gk+1Z30L3veR+W7/BSPf9jqbuthy+wmlXRTG5liSndj8pZ/Z3waw9gL8DMHTfo9RMiRFetempCGMdhrpW9Pl/2oII6GWGo1E/wMgGIesQNFSWe4v9OBegiffggv4KSkXtI8n+wvp/QJKEsTUp0aeUSK7X1a/wZqFUEUtFBK7GhENrIqbNZQ5J0exBE00FEx7Dy8sUrsVeiPBNquHVkyuPqlzHaSrfE+1mJjt0ZAkQI0HA9CUlpJ6NoY6LqtX2X9Agggj+BaCP407ZCXsNskDEBGPW+wr+v8cKpUOGKnc1/wCVv6GdCxL1tp3GUQnotC6ONMjrahVWZkrFb4HMXzQpKpJj7JHEF+CbxZ2Ei9MiTiFfT9iX0GdRZYerbMa/R5ZG4Y7dIqR02HI9OkV2EpBBgdhj6Iejshf0cEEEEDDC2bPRehxY0YwmujXBJPLq+skCFTV6c2Y4zbhWPmNUpnTb7T+haJ0UqhlK8ncZK6sje17ncds+wdnSINT/AAOp14ElwvQRTmHnQolN2vA4b+RUzbBZ1ZgnPIUQnt2pxld7MSR8dO5JI30Zgp0dur6/e3F/UQQMPrjZHDUMaFNF6k1JJ6X8rapR6T7htV800OhStnj6U/opkKWlMPbRlS48+uA7kV5V+g5bb8jULcJaKUan2EvLoNVa9iXQlRCNYrpkXNxTa9k5vlPkh6vT7nnsRCISslSB+A05ISp1URPShcyOpuUhySSOeiPp7i/q2h/yKvsInuLrAhGpnzJoZuyW7kWIXEl08H0M/wBHMjACo+lhi+TL5n+CUTEJgdG+hGI2ayLSK5HvVaZIR7lZ4t7DJrN5iqq2l8IX9Mn7Dt3EJBMrL5d2Lwtgl9H0YjG/VshXPTpEXH0kz1v7sL+saIGH164j0ciSWgn0UlYThJFhNMw6PsKTK3iFQ2mqdyF82fb+jQU05Up0a2IR1ZtslSl+nsYtNRpaWddSG8NTKhkHyRIcUw92Y2XUp+R+pErYvZj3Ei9QgsNSn02oMkx0fSemwWyGtSg2xsTJqWOQv66CP4DTIYZTPiMW1uxJpXvKvh3GxJWIkNOX44XKFM8I4e3bTz/STop0SVOF/JHY0MVc/EkqjVfQEom1kfg0Te4tmNYTAnQShGW8FQ5uT6dr2QntTpQlwjBEHQ/4ImekjQ5GVjbp7EjRPTd1qXowv7Br+AqaCEpYsJXppnRvTwyaNXymnwxKziqqVPezGjlVtaFPk/Wv9I0ToWtiUhYCx+YzYAjJ6AnUrbMsgZaxMnGRHc21d3Bh3IN5XqgJQhdEdGJ0kqEIGcDG6CnohDRyOKdWT0tC/sWuo0ppqQLGCay1Sw5K63eXwOBymedUy5kMzCPQ9dePqf6WYlHpZ90SvDJ4mVC9j0t1vK6CER/F9CiVZQMbHBJ7kwxNM+yUGMZJNBEDv6IX9kxOuxFAWCrYJJwSr4KaMUEOXh55Nv8AXv8A0rGGhASIgj+TH0LDcjG3qOpbo0yBLoTGMY0x2EqRbkv1F/ZMUm6DEObyiKigYVLoDe+Mfn+nggj/AOL6UJYxksbEskgVP4QNdIoXixxBf2bX8HIBsrDnvWERt67/ANk+hY5F2w5kwexC6UIz0sY6MZjp9G/tWh/xCM/2R9K3dhjv0Y7GemxURGhGB/wF8T2F/bNf2zN9K+oS5A6XNukVGhaEV6ewyH4H0U9A9v7hof8AaK+hJ4OiS41PJHWERBAkmQINEuj072/uWv7QvoSUx36sQ+iiGnQ+FS2I5p7jF3rGAdgl/iQ/88/eDAb5RXfOEehe3900R/ZPqea6PbopeiMWTX8EZK9kj8l4fkZbd2QoVqcfwfSBlRFv/WvqThmIVmei3kSQpNv/AKvpD/6x9EiBLCc/8D6NH/q2MS/4X0X/AK2v+FrqiRI//VNBL0JOlHGSMSRtkdtL5KpKruMFZscTpYlTR5E7NWgnKZdSC7qRzLsNCcusSUkzo0Yg5IoxWbi3DSv/AE7HjbSkmlayUzYuyw8i7eqqjdYVT+BrIuwzctZokS8oZJKhyU/o1MaKfsnY1SRKd6iN9D9lkK1Mk0uqm13UmCvRehYeWKsyj6xSg+m5J06Oy7CLIosNK/8AqDL0G/wGnuDvoNiwTucBNQlcmV2cqDVQjnPcFTZOKiU3tWPsDwd3ZZeglYzTZNvs3JZbTelmpgSYd/Kskbc9qjoPSj/DgIKotRSEi5s05G6s9h//AE1jkCIfAkoxDlk1UsoEljvkTxXY5ChV/ZCFOG/sFmgO6f8AgVPtL86FsrOPGxF2oTjYjUyn+imy3dGskZZ+wOpTtFUrZJyGDkFZkpDcpvRb9mNEUqQbfHS3/wBM+l3H8GPBBP1SE3JqlDQ6rVG7BU2rqPrKaU1a2/RS7tBU51E3KVpLOIwcYnXIrkTpSBYG5dmexQW91oVnjX8kEXulsJKi+Nc6FOqtJ4G2+4VjN0FIbPcl0L6TuVlRhkSpO3/p76XcftciNys7kq+BDe9CIwUj7yNPcqXEr9W/8yInvqNhGjpOdBiniKN+B3Hco+5FFZux3J1Ltoiq/wAKgtHb8ajiNZtP+juve9MjuUHJ0jSCLWlMOwrcFyKwjo2rEWErWMZVhqNN1cZu+6L9v/TPrvYt7niKfUeVpVOK6CQ+fJWj+f8ADMldXXySlU6yp+yNxqqqqspVS6Etcwyk77KzvuTSW1hrzXBQZ4biF8ZGd2su3zoKZ3rBId1V3eNxY3irq5zoQjIppxQrN1qo4kppdar/AAk4tqvwM0XOb/ApU0/IlV8kU4/9M+lEJFSrR8iu0EhUrgKse9qYyMTVxTGPUYtMs93uTGyOjh/sZRzqiP8ACTYprRL95RM91W+HyI9HV2tezIKo3E1/Oot1pJwrzxoIqKIiGr8cDJL8F5ItLBw4/Yk061Kq+dRKiQ3M5/wV3Ouceg8IOLNvP6FtUb+sVa6Jj8ElWf8A0zLRELK1+Se6FzEj1TnjYd3VrmjuOasVidBfB6EHB6tjcMp20JkdaJV1ElSWU1X1/RRruq8300EUUUnM28naEJoP6n01JEu9IVvUtlF16QIcBWsJ5EpgrCKsuaWSIb4ejWMjidYus92I5copF/cV2rbTGaqyz/0rLBXY1moiX0UCw03bdxaP99RJmtXbkSvv7MlSdls9bkCUynPkcqNENXvgmWoaua1/I2ih8Y+rEz9iUzXQhojuvvgXCqBtYFtBAp2hV1tsVm5h5y+yNyUoqu2g6XBrXwOh9K6IUFlY3NHoQM23dRNrDUSfvAy+zFy5Glf/AEr6MiW3ZR9sD5/gY9tvwM3ZTxknLa2MepBswKmrbcoi1T+mRpfaxWJGg6Oia+ytxq2Lq0P5EXGy7GdfgwnRw7eg8IFynyYxMarZfd5JVWWbZ1wUIRNaRi2XcpqqUuso1HoFE6VWtxuV1LCVfVis2ltuVX3JrruaUJUd2qQkofNBv/TH0l5QNzp18CubMv7AzhNX3IIKqROqzEkGG81usE0glNKUvxgVZU7PDHVLJG8wMrKqTaTfr+CmEQ5rrE9kEEl3tKz1CLWWF3XcbE22oba1ZwMK23CYnH1qO4NSVajSbc1du4xjLjOAsYu6VLxS8FBKZovsEAu9LmMkCbxTdfNiz0V5qSht6oofP/pWMyRKjRiSmCteaDxPmjm9iKhlNb5K2mXarn8lyKREx8kEXhN2JqF1LKv6EUEipCE6PZDOEJt2U9tRGqiDS8V1WuhNVlu79w7JpTDt6C1yV1Z083ZgJo22vkq5FEX77E7UazqvuKnBrT/SozOjjFpFRZhW3kiKFFfs9SJFSfZDaVdUXxgrTXkJH/pTGZMit7g7q94tYQmWE6RbgI5bqcUxkgdU/U+RErIjl3Ig6o2fspyrbG3sbVlK07aCVkO1fhqIbWOVYh4IpVVXN73kiNbblbri7Wyq04WRJ3ivTA9Vqb0V6fomnlxNdCIl4ibeBbyh/jQjCr5aq7FdaqiqUiJIq67ls1f4CBuRf+kYzI2p1D2dU2GbdiU01QtKqvYczrMkF4qPyr6EImyseVKwVocy29Ct9hpT9jgr2KPsiNIsJZ12FRUkNoxgVusp3SYEnyb3nQVisw6fgjuO13+iDUw6KOp3LHdvarxJSpMtY2E6JozXyMxUQ2v3UaNksnAnOWYrT9iKuj1CLbti/wDSMYynqKldUcQQrXmvmh3k1njBqGTSDmPWNoJ5bPJSTFn6MEaVpXFORUefkoKrY+djWmpejYoZ7E64KNsUyg5Ku7uPw0R9sTh7sc7VKb9xPpUhoiPT3PxpsWCL1/AlC22U7Gwvvctp9blkt/tf/9oADAMBAAIAAwAAABCQQCQCREDBoEEC02AQSSQAmoACSQAy2CCSA3gACAAaUAFTbpJLJJbJdLIHKnpJJJKSyAABCljJOTzgwQCBwSCAD8CCC2yRAAUwDDCQAQWFy2SLLKJZJbbbJbbbYQQJJJKQPSAHAoFCSCSB7CCBACQCTASQCUWACSC/SCACACGkCQL95/dZLbbBbJrZ0kkJJJKQRya0DpSD3uySRgUQAB5CSShAQCQQQSS2CAACBWiAgJr79/LZLZbZbILW5gp9JJKSAmEm9KACSOSSSaCQCAbySA8CCACS0ACSNwQSC0QEYdJZbZJLYJILbGC3C2yCJJKSAwWklzwRgCCQCsCCAgSCOOQyQAECQiACTCASEQyTtrm8ZZJJJLZbJSLADUoxAICSQUq2kwcCQQpCLCAXcAUD96M2AKQgGgQSYSAEg0RZLdgZILZZDZJd5INoFAUAGAKSSUCyA8diAThDyQQBDCQNmwciK9cAKSSKaSU2WSYZPZfo4ZLJLZJZYfVjJGNGmACSQSqwL9TACydiDKQQSACD4bpQExfzSQQASBimAZWYVqlnrBpZbYJSKW02yHUlCQKSQClz9vjTcDsSHniQChYi7q4yNYMSCAQSQQk0YUSHukGPFfJJ15JUUOwmmhGpwBKSQCm9dtsMKO2CCVSAgVKqieFAcfPXSQSSWw0BSiSQWSXW4J/Ucb5Y40k20067iRKSSSWkRtOV4CSSASAASUSfkfBQoZNrgCQGgUjSgCCQk+IOOuxNc4C4c2mm0nVtQACSSSWHZiAAlbCSBSSISeAFHyvhjTylCQSgmRKgaSAMtOdrqk6hZeHLWk22lAGiCAKSSCEH1n6KfrIAASByCPK+sNxu2RIwgQmGCZWQQSYsgTONqccMO1faM1fkjCQSQACSQASg0NfQOPAASSyaAHH7gTlAdSN1wG2iaGACSQY8VlMTu6pNn1BALZUrwkCSSSCSSQQQlt4OQwSyAQAMSd/Q9Wp4o1b0GwyEkSASQZI3WgaCyo6I97P+NjhcgiSSSACSSACCnt8JQqiCAAASAHc2M35cylQE0iMsBISbALbEuB68fk4+xOJpheegySSSSQCSSCSSSRr78RYYAQzQH8YKS/SbzvbQyCuIaTZLLLSQIQL0PbYK90dbh4UESSSSSSSSSSSSCpp85HibJSSBbqmNcSfEv5FGyS/IZRaLz2xdASVWOrVvNSt+RoUSSSSSSQCSSQSSSQx69IlX5SCSCREUf5sZYOB4jHzHDJDKPkeq6SdytXGzeSyk32SAASSSSSCSSSCSSRMx9IMYCSAB5LuB/vmS+P7ZzdVXEDZYGGMRaySbty+M456jjaAAACSSSSSSSSSASA3vLOQUSSARBNLToybowU6zUKxvvBCLHudyN4ST8ymjd+LjZ8AAAACSSSSSSSQQCQJX9bjpJaROQ65DLty3EJpvBR2u1YYbRLDDFciSyx5U9c2A3hwAAASSSSSSSSQSCCFZdfqQbhADIFp0ZcMSQF9FzxB9i4QY/F1e1oWCIRM750Cd2hOyQCSSASSSSSSSCQCjpZUSLaCQPXPpaiwqj4Ns21KEyaU3/YAnINXQRkdWb6+BNpESACSSASSSSSSCCSADLZJTgSQQKhwroq3qpPuQgPnIRs2u9zj5vTyHCNzPzbwy5+RiACSSSCSSSSSCQSSGlJRSSASAb0VrMkNExkyLbOJfG9kmuySXc6hO2P0d84K12FsQgCSSSSSSSSSQCSQTJ/pscTQQAf7snXrmEkyTU8O52gYyx8aaa90DJiW4Mpxp5l4DCSSSSSSSSSSSQSSSrfpaSBQCQPyVJDBmNooE+dblSpc2kt+jGqphfYU82wlhwXKwqySSSSSSSSSSSSSASnr5ygQCBxC8GIZEhi68ahEKTXeu8mZCQHFu2XYDwIXuQ1VYV2ySSSSSSSSSSSSQT83kwcSSGKrClmkDI5mXghK0wVkmsByWQMs8a7s2fXIzyHr0nAy2SSSSSSSSSSSSQv59oSCQgBrokc8zq34ml2RCOm38HwZVyC4gaztk51GsbNeS0wWWySSSSSSSSSSSAQNLBACCCRc0sdpxnnUW0wzHh10DdwC4DvR44OYO7+ND7P8AgNa5klskkkkkkkkkkklla3wgkiUqfp4lkhDNqw3EG5aYn7BlxbhWta3/AMaG9TQj1R4ISBJJZJJJJJJJJJJBIeU9gAEuBbBCTwReX+5xVEFHBACppJ7ScScUCNQG/Lwb/JrobHJJZZJJJJJJJJJJCm/s/hk9MSHvbM1DP5+AJtn1n4IJ12GIq63cOQuOYwmW5aTbylFJJZJJJJJJJJJIBH+9q9tv4BPm19fWs3kEWwuUUZQvX8JJccFFKSYnaM+hagvSUA4JJZJJJJJJJJJJAN9+3yftkqBSXAeAII7QfJ10OaNBsIMhvrhyvmaMBsGCphiR3XC75JJJJJJJJJJJBKq/+7/9fgl41vWCboJ3N26AtEnnZB6P3YOLaopK4ChyQikHLcDhhpJJJJJJJJJJIJJTy/8Al/p1ccCjOHCv3DN0qVIiEAVbbpf53KLUWjbMU/kw4anLGRqSSSSSSSSSSSQFeg2+dJ/gIpOPRRNZIWebs2jcCTs62Af3s+me8WCZBYBGhI/0bxCSSSSSSSSSSSQAtghrvd3o7VPx785fTlsnbcYACTRwD6RyVZDdam2420CG0/idiICSSSSSSSSSSSSCb929Bv8AfnBIEO37x4ZcrpMQkgHas00Qa9WUoAy1zhUbBmSueFkkkkkkkkkkkkkkghQAlDh/bsxrId2ZA9Fwibuklkka2Mi/LK4KNA+wrEEJlgIyHxkEkkkkkkkkkkkkkkgnIjb+fkEkJd8xk0oQjbREgkkkAAdgfJaezdtGElHv7NpuYSEkkkkkkkkkkkkkkELcDjc9aaEgZJW8hxlze4RgAkkkkgkkGa+aFFMJFicNQWo9piAkkkkkkkkkkkkkkkk8E0K+/rGzM5X1DIT4lkqAFEskkkkEE++Y7qRoAstLIfmoQsAkkkkkkkkkkkkkkgl/pY3f7RBkeypUAkhMkoKAAkkkkkkkAAaH2xu2N3uJ430vuIEEkkkkkkkkkkkkkkgmY7y/E4QOWtnMGDZEZCxEAEkkkkkkkgE4fuDad06wZFE8ugEnkkkkkkkkkkkkkkEHMZ55d/4PXtwhlMMifqUEAkkkkkkkkkgkA4u1mAMlf3Xe6kkQkkkkkkkkkkkkkkgBQ5j361MyF7nmFYgy41IkkkkkkkkkkkkkgAX8H0tbpCOrokAJkkkkkkkkkkkkkkggVLcxYYuEhJ7AF2AUpD4kkkkkkkkkkkkAgkEAg8jsnpRpAAmFkkkkkkkkkkkkkkkEr/bA37wIeGwyXINRgDskkkkkkkkkkkAAAAAkEEGlZHp1kgFrkkkkkkkkkkkkkkkEEXX7/P5ZFOMcr5hgwrskkkkkkkkkkgAAAAAAAkEBpdH4QgvwkkkkkkkkkkkkkkkglYYcr3fY5qL9e1BlOoYkkkkkkkkkkkABEAkgAAkAm3QLDeW0kkkkkkkkkkkkkkEkEPVXffIF7/H52BEnWk4kkkkkkkkkkAAFtNgkkAAkkGvZYb62kkkkkkkkkkkkkkkkgn7PbYQGzMv85hHFijskkkkkkkkkkgBJksoAEgAgkEGuqDbakkkkkkkkkkkkkkkEghvnaE4QF5OcKUoJWEUkkkkkkkkkkgBJkAAAlkAAkkEwz/77kkkkkkkkkkkkkkkkkAgrWPgkGsM5UkBlMjkkkkkkkkkkkkABFlgFoAkAAkkmD/7zkkkkkkkkkkkEkkkkkgppmAgAgu74dzkJfnckkkkkkkkkkkABAtoEJAEAAkkk/wBv/wCSSSSSSSSSSACSSSSSCWCSySSDbzTjfPHO8SSSSSSSSSSSyUEiS2SgACSASSCbLd+SSSSSSSSSSCACSSSSSQQCSyQAem6PcJDe1SSSSSSSSSSSSigmUW02gASACSQTnLOSSSSSSSSSQQAACSSCAAASSSQSQLnshkB22CSSSSSSSSSSSWgk0y2CSECSASSSMfKSSSSSSSSSQQCSQACSAAACSSQQ4XnbdwEQ5CSSSSSSSSSSSQAEC0Wy0S0gAACSQRqSSSSSSSSSQSSSSSSSQAACSSQSgoyo0FpxFiSSSSSSSSSSSSAkS2yW20gCQACSCDiSSSSSSSSSAASSSSSSSSQASWQBPZ3AwqcavySSSSSSSSSSSSAAGUACG00CCAACQAKSSSSSSSSSCCSSSSSSSSQASGwTQxAeN5tB1ySSSSSSSSSSSSAAgyy22yUACAgACQSSSSSSSSSSAASSSSSSSSQASWSTdfukggA2QSSSSSSSSSSSSSQAEimgW2SgWQgACSCSSSSSSSSQAACSSSSSSSAACSSCidyCWSGWSSSSSSSSSSSSSSSAAiygCgGgUSCACSSSSSSSSSSSACSSSSSSSAAACS2SVySGAAgGsSSSSSSSSSSSSSSAAASCgAAAACSAASSSSSSSSSSQCSSSSSSSSQQACSWAKCiSCSAyZiSSSSSSSSSSSSSACACCAAAAUSAgAACSSSSSSSSCSSSSSSSSSQAACSSjcmSCSG20H6CSSSSSSSSSSSSSAAACAAAAACSAAACSSSSSSSQSSSSSSSSSSQAACSSXyiCkq45LJQSSSSSSSSSSSSSSAAAASQAAACCQgACSSSSSSSQSSSSSSSSSSSQACSStv65LKZUkGtqGSSSSSSSSSSSSQAAAQCUAACASAACSSSSSSSQSSSSSSSSSSAQACSQpJJJfZLJPM7+SySSSSSSSSSSSCAAAASAAAAASAACSSSSSSSQSSSSSSSSSSQAAASSbNpIYLZZJ+3qCSySSSSSSSSSSQAAACCAAAASSAACSSSSSSSSSSSSSSSSSAAAACSGBrpLZbIYJLNIC2SySSSSSSSSSSAAAAASAACSSAwCSSSSSSSCSSSSSSSSCQAAACSCALDaJPCKPprSCS2SSSSSSSSSSSSAACACQACQQCACSSSSSSSCSSSSSSSSCCAAASSGBJbLZZRPNPIQCy2SSSSSSSSSSSSAAAACCSSSSCACSSSSSSSCSSSSQSSAAAAASSSABLYJabJJd1/IAy2ySSSSSSSSSSSQAAACQACCQAACSSSSSSSCSSSCQSQQAAAAASSQQpLJZJbZ+299wyySSSSSSSSSSSSSAAAAAAAAAAACSSSSSSSCSSSSSACQAAAASSSSCT7bBY0kmmy1CS2SSSSSSSSSSSSQAAAAAAAAAAACSSSSSSSCSSAAAAAAAAACSSSQDJJ7VS2kkgRGg0ySSQAASSSSSSCSAAAAAAAAAAACSSSSSSSCSQCAAAAAAAAQSSSCiJKLbU00miAAqGySSQAAASSSSSASQAQAAAAAAAACSSSSSSSSCSAAAAAAAAASSSSSTZLI0k1c+mXAtiSSSQAAASSSSSACSAAAAAAAAAACSSSSSSQSCQQAAAAAAACSSSSAy5bUyk+00uCltSSSSQAAUCSSSSASSQSSQAAAAAACSSSSSSCSSQAAAAAAAQSSSSSAAZHH41Je0kyF/GySSAAAAQSSSSSSSSSSQQAAAAACSSSSAASQAAAAAAAAAQSSSSSAC7OkDL3GRtjoP2ySQAAAACCSSSSSSSSCSSSQAAAD/xAAmEQEBAQABAwUAAwEBAQEAAAABABEQICExMEBBUFFgYXGBkbHw/9oACAEDAQE/EOPPqbFnUB3Z4HU6M6T1H199E432Db7R9Td9MZPQ3nPQ/wBvEfe7/r/5Nkejvssk9J9ptv0Qz6Y+gPqtn3R6GdBPuz1B9A6snDeznfNft+QHz+222dW856D7nfWznfsyfVyzpAMDCyOp9TevOt6cs9lv1g+me5PW8j4iEeHmR48E9T7TPRek+hPUfROs9TJOsn28LIzjIsbbeU8IXXvsd+ufW2OViY9ls9ZDTJBrkLvEeNg1kDC2EaeZM+g2yPon1HjeGzgfS32b1kuwj7/mUbEEcefB/t3JF3rPs9xnov0Kx6zykeksdJ6Jqd82byPOOP23ODFky7j+8nSSjtP5UA7ENMlQ9g9OWcvTnOQmV07x4AgeST6Yt9FfY+VsR8jxdu4yX++R4b6/OXglhOrJLb02ejnoki1Mvm+KtDsQHzeA7cUnCLC+WJPEl5wvyZPLr3rzoDbx7BJ4DpY9mfMQTZqOX+sdpeNtE4SeBvJZDLahJ6JPO9OdacZbvDWwJbJDhY/KAe8Z2g4ksmQwPi8h6wRF9kx7rKDJtm72BXzDHOM1i28DbtvGA8C227DHPYHoBsfld0e1/dO/OkBHIIzM8ZA/F5CR4W5jAgu68g8cPpE8S+zZ5Pb4DBF4yZt3395i223m8bz3hLksdfvTvo56I5rB+caSHDalhDaMEhJZBMuxp3I0kPK37hGWTnohAEvD7RODqT2eKzMW7LVz478PD/s2QMWqfySbwP0k6O8fnTvsdloS+VhJJ4ZLIGxiwcPBlyLU2jxasezaeHHna8S3zHoH7l4fbp6G+y3xwHaWVuztH+2cd4JAR+YI48eOyI9rNnRlsTrx5z1NzcHaCZJLJO8Eslsksi3IQ0vgYMt073+SW/c83imLeOPDElqzpNXYl432+z6DD7AsWX5tt4eX+3mcBZwWO/3g6L5h2Ygjj6XXa+Gu0Bto9bcdLz3e852YAdmYxJIQiKDtP9Wb+7OPchoOLCZm0aXZSOyWSWhvIQCXjfdEnoPrZJxtgttsrfX5Hs4HaWYbUP5w8N2MN2iLsGednCDP5u7/ACMR0H1s5EeGZ87/ALdhe7ohY4ZbLpGwkDpJxkzYy7B8MNMu9bMNLLEfuWXjfePfnelN9XRyKEO5YHwcdtOC2MH9WOD8REl47sTo/UmNiP5d/e3LeG23+Tz3T8lHvB6RTSL4U49DxT2/Irt/xwtyGZhtv0ty372Zylsf3Yu/m8oZJLLvM233wyW+hvp9jzwvHeLL/fBbxdleP/qxmG2eFl3n4eNV+duFjeE0y3Zzi39nHbAgX6AOESByM1u6Hjh6hR0m8f8AuXTTxLJZJwQdr4+bQvwngSWW4dtiTg20Z9EnsyPAxugfNmFp/pIBiCyLaPk7lkv1byOP9441/wCzpLzP2zgYCENlPmTUnWCj8trU2idie094O7ykHHjLOrhOMkkshhbQBpyJPHaxkOEm1Pok9plWP+4bLeJb34Yd7zxvF/7LvchljjuMtQscfvaSZiLXf5w3h/yGm8Sl0etMFhB4huxKVt/qzPeevfv8/EOMsk4Tez4uwCM8JwSG2GY2Xc+hJ9PPRHdh48X/ABaGOCGwfxf8zkiCz3+2wZR7/tlnG3ciGPD0Qg73eG7x+dBPG2rHyvkLbLOTsnedPKEnSORDGbnCSScJUCS8JZJJwc6drV9C9Z6nmJ8xFu/673eh2e93f5xsAa8MFXJHC433+cZn/EPDbFi48PG2fyHAEbJokmPWk6xgJpxssxx54Xuvx0otIRjNl4TnOBN4bOdgktJPoU6H1SwWEQj3Jv8AOABt5G7QPJaDTgh4QEfDOkfi7w/ZizkEGdY2Cg7R3vE8HGW+h/gQHSySeA2y2/td47GZYnQg6Q6fPz0Es4zjY5SyyJhfN9E+gc7xvTk2w8GwG0/o6CAi+ZIL88CC3OO4fMGoyWcZz8KQGHZs/q7nchh3eky0Ye3sj3knl/SDwMxJu7uJOcc/skxxllk8bDebMs6G0tWfQEnsvMcEWAx8WsX/APFkc4d4YvwY88E8DBvnhnlBMbUlm2TbH9SbDf76jdnj+2g07kweNzhLYb/Zle/G2vyby4G2yTjI4G2eHlIhJj9AMnVnp5lkcK3BsmJiIcfkns8EvAcljht4S20I+27ieR7D6WcqdvH5EbMYbxbk2cDOJjG9/wDxYO9k8NgssiyTjJ62S+c+hfHsRsBsjghl821fOQ2Ddk22bOCJbeCeE0x+Zgj+3x0G3DfQ3odaOML2og08dW2wyTs5DDMGW8Ent0b0ZMLd9AMOjfUzgD8Sd+Ha55C0NJcBM9xiCTglt4yCCZY5Hgu9F2Pob1qaXgPP5ZZ05YkKbOB43jZZ6ieGS3JMc4ffebPYCHSyE5GJ7NpP/H+Q28M+Lw4bZbI4I4HGWEs9GHPfVFHSJ7f++M4ediedht42Z4eneHgXz8ZZZZ7sYeodPc1bx4lHB+II4ZjjOMnggi2WyYZaZJMMF2h9j+83h4gHaSSOEiWWOR6ttnjOlhtu6X3YyewwdLc04Yu4S8MNvGcHGzzsMvGyzMOTrvwEWwnrqww4Qh7GThttsskiYt4XlLOM4bOG2bJJnazoyz3T7Au1wWJ4Id0cCbYtmyZ427ck8qYYvO0D1BMJ5ngGGOPiZJtiyDgzLON6sss4eGzhm/ee3Q8PuR9ibtLbxwLcnFspmOh4SCyeonghD0362hLxsMMuC27M8DvEEzw85xvJbxlk9KRRek8Z7c9iW5n5B0N7cA4Yh42Z4yJ6M4Is4fSUYyMXpGGURfEybBkPJbZ4eNt9R4SZ85057kYewxGXGTwcsRy8Dy8ZMPBHPh0JwvGkEmr0kMQw8G22vaSOXnZZjg6XoecssmL/AFIsffPQ9K9RwG2zZHL0tlnDPRkRwPD0e8ZfpOPE8vCE6/Rtfs/G3ky3gYZWxb9bJwwcD0J05ZE8ZJH5TniUefdk9/VznLH7DznIzExPQpcM9IxwvTq3Ymbx4ov0DGeE3vllLeaJHhn4Ev6YH4gvixgds6WeHg4I5Zt6Essssskkkvm+Qte6JM9HeobBscPRvDHTk+gRws+/jSAcO8mkmHY4btwoiI2stvBKAbWweZ72T0JZMzoG3qOgmCyZk3hHn3nk4fW7J8dTbYs4Ol43nLLOCZu936zi3ox98Fm4SX5fIyFmwk5HhsNthFQzHnv05BNlkW29GScZwsPO2DZddfeEOjPU/wCRbbPLwcb0rMPUPL4maz1Hiw73mAkjYS22SfE2Tw8bbCcPUvOWQWWWWc56GTf5Hvie3Bb7DM5HhjoySY6N4ONlLXrxY7fN/q/1Z+Wx8RCnKzxvGQQWS28nB1ZHBZ1smLbHs8+/IWxPKdJ0Df6HD1bbHSnO8ZyFsu3o6tchV4SFDAt2ZtttibxnGdBycZxnOXzyT0GNkXX6AZI43kbed6e8RyxwckcEz0FnS8Xr7FHC4RwsTeO+9OT6Gc5JyHHnjOW0wfH0JPc5ON43jZs6C25LDyElkGcMz0HAWc4eybEKchCw2876J0ZHRsE8M2s2/REJ5LfSxx+8NkcFvBw8p0BZZw8d4Pa7HAKKICCw28by8HTnIcYHOzLdz6RnojxvQN3yzg6Q4OWyDk4Zm2XuBClOMUKBAbbeGww8bxvS2cZJLDbcfpCHoZxkHRg/26joOjOg4ZsBZfc7bEOgttwoUCIWw2wx0Zy85Y/fphmLbZeg6hu5fPUehlnQzLPfd4Db1AIl+kDHDbYbbehtP0xPf1/8h53oHjeM6N4OWfb6HbbbbbY4NhkL9IDxvG8LaPXn0Iwt4Og9DNj5ODgeNhtjozg6G+H02222xwbGL943wLeO6fUvNnL6GcE60jGkcbFvBysW9LN8PqtthibEFDHFqvXv0Qws5yzgs6N5Qc+Ogssj0mW8D6zeBibbIXj3nq36Q7yWzyHWG37Qh4nvBHB0h1PvVvsxttibbPJwPGfRk9+s6GYzwmk7nByPK+gy+9t5fYbDwNsknAWcZ9KMnD05IwTlbx3Ocssh4eXgs4ZPdDZ057QvMzOjLX6XzJ0hfpdnSGXe8OnIng6ng/bM6X0t9UbYbfqySTOSdiXrJ9pYeM4ybOToZn4PsyHoz6ght42XnbekvGeCOckzkh5eC+iHsjnPq9t530C8DjIjjeGzg5WeD1+63h6Dk9kc59XvSdRPR0Fnos8PN9DlnD7Ibec+0J9Ahed4et5vcp0JbbbbwW9J6222/ak/J0EdL1O83vXq3rJj1d+wOklB4HjbY5yY6Xl9Dk8hw87Hrjb9cdJPBE8jzs8bLDbLx8vf5Z17E/wE6fKXDbbbLJJP5n4L/E/hH4Q/yx+RTy+g22OjOCfR37g6SfYthIX9y/BK/Mp5bed+p3rz0M+4OkgDZnxJfPS9B1b9Gekfeb07L070nVv0Gfww9Y/mjFsvpbxvRv8ALDjec4yyyyyzjOM4yz6jP4IdGeic/HR8x0n8mD2Z1Nttv8lzrI/mx7t6N/lr6z0b/IjqfaM87/Jnh6B9N9HP5Q8Z0PTsdDPQ/wAp3hmeM9T54fM9BP8AI95eGzrOkjjOl/l+9B1HBHSx/LDpOHnek5f5MdLwcvJ1jH8tfQbes4Is4+OgY/lj5ng6Hg47xz8fcf/EACQRAAMBAAEEAwEBAQEBAAAAAAABERAgITAxUEBBUWBxYXCR/9oACAECAQE/ENXduQeo2IKtdPjPvT485XsL4N26+4uaRNuTKPbBql/TovwXZeQvZvx57K91oXGcLt4PhfiQXxH2l3b6BruTUuLEXgiv9/8AqF9Hw8nwW8XYnzZ7qY+C4ta0Yxq8fwr66878VZfiX0E4T6YUvIhrp6SC+Cvi0fdWLihrm+KLypeTxOrRrdBVxaoSP0FL2X8JZeMx91c2IfZgu1ObdRRoq8Pp4NxHUQanGJ8JxYsfwKXZ2H69rH23l7rOhGIOrHf4EKKJ74MfpjRFOj76799mtWUvC8EPi8T5Mo/wNkK15n4ecKkJlY/NaMJXk/IN+p5PVflzlSEJ8HqF5Ez7FyXanG/BfaS7S7CDRaIrlmQkMSx5pax1sQQj6Sl+XRoIJDB1YmXgW8jQncT5H4lb84vAP1EvwLu3IUuPvrW8osQ+5C8n8bNR12t/xWQQkQRixKjyxiINfNkJkwxsWKxMQxCce2NjCLigavIjvLi+EnjXYvwV6D1DcPGeCTTLnSTxbZNiwkJCExqr3r2qNBYr8FIUdQ0xMQlwpUNX4KWEKNnkXQt07dyE+a/g0TLYd5CRIVj8xSlw6U37uLVfH/EYY+iEJlExBwdDdFaEE8/wSPB5xagghZkxquwxv5C+XJkIKI6iMfuL1f5lKhniFEJtCJOE+KxuOMv0Q0XjSiroOhwUhMSPA8IfT0JiFLSH186X5SfyutRPEg+g1VPB4sonVPPUR5S4kITjGq+Jc+0aG9WtYkEyllUdWwtJ+H+lJdGJFWkyDGq4Nl+Yi5eU+DUKkJi0fh4PGxYynBwWvU4pTARr7LovK84PeBTwNNecpSkbwg3jG6+BSNeCZQmJiZXoIeGJlEz69byfMYhbeLy95FREEhko/RujHiEQg5i9YuuXGdKcG4jqWWu2pcfBpPE/6CKMIQy08Z4D8C0GMIYmMQPOQowxEmURRL0FLwfYnNuIfUk+jKdGM6iePFSnldPsZC/h/wAWNVEJVBdHCELkIJso/RTwGeeXlMTliQvC8PKn+YKBGk4T6sX0ZRMoxB4IPEz6PRJk4Tmuw8ToN0/2CgeJYXj84CshX/GSbEtTjpRXbRpRevNj6OhMx/qdhqin1EnR4nhMQ0QR+ckJ4hM8YfYxZAovQsT7aXYYn5Q2o6dTxKJoevFvX5k4Q/1nUTFkHlVPzW6hhuCX8E0XKC9Ux8QkWQl0YnexNV5LiYmJlGjo/wDSLFiYs+1FxCJ9PRJ9cnwWxTxzT6ynUBr6Jkgh5MSnQgkQRYUVLf5xCHkteQfrhoZQXkhqDrQavB1YkPGf4F+GrjLo1Mo2Lp4GExCZRMaIQQxf0LQn2XlEPjBAujfIhYHjYyDhK/0WMeWDVUGmugmXENGmLF6sN9CDRBzg+En/AE/Yg2X7EQTa8D15FeAnypq8amMJ4+owmJlKJ4xFyovUPuJ4eNjZBTo0bqF0/wBIQVKdCmGQayUZL/Y0QSEhlVMUXqJ0bxOOiYuaOr7GJ9RrlYIC/wDXFpNRjuteCEEIWwYmJly4xEfRLgtfbuITmGGjoy/2Go4Na0UTY8OY1qh0aqnSTFi1m1Q1RZUY+gnRY1TlcQj/AEMbqPFjxEGroFPquDV6HSvogsUuUuPF1ylxDH1+hYsvZnOJg0NHkE3R8E46dZfrHtOifRURSi4fSJULGQ/4yDdHaQ/JHqvBMQxIXQUGhngIfnoxPa3+CFi4QmNFPPBCZAovQofJ9tfDxjQzaoYpj1i8P2Hj1o6n1iE9TjpBSTYg2OD3mfFL6obJxiY0I8loiDQ3/AhOmN4folBYyC4PmhCIsvoGJ8IXuWZDIJDR5UTDEPKv94pDx4kThBxiBax/K7F24teo16iYzyeRFyCq8H0CoTEQpSjZRdkiiZ9fo7l70G1kGMaidBrx+B6shNaGJEx6nHR02n/wYhoZDsmTg0ajxNNo9WwhBoSjFjPAioaEE+cLiYxRernP7RroXpjPvEHB4xbpcZCbSixjeNjHjFk7D4pWM8yXFl4NZcY0MgkJdpCICd9AxPsTsNdIUTWjx1HhBog8Xk+yHUnBjGJi0xifCnEybObV8n2BqFxMoibchCEIIXOcGPq9Cta7L49O8W8ofBF2lxDGeRISEIeFjEfR21yf5EBoospcSEia1kxc1qEMUXoGJ6+61VCDhBPPDuMmUXCiZcYuTRIxDePGn32G7rR+SHVcETLwepcL2EJkS+tnD7dZ4DdMeJi2jEXJzuFvgPVxnNsbpMaGt+9YtbEGLi8nl43KJiwL0DEH3WUUEjhRj4HresQspeD4LUP2Eyj/AAQnCDW/chPTY2LV2Ute0WJj0Jfz2LWTZxvDq3gsZRvhcQllGLhR4y4n2KFGPIlwewaxkuqLs1LG+0+S1M/Qvzlr4XVyoHqKPUMeURR8LiY8eUouVCjY2JE7LHsOqEN6mLEuFGUuLghPaIpSIh+PmsT5XZtyZHEEUeUQx8aMXN8FzGyE1ovLEMI/BB4Bj2DRCE8fCiYnzRS4uFxahqP1E0/HzPDydy5dXhR5BD4XWLsQbxaQo3iW+cHPHQfXSDQkxD7E/wBiXJs+yMideaeJ9m6+FylKJijwfsR8pi7kJtg2MvNrVqGPk8QkJ0Y2N0S4dWIn6KDEEDKafFjKIsvnSifCE4UXJFKUTEU6vx8xi78Q+xcfFcHtyCQjwFITjkokfkf1E8rKUIoUoyDwpE53bieNDWPgh80VCU+ank4PH2JshMmvitWPspCdBLkvQRSslQxCCz7LlEy5R9plLiY2XnS5coqRfOYnxfYeX0uS40T4Pn5C8c7LP+cRjwvFmFE8WUZR8J2nj2lKIpeF+r9AhYh9hPhN8W+yuT4r17MIQg0NR4GGwzBbOwtndXBPGtBCUXoGJ7O5NB8WPFjxiFk28EJ0d+EGgy8LZDROLxdhlKXjcm3ESV/fReBcnyhMlqZR6y4uLHtEIT4SEGHkZbIhB9O08aycU9XCIhelMmvgtuX/AMa2NiHr24uF4IR0L8Vogwy0Yw2G4xOHXXjfGbeCzp30jExcGTHkJrRVNuvHxRS4+CEJE+PBoeDDDQajRtxBohCcllEylErJJ6+6sqqiDJrHypdeMQhK/lQmTgIQNBoNhsMNcWsReNnfz0zQu/ZyfNcHwJ85CbCEIQdDVn4iQ4yc0RFxfqF2GTf9x9il7KE6+hhCE2EGIIfk/AYiDEGiC7CX0LEycr2JOrxkGux118Uff00JsINDRn5D/Qy1sa4spfRMT28JzQ1GWQevvvv6mE2DQ0EfQ8eUhcl6RDJqePFi4Ia/6PHwfCcViPP1k1ohBqx9fF+maE8Xb/AapJ4+c7Ly9c1rRBLhfUrZrLrgdeIdDGuU7KHn7CbODfqGhcpjY22IQaxKhjHynKiF7Ia431d40bITgxo8h8bwvFYXr7N+vpSjeTk88yEHjxF5rC+f6KZCdrz4vU+F1YT+uMXqMb1jJl7BOj2rXuWJ1GPG9XKcPivbNe4YnUY8fCbOTwXt4T2zE6UevFqxLJqnh7l+1YgfCEH2EKeH9cxejHr18EiExLK8e7ntH4w8hCEE4mfQmF/0JP0YNf0r9KC8f2C9SDGNCPtiX9CV4X9099ApeRJLx/esS/8Af18J/wBaxdi5cpSlKX+0fFrg/wC4QuC/unxZON/slkHiFl/t12GL+1eLg+V5r+tYuwv7hatf94hdu8kL+qZMXcf90sfG/wBg+Cx8Xxf9msersP8AtXq7EHt4L+oeLlHBdxe2/8QAKxABAAICAgIBAwMFAQEBAAAAAREhADFBUWFxgZGhsRDB8CAwQNHh8VBg/9oACAEBAAE/EMi/r0uzycYzaIhzoa60MbSwPScJ4f609YCQErwZxIbjWFYAiPEWbyJkpH3FS9YSUKRt1Xzl4mkUiQ7mNfGQxU4Mjkl66ObwgowxQWTR8YKNyZQERwqCAnU4ygBhL0KgBcaCcYkIYNIegtxZNGyIjs2GXOJZncajcfy9mCYvhSXYRg3mRUANwcMZKlCCX0mMAQXLw5eXyrxgBCScmJEurvOeFzRAn6PiXLji0ohgR7aYTgecjOoEyGAKV0S4aZEt+spmHlCsiLNT5G5yMDrRMJ3JjL3/AA6SnRxMteeMsCqahtKjaL8ZaT0ANZhyHryjAggaFF7we5ARacQG2h2dmAp2hULNdsJtXrFEvJ9RifVPvIgkwGU3kmrIvFR1LS8RxkeRwD+M21l0YdPJTuscbcALiegBUkvlPGCqpBE7SEQnWFlggFCb7hfabx1O5Hb3AXxsLksgEiHmI6wwBINomIsFGxO8OsJJ2xeYdOoc4gAQSbPo5zPeeDACGwSodz8isIuySIFLx+3XODiJqydQrSZ188FAzUeDtFIQSADc4gtjTioTbqVy4MHYeBxjSsC9YBCEzYOm8noIeYuvGQ0EJloI/BcPhwC0cmmPsp6ODUi5CGbT5/T1ilUAlGh2uMZZJdI0L+zhLzgw+4gmTUJ8N5IgjJEZ4m79ThZAU0JCaCIORCtYYC2KyqXyp7FOKwyhOzoCDRHCZKiBnMSuAgCdGjjKoSPJkk6RrkwIYL+mTFB/Chj6gyO4oIoMFUh7Jq8ZOkmM91pvmPeBXhouTOoElxT5wQEL7HidYwQBY3FTrvnOMp3qXs4w1myE0Ta1ke95HZ54n2PjDdA5qO1XkawIQtQtp2kX9PbAgNEAAEiIgqHWQMaDh5jRzoyJm8hnMgG6ecikC3U9bWrrI22VQBGxPLknxEMYaY69ZJDjJAhbNLRrCA5mJDvq+jGXAWBmZB5wBhqEEQYs1jAyskSzXo9YoCAX0Gd+MBWHmbkmTVuNUyXDMgxzeDpVMkWXlbgjJAQEVpHfuOsQBbbouTyPOAkhTRJEJeBUkp5Jhj9sko3EXGshr6Q47cVNG6E59y1jUKS4IW55xLCkLLNTGsZR1UzNeIyKQBDDwPHGU9n3irD7VkDyccQJbfD639s944GUNH74oOFHxstyC1jYFQlImJ+msnIcPJB7o8GGlhzbe94g3cU1FYElA21rGGKFdT13kuHY/jBTdvz/AMyiQm12xrzhgbtUzD9MKFIDfMCHJMBpg+VoWSokLDDFLZhCzl9ZwVeckRojnyNGdjUnGPJQLmJwiUsklaMAtEqJEuvLhgYMePj5yA38AibA5nR9cYrVVYGbvawjnFx2zOQmcYi7GKyxD5zaFHOJkiTXYJZOHKAYafhT0AmEzJJQLJ9JA61gRqhISW/waHea+gVh/QnwffDSIr++C3Wn4Bmj9bIGXKZnITWOwVqVGy5PPnvDCkx9WIjXx7xxbIugmvvgMgMg8kh4UuQm0J0l8mBvXk4EEgAU0Gwd7w4yQ8DnbDygVJl5y47fpzkCMSet4pL7B85PnKg3BaHwJih1IiYS4SX5k+cBJaB0Zoqfjk5cpCw9bL+Jydw3gfOoJRqDolSk5vKtDggleDgKwkJPIbrECRrEWIvc9Rc4yKHoiL87CruMHldHgbYMHyMPQSIdTUmQ4KjxibGKi7YCJRwHwzjlzIMsxtTsX3OaxYKmIL3ehieGCyzCumrKOYUpDIZYt3hIyLTOWbcyvjCya7R+g6Hgd4icCXKO20lKdz3QgacvJ5j9BPvBOpEQ9GwcyPLjLJCpvqsvr5GKL2A4Hn35byU+AefWBs8EXZbNQL7CwKoqSRU5G0fxwuIsAaRsT2YRlC9g5Cq3oMV9zEqcHa9YWzlpZrRlJdhEmkXapKgy6uJyARIJli/pghH5Eeqwdjzk+vWVeGBLa1GqnE5AsGDjgH4H0YAKYARGgGXyMuOO1hCO9vuX4wR+iZ0b2E8rhLAlLjXfzhFsJoA3rcXznIxvRcHPVGQScppJO+OMDALZoSRUJPnKhSiiNcfBHzk180B4nrvEDsQiGPJM/WDHAskkI0pB4axLKoSFAlj5gjGSRoiU3OzTkq0SxuWiySvrjCUEcI5K+mMaYWjfB92X2QARtSS/jNb2jFDMllpFBU4zYh5bmbj7ZEWWZQV0TYmoayBTKUQ97vN6YatcviTziyh1parGoiiQRBMlecEJpdrELusWgRNExVPWDcN29LbFOMxEPWG3rKRBEUN/wxKoBt2GIlNazYgexIhG45x6w2GmfwFP9pyJIZLUdzcKbSkVEqv6oxngdtGDDQzP4rH1gC7WnH/ma7Aq71zEaOsRgAV4Pmd8ZcGDTr57xsqTC9YKlIJVo/1nBgiFfHOG1On9q18YxAJb4PjL6zcmr/kOX6OuXF0/KsfLJSaR6+uSdihl1yOPbmmYklVfy/jECFEUwg4kifRWRYFmmgHyFeWCumylQTD2z447xuw7G9pSBF+pHWPp0JjojGMlEgjF79skWpwiMfTAYnKogjCOWE/PePf48SogjiFmdvC4NM4EgY0klfAnrCRLSkmOm3kGXWCjTerHlsMhhhNmGIeQEAqXwwfTjEWy8ByLupRYVE5Ex+hQjqLJhA8GHCng185dR+844IikiQwgviFPBclaGrhWSsbhfhjpiS0r4uoDL4J9IcHxYMkPgrXs85LjeXQ0WAX0Q3JkTirScw0Hz7GEVJKAEKgCgx0BEGsniTHtBH0MImQd1E8kEoHAGQPGYGIgvQY8CdOKERO3H3S9Em8IIdb/AOK+44xNkJyB6lnwF8N5D2GYDcSjekNG6BpLFBMJ4S79h6wjdklLKnKbXlzRuDxV94opAG10TUphwpnPlmo9kDg2AUFlgT4y+/f1zaUvr1xhctTyPQ2fBnB1qnJFyx4Q5mDNqgMOYG9esj4nZXaRRh6geWX8xCx5HSh6xu/EdYy4+6Pm8DuEHOEyVFXiMfZX/mM4IKpWD5D2Xjxsp0KHby/5WCSNJANymjAj0qfCO+g+g4HilZQ6sA6JcDhjYEXz2lnnI4AsUcVgBTzMcEfbAJIAkmdcfjCgGsF+Jsvl1kd1JU6mdevX1YwAmrIr1V9E7TBBHETFbLR93eJEiF/z++QqGjm3D3POUGwwywfmMVbaSWo7a7wSIIG8a54yUqsG5TqO8C2W8y1Nd1gqCiAXVWsYYEikSQm7r7ZCAKopte5cUpZFJDwMagucJViUjdRHnBYslipU37yBuCckU6xiMi5dR9mawZeMZJKX1WbCW6+eRxoIxyNdXa4SlLTQy+m8YoSQKqfp6zckGtedVjfNFQ73uss6DTnCFW4Ie5vljOWJCiBrt7wMKOxm3nAhuch8cf8AuRQWlQ6EcYkhCZNJv/zErTaSTv8A5hRkb9h85BF7q8jU4oWhNUbX2o8JwAAA2BGxHz/Zf0EuEWpe0FtyYQkEZhDCE3v9EnSeOXHgDQY1rCi6VqR9sESoRMLiYJwgkyIJcvHGWLZDxW3y4o4s9PGGmN9SYP5OGaIdwAUOzA7cTiBQstabHf0hhwKIg6Tf0yxUTOdN48h29xgKETJEfVwcSkGYGtH4rGdG2CVCPgGJRl5fDu/s/Rhz3PbE+Z/L6ZSwSRvN884nlwR2aD4MPzLC6iUFSkEDcgn5DIyIjInIASGyBxAoKPM7FAAEmNZCkQlOZMFDgEkPVRjKxEgyLHpblrtdYeQ1OVCUJN45dZ1gWQaZId/DDXACZgonl8vneFQRuaEU7RDyEYQqHlK7OHhq9sc4+OrX6geATOHijr+c4KxNxGT0qbg2Rm0iV3+yedYgM8jAue1LOIvTDRGIUNBYiJNSMTmoWtI/2At5oK3iEJPIryJyRT0ECIkmZ3BxjCi1ZQUIF51irIuDkx2+dMYZTojFgPpA+OcHl1AdBjiAjaeMkc8yy6kA2Nx+MEot/AR2/Lh1k7JFX5TyfPA3Ji1saOJpMILcII3hAGS1QTEubCDZmRj0wyEsecCggRNn4cYLHDxxlR/GaL+V9py9Qy24y33Rz4Me6imozsx9tezjBCWG+ANqvBgn6GiahWr/AB7ypX0QNwWLyP35wPwjHoZuuvhHN7bSmHyI810ZKDgmD0ZpTU17cEmpBUYxMb2nn/WHmBn+LxmGvL/vIUztktHs68DDRQCcR5k7MP3JcUabLYjllP6GAxAYWXHYQQHqHzkAybWgDlQ3EbKni8CA3MT8+69YZ+VYK1qujOWHl32d+9PGF1gOk7HgX0wkjWRSL7ApPPwcAJKiSChEEJqo4xEoSCBGhU6kx4AStD7l1qbMZWuWHIfTxgLMiIKlsJcPeN1NRLMp1CP3xhZIYmIHsacUSGVG3Fk1xi1QJIaFKjreaKU/UYQhvG6AIoHWoYwAMsIQ8DX0wcwCs0gbYj1gK5kMlCGpa2GaQZQSThxICalhGR41vEiJJS6eYnOAjVNMX+MsdhK815rESaZ5LHhrEjLM0JWOsCRaYUSE8fOBA5EKgLMDkRI7jvjNgUUlJfpkxAjHqBT1iUSPNGn0wgGSFToNbwSeCFHGIUoieAiz4zQPQAbdcSZER0hQftliSzXZ9MgiUsd7Kx28Yl8KUrz2YGNzIzpsRe0t4j+0MZSbLPjESezbI/VJkvIWMiEigHzgREJLQ3rABVBFesITtNNXZiEJFUYo+IxNw9CDQ+jjxYIj2cZEAkQjcKL+MKg8t3UsfuLEswMTn6EVIiBiCy7VyLCHW756w0oC1MMJAR7Om8EypXvJKzKOCxMBk+K3kj0FAak5e9SecRRAZIJIcJp2wiMdaTA5QDtVk8sWc+cLh584MKEGSbYfcMV53WlY69p8HBQaccoJIvZe5OMQuxiUDKahAiATOa4Qenp1iOD74YgQMABQXRy/EYElXsCTFDlIDtWUSVcg1A0YP1MAo5qgEFimRgysVy844sgZQ2Rr5zgDkCFcfFz3TCo0A1zJ8jB7eWRSZXWksTEY1kQDtXCb/ix2iX4PR4xYoEjesSWKL5jJYAWhF0Pgh6cspuSl7otvMnJVcKQOpCnD0XLkiHh+QkjcHrrGBUwnBihiK/A5VEHgvrPZFNY7CSfGShEqVHKx7RoEDmsyJqMBXOQkIULLHBLAVrGKkRoFCSGTSenFE1lHNsCGhf0WcZURCVFgHgg8pzgFtISH+cadvnDeLqTq1skDmVsiKiIoiUl9W4qnQ06w2YLL1WJoQEubT2aP9MSwi5wJlgVDymA8LEGQRrjywPQH3gfJSfMSHQb8htwcoGYhyKsH2vkYfGdADW15feRI54isElSH83kGinXnAUIwt8maKx/IyjCZtVr5nF6h2OcbfnBFKSiQUWLA7HIyC7GoWMKDq7jJGggnerwEGJLCMNeJxKYQG0krmshDBDJHKy5yYwoFumh1vxk2ajkK0AdvLeDxoICHzsL6fAw1HxKCx2k8nKhFwge1gv4xEKAs0baavBaBgQLXmu8QJyYVLZ43WsANghe0/XBiSWoRuycGIByM0L5esWSNFs6Y0QtubxqhRUhsMAgdaGohZ8d5HUMMMMAqXeTKMbkTz3OMFlcwFYkvjWNwiggqCczkxqsN1IrfNZD0IbzUuTuOO8BbWiH53WJg8q1z8x9chCYhLh4Ez4fOKiw0hbqIP3yUBqGaao2wY7NqsoLjsOveEZzMJiQI7H0ZKsmmBIZvWsSTMJR5dc1kypKCES9NubxosjaubpcIRQOwcnF5cyjCQI7/ABggE2qP447QjL7TU5WxJA8RxqcSso0Fbd6c0ACCQp+HOAu5JqYjVeHEETHieXUSybKEL6feQ5BObkavcQ/pP9aZIOEV0Bch9EGLmxI8I5CiJsEmajr3gKJdh4FnLCV3TgH3wvBIpk5KvCWghBI6k76ypz3ITn4cGmkTyY4IIvalIZ95OW6Tv3jRQNtAxZWfce3gdHvD55nsP7/jGMHECoHqJ+KwnjhWBVLiQrywwFlpy0y7Nuwxux5GwUfZ5q1iT/G/bJvL7A6rA42b+cA1YeMBpgoob3lAPT24641hM4PDSKGp8spvYEkTsLtXAnISIMRH5WJ3eXrIzgwQEWdkrw3CbxhYVBBhDIhmzcOMlpiXlhN7LC+Wg3QAI5gs3eCEpDUZMeQ4yLUAJSQHZx34nF2y5ehLyLfFHTFidDmQvI95DmYwJiEH6CVf+qcHUlgDohBObBD3iWXSBOoD8YHbgkS7cXCVQtVbkcTjF1Pc/dgUlSLoxm7+GWG8M+VzQtIqtPRGNQV0IfYO2HxMZhpIvI+MQKwCLcJl4BTUvQ4oLvBGbVp+qejA03JCmA8SrwF+7FqOUOBQmQ2slsU1Fn7AG5dFfu3hhIgs5Pa1fLkVRSZE2P8A7hBQwZUi4u1h88Rxc2Dp81snU+8H6DwRSOBYkL08fGQJDPlY8vQWvBie/wBNA6teNQ2zgGkCKVp0MGBqtxhjMmxqIjcRxA8sik4aHaP2MTUtZwFNz0ZHcx1v/eR6Ty+sXBmah/7loJD1ksE8ugdqoZGPifS8FJ6iFeFiLbI0z3zDws9Mx40u0q2ja8rOEoXTX98AQk0QQbY8ZDDcx9p4yWHzdJqjv8MimAtIzgdfH1OF4fA6B6P0HyjJihkwuFOYe3lzYapMsaY77xEBKIb2Jp53irJSoqRK1NZZECh3T5dfOCPZIY9P31vLU0DAdlVUzgEBZuS+kVesRhBPLO+b8OMySCi2ebi4xAuhAkIsZcdO0KNX7N4gQzEkRyFBWMvZSgqAn41jBKySI0nV/wAcECEhUWw203g7UjZ0JERbM/bAYFAvW0wrBIRCpvl1DE5Ildph2j64zgkdITBZ6txVRlQQBIZgbmtcY7CwIKVTHN4i6QKhNCxhQuWh5bYY0mXOh7LpDGonAU9mwtcV+OcNUgkQUBQMlokLkV5c5GWEtly2GY1gECRAiTscUlKUOGuN4ItRLXVEQecmSgXatnzcOGWSEqA0fwyhp6Cw443koVgmOoYExbkABPoyKVUdzK/xrI2LJUw7H2LeQTp6UCUlwf1DOP7JkzYNl43OVYINqMfUwIhMtNDKCpjc95btgJ3ebBFF1IYC6WQ8G+O8GXLcM+qFwxLCUhPidLGGC1J66cihXMU78P2xaBwZKHuhjVgS2T0MMc/sYtetskPgd/OIKNZDP3/jgo+7ZiSj6j7zjHDyoGwRD4fZGQUwzD1WenHS2jUwRJdB8QwmlpU4h8E1L5MBRfwR3h5O694fDIVQbAZI2nO8jwHhQPASPywEh2EEE/7cUEyCWgGRHgDxo5Yt1gwtMqRfDtXI5Fv2kE+UWT/vAEnzWDCjCMb/ADkhdSzrKXzohH7nvWJRCWKCNeUh9QdmCIPpBsAoYp2mPjFmywiysnYcGzu7QTeQY7xACirCMPJ2MGsiAkRSFCwhBNYRg1GyOeOsRyEb5/gBZyZFE8EnaUlwPHZOcbsO7WsKbG496cZVIhL1SdP9sJKs0XLz39neEjrUs7EAJkEJBBvHMyAwGlqxfEvPDFCCJwFAIOU1OR4hYtndYzezisJuAiUkOlKktnxJhvjWeUfKl3V0xvLmMDN5inTwwULBSKAOVdZMrAbEu6PvB84iYGYHo6Lv9zki8bM+vK6fiYgZBWVR09Dia6xDI2UdZOBa39fOImTZzkJGnx1mhPow8SLfvIA2ls59DhOv0pjzMmI5wKSygkXFsvOPHWDNgRAgsYVzD3LeAsKcERBbWChGZng84INEaL0efOMJw9ACW2sBZGskm7Il5+7NsErsHasD+AwhlFpMW8iPj2MIAiBCOoFAOjJCISoTyH49YpA0SwzA5dVkhO7QWjnT7zYJdhMvCeScQoGaTp2kxvIEiQgTTqTJCCHAhna3esdQJ8CgSFp9MhoqTBqqqN/GMVdWSUg/QMkEIFcl7j/mWzKaASIp1zzinIpCBfNvnFAIlmBG3iZijE7QGU81Btlwi4RtM3t+cmrJbnI839XGsyBlBteb8mUqIt/HOMWAAlQahcHPV4glbIEYTEIKm5DodsdOKpIhTuyvzkjbZgPK6xaKIISnOK6UKNt/NTgNnklLl3rAnYlUEt1P1xqwgE6qa5HrFEWZIQR63lvCjfHrBF27NT3kJQxCcSHEffNB1oYIXYxilxAJO9xhTLcssjOsHCZVZASvFddYqmEUJ3KLt6xkFoswUUQTjFZIA6uKSqzgGCDEfviM4+9+jj9/7YOOPQ3CQduA2T9lrIoQKdVWIiBYpMJHnIghLRHvRrEAW4OgP+YFc1QYiNIeMBswSJ0aBcxWIDKUznV8mnNDnTsaf2yelE2ssJekjISyEhNETldrKHSelW4QqW7xyYLNZuguJx5BCzSGk+TAgNyZuH4Znwy4RQkEOadB/LrE6Z4IoKKUBupxvwF2FH6fo++RfMjqC1PjU/GLJAQTERzcj4ET1jtHJcjgLw9KBLvAkxBgiTOFm2Y6jBMJGxyExE3CdpSMfgUwsFPhmkDyaPPswpIUEyEjljNXAHlcnW3dIja/Xowa56Q380/nHLGl1MUIeJ9cimD8gcEyXsfLB8MAQCKGqMnuXeNHFyyyao4oniweVa7AkDJqOcXraxo1YXBcXCCtwsTZXtjJ0EauFNiPKJgiIkiIQnTArlg+hi5GBUUjELCDuBlyE0FWxEdapdDjPVrlTYPHkBOcOXCapUAW/GUV6yJnU4CPJgxlgiMl5vTcxOQUCgYNwfH6/HG/rLooFoVwQKoYbcAEIi5+IA/lhUtchauIfUOXBGwV7N2uH6+ma/3mC/y+W8S4PUaxLP8AvK+nBQQh3xbikEy9d9ZQJDEa/H2/R2+9ZE0NGe0yiOwOsJlHANarvBZ4Y68skBACGG4iKyVQpaJW9X8YopABTTeSECQVDtuNXh5syDiLzfA3hEXVMOoNl5ZclG6gdBCr73jCEXlmwQ2hbtXGcQhreQ4+pWIhpiwNcRU4JkkmJXEcTwZxJDZuhuF++TyESkIghsQmKCdqCEKDre8ZUoMXEMJM+5xpUFp6gizx3kk22LIo8+JrHiSB0jxvwY9ARJPSLhWn3jOakafHPOQRcdaLV45xSaKkzbSmnXjEgmdgvoI+MnISzAqDTEVxgssCm7NYlpDJUB4TNfGBNpobYObyEBHoALfyYBUWSILkiZxXAFIIt8eshBogSIb9ecI4Y7c9lfGCtZJiNg/1kpKKRogFK6FvvGIhuUFJt/pg0hE0wlXQwROSG2gkkMmBIoNk1NLTjBBHVaN14yQNtEkw1uajGpVPbxdR7jWLiieg5byYQWFIhjcveSAGy0aeWOcmZTPRbjiY36wfOBdmrmjcc4EQirIycRw7MiJSXY3rmNODXPskQL/JyFDsEhIbjxGJD2Dr4eNV764J9n9D+twYQRxDQ5loQP1rHpRE8S8z9soklEgPfBlAKmb/AO5UghEVXFM4AmACQF2xsnIUoREwuTdH2rHFr5k8vhrzklkvolUmFEpP08HfDvxjohhsCVgjMopMY0mU5X8rkGzVDgCgTFRzeGs69YsU0ckgA+w8mBo5gSQsUIeQ6faYaCtAkOjk+gyNdym1ZAmB7UvWOQEjQFSHFMTI6TeK1e/gP4Ug4xdchgMxwszd+6rJMMSiRFvITDYinJng/wBZOhgxSZE0eOeyTF5I1lUw6Inzh5yTdzKDwiVkx52U4IgQREjH+1b3l5YPsEA8uIcziUkwIeUAR+A7WRExfGEGKEBDvGmbnhrDdkURdBIR+GMRhMtAtk7ESOhOzImdSANJEK4LhkwRzv7wxr3mNKtis9DCwCYGJXt/tjAEK7ciBCKFgRoWHepjHRNNkB7zI870cjJEmgzPkbPePbb0lPjEC0U6IIBqUqeQ4w5DQEJnwstxeGCsUDgtdPlznIhhiXobXgMG20xEyhhLFTl4xf7kDZgpQNVE4kdRT3Nw/cGDcliRlm2+Hj5TmjDxA/OsFqCH7OTatd94VSUlJBkTiGI4xDKkc47EEkoexgpQY9HVAjaoCehx43IIUeVMfmcY4ppoqkiTauVvzlJIKidX2Y1Gc8CKrvnECJ5c9En0zZ3DckaH8EHeEqVCkPh5dfVnn5DDdwwvixK6dn09sfD5YrQ4So3p/sweC2RfCqr4H5MWqQeCROa53OUtADej9KX1hBJSZmt5JeSApAEA18pOBZmAIdiQT83m52mV61kRKU4gX4U+mKAUNLBjuP3wCMq9IRES8eowAQwlBA3v2GII7FC+JlneQBiJhBmU8cMTBmXCbB4R3k3CxLQsMzxk7ihwySz85dIRCXZE3Uwc4qZFh3NdYYBQpmoKqrAQArrjc6KkyZQoJibsBPGRU3sSROBGFNogqFrWklYoQQDQiUd4mqSHciccOLcqEpRE6dTL3kD2AlN/IyJgxAyQPAgTbESCVcNuuWqypSvJahURccYAcAVEDgnzeSBIgqKlQI+cQLBIRXf4xC0Bikli9s4V1aHlzUcTiq1haRk/PE5QtwxLRXvWIDAKvExBvid5Ctw2hu1CdYTsA0dvc+MmUK2JBtISNRkWLMMrKvlnzxjF7t2TUyaySUiGwlFvKfTD+8FBPtH6R/W4MGFPYdpRCZEaJ0J/hmD7YYaXwRZwa0iVWPuyeOplG5F4GNSbolVeHusGNguxpIdkZEiUBLlIqm8GqKoNcL1owBE2zVlsvOUHgTNNAvwt8ZM6lbhODxhx2I0gAW2LksEsfBvFfXHH+D1mhRTUEJrnrbhIBWbC1WRssxnp6CxB4lHy8sgQNqJL53jIlZB+RL2R5yOcWCQPTiB2FPDJzkHwxDc1a5G8C7a1Pa4QXiMeUb7w+NOi/V/tWRl06FRJLIdHww+cUt5eFBfIyQuwFzBuEFscXFaCPSQEvLLij1k5ADUarBvJLUXaVKJE+PnGgeaB40YGwULX+h8OPQBU4Yae2CeB3jcwZssVB2ofK5MkllkaUGeZ2+d84iR5SquTrlDISy6HOFM48+MQquuSCMQB7IwirUcn74o75P8A3C4hT6CesMzEciqULZwKMzUc/Qfu5KH0Lo8GVvGDmHGQixwVyNbn/dhDuahdWJ8WJ0OIl7dluIXDia8ZI06PoMi3uKAnKYP2syUTrzzkbZa13jyUg+cJ23rmcOUXmMukDGHj2kR7tJdP46zSwUACbDIew3yuGDAI0iN61hJKkqUcL198RBLJw+n1xcyBQA2qxBiQ0cVq+r8q94mLuVsO10/gMhtEJJOsANLkI9sBECIADgkvjF/xFKfkYg9kGGj4rUnbTRPQYKpSir8edZAQu9nCURxj3BlIqyh3q8esj+cYURLrayvzhViIQCkmfxOSyrylKUwExrfGIhRDlJEKYXvBiBJTsho54jjJIM7liJIeAmqy8j5Kc6icEt5WpALsDGQRKDNrJ7g84I0sOG6JiI/GMZMtjNs8I/GAtICW+Ndc4ghwKop22RlJISkzFR0YxNIJElfS4qJm3ZDVf+YPEJYJWUwyBzyDRJVyUw70EsFRvicCYDBZ21WQujaKx5N9ZKUhzApn0qjCQwssoiDjb5y0U1AM6VZwJfVh7muLredIVJyLXJ84gRkRNL7av2yhCJS7b+n2yBJnQcJEzGCk3bEkjP3rIM0mVVK5rIiSmkg642xeSlSQWqJmq7wQASd4I/8AcGBRJJLEKnARMC4FMlXOANoUqL5ERvWAyhIjQS01D3hYzCsATzmuytSdNd9xLjK3GxeQN8s1rvBWH9hxMTJTNo75Kl/KZNq6LFnf8mF6NxV/i8EgJInhPv3gYIVRACLmqTWJgKTLNuIYfN4pC29g38MhqmC67D078YXyieCYEcSuIA2XhMFJKCUKL4YD8PDLfgkE9I3+MWu3BhH2fR98GgY5ImUaSgsSYMXk+stL9PJw4NjTcHBER4QMmmHy+MIINeYyYyMhETYnOHR2EoAZX6B5jB0SGNp2IDmd5TEPUciQETCcjLQHEuT/AFouXhW0ecTkDKAfKYFEBqsXggC/4ODKRoNm4KvIvphZFNM3hCCjN7cOTRXGQkAu6Ef3jhYYOOyXs18ZAx6wCRTWHyIkNTPXSbMmylvC7QeMRP5CZngvE/64fByqYvQKEwcRkWCUiEcHj3jRxn0fWCMTIZTg7nNimesmq4gUoqOyDeSq2VWALWaDWJEJLEf8x0qhB5mRhctEt1hyo+eX1hClesNKhYBx7QWVwVI1OtZ0N6xPb2+XAlJr+azTDHN6vEAQkPWTVhLwqRXM5NiIGZ0V3ixUVjUwPjEOoBtPrOQgjJAPbBQ3ZPLTBB2rsE3MD2ofeyJCj5HxXrADTYWlzrGhCIFiXzOu8mIKcBpNfdwooEjBXxx7/wCmFVEROA6Is+RlwZ3EAeBI0vyxLmEFJ5PiHduS+mNo1L+y/XHy1802CcOx8GMmUX315wGQa7T+d4Gi4JxIlCrRNrhOhBSEz371iCUJiN0vjf8A1lCjBLMK1qMumkCRJYkSfycSwhSSCKlFsZLgDDcUZpWDS5cAt084DW6CSy5ZXbCGxQCEfGCBWfP0ecHQJpsXxlWsJQ3J5T/WDARuBL+WS4dhdRGODvBkgiYLCiWXeKWRI4HsI9ZQ2V2VNzeRxD4Ev/MpaAhRt7xSD0DXsJk5CBguXw/fC2k5W2RIm0byXFWFz0XdxirCK6TfnX2yJ3gIgJbKpbnIZkdphCvh74ziDS6C/bfGKotDhSNxtwZBWobVS5fJ6yAOYgZiKNt/vh0hFid7KiCnEazmz0LmfmMYWQm7NnnhxEOgl7CaLXXjDIootwjZtgGlpZAREhvJhthIWDx5nFaQmCBUuiCsKIjRAaSgS+jBS8B5gG3ok5ThoCM7sHqty4QGBX9tMFZOSUljk5jrFruY6m8OsNKZHfGvOJ9izosPeGSlFgoAzhApQ2HXDHBDgkDI1HQ8Rl4heSmtwL9sjhqj7YKCLW+MFXcdR/BONgFQRRG+jQp4+zuxkCjdCregyevWogDyDt7Z6GTEI4CkIsUD9JiaMPiLiAMeKJ4cSZizZlgaxYgLy9gSEEAkSdW+Q4cJSbjbI5+TU8mSd+U82ICZtXexhx+dwEKeT+DnGCVrJNQ8oiOwySBKBlHIYf8ARrKwQDAAAN8Vh+J044MEJF2IkI+ErGdb4ZINkUIp0mAoGlSMXASDUHGFDk7xFOqxya1/O8ldAPRFMolURI85M/KBbRLVBKK1bqAVoWFQe1vq+DFYLzcoH1E+RwCnZUXPd5SBs9HxjDyn8jHi5Ch9h+MKbUkxlapMqnGPrLz3wx8OFZEKDyxgs1MtgUyAAhpW/iMCETE8SffFF5L1S/GSUkjFQUl2xRgLq37TkqgMo7q8UppddY6YeWIAOVdYj0sR75fgNvA4OhegYskn/SGARapSXSyL8jDMWU+CY54nGRTE7WZ0cxzkCBfCZN/8ydoGFnLjafysgQJcnzBRevqzy24BZs+wYYhHDgnYTTP7svNFzFZQibz78Y6ImYxBEQ79EuJ4jQUndbfd5EhG7vdcT7ciFEkG9TGas2RevxggqMDSXOLtHpEv3xhT8nDZHEJtQeODj+oQ7qyHSX9spCiouIomdUVjAtWpkSp3uKmMGhRWQQDZnL34NuFqpDkLlKRBQ3LiVjZH39/lyr6UcHWBAwHxOfiFb9awOPQI+oyc5BNFNHTjU1KWgNH+8UGkuRQbiIjh25rlaL46MEdHB4MPNc/HjFxSUBEdzOEzXGik8/6Zxjp++mmTnAAVFZK1YDGMGAhoecTMPXWEybH1JIbjEBBAp4Dt3FYmZ0Asvv1GMoWWZMvG9VmgZG6EM1JPnlxeUWh+E3NV3m6AyDcPe8jKFbtyQDLWJSKDIxJJLAusQJubOI9b++R48mRUPk+uBjliePsNO7g7wxlabJuqFeKeXDUWBBNAAMJKvIP0P7TjkxglkjxOj1jxiS1Yl4fDmqiTykuSb15cRwSnBK+MCEsqyqN0k3BglshVTUDuMSdtMUhu/PGGIHDZTJxb0ycClzk18mnzh6ZglfCqfWS0Ug8C/wDNIlTWI6DxAkWJglEJnhlQtBRxLMXqBASy0/4FTZvlZbGDBiUfWCyYI2vEVLm/r1jJM3H/ADA5LMJ/UL1f7ZLbfHUmS5JHrDK8kQpfhL2YVlkAZQNshPDgPyPaDZ3T3G8dftIbkmlHE9JxtL3xrLKGrg5nICEvly4Yr/WLCDqgFGF5gngYHUIfBgvh2QRJvPcV+MVUuQlAHblq1SH3esNyQlEUlhfWOpojGESL9r5cjodhIQdlg33joPlFP+2DmMTxRBgaj4OcdwH0yck1sxbMFLys+Ic4b26zhKJeB+chITgPAVj7vxgrMyGeEpwBMXb/ACMBoe5XGDHpbQIxUNyIwd43HQ+mq9YuVJYcfOCCFv8AlayU1vgxy4QX74/dlISqAjq1L8PCPsMRAeypeYt5XCITqpYOclHVM/G2SMLkXsCRfz0YAT1AjlWI3eFUyyK3Ml/KveQSzHkBy8L4DFRPa1JcUKOj6s0hJFTBETfoZHNCq9t2h8MecWTg5cW1Nb1AyRTE8anGJkrf+/jGlSbXrWHGWC5+2sdlglEQyf7xSSwSzJUwQkE4BgLLCFz1OIFEtug8y4vlZJAMV/ZP75dpYssa0p1hUhS+8SQokPeBgYFMF+zguXA0AeM1AVJ5nKlR19s1FnnGEz6MNcdxnk06MEP+v2xZgtvH8v3kVvVB+v7MEW+W/dv4YdnJLafLnBsL9+cBj7PeLB5f34yw4TB2nnFXQ4DowaICFkiPZlcR3t6Wtj65wGKIjlVJbvc4SWpIRModUzxgg4ISFh3BviMsLIR0IXp4ywGG7DNHe8AXQHkoLgk3gDaq7RamdsQbuHAbvntwUgRaUTBESfWcS4QLQDey5C1Snnc/7GM2kRI2+kf9A45IBPbOUv010YMwZAf0U5P9pMTDTGQx1thA/t9MfPoAq8M+sRAaWBccP1zy6wWJEtjCJiNBqJF6jOYABnTxP4zYRKVhZFxVRhUiaPaDd4JPPvDQQtsS6ZHX6hEw2HwwFxOOxQppWSKexIyTYpIolazSIC4ayAzwigajE6nBn1kXgIRLmphgBWjRrWElJLAA8q5MmtFh8n5wNBmBKHwJYdUwCuiQEBEhE+iXpiKVgzHaCY9qrLpnCIISPQyfbjCZp9BJB0al17OUoK1kAgTaN8OAqL3B1gP3nrNsno7jHUAv3wfstlniPlgICBpnTHNYzaVlA+OXIghGX553gEFIQiHy8/nI4wieAVoFHDEEmc0+BSgNbwkF0cbxRsC3KJHqMU3b7YwkklMmNCVCPuOQUPpvLwnApLVVnqVipyLUOkFYfl6YS6/dN5QdRrv5xQhaOJ/OOgfWV/bIUFc4iBBM6eg+HIlbXIC+E2+Ni5G2hESurAbsh5ayyDomR3WH4jybxoxQVvjeEAmTbqciRVbR7y0BTBEwBqcHZvDadcF+GXxkAbkALxyl5c1k4CQcQtHv6MjnWEwny5cy68Z1qE3a8n5jqcNKZEUr09VxJ6DJCQ0L8FY8lxMLlTBiKPJPGCbeBclnEneIwdk8dfnCJSSyP+Zfbnfw1ishe1cER/vCmUAmY7cONLKxeLc5Efd8cYQL2KfccZJNCZDQL7fQyg74OvpkxYixJn4xxM2leyLXyYGCSfoUbf2wHPmmfSZX1wsyDpE5xwP46nBgUS3BoSIrPNTUY9G2o5f+YgQPJN31lYJWTwMV0tNXg8hiHQAjwqn+ViSAvfrAgkJsvBNOdnOVyg5WVPGJkJKm7nhzernKOg8m8haA9k9HUX6xYILG4i1lBHIvxiQp1HsnVcZbVg0ylWhnxklULJH1r1F4Akmcsugrlfd4gluLOrHMo9ZNsZLMTbAbvw5MnVSkR4qH38YraFLMrXY+L8MUPGE+RCQ+R9ZHMnJcCKwjCH6z/ZcP0ccGAgcZyqcXgyIqlSH595CGRHm5vsMHMKJSp5nKLEG25Th5nBwUHcopJjI5KtHS9rm2AhNKJzc8mHOJRlG6KgfwMY4gl4dh+frkUwLxagfEl5MSfACgUEYyF7AHnIEQ6iowAg3SB65x1PBJRCI/aLxk2sEA4VUx9P2zPSuB7MFMWWqukR9IHvI6kogAAHg4yP8AAzMCwwbTAxRBBJG0EgPvClCRMlxStISRpO8TWBBQNJEqLD0Y2V6Q7MjS6PxgIg59J9B5ce3i6YQdQy8KQDkNsg5RmGJXzxkls8s0fnMWWFbhnnAbgKMy91iCwhEx41hmw0chEX0vIYHkychuHImp8FPJxqD+c3L+2MkCE/H5jJLWSQPjKMDtIits8OK7JutF6+S4byxJrjXrFXr6mWY/8CjWPpM084Mg7Naf3ykgw7/luObFnUb1fDDgM04vrQlv0beByUSpIQMjMTIOErhd2ylJLyGfIuRQjIahcaHrGCweCcJ03g2gJkl+7eP1agtu4RK8GXBabbcKV4vqx3XCYM7vfixGXGgJC5vBHZ8skpBBsQkGTF5m/GAXImqQaOevbiVEUcDys2vbbgAFqD/jeEmZoZDQ/nLG7CoR1HjBSYSderwArmWu784QlUk3LVYIpIdyH7ZqJGszveryOlIm1k8axf4hORd9CqwQvhU05RRb846OQgf53gLBUEHv/mDL+s3io5g4GHBJsg5Dv93Ik042OSDBXAieRrG8jtnm+aYf6gRI+I6+cJBOObNiOlcJTgmzkR4nDNLqz4wliNK8OQH2YtE5on+HGSZaiPE9YzHG1y3fo71vC58bbIRfeFixiXDoOHFkZsjEWBOROCQcEIvg0k9RWXf0JMnEprh8MLACwQ4Hb/7lVgdkUxVl/nHo0FpatdT7xZEtshZIm59IjJBIQk4sIaqsLMZgDLTot+Yw/L06W8cj0Y5S4Eh9fzPJgrCgQ3gPzgBWGUGAfqfpH9E/17/VMNMlzipyi0/fHG5FugZCruzxkSrnSK387wIUlMAMIzVm2sAzUKFNFuJ0DmomV4MOhJ4yGFCYsCOHQNZF6Mymuz8jvxWS0QT2P+M2pmQKYgHjucTDYGgVnoL9+GR6J4UDo/LWKXTSlkPAEuChEHgSBOZ+quCG4ihoU7H38cNtQMhbE41JVtDBMxPdaaZWUVnBdVA552YBG4UwnpuJnG+rckiHnGqIx8DwDvGkjKRZEEOWnhnk5ZlilaYTgvnFO4FtHa0fwjA1Z9WxNm34K94tMzT6uAA8RQreTV5lNi0CaA7GCIohGJMSdJJ7xWyysXAJ5i3F2nGGiO6184whDkTv5wYUVCOGtOJTZP8AQs/gNd+zAMec8GTzOp1kJHl6v6Yt++l19JwTXyZ/0OA5A8XCJ+CDjJLLpB9jh9O8LIaho7+ccYUV9J4pKXV9YVJHrqfBnFEOKM0r9tYJbkZQCvePNM0IV0KvKLeVxvJIlf5zSFJvx9dcZNwgMW2R463hTLLYABarGsNIuELPg/b7wMGsCUH4fwGFr9YYdQQ+hB7wTLQIXIMl6AMkUlgyPNCPZ/piInb37MuJ4IyMkBzOvoYhUQGopU4cFLERLIkvvAh4mG5ZnvE2Tx4vG5Fvi/riui5jf/mKep4N4iyCBoL+M0StxD3jSgktcoRxT14uT91xkeIIesRdkyJynx4zUYkJW9zjEkit4aeY3vfWGEhKNtHfnARcNrx5yWkcnx4wQiIG4eDFCQ7z25+ejjZiu070T8rY4UCqJFuMarkeN28xkgk9JnFAA7U0/hxkZEpJ+ge/eTwKMCjWSHaJseobD6+mQxnQePTitTby1gpIWocg1IxtsxlOE2Bb98lHcjrl7xsFWzvuJScSMKIQgueImd5EyKJRTRmZfvjYQwlgnNtfOAMlgRpoNWneWTtnPxGTyxgsA4fbZK9BhpQwkBkOBH9if0n+pw/WMGG1ZKWccryi9/bLgI0QQlQv3WC+YWDY8YQmKiEPL4xG6kCiFmeDLCLLVJWAXZSOMtuuBZZItv4wSoBAXII3bfRGDu459fxTCbTiCDW4b6Vz9cnjIIEFdQHACzlz3wqJJI+T0xyBREf65T5vyx3EbIGLoEABFEUayVRTDIMYFKXSTHOyB5zdEqayBJaX/wAvHQgiI+nnCOyyhwFAT994olijB5QqtPoyU8DanEEDAutOIwPXoQr6TKKPOZFK7DKWCQYPG6HJeQyRCoiJZk7WMQCMIaGPYObGlao+wQQQOSLTWCFAgFRLPH2wOEAoBvyr/vFRKGPeE4klIwSl5ajTFpQnSuHKGEWicBJRfpkpnVPnKSYB02n3+cgRAFQ2y+6xIABDkS8JDrvnGOoz0OV+amK1gnjN/wDuIAv2owlyICHK4wFEU6H6DBUiXcqBPRLklA8igRWbg4wgId00u4T5yOiSmE4Dg/fKRYoC4KUnEjAQ4gxF7D7vxk1m12/E8+Z+M2VojuTPs/AOBGaFlnt/u4vaEQ5P04x4CJUW6YQOpK++bY0AAgKA+2UzaZ1rdYkEzSREVeKwPDu74yUXSX05aDG1T/JyhYp84uDupbq8uIWagj4jAcRltF3kIFaIk2cRiye0fzimMbn6nAgBCrWlyJ+cCCHfq7Sn6ZwISH9pr5xTaIoPcmEklsTUYKNXhHWPyTT6i8BhW38eMDANctW5ufQqHGAT2lJOV+2RZ0kRsvtwGhQtBuT/AMHxg+PTEQhEecT1pCqfnDgDLm3/ADEYWYChaPgnGkoJeX9jecpYKaifWSEgkryw1WKx8L8icZOPeF+cuaU1nJU2RH1wtE75njDUJE7m56w0NKUJlN/VeIWAbSSyUB1+coqwS2Fc6Nv+YdgIQpcK1PuXrB3QhYvqh/xMKGztvCFYRgP7Z/cTCTBYMJTwdX51ithZSBJ0vlhLpQSZFGoa8YHmLAQjtHuOs0Uzqj2YKg+uMoW0iVfMpnCRpFR6gnSJcdzBMeUq9CMlKlGcz7lPkMM9Zlf3iSIcn3CJuAUNJnuMMZolUMqUThjuXjkBS9h5nsJUlY7AoWVAQFBJ1rWHYUu8ISHz884INEcLVZGZHX85wTAdC/U/fHtmhF+CNsHfA0AoeZrxKsA14jQjS2L7HwyBOxUypyrfs5P4KovuDDlfA0EiGxzML1yqUo9yw/brMWScqoEYhUTI+T7w4yIs5OcgETcWbwiMng4xxuvVGz4x1DHQhEW9jj51K98wwfvhBIc2r+XvJFONLx94MKgMnRYe3HY2yh3D3iBxLkSBZacmxOlMRkMllJhHlD9+cTR0D2uMOBGEU8arBAFtaJVnvjFUQkdFPM7xoRHA4R7RWKqURsHPORowK5QQn0jBOJRLLCwOz1hDwesRQg/fPnHszuoy0ovik4SgYCh7lUPqfLIEadig3Z/k4JBthOgMSdrBW25ODSEGT9cshT2ninLQ5i+qP2wgM9HmOXFJTD2/TFIaTOnn6Z0psJmk25NhtLbBtzGLsWOtT1koyZGpxO4YNTrhUTll39TFSAz5YHJJRRY2xqojCQoRh/IS5agNCD6Y7YGxxKWO2/DJ0SsH9SyvTk6M25J8Z9mOcihHhHk8YKThv75BmiLf3wKYUJff0x2oGKOjnEACkq58uRUtgHM9Ti4OUy4BqVNETXo12VgJai2tbE7yQ0aZ3/tghAzzvBKqmkB93JYRalnn1Gslw32+Xzkor49n3QSZRPBRH0FDJW5Oni4yAr48ZIhO3BZ1r4OCX2A80JePAiC+DKHKMWUFhYc1z9z5MEStN6Qc+W8FdM0hhiD+xGR+k5x/dTJzElrV5FQ8/mO8DKmrGVn3fzjCCQgET5VwBYFtJoIXy94CGoAHoXj+TjQwnp1KFYJ5DAdqnisjEpYZmSXgkf7ZP9C8t0yc+Ty42niSeFYKIxrJYsNuWRgCEAbqL7xGhZ05pfPOcxaOcFnaRAPKuSfupUDUw1HnEWLZEpnAX+BgEbAWBONA9z2MmnbIAncLJd77XIm88P41BAacBU0VBu965VynhSqFJuPO8leFdQbFNoK/NMdmtzyk2d6D/ExJgM86I9A/OEJDpv8AYMWvVOEGddmd6hzyfAxk/hqcqfKHqjJqSAHIQJHjGAfOAWHLE4oRDoQfxkAIA6y7g5XiMkyFOkrrBvJp4CyXzgThig5BR6j3Q9GckWYTQ8hlyojkhBnGXIl3or7ZLsosf3GSRNEhgV8YT4QV4MinMBUGrcwlhcWlMkHgKHwYGwwoRuKYY8lPLh1eBAAdBM8WyBMkq5BFxIzWGcdawG+6fAuDc2GTi8EfT/xjCCywkiWfDhBQvUqxrF1VjRxOA0XezldZJdE7m59RmxbmJnfGAUKTBN/fE9TC12inHLKnvkR9IwpqyyWPy5ygA+ba7xh7bTq+HFyY3JLG5wQFBmPH5yUjSAYzgHKBBq9sYwFI5j9ViyXlT7n5xYEGXzDt1/KcKRGRd7zcPZNF5wnl3M+4/wB5IzEt83x/tgkgoXucRL6wJb9OPAE4uhaB9HneMuhgB+5kYUo1hpGcUha4j98AoyO3gwkgNlTvCxwiU7W9xP8AsxMEq1CIFjZrBHaYxAr6OC4k85DE7jEwBFBFVp0JawoY1p+jH9R+kfpP9Nf1v9QnJnjeM4y4JEAIigHinnHBsRsfYio1lmK+l10FQ4xGjYvSfLkwFSpCxIudQ4gJlRKO25Tpn3lKKA9Dsel6wCYVAgBPqP3useCoBlLXcn3PnCrRRjnQ+ol5xcgTJyPJHjJSo5JiKZpD9sdNxl8ngPwXh3W0J3KUPm2NpTmlxURk+YHeKThsiJ1JFeA9so6iA4Rx49YD5EsHOSPPnnJ6ZfhB+MYmfTB/vwDJOz7YKk0hPJiaZoRrQCOQiLqy8QwiqRVJisVV+kPWMWr8mRXvW8gTKaZyQvwjU1PcwPbho4oka5E9jFChc1IPqAfGSBIO/wDJnCREW1Gg6MnsjYBo9ZvUkbyREg5lI9eXzgigHeKAMjHcOvtkVqs+/wAUYBFv6N47hVibj5wJQQKhrIUC3tKX2crT3R3JYTV3R1himWJO5aD6VmywcxIacEPUeMicC14IswcbwgCcYvRmT5yWCZ6xyXom4Fxbah0qf5OSRUnJrVY1BOiSfvGGlp2kb13g+AL7V3kFCTIT105KKQLSog431hHRHxADEDSsMcVhTQ5zaLJNNnGAodFTSJcTr1gHggoqSbO8BAJRISPnWMIWMtrEiPecRJRlcxt3inshqCcRQ/o4pJVQciXiF6tMe9X2PvAtIYpNJOThUHGgcVSrdmI1Ls0c5QYtp+cCFcf+ZLMPhxSGq6dq7vo4NFlo0jhwMhBMljwcZKGidWk5A2bb85YdHA40WDQiiQR3/v3jhJofZWIDET+MfUJ6fzglp8GvODoUSV5NOF4gekP94foj+kzWbyMf6T+zH9LgIOHIfYaCY+NnzjbIim0JRZO1+vWAiRWhibN8fOJKlLlvbS+uMJbOAWFUyzUMPOKKFEkRBf1+DnJBRICRb8v2wnIJOHh0f+E4GjBvl/jB9IeT4PH2Ppyx3cROyGiH4OMA28xR4Rt84wQzokRZC/TC8SyYSfnH1ZNBGyPMrY/44qeNr2nMrXvLBfXc4QI20l5MiddP4cAtGEfzH14x+bOPEfuHFnZMy5QR85shE2BwPGcrEXZj+zDWmnBZhB2LAHRMfBjlr44yKJd6hZfROJB2TBq/ph+QQCxMg+QyExG1olEfCwiA1sH7lGK5SOEZX0wCRoW877wWkzczuP2xJES+8YbzUq0B/DiDrzqInsxW+Xgn/QYFErv5wIsRBWt5KztFcZDY5pzFXOKglxjLNgMsSYOQ3P75q7kKns8+TgzyP1Pj6cYUHYeNrFriCD5y8nJEY8hPMJv5MkJ7Hh/vEwOUttRHdY6gOTPjAw0MEV55yhUu4b4nAEovSCH6YMWXEz0f9wyuIke6wFxRsk78ZxbUksHnEkH04cl8sSGnojjJ7mza2u3eePOTAqlAlfjuPH0wFLmJFyeIwSjR9+aycQVKa5ZiDHqUpsISI6PjHQI6jiMRQ/r3Mjn8x6b7x5EmIvZqkecE04dA67IxGAjy4AVpO8dF3My/TCXPlyZCI9jk4SWxPb5+HZ85fQQRI5xgJUdZrZ3zOFIBkLTzxkXOxLy59yNS7/1wp9ZVilpqp69ZWEVuJnAL0eMQJuEd1NPsxASUSJyOR/XrD9Yx/vGP6pWF5sNFsmFqXiUenBUdktsIwcOAIGBNtza4qhYDEhe/eABLEIyPQREfTNggiUzzXUYmptFjgJer8xm84EcqUN/gYvh4zrV6eHL9EwILds6knzv5xQKg2iWBDwD64JMKJQdM+ie8Y7RaDQLMFUvHyMBAS+xxhKBChJtnGIBo5+mNBfpx1haiE3iEA3/OMAZ9sax9B8zBXa5LsJvRaTpM210jteYr4ybb4LMjIAl8jxlqh/Q0+cD2MMsIGkKX3yy1BFZ+MAOLML2J1XGeBIW0HWEQnRHyczimZhGlQvysXMR51hr3nKCQ7r8Zucef9YS5mPsHGQ2eg94ZE+KpIcUfSK60++8rWlWib/YMP2/6zcahrARGuJcCMJbW0TiUpWpyYjt9OD3G0Xc1gvJ4B7NwhhX+j5xkQhO8hA0Ehx2IvpP51kUnB1/3FGmai7jgnFHeuE595bEWS+y9YBQgblf2xTNhEhoP/cfwvevtjbQ+O8JRmgMjNjkS4MIifIeHvHsFIXE94vFcuqsecQ8woeO3nABhEEqufu4Z5RMdHnGUCpk6Z2wafOKSGN9Fs1uO8nAgKkJmImcnoK0tOMG9grqhxkYJOz1iK/1hBrPsG67+rK4w5rCbMlK05EkWlxFec8dtxzWXGV0HrnEuYmQrAVxA4Da4Sxxr1LEJLo6GhxjFpc94kJY+RnCqJvj84oiZ+lZamziv9ZVGn3yM8NZoC+cgujWRVAmPvkKPTWRE+U/x8Y/2I/wzI/Ukwttz1hYynWzQaTxsAPnIABIwgNb0snrEVMdgiRdTs9Y3KKS1qYlCZ6lykEaVsXQucIiUl0Z2Vj2kUZAsr4ecTa3h7v2a8jBgohrpwJz05PFZOOtTwkJNYPBmhOCc2KDF1iDyxWJELIhOSeWkw3whk7hMEwVrF2QiPri6NbcPCzKixLs5wGIbUUdVx84jN+8g/wAkPthhwmySLWxMZeaxWooMmWZg2NVio8JU1ThXmiNL9W+xh+0rJvYPwGNsBkXofuwAB0ux2sXGA2ZEvfyd5xGzFd9LnvT6/LD7aYplPVvwye9xoM5tfWRZJB34yRRto6N4BfqcaJQ5UQ/flhTvAK2DJ0BaNQBxkl50zWSInUzLAYB+8O33kIEhmaP1wOcknsvCeIWa5cYQTyRJR9sC9A3cpMiJ066yNVUubyaKt0YYisDRreEZETym3TjNqEqSdDzgjGm4XNxzigsTosyzE4BKpqOcSgB7l3p5rWMDjgkc+8P40CS3WnHTWIbQLAPXORDSIjMzj5JN+8SrQii6nLNhoaJNeYxGBYW12/jNxMczhmrmSNnqMj9b8MP5yMSI5ep6whAWT34lsrnASIpiaIDe81SNsu8UHjvj9DWiYhCRE5HIA4KyPg/E0+MVA11gwgVvushfu4849tUUcZaPkJ8Y2jTw4/JBlIT2HnKQJqyBPRpwoOJ5MhSaN025AA28YlxXl5yAnWU8fnDsawSzw7zV11bgRjnSa9YyFRLE7Lwk+kee/n+xOTk/rP8AhJgPJkaVRpeAPuYiOPDoimrVHzkSgKCb64L7cFnoVdt3JGHhZoiStk8OIZLAkXjfPnvGW1RRCvgltjnHDLPkTSTf9AecmV0Wv4iMF/CT4E6C8GKWKzBiMwRpkP5wO+mjlnwLNzk0EyrDxVV4I3k4JJadhMrzDL1T08ziDdAxT8vrFTIkMh9tI8vtk7OEwWRLl4eK94NWsApgjzcUOEGIhZDrwy6k5Tgy/B8fOTSKPrE1XlyGMyNR1jyk4XZD9lyLKtJYojzoAPDjGiOphBHRhWgREFQByxAGEhZWlK8BwGJgxIyz36wQrCLpM2dktP2kk+c1I23m2Od3iLU04iJGKKP4wgeF3P2xaJs5MQcaoG8UvTntlx0K5mk/J8Y2Ph4MGtQ3H/cmkAGlnGb2M6TwYyphMWVHhiiVJ++UIWsaSKnXzkytAjwNmbx1A4KQMyI/6x9ijLHIH1xcMU2qvfvGLooT8ji4hYUa33jQV2CWxIxfV+0dZJRpoJOseiCSzXnIFCKNP/MTO9RYTHo5yBuAhPE5MZRJJnOzxgOqIud4DDcvrWsNi7KB9ayOFo595ybmp8uFHlesBICfMffAEB8YcdZlHET5x2gACSbSlDsVGTcVRIupT6MHvBlc3HT0h9mOoa/QeFmIBloRjojf8U4rIEPGISJLw/bKWZqcQidcXinbvWNNtYgpz4yBSA1eww2iDv3kNG+4yQtJOhMYmRPPtyBsviMr678YgYic23Z5vCHY+LvJD7DjObauzDpyEo5HHJ/on9D+h/wnBJgfWG8jkgA6RUxfskxBEpWCw8yb8YxciJQcQ8RcYAKbJm9VMmSlKRBLHEWiKlxYkpDKubP95pnd9NE9mWwQgQdh4l83jK1nM7hv4tPnNaCm9AHwB6vLDQuBYAANx7ZoIGcgpq6SsStHCBuawpJphXLwb9Y35QIGKdNXm3jBhRELFw7MN5zDhCxoJcBEuqOJy+Atq7EBlivKI5ciDUbQSTyMksvhorona5NKz9A9GODGmby45oqbI2YiaHQvEL2JfvIQhskCW9Sp+GQk14X7rlpRDSUR5yLIuqT9s/cmTOPZze30185JkTS4BMvTWCUMcuJO29OBBDoF9ZI7pijKYuY5JXwbwKEN3tUnjbJEREHZh9pwxzV24hc3GTEB9L/GKpL3fWBVQRocaexLKQ04y0QTYzH5wIGfSf8Ag4CgfITgoHhs9mAwkLYkcvrnqvkhrXTDEILEqrjxGAKDBRLRHLGImLQj18ecEQjxSRyZxCc/GSwSQmRi34xoEAZuIiP3xIEq20rCuQl/xw216zUQPeSqJtqE84NS8k2eEcOA7uTUcZ5KS5xUS5iXWMBlmv8AwxDo7eP/ADJJih5TPyxREWzAeO3AKmzkUeMMlejFIa9ncb5y2ARqJWQlNY5DY0RBPUViKH9DPuRhCRHKe11o1p4fwcYUJ/rAVxHxrDBVIPnDhOvxleHFSrzrOJG/pigJYc4RgNG+qxbIhwGCQaiz4zaOGTvpwY31PiMVhXvWbzp5XB9ZEnvafv8Aoj+h/oP8E/oTAQyMVJETy5gFEjMqCxy7vo5GJkEViRniL41iiVjmoMBJZTnIsLDHNQqP/WVCwOx50/bfeKQoS8R4FZB41KB0yvbflkhEG8KMdQkC2QiY14+HIf1psBy+AFvo4yJEEwlepo940JXYkB5H0aZ7J/C5/OnB2AsNQ1Gx+TECMckqvlXfzkuSC5G97xDbxiiSmOzHyHGDWNUtp47PsdYWkeXGEn9DAH8zhild/wDuSgSZ5yqzrF9p9z6Y04wCS3g378TNpLwTv4DLEIbH7nIUoAQDsm8APSslBIEcJ+2VnAC7d+B+pggEqdZBht7yfcx3eMIEd5sKl4yxIwhhBICmDtkIWdEw+zEoBz9MGDo3olwRGwJv9sk7uTf/AJipdbjdYApEP2jEgjF4uZ1CveNco7OtOAG0J5S9uNCQfkTeLQGLTF/uecBfCA8eTIIFqKJ4b6yY0khn7OQ3SGwaXF8QIQnMHxil+jLeTASgETrLUpLQnl8ZKRyZga20GQFz54JNTjExOGHXFZLCksyJDjJFNpI/9yCQKWvSuvDAQZp54cmKlm4yU8nj2k4WQDBC+Df1yASLOy6oxrsWhSJ18YpuiITze/bkIsQtnrrEQITGA/lxgI2Y6iXWKnnE7FhmBIa8OIjD+gRr5cBP53ywLHBonxzkJLfjFGyssQStHrCWDg0ZaIJzlSu8ZEccZVOSITR1E/fBJb3EIctouiOnzjIrGi+oz/jICOf95o+7EPl4ybkZ5BM14JHS9+nH+1H91/rTBZ5y7/OKLZ4ajJpLB13QkfgycIZWC+QsdYzJqhwmHdz1ktaJiWfy9YLvAOxl5J6xjYEnSwT5iskVhLDRG+Q3rFSNHQf/AJuT5kGAklmBzZPY84DRADiXRV8Ex3kUQ4xBVmV7XtMgb4cHnUIkqvlgmJwUyc4Z+2LxJwOPz9cqYD8hfwP2k5wmRbdCVnNs+y7wVAsSbXzGQe6ecTHT27x7be6ydN+cB8tD31+cd2l/iq/GvcyMSQdQ08jOAo9k0YlIRdUdPgwUldMYqSQJjR3rdH+A3konesGHgrAH+vGQCNTzlkxeoMvBvvFNmg+GcVbsAm3XRgYsSZjX1XIdoXwTrzkRux4P9YaMyfVeAw8K0NbyekIeHSeRswQEiJEw16MHC4sEO2R4+k4Yrvh1PvCadvUXfE6ycEFRCQeTJg3bYj98ASDQh4mV+mISchI59YMoUTcxf5yAR0gSmTzil0lrfH2yCBu09xQbxVCVS3Z1rEEUa22X6yJrsiPPzk+c2Pi/PrN7DMeP3xMCCxxZo6/ml9cHJopKPeDRO098ZasoPLzjKjm8z18ZCSSzo+VePGI9LU8vMPxiuTtHQYELEzM5VROBHEl3rwxPsvJ7RYyR4QoXtf6QkvT/AD7l8YZjY105NE3v4w1Ew6lxnaZ3PrHRR+I1fjEoc9Nc4QO7moi8iS0Liobyi9PLkGY+TEkRHh/5gmhh1jIAvgbvIT1G8Znvz4zoQdOAHrrFET4dZU/GDUox3dMVqHK8P9E/1mP92P6XARMHoB7V5DgUqKpICmuhHvIkwVmygPnBaLi7cRdnOGoM3KCYYsrrIKpWSCHcGaZCSBIG614yc0ebTaMRKxcTaHsq5NPkyRwxqpLGl3MQ/wDcCNhOlbdWrL5ZCCFaTOLCpIkYDac29GrqEkRM46ibAb94SksTrisO5turyWk2QVnF84PtwqilHwj6k6xTuDIlr8hPrIhJ6A5wTvfAR/HEQZEOBTJuj3mttrhpMy+cf59DIJPZhiwmUoNHvJl9qSq4wQiEn67nJKFmXFGGtAE+mQjRTdkj4cVMTG61m2pqiYxSet5awNQmOqzoNOFYwc39MJhq/d48Sg5CuN5uc+/eNRPwuIjrju8Rprjzjt9Uh7P02+MD3IRMG+clF88Gn5yQnnXWN1pmIG6+31wASn8ecg2QgJNfxnGMI3suJ49Y0JoWSdsX6x4JubeSHIQrQVsfmcEqILk7jfODRYLb40ZJAMEQd5ALCRuFD742VmSiN6srOByWuQ/GPoIBaJde18YtZuAiDpRsnzh6aha+39hmsONB/Dk6dOCKQKF1jkQUufxLjQ0dFD7WPtgsOukoDxOEoa5efrgdBxCxodcTg9zOBd+AE+GcREUqGjrm/g4zQ0nIpClXLg/iCVLzkKd9ZCKkyRaUhxZNU45jFhHvJn139MuCFa3+n7sYwkwmhPcWcQl0mJpfibcmXZETWKrF4DM9c5JY60ORcBMb+MmhDWzBzETxi4H05sRcc4I++XINoOsiWvsuzj0/o/5qYb4TNiPaeLk77yMDMmgkHIaE4moSJ7QSmeKyIx2S9REBFw5UUTBhUyaTjIGWgdkLHpxGC1w0tn8cJJg5YyBPxifI85I40f0H7nnLzEm6Tw+mw6UxiCVAHvbpTn5xKgPEB7vBB9DzkZorWRufYYFxCVQT/vJhmjDDFHmqtuEYiZTsST4bYHQkPJ3HYn5yFlENM111goAuJFnkuHsRAjudM5b2AQsnSem8VBaTVig+N8mITPGsO4VlI9PWMpK39aOsaJWU3hcDF4swukKN0b9mATD0YhNvj44wZ1rnIFK6+MSpg7/9yGmueZxtHHnvC6Uc4Cyp4QxApTHBMcSYyAnWsXE5dGSrFDqaPZQmSovdpQJPDvI4ZjgagxNiXTHJ6yhJehyj844QsQr3zONK2h0QH/mHGZbN2Nv2x7G+rk49d4Eh1NERM/OECY3JOl9YrCGknmtS4qlC2tUrFOJTyFmyMSKaTpUbuMNFrRNeZPOPI9hZWsn9wkY+jgs6QbH4zrEAHGayu1QJPiPzkxnQ41n5dCf7PGBohR8YNnuXrN7IyCTfpOsGCl7hhPvg6MjcBH1wdwrFE/6yVgfVNYvA3uPOO9LdFziiYlXfvDbjTqpMIZjgKHzkRr5ePjHA0rjAtD/5gvb++bAsm/8AmC6QF3+3jApsB2g+1uMlQu7S/KuQOPaI/LBL6XeFolrUYJboaR1jGtBkB3vH1XGELGl5ySRy4oQaOMgvjrEIMbxRLupy2Zr8zhyf84SZPpDxH/W8c8qhuG0I5nPrJgLQwEMG71LjKJRgnlJqiJnJjCokESOZb1gBEJXdbSovAeQSgUSXJ/1mzRNVQXI3igNICDgfB+w4xUaSq9DD/D5x6lLMKwCjofNiDhQN6bPODET5K5FAeXHPvC4lYHlnAbfGDYxoRDoNfOXIW10HA27T7yYP1aJgDXWbqnBMsDOqRdKvRihPuegDTHPtiMxDJhdTpxCFuOO2TftcEOOHAV7NAC3ciHxj9iDGkPy/wzV9zxlElzX8MDoYCKwm+LMZl5zuA/bNZykOPljqfOKpSF3lT50nA97PDOKDJcTHNZ212YeCuXKIggLx6GInxjQTh8XXGORWls9OLJ/zvGLxcK8ZnIA+CfTLGdLd/TGEMTr88eMsRiGu9VmmL+zmpzlGCT8YxFZKZSxTrtxAF0iOGfEZACITcOf/AHEMTNqA39cDnfImmJ+cbEJ4lWCVJIpHn3gEFw9Auwg5cHeQHDdEiiKR7HU4j/XoHFAfIn3vDijF2BSkK8sjhDJe82cak/GAdhh5wpSP0tdJdTOw10F4JVPK/e6HifMZPEynF1hkyB7H+smMQr7cd4iyxupdfTABMxHX0wuJZQ1/zNNCT84gZL5cjSMrkwdPBwLCQ/7wmYeWf/cJJ4j64q1ZqX/Zku0+J/fPmN8MJK9KwtLWONb64ySr+5eDZOfGVFfM7ypT7cZzXevjKmRsMspPwYPMX0Y6HPBgyJx1dtdjw4q0nJ/rH/NcNjCKU6E0T/DzjFyJFmWcMgiWR6wcIpICOjeyrYUhjlIaSpg6/GDUOQFkikR34rFTAICi7h05I1iA3ZQgmUG9Tj3IuRFPwvmVOSMRLwrwmhColhQA58mQBmaAe/o5+Dl6XOErqVfOD21YRa9IJWNU7wKwypKWoI09fLi1ExlioUjayp25ec8SgwiQEAcZl1iuLuyYa8QsVjgfYX1O5ndzhzz3Lil60XiMKsJOjRHbnJRe1w9fGIB+uAeAImiQmKIYldqR8FeIqnESP/cKHjx4wCgzfeGHuJZNIt5/GNV9HfOHPvjGkN84ve7jND7Zx6HJ4JvJFCYdecF6efWXTNjGLDdcDucm5o63OJKfn5ygJfiS19cJJgCjEwnrzjEhQiG/xfGJYEN0yLqQyqjDE8w+zjJFFP8A3OCah0J+2MqfLXG4xUSl3EVoqfrlxaSzjWbFsOlqMvLe4Q+6nxjtpiIkpoOfvGcqrIQuW+TY6zHFhNiTtyGbk9sCqEBGidILETu93iNVZO0FIDXPY/GPJQBpDJcx9UYKAqYJITOogiuNYLE0MoIORA7z6nEbbof0ONxQByJkl6Y0es38K8GAgRFhAkCSImcEF0R/pgkJbvTg1BZ3NwYkRuNT+2BM1HvKHX0y2r+jIBBjvCYR9RkCnR8Y7Dhr1iLTcNV+MZHIWE3eID/L+mOk348YpkO9zWEmoXuP3xIugbaz9prF+HODp/3CBDxt5xkHWW+50VgrA40aDJn3jCG8mUi3+fZ/npgsxOXHBfgJcvD+GKqlmpIU0tVNYoIKJZLQxRX2wQsUUS5qQ8xksWmAEphh4fZgYDBWkHoknn6YoEELdBNDxJpwZZGAMyoHVTeMWAnJ0aH7bj01qCKSzEOzxNcYVcjTnqxn5cYb43S5QhJcZOUE5qiVAUB4l4xtT+Kpm4lrTDveGVIUTEVnoDG2UsKinNiCpY5AOu4PK7xW4ES0DQ/lTA0FS7dz4veQHYQ3W3rIVDJhhLBSOCw6VmJKei8liy/HeEoz8ObJpNxxnJ2W8xOBGWKz4Fe8IKq3f1yKWRlt/U6wMWR3jEo9vgMJM88fGMxe/HeIBy95LGCD6ZavBMa7y8Yr8fTGwPNE4kmajeTXuryjtR9Jph5Ak0lN3ihKNx03eveIJFdxqfyYw9jFNdp7nZ++KDTanmY6cYqZKLE/acCss1iC+IrJfOUn/UC+FfTGs2ETpMkXseOsWbZwmkIOyn72cuksXqhNtsdzmyBBNXsYueWSDsIBNKDgamN94dheI2gqwRLXrJEE5MgQ7diq1DlxkbQb6LEA1eQdUwDPZRzOveGoKkWNCvs4lNPlt5esCuWgErggq32e3J6I2Ea9p9usk78CW/on7YizK5TBHdtusBCQvFHvvCVEcQPtjFDPZUYNHxOAMcJ+MZp7Ys8L0neTgS+KzYSSb+fnCMwTwDPOQz5+s/XCmfOWRF98YCQ+DjCtfOKBnf7YylYAYCDjAHdLrB73k+bw7a8byl4qiCiPXOHxp6Q5+f0f8xycMsnDxTV+dZJ6ir/g/LgWpXXQCU3kmFAW6Txr3kbCUqyRaCcMpbGiiSO1uQk0AKXBMjzfWESEuiCW4qT6YtTs5HOezT5MnajlXXHvghcCAWzXlyXNRlIrXivJjNBDGJXpSAeeQzASnce08ZbAqS+guH39YrT0ponl0fLjYgJRX8Qfm1jVJHekkOGMc0oKJhv6hYhKCxH+zhKx8PETgNiJcTy8fAH3MXEj6dF+7JhY6+MZCw4EecY9GvjKOhK7yUamMVnyj9816cRJfQ5wkffGQs51OKVu6tyEmf45CbNaciKEx6wEWty/tigzB5OsYMI1r7YFQqcEgtmnjCywnheHDoyF9o2fSMlhmGCm4/3gLkLpvzlUJgiB5nLDBn2MNEkykfyMQyXR0Vx8eUDlySAtSXufJi7YrfCERdEHyjI/gSkWIAVJflfbIgMKgB4wvGMgzk6SgtZGknkDnB2kOKSeTD3w5EBoFWIJo6TiJRAyCSR21OoiZx9aAjCatHaT981YjAjpXQim3WANGIeZs7Xz+gxoDfvXUHWD5ybv3c5GyJtPsZRIORDBI0KdBPJpPeASdvN6/wBYRia/bAkT8d5KDjjnJTRDvzgau/PrBH0/TAEmuXLQt8ZT4MZMd3jeH3kbuJufGJ2+qyUSl8Xljo4izKMhJ3ilt9ZpyHnCErJc6w314MbKzHYZMFuPjzGHXHWAhueznBIrgIM0dh/vIwClH+cmA9ZSLGFELM5zN+/eEAAERuqh0bHJNFvrIjhXj4whUTJW1+zAEQIlkiIuNwHWb4czNgxt2sayFFtEWHBqlHjAWySG26d09nvJzUybxv8ARglzhNj2d+MbkQSyKC7fnJQEzDXjnfwrzhR0QSifDHwY446eH8h62+sb32ARqpfuXh2xAmu+I4yFFkJnnUdZBXIlzWBPR8nCDVBY7c+3X06xwEfH1jAVJMj4w7198FfbK3zkbJMa5yC+JgfyuA2fT3kdcLZkuizvjFrfZ6yaS+HFSoocZIFiHvJmoiD4xUAr84SrDLjN9Y4cr8J55xWnZzHOMWLW/wA5C3fWEE23py9TZsyAgX9Ec5ED8P57w0qz5cYu4wndGLqH7kJa4o6GGShMJHjmDpgwm6FYrJiZxIm2ViJap0ILo4Y3isMDQyXpjf4MoJYURMjqS4++QIIdUiK8jc1hBQJKdmaALv0vWW4DWB8gNtpjmlgp9RPwk+sCT2awBSFhG7dkyzWISf3Cl9/OQUObRWW4YTFlhOHzhOEoAPxjmGDgWv1ZQDGCMKThVxL04omYeXnE91qMltLGu8EldgvePVL57/5klrneMQHzM6wMyk684wVmTWRU8V6waAZuJ4KwE0apXrBGmSNZHe/DtwhMw+pcBE1dl6wABfteMhDfrE2S3B1nrWQDoyYnvvBqdRgTvzOSD3z3hjO2DBEug5PJgILQc4n+Y5MZOZ9l0/63kZqklO1eUgwyEEcqjws94ISOCDaSJR73TkVRGBUxD4d+8kVES7QLqmN4E5yvxCX8z7zzM2jFokThzar272M1+VajBJIZMJ2lgTGaJ6AvsBPziEpAEwz8z6rzlIj22J5IndrbvBESqiySv/WCACfMHZLVmsSkcENRcTzjMpiwKPE+3JG79zcw/h0yAP8APTJPrnCeb56vF8xF6woFTud/GGEdAV6MCfeAwNXvJSOrde4wqRpZPWscJ5Y0iNcGsmivx3iLZrQd4rEv/mJ0QCx3ksXzx3GCVOSK8YwreicXdFhhsm/GICX0XD1jIsR4eayzTbC+MNw3O4xsgtkRkLqDGCGnfznNMj+c3FK6cmDQRfwYdacDaMAdugdzkgAUaoQwBJgZyAsHYMDykxOKykuIkwFiIQH45wW80Akp8DQA+cWAkmMomMGkMcusCEN8zaKNpMPEYKYQ2ZtiuVt1vGTl0FwOJwxMnlgQDUhn5E6Ae8KDBZGZvLHFCh6f9wPAgXF4EIyZEowEaw0axE1OEmqxW1jfDeMHWs+mf4c7FXrEK+e8g0LaDDEkv7Y5Wb4eDBMLHlLyyGyLcklhH/zDqZenJCYNcZyW+KrJpNr0RWBEpGKjV/tgQXU6wBJn6/vjSmjcZKJ8t6w2v6GJ6rcc5Z4ODnDd67/bBRRb9sTyTpc5JwhOHRiSSs5dWyx/1kPKvG/Hf+a4D4pGg6d6r+KnD45hLtEauVeoyhAGAl4OdRgCEG0oExwpighOSVB+N3yZtJrhIJLsVyTJbhAHSLath6LAaMd2NecREax0u0ae8EQep8XIqcTrGEpKxE1FWMfDIhdkgOPU/wAnDYIUSanrBKlZG2DypGUQdpBsFKk1j6QAi2EMz84qJPIHzyZfTA3ak/m+uRWyFYnvJI6co3e/pkKjCEZ3hDNAlXEKk9n2uN5IaGj4MZCbq81QmS3nDqt4xp5yIkd6wlhiPvkOpuNdRgSkL1OUefOMnhjUa+2Ax5eBj43nN2x7xyw0m8WRIhCcY704CBVrlZ5eYyjGUx/rCROrPJjpGmv9Ytht/rEksgLYCQwat5yonyLCxQQd/wAMQUQkBakvN8zWTG2rUK+mnDOVgFmfQipcQoAQAE2wA94iCsCdd8kcP0uKK9MdXioQ4+jAMhamTDsW9Txxg93DNZubxvRQoSr5ciYkcYAAgwj+hXgM1m+skGsQWsVrDWO9JgVBUlHm/mcpNqcYpZH1YqMtaXY5RLAeH9nEbLPZf0wDIn669YAit7HWB+KnWIzy9NOSt27I1lqT15M7j5lwCU/fKOJPjBAubyVxEc+cEunrGAfux23BgIKeHNGy+82riwfpga++DNAPc9YXzM4MrWtYUwvFJSic5IF0cD92CnASBkf8wSYLMSRY6c3xjiAWX6Po4k0honaJxDpiAxRt2DJDNuISkLG4kHz7xQKClI65AprFALWs3TJqIxgwigLDxFjlJUKBbidnO8DfbDF3E8fnEACtoukN+tGBkzTKVOu6xo0CZtnbP8ctYpaxAUtcbntSzetd5NFUOiNKGeZrCAgiVSfO82db8SSXxfDKoWmv3YhIm/5xknxNGGgOOcIbfxwI4dnrJ02c/szZuZvDgbqsnQ05YQtc5Moue364sOl0l5MPJM8YsyPXGEtfOBrt5hyQYfrgneuWduMBGnc/tkzJOcQRM8skSt3ksb9TlF6TWA05XZveXzsxSyInnJxZFgt3R/0zco1kUG9+iNYDvOowaRfJFTjOSkpMOlBhyV2UQ6AKvhiaPDLCVF2UcGI+OamCftEvbb24fENoKfAc/fI4BDDR6cYIgBHGDjAgMAZGP6GUwGawuskGspgYgsYlJJ55PWCYAeIH/t3lG/c5GFSchE/bE7hX4ciL+KGMEirdlfbEQwtEb1855pwInq5uXrARGJbxkYrAh4eMGgSXWMA73ERWQYJpzhH1wQqb7zZMxkbYGX1iPn8YDca4xXO45xGjjJYnWEmcDmvOJ0sdGPYwXmuc50dj9x7yGsfJ4J/luAhvNOkeUDR9H1jJuIdWnvfs+8BtqY04PScqGZrYxurTzlDMdYdRvnd1gqViUNoh8Tig2AuN8+8ZghICTzxAYOKCQhMy+eucWVPmnOq5PNYl8iQJEBRLhMMLEkBN5WwNCnG8EQEmyhGHyeccjozMKPn5MBgRO+YZkjmMahCMq3Nl578qIQC/mTkGzjnTgRZcc/vgt3JvfffeIQMfW++byieechVW+mQTM+sOnnjB4FOKUnF4qoNc9T1mqmXzEZS+Dnz4y0HZz/zFK0D5MkqL7f3yEAlZ2x5xkPDqYjjAXd+esYNpGqxSAHz5jIqd8fOODodHrEJYh6wiDHkxysD7xB9AyO6QvpWZl8YRKaAUotDv1iKQhClItZVc3XbgVtklLCgbnxRzilqA0dukiHiPlcKC3MlO0e7y8wbnp6Pwr3gQ1ABAYSixhhBgTjARn7AC9f6MRRtxOL5eUv4FaDE2KPjhMC+V+ziWBhLSHwT8Ysa3khrAhrDRrJTBmpLJgCKhRImOoBqqGo+3PTjJ105AZj3OQG9/TCJ423kIaHgtxmN8cVhdLMadxkimzS4M3S9Nue1lJAVli76wWkV9MmgtOST7QYSKa7y4jCNnx+MksmOByGnrCycHPOCVNdTlTBv9sYWeSpyRuuO82huMmN5Lh7sjBC1/jJ/rJl3obPjf+UmA+GHC07mAxro9zi15pCsbcCBeNDCrIOp225AlGo4o3Ut5Ir0miX16wKQwppEs/V1kkMJcrCWfExcY1yILBmmL7n1jSrSHCAxWQi442EEz2ZCIBQKd+2axJgZGQ2+ljFU0UkmE6u8ECpGi6Jk/NY4AVbgLKO8PYPKOaYysNkjUhfxn5mJkNflnIVDA14nxgGOuctUc3i5Q9HEZ03GIQjjjD6RTzkYjccZIbDP2xm9xeDHnz1gJe1xiEH/3AxqOI494VgIO/XjFFPBiM0Mn5yYhe7+cZLCZIneGrvGRdMcZKIRN1/Kwufv6yrKunEMHj+Xi/RqcCCd9mT6rkCCW1KT85fMEIxm4gcmUOhySnzY3qSBqAOFhxk5BTHEUkdUB1jMQTWR8Kj7+mJ1GOZO0tymJHGHkEYZklDNQ4EkzHys8t/ZgprZUUfK24AwmshcPjKgj64KyXGKWSTJ3GC0e4L5In2x0HPMPzNPthvmiX95ZLinECu3x+SxPfXo/OJV31AcYADd0ryOR0mGbQMAWKTF8YOzuL694U/asCbN6yDjnvEEkyHOEta84HbRmiNYI3uc2ma4n9sjGyOcv0YnFWjv6YWnmd4mnfGTCazSftgGeJRh0MQ17wavfWAWbee8UHXWN80Yga3++Td64xUpQ/wBZPiZ84I/aMXl3xiVgclJ8mMhOqOnvvK5o8nKOH+Q4QySI7sOh5G8P9ICZND68nlgSSElsKC67+cDAgctTHD+/GCx7IIZI3fb1jMDKQhoGOXswZDckJIjX/MgJBVETYJ1OduQAOy+41iJ60SO7HjWJb27dURaTkqMCqMLJYXGScRpF449LnAYwQZjmTzzgDZMjAdI8+kYqG7AD4STH0xOwcQJaHSYpAQR4Ij38DkVGvH5xRGF7fticg0iGh/8AMJqvplMfn/3CDZjTH83k0jXXMYC8e+sWROS4MYRePGKx6dHE5DifnBHPR5ObIYGq/fNkWPKn4zjU/fFoiIiMYLL6wUw+nCFunWPcVwGFnk4gy0lO4wDCKxia7rIWjR+2TUfsBCZMI9pdDH0ThJALcz9GVX1ln0QSfE5l4JcfX2Og/Ke+/OHwT4wEgYYayCMRc1dtKRf9GRG1KravM5KpiMTlHowOXZGCiTzjAqJyX+cu+o95DIRdmchvvIaofuMCAqfO8AuHkMpCPTBLpypWSFCzqQyMhUTOh9ETm89babej3ljpuMkEFHf3xhBlP9mQx4bMJF1HOEO48zhoPrt+cnul0T3nBucFSVrzkkzFcYQklHj84ixoYImNYh10D+cTfLBZUa24lCr4cTXDyZQT0p95wJkd5O+A0v5wVk4cmRw9+MUSNDtPOKWQ9MKclp+cGwxveF9W4qt8y4hhDR4X4HOeFrga69f5LgNWA45Gnhv5fT1kVIFeiAm9fsxaTuKHPfTPjCJySCKqCHe+MVAWRMCbpHwjkvY4JWZWvuXgQlBEyEpHiYjLJjsJiE2fuGVAQuih4ex1it8godfJGrnJk4IBpmdSv4xOI2wHFXU+cAhRKF0gVaj9cQkeChGxKZ84MLuyAHyB6YwaSA7AY+2TU2g8Lwl+j1l10f8AmBCr4Z2kI+cS0w3/ACs3IvvjIXNGvGSS+9dYyadcZAPG/jGLJ6f9YtR9Ohh204mP9ZtWzEi788GADhBZMWFE/wA3mxJ8f6yIrl8YgFW8c5APdD9sViIxa19f53mzs8f7wep5zwcZMEcYEZgbDgCOo4y6ApJYPX2xfOGsaGA6CAwRArCBWAfpPSMDYiX9Kw7XURKFVNAd4MEI5BWfcMYCQ0B/Y++RY5iI17jHCRLQ1gIKTV+MYhbDXicARyOyPDGcncw9zlnbzgZiR5/1hqRg4nDmvXziGn6YoEMOHJw9YTBZIJjjDRZBi43qsaPeh5DvJFmPMesLElG8EDhisIDNM7wgUPtnpO3CyTZxgvLAV4ylEE1OFD7xm+9z9MERrjAVHvICqnE4aNjfeKdL5dXjEgrzjLS1k1Dq/GXnI3PjvEK3hUnfXeMnZBL1hZudT++ImHRkiFK/bOA7ZbxJnEEh0uHb86MivABwH+U4JMEgAiEiJCPhwLPQihIIq+J9ryqUAGY1ZSJgiALzUyUmnc5EDOPokkr5yVU1hbVsrhQ0plgtQJMs8lDsTMcUeM5HB8FRVdXkKIo8Api9ZDMoxyRU+73iihMpQQAkkp85KVUqQRglet11hZSxmQ4Y0cY8E7FgRb58GTmIaTbJV/6x5Agy60i8L56S8mUC/wCslJiY/kYQoR8RqcOcx6xov2cUn98dTvgYEU+SYLJFzrjB9cn3hETPiMTqfhzoqOcUJiHj4wZbFdeMYN7ef9Y9CnziEs8RhuU+tYJFTeuPrnOoPWWDuMXm8n6ucY0awRSPkzUFXtrWHINYCA+MAGRiYu8jxcyPMDOVQJPRf3yEgH4MeU/pjCiBUifRifJo4eHInAQ6504klm5kiR79ZOEDUn7jhBAP4hmI8OWtwnL15xjSHmWnzk6JzUB32YBRtB9/GJR8JKwnHJkqYGpPnDEISde/GRJPIhRIyZSsIkw73fGIiXsx3eXZ4xRp6p73lvFVxixHDzhQSwwBGo5u8AmqPfOLRG+uMRgm/wA4zs24/wC4x+L9YT3WN0km8aoiMhFbmbwvze3JWdToMjCfDk64mB/5innkySlrsdzhAJ4K/nGB+/txWJIJjCt3D9cUaCO8ZK5bOcRQiDx9fD/McNjDZMlCnsH+JjIxoyDh47i7BUnENhMKnGYoEgtYkeagbnEyN1kmEHqcgIh0XR5mO7wPQFcEIbf94ZkhUuCeeXY4URs4sK18zkCECSd7XfCcULBg4IWbW68Y1Ao9ko3iQxDqut3J4xTgLwvKmvjHJJCUG11LhohBPkwcfTASZyPDc+HGiG2xvWASd/77xI9c3iKBBxhTD6GSdxHeWbaxBqr6wNAE6qDFiSZneRKG5wgr9nxm4utx7xjGV84NLSGQQVPcW5JZFl3ko8Y0Pp4xfYrBO7yInjKEusRLe3WaEV88YAjnCqCbnzGEGsCP1T9E94W0kY4TpxRGlyh4UGMk2Hg/icQx4yZ+MwoCOD9SIwsE5VSy+U9Rk9WZBoB3/sYUUao2xwk5RuEzdod+MBuuVIWLAyItTIdCkxEQsdPnIC2uJ36wSg015nEbf9zGKZh5VbfnHqivxizQe0ObRSMMipk58eMnBq/hHGJdywPMZAmdduWx1+MQvRpipxGph9Ylf9xkX3kBBX7YPgMYs89dmGk7wZiSE+Mg2eJN46nPMcTipDUF5BEMfRixUQrfrEWd9/fJK2OoxAGZNA94JBFq6OXLAFI7cRHUKeXDep4T8/XLV1bhAFrxjIZqXQ/t+WGTk/5TiYLuHP5KGgdPnT5xqwmCogWiiNiMGZhRmBkEFs9Xmmkvy17852Ya7E5mMjVkHvTFXW8VJhbKlY5XCEpwpHTmMWksbm/PGRqEhWCY2/LljIkA24+da6wgkJDRBqtYohQjYNx84gMir22nu5wqFjHgdRXzjo4+EmuTOV8x0ftCHyY7HfGQREfGMCAt6yQMkFaxSt198oBa3m7i8VavCAvMbcCZL0fOD5DP81jKIIdLhMQ7wHLXGuMBTd/Dkojl04igpm55nFG30OImN/j3i6k6xqZSaAzZ40f6xAwYH4GM8hB9cMAOKw/pcAwkmKT9jP8Ays5o/TGOIh6y4BcUVn1jQdbNBjsN5FjNqP1MiE+RgKWUBkHjHWGcRBMQstYXDBhBwfUwu1RLm9ZMw1zPERkq4E83GVyL+ZnEaSFp1eJC2H6HJ74+mRbV7zQAP9fOPDFRl+mKv9ZexzQnYmTMCXWQaKeuPOUEcd8YT7HH4x2enBqWwbxHVa51iC9Tr3iZjbm8BQlcJkJqHw6wXTf/AJhz+cYge8UtSnHRkrKLP++MGRLdvgyATNRTgYWjljvFlIbf2zbkeELT0YNsAPrl94f5xoYN9lclw+VeAaL1rI0ETafbERJwJq+esTJg6GB60guYwDRJkmlNjVE4yA7WCMOgg6HCGA2IUiYoxEjuMmoXzzkSEQElm/2MVCotA7vnicVkGBSJaan/ALhApXovkBGsFkDkhct14wEw5utqsNRvn1gUFhJJ4Sx7yHGEEhCRAHxjjBOkofdgYISglBkVr4ygwANb+mQTd8jlgxCanrFJOZ2uLXreKdI3KeMSZdVWPRbkUxp2pnrj0isBsCfB0mERLRz5cQnu8bLrAPbkgjf3j1kh5bnvLmUnvEc33kJO0vAC4/2Zef1df1x+gXKCMBRJyRhyUr9MeLH6yZxOUn4yYABy0eZN/JkJsuwz06wVOU095NKZ5R3eazIJX8Gdmdhxjvbq6yc7C2NY1HL+2EHeLLXxgR/PU4BLF4cuPO/vgwv44xLT65ZJZjU5BWaeMVRb0Tr3kwil8YuaeL/fJtF84Ic/HOV3z1k27fTkCxljdYqHh14ySCT4cLEb3HnEFGtHzvIENNnutZxFVHlMEhJy984DUm/xkA/wi/uvD9DI/wAtxKwnx0SKN5ql+f09Y6Qi5X/s1xbHC49cpz7xOyZZiGH8c4sIQr37e0zq3smUHeBgxytyupfvk9URJfFVesRAu8EH0ctRukX36OMgmLKqJV3jKCgrcd/bAxUksObFYWnAWN++Mk2DuFzPofthEh2R4jd4sgqy0EU9wPjFIPOHXyZBIt5IkCDk3hM7HXOKCeNR1jXccnxgr2G47yem44xCeDWcgpyGZXVXjUA3zk7cdROJS1JxiQnhpjHRGpzuV/PGQW8198g07LN4USfOeHm/RlNdW53uRvIr7v6DE/tpiMSuJcmBM2mB13ecZLAY1CYex9HJkryT8jTBMTZKHEk1W+594THX2YoGfjnFNPjATTih8moxl53vGBMAlcfu4LqJe8WfpWTQSRkkuMSPaxv84xIWPmMWE294UbkM1XW8YPvmYwvkxJBfIEZL1urwKJ+v75A1Munx3kKXdw36MODccfj/AHnCyC51l54G+ZclZAz1XL6VhdggGgKDD9DJ/wA2YjAMAUEiJCJyJgBEhUg1KQ5tfXCIpqSQ8iVYjI95FoEpPCrE2mBBN2djrnWImMBQYBTZKOMFoAmwKTcTiIlwmGr+84oRuIc2RHUYwUHQs7iefnFSEJCaSR25wZlcJa85DQE0mo5jqUwXtYgsIiOjB0W8wRDNTpjksgOOj67Qm2O2fngJPeDLxxksHjm8R5jED8bxjgiW/wDeAqVrrIhdGNYa34w4NO3AzJ3c85KyRxxlCAXz/KwgVi9V5xFt/v8AjJlh3PvGKMcxjiGnvEtZz9xm+qSJ8YLs+BxSPjI0Fsf1/wAMNYf34yMThOTsjCHBWg6yYSDSSOFBA6Q/UjBVi7hG/mMWTbqxmuO0lmFdpSzzlKh6yjJrKK++COme4rGFcHDhDd5AmSOiciSdcxjaePGIeZenw4Qv6Ykb1k96TGl1NfXJ2dbxIHyuQTPEa4wTS74/GXtXKL9YLGt0eucsncSAa8YSgym+MgEJsPRhkIVd7Pur9I/Sf81xw2wsNnjS5+P3jJA/UQstNPvjSKJtFcoZ7yDEpuy24IScuQtN64+uNKNli5nz1iNtagR7tj3WUQoCF0h4uB2JjZQ4QmPEzPOsGollAoIGJvrGmxUKw6fbJIhuFiYjqcUMu9yqQHuzB1Z1WlWY3GKpkYhEF8T6xkhyNiSD7MfcDC8N/L04mIHxifDJvUkfGUvXBgxB3gQib1GKa5bM5gR6/wBYY4/9xWwQdzkJtb1GLaT7wWRv1/7jJKfLeQLAPP8ADEsIT5nEEy+rjAiBnp4xAITWx3lz+TliP1byawWd5KZCh/Kw4f2X+lP1jExGG4GyZINsS9sFcI5IIOLTI7TG9XsGMUhTaeMRUwnAzesFzv8AGSjDI/TGdzvxntPnFa+veJMXLIlHme8FBealxlph4D77wZA4++AQTYZKA0YWgXPHe7xQ+JmW8W2gN+MGWtbj9sIuEa7chQWPVC4ck7bj1kiYg8qQfnNV5p3Oy+XDf6cY5Cfo+3+cJMkH74F0SIw/6RD5wmiHoER8bBkXckpajy4lkspArEp51kpQJFwhONTiglsQ8BMV6xakyYuEHa4jCMgkcrk8ZKXFCEtwOq+mJdNFJQ2w2mNEGSZlE+qzsICF3CSU5OAuaCeU/wBY0WKgVKFGp+mTEpBtKj4948noRUSj+CYwWffHjJRDrvI5aDeFFUbecLbmN5IT1wYKeP8AeQ4+u81y3ihptOcsr5r1ioMw/wA4xRqnG63Uf+4aIIxlvXeB4QVeEJZl7vJpqZwXacRGAV8byLP9qmGABSj0fqn/AA4xlhOK4zhsaawbwO8H4c5ri8ArRmcHtet4jpfMc/bF2wnr/uA+TU/THjR/ONWTy456T3GsgEszzw5pCw7gwAvfjJiWp0mLujJYdHRgkWY0duEd7HXbiU/8/bFM1enuMWI1unwcHjIFQ7cVyYJ8qz6F/wBE/onNLh86+n+a/oCZIsQoS7B9ryX2ECS8jO7TPWSWHaKkmZk3DEQ0U3ffk6xUQLMhgs38YAllZixtq/8AZjB1VlNqu5cBQnXBLPIyxQFQIPh6rKDMGhzdT1jAV0E/WveJMAIiYsfDiUS7Vhs95FCkIgRDVcY8UppSdSx6xKRCjIkiHSVg8CjcBx6FPk4w0uck4+TCq1krUOO4n6YgHZ8spZgXrRlXt86xNzG4cEid9mNxw4hvruM4NTqnWQeJ/wCYAIfz642O7lxQO/XWRUR8GDgcDt5yyFSPhX3wVgR+s/4pOIxLguI4xPGLTGBeAnF7thajEBA7rBeWCL73nIM8YqUhfnG2A+sgns+MJhEg8ZQBns4wJFPl8ecSJjWpwJSFprjBkmbN/wC8gXFOjPr4nEb1/wAyIkDL832K/XeRgxG9eLy35vSnh/npOC+TBkoPo08ofHrAmVgum88Lr6ZEIqFRkFJ/fnBZSUR5DJPKZYyBOC9F07zRLLZcfisZCWItuIOV8ZwvLIODmHzgBERWV9rqnjFsZ0LA745yDgugJEu0Zp5wWcpTWxwEBhIl1Md4ZJQkwAmqOmAbElSC8ngkndj92+i4TCuKvAIj7Yhpd74w5kvJE7J1iJ+XUGPyFuDTLenzkBkK4/8AMoIitecYVv4vEtQnOpylFyULSdfxzkOHWIh5jeMiRnvjC2mcAINmXLzUuStuUn2MFYf5SfoRicS8YGByYvjH8YoiMDgzwZ4/WMqLxDTWTrGcWQKH1xVRTUl6yoEoI9Yo7Z6f6xAxo/ZikjpwcZCmMHs9TeQgloeNkPtgxTeD+qNMRjxDUpgz4cpmnjHNHHv4/wA5/SQMCSZthCEfZjs2RfpDK4QmoBVEuyuTnC0FjxMQP/MClIhEUo8t4qdpRVxyXGJCkyIQmOYS8QEANOpvTzkqqQgbgupnmcmAWHTA3i3sTFO694AEuFxyMx+MUCoUKjaNPXzjCGiBhFCoPtiKKZkSeqjX4w0DsupwzmTxUa87+I5oZylOdfOQvOqgwEPNN4QqxCIc45+NXj071++Jp0nUuAaIW3ASgo21zkK6mz+ORLslavLV9Pj5MJ0UROAvlycsc3HE5Kwn5xJ+MOIyWtEP1X/LRkZGOR+hGMsTkMcoeMdxiuMF0ZurNtY5PXOOLrvrDPyNfTAWK4eMUScYBPbV6w/9Mg3EZIpo+sr5WFRhOT+jJAdhcVYybFiZ8z7yEexNcrf/AAHAasBNdyIlz6Ne4wgZkQstlxExkgWrQbZ/7hbBRB0QyxLgVoUu1/3kbDdGwa15rDKyYEnSa38YoQmavmNoGAEFCdkWqOJyUCUchfc4w002JjVkv8cgJtyGTz/7iB5GlTXUR8Y6hJkhFc+W8AKIsDu+siNw9DUTYU5svJTIK8yj74oo+3KRAiOTjBba/OMriPLkEzF+skmTLLGISMdL4xrKsx39owAvCiO8BAo08fjK63nyGNz/AOYRk17yUnHbxgqq/GXU/TPGpwO3L93NP8U/tRkZGJ+h/QtiesHDjWSFYSOLGqcYQMfwZeMjNxWe5+cWI8OnEgrMlxOT+Qsf5FuF4OAw8DxYTq9C0vjEAGQiGi4Sz8ZtcDENViI6v6v/AIMhhI/fDB8NqBfrSfc5UogUDpTVQxVgEjpsqZ8mGQEgq/QzhlN7RVlaGvrjmYEIQlg+4/OTkAd6Sy3OEaNgHZqbPGRcliWxBdKfXFlm1BTpE4kEymrca/1hApZTOQh7+cGBmAZ4+TIVUq7Vrv3iYItpJeq5xqlxMrUD9t46xATvg9ZMsB/p7wRmTezxgjdvwYSJiuzX3xHax1fzgCsqby22ul3gR/M19MJYTPzkDfPx+MmOB6yTZE44jFvz9citp4xMK/iMQTAmvGKnhv7Bmn+Mf3o/SMgxHWN/0CeMBmsn0Zy4IpFc4w1k2wcILah6RgFHE4eWQycJJCNO6vBeDk1MJSB75xowCXFkxTQPrNjo+5Hv+OP/AID+hsOTKVq22HkbyRREXZJ919sVTEGzENsYwhdYwy0ckSd5Wy8rVczT9cNQQipl2fH1wIQJWa0++KxRYAQDbrSmIhMOkzUPn3kkCEJIU+y8FgBJCIqL1zWATQIsok6+cvbEjZkJY4Ml2jQfBiIOSVh4/wCJ5wyI2CQ9AxCUB+WfneXJoeOcFCaNMYCBxOQmq7X9jN7ImrrIEu+LxbRFeMZAvynP5wonHfrEBgYH3+2G4fv++TsFOYnIL+CNOPQ+MuQie7yNw/OT1zy4yLmVfBzT/KP6o/sxkYGFgvGGzWC8YMWZFowtZL+zEzhODgQTbWE2ZMqiboafZkOK4pizOluUrFUKDaeA85TMYvo5xGtz/wDBTEnDesa3ug32e5/TFYwUi3BXwcqcxlDc+CH5ygiJZsTCXHEcZKQQIIVhCeXWc9DvGtxOdOBMIt5yCqzNHaJ16xJABsxIUaMesPbFeg4uXTkWFmxfw8OPRAMEg6TR8/AcTk4Ste3+7XRh8AB4yejCeBL7MNEV1/vDe/8AuaxMLnQrQm6xGL4ySYYA4MnE1+cIeS+4xHbsa/8AMVVJHsIn7Yro5tv74EJGZ7IxiUWPJP8AvEbmtSYvknHGSLBiBeOB/wDEmKv8UyP6YyP6T9Y/oj9U/QThYXWEjGePWFBzBD0zl1HI5PCcZLveVxvjPL4TIjsMIcY755jaNHeOJm74RDRJLkWKgJnZgETnlGiO+X04/wDhOSDgwIlFiqRwgtS6yW78YJiKYnm5PHDWbAgFG9eSO8gQuUDYCeKwKIpMK2c6rWApSnADT25LIDASkX84uyzYB6DvgxQowpPiSHwE4ShuFFT85735GRsB5heFAtgMGVYYKEc4AZ10ZOfnHofz3ipT6tZXvzgk8ZIQRv2YJqyNkxkGk3x45xVMHqw+8Ynp77yiLs/zeNJCXjLhT2Z2eQ/9ydanxl6T6xT4Pw5p/jB+p+gfofpMf0v9UfrGIxn+jIMGbK84koPk5PJzkHHrJ2eF1isQOXDkiSQQp0v7zHIgAEzi9QdcYo0mUJsSAi4+MBBBKkEZpTU95bOtWescfb/4cYDZCCR9RBeDRxkRslBYXY5R7wApRZcw2cfOXUwPZFbVVi6YaAT01EanDfAIEh4/3g1XIYer4HcVkrQVAfffxcJFUIH0FGGkYERGQiMDARwoSMGK6fxiEA66yIvZjKuPEYhoyDzOqjJszxqP95RK+kX+clbL78z9MVGqHG8hUp1J/wAyhmifR982jcGjGr/GI+XLeE97zmtlrjPD++Qx1/jH9E4P9B/Tr9H+mP6EwMknBupwCaxu88xHO8Z0gKIXqIXjKrqQW/hm8JEkUgWbFt6xa55SyU2ojjApkQkTu01HkynaPbl65f8An/xJiMBIMlJsBUVHcmj68PgWDvGy/Bxqb4hGuCKxMKkmrjRl6xzP8OeT7/pyrAR8qrb6IPGDFYIAYAwhkGD9UeEKFn64q9xeKCd9YoJitzkiTC+IzdQlD5/fJrEdri0AY7yZSNjHr4xS2EuQFHqHCdEz6xUOUVGKjjjEAis9YJ1EYOvH+84SoN+Vfxmn+Ief7E/4D/QmTZXlOsBGC0ePeD5gCTvZucUQigpqGr2YFHyiaWh54DQAWcixOFUKbBGw1GVbxTlvrXKp+3/xHCDOcIyonAznkEc5iYrT6AYXvbXqmifvglxveGawJgfpGR+gYGQA8rgB5y3h+TAiCnuMQdHxGIZW/JeUzBHIMZW364jGjvnCCrT2x7MR9Ma6MDBPxjCH640Z4wHs3l3+azyy34AZp/mx/bf6Y/pOVubqpwllH3w6Ou9knfWWmBJNpe55xWUjSptJXOGDUAmgO/JlEU632mPlz/jP95wTgPGP4yzOOwJh/Wc8GRvQIn5xQjP74KihzN/bEbEpi0j6YxNa8f8AMYNzjS6jz19cYiJrfH5yDsY9xkpVR31iiucAHR51ik8LowV7HZgIh8ZNG2OXI6PI+Vmn+OZOD/kiTJRyMzjC1vGay5rlG8KCSPvjoEYvL9mvnK/FM+f/AMf5J/bccT+hR/Wn67EKWT5JwX0Gsc6pijGSmfTiGNTpesuWcVf74JDrvAivldV3h/5/rC2RjmH/AJioy0deMl16caJ+xzjtPnucQh+l5srIl5vrf+TD+7P9Uf1uSYTxhPGC8YmG+E9bwqWZWQo9M1mtpExLy71PH+K/ofrH9hyf0j+l/rf1BRSgP7YmUYcCMxtN4kSDeO7+jGCpe8gNlHOJa46nWE2VzlXhFNrx3iNj5ciJ5wTMMPOR0YrLh5w3WuMACaI/oYcf5J/TP9ev6ox/oj9XJMmwnBusgZxxfPOU7dR/mzk5OT+sZH9b/U6zXNHHn2r8mEbj3kuPbjEH2MCvfnCG2IKh8HOATG5tnKCH1P8AudtvWB0nrCa/VePJrjBBqf8AWAkfrj/HAT+MiHg/G/8Aln9X+iMf1T9EnDeMGZj4zbTv9v8A4UfpH911muDJ28gc1OMJRFRhhTWoJMY0GfPnGWknvJlE9ZYMMF05CRV0+ecLOAxQZiiujAlA2yAxNG8cJWksY2l1MY2/zWPP74P4PDD/AAZ/sH9Jm/8ADf6E/Rrw3jJff/Fj/AcP0j9X+p1hr9ML5k/S8UXGCATTli/hw7NDTiijJTcHzjLo+Jxa+eHIJunNPnBINuLgG0zafX1jS+FjFLfgwpv6Z/O9MP8APP7045H9hP0JMh9/8R/wz+06/QayFdiR7MMQnn8Zce3NoWmIuq7yiCusVJJe5wOYF1LnxpAw+hkUgcMT9xkbC82r7GcIdyP5cnJm8B+ZxjIC+P8ATJfx/wCpwQim7/0OF3jv71GsMfyaYf8AwDI/qP7E/wBb+j/8kT/YP1GGsGABGl+cCZm8PDJwK/Qy1eAW4+RyTPfiP1ZZtxOVfYgz665N98AQAdU/GT+orIr9Axh6aZ6wGkBrBk/yz+o/uuJkf1P6pkf4s44Y/wCI/wBYYcXVPLGg7XjAjzLj5bPxnhuQjIx/QyMj9ErH9Gd46/WlGzBEk/yj+o/Sf7z/APdFE87cpom1yvb+k5OX+kYH6OOLi43jiZ9mDEYqnh2ZM3/lH9U5v9J/uJmsf8t/xJ/uJF84ZP6B/ROLkv6P6piYYwcRipOtf/Bn+6/2Y/8AkL/bcc2wMD+icUyclynGMUycnH9JjFSucEwm1ZoH/LH+s/umR/kP+PH9pwnN5KiMRHreKO8hmXW8a9hQPGM4aG8ZHg4xIhTThqScJ6ogbF4cJrHRdnxgWYdML09PSsNUoKPCd4AhY2HBEVk6Ljrx/HJJCROtcXmlDAakchY3DjW/jIXWiQUl9YcmRpOuf2xWCwaLx7xSylMYAvf/AMKf7znH+M/4k5OOT/ZaGBb11k5Morf1jCEmIIH/AHilCQKHTyvisAFYEXTtP4yaAgPFzzhz5JnxEPlwIAJFFRDc1kEJEhHupxtKRykCJBvi8SyQBqFNiLI5+2PnIChzveBckTACgI5eMC94bbodfTDWQSakC6mXCglYySASdJrGuwNJkIImz87xENKBdp5O7yKwiK83xLo3rFGWIlRRnXww9qChFIrZwyAVIGIhMyb1kiItz7a4wkmTEw9wzOH4FPx/lz/aP7fP+O/4j+p/S/0KnETNSpfVZCSaiz5kjIGkQX+OsgkhiItpPEYzfU73Ho694vKPfTDX/cgRAiAWghrjIEkQhCqdcayaQsJBs7rWUoAUqfB3rWAhGii41TzkTIIcw+p92JhZJDoODH3wcSAB4PM+XGhMi2UglBJJH3yUgCFEgeFyduARIJSYD4OcBFbAEtFiY5xYKBJMs0K8YmqRkKWlmwoyaCTSAQO44+cKNitIKafBXGBCREzs4/l4LspT8DlAO/8AKP7Zv+4//Kcn+0qyjNooIf8AeIOrinHMYjlLvPrgGVCKWD746iUANVH3y8lJF5Gt8xlzkCBEFRraescEjA1F8eWJ+cZ0/vgClC0FJITBG/GFMwCJYOzLWJpE3tB4TN+nLESKkaJz37wiRIQWnXLijIgIECYZDZywbwahCABCvZ/bDTIKYQY7cVigGeGCgjZ+7kwhEUaXM+8VGVJUGoaOfOKwZuykNvn2xDOhnIYmYoL43lDi5JETFuE6NUs8z++P2jn/ACz+0f2jIyP/AJD/AGp/Xb9EoPVGGkW0n3wW3c2ONxrEFVCIXHr644VFmTXBxnNizsJwhkkKSAYQWUC6ytDWMxBm1/LHmq/IHi2sXYkCzYis4JFsDSXR0BuOMOiiSAb7esIDYgjTyNmTNJK0r2aOXHAO5DlDz+zJHrYWRJBBw+cWgG0Lt5tzXrGGRCA0qIwIqcTBdacoxHJ+MlMLAlTNdVm6XdUmXUlGMcJhxSB2iKMRTkFjZGPvrBGoNn4dY6jnDX+XP9qMP65yP/kT+r/Zf6QKLqMEi8wl84gCdDtCMAMsZBWw3PrGQoQREPnDZ7KiaIgwAkMMGxykXM4iiDw7iH6WOSwA1dEnI3sDueid4HOSCgCJ6aj74FgFABK9FYR1goeBC/8AvGAhIWQAtLgoQIm4SOu2JmhJiSK7/wBMgQZRhCGjE8CNY6164Rs1Ou85hQIjAuCDv24kQaORqfbh2UGDpSqH1k5RQ0ROCad6yCVSAEW0ocXzgD0gY+c3Rga/+FH9E4f0uGOH/wAWcn+mP65yf0j9UsHxGJLGTY4pWBAWIQsxENJjLAVMWVCJGBJnvKJ1FmM7YRUXmOMSM0BJFbmhwYWj0HAtmnp6wBhETCHFj7vJwCh0b7DvjHvHUHhEHnBJGiWgkEjl7xyiJWRgIm3bWEOyhjTI2Pww8WkYB8Q68uItRVLAhOEuGmsANFKeb4zarAEzs486MQTLRFzQyxwZq6KUwVEx8MUXYQ6ikyDjziogiJXCdP3yZzxFqThJsoy2qjCduVLiRw/zTJyf7k45Gaycn/Ff6pv9Yyf6Jx/tx/Tx+gVj0ec0O0NeUyaCFsl60j5wUqaKvjn4w0wCJZ20XPOFniFE66fJ84IAQEGxy9Pxm/kJQthzs6ZJIFcEKq+jJQ0WyhZmkNsipIEIIjrbyOLPQiw3yQA5rCKSRaYuA6gjAEAKD632d5GNyRBLlGnjGqABRMC233ZCMgh7F3++SpALEliFPq+mTEAWJd8uTWFQUMbai3DXEi7yL26ZBAQhX8h08YiAEQQVKuz8ZMgisesMrrGBUsNfR3h/bT/Mn/Of6oP6N/rP6z/bf6OP0CcFsOOMmnsFe4OAIQCCexP7Yqo2CwwBGnfvJBamvU6H2x0EJGiaajjBlGlAt2LUa185SBFjAlJBfn9sYgLMHcHwrWM8RY86xBvGYgJEk3p1hUGxEiEdOCu8LJLsE3ixzkLm2RY+jGAiQRwCu2BNCRAFROvDxhJSotDD5O4wMiYp4oZ88X3iHkKEQLmjBgdEYfCZjbhQsiFqg5XnvEQhBXAr0OOGXkQhDhwWpAjoo1IaMSG5T2HP3ywf/wAK/wBlzj9I/WP7c/1t2VT7ZIhBDHxblUgpDvljKiWR5RDz6x5EJkkmPMx5YYhgyN+ky8hvKVAyl5RSzvrDsquGGUty8mA6dlSDUTDRlTrMuS2IJficmoQsokNyP14gWJIrGCrGsOAnEbdMnz/OJlTlIphRe1sGRQbF7GiHzjAZZxQm0RufLWSEcjICKYODX0yQYDIaG16TdGIQEEoszvhXoyO7ASIBGBLxrkg1DMjggMx34yQgQBQ3gG4qsgZBKLnjfflgogEmpQOt5xASN7stf+ZOIiJPo/5x/wDHf/gtMKbjLAjb1Q7yOzaF62yjIhsCq4244CIkZoaSl+MHjALrdNI+d4SRSJg0iEn8VggBSi2lSujrI3CclTG3+Dh4QEaIkJya9YsEpbJuDXwYBiqpoNhjtPGkwKkC0dA9YGbwXgQZ55RkaZkJs1fZLkKxAA7J2BCODLyBFIOjwX/rIEDIuRJxaTymNKhAZJWRKwu3EEEBDIHs7YN4hCTQgGV+D8YzywDI450nBhBckQ4Lnc5yBMaQi6j98IhwJRqfzhsen+y5P6Tk5OT/AIM//Ff6H9Y/wZ/sOa5tjHKBTMTqRx4J4LcGs4UEQliqR1gruUS9pYY5ijIiS0icgkmuOsBABCi/0HrE4Elghpl6G54x7lpSzawsvOsUYKCUFOul84xqGDXMzLTjzTjRoRQ0dbwDkyoQ+aP7hloieELEJHfxkijgUFsAK07MaikgEQ8O+cAISOErxRz5xkAkKCQQBDGFWyg3DESCfGGJthEGKBr8YFtqCWComuF6yb2i4rGZrWt5MLxRFS2QpjQ2gK4LJeSesCNjUrA1wcZBERNA94M//Hj/AOFH+HH9lri2yE60EjeRAmKrojHBZod2k95fGjRGiiJunDAILe9QeK8MUojY9ogZb8ecSxSQNXIaMF4kKlGRIZ+WBVbsSCrNRDvBEAqV+Nte/wAY2EhA8xe5wQCSQIVO+NHjBO8sqFgnUcYmBfInTApT3huEKono846wqICLULHJ/DI0rXOQqjt+cKQI0DyR/DlKHUcmHp4yYCYtokKdoxCAigog9rdryH6wMr27LzQKzUwofwxKwCgVKuonObW0h4W8Nf2V/qHJ/tThk/0Tjk5v+iM4/wAtycc4/on/AAX+00cd8I9XABgxYFDHN+8dDSEYJh5cmRjdVzS5E+8WCQelVpB3jNxGCYjXZ9A4bgCBO5mZpSeDJyTWZBOZ2sxSysAkZCkefLAhFH0Qqw/hzeAIEpYGPNk3OgIHl5JheBJQLoE8j1jfgNSFtAaMJdRElINQBXd8YAQskJ2ts35xG0FI3NUF3gJ3lxEwEQXHjImwgoSTf0YxVlAO1pCPU/jGQUN9BTWACQpTgqRNVziXCoTyj6VkVmwIjQCjHKEK3xLf9gn6x/Wf2tf1T/Uf1T/jz/Q/4E/3XLHapwl2y/HOVECCcyibw0MyThCxp/GIFpljsCcTo7wGpIJwkaR6ucaCkCEFNplF8T84BNRoogR0XqcFTRNlLMG4pe8M0akQCaVOWIlYIgl1U9t1hxQANwlyePrLYgBgrCTwqoqADQBTNz3mtyANm0LTEwMkdrSRfENOTTaCdEqvj2bwJKVIo7axsqNdveCjQhvxjtkiRbRo/lYiSCyivC2R3krEEMpFBDCW5pZmJlR5yu4EFJVv0xgiIJcJOdayJEDF/GOv7R/SZH+Px+s/0uGT/df05/of8N/Xn+4Ql+NYWnE6Tvzlykan8PrnCvc34qjqMjRya5mH0a+cPyi7OZqPWdBZn5vsZ7w0ifSa1nzM+W1eJzkXtPB7e80/KUxwrzEZ3l8/iv1ZOXyNHaNuojPJP4h8zOb3THkyam5yt8lNIIt+3znAZnc7/ZnyZFta+DPdd8STfmy5Hob0/LIb9d/4cz3nTs9ETx09Rm3vPBzZn4DkrURx7yE6zGe5i8Ssjn3MuShP9jj9T9D9T9D/AAr/ALJ/Y//Z"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(19);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./oculus.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./oculus.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "#oculus div.third{\n\twidth: 33.3333%;\n\theight: 300px;\n\tdisplay: block;\n\tfloat: left;\n\tposition: relative;\n\toverflow: hidden;\n}\n\n#oculus div.third div.bg{\n\tposition: absolute;\n\ttop: 0px;\n\tbottom: 0px;\n\tleft: 0px;\n\tright: 0px;\n\tdisplay: block;\n\tbackground-position: center center !important;\n\tbackground-repeat: no-repeat !important;\n    background-size: cover !important;\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    -webkit-transform: scale(1);\n    -o-transform: scale(1);\n    transform: scale(1);\n    transition: 0.5s;\n}\n\n#oculus div.third:hover div.bg{\n\t-moz-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    -webkit-transform: scale(1.1);\n    -o-transform: scale(1.1);\n    transform: scale(1.1);\n    transition: 0.3s;\n}\n\n#oculus div.third a{\n\tposition: absolute;\n\ttop: 0px;\n\tbottom: 0px;\n\tleft: 0px;\n\tright: 0px;\n\tz-index: 2;\n\tbackground: rgba(0,0,0,0.5);\n\tcolor: #fff;\n\ttext-align: center;\n\ttext-decoration: none;\n\ttransition: 0.3s;\n\tpadding: 40px 15px;\n}\n\n#oculus div.third a h5{\n\tcolor: #A4A5A6;\n\tmargin-bottom: 0;\n\ttext-transform: uppercase;\n\tpadding-top: 50px;\n}\n\n#oculus div.third a h4{\n\tmargin-top: 0;\n\tfont-size: 22px;\n}\n\n#oculus div.third a:hover{\n\tbackground: rgba(0,0,0,0);\n\ttransition: 0.3s;\n}\n\n@media screen and (max-width: 720px) {\n\t#oculus div.third{\n\t\twidth: 100%;\n\t\tfloat: none;\n\t}\n}\n\n", ""]);

	// exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(2);

	function setMobileNavHeight(){
		if(window.innerWidth <= 900) $('ul.left-btns, .user-card').css({'height': (window.innerHeight-48)+'px'});
		else { $('ul.left-btns').css({'height': '49px'}); $('.user-card').css({'height': 'auto'}); $('ul.left-btns').show(); }
	}

	$(function(){ setMobileNavHeight(); });
	$(window).resize(function() { setMobileNavHeight(); if(window.innerWidth >= 720) $("#apple ul").show(); });

/***/ }
/******/ ]);