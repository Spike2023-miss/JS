const blocks = document.querySelectorAll(".block");


blocks.forEach((block) => {
    console.log(`innerText: ${block.innerText}`);
});

blocks.forEach((block) => {
    block.innerText = "Nowa wartość diva o klasie blocks";
});

blocks.forEach((block) => {
    console.log(`Nowy innerText: ${block.innerText}`);
});