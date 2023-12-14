import Button from "../../components/Button/Button"
import { useSelector } from "react-redux"

export default function Content() {

    
  const scrollY = useSelector((state) => state.scroll.scrollY)

  const sectionClassName = scrollY > 0 ? 'mt-[80px]' : ''

    return (
        <div>
        <section className={sectionClassName}>
            <div className='-top-[140px] relative h-screen -z-10'>
                <img 
                className="content-image" 
                src="https://pbs.twimg.com/media/F-5gPXlXwAEzB7V?format=jpg&name=large" 
                alt=""/>
                <p className="text-[50px] absolute top-[140px] text-white font-bold uppercase">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae praesentium ab mollitia asperiores! A quidem soluta earum animi, minus possimus suscipit cupiditate minima ea eum impedit labore illo sapiente ut reprehenderit porro beatae explicabo molestiae modi. Hic perspiciatis sequi maiores?
                </p>
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