import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Vanier Robotics 2019</h1>
                <p>Please select a language</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="/en/home" onClick={() => {props.onOpenArticle('intro')}}>English</a></li>
                <li><a href="/fr/home" onClick={() => {props.onOpenArticle('work')}}>Français</a></li>
                {/*<li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>*/}
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
