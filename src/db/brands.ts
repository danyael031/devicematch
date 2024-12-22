import { dbclient } from ".";

export async function createBrand(brand: Partial<Brand>): Promise<number | undefined> {
  const result = await dbclient.execute(
    "INSERT INTO brands (name, image) VALUES ($1, $2);",
    [brand.name, brand.image]
  )

  return result.lastInsertId
}

export async function getBrands() {
  const result = await dbclient.select<Array<Brand>>("SELECT * FROM brands;")
  return result;
}

export async function getBrandByID(brandId: number): Promise<Brand | undefined> {
  const result = await dbclient.select<Brand>("SELECT * FROM brands WHERE id = $1;", [brandId])
  return result;
}

export async function updateBrand(brandId: number, brand: Partial<Brand>) {

  dbclient.execute
  const result = await dbclient.execute(`UPDATE brands
SET name = $1, image = $2
WHERE id = $3;`, [brand.name, brand.image, brandId])
}


export async function deleteBrand(brandId: number) {
  const result = await dbclient.execute(`DELETE FROM brands WHERE id = $1;`, [brandId])
}
