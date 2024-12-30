import { useLoaderData, useNavigate } from "react-router";
import { DynamicTable } from "src/components/DynamicTable";
import { DynamicTableConfig } from "src/components/DynamicTable/types";
import Header from "src/components/Header";
import { PageContainer } from "src/components/PageContainer";
import { deleteBrand, getBrands } from "src/db/brands";
import { useMultiLang } from "src/lib/multilang/multilangProvider";
import AddIcon from '@mui/icons-material/Add';
import { Button, Toolbar } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { ConfirmDialog } from "src/components/ConfirmDialog";


export async function brandsLoader(): Promise<Array<Brand>> {
  const brands = await getBrands();

  return brands;

}

const dynamicTableConfig: DynamicTableConfig<Brand> = {
  columnsConfig: [
    { columnName: "Name", keyValue: "name" }
  ],
  elementKey: 'id'
}

export function BrandsPage() {
  const { lt } = useMultiLang();
  const brands = useLoaderData<Array<Brand>>();
  const navigate = useNavigate();

  async function deleteHandler(brand: Brand) {
    try {
      await deleteBrand(brand.id);
      enqueueSnackbar("Brand deleted", { variant: 'success' });
    } catch (e) {
      enqueueSnackbar("Error deleting brand", { variant: "error" });
    }
    // This force the trigger of the brandsLoader, which refresh the listed brands
    navigate('.', { replace: true });
  }

  function editHandler(br: Brand) {
    navigate(`/brands/edit/${br.id}`)
  }

  return (
    <>
      <Header breadcrumbsPath={[lt('brands')]} />
      <PageContainer>
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            size="small"
            onClick={() => { navigate("/brands/add") }}
          >
            Add Brand
          </Button>
        </Toolbar>
        <DynamicTable
          elements={brands}
          config={dynamicTableConfig}
          enableDelete={true}
          enableEdit={true}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      </PageContainer>
      <ConfirmDialog
        title="Delete brand"
        text=""
      />
    </>
  )
}
