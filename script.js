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
        }
    }
    console.log("DONT TOUCH ME YET!")
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