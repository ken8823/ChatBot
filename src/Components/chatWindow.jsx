import React, { useState, useEffect, useRef } from 'react'
import Button from './button'
import Textarea from './textarea'
import ChatMessage from './chatMessage'
import SendIcon from '../Constants/sendIcon'
import Header from './header'

const ChatWindow = ({ darkMode }) => {
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [isEnterDisabled, setIsEnterDisabled] = useState(false)
  const [isBotResponding, setIsBotResponding] = useState(false)
  const messageContainerRef = useRef(null)

  const handleInputChange = (e) => {
    setInputMessage(e.target.value)
  }

  const handleSendMessage = async () => {
    if (inputMessage.trim() !== '') {
      const userMessage = { text: inputMessage, isUser: true }
      setMessages((prevMessages) => [...prevMessages, userMessage])

      setInputMessage('')
      setIsEnterDisabled(true)
      setIsBotResponding(true)

      // Simulate bot response
      setTimeout(() => {
        const botResponse = 'This is a bot response.'
        const botMessage = { text: botResponse, isUser: false }

        // Add bot message to the messages array
        setMessages((prevMessages) => [...prevMessages, botMessage])
        setIsEnterDisabled(false)
        setIsBotResponding(false)
      }, 500)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (!isEnterDisabled) {
        handleSendMessage()
      }
    }
  }

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight
    }
  }, [messages])

  return (
    <>
      <div className="flex flex-col text-sm w-full justify-center">
        <Header />
        <div
          className="flex flex-col flex-grow gap-2 overflow-auto scrollbar-thumb-[#777] hover:scrollbar-thumb-[#ffffffc7] scrollbar-thin scrollbar-thumb-rounded"
          ref={messageContainerRef}
        >
          <div className="flex flex-col">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                text={message.text}
                isUser={message.isUser}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:pt-0 border-t md:border-t-0 mt-6">
          <form className="flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
            <div className="flex w-full items-center">
              <div
                className={`w-full flex flex-grow rounded-xl border border-black/10 relative shadow-md ${
                  darkMode ? 'bg-[#40414f]' : 'bg-[#FFFFFF]'
                } ${darkMode ? 'text-textPrimary' : 'text-[#40414f]'}`}
              >
                <Textarea
                  value={inputMessage}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Send a message"
                  className={`scrollbar-thumb-[#777] hover:scrollbar-thumb-[#ffffffc7] scrollbar-thin scrollbar-thumb-rounded m-0 bottom-3 p-1 left-3 w-full resize-none py-[10px] pl-5 focus:outline-none focus-visible:outline-none focus-visible:ring-0 shadow-none bg-transparent md:py-4 md:pr-14 ${isEnterDisabled}`}
                  darkMode={darkMode}
                />
                {isBotResponding ? (
                  <div className="absolute p-1 rounded-md md:bottom-3 md:p-2 md:right-3 hover:bg-gray-900 disabled:hover:bg-transparent right-2 disabled:text-gray-400 disabled:opacity-40">
                    {'...'}
                  </div>
                ) : (
                  <Button
                    onClick={handleSendMessage}
                    disabled={inputMessage.trim() === ''}
                    className="absolute p-1 rounded-md md:bottom-3 md:p-2 md:right-3 hover:bg-gray-900 disabled:hover:bg-transparent right-2 disabled:text-gray-400 disabled:opacity-40"
                  >
                    <SendIcon />
                  </Button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ChatWindow
