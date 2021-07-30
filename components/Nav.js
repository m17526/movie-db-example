import request from "../utils/requestsGenre";
import { useRouter } from "next/router";
import Link from "next/link";

function Nav() {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex h-10 px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(request).map(([key, { title, url }]) => (
          <Link
            key={key}
            href={`/genre/${key}`}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </Link>
        ))}
        {/* {Object.entries(request).map(([key, { title, url }]) => (
          <h2
            key={key}
            // onClick={() => router.push(`/?genre=${key}`)}
            onClick={() => router.push(`${key}`)}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))} */}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
}

export default Nav;
