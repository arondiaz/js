//El problema de no usar prototypes

//Constructor del objeto
function Client(name, account) {
  this.name = name;
  this.account = account;
}

const pepe = new Client("Pepe", 500);

function formatClient(client) {
  const { name, account } = client;

  return `The client ${name} has ${account}`;
}

console.log(formatClient(pepe));



//Constructor del objeto
function Company(name, account, category) {
    this.name = name;
    this.account = account;
    this.category = category;
  }
  
  const meta = new Company ("Meta", 100000, "Sofware")

  function formatCompany(company) {
    const { name, account, category } = company;
  
    return `The client ${name} has ${account} and the category is ${category}`;
  }

  console.log(formatCompany(meta));