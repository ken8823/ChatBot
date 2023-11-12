import { useState, useEffect } from 'react'
import ChatWindow from './Components/chatWindow'
import SideBarTop from './Components/sideBarTop'
import SideBarBottom from './Components/sideBarBottom'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const htmlElement = document.querySelector('html')
    if (darkMode) {
      htmlElement.classList.add('dark')
    } else {
      htmlElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  document.title = 'Chat Bot'

  return (
    <div
      className={`flex flex-col min-h-screen justify-around ${
        darkMode ? 'bg-surfacePrimary' : 'bg-[#FFFFFF]'
      } ${
        darkMode ? 'text-textPrimary' : 'text-surfacePrimary'
      } box-border font-sans`}
    >
      <main className="flex absolute top-0 bottom-0 right-0 left-0">
        <div className="flex flex-col">
          <SideBarTop />
          <SideBarBottom darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <ChatWindow darkMode={darkMode} />
      </main>
    </div>
  )
}

export default App
