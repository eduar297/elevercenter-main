import React from 'react'
import { Redirect } from 'react-router-dom'
import { LOCALTOKEN } from '../config'

export default function LoginPage() {
    localStorage.removeItem(LOCALTOKEN)
    return (<Redirect to="/"></Redirect>)
}