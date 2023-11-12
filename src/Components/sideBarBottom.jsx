import DarkMode from './darkMode'

export default function SideBarBottom({ darkMode, toggleDarkMode }) {
  return (
    <section
      className={`w-[240px] p-[10px] border-t border-gray-500 bg-[#202123]`}
    >
      <div className="mb-[10px]">
        <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </section>
  )
}
