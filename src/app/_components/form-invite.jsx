"use client"

import Image from 'next/image'
import React, { useRef } from 'react'

function FormInvite() {
    const inputRef = useRef(null)

    async function handleAccept() {
      try {
        await fetch("/api/join-party", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: inputRef.current.value }),
        
        })
        alert("Super ! On va bien s'amuser !")
      } catch {
        alert("Oups, il y a eu une erreur !")
      }
    }
  
    async function handleDecline() {
      try {
        await fetch("/api/refuse-party", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: inputRef.current.value }),
        
        })
        alert("Dommage, on se verra une autre fois !")
      } catch {
        alert("Oups, il y a eu une erreur !")
      }
    }

  return (
    <form action="" className="relative flex flex-col mt-8">
        <Image src="/diddle-cake.png" height={120} width={127} className="absolute -top-1/2 right-0" />
          <label htmlFor="name" className="text-2xl font-bold mt-4">Tu viens ?</label>
          <input ref={inputRef} type="text" id="name" name="name" placeholder="Ton petit nom (ex: Jeanne)" className="px-3 py-2 text-lg my-3 rounded-xl border border-pink-400" />
          <div className="flex gap-4 mt-2">
            <button type="button" onClick={handleAccept} className="flex-1 py-2 rounded-xl bg-pink-400">Avec plaisir</button>
            <button type="button" onClick={handleDecline} className="flex-1 py-2 rounded-xl bg-pink-400">Non désolé</button>
          </div>
    </form>
  )
}

export default FormInvite