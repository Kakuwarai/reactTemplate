
import Header from './layouts/header'
import Footer from './layouts/footer'
 
export default function Layout({ children }) {

 
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer />
    </>
  )
}