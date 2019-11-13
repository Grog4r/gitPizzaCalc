let P = JSON.parse(sessionStorage.getItem('P'));
sessionStorage.setItem('P', JSON.stringify(P));
if(sessionStorage.getItem('P') === 'null') {
    console.log("NULL in sessionzeug");
    P = [];
}
console.log(sessionStorage.getItem('P'));

window.onload = updatePizzaList;

function calc() {

    if (document.getElementById("round").checked) {
        if (!document.getElementById("round").value ||
            !document.getElementById("price").value) {
            alert("HEEEELP");

        } else {
            let radius = document.getElementById("diameter").value / 2;
            let area = radius * radius * Math.PI;

            let price = document.getElementById("price").value;
            let areaPerEuro = area / price;
            console.log(areaPerEuro + " cm^2 €");
            document.getElementById("areaPerEuroResult").innerHTML = areaPerEuro + "cm² pro €";

            P.push(new RoundPizza(radius*2, 1*price, area, areaPerEuro));

            sessionStorage.setItem('P', JSON.stringify(P));
            updatePizzaList();
        }
    } else {
        if (!document.getElementById("width").value ||
            !document.getElementById("length").value ||
            !document.getElementById("price").value) {
            alert("NOCH MEHR HEEEEEELP");
        } else {
            let length = document.getElementById("length").value;
            let width = document.getElementById("width").value;
            let area = length * width;

            let price = document.getElementById("price").value;
            let areaPerEuro = area / price;
            console.log(areaPerEuro + " cm^2 €");
            document.getElementById("areaPerEuroResult").innerHTML = areaPerEuro + "cm² pro €";
            P.push(new RectPizza(1*width, 1*length, 1*price, area, areaPerEuro));
            sessionStorage.setItem('P', JSON.stringify(P));

            updatePizzaList();
        }
    }
}

function checkRadio(shape) {
    if (shape === "round") {
        document.getElementById("length").hidden = true;
        document.getElementById("width").hidden = true;
        document.getElementById("roundP").hidden = false;
        document.getElementById("diameter").hidden = false;
        document.getElementById("rectP1").hidden = true;
        document.getElementById("rectP2").hidden = true;
        console.log("ROUND MOFO");
    } else {
        console.log("RECTANGLE MOFO");
        document.getElementById("length").hidden = false;
        document.getElementById("width").hidden = false;
        document.getElementById("roundP").hidden = true;
        document.getElementById("diameter").hidden = true;
        document.getElementById("rectP1").hidden = false;
        document.getElementById("rectP2").hidden = false;
    }
}

function updatePizzaList() {
    if(sessionStorage.getItem('P') !== 'null') {
        let PList = JSON.parse(sessionStorage.getItem('P'));
        document.getElementById("pizzaList").innerHTML = "";
        PList.forEach((element) => {
            let innerHTML = `<li class="pListItem"> ${element.price}€, ${element.areaPerEuro} cm²</li>`;
            document.getElementById("pizzaList").innerHTML += innerHTML;
        })
    }
}

function RoundPizza(diameter, price, area, areaPerEuro) {
    this.diameter = diameter;
    this.price = price;
    this.area = area;
    this.areaPerEuro = areaPerEuro;
}

function RectPizza(width, length, price, area, areaPerEuro) {
    this.width = width;
    this.height = length;
    this.price = price;
    this.area = area;
    this.areaPerEuro = areaPerEuro;
}

function sort() {
    let pizzas = JSON.parse(sessionStorage.getItem('P'));
    let Pcurrent = [];
    console.log(pizzas);
    pizzas.forEach( (pizza) => {

    });
}