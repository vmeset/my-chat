'use client'

import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import { useSession } from "next-auth/react"
import { useState } from "react"

interface ChatInputProps {
  chatId: string
}

function ChatInput({chatId}: ChatInputProps) {
  
  const [text, setText] = useState('')
  const {data: session} = useSession()
  const submitHandler = () => {

  }

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm outline-none">
      <form action="" className="p-6 space-x-3 flex" onSubmit={submitHandler}>
        <input className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300" disabled={!session}
        type="text" value={text} onChange={e => setText(e.target.value)}
          placeholder="Напиши уже что-нибудь.."
        />
        <button type="submit" disabled={!session || !text}
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="w-4 h-4 -rotate-45" />
        </button>
      </form>
    </div>
  )
}

export default ChatInput