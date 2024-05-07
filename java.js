function updatePrices(price) {
    let lowerRam = document.querySelector("#bestPrice");
    lowerRam.innerText = price;

}

function ram8GB() {
    updatePrices(1200);
}

let btn8Gb = document.querySelector(".specsMemory8");
btn8Gb.addEventListener("click", ram8GB);
btn8Gb.addEventListener("click", updateTotal);

function ram16GB() {
    updatePrices(1600);
}

let btn16Gb = document.querySelector(".specsMemory16");

btn16Gb.addEventListener("click", ram16GB);

btn16Gb.addEventListener("click", updateTotal);

function updateStorages(price) {

    let storageLower = document.querySelector("#exStorage");

    storageLower.innerText = price;

   
}

function updateStorages256Gb() {

    updateStorages(80)
}

let btn256 = document.querySelector(".storage256");

btn256.addEventListener("click",updateStorages256Gb );
btn256.addEventListener("click",updateTotal );



function updateStorages512Gb() {

    updateStorages(160)
}

let btn512 = document.querySelector(".storage512");

btn512.addEventListener("click",updateStorages512Gb );

btn512.addEventListener("click",updateTotal );


function updateStorages1Tb() {

    updateStorages(240)
}

let btn1Tb = document.querySelector(".storage1");

btn1Tb.addEventListener("click",updateStorages1Tb );
btn1Tb.addEventListener("click",updateTotal );


function updateDelivery(price) {

    let delivery = document.querySelector("#deliCharge");

    delivery.innerText = price;


}

function updateDeliveryPrice() {

    updateDelivery(20);

}

function updateDeliveryPriceFree() {

    updateDelivery(0);

}

let btnDelivery = document.querySelector(".friday21");

btnDelivery.addEventListener("click",updateDeliveryPrice );

btnDelivery.addEventListener("click",updateTotal );

let btnDelivery25 = document.querySelector(".friday25");

btnDelivery25.addEventListener("click",updateDeliveryPriceFree );

btnDelivery25.addEventListener("click",updateTotal );



function updateTotal () {


    let lowerRam = document.querySelector("#bestPrice");
    
    let newLowerRam = parseFloat (lowerRam.innerText);


    let extraStorage = document.querySelector("#exStorage");

    let newExtraStorage = parseFloat (extraStorage.innerText);


    let delivery = document.querySelector("#deliCharge");

    let newDelivery = parseFloat (delivery.innerText);


    let netTotal = document.querySelector("#Total");


netTotal.innerText = newDelivery + newExtraStorage + newLowerRam ;


let grandTotal = document.querySelector("#grandTotal")

grandTotal.innerText = netTotal.innerText;

}


function cuponCode (){

    let promoInput = document.querySelector("#promoInput");

    let newPromoInput = promoInput.value ;

    if (newPromoInput === "stevekaku") {

        let grandTotal = document.querySelector("#grandTotal");

        let newGrandTotal = parseFloat(grandTotal.innerText )* .20;


        grandTotal.innerText =  parseFloat(grandTotal.innerText) - newGrandTotal;


    }

}

let promoBtn = document.querySelector("#promoBtn");

promoBtn.addEventListener("click",cuponCode);



