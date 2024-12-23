import { DynamicTable } from "src/components/DynamicTable";
import { DynamicTableConfig } from "src/components/DynamicTable/types";
import Header from "src/components/Header";
import { PageContainer } from "src/components/PageContainer";
import { useMultiLang } from "src/lib/multilang/multilangProvider";

const dynamicTableConfig: DynamicTableConfig<Brand> = {
  columnsConfig: [
    { columnName: "Name", keyValue: "name" }
  ],
  elementKey: 'id'
}

const elements: Array<Brand> = [
  { id: 1, name: "Samsung", image: null },
  { id: 2, name: "Xiaomi", image: null },
  { id: 3, name: "Random", image: null },
  { id: 4, name: "Random2", image: null },
  { id: 5, name: "Random3", image: null },
  { id: 6, name: "Random4", image: null },
]


export function BrandsPage() {

  const { lt } = useMultiLang()

  return (
    <>
      <Header breadcrumbsPath={[lt('brands')]} />
      <PageContainer>
        <DynamicTable elements={elements} config={dynamicTableConfig} />
      </PageContainer>
    </>
  )
}
