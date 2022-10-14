import TextList from '../components/TextList'
const Home = () => {
  const nums = new Set()
  while (nums.size !== 10) {
    nums.add(Math.floor(Math.random() * 100) + 1)
  }

  return (
    <>
      <TextList nums={[...nums]} />
    </>
  )
}

export default Home
