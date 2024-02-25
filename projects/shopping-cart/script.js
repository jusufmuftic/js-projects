let allTotal = 0

function addToCart(e) {
    let mainEl = e.closest('.single-item')
    let name = mainEl.querySelector('h3').innerText
    let price = mainEl.querySelector('.price').innerText
    let quantity = mainEl.querySelector('input').value
    let cartItems = document.querySelector('.cart-items')
    let vegies = document.querySelectorAll('.single-item')

    if(parseInt(quantity) > 0) {
        price = price.substring(1)
        price = parseInt(price)

        let total = price * parseInt(quantity)
        allTotal += total
        
        
        
        cartItems.innerHTML += `<div class="cart-single-item">
                                <h3>${name}</h3>
                                <p>$${price} x ${quantity} = $<span>${total}</span><p>
                                <button onclick="removeItem(this)">Remove</button>
                                </div>`

        document.querySelector('.total').innerHTML = `<b>Total:</b> $${allTotal}`

        vegies.forEach((vegie) => {
            let itemName = vegie.querySelector('.si-content h3').innerText
            if(itemName === name) {
                vegie.querySelector('.actions input').value = 0
            } 
        })
    } else {
        alert('Choose a quantity')
    }
    
}   

function removeItem(e) {
    let mainEl = e.closest('.cart-single-item')
    let name = mainEl.querySelector('h3').innerText
    let vegies = document.querySelectorAll('.single-item')
    let price = mainEl.querySelector('p span').innerText
    
    price = parseInt(price)
    allTotal -= price

    document.querySelector('.total').innerHTML = `<b>Total:</b> $${allTotal}`

    mainEl.remove()

    vegies.forEach((vegie) => {
        let itemName = vegie.querySelector('.si-content h3').innerText
        if(itemName === name) {
            vegie.querySelector('.actions input').value = 0
        } 
    })
}
