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
        bookmark.id === action.payload.id
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
    case 'SET_BOOKMARKS':
      return {
        ...state,
        singleRecipe: {
          ...state.singleRecipe,
          bookmark: !state.singleRecipe.bookmark,
        },
      }

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
    case 'BOOKMARK_LIST':
      
      return { ...state, bookmarkList: [...newBookmarkList] }
    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
  return state
}
