/** @type {import('next').NextConfig} */
const pkg = require('./package.json')

/* BEGIN: grab '*' turbo package dependencies to track */
const filterEntries = (obj, filterVal) =>
  Object.entries(obj)
    .filter(([k, v]) => typeof k === 'string' && typeof v === 'string')
    .map(([k, v]) => {
      if (v === filterVal) return k
    })
    .filter(i => typeof i !== 'undefined')

const turboDeps = filterEntries(pkg.dependencies || {}, '*')
const turboDevDeps = filterEntries(pkg.devDependencies || {}, '*')
/* END: grab '*' turbo package dependencies to track */

const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  ...turboDeps,
  ...turboDevDeps,
])
const withSvgr = require('next-plugin-svgr')

const nextConfig = withPlugins([
  withTM({
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
  }),
  withSvgr,
])

module.exports = nextConfig
