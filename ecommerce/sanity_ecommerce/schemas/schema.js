/**
 * First, we must import the schema creator
 * Then import schema types from any plugins that might expose them
 */

import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

/**
 * Here we import our own schemas
 */
import product from './product';
import banner from './banner';

/**
 * Then we give our schema to the builder and provide the result to Sanity
 * Add the schemas imported in schemaTypes.concat
 */
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([product,banner]),
});
