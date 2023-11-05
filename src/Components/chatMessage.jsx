import React from 'react'
import Button from './button'
import CopyIcon from '../Constants/copyIcon'

const ChatMessage = ({ text, isUser, id }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
  }

  const label = isUser ? 'Me: ' : 'Bot: '

  const messageContainerClassName = isUser
    ? 'p-2 self-start bg-surfacePrimary w-full'
    : 'p-2 self-start bg-surfaceSecondary w-full'

  const copyButtonClassName = isUser
    ? 'text-textTertiary hover:text-white focus:outline-none ml-2'
    : 'text-textTertiary hover:text-white focus:outline-none'

  return (
    <div className={`${messageContainerClassName} ${isUser}`} key={id}>
      <div className="max-w-[880px] mx-auto flex p-6">
        <span className={`${isUser} px-10`}>{label}</span>
        <div
          className={`flex items-center space-x-2 justify-between overflow-x-auto w-full scrollbar-thumb-[#777] hover:scrollbar-thumb-[#ffffffc7] scrollbar-thin scrollbar-thumb-rounded`}
        >
          {text}
        </div>
        {!isUser && (
          <Button className={copyButtonClassName} onClick={handleCopy}>
            <CopyIcon />
          </Button>
        )}
      </div>
    </div>
  )
}

export default ChatMessage
