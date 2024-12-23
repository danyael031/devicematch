import { useLoaderData, useNavigate } from "react-router";
import { DynamicTable } from "src/components/DynamicTable";
import { DynamicTableConfig } from "src/components/DynamicTable/types";
import Header from "src/components/Header";
import { PageContainer } from "src/components/PageContainer";
import { getBrands } from "src/db/brands";
import { useMultiLang } from "src/lib/multilang/multilangProvider";
import AddIcon from '@mui/icons-material/Add';
import { Button, Toolbar } from "@mui/material";


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

  return (
    <>
      <Header breadcrumbsPath={[lt('brands')]} />
      <PageContainer>
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            size="small"
          >
            Add Brand
          </Button>
        </Toolbar>
        <DynamicTable
          elements={brands}
          config={dynamicTableConfig}
          enableDelete={true}
        />
      </PageContainer>
    </>
  )
}
