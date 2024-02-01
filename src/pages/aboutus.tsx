import { Meta } from 'src/layout/Meta'
import { About } from 'src/templates/About'

const AboutUs = () => (
  <div className="text-gray-600 antialiased">
    <Meta
      title={'Fresh Pickle - About Us'}
      description={'All about the Fresh Pickle pickleball company'}
    />
    <About />
  </div>
)

export default AboutUs
