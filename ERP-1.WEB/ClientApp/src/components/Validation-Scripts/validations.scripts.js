export function Validator_Engine(test_value, label) {
    let msg = '';
    if (test_value.length > 0) {
        switch (label) {
            case 'email': msg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(test_value) ? '' : 'please write email-id in correct format'; break;
            case 'mobile': msg = test_value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) ? '' : 'please write correct mobile number'; break;
            default: msg = ''; break;
        }

    } else {}
    return msg;
}