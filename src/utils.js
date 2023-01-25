const BASE_URL = "https://api.escuelajs.co/api/v1/";

const GET = async (resource) => {
  try {
    const res = await fetch(BASE_URL + resource);
    if (res.status >= 400) {
      throw new Error("Problem connecting to server");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    return { status: false };
  }
};
const POST = (type, objBody) => {
  return fetch(BASE_URL + type, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objBody),
  });
};

const PUT = (type, objBody, id) => {
  return fetch(BASE_URL + type + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objBody),
  });
};

const DELETE = (type, id) => {
  return fetch(BASE_URL + type + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export { GET, POST, PUT, DELETE };
