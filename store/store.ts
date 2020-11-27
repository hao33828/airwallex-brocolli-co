import { createStore, applyMiddleware, combineReducers, Store } from 'redux'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import createSagaMiddleware, { Task } from 'redux-saga'
import modal from './modal/reducer'
import requestInvite from './requestInvite/reducer'
import rootSaga from './saga'

export interface SagaStore extends Store {
  sagaTask: Task
}

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
  modal,
  requestInvite,
})

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload }
  } else {
    return combinedReducer(state, action)
  }
}

export type IRootState = ReturnType<typeof reducer>

const initStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(reducer, bindMiddleware([sagaMiddleware]))
  ;(store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

export const wrapper = createWrapper(initStore)
