const links = document.querySelector(".links").querySelectorAll("li");

function getDataInfo(elements) {
    return Array.from(elements).map(function (el) {
        return el.dataset.color
    })
}

console.log(getDataInfo(links));

/*rozwiązanie 2*/
const links = document.querySelector(".links").querySelectorAll("li");

function getDataInfo(elements) {
    const arr = Array.from(elements);
    const result = []
    arr.forEach(function (el) {
        result.push(el.dataset.color)
    })

    console.log(result)
}

getDataInfo(links)

/* rozwiazanie 3*/
const links = document.querySelector(".links").querySelectorAll("li");

function getDataInfo(elements) {
    const arr = Array.from(elements);
    const result = []
    arr.forEach(function (el) {
        result.push(...Object.values(el.dataset))
    })

    console.log(result)
}

getDataInfo(links)

/* rozwiazanie 4*/
const links = document.querySelector(".links").querySelectorAll("li");

function getDataInfo(elements) {
    return Array.from(elements).reduce(function (prev, curr) {
        prev.push(...Object.values(curr.dataset));
        return prev;
    }, []);
}


console.log(getDataInfo(links));