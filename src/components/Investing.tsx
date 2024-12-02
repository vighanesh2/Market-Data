'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = async () => {
 fetch('http://localhost:3000/api/getData')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
    
        <Button onClick={handleSubmit}>
          Submit
        </Button>
    
    </main>
  )
}

