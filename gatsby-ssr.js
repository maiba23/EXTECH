/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import * as React from "react"
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews"
import { repositoryConfigs } from "./src/utils/prismicPreviews"
import "gatsby-plugin-prismic-previews/dist/styles.css"

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
    {element}
  </PrismicPreviewProvider>
)
