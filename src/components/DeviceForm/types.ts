
export type DeviceFormProps = {
  device?: Partial<Device>,
  brand?: Brand,
  onSubmit?: (device: Partial<Device>) => void,
  onCancel?: () => void
}
