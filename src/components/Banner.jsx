import img from '../assets/Images/close-up-people.jpg'
import img2 from '../assets/Images/medium-shot-volunteers.jpg'
import img3 from '../assets/Images/people-bringing-supplies.jpg'
const Banner = () => {
    return (
        <div className='mb-5'>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img} className="w-full h-96 rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div className="flex-1 w-3/5 ">
                        <h1 className="text-center text-2xl text-purple-500">Welcome to <span className='font-bold text-purple-600'>FoodUnity</span></h1>
                        <p className="text-center text-xs text-purple-500 lg:text-2xl" >In the act of sharing food, we nourish not only bodies but also spirits, fostering bonds that strengthen our communities</p>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full h-96 rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <p className="text-center text-xs text-purple-500 lg:text-2xl">A plate shared is a community cared. Together, we can alleviate hunger and build a stronger, more compassionate society</p>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img  src={img3} className="w-full h-96 rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <p className="text-center text-xs text-purple-500 lg:text-2xl">No one should go hungry when there's plenty to share. Let's bridge the gap between surplus and need, one meal at a time</p>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;