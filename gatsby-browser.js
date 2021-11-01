import "bootstrap/dist/css/bootstrap.min.css"
import "./src/styles/app.scss"
import "jquery/dist/jquery.min.js"
import "popper.js/dist/popper.min"
import "bootstrap/dist/js/bootstrap.min.js"
import "gatsby-plugin-prismic-previews/dist/styles.css"

import * as React from "react"
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews"
import { repositoryConfigs } from "./src/utils/prismicPreviews"

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
    {element}
  </PrismicPreviewProvider>
)
