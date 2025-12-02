import { Avatar } from "./avatar";

export const ProfileCard = () => {
  return (
    <div className="hover-3d">
      {/* content */}
      <figure className="rounded-lg shadow-lg">
        <div className="mockup-window border-2 border-teal-100 bg-teal-100 dark:border-teal-900 dark:bg-teal-900">
          <div className="w-120 max-w-full space-y-4 bg-white px-12 py-8 dark:bg-base-100">
            <div className="flex items-center gap-8">
              <Avatar />
              <div className="flex shrink-0 flex-col items-start gap-x-4 gap-y-2">
                <p className="text-3xl">しみらー</p>
                <p className="text-lg text-zinc-400 dark:text-slate-400">
                  @Simirall
                </p>
              </div>
            </div>
            <p>SNSとWebとイラスト。</p>
            <span className="inline-flex flex-wrap items-center gap-2">
              Simirall Likes:
              <span className="text-2xl text-rotate text-white">
                <span className="*:rounded *:px-2">
                  <span className="bg-[#58c4dc]">React</span>
                  <span className="bg-[#86b300]">Misskey</span>
                  <span className="bg-white font-[Century_Gothic] font-black text-black">
                    Galaxy
                  </span>
                  <span className="bg-[#7967c3]">福丸小糸</span>
                  <span className="bg-[#ea571e] font-bold">松屋</span>
                  <span className="bg-[#793516]">マーボーカレー</span>
                </span>
              </span>
            </span>
          </div>
        </div>
      </figure>
      {/* 8 empty divs needed for the 3D effect */}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
