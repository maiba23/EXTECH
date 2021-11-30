import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "@popperjs/core/dist/umd/popper.min.js"
import "./src/styles/app.scss"

import * as React from "react"
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews"
import { repositoryConfigs } from "./src/utils/prismicPreviews"

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
    {element}
  </PrismicPreviewProvider>
)
