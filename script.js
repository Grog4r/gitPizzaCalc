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

            sortIn(new RoundPizza(radius*2, 1*price, area, areaPerEuro));
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
            sortIn(new RectPizza(1*width, 1*length, 1*price, area, areaPerEuro));
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
            let innerHTML = `<li class="pListItem">${element.areaPerEuro.toFixed(2)} cm²,
                ${element.price.toFixed(2)}€ </li>`;
            document.getElementById("pizzaList").innerHTML += innerHTML;
        });
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

function sortIn(newPizza) {

    let pizzas = JSON.parse(sessionStorage.getItem('P'));
    let PCurrent = [];

    if(pizzas === null) {
        console.log("SORTER: Pizza list was empty, new Pizza added.");
        PCurrent.push(newPizza);
        sessionStorage.setItem('P', JSON.stringify(PCurrent));
        updatePizzaList();
    }

    if(pizzas !== null) {
        let newPizzaSortedIn = false;


        if(newPizza.areaPerEuro > pizzas[0].areaPerEuro) {              // Checks if newPizza is smallest current
            PCurrent.push(newPizza);
            console.log("SORTER: New Pizza was sorted in.");
            for(let k = 0; k < pizzas.length; k++) {
                PCurrent.push(pizzas[k]);
                console.log("SORTER: Pizza from list was sorted in.");
            }
        } else {
            for(let i = 0; i < pizzas.length; i++) {

                if(!newPizzaSortedIn) {

                    if(pizzas[i].areaPerEuro >= newPizza.areaPerEuro) {              //Pizzas[i] bigger than newPizza
                        PCurrent.push(pizzas[i]);
                        console.log("SORTER: Pizza from list was sorted in.");
                    } else if(pizzas[i].areaPerEuro < newPizza.areaPerEuro) {
                        PCurrent.push(newPizza);
                        console.log("SORTER: New Pizza was sorted in.");
                        newPizzaSortedIn = true;
                        PCurrent.push(pizzas[i]);
                        console.log("SORTER: Pizza from list was sorted in.");
                    }

                } else {
                    PCurrent.push(pizzas[i]);
                    console.log("SORTER: Pizza from list was sorted in.");
                }
            }

            if(!newPizzaSortedIn) {
                PCurrent.push(newPizza);
            }

        }

        sessionStorage.setItem('P', JSON.stringify(PCurrent));
        updatePizzaList();
    }
    //console.log(PCurrent);
    P = PCurrent;

}