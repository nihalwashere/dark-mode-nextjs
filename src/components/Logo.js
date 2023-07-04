import { BoltIcon } from "@heroicons/react/24/solid";

const Logo = () => {
  return (
    <a className="my-2 flex items-center space-x-1 text-indigo-500" href="/">
      <BoltIcon className="h-8 w-8 flex-shrink-0 mr-3" />
      <span className="font-bold text-3xl font-sans tracking-tight whitespace-nowrap">
        Hey
      </span>
    </a>
  );
};

export default Logo;
