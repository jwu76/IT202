define('ember-quickstart/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/destroy-app.js should pass ESLint\n\n1:1 - Parsing error: The keyword \'import\' is reserved (null)');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/module-for-acceptance.js should pass ESLint\n\n1:1 - Parsing error: The keyword \'import\' is reserved (null)');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/resolver.js should pass ESLint\n\n1:1 - Parsing error: The keyword \'import\' is reserved (null)');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/start-app.js should pass ESLint\n\n1:1 - Parsing error: The keyword \'import\' is reserved (null)');
  });

  QUnit.test('integration/components/people-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'integration/components/people-list-test.js should pass ESLint\n\n1:1 - Parsing error: The keyword \'import\' is reserved (null)');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'test-helper.js should pass ESLint\n\n1:1 - Parsing error: The keyword \'import\' is reserved (null)');
  });

  QUnit.test('unit/routes/scientists-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'unit/routes/scientists-test.js should pass ESLint\n\n1:1 - Parsing error: The keyword \'import\' is reserved (null)');
  });
});