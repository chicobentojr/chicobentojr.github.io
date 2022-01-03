import React from "react"

const EXTERNAL_LINKS_URL = "https://gist.githubusercontent.com/chicobentojr/8c3a9f159c090f8b50d9ade5f96d7862/raw/urls.json"

const ExternalLinks = ({ params }) => {
    const [links, setLinks] = React.useState(null)

    const selectedLink = params.get('url')

    React.useEffect(() => {
        if (!links) {
            fetch(EXTERNAL_LINKS_URL).then((response) => {
                response.json().then(data => {
                    setLinks(data)

                    if (selectedLink && selectedLink in data) {
                        window.location.href = data[selectedLink]
                    }
                })
            })
        }
    }, [links, selectedLink])

    if (!links) {
        return <p>Carregando...</p>
    }

    return (
        <div>
            <ul>
                {links && Object.keys(links).map((k) => {
                    const url = links[k]
                    return (
                        <li key={k}>
                            <a href={url} without rel="noopener noreferrer" target="_blank">{k}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ExternalLinks
