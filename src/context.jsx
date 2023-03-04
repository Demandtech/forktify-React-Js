import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { reducer } from './reducer'
import paginate from './utils'

const RecipeContext = createContext()

const initialState = {
  isLoading: false,
  isSingleLoading: false,
  recipes: [],
  singleRecipe: {},
  bookmarkList: [],
}

const url = 'https://forkify-api.herokuapp.com/api/v2/recipes'
const Api_key = 'f6bcdc3c-0d49-4457-86c0-f537a6ca6ae1'

export const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  //const [bookmark, setBookmark] = useState(false)

  const fetchRecipes = async (query) => {
    dispatch({ type: 'START_LOADING' })
    try {
      const response = await fetch(`${url}?search=${query}&key=${Api_key}`)
      const data = await response.json()
      console.log(data)
      dispatch({ type: 'GET_RECIPES', payload: paginate(data.data.recipes) })
    } catch (error) {
      console.log(error)
      dispatch({ type: 'STOP_LOADING' })
    } finally {
      dispatch({ type: 'STOP_LOADING' })
    }
  }

  const fetchSingleRecipe = async (id) => {
    dispatch({ type: 'START_SINGLE_LOADING' })
    try {
      const request = await fetch(`${url}/${id}?key=${Api_key}`)
      const data = await request.json()
      dispatch({ type: 'GET_SINGLE_RECIPE', payload: data.data.recipe })
      console.log(data)
    } catch (err) {
      console.log(err)
      dispatch({ type: 'STOP_SINGLE_LOADING' })
    }
  }

  const setBookmark = (id) => {
    if (state.singleRecipe.bookmark) {
      dispatch({ type: 'REMOVE_BOOKMARK', payload: id })
    } else {
      dispatch({ type: 'ADD_BOOKMARK', payload: id })
    }
  }

  //  useEffect(()=> {
  // if (bookmark) {
  //   dispatch({ type: 'REMOVE_BOOKMARK', payload: id })
  // } else {
  //   dispatch({ type: 'ADD_BOOKMARK', payload: id })
  // }
  //  }, [bookmark])
  return (
    <RecipeContext.Provider
      value={{ ...state, fetchRecipes, fetchSingleRecipe, setBookmark }}
    >
      {children}
    </RecipeContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(RecipeContext)
}
