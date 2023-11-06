import ChatWindow from './Components/chatWindow'
import SideBar from './Components/sideBar'

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-around text-textPrimary bg-surfacePrimary box-border font-sans">
      <main className="flex absolute top-0 bottom-0 right-0 left-0">
        <SideBar />
        <ChatWindow />
      </main>
    </div>
  )
}

export default App
