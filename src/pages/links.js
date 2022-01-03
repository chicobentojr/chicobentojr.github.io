import React from "react"
import ExternalLinks from "../components/external-links"

const LinksPage = ({ location }) => {
  const params = new URLSearchParams(location.search)

  return (
    <div>
      <p>Links externos</p>
      <ExternalLinks params={params} />
    </div>
  )
}

export default LinksPage
