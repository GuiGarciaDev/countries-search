
export function upperFirstChar(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1, name.length).toLowerCase()
}

export function upperMultiplesFirstChar(str: string) {
    const arr = str.split(' ')
    const words = arr.filter(word => word !== '');
    let newString = '';
    words.forEach(el => {
        newString += upperFirstChar(el) + ' '
    })
    return newString.slice(0, -1)
}

// Usage (Examples):
// upperFirstChar('nice') => returns 'Nice'
// upperMultiplesFirstChar('nice day to eat pizza') => returns 'Nice Day To Eat Pizza'