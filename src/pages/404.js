import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import ErrorPage from "../components/404/404"
const NotFoundPage = () => (
    <Layout>
        <Seo title="404 Not found" />
        <ErrorPage />
    </Layout>
)

export default NotFoundPage