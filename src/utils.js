import Fraction from 'fraction.js'

const paginate = (recipes) => {
  const itemsPerPage = 10
  const pages = Math.ceil(recipes.length / itemsPerPage)

  const newRecipes = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage
    return recipes.slice(start, start + itemsPerPage)
  })
  return newRecipes
}

export const getFraction = (dec) => {
  var x = new Fraction(dec)
  var res = x.toFraction(true)
  return res
}

export default paginate
