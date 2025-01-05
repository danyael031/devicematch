
import Header from "src/components/Header";
import { PageContainer } from "src/components/PageContainer";
import { useMultiLang } from "src/lib/multilang/multilangProvider";
import { enqueueSnackbar } from "notistack";
import { LoaderFunctionArgs, useLoaderData, useNavigate } from "react-router";
import { DynamicTableConfig } from "src/components/DynamicTable/types";
import { DynamicTable } from "src/components/DynamicTable";
import AddIcon from '@mui/icons-material/Add';
import { Button, Toolbar, Typography } from "@mui/material";
import { deleteDevice, getDevicesByBrand } from "src/db/devices";
import { getBrandByID } from "src/db/brands";
import { BrandSelect } from "src/components/BrandSelect";

export async function devicesLoader(args: LoaderFunctionArgs): Promise<DevicesLoaderResult> {
  const brandId = Number(args.params.brandId);
  const brand = await getBrandByID(brandId);
  const devices = await getDevicesByBrand(brandId);

  if (!brand) {
    throw new Error("Brand not found");
  }

  const result: DevicesLoaderResult = {
    brand,
    devices
  }

  return result;
}

const dynamicTableConfig: DynamicTableConfig<Device> = {
  columnsConfig: [
    { columnName: "Name", keyValue: "name" },
  ],
  elementKey: 'id'
}

export function DevicesPage() {
  const { lt } = useMultiLang();

  const loaderResult = useLoaderData<DevicesLoaderResult | undefined>();
  const navigate = useNavigate();

  async function deleteHandler(device: Device) {
    try {
      await deleteDevice(device.id);
      enqueueSnackbar("Device deleted", { variant: 'success' });
    } catch (e) {
      enqueueSnackbar("Error deleting device", { variant: "error" });
    }
    // This force the trigger of the devicesLoader, which refresh the listed categories
    navigate('.', { replace: true });
  }

  function editHandler(dv: Device) {
    navigate(`/devices/edit/${dv.id}`)
  }

  function changeBrand(brand: Brand | null) {

    if (!brand) {
      return
    }

    navigate(`/devices/${brand.id}`)

  }

  return (
    <>
      <Header breadcrumbsPath={[lt('devices')]} />
      <PageContainer>
        <BrandSelect
          value={loaderResult?.brand || null}
          onChange={changeBrand}
        />
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            size="small"
            onClick={() => { navigate("/devices/add") }}
          >
            Add Device
          </Button>
        </Toolbar>

        {
          loaderResult ?
            <DynamicTable
              elements={loaderResult.devices}
              config={dynamicTableConfig}
              enableDelete={true}
              enableEdit={true}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
            />
            :
            <Typography>Please select a brand to show the devices</Typography>

        }

      </PageContainer>
    </>
  )
}
