import Navbar from "./pages/Navbar/page"
import Footer from "./pages/Footer/page"
import { useSelector } from "react-redux"
function App() {

  const scrollY = useSelector((state) => state.scroll.scrollY)
  console.log(scrollY)

  const sectionClassName = scrollY > 0 ? 'mt-[80px]' : ''

  return (
    <>
      <Navbar/>
      <section className={sectionClassName}>
      <div className='text-[50px] underline uppercase font-bold'>hello world!</div>
      <div className='text-[50px] underline uppercase font-bold'>hello world!</div>
      <div className='text-[50px] underline uppercase font-bold'>hello world!</div>
      <div className='text-[50px] underline uppercase font-bold'>hello world!</div>
      <div className='text-[50px] underline uppercase font-bold'>hello world!</div>
      <div className='text-[50px] underline uppercase font-bold'>hello world!</div>
      <div className='text-[50px] underline uppercase font-bold'>hello world!</div>
      <div className='text-[50px] underline uppercase font-bold'>hello world!</div>
      <div className='text-[50px] underline uppercase font-bold'>hello world!</div>
      <div className='text-[50px] underline uppercase font-bold'>hello world!</div>
      <div className='text-[50px] underline uppercase font-bold'>hello world!</div>
      </section>
      <Footer/>
    </>
  )
}

export default App
