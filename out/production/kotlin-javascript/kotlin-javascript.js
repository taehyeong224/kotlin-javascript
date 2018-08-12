if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlin-javascript'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-javascript'.");
}
this['kotlin-javascript'] = function (_, Kotlin) {
  'use strict';
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  function main$lambda(it) {
    window.alert('\uCEAC\uCEC4\uCEAC');
    return Unit;
  }
  function main(args) {
    var message = 'Hello JavaScript!';
    var num = 10;
    var header = trimIndent('\n        <h1>Hello World<\/h1>\n        <button id="b1">\uC548\uB155<\/button>\n        10\n    ');
    println(message);
    var root = document.getElementById('root');
    ensureNotNull(root).innerHTML = '<div>hi<div>';
    println(root);
    var rootHeader = document.getElementById('root-header');
    ensureNotNull(rootHeader).innerHTML = header;
    println(rootHeader);
    var b1 = document.getElementById('b1');
    ensureNotNull(b1).addEventListener('click', main$lambda);
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('kotlin-javascript', _);
  return _;
}(typeof this['kotlin-javascript'] === 'undefined' ? {} : this['kotlin-javascript'], kotlin);

//# sourceMappingURL=kotlin-javascript.js.map
