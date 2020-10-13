export const checkEmpty = (obj) => {
    let check = false;
    for (var key in obj) {
        if (obj[key] === null || obj[key] === "" || obj[key] === false) {
            check = true;
            break;
        }
    }
    return check;
}