import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

{/*import Main from '../components/Main'*/}
{/*import Footer from '../components/Footer'*/}

const HomePage = () => (
    <Layout>
        <p>This is a test element to make sure everything works!</p>
        <Link to='/'>Go back to the homepage</Link>
    </Layout>
)

export default HomePage