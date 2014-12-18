var app_version = chrome.runtime.getManifest().version,
    app_beta    = true;

angular
  .module('PVL', [])
  .value('app_version', app_version)
  .value('app_beta', app_beta)
  .constant('io', io)
  .constant('jQuery', $)
  .constant('moment', moment)
  .constant('_', _)
  .constant('ColorThief', ColorThief);
