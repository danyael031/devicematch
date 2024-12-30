
export type CategoryFormProps = {
  category?: Partial<Category>,
  onSubmit?: (brand: Partial<Category>) => void,
  onCancel?: () => void
}
