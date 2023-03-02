import { createContext, useContext, useReducer, useState } from 'react'
import { reducer } from './reducer'
import paginate from './utils'

const RecipeContext = createContext()

const initialState = {
  isLoading: false,
  recipes: []
}

export const RecipeProvider = ({ children }) => {
  const [state, dispatch] =  useReducer(reducer, initialState)

  const fetchRecipes = async (query) => {
    dispatch({type: 'START_LOADING'})
    try {
      const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}&key=78b50e84-cf51-49be-b811-6c91893ceca4`
      const response = await fetch(url)
      const data = await response.json()
      dispatch({type: 'GET_RECIPES', payload:paginate(data.data.recipes)})
     
    } catch (error) {
      console.log(error)
      dispatch({type:'STOP_LOADING'})
    } finally {
      dispatch({ type: 'STOP_LOADING' })
    }
  }

  return (
    <RecipeContext.Provider value={{...state, fetchRecipes}}>
      {children}
    </RecipeContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(RecipeContext)
}
