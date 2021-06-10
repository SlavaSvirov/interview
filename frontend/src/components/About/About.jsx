import './about.css'

function About() {
  return (
    <div className='container container-main'>
      <div className="about">
        <h1 className='meet'>Meet our team</h1>
        <div className='ourTeam'>
          <div className='teem'>
            <div>
              <img src="" alt="user" />
            </div>
            <div>
              <h2>Boba</h2>
              <span>FullStack Developer</span>
            </div>
          </div>

          <div className='teem'>
            <div>
              <img src="" alt="user" />
            </div>
            <div>
              <h2>Buba</h2>
              <span>FullStack Developer</span>
            </div>
          </div>

          <div className='teem'>
            <div>
              <img src="" alt="user" />
            </div>
            <div>
              <h2>Buba</h2>
              <span>FullStack Developer</span>
            </div>
          </div>

          <div className='teem'>
            <div>
              <img src="" alt="user" />
            </div>
            <div>
              <h2>Buba</h2>
              <span>FullStack Developer</span>
            </div>
          </div>

        </div>

        <div>
          <progress max='100' value='50'></progress>
        </div>
      </div>
    </div>
  )
}

export default About


