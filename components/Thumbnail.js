import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";
import Link from "next/link";

// function Thumbnail({ result }) {
const Thumbnail = forwardRef(({ result }, ref) => {
  console.log(result.id);
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <Link key={result.id} href={`/movie/${result.id}`}>
      <a>
        <div
          ref={ref}
          className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
        >
          <Image
            layout="responsive"
            src={
              `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
              `${BASE_URL}${result.poster_path}`
            }
            height={1080}
            width={1920}
          />

          <div className="p-2">
            {/* <p className="truncate max-w-md">{result.overview}</p> */}
            <p className="truncate max-w-md">{result.overview}</p>
            <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
              {result.title || result.original_name}
            </h2>
            <p className="flex items-center opacity-0 group-hover:opacity-100">
              {result.media_type && `${result.media_type} -`}{" "}
              {result.release_date || `${result.first_air_date} -`}{" "}
              <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
});

export default Thumbnail;
