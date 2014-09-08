var VError, httpRequest, async, uri;
VError = require('verror');
httpRequest = require('request');
async = require('async');

exports.configUri = function (newUri) {
  'use strict';

  uri = newUri;
};

function downloadPages(url, next) {
  'use strict';

  var lastPage, results, lastLength;
  results = [];
  lastLength = 0;
  lastPage = 0;
  async.doWhilst(function (next) {
    return httpRequest({
      'url'  : uri + url,
      'json' : true,
      'qs'   : {'page' : lastPage}
    }, function (error, res, body) {
      if (error) {
        return next(error);
      }
      results = results.concat(body);
      lastLength = body.length;
      lastPage++;
      return next();
    });
  }, function () {
    return lastLength > 0;
  }, function (error) {
    return next(error, results);
  });
}

exports.courses = function (next) {
  'use strict';

  return downloadPages('/courses', next);
};

exports.course = function (id, next) {
  'use strict';

  return httpRequest({
    'url'  : uri + '/courses/' + id,
    'json' : true
  }, function (error, res, body) {
    next(error, body);
  });
};

exports.disciplines = function (next) {
  'use strict';

  return downloadPages('/disciplines', next);
};

exports.discipline = function (id, next) {
  'use strict';

  return httpRequest({
    'url'  : uri + '/disciplines/' + id,
    'json' : true
  }, function (error, res, body) {
    next(error, body);
  });
};

exports.offerings = function (discipline, next) {
  'use strict';

  return downloadPages('/disciplines/' + discipline + '/offerings', next);
};

exports.offering = function (discipline, id, next) {
  'use strict';

  return httpRequest({
    'url'  : uri + '/disciplines/' + discipline + '/offerings/' + id,
    'json' : true
  }, function (error, res, body) {
    next(error, body);
  });
};

exports.catalogs = function (next) {
  'use strict';

  return downloadPages('/catalogs', next);
};

exports.catalog = function (id, next) {
  'use strict';

  return httpRequest({
    'url'  : uri + '/catalogs/' + id,
    'json' : true
  }, function (error, res, body) {
    next(error, body);
  });
};

exports.modalities = function (catalog, next) {
  'use strict';

  return downloadPages('/catalogs/' + catalog + '/modalities', next);
};

exports.modality = function (catalog, id, next) {
  'use strict';

  return httpRequest({
    'url'  : uri + '/catalogs/' + catalog + '/modalities/' + id,
    'json' : true
  }, function (error, res, body) {
    next(error, body);
  });
};

exports.blocks = function (catalog, modality, next) {
  'use strict';

  return downloadPages('/catalogs/' + catalog + '/modalities/' + modality + '/blocks', next);
};

exports.block = function (catalog, modality, id, next) {
  'use strict';

  return httpRequest({
    'url'  : uri + '/catalogs/' + catalog + '/modalities/' + modality + '/blocks/' + id,
    'json' : true
  }, function (error, res, body) {
    next(error, body);
  });
};

exports.requirements = function (catalog, modality, block, next) {
  'use strict';

  return downloadPages('/catalogs/' + catalog + '/modalities/' + modality + '/blocks/' + block + '/requirements', next);
};

exports.requirement = function (catalog, modality, block, id, next) {
  'use strict';

  return httpRequest({
    'url'  : uri + '/catalogs/' + catalog + '/modalities/' + modality + '/blocks/' + block + '/requirements/' + id,
    'json' : true
  }, function (error, res, body) {
    next(error, body);
  });
};