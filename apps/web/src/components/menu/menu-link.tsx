import { ComponentProps } from 'react'

import { NavLink } from './nav-link'

export function MenuLink(props: ComponentProps<typeof NavLink>) {
  return (
    <NavLink
      shouldMatchExact
      className="flex h-14 items-center border-b-2 border-transparent px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-secondary data-[current=true]:border-primary data-[current=true]:text-accent-foreground"
      {...props}
    />
  )
}
