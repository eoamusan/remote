export function currency(amount) {
    if (amount) {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
        return amount;
    }
}