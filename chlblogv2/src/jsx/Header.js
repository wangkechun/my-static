const Header = React.createClass({
    render(){
        return (
          <header className='header' style={changeHeight(this.props.wheel)}>
              <div className="logoSmall" style={css_display(this.props.wheel)}><Link to="/tag/ALL">CaoHuilin</Link></div>
              <div className="logo" style={css_display(!this.props.wheel)}><Link to="/tag/ALL">=CHL</Link></div>
              <span style={css_display(!this.props.wheel)}>Pursue beauty , Approach beauty , Achieve beauty</span>
              <div className="blank"></div>
              <nav>
                  <ul>
                      <li>
                          <a href="https://hi-hi.cn/chlblog/" target="_blank">Home</a>
                      </li>
                      <li>
                          <a href="https://hi-hi.cn/chlresume/" target="_blank">Resume</a>
                      </li>
                      <li>
                          <a href="https://github.com/caohuilin" target="_blank">Project</a>
                      </li>
                  </ul>
              </nav>
          </header>
        )
    }
});