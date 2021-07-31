import React from "react"
import Seo from "../components/seo"
import ErrorPage from "../components/404/404"
const NotFoundPage = () => (
    <>
        <Seo title="404 Not found" />
        <ErrorPage />
    </>
)

export default NotFoundPage