import { enqueueSnackbar } from "notistack";
import { LoaderFunctionArgs, useLoaderData, useNavigate } from "react-router";
import { CategoryForm } from "src/components/CategoryForm";
import Header from "src/components/Header";
import { PageContainer } from "src/components/PageContainer";
import { getCategoryByID, updateCategory } from "src/db/categories";
import { useMultiLang } from "src/lib/multilang/multilangProvider";


export async function categoryLoader(args: LoaderFunctionArgs): Promise<Category> {

  const id = Number(args.params.id);

  const category: Category | undefined = await getCategoryByID(id);

  if (!category) {
    throw new Error('Category does not exist!');
  }

  return category;
}


export function EditCategoryPage() {

  const { lt } = useMultiLang();

  const category = useLoaderData<Category>();

  const navigate = useNavigate();

  const handleOnSubmit = async (updatedCategory: Partial<Category>) => {

    try {
      await updateCategory(updatedCategory);
      enqueueSnackbar("Category updated", { variant: "success" });
    } catch (e) {
      enqueueSnackbar("Error updating category", { variant: "error" });
    }

    navigate(-1);
  }

  const handleCancel = () => {
    navigate(-1);
  }

  return (
    <>
      <Header breadcrumbsPath={[lt('categories'), "Edit Category", category.name]} />
      <PageContainer>
        <CategoryForm
          category={category}
          onSubmit={handleOnSubmit}
          onCancel={handleCancel}
        />
      </PageContainer>
    </>
  )
}

