import { PlusIcon } from "@heroicons/react/24/outline"

function NewChat() {
  return (
    <div className="flex items-center m-2 space-x-1 customParagraph cursor-pointer hover:bg-gray-700/70 transition-all duration-300 ease-in-out text-white hover:text-yellow-100 overflow-y-auto">
        <PlusIcon className="w-4 h-4" />
        <p>
            Новый чат
        </p>
    </div>
  )
}

export default NewChat