let config = {
    'first_lastname': {
        required: true,
        minlength: 3,
        maxlength: 50
    },
    'username': {
        required: true,
        minlength: 5,
        maxlength: 50
    },
    'email': {
        required: true,
        email: true,
        minlength: 5,
        maxlength: 50
    },
    'phone_number': {
        minlength: 9,
        maxlength: 13
    },
    'password': {
        'required': true,
        minlength: 7,
        maxlength: 25,
        matching: 'retype_password'
    },
    'retype_password': {
        required: true,
        minlength: 7,
        maxlength: 25,
        matching: 'password'
    }
}

let validator = new Validator(config)