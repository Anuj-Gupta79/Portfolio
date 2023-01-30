import React from 'react'

import { About, Header, Footer, Skill, Testimoniols, Work} from './containers'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <About />
      <Skill />
      <Testimoniols />
      <Work />
      <Footer />
    </div>
  )
}

export default App