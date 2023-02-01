import { UserDetailed } from "misskey-js/built/entities";
import useSWR, { Fetcher } from "swr";

export const useUser = () => {
  const { data } = useSWR("https://misskey.io/api/users/show", fetcher);

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
