import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

{/*import Main from '../components/Main'*/}
{/*import Footer from '../components/Footer'*/}

const HomePage = () => (
    <div class="nav">
        {/*Textbox code goes here*/}
        <Layout>
        <p>This is a test element to make sure everything works!</p>
        <p>If you saw the element above, this component is reserved for the navigation menu</p>
        <Link to='/'>Go back to the homepage</Link>
    </Layout>
    </div>
)

export default HomePage