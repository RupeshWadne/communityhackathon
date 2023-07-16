"use client"
import { useState } from 'react'
import Subscribe from './components/Subscribe'
import Navbar from './components/Navbar'


export default function Example() {

  return (
      <div className="bg-white">
        <Navbar />
        <Subscribe />
      </div>
  )
}
