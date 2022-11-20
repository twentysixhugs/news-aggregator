import { config } from "./config";
import { MakeRequestInput } from "./types";

export const makeRequest = async function <T>({
  endpoint = "",
  method = "get",
  params = {},
  data,
  headers = {},
  mode = "cors",
}: MakeRequestInput): Promise<T> {
  return fetch(constructURL(config.baseURL, endpoint, params), {
    method,
    mode,
    headers,
    body: data,
  }).then(handleResponse);
};

async function handleResponse(res: Response) {
  return res.json().then((data) => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }

    return data;
  });
}

function constructURL(baseURL: string, endpoint: string, params = {}) {
  const url = new URL(baseURL + endpoint);

  Object.entries<string>(params).forEach((param) =>
    url.searchParams.set(param[0], param[1])
  );

  return url;
}
