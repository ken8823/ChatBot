const BotIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="tabler-icon tabler-icon-robot"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3l-1-1v-3l1-1V9a2 2 0 0 1 2-2zM10 16h4" />
    <circle cx={8.5} cy={11.5} r={0.5} fill="currentColor" />
    <circle cx={15.5} cy={11.5} r={0.5} fill="currentColor" />
    <path d="M9 7 8 3M15 7l1-4" />
  </svg>
)
export default BotIcon
