import Button from "../../components/Button/Button"
import { useSelector } from "react-redux"

export default function Content() {

    
  const scrollY = useSelector((state) => state.scroll.scrollY)

  const sectionClassName = scrollY > 0 ? 'mt-[80px]' : ''

    return (
        <div>
        <section className={sectionClassName}>
            <div className='-top-[140px] relative h-screen -z-10'>
                <div className="h-screen">
                <img 
                className="content-image" 
                src="https://pbs.twimg.com/media/F-5gPXlXwAEzB7V?format=jpg&name=large"
                alt=""/>
                </div>
                <div className=" absolute ml-20 mt-20 h-[500px] flex text-center items-center w-1/3 top-[140px] text-white font-bold uppercase">
                <p 
                className="lg:text-[40px] text-[30px] text-shadow-xl ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae praesentium ab 
                </p>
                </div>
            </div>
            <div className='text-[50px] underline uppercase font-bold'>hello world!</div>
            <div className='text-[50px] underline uppercase font-bold'>hello world!</div>
            <div className='text-[50px] underline uppercase font-bold'>hello world!</div>
            <div className='text-[50px] underline uppercase font-bold'>hello world!</div>
            <div className='text-[50px] underline uppercase font-bold'>hello world!</div>
            
            <div>
            <Button size={'large'}>tikla</Button>
            <Button size={'medium'}>tikla</Button>
            <Button size={'small'}>tikla</Button>
            <Button>tikla</Button>
            </div>
        </section>
        </div>
    )
}