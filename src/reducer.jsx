export const reducer = (state, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true }
    case 'GET_RECIPES':
      return { ...state, recipes: action.payload }
    case 'STOP_LOADING':
      return { ...state, isLoading: false }
    case 'GET_SINGLE_RECIPE':
      return { ...state, isSingleLoading: false, singleRecipe: action.payload }
    case 'START_SINGLE_LOADING':
      return { ...state, isSingleLoading: true }
    case 'STOP_SINGLE_LOADING':
      return { ...state, isSingleLoading: false }
  }
  return state
}
