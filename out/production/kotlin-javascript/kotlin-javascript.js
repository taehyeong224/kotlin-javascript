if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlin-javascript'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-javascript'.");
}
this['kotlin-javascript'] = function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var ensureNotNull = Kotlin.ensureNotNull;
  function main$lambda(it) {
    window.alert('\uCEAC\uCEC4\uCEAC');
    return Unit;
  }
  function main(args) {
    var num = 10;
    var root = document.getElementById('root');
    var main = document.createElement('div');
    var rootHeader = document.createElement('p');
    var b1 = document.createElement('button');
    main.textContent = '\uC694';
    rootHeader.textContent = num.toString();
    b1.textContent = '\uB20C\uB7EC\uC5FC';
    b1.addEventListener('click', main$lambda);
    main.appendChild(rootHeader);
    main.appendChild(b1);
    ensureNotNull(root).appendChild(main);
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('kotlin-javascript', _);
  return _;
}(typeof this['kotlin-javascript'] === 'undefined' ? {} : this['kotlin-javascript'], kotlin);

//# sourceMappingURL=kotlin-javascript.js.map
