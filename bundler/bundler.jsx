import Bundler, { Packager } from 'parcel-bundler'
import Path from 'path'

import React from 'react'
import ReactDOM from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { StaticRouter } from 'react-router'

import { Routes } from '../app/routes'

const entries = Path.join(__dirname, '../../*.html')
const bundler = new Bundler(entries, {
  contentHash: true,
  minify: true,
  scopeHoist: true,
  sourceMaps: false,
  target: 'browser',
  watch: false,
  detailedReport: true
})



class RoutesPackager extends Packager {
  async addAsset(asset) {
    const styles = Array.from(asset.depAssets).find(([key, value])=> key.name === './styles/styles.scss')
    const sheet = new ServerStyleSheet()
    const html = ReactDOM.renderToString(sheet.collectStyles(
      <StaticRouter location={`/${asset.basename.replace('.html', '').replace('index', '')}`} context={{}}>
        <Routes />
      </StaticRouter>
    ))

    await this.dest.write(asset.generated.html
      .replace('<main id="main"></main>', `
        <main id="main">
          ${html}
        </main>
      `)
      .replace(new RegExp('<link rel="stylesheet" href="/styles.*.css">'), `
        <style>${styles[1].generated.css}</style>
        ${sheet.getStyleTags()}
      `))
  }
}

bundler.addPackager('html', RoutesPackager)

// bundler.on('bundled', (bundle) => {
//   console.log(bundle)
// })

bundler.bundle()