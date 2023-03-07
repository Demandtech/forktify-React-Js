import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { reducer } from './reducer'
import paginate from './utils'
import { v4 as uuid4 } from 'uuid'

const RecipeContext = createContext()
let bookmarks = []
if (localStorage.getItem('bookmarks')) {
  bookmarks = JSON.parse(localStorage.getItem('bookmarks'))
} else {
  bookmarks = []
}

const initialState = {
  isLoading: false,
  isSingleLoading: false,
  isError: { show: false, msg: '' },
  recipes: [],
  singleRecipe: {},
  bookmarkList: bookmarks,
  servings: '',
  ingredients: [],
}

const url = 'https://forkify-api.herokuapp.com/api/v2/recipes'
const Api_key = '27740627-f9f4-4a5e-b0e9-ef10a9837cfe'

export const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarkList))
  }, [state.bookmarkList])

  const fetchRecipes = async (query) => {
    dispatch({ type: 'START_LOADING' })
    try {
      const response = await fetch(`${url}?search=${query}&key=${Api_key}`)
      const data = await response.json()

      if (data.results < 1 || data.data.recipes.length < 1) {
        dispatch({ type: 'FETCH_ERROR' })
      } else {
        dispatch({ type: 'GET_RECIPES', payload: paginate(data.data.recipes) })
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: 'NETWORK_ERROR',
        payload: 'Network Error please Connect to Internet or try again later',
      })
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
    } catch (err) {
      console.log(err)
      dispatch({ type: 'STOP_SINGLE_LOADING' })
    }
  }

  const setBookmark = (id) => {
    dispatch({ type: 'SET_BOOKMARKS', payload: id })
  }

  const toggleServings = (command) => {
    if (command === 'INC') {
      dispatch({ type: 'INCREASE_SERVINGS' })
    }
    if (command === 'DESC') {
      dispatch({ type: 'DECREASE_SERVINGS' })
    }
  }

  const updateQuantity = () => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: state.servings })
  }

  const getBookmarkList = () => {
    console.log('bookmark')
    dispatch({ type: 'BOOKMARK_LIST' })
  }

  useEffect(() => {
    getBookmarkList()
  }, [state.singleRecipe.bookmark]) 

  return (
    <RecipeContext.Provider
      value={{
        ...state,
        fetchRecipes,
        fetchSingleRecipe,
        setBookmark,
        toggleServings,
        updateQuantity,
        getBookmarkList
      }}
    >
      {children}
    </RecipeContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(RecipeContext)
}
