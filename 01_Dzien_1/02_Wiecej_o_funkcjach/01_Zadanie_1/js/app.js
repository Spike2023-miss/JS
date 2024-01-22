function firstFunc() {
  const someInt = 1;

  function secondFunc() {
    console.log(someInt);

    const otherInt = 3;
  }

  secondFunc();
  // nie ma dostępu ponieważ funkcja otherInt jest funkcja lokalna zagniezdzona w funkcji globalnej
  console.log(otherInt);
}

firstFunc();