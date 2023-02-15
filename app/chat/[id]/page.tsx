import Chat from "../../../components/Chat"
import ChatInput from "../../../components/ChatInput"

type ChatPageProps = {
  params: {
    id: string
  }
}

function ChatPage({params: {id}}: ChatPageProps) {
  
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      ChatPage with id: {id}
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </div>
  )
}

export default ChatPage