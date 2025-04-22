import React from 'react'
import { ViteApp } from './main'
import { StaticRouter } from 'react-router-dom/server'

export function render(url: string) {
  return (
    <StaticRouter location={url}>
      <ViteApp />
    </StaticRouter>
  )
} 