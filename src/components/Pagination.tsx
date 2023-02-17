import { FC } from "react"

interface PaginationPropsType {
    children?: JSX.Element[]
}

const Pagination:FC<PaginationPropsType> = ({children}) => {
  return (
    <div className="flex self-center justify-center items-center w-full mb-5">
      <div className="flex flex-1 px-4 py-3 bg-white border-t border-gray-200 shadow-md sm:px-6">
        <div className="sm:flex sm:items-center sm:justify-between w-full">
          <div
            className="relative z-0 flex justify-between w-full -space-x-px rounded-md flex-col sm:flex-row items-center"
            aria-label="Pagination"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagination
