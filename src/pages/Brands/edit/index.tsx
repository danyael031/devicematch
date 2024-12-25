import { enqueueSnackbar } from "notistack";
import { LoaderFunctionArgs, useLoaderData, useNavigate } from "react-router";
import { BrandForm } from "src/components/BrandForm";
import Header from "src/components/Header";
import { PageContainer } from "src/components/PageContainer";
import { getBrandByID, updateBrand } from "src/db/brands";
import { useMultiLang } from "src/lib/multilang/multilangProvider";


export async function brandLoader(args: LoaderFunctionArgs): Promise<Brand> {

  const id = Number(args.params.id);

  const brand: Brand | undefined = await getBrandByID(id);

  if (!brand) {
    throw new Error('Brand does not exist!');
  }

  return brand
}


export function EditBrandPage() {

  const { lt } = useMultiLang();

  const brand = useLoaderData<Brand>();

  const navigate = useNavigate();

  const handleOnSubmit = async (updatedBrand: Partial<Brand>) => {

    try {
      await updateBrand(updatedBrand);
      enqueueSnackbar("Brand updated", { variant: "success" });
    } catch (e) {
      enqueueSnackbar("Error updating Brand", { variant: "error" });
    }

    navigate(-1);
  }

  const handleCancel = () => {
    navigate(-1);
  }

  return (
    <>
      <Header breadcrumbsPath={[lt('brands'), "Edit Brand", brand.name]} />
      <PageContainer>
        <BrandForm
          brand={brand}
          onSubmit={handleOnSubmit}
          onCancel={handleCancel}
        />
      </PageContainer>
    </>
  )
}

