import { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import Search from './Component/Search'
import Restaurant from './Component/Restaurant'

function App() {
  return (
    <>
    <div className='container flex flex-col items-center p-4 mx-auto space-y-6'>
        <Header/>
        <Search/>
        <Restaurant/>
        </div>
    </>
  )
}

export default App
