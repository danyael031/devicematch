import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router";
import { BrandForm } from "src/components/BrandForm";
import Header from "src/components/Header";
import { PageContainer } from "src/components/PageContainer";
import { createBrand } from "src/db/brands";
import { useMultiLang } from "src/lib/multilang/multilangProvider";


export function AddBrandPage() {

  const { lt } = useMultiLang();

  const navigate = useNavigate();

  const handleOnSubmit = async (brand: Partial<Brand>) => {

    try {
      await createBrand(brand);
      enqueueSnackbar("Brand created", { variant: "success" });
    } catch (e) {
      enqueueSnackbar("Error creating Brand", { variant: "error" });
    }

    navigate(-1);
  }

  const handleCancel = () => {
    navigate(-1);
  }

  return (
    <>
      <Header breadcrumbsPath={[lt('brands'), "Add Brand"]} />
      <PageContainer>
        <BrandForm
          onSubmit={handleOnSubmit}
          onCancel={handleCancel}
        />
      </PageContainer>
    </>
  )
}

