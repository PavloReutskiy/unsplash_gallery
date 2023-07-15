const BASE_URL = 'https://api.unsplash.com/';

type RequestMethod = 'GET';

const accessKey = 'ueKRO8T9f2aQICXdUs0FbykZ1AzqPcozQX-I9zEoh58';

function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null,
): Promise<T> {
  const options: RequestInit = { 
    method,
    headers: new Headers({
      'Authorization': `Client-ID ${accessKey}`,
      ...(data && {'Content-Type': 'application/json; charset=UTF-8'})
    }),
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  return fetch(BASE_URL + url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
};