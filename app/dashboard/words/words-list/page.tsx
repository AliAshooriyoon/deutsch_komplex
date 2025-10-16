"use server"

const WordsList = async () => {
  fetch("http://localhost:3000/api/createWord")
  return <>
    <div className=''>Words list</div>
  </>
}
export default WordsList;
