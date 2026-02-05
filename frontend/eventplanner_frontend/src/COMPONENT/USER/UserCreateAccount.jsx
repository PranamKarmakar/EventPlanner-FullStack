import React, { useState } from 'react'
import axios from 'axios'
import './UserCreateAccount.css'

export default function UserCreateAccount() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    console.log(form)
    const { email, name, password } = form

    if (name === '') {
      setErrorMsg('Name required.')
      return
    }

    if (email === '') {
      setErrorMsg('Email required.')
      return
    }

    if (password === '') {
      setErrorMsg('Password required.')
      return
    }

    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setErrorMsg('Invalid email.')
      return
    }

    if (password.length < 8) {
      setErrorMsg('Password length should be greater than 8.')
      return
    }

    axios
      .post('http://localhost:7076/register', form)
      .then((res) => {
        console.log(res)
        setSuccessMsg('Registration successful. Please log in.')
      })
      .catch((err) => {
        console.log(err)
        setErrorMsg(err.response.data.errorMsg)
      })
  }

  return (
    <div>
      <title>User's Create Account</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <form id="formn" onSubmit={handleSignUp}>
        <h2 id="hn">User Create Account</h2>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="name" onChange={handleInputChange} required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={handleInputChange} required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={handleInputChange} required />
        <button type="submit">Create Account</button>
        {errorMsg && <div className="error-msg">{errorMsg}</div>}
        {successMsg && <div className="success-msg">{successMsg}</div>}
        <div className="form-footer">
          <a href="/UserLog">Already have an account? back to login</a>
        </div>
      </form>
    </div>
  )
}