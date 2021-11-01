exports.linkResolver = doc => {
  switch (doc.type) {
    case "blog": {
      return `/blog/${doc.uid}`
    }

    default:
      return "/"
  }
}
