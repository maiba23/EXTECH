//  import { componentResolverFromMap } from 'gatsby-plugin-prismic-previews'

import { prismicRepo } from "../../prismic-configuration"
import { linkResolver } from "./linkResolver"

export const repositoryConfigs = [
  {
    repositoryName: prismicRepo,
    linkResolver,
    //  componentResolver: componentResolverFromMap({
    //    post: Post,
    //    bloghome: Posts,
    //  }),
  },
]
