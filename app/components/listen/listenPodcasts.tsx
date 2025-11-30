import PodcastBox from "./podcastBox";

const PodcastsPage = () => {
  return <>
    <div className="px-4 py-12">
      <div className="title_podcast">
        <h2 className="text-2xl">Beste Quellen zum deutschen Podcast</h2>
      </div>
      <div className="p-6 flex items-center gap-20 flex-col">
        <PodcastBox info={"toGo"} />
        <PodcastBox info={"radio"} />
        <PodcastBox info={"deutschland"} />
      </div>
    </div>
  </>
}
export default PodcastsPage;
