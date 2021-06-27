/*
Matematičari su uzalud do danas pokušavali otkriti pravilnost u slijedu prostih brojeva, a mi imamo razloga vjerovati da je to misterija u koju ljudski um nikada neće prodrijeti. (Leonhard Euler)
*/

function countPrimeNumbers(from, to) {
  for (var step = from; step <= to; step++) {
    if (step % 2 != 0 && step % 3 != 0 && step % 5 != 0 && step % 7 != 0) console.log(step);
  }
}

console.log(countPrimeNumbers(10, 100));