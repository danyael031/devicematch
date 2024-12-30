import { enqueueSnackbar } from "notistack";
import { useLoaderData, useNavigate } from "react-router";
import { DynamicTableConfig } from "src/components/DynamicTable/types";
import Header from "src/components/Header";
import { PageContainer } from "src/components/PageContainer";
import { deleteCategory, getCategories } from "src/db/categories";
import { useMultiLang } from "src/lib/multilang/multilangProvider";
import { DynamicTable } from "src/components/DynamicTable";
import AddIcon from '@mui/icons-material/Add';
import { Button, Toolbar } from "@mui/material";

export async function categoriesLoader(): Promise<Array<Category>> {
  const categories = await getCategories();
  return categories;
}

const dynamicTableConfig: DynamicTableConfig<Category> = {
  columnsConfig: [
    { columnName: "Name", keyValue: "name" }
  ],
  elementKey: 'id'
}

export function CategoriesPage() {
  const { lt } = useMultiLang();
  const categories = useLoaderData<Array<Category>>();
  const navigate = useNavigate();

  async function deleteHandler(category: Category) {
    try {
      await deleteCategory(category.id);
      enqueueSnackbar("Category deleted", { variant: 'success' });
    } catch (e) {
      enqueueSnackbar("Error deleting category", { variant: "error" });
    }
    // This force the trigger of the categoriesLoader, which refresh the listed categories
    navigate('.', { replace: true });
  }

  function editHandler(cg: Category) {
    navigate(`/categories/edit/${cg.id}`)
  }

  return (
    <>
      <Header breadcrumbsPath={[lt('categories')]} />
      <PageContainer>
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            size="small"
            onClick={() => { navigate("/categories/add") }}
          >
            Add Category
          </Button>
        </Toolbar>
        <DynamicTable
          elements={categories}
          config={dynamicTableConfig}
          enableDelete={true}
          enableEdit={true}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      </PageContainer>
    </>
  )
}

