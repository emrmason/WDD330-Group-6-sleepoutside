const baseURL = import.meta.env.VITE_SERVER_URL;

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export async function getProductsByCategory(category) {
  // console.log(category);
  const response = await fetch(baseURL+`products/search/${category}`)
  const data = await convertToJson(response);
  console.log(data.Result);
    return data.Result;
}

export async function findProductById(id) {
  const response = await fetch(baseURL + `product/${id}`);
  const product = await convertToJson(response);
  console.log(product.Result);
  return product.Result;
}

export async function checkout(payload) {
  const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
};
  return await fetch(baseURL + "checkout/", options).then(convertToJson);
}

export async function loginRequest(creds) {
  const options =  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user), 
  };
  const response = await fetch(baseURL + "login", options).then(convertToJson);
  return response.accessToken;
}

export async function retrieveOrders(token) {
  const currentOrders = {
    method: "GET",
    headers: { Authorization: `Bearer ${token}`}
  };
  const response = await fetch(baseURL + "orders", currentOrders).then(convertToJson);
  return response;
}
