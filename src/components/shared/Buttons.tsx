import { FC } from "react"

interface ButtonsPropsType {
  onClick: () => void
  active?: boolean
  children?:  JSX.Element | string
  className?: string
}

export const Button: FC<ButtonsPropsType> = ({ onClick, active, children, className }) => {
  return (
    <button
      type="button"
      className={`${buttonStyle} ${
        active && "opacity-50 cursor-not-allowed"
      } sm:rounded-md ${className}`}
      onClick={onClick}
      disabled={active}
    >
      {children}
    </button>
  )
}

export const ButtonPrev: FC<ButtonsPropsType> = ({ onClick, active }) => {
  return (
    <button
      type="button"
      className={`${buttonStyle} ${
        active && "opacity-50 cursor-not-allowed"
      } sm:rounded-l-md`}
      data-id="pagination-prev"
      onClick={onClick}
      disabled={active}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 20 20"
        className="w-5 h-5"
        aria-hidden="true"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>{" "}
      Previous Page
    </button>
  )
}

export const ButtonNext: FC<ButtonsPropsType> = ({ onClick, active }) => {
  return (
    <button
      type="button"
      className={`${buttonStyle} ${
        active && "opacity-50 cursor-not-allowed"
      } sm:rounded-r-md`}
      data-id="pagination-next"
      onClick={onClick}
      disabled={active}
    >
      Next Page{" "}
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 20 20"
        className="w-5 h-5"
        aria-hidden="true"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  )
}

const buttonStyle = "relative inline-flex items-center px-2 py-2 text-sm 5xl:text-xl font-medium text-gray-700 bg-white border border-gray-300 rounded-md sm:rounded-none hover:bg-gray-50"

interface TabSelectBtnPropTypes {
  isActive: boolean
  children: React.ReactNode
  onClick: () => void
}

export const TabSelectBtn: FC<TabSelectBtnPropTypes> = ({
  isActive,
  children,
  onClick,
}) => {
  return (
    <button
      className={`mr-4 group inline-flex items-center px-1 py-4 border-b-2 font-medium text-sm leading-5 cursor-pointer whitespace-nowrap ${
        isActive
          ? "border-indigo-500 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700"
          : "border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 focus:text-gray-600 focus:border-gray-300"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
