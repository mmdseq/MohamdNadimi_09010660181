import { useLocation, useNavigate } from 'react-router-dom'
import TextItem from './TextItem'

const sortNums = (nums, ascending) => {
  return nums.sort((numA, numB) => {
    if (ascending) {
      return numA > numB ? 1 : -1
    } else {
      return numA < numB ? 1 : -1
    }
  })
}

const TextList = (props) => {
  const navigate = useNavigate()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)

  const isSortingAscending = queryParams.get('sort') === 'asc'

  const sortedNums = sortNums(props.nums, isSortingAscending)

  const changeSortingHandler = () => {
    navigate({
      search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`,
    })
  }

  return (
    <div className='container mx-auto p-6 text-center'>
      <button
        className='p-3 px-6 my-6 bg-cyan-700 text-white rounded hover:bg-cyan-600'
        onClick={changeSortingHandler}
      >
        Sort {isSortingAscending ? 'Descending' : 'Ascending'}
      </button>

      <ul className='space-y-3 px-3'>
        {sortedNums.map((num) => (
          <TextItem num={num} key={num} />
        ))}
      </ul>
    </div>
  )
}

export default TextList
