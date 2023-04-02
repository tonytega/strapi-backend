'use strict';

/**
 * brainwash service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::brainwash.brainwash');
