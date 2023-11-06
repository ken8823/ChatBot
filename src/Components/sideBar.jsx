import Button from './button'

function SideBar() {
  return (
    <section className="w-[240px] p-[10px] bg-[#202123]">
      <Button className="w-full p-3 border border-gray-300 rounded-md text-left hover:bg-white hover:bg-opacity-10 transition-all duration-250 ease">
        <span className="pl-2 pr-4">+</span>New Chat
      </Button>
    </section>
  )
}

export default SideBar
