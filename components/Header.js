import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  StarIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import Link from "next/link";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <Link href="/">
          <a>
            <HeaderItem title="HOME" Icon={HomeIcon} />
          </a>
        </Link>
        <Link href="/movie">
          <a>
            <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
          </a>
        </Link>
        <Link href="/movie/top-rated">
          <a>
            <HeaderItem title="TOP RATED" Icon={StarIcon} />
          </a>
        </Link>

        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="/movie_db.png"
        alt="Movie_db logo"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
