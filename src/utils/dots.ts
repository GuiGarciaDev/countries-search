
export default function dotsFormater(number: string) {
    return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

// Usage: (Example)
// dotsFormater('123456789') => '123.456.789'
    