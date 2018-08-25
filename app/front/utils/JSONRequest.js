export function toUrlParams(_data) {
  const data = Object.assign({}, _data);
  if (!data || Object.keys(data).length === 0) {
    return '';
  }

  return `?${Object.keys(data).map((key) => {
    if (typeof data[key] === 'undefined' || data[key] === null) {
      return '';
    }

    if (Array.isArray(data[key])) {
      data[key] = data[key].map(value => (`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)).join('&');
      return data[key];
    }

    if (typeof data[key] === 'object') {
      data[key] = JSON.stringify(data[key]);
    }

    return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
  })
  .filter(param => param)
  .join('&')}`;
}

const _fetch = (url, data, method, _headers) => {
  let params = '';
  let body;

  const headers = Object.assign({
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }, _headers);

  if (method === 'GET' || method === 'DELETE') {
    params = toUrlParams(data);
  }

  if (method === 'POST' || method === 'PUT') {
    body = JSON.stringify(data);
  }

  return fetch(url, {
    method,
    headers,
    credentials: 'same-origin',
    body
  })
  .then(res => res.json());
};

export default {
  get: (url, data, headers) => _fetch(url, data, 'GET', headers),
  post: (url, data, headers) => _fetch(url, data, 'POST', headers),
  put: (url, data, headers) => _fetch(url, data, 'PUT', headers),
  delete: (url, data) => _fetch(url, data, 'DELETE')
};
