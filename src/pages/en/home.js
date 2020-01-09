import PropTypes from 'prop-types'
import React from 'react'

const HomePage = () => (
<div id = "layout">
  <div id="nav">    
       <script type = "text/javascript" src = "lamppost.js" ></script>
  </div>
  
<div id="info" >
<iframe id="iframe" src="/en/vanierStreet" ></iframe>
</div>
  </div>
)
  
HomePage.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default HomePage