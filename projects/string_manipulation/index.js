let span = document.querySelector('#mail_span')

function validation() {
    let input = document.querySelector('#email')
    let value = input.value

    //Checking if value includes @ and .
    if(value.includes('@' && '.')) {

        let positionAt = value.indexOf('@') //Getting position @
        let positionDot = value.indexOf('.') //Getting position .
        let betweenAtDot = value.substring(positionAt +1, positionDot) //Value between @ and .

        //Checking if there is 1 or more chars between @ and . 
        if(betweenAtDot.length > 0) {

            let beforeAt = value.substring(0, positionAt) //Value before @
            
            //Checking if value before @ is more than 2
            if(beforeAt.length > 2) {

                let afterDot = value.substring(positionDot +1, value.length) //Value after .

                //Checking if value after . is more than 1
                if(afterDot.length > 1) {
                    span.innerText = 'Correct email'
                }
            } else {
                span.innerText = 'Incorrect email'
            }
        } else {
            span.innerText = 'Incorrect email'
        }
    } else {
        span.innerText = 'Incorrect email'
    }
}