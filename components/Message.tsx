import { DocumentData } from "firebase/firestore"

type MessageProps = {
  message: DocumentData
}

function Message({message}: MessageProps) {

  console.log(message.user)

  return (
    <div>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img src={message.user.avatar || '/no_image.png'} alt="" className="w-8 h-8" />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  )
}

export default Message