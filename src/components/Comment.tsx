import probno from "../assets/probno.jpg";
import vegeta from "../assets/vegeta.webp";
import {
  formatTimeDifference,
  generatePublishedDate,
  currentDate,
} from "../utils/HelperFunctions";
type CommentTypes = {
  imageUrl: string;
  authorDisplayName: string;
  publishedAt: string;
  textDisplay: string;
};

// const Comment = ({
// //   imageUrl,
// //   authorDisplayName,
// //   publishedAt,
// //   textDisplay,
// }: CommentTypes) => {

const Comment = ({
  imageUrl,
  authorDisplayName,
  publishedAt,
  textDisplay,
}: CommentTypes) => {
  const publishedDate = generatePublishedDate(publishedAt);
  const timeDifference = formatTimeDifference(currentDate, publishedDate);
  return (
    <article className="pb-4 flex gap-4">
      <div className="w-12 h-12 rounded-full">
        <img
          src={imageUrl}
          alt="Profile img"
          className="rounded-full w-12 h-12"
        />
      </div>
      <div className="w-full">
        <div className="flex gap-4">
          <span>{authorDisplayName}</span>
          <span>{timeDifference}</span>
        </div>
        <p className="text-base" dangerouslySetInnerHTML={{ __html: textDisplay }}>
        </p>
      </div>
    </article>
  );
};

export default Comment;