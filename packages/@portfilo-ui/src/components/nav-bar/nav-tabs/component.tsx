import React from 'react'
import {
  Link
} from 'react-router-dom'
import {
  Tabs,
  Tab
} from '@mui/material'
import { RouteData } from 'types/route'

interface NavTabsProps {
    routes: Array<RouteData>,
    onRouteChange: (_route: string) => void,
    currentRoute?: string
}

export default function NavTabs (props: NavTabsProps) {
  const { routes, currentRoute, onRouteChange } = props

  return (
    <Tabs value={currentRoute} textColor='secondary' indicatorColor='secondary'>
      {routes.map((route: RouteData) => (
        <Tab
          key={route.route}
          value={route.route}
          label={route.label}
          component={Link}
          to={route.route}
          onClick={() => {onRouteChange(route.route)}}
        />
      ))}
    </Tabs>
  )
}
