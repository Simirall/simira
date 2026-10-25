export const Title = ({ children }: { children: string }) => {
  return (
    <h1 className="bg-base-200/50 text-base-content mb-4 rounded-tl-xl rounded-br-xl px-4 py-1 text-4xl shadow-lg">
      {children}
    </h1>
  );
};
