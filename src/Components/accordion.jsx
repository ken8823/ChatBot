import React, { useState, useEffect, useRef } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const Accordion = ({
  title,
  panel,
  isLastMessage,
  buttonStyles,
  containerStyles,
}) => {
  const [currentDisplayText, setCurrentDisplayText] = useState('')
  const index = useRef(0)

  useEffect(() => {
    index.current = 0
    setCurrentDisplayText('')

    const TYPE_DELAY = 50
    const timeout = setTimeout(() => {
      const typeText = () => {
        setCurrentDisplayText(
          (prevDisplayText) => prevDisplayText + title.charAt(index.current)
        )
        index.current++

        if (index.current <= title.length) {
          setTimeout(typeText, TYPE_DELAY)
        }
      }

      typeText()
    }, TYPE_DELAY)

    return () => {
      clearTimeout(timeout)
    }
  }, [title])

  return (
    <div className={containerStyles}>
      {isLastMessage ? (
        <div className="px-4 pt-4 pb-2 text-sm text-gray-500">{panel}</div>
      ) : (
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={buttonStyles}
                aria-expanded={open}
                aria-controls="accordion-panel"
              >
                <span>{currentDisplayText}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel
                id="accordion-panel"
                className="px-4 pt-4 pb-2 text-sm text-gray-500"
                aria-hidden={!open}
              >
                {panel}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      )}
    </div>
  )
}

Accordion.defaultProps = {
  buttonStyles: `
    flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2
    text-left text-sm font-medium text-purple-900 hover:bg-purple-200
    focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75
  `,
  containerStyles: 'max-w-md rounded-2xl bg-white p-2 mb-2',
}

export default Accordion
