import { Suspense } from "react";

export const Avatar = async () => {
  return (
    <Suspense
      fallback={
        <div className="skeleton h-24 w-24 shrink-0 rounded-full"></div>
      }
    >
      <AvatarImage />
    </Suspense>
  );
};

const AvatarImage = async () => {
  const avatarUrl = await fetchAvatar();

  return (
    <div className="avatar">
      <div className="w-24 rounded-full">
        <img alt="" src={avatarUrl} />
      </div>
    </div>
  );
};

const fetchAvatar = async () => {
  const url = "https://misskey.io/api/users/show" as const;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "Simirall",
      }),
    });

    const data: Record<string, unknown> = await res.json();

    return data.avatarUrl as string;
  } catch {
    return "";
  }
};
