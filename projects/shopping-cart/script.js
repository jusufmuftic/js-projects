let allTotal = 0;

function addToCart(btn) {
    let mainEl = btn.closest('.single-item')
    let price = mainEl.querySelector('.price').innerText
    let name = mainEl.querySelector('h3').innerText
    let quantity = mainEl.querySelector('input').value
    let cartItems = document.querySelector('.cart-items')

    if (parseInt(quantity) > 0) {
        price = price.substring(1)
        price = parseInt(price)
        quantity = parseInt(quantity)
        let total = price * quantity

        allTotal += total

        cartItems.innerHTML += `<div class="cart-single-item">
                                    <h3>${name}</h3>
                                    <p>$${price} x ${quantity} = $<span>${total}</span></p>
                                    <button onclick="removeFromCart(this) "class="remove-item">Remove</button>
                                </div>`

        document.querySelector('.total').innerText = `Total: $${allTotal}`

        btn.innerText = 'Added'
        btn.setAttribute('disabled', 'true')
    } else {
        alert('Choose a quantity')
    }
}

function removeFromCart(btn) {
    let mainEl = btn.closest('.cart-single-item')
    let price = mainEl.querySelector('p span').innerText
    let name = mainEl.querySelector('h3').innerText
    let vegies = document.querySelectorAll('.single-item')
    price = parseInt(price)

    allTotal -= price

    document.querySelector('.total').innerText = `Total: $${allTotal}`
    mainEl.remove()

    vegies.forEach((vegie)=> {
        let itemName = vegie.querySelector('.si-content h3').innerText
        if(itemName === name) {
            vegie.querySelector('.actions input').value = 0
            vegie.querySelector('.actions button').removeAttribute('disabled')
            vegie.querySelector('.actions button').innerText = 'Add'
        }
    })
}