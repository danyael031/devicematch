import { dbclient } from ".";

export async function createDevice(device: Partial<Device>): Promise<number | undefined> {
  const result = await dbclient.execute(
    "INSERT INTO devices (name, image, brand_id) VALUES ($1, $2, $3);",
    [device.name, device.image, device.brand_id]
  )

  return result.lastInsertId
}

export async function getDevices(): Promise<Array<Device>> {
  const result = await dbclient.select<Array<Device>>("SELECT * FROM devices;");

  return result;
}

export async function getDevicesByBrand(brandId: number): Promise<Array<Device>> {
  const result = await dbclient.select<Array<Device>>("SELECT * FROM devices WHERE device_id = $1;", [brandId]);

  return result;
}

export async function getDeviceById(deviceId: number): Promise<Device | undefined> {
  const result = await dbclient.select<Array<Device>>("SELECT * FROM categories WHERE id = $1;", [deviceId])
  let device = result[0];
  return device;
}

export async function updateDevice(device: Partial<Device>) {
  await dbclient.execute(`UPDATE devices
SET name = $1, image = $2 , brand_id = $3
WHERE id = $4;`, [device.name, device.image, device.brand_id, device.id]);
}

export async function deleteDevice(deviceId: number) {
  await dbclient.execute(`DELETE FROM devices WHERE id = $1;`, [deviceId]);
}
