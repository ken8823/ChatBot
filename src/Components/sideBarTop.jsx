import Button from './button'

function SideBarTop() {
  const handleNewChatClick = () => {
    window.location.reload()
  }

  return (
    <section className="w-[240px] p-[10px] bg-[#202123] flex flex-col justify-between h-full">
      <div className="mt-[10px] mb-[10px]">
        <Button
          className="w-full p-3 border border-gray-300 rounded-md text-left hover:bg-white hover:bg-opacity-10 transition-all duration-250 ease text-white"
          onClick={handleNewChatClick}
        >
          <span className="pl-2 pr-4">+</span>
          New Chat
        </Button>
      </div>
    </section>
  )
}

export default SideBarTop
