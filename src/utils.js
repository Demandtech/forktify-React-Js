const paginate = (recipes) => {
  const itemsPerPage = 10
  const pages = Math.ceil(recipes.length / itemsPerPage)

  const newRecipes = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage
    return recipes.slice(start, start + itemsPerPage)
  })
  return newRecipes
}

export function decimalToFraction(decimal) {
  let sign = decimal < 0 ? -1 : 1
  decimal = Math.abs(decimal)
  let wholePart = Math.floor(decimal)
  let fractionPart = decimal - wholePart
  let tolerance = 1.0e-6
  let numerator = 1
  let denominator = 1

  while (Math.abs(fractionPart - Math.round(fractionPart)) > tolerance) {
    denominator *= 10
    numerator = Math.round(fractionPart * denominator)
    let gcd = getGCD(numerator, denominator)
    numerator /= gcd
    denominator /= gcd
    fractionPart = Math.abs(fractionPart - numerator / denominator)
  }

  numerator = Math.round(fractionPart * denominator)

  if (numerator === denominator) {
    numerator = 1
    denominator = 1
  }

  numerator += wholePart * denominator

  let gcd = getGCD(numerator, denominator)
  numerator /= gcd
  denominator /= gcd

  return sign * numerator + '/' + denominator
}

function getGCD(a, b) {
  if (b === 0) {
    return a
  }
  return getGCD(b, a % b)
}

export default paginate
