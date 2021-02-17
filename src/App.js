import React from 'react'
import Header from './Header'
import {BrowserRouter as Router ,Route ,Switch} from 'react-router-dom'
import Addproduct from './Addproduct'
import Products from './Products'
import EditPage from './EditPage'


export default function App() {
  return (
    <div>
      <Router>
      <Header></Header>
      <Route path="/addproduct" component={Addproduct}></Route>
      <Route path="/products" component={Products}></Route>
      <Route path="/edit/:id" component={EditPage}></Route>

      </Router>
    </div>
  )
}
