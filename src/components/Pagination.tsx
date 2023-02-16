import { FC } from "react"

interface PaginationPropsType {
    children?: JSX.Element[]
}

const Pagination:FC<PaginationPropsType> = ({children}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-1 max-w-2xl px-4 py-3 mt-12 bg-white border-t border-gray-200 shadow-md sm:px-6">
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
