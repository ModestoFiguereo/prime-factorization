import test from 'tape';
import {primeFactorization} from '../';
import {isPrimeNumber} from '../';

test('Test isPrimeNumber(8);', (assert) => {
  assert.false(isPrimeNumber(8), '8 is not a prime number');
  assert.end();
});

test('Test isPrimeNumber(7);', (assert) => {
  assert.true(isPrimeNumber(7), '7 is a prime number');
  assert.end();
});

test('Test isPrimeNumber(43);', (assert) => {
  assert.true(isPrimeNumber(43), '43 is a prime number');
  assert.end();
});

test('Test primeFactorization(8);', (assert) => {
  const primesFactors = primeFactorization(8);

  assert.deepEqual(primesFactors, [2, 2, 2], 'primes factors should be [2, 2, 2]');
  assert.end();
});

test('Test primeFactorization(10);', (assert) => {
  const primesFactors = primeFactorization(10);

  assert.deepEqual(primesFactors, [2 ,5], 'primes factors should be [2 ,5]');
  assert.end();
});

test('Test primeFactorization(96);', (assert) => {
  const primesFactors = primeFactorization(96);

  assert.deepEqual(primesFactors, [2, 2, 2, 2, 2, 3], 'primes factors should be [2, 2, 2, 2, 2, 3]');
  assert.end();
});

test('Test primeFactorization(500);', (assert) => {
  const primesFactors = primeFactorization(500);

  assert.deepEqual(primesFactors, [ 2, 2, 5, 5, 5 ], 'primes factors should be [ 2, 2, 5, 5, 5 ]');
  assert.end();
});

test('Test passing a prime number (7): primeFactorization(7);', (assert) => {
  const primesFactor = primeFactorization(7);

  assert.deepEqual(primesFactor, 7, 'primes factors should be 7');
  assert.end();
});

test('Test passing a prime number (43): primeFactorization(43);', (assert) => {
  const primesFactor = primeFactorization(43);

  assert.deepEqual(primesFactor, 43, 'primes factors should be 43');
  assert.end();
});
