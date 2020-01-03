import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import pic01 from '../images/pic01.jpg'
import Layout from '../components/layout'
import Button from 'gatsby'

{/*import Main from '../components/Main'*/}
{/*import Footer from '../components/Footer'*/}

const HomePage = () => (
    <div class="Main">
     <div class="nav">
          <Layout>
            <p>This is a test element to make sure everything works!</p>
            <p>If you saw the element above, this component is reserved for the navigation menu</p>
            <Link to='/'>Go back to the homepage</Link>
          </Layout>
      </div>
      <div class="div2">
        <Layout></Layout>
      </div>
    </div>
)
HomePage.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default HomePage