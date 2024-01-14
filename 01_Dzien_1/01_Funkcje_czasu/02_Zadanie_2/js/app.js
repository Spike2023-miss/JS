function countHello(n) {
    let counter = 0;
    const intervalId = setInterval(function () {
        counter++
        if (counter >= n) {
            clearInterval(intervalId)
        }
        console.log("Hello")

    }, 1000)
}

countHello(5)

function chlopi() {
    const chlopiZmienna = "chłopi";

    function szlachta() {
        const szlachtaZmienna = "szlachta";
        console.log("========SZLACHTA========")
        console.log(szlachtaZmienna)
        console.log(chlopiZmienna);

        function krol() {
            const krolZmienna = "Król";
            console.log("========KROL========")
            console.log(szlachtaZmienna)
            console.log(chlopiZmienna);
            console.log(krolZmienna);
        }

        krol()
    }

    szlachta();

    console.log("========CHLOP========")
    console.log(chlopiZmienna);
    // console.log(szlachtaZmienna);
    // console.log(krolZmienna);

}

chlopi();


function sayHello(company) {
    return function (name) {
        console.log(`Cześć ${name} w firmie ${company}`)
    }
}

const coderslab = sayHello("Coders Lab");
const appsweb = sayHello("Appsweb");

coderslab("Pawel")
coderslab("Ania")
coderslab("Zdzisław")

appsweb("Hania")
appsweb("Asia")