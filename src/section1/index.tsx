import { Name } from "./components/Name";
import night from "./image/night.webp";

export const Section1 = ({ name }: { name: string }) => {
  return (
    <div className="p-md pt-16 h-svh">
      <div className="mockup-window border-2 border-neutral max-w-120 h-full mx-[auto] relative bg-accent shadow-md">
        <Name name={name} />
        <img
          alt="Character"
          className="h-full object-cover border-t-2 border-neutral"
          src={night}
        />
      </div>
    </div>
  );
};
