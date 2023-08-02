import { forwardRef } from 'react'
import clsx from 'clsx'
import Image from 'next/image'

function Logo(props) {
  return (
    <div className="flex" style={{ height: 18, marginTop: 2 }}>
      <Image
        height={18}
        width={150}
        alt="CampusPlaza logo"
        src="https://i.imgur.com/9Iaqgwe.png"
      />
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 48 48"
      height="24"
      width="24"
      {...props}
    >
      <g transform="matrix(0.9,0,0,0.9,2.3999665767541067,2.5192732771118926)">
        <g id="hearts-symbol--entertainment-gaming-card-hearts-symbol">
          <path
            id="Union"
            fill="#ffffff"
            d="M43.749 27.826c2.265-3.464 2.871-7.894 1.929-11.955-2.013-9.25-13.162-13.03-20.107-6.831-.55.488-1.04 1.05-1.58 1.61-.541-.56-1.03-1.122-1.58-1.61-6.945-6.2-18.094-2.42-20.108 6.831-.942 4.061-.237 8.43 1.93 11.955 3.977 6.08 11.077 10.6 16.818 15.489 1.677 1.428 4.203 1.428 5.88 0 5.74-4.89 12.84-9.408 16.818-15.49Z"
          ></path>
        </g>
      </g>
    </svg>
  )
}

function UserIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 48 48"
      height="24"
      width="24"
      {...props}
    >
      <g transform="matrix(0.9,0,0,0.9,2.3999999999999986,2.3999999999999986)">
        <g id="user-square-single--square-geometric-human-person-single-user">
          <path
            id="Subtract"
            fill="#ffffff"
            fill-rule="evenodd"
            d="M2.044 8.136C1.778 11.407 1.5 16.599 1.5 24c0 7.401.278 12.593.544 15.864.267 3.288 2.804 5.825 6.092 6.092 3.272.266 8.463.544 15.864.544 7.402 0 12.593-.278 15.864-.544 3.288-.267 5.825-2.804 6.092-6.092.266-3.271.544-8.463.544-15.864 0-7.401-.278-12.593-.544-15.864-.267-3.288-2.804-5.825-6.091-6.092C36.593 1.778 31.402 1.5 24 1.5c-7.401 0-12.592.278-15.864.544-3.288.267-5.825 2.804-6.092 6.092ZM32 19a7.994 7.994 0 0 1-3.707 6.752c3.707 1.35 6.568 4.396 7.59 8.172.352 1.301-.395 2.695-1.74 2.784-2.33.154-5.67.292-10.143.292-4.473 0-7.812-.138-10.143-.292-1.344-.09-2.09-1.482-1.739-2.782 1.022-3.777 3.883-6.824 7.59-8.174A8 8 0 1 1 32 19Z"
            clip-rule="evenodd"
          ></path>
        </g>
      </g>
    </svg>
  )
}

export function AppScreen({ children, className, ...props }) {
  return (
    <div className={clsx('flex flex-col', className)} {...props}>
      <div className="flex justify-between px-4 pt-4">
        <Logo className="h-6 flex-none" />
        <div className="flex">
          <MenuIcon className="h-6 w-6 flex-none" />
          <UserIcon className="h-6 w-6 flex-none" />
        </div>
      </div>
      {children}
    </div>
  )
}

// AppScreen.Header = forwardRef(function AppScreenHeader({ children }, ref) {
//   return (
//     <div ref={ref} className="mt-6 px-4 text-white">
//       {children}
//     </div>
//   )
// })

AppScreen.Title = forwardRef(function AppScreenTitle({ children }, ref) {
  return (
    <div ref={ref} className="text-2xl text-white">
      {children}
    </div>
  )
})

AppScreen.Subtitle = forwardRef(function AppScreenSubtitle({ children }, ref) {
  return (
    <div ref={ref} className="text-sm text-gray-500">
      {children}
    </div>
  )
})

AppScreen.Body = forwardRef(function AppScreenBody(
  { children, className },
  ref
) {
  return (
    <div ref={ref} className={clsx('flex-auto rounded-t-2xl', className)}>
      {children}
    </div>
  )
})
