let initialState={ name:"Bhimashi" }
let myReducer=(state=initialState,action)=>{
    console.log(action)
    if(action.type=="change")
        state.name=action.name
    return  { ...state}
}
export default myReducer