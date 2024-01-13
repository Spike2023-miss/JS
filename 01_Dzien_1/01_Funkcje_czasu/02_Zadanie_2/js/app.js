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

function chlopi(){
    const chlopiZmienna = "chłopi";
    
    function szlachta(){
        const szlachtaZmienna = "szlachta";
        console.log("======SZLACHTA========")
        console.log(szlachtaZmienna)
        console.log(chlopiZmienna);
    }
}
function sayHello(company){
    return function (name){
        console.log('Cześć')
    }
}