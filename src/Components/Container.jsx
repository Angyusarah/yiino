import Footer from "./Footer"
import Header from "./Header"

const Container = ({children}) => {
  return (
    <div className="flex flex-col gap-4 lg:px-24">
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default Container