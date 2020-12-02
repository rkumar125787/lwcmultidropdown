const reduceErrors = (errors) => {
    if (!Array.isArray(errors)) {
        errors = [errors];
    }
    return (
        errors
            // Remove null/undefined items
            .filter((error) => !!error)
            // Extract an error message
            .map((error) => {
                // UI API read errors
                if (Array.isArray(error.body)) {
                    return error.body.map((e) => e.message);
                } else if (error.body && typeof error.body.message === 'string') {
                    // UI API DML, Apex and network errors
                    let codeStack = !isEmpty(error.body.stackTrace)
                        ? '.[ Code Stack: ' + error.body.stackTrace + ']'
                        : '';
                    return error.body.message + codeStack;
                } else if (typeof error.message === 'string') {
                    // JS errors
                    return error.message;
                }
                // Unknown error shape so try HTTP status text
                return error.statusText;
            })
            // Flatten
            .reduce((prev, curr) => prev.concat(curr), [])
            // Remove empty strings
            .filter((message) => !!message)
    );
};
const isEmpty = (val) => {
    if (val == 'undefined' || val == undefined || val == '' || val == null) {
        return true;
    } else {
        return false;
    }
};

const returnErrormessage = (error) => {
    let errorMessage = '';
    reduceErrors(error).forEach((el) => {
        errorMessage = errorMessage + el + ';';
    });
    console.log(errorMessage.slice(0, -1));
    return errorMessage.slice(0, -1);
};

// verify if its custom user apex exception
const checkerrtype = (error) => {
    try {
        if (error.hasOwnProperty('body')) {
            if (error.body.hasOwnProperty('message')) {
                if (!isEmpty(error.body.message) && typeof error.body.message === 'string') {
                    if (isJson(error.body.message)) {
                        if (!isEmpty(JSON.parse(error.body.message).errorType)) {
                            if (JSON.parse(error.body.message).errorType == 'apexcustomerror') {
                                return true;
                            } else {
                                return false;
                            }
                        }
                    }
                }
            }
        }
    } catch (err) {
        console.log('checkerrtype error >>' + JSON.stringify(err));
        return false;
    }
    return false;
};

//verify if string is JSON type or not
const isJson = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};
// returns all object key in lowercase
let objectKeysToLowerCase = (input) => {
    if (typeof input !== 'object') return input;
    if (Array.isArray(input)) return input.map(objectKeysToLowerCase);
    return Object.keys(input).reduce(function (newObj, key) {
        let val = input[key];
        let newVal = typeof val === 'object' ? objectKeysToLowerCase(val) : val;
        newObj[key.toLowerCase()] = newVal;
        return newObj;
    }, {});
};
//return uniquenumber 
let generateuniqueKey = () => {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = ((dt + Math.random() * 16) % 16) | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
}
// please note this if client want to treat null undefined in same way 
const strOf = (input) => {
    return (input === undefined || input == null) ? '' : input.toString();
}
//remove method using slice 
const removeItem = (items, i) => {
    let data = items;
    data.splice(i, 1);
    return data;
}
//assigned value 
const returnAfterassignmnet = (item, index, prop, value) => {
    let data = item;
    data[index][prop] = value;
    return data;
}
export { reduceErrors, isEmpty, returnErrormessage, checkerrtype, objectKeysToLowerCase, generateuniqueKey, strOf, removeItem, returnAfterassignmnet };