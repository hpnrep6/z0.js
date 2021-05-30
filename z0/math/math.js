/**
 * Calculates the exponent of two that will result in a value higher than the input
 * For example: value = 1000 | return value = 10 | because 2^10 = 1024
 * 
 * @param {Number} value 
 */
export function powerOfTwoRoundedUp(value) {
    let exp = 0;

    for(; value > 1; value /= 2) {
        exp++;
    }

    return exp;
}
