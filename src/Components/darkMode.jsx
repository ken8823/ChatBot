import Button from './button'

export default function DarkMode({ darkMode, toggleDarkMode }) {
  return (
    <Button
      onClick={toggleDarkMode}
      className={`bg-gray-300 dark:bg-gray-700 p-2 rounded-md text-gray-800 dark:text-gray-200`}
    >
      {darkMode ? 'Dark Mode' : 'Light Mode'}
    </Button>
  )
}
