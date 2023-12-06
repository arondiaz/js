const url = "http://localhost:4000/clientes";

export const createClienteApi = async (cliente) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(cliente),
      headers: {
        "Content-type": "application/json",
      },
    });

    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};

export const getClientsApi = async () => {
  try {
    const response = await fetch(url);
    const clientes = await response.json();
    return clientes;
  } catch (error) {
    console.log(error);
  }
};
