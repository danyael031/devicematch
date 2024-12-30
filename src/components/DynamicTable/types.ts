
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
  enableEdit?: boolean,
  deleteHandler?: (item: Item) => void,
  editHandler?: (item: Item) => void,
}

export type ActionIconProps = {
  enableEdit: boolean,
  enableDelete: boolean,
  onDelete?: () => void,
  onEdit?: () => void
}
