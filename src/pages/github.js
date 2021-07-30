import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Repos from "../components/github/github"
const Github = () => (
    <Layout>
        <Seo title="Github Repositories" />
        <Repos />
    </Layout>
)

export default Github
