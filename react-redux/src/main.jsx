import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createStore, combineReducers, applyMiddleware } from "redux"
import { accountReducer } from './reducers/account.js'
import { bonusReducer } from './reducers/bonus.js'
import logger from 'redux-logger'
import { thunk } from 'redux-thunk'

const store = createStore(combineReducers({
  account: accountReducer,
  bonus: bonusReducer
}), applyMiddleware(logger, thunk))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App store={store} />
  </StrictMode>,
)
