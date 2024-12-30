import { dbclient } from ".";

export async function createCategory(category: Partial<Category>): Promise<number | undefined> {
  const result = await dbclient.execute(
    "INSERT INTO categories (name, image) VALUES ($1, $2);",
    [category.name, category.image]
  )

  return result.lastInsertId
}

export async function getCategories(): Promise<Array<Category>> {
  const result = await dbclient.select<Array<Category>>("SELECT * FROM categories;");

  return result;
}

export async function getCategoryByID(categoryId: number): Promise<Category | undefined> {
  const result = await dbclient.select<Array<Category>>("SELECT * FROM categories WHERE id = $1;", [categoryId])
  let category = result[0];
  return category;
}

export async function updateCategory(category: Partial<Category>) {
  await dbclient.execute(`UPDATE categories
SET name = $1, image = $2
WHERE id = $3;`, [category.name, category.image, category.id]);
}


export async function deleteCategory(categoryId: number) {
  await dbclient.execute(`DELETE FROM categories WHERE id = $1;`, [categoryId]);
}
