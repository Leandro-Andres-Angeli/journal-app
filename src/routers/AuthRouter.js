import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import LoginScreen from '../components/auth/LoginScreen'
import RegisterScreen from '../components/auth/RegisterScreen'

export const AuthRouter = () => {
  return (
    <Switch>
    <Route  path="/auth/login" component={LoginScreen}>
  
    </Route>
    <Route path="/auth/register" component={RegisterScreen  }>
  
    </Route>
    <Redirect to="/auth/login" >
  
    </Redirect>
  </Switch>
  )
}
