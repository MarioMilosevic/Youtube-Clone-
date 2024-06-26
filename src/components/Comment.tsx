import {
  formatTimeDifference,
  generatePublishedDate,
  currentDate,
} from "../utils/HelperFunctions";
import { CommentSnippet } from "../types/types";

const Comment = ({ snippet }: CommentSnippet) => {
  const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } =
    snippet;

  const publishedDate = generatePublishedDate(publishedAt);
  const timeDifference = formatTimeDifference(currentDate, publishedDate);

  return (
    <article className="pb-4 flex gap-4">
      <div className="w-12 h-12 rounded-full">
        <img
          src={authorProfileImageUrl}
          alt={textDisplay}
          className="rounded-full w-12 h-12"
        />
      </div>
      <div className="w-full">
        <div className="flex gap-4">
          <span>{authorDisplayName}</span>
          <span>{timeDifference}</span>
        </div>
        <p
          className="text-base"
          dangerouslySetInnerHTML={{ __html: textDisplay }}
        ></p>
      </div>
    </article>
  );
};

export default Comment;
