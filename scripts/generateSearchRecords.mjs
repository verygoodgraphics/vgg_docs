import algoliasearch from "algoliasearch"

import apiDocJSON from "../schemas/daruma-api.schema.json" assert { type: 'json' }
import layoutSearchParamsJSON from '../schemas/layout-search-params.json' assert { type: 'json' }
import designSearchParamsJSON from '../schemas/design-search-params.json' assert { type: 'json' }

import "dotenv/config"

import { allDocs } from "../.contentlayer/generated/index.mjs"

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID,
  process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY
)

const algoliaSearchIndex = searchClient.initIndex(
  process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME
)

const records = allDocs.map((doc) => ({
  title: doc.title,
  structuredData: doc.structuredData,
  url: "/daruma/" + doc.slug,
  slug: doc.slug,
}))

const layoutSearchParams = layoutSearchParamsJSON
const designSearchParams = designSearchParamsJSON

// API Reference
const paths = apiDocJSON.paths
export const pathsNav = Object.keys(paths)
  .map((path) => {
    const requestMethods = Object.keys(paths[path])
    const pathDetail = paths[path]

    return requestMethods.map((method) => {
      const slug = path.replace("/api/daruma/", "").replaceAll("/", "-")
      return {
        // @ts-expect-error
        title: pathDetail[method]?.summary || path,
        route: path,
        slug,
        url: "/daruma/api/api-reference#" + slug,
        method: method.toUpperCase(),
      }
    })
  })
  .flat()
  .filter((path) => path)

algoliaSearchIndex.saveObjects([...records, ...pathsNav, ...layoutSearchParams, ...designSearchParams], {
  autoGenerateObjectIDIfNotExist: true,
})
