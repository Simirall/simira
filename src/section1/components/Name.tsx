export const Name = ({ name }: { name: string }) => {
  return (
    <div className="absolute text-6xl font-light bg-linear-to-r from-cyan-500 to-teal-400 bg-clip-text text-transparent rotate-90 origin-bottom-left">
      {name}
    </div>
  );
};
