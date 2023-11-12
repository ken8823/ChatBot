import React, { useState, useEffect, useRef } from 'react'
import Button from './button'
import CopyIcon from '../Constants/copyIcon'
import Accordion from './accordion'
import BotIcon from '../Constants/botIcon'
import UserIcon from '../Constants/userIcon'

const ChatMessage = ({ text, isUser, id, darkMode }) => {
  const [currentDisplayText, setCurrentDisplayText] = useState('')
  let index = useRef(0)

  useEffect(() => {
    index.current = 0
    setCurrentDisplayText('')
  }, [text])

  useEffect(() => {
    let timeout

    const typeText = async () => {
      setCurrentDisplayText(
        (displayText) => displayText + text.charAt(index.current)
      )
      index.current++

      if (index.current <= text.length) {
        await new Promise((resolve) => setTimeout(resolve, 50)) // Delay between typing each character
        typeText()
      }
    }

    timeout = setTimeout(typeText, 1000) // Delay before typing starts (1 second in this example)

    return () => {
      clearTimeout(timeout) // Clean up the timeout on component unmount
    }
  }, [currentDisplayText, text])

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
  }

  const label = isUser ? <UserIcon /> : <BotIcon />

  const messageContainerClassName = isUser
    ? `p-2 self-start w-full ${
        darkMode ? 'bg-surfacePrimary' : 'bg-[#FFFFFF]'
      } ${darkMode ? 'text-textPrimary' : 'text-surfacePrimary'}`
    : `p-2 self-start w-full ${
        darkMode ? 'bg-surfaceSecondary' : 'bg-[#F7F7F8]'
      } ${darkMode ? 'text-textPrimary' : 'text-surfacePrimary'}`

  const copyButtonClassName = isUser
    ? 'text-textTertiary hover:text-white focus:outline-none ml-2'
    : 'text-textTertiary hover:text-white focus:outline-none'

  return (
    <div className={`${messageContainerClassName} ${isUser}`} key={id}>
      <div className="max-w-[880px] mx-auto flex p-6">
        <span className={`${isUser} px-10`}>{label}</span>
        <div
          className={`flex items-center space-x-2 overflow-x-auto w-full scrollbar-thumb-[#777] hover:scrollbar-thumb-[#ffffffc7] scrollbar-thin scrollbar-thumb-rounded`}
        >
          {isUser ? (
            <span className="ml-2">{text}</span>
          ) : (
            <div className="mb-2 w-full">
              <Accordion
                title={currentDisplayText}
                panel={currentDisplayText}
              />
              <Accordion
                title={currentDisplayText}
                panel={currentDisplayText}
              />
              <div className="ml-2">{currentDisplayText}</div>
            </div>
          )}
        </div>
        {!isUser && (
          <span>
            <Button className={copyButtonClassName} onClick={handleCopy}>
              <CopyIcon />
            </Button>
          </span>
        )}
      </div>
    </div>
  )
}

export default ChatMessage
