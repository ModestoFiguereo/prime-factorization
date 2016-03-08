export function primeFactorization(number) {
  if (isPrimeNumber(number)) {
    return number;
  }

  return getFactors(number)
    .reduce((primeFactors, factor) => {
      return primeFactors
        .concat(primeFactorization(factor))
        .sort();
    }, []);
}

export function isPrimeNumber(number) {
  return getFactors(number).length == 0;
}

function getFactors(number) {
  const factors = [];

  let counter = 2;

  while (true) {
    if (counter > Math.floor(number / 2)) {
      break;
    }

    if (number % counter === 0) {
      factors.push(counter);
      factors.push(number / counter);

      break;
    }

    counter++;
  }

  return factors;
}
