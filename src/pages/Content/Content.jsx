import Button from "../../components/Button/Button"
import { useSelector } from "react-redux"

export default function Content() {
  const scrollY = useSelector((state) => state.scroll.scrollY)

  const sectionClassName = scrollY > 0 ? 'mt-[70px]' : ''

    return (
        <section className={`${sectionClassName} relative -top-[70px]`}>
            <div>
            <div className='h-screen -z-10 pointer-events-none'>
                <img 
                className="content-image " 
                src="https://pbs.twimg.com/media/F-5gPXlXwAEzB7V?format=jpg&name=large"
                alt=""/>
            </div>
            <div className=" absolute ml-20 mt-20 h-[500px] flex flex-col text-center items-center w-1/3 top-[140px] text-white font-bold uppercase">
                <p 
                className="lg:text-[40px] text-[30px] text-shadow-xl ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae praesentium ab 
                </p>
                <Button className="cursor-pointer" size={'large'}>sadjas</Button>
            </div>
            </div>
            <div className='flex gap-20 w-full justify-evenly my-10 flex-wrap'>
                <div className="h-[500px] w-[400px] border-2 rounded-3xl border-black"></div>
                <div className="h-[500px] w-[400px] border-2 rounded-3xl border-black"></div>
                <div className="h-[500px] w-[400px] border-2 rounded-3xl border-black"></div>
            </div>
            <div className='text-[50px] underline uppercase font-bold'>hello world!</div>
            <div className='text-[50px] underline uppercase font-bold'>hello world!</div>
            <div className='text-[50px] underline uppercase font-bold'>hello world!</div>
            <div className='text-[50px] underline uppercase font-bold'>hello world!</div>
            
            <div>
            <Button size={'large'}>large</Button>
            <Button size={'medium'}>med</Button>
            <Button size={'small'}>small</Button>
            <Button>tikla</Button>
            </div>
        </section>
        
    )
}