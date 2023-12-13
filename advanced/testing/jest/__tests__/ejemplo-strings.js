const password = "123456";

//describe agruba varias pruebas en un mismo archivo
describe("Valida que el password tenga una extension de 6 caracteres", () => {
  test("El password tiene que tener 6 caracteres", () => {
    expect(password).toHaveLength(6);
  });
  test("Password no vacio", () => {
    expect(password).not.toHaveLength(0);
  });
});
