import { IgmharIcon } from "./Icons";

interface LogoProps {
  active?: boolean;
}

const Logo = ({ active = false }: LogoProps) => {
  return (
    <div className="flex items-center gap-1.5">
      <IgmharIcon
        className={`h-6 w-6 ${
          active
            ? 'text-primary'
            : 'text-gray-900 dark:text-slate-200'
        }`}
      />
      <div className="-mt-1 hidden text-2xl font-extrabold md:block">
        <span className="text-slate-200">igmhar</span>
        <span className="text-primary">dev</span>
      </div>
    </div>
  );
};

export default Logo;
