import {INCREMENT, DECREMENT} from '../redux/action-types'

//同步的action都返回一个对象，异步的action返回的是一个函数

export const increment = number => ({type: INCREMENT, data: number});
export const decrement = number => ({type: DECREMENT, data: number});
//异步action
export const incrementAsync = (number) => (dispatch => {
  setTimeout(() =>{
    dispatch(increment(number))
  } ,1000)
});
