import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router";
import { DeviceForm } from "src/components/DeviceForm";
import Header from "src/components/Header";
import { PageContainer } from "src/components/PageContainer";
import { createDevice } from "src/db/devices";
import { useMultiLang } from "src/lib/multilang/multilangProvider";

export function AddDevicePage() {

  const { lt } = useMultiLang();

  const navigate = useNavigate();

  const handleOnSubmit = async (device: Partial<Device>) => {

    try {
      await createDevice(device);
      enqueueSnackbar("Device created", { variant: "success" });
    } catch (e) {
      enqueueSnackbar("Error creating device", { variant: "error" });
    }

    navigate(-1);
  }

  const handleCancel = () => {
    navigate(-1);
  }

  return (
    <>
      <Header breadcrumbsPath={[lt('devices'), "Add Device"]} />
      <PageContainer>
        <DeviceForm
          onSubmit={handleOnSubmit}
          onCancel={handleCancel}
        />
      </PageContainer>
    </>
  )
}

