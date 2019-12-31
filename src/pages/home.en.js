import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import pic01 from '../images/pic01.jpg'
import Layout from '../components/layout'
import Button from 'gatsby'

{/*import Main from '../components/Main'*/}
{/*import Footer from '../components/Footer'*/}

const HomePage = () => (
    <div>
    <div class="nav">
        <Layout>
        <p>This is a test element to make sure everything works!</p>
        <p>If you saw the element above, this component is reserved for the navigation menu</p>
        <Link to='/'>Go back to the homepage</Link>
    </Layout>
    </div>
    <div 
    ref={this.props.setWrapperRef}
    class="header"
    style={this.props.timeout ? { display: 'flex' }: { display: 'none' }}
    >
      <nav>
        <Button>Test Button</Button>
        <ul>
          <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
        </ul>
      </nav>
    </div>
    </div>
)

class Main extends React.Component {
    render() {
        let close = (
            <div
                className="close"
                onClick={() => {
                    this.props.onCloseArticle()
                }}
            ></div>
        )
    
        return (
            <div
              ref={this.props.setWrapperRef}
              id="main"
              style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
            >
              <article
                id="intro"
                className={`${this.props.article === 'intro' ? 'active' : ''} ${
                  this.props.articleTimeout ? 'timeout' : ''
                }`}
                style={{ display: 'none' }}
              >
                <h2 className="major">Intro</h2>
                <span className="image main">
                  <img src={pic01} alt="" />
                </span>
                <p>
                  Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
                  aliquam facilisis ante interdum congue. Integer mollis, nisl amet
                  convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
                  magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
                  By the way, check out my <a href="#work">awesome work</a>.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
                  libero eu nibh porttitor fermentum. Nullam venenatis erat id
                  vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
                  Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
                  dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
                  lectus. Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. In non lorem sit amet elit
                  placerat maximus. Pellentesque aliquam maximus risus, vel sed
                  vehicula.
                </p>
                {close}
              </article>
              
            </div>
        )
    }
}
Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

HomePage.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default HomePage