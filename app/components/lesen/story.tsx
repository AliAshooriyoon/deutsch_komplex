const Story = () => {
  return <>
    <div className="story_box border-2 border-gray-400 w-[30%] p-4 flex flex-col gap-4 justify-between bg-white rounded-2xl">
      <div className="level flex p-2">
        <div className="bg-gray-800 text-white py-2 px-3 rounded-3xl">B2</div>
      </div>
      <div className="title text-xl">Die verlorene Katze</div>
      <div className="flex items-end justify-end px-6 text-sm rounded-2xl text-gray-800">
        <span className="bg-gray-600/15 p-1">Einfach</span>
      </div>
      <div className="btn bg-gray-800 w-[95%] mx-auto py-2 rounded-xl
            my-4 text-white text-center cursor-pointer">Jetzt lesen</div>
    </div>
  </>
}
export default Story;
