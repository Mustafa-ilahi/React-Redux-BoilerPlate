const INITIAL_STATE = {
    userName: "Mustafa Ilahi",
    email:"mustafa@gmail.com",   
}

export default(state = INITIAL_STATE,action) => {
    console.log("action=>",action)
    return state;
}