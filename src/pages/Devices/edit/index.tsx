import { enqueueSnackbar } from "notistack";
import { LoaderFunctionArgs, useLoaderData, useNavigate } from "react-router";
import { DeviceForm } from "src/components/DeviceForm";
import Header from "src/components/Header";
import { PageContainer } from "src/components/PageContainer";
import { getBrandByID } from "src/db/brands";
import { getDeviceById, updateDevice } from "src/db/devices";
import { useMultiLang } from "src/lib/multilang/multilangProvider";

export async function deviceLoader(args: LoaderFunctionArgs): Promise<DeviceLoaderResult> {
  const deviceId = Number(args.params.deviceId);
  const device = await getDeviceById(deviceId);

  if (!device) {
    throw new Error("Device not found");
  }
  const brand = await getBrandByID(device.brand_id);

  if (!brand) {
    throw new Error("Brand not found");
  }

  return {
    device,
    brand
  }
}

export function EditDevicePage() {
  const { lt } = useMultiLang();
  const navigate = useNavigate();

  const result = useLoaderData<DeviceLoaderResult>();

  const handleOnSubmit = async (device: Partial<Device>) => {

    try {
      await updateDevice(device);
      enqueueSnackbar("Device edited", { variant: "success" });
    } catch (e) {
      enqueueSnackbar("Error editng device", { variant: "error" });
    }

    navigate(-1);
  }

  const handleCancel = () => {
    navigate(-1);
  }

  return (
    <>
      <Header breadcrumbsPath={[lt('devices'), "Edit Device", result.device.name]} />
      <PageContainer>
        <DeviceForm
          device={result.device}
          brand={result.brand}
          onSubmit={handleOnSubmit}
          onCancel={handleCancel}
        />
      </PageContainer>
    </>
  )
}

