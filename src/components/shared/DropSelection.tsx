import { ChangeEvent, FC } from "react"

interface DropSelectionPropsType {
  onChange: (a: ChangeEvent<HTMLSelectElement>) => void
  value: string | number
}

const DropSelection: FC<DropSelectionPropsType> = ({
  onChange,
  value,
}) => {
  return (
    <div className="flex items-center mt-3 sm:mt-0">
      <label
        htmlFor="showLimit"
        className="block mr-2 text-base 5xl:text-xl font-medium text-gray-700"
      >
        Show:
      </label>
      <select
        id="showLimit"
        defaultValue={10}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-18 block p-2.5"
        onChange={onChange}
      >
        <option value={5}>5 / page</option>
        <option value={10}>10 / page</option>
        <option value={15}>15 / page </option>
        <option value={20}>20 / page</option>
      </select>
    </div>
  )
}

export default DropSelection
