
export type BrandFormProps = {
  brand?: Partial<Brand>,
  onSubmit?: (brand: Partial<Brand>) => void,
  onCancel?: () => void
}
