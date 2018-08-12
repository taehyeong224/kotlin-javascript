if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlin-javascript'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-javascript'.");
}
this['kotlin-javascript'] = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main(args) {
    var message = 'Hello JavaScript!';
    println(message);
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('kotlin-javascript', _);
  return _;
}(typeof this['kotlin-javascript'] === 'undefined' ? {} : this['kotlin-javascript'], kotlin);

//# sourceMappingURL=kotlin-javascript.js.map
