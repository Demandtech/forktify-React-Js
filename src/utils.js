const paginate = (recipes) => {
  const itemsPerPage = 10
  const pages = Math.ceil(recipes.length / itemsPerPage)

  const newRecipes = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage
    return recipes.slice(start, start + itemsPerPage)
  })
  return newRecipes
}

export default paginate
