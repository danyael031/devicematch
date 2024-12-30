import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router";
import { CategoryForm } from "src/components/CategoryForm";
import Header from "src/components/Header";
import { PageContainer } from "src/components/PageContainer";
import { createCategory } from "src/db/categories";
import { useMultiLang } from "src/lib/multilang/multilangProvider";


export function AddCategoryPage() {

  const { lt } = useMultiLang();

  const navigate = useNavigate();

  const handleOnSubmit = async (category: Partial<Category>) => {

    try {
      await createCategory(category);
      enqueueSnackbar("Category created", { variant: "success" });
    } catch (e) {
      enqueueSnackbar("Error creating category", { variant: "error" });
    }

    navigate(-1);
  }

  const handleCancel = () => {
    navigate(-1);
  }

  return (
    <>
      <Header breadcrumbsPath={[lt('categories'), "Add Category"]} />
      <PageContainer>
        <CategoryForm
          onSubmit={handleOnSubmit}
          onCancel={handleCancel}
        />
      </PageContainer>
    </>
  )
}

