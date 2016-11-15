import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('table-pager', 'Integration | Component | table pager', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{table-pager}}`);
  assert.equal(0, 0);
});
