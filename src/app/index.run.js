(function() {
  'use strict';

  angular
    .module('angularMusicBrowser')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
