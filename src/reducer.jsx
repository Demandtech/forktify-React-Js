

export const reducer = (state, action)=>{
  switch(action.type){
    case 'START_LOADING':
     return {...state, isLoading:true};
    case 'GET_RECIPES':
     return {...state, recipes:action.payload};
    case 'STOP_LOADING':
      return {...state, isLoading:false}
  }
  return state
}