
export type ColumnConfig<Item> = {
  columnName: string,
  keyValue: keyof Item
}

export type DynamicTableConfig<Item> = {
  columnsConfig: Array<ColumnConfig<Item>>,
  elementKey: keyof Item,
}

export type DynamicTableProps<Item> = {
  config: DynamicTableConfig<Item>,
  elements: Array<Item>,
  enableDelete?: boolean,
  deleteHandler?: () => void
}
