'use client'

import { signIn } from "next-auth/react"
import Image from "next/image"

function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex items-center justify-center flex-col">
        <Image src='/chatLogo.png' alt="chatLogo" width={300} height={300} />
        <button className="text-white animate-pulse"
            onClick={() => signIn('google')}
        >
            для начала авторизуйся
        </button>
    </div>
  )
}

export default Login