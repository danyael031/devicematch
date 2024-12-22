import Header from "src/components/Header";
import { PageContainer } from "src/components/PageContainer";
import { useMultiLang } from "src/lib/multilang/multilangProvider";


export function CategoriesPage() {

  const { lt } = useMultiLang();

  return (
    <>
      <Header breadcrumbsPath={[lt('categories')]} />
      <PageContainer>
        <></>
      </PageContainer>
    </>
  )
}
