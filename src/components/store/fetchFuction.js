
export const fetchQuery = async (uri,auth, method = 'GET', body=null ) => {
  const response = await fetch('http://localhost:5000/api/'+uri, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth
    },
    body: body !== null ? JSON.stringify(body) : null,
  });
  const data = await response.json();
  
  return data;
};
export const fetchQueryAuth = async (uri, method = 'GET', body=null ) => {
  const response = await fetch('http://localhost:5000/api/'+uri, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body !== null ? JSON.stringify(body) : null,
  });
  const data = await response.json();
  
  return data;
};

