import type { UserDetailed } from "misskey-js/entities.js";
import useSWR, { type Fetcher } from "swr";

export const useUser = () => {
  const { data } = useSWR("https://honi.club/api/users/show", fetcher);

  return { data };
};

const fetcher: Fetcher<UserDetailed, string> = (path) =>
  fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "Simirall",
    }),
  }).then((res) => res.json());
