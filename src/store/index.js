import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";

// const initial_state = {
//     counterValue: 0
// }
// const counterDispatcher = (state = initial_state, action) => {
//     if (action.type == "INCREMENT") {
//         return { counterValue: state.counterValue + 1 }
//     }
//     if (action.type == "DECREMENT") {
//         return { counterValue: state.counterValue - 1 }
//     }
//     if (action.type == "ADD") {
//         return { counterValue: state.counterValue + action.payload.data }
//     }
//     if (action.type == "SUBTRACT") {
//         return { counterValue: state.counterValue - action.payload.data }
//     }
//     return state
// }

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counterValue: 0,
    },
    reducers: {
        increment: (state, action) => {
            state.counterValue++;
        },
        decrement: (state, action) => {
            state.counterValue--;
        },
        add: (state, action) => {
            state.counterValue += action.payload.data
        },
        subtract: (state, action) => {
            state.counterValue -= action.payload.data
        },
    }
})

const createCounter = configureStore({ reducer: { counter: counterSlice.reducer } })

export const counterAction = counterSlice.actions
export default createCounter