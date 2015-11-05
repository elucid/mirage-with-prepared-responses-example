/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  firstName() { return faker.name.firstName(); },
  lastName() { return faker.name.lastName(); },
});