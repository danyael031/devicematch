import { ReactNode } from "react"

export type ItemElement = {
  to: string,
  text: string,
  icon: ReactNode
}

export type MenuItemProps = {
  item: ItemElement
}
