const bodyColor = document.querySelector("body");
const buyingPrice = document.querySelector("#buying-price-input-fields");
const sellingPrice = document.querySelector("#selling-price-input-fields");
const quantity = document.querySelector("#quantity-input-fields");
const checkButton = document.querySelector("#checkBtn");
const outputMsg = document.querySelector(".output");

function profitLossCheck() {
    let buyPrice = Number(buyingPrice.value);
    let sellPrice = Number(sellingPrice.value);
    let quant = Number(quantity.value);

    if (buyPrice > 0 && sellPrice > 0 && quant > 0) {
        if (sellPrice > buyPrice) {
            const profit = sellPrice - buyPrice;
            const profitAmount = (profit * quant).toFixed(2);
            const profitPercent = ((profit / buyPrice) * 100).toFixed(2);

            outputMsg.innerText = `Wow, you made a profit of Rs. ${profitAmount}. \n
            Your profit percentage is ${profitPercent}.`;
            profitColorChanger();
        } else if (sellPrice < buyPrice) {
            const loss = buyPrice - sellPrice;
            const lossAmount = (loss * quant).toFixed(2);
            const lossPercent = ((loss / buyPrice) * 100).toFixed(2);
            outputMsg.innerText = `Oh no!, you loss Rs. ${lossAmount}. \n
            Your profit percentage is ${lossPercent}. \n
            Don't worry, Market might up tomorrow.`;
            lossColorChanger();
        } else {
            outputMsg.innerText = `Phew! You didn't loss or gain anything.`;
            noLossNoProfitColorChanger();
        }
    } else {
        outputMsg.innerText = `Invalid value detected \n
        You need to fill all the fields with positive values.`;
        outputMsg.style.backgroundColor = "#f4c05f";
        outputMsg.style.border = "1px solid black";
        outputMsg.style.borderRadius = "10px";
    }
}

function profitColorChanger() {
    bodyColor.style.backgroundColor = "#058240";
    outputMsg.style.backgroundColor = "#058240";
    outputMsg.style.border = "1px solid black";
    outputMsg.style.borderRadius = "10px";
}

function lossColorChanger() {
    bodyColor.style.backgroundColor = "#fd292f";
    outputMsg.style.backgroundColor = "#fd292f";
    outputMsg.style.border = "1px solid black";
    outputMsg.style.borderRadius = "10px";
}

function noLossNoProfitColorChanger() {
    bodyColor.style.backgroundColor = "#113b49";
    outputMsg.style.backgroundColor = "#113b49";
    outputMsg.style.border = "1px solid black";
    outputMsg.style.borderRadius = "10px";
}
checkButton.addEventListener("click", profitLossCheck);