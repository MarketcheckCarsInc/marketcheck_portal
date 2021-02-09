import MenuContainer from '@/general/Menu'
import Footer from '~/general/Footer'

export default ({children}) =>
  <main>
    <MenuContainer />
    { children }
    <Footer />
  </main>
