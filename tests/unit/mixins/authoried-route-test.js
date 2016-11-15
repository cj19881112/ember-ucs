import Ember from 'ember';
import AuthoriedRouteMixin from 'library/mixins/authoried-route';
import { module, test } from 'qunit';

module('Unit | Mixin | authoried route');

// Replace this with your real tests.
test('it works', function(assert) {
  let AuthoriedRouteObject = Ember.Object.extend(AuthoriedRouteMixin);
  let subject = AuthoriedRouteObject.create();
  assert.ok(subject);
});
