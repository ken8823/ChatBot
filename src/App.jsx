import ChatWindow from './Components/chatWindow'

function App() {
  return (
    <div className="flex h-screen justify-around text-textPrimary bg-surfacePrimary box-border font-sans text-lg">
      <main className="w-full">
        <ChatWindow />
      </main>
    </div>
  )
}

export default App
