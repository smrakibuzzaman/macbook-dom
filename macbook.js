// memory 

document.getElementById('small-memory').addEventListener('click', function () {
    const memoryPrice = document.getElementById('memory-price');
    const memoryPriceTotal = memoryPrice.innerText;
    memoryPrice.innerText = 0;
    total()
})

document.getElementById('large-memory').addEventListener('click', function () {
    const memoryPrice = document.getElementById('memory-price');
    const memoryPriceTotal = memoryPrice.innerText;
    memoryPrice.innerText = 180;
    total()
})

// storage 

document.getElementById('small-storage').addEventListener('click', function () {
    const storagePrice = document.getElementById('storage-price');
    const storagePriceTotal = storagePrice.innerText;
    storagePrice.innerText = 0;
    total()
})
document.getElementById('medium-storage').addEventListener('click', function () {
    const storagePrice = document.getElementById('storage-price');
    const storagePriceTotal = storagePrice.innerText;
    storagePrice.innerText = 100;
    total()
})
document.getElementById('large-storage').addEventListener('click', function () {
    const storagePrice = document.getElementById('storage-price');
    const storagePriceTotal = storagePrice.innerText;
    storagePrice.innerText = 180;
    total()
})

// delivery

document.getElementById('free-delivery').addEventListener('click', function () {
    const deliveryPrice = document.getElementById('delivery-price');
    const deliveryPriceTotal = deliveryPrice.innerText;
    deliveryPrice.innerText = 0;
    total()
})

document.getElementById('paid-delivery').addEventListener('click', function () {
    const deliveryPrice = document.getElementById('delivery-price');
    const deliveryPriceTotal = deliveryPrice.innerText;
    deliveryPrice.innerText = 20;
    total()
})

// gross total 

function productComponents(product) {
    const components = document.getElementById(product + '-price');
    const componentValue = parseFloat(components.innerText);
    return componentValue;
}

function total() {
    const baseTotal = 1299;
    const memoryTotal = productComponents('memory')
    const storageTotal = productComponents('storage')
    const deliveryTotal = productComponents('delivery')
    const grossTotal = baseTotal + memoryTotal + storageTotal + deliveryTotal;
    document.getElementById('total-price').innerText = grossTotal;
    document.getElementById('promo-added-price').innerText = grossTotal;

}

// net total after promo 

document.getElementById('promo-button').addEventListener('click', function () {


    const promoInput = document.getElementById('promo-input').value;
    const promoAddedPrice = document.getElementById('promo-added-price').innerText;



    if (document.getElementById('promo-input').value == 'stevekaku') {

        const netPrice = promoAddedPrice - (document.getElementById('promo-added-price').innerText * .2);
        return netPrice;


    } else {
        return total();
    }
})