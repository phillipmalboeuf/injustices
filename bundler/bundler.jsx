import Bundler, { Packager } from 'parcel-bundler'
import Path from 'path'

import React from 'react'
import ReactDOM from 'react-dom/server'
import { StaticRouter } from 'react-router'

import { Routes } from '../app/routes'

const entries = Path.join(__dirname, '../../*.html')
const bundler = new Bundler(entries, {
  contentHash: true,
  minify: true,
  scopeHoist: true,
  target: 'browser',
  watch: false,
  detailedReport: true
})

class RoutesPackager extends Packager {
  async addAsset(asset) {
    await this.dest.write(asset.generated.html.replace('<main id="main"></main>', `
    <main id="main">
      ${ReactDOM.renderToString(
        <StaticRouter location={`/${asset.basename.replace('.html', '').replace('index', '')}`} context={{}}>
          <Routes />
        </StaticRouter>
      )}
    </main>
    `))
  }
}

bundler.addPackager('html', RoutesPackager)

// bundler.on('bundled', (bundle) => {
//   console.log(bundle)
// })

bundler.bundle()