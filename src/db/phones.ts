import { dbclient } from ".";

let counter = 1;

export async function createTable() {
  await dbclient.execute("CREATE TABLE phones (id INTEGER PRIMARY KEY, name TEXT);")
}

export async function createPhone() {
  await dbclient.execute("INSERT into phones (id, name) VALUES ($1, $2) ", [counter, `phone-${counter}`])
  counter++;

}


export async function getPhones() {
  const response = await dbclient.select("SELECT * from phones")
  return response;
}
