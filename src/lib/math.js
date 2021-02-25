//export function add(a, b) {
//return a + b
//}

export function add(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current
  })
}

export function subtract(a, b) {
  return a - b
}

export function multiply(a, b) {
  return a * b
}

export function divide(a, b) {
  return a / b
}
