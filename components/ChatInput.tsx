'use client'

import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { FormEvent, useState } from "react"
import { toast } from "react-hot-toast"
import { db } from "../firebase"
import ModelSelect from "./ModelSelect"
import useSWR from 'swr'

type ChatInputProps = {
  chatId: string
}

function ChatInput({chatId}: ChatInputProps) {
  
  const [text, setText] = useState('')
  const {data: session} = useSession()

  const {data: model} = useSWR('model', {
    fallbackData: 'text-davinci-003'
  })

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!text) return

    const input = text.trim()
    setText('')

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image! || '/no_image.png'
      }
    }

    await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
      message
    )

    const notification = toast.loading('Думаю...')

    await fetch('/api/askQuest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: input, 
          chatId, 
          model, 
          session,
      })
    }).then(() => {
      toast.success('Ответ получен', {
        id: notification
      })
    })
  }

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm outline-none">
      <form className="p-6 space-x-3 flex" onSubmit={submitHandler}>
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
      <div className="md: hidden">
        <ModelSelect />
      </div>
    </div>
  )
}

export default ChatInput