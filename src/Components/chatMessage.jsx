import React, { useEffect } from 'react'
import Button from './button'
import CopyIcon from '../Constants/copyIcon'
import Accordion from './accordion'
import BotIcon from '../Constants/botIcon'
import UserIcon from '../Constants/userIcon'

const ChatMessage = ({ text, isUser, id, darkMode }) => {
  const containerStyle = {
    p: 'p-2 self-start w-full',
    bgColor: isUser
      ? darkMode
        ? 'bg-surfacePrimary'
        : 'bg-[#FFFFFF]'
      : darkMode
      ? 'bg-surfaceSecondary'
      : 'bg-[#F7F7F8]',
    textColor: darkMode ? 'text-textPrimary' : 'text-surfacePrimary',
  }

  const copyButtonClassName = `text-textTertiary hover:text-white focus:outline-none ${
    isUser ? 'ml-2' : ''
  }`

  const label = isUser ? <UserIcon /> : <BotIcon />

  const renderAccordionText = () => {
    const accordionTexts = text.split('\n')
    const isLastMessage = id === accordionTexts.length - 1

    return accordionTexts.map((accordionText, index) => (
      <Accordion
        key={index}
        title={accordionText}
        panel={index === isLastMessage ? accordionText : null}
      />
    ))
  }

  useEffect(() => {
    const messageContainer = document.getElementById('message-container')
    if (messageContainer) {
      messageContainer.scrollTop = messageContainer.scrollHeight
    }
  }, [text])

  return (
    <div
      className={`${containerStyle.p} ${containerStyle.bgColor} ${containerStyle.textColor}`}
      key={id}
    >
      <div className="max-w-[880px] mx-auto flex p-6">
        <span className={`${isUser} px-10`}>{label}</span>
        <div
          id="message-container"
          className={`flex items-center space-x-2 overflow-x-auto w-full scrollbar-thumb-[#777] hover:scrollbar-thumb-[#ffffffc7] scrollbar-thin scrollbar-thumb-rounded`}
        >
          {isUser ? (
            <span className="ml-2">{text}</span>
          ) : (
            <div className="mb-2 w-full">{renderAccordionText()}</div>
          )}
        </div>
        {!isUser && (
          <span>
            <Button
              className={copyButtonClassName}
              onClick={() => navigator.clipboard.writeText(text)}
            >
              <CopyIcon />
            </Button>
          </span>
        )}
      </div>
    </div>
  )
}

export default ChatMessage
