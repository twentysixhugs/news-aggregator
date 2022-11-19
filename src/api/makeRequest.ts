import { config } from "./config";
import { MakeRequestInput } from "./types";

export const makeRequest = async function <T>({
  endpoint = "",
  method = "get",
  params = {},
  data = undefined,
  headers = {},
  mode = "cors",
}: MakeRequestInput): Promise<T> {
  console.log(config.baseURL + endpoint);
  return fetch(config.baseURL + endpoint + constructParamsString(params), {
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

function constructParamsString(params = {}) {
  const str = Object.entries(params).reduce(
    (acc, cur) => (cur[1] ? acc + `${cur[0]}=${cur[1]}&` : ""),
    "?"
  );

  return str.slice(0, str.length - 1);
}
