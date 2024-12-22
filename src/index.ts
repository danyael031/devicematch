

interface Brand {
  id: number;
  name: string;
  image: Uint8Array | null;
}

interface Device {
  id: number;
  name: string;
  image: Uint8Array | null;
  brand_id: number;
}

interface Category {
  id: number;
  name: string;
  image: Uint8Array | null;
}

interface DeviceCompatibility {
  id: number;
  device1_id: number;
  device2_id: number;
  category_id: number;
}
