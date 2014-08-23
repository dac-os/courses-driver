var VError, httpRequest, async, uri;
VError = require('verror');
httpRequest = require('request');
async = require('async');

exports.configUri = function (newUri) {
  'use strict';

  uri = newUri;
};

exports.courses = function (page, next) {
  'use strict';

  return httpRequest(uri + '/courses?page=' + page, function (error, res, body) {
    var courses;
    if (error) {
      error = new VError(error, 'error requesting courses');
      return next(error);
    }
    try {
      courses = JSON.parse(body);
      return next(null, courses);
    } catch (error) {
      error = new VError(error, 'error parsing courses to json');
      return next(error);
    }
  });
};

exports.course = function (id, next) {
  'use strict';

  return httpRequest(uri + '/courses/' + id, function (error, res, body) {
    var course;
    if (error) {
      error = new VError(error, 'error requesting course "$s"', id);
      return next(error);
    }
    try {
      course = JSON.parse(body);
      return next(null, course);
    } catch (error) {
      error = new VError(error, 'error parsing course "$s" to json', id);
      return next(error);
    }
  });
};

exports.disciplines = function (page, next) {
  'use strict';

  return httpRequest(uri + '/disciplines?page=' + page, function (error, res, body) {
    var disciplines;
    if (error) {
      error = new VError(error, 'error requesting disciplines');
      return next(error);
    }
    try {
      disciplines = JSON.parse(body);
      return next(null, disciplines);
    } catch (error) {
      error = new VError(error, 'error parsing disciplines to json');
      return next(error);
    }
  });
};

exports.discipline = function (id, next) {
  'use strict';

  return httpRequest(uri + '/disciplines/' + id, function (error, res, body) {
    var discipline;
    if (error) {
      error = new VError(error, 'error requesting discipline "$s"', id);
      return next(error);
    }
    try {
      discipline = JSON.parse(body);
      return next(null, discipline);
    } catch (error) {
      error = new VError(error, 'error parsing discipline "$s" to json', id);
      return next(error);
    }
  });
};

exports.offerings = function (discipline, page, next) {
  'use strict';

  return httpRequest(uri + '/disciplines/' + discipline + '/offerings?page=' + page, function (error, res, body) {
    var offerings;
    if (error) {
      error = new VError(error, 'error requesting offerings');
      return next(error);
    }
    try {
      offerings = JSON.parse(body);
      return next(null, offerings);
    } catch (error) {
      error = new VError(error, 'error parsing offerings to json');
      return next(error);
    }
  });
};

exports.offering = function (discipline, id, next) {
  'use strict';

  return httpRequest(uri + '/disciplines/' + discipline + '/offerings/' + id, function (error, res, body) {
    var offering;
    if (error) {
      error = new VError(error, 'error requesting offering "$s"', id);
      return next(error);
    }
    try {
      offering = JSON.parse(body);
      return next(null, offering);
    } catch (error) {
      error = new VError(error, 'error parsing offering "$s" to json', id);
      return next(error);
    }
  });
};

exports.catalogs = function (page, next) {
  'use strict';

  return httpRequest(uri + '/catalogs?page=' + page, function (error, res, body) {
    var catalogs;
    if (error) {
      error = new VError(error, 'error requesting catalogs');
      return next(error);
    }
    try {
      catalogs = JSON.parse(body);
      return next(null, catalogs);
    } catch (error) {
      error = new VError(error, 'error parsing catalogs to json');
      return next(error);
    }
  });
};

exports.catalog = function (id, next) {
  'use strict';

  return httpRequest(uri + '/catalogs/' + id, function (error, res, body) {
    var catalog;
    if (error) {
      error = new VError(error, 'error requesting catalog "$s"', id);
      return next(error);
    }
    try {
      catalog = JSON.parse(body);
      return next(null, catalog);
    } catch (error) {
      error = new VError(error, 'error parsing catalog "$s" to json', id);
      return next(error);
    }
  });
};

exports.modalities = function (catalog, page, next) {
  'use strict';

  return httpRequest(uri + '/catalogs/' + catalog + '/modalities?page=' + page, function (error, res, body) {
    var modalities;
    if (error) {
      error = new VError(error, 'error requesting modalities');
      return next(error);
    }
    try {
      modalities = JSON.parse(body);
      return next(null, modalities);
    } catch (error) {
      error = new VError(error, 'error parsing modalities to json');
      return next(error);
    }
  });
};

exports.modality = function (catalog, id, next) {
  'use strict';

  return httpRequest(uri + '/catalogs/' + catalog + '/modalities/' + id, function (error, res, body) {
    var modality;
    if (error) {
      error = new VError(error, 'error requesting modality "$s"', id);
      return next(error);
    }
    try {
      modality = JSON.parse(body);
      return next(null, modality);
    } catch (error) {
      error = new VError(error, 'error parsing modality "$s" to json', id);
      return next(error);
    }
  });
};

exports.blocks = function (catalog, modality, page, next) {
  'use strict';

  return httpRequest(uri + '/catalogs/' + catalog + '/modalities/' + modality + '/blocks?page=' + page, function (error, res, body) {
    var blocks;
    if (error) {
      error = new VError(error, 'error requesting blocks');
      return next(error);
    }
    try {
      blocks = JSON.parse(body);
      return next(null, blocks);
    } catch (error) {
      error = new VError(error, 'error parsing blocks to json');
      return next(error);
    }
  });
};

exports.block = function (catalog, modality, id, next) {
  'use strict';

  return httpRequest(uri + '/catalogs/' + catalog + '/modalities/' + modality + '/blocks/' + id, function (error, res, body) {
    var block;
    if (error) {
      error = new VError(error, 'error requesting block "$s"', id);
      return next(error);
    }
    try {
      block = JSON.parse(body);
      return next(null, block);
    } catch (error) {
      error = new VError(error, 'error parsing block "$s" to json', id);
      return next(error);
    }
  });
};