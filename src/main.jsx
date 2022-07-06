import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoProvider } from './context/TodoContext'
import { AppRouter } from './routers/AppRouter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <TodoProvider>
    <AppRouter />
  </TodoProvider>
)
