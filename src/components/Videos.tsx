import VideoCard from "./VideoCard";
import { ResponseType } from "axios";
type ContentTypes = {
  selectedCategory: string;
  responseData: ResponseType[];
  updateSelectedVideo: (id: string) => void;
  selectVideo: () => void;
};

const Content = ({ selectedCategory, responseData, updateSelectedVideo, selectVideo }: ContentTypes) => {
  return (
    <div className=" flex flex-col flex-1 pl-2">
      <p className="text-3xl font-semibold">
        {selectedCategory} <span className="text-[#ff0000]">videos</span>
      </p>
      <main className="pt-12 grid gap-4 grid-cols-4">
        {responseData.map((el) => {
          const {
            id: { videoId, channelId },
          } = el;
          return <VideoCard key={videoId || channelId} el={el} responseData={responseData} updateSelectedVideo={updateSelectedVideo} selectVideo={selectVideo } />;
        })}
      </main>
    </div>
  );
};

export default Content;