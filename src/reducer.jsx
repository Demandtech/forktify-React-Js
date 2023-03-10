export const reducer = (state, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true }
    case 'GET_RECIPES':
      return {
        ...state,
        recipes: action.payload,
        isError: { show: false, msg: '' },
      }
    case 'STOP_LOADING':
      return { ...state, isLoading: false }
    case 'GET_SINGLE_RECIPE':
      let bookmark = state.bookmarkList.some((bookmark) => {
        return bookmark.id === action.payload.id
      })
      return {
        ...state,
        servings: action.payload.servings,
        isSingleLoading: false,
        singleRecipe: { ...action.payload, bookmark: bookmark },
      }
    case 'START_SINGLE_LOADING':
      return { ...state, isSingleLoading: true }
    case 'FETCH_ERROR':
      return {
        ...state,
        isError: {
          show: true,
          msg: 'Recipe not found, Search for another recipe',
        },
      }
    case 'NETWORK_ERROR':
      return { ...state, isError: { show: true, msg: action.payload } }
    case 'STOP_SINGLE_LOADING':
      return { ...state, isSingleLoading: false }

    case 'INCREASE_SERVINGS':
      return {
        ...state,
        servings: state.servings + 1,
      }
    case 'DECREASE_SERVINGS':
      return {
        ...state,
        servings: state.servings > 1 ? state.servings - 1 : state.servings,
      }
    case 'UPDATE_QUANTITY':
      const newIngredients = state.singleRecipe.ingredients.map(
        (ingredient) => {
          return {
            ...ingredient,
            quantity:
              (ingredient.quantity * action.payload) /
              state.singleRecipe.servings,
          }
        }
      )
      return {
        ...state,
        ingredients: newIngredients,
      }
    case 'ADD_BOOKMARK':
      let allArray = state.recipes.flat()
      return {
        ...state,
        singleRecipe: { ...state.singleRecipe, bookmark: true },
        bookmarkList: [
          ...state.bookmarkList,
          allArray.find((recipe) => recipe.id == action.payload),
        ],
      }
    case 'REMOVE_BOOKMARK':
      return {
        ...state,
        singleRecipe: {
          ...state.singleRecipe,
          bookmark: !state.singleRecipe.bookmark,
        },
        bookmarkList: state.bookmarkList.filter(
          (recipe) => recipe.id !== action.payload
        ),
      }
    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
  return state
}
