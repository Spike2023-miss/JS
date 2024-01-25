const spoon = {
    isExist: true,
};

const fork = spoon;
fork.isExist = false;

console.log(spoon.isExist);
console.log(fork.isExist);

// łyzka nie istnieje