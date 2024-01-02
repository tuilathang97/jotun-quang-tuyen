import { BsClockHistory } from 'react-icons/bs'; 
import { FaShippingFast } from 'react-icons/fa'; 
import { SiAdguard } from 'react-icons/si'; 
import { FaWifi } from "react-icons/fa6";
import { ImPriceTags } from "react-icons/im";

function PromoBanner() {
    return (
        <div className='flex flex-col'>
            <p className='bg-[#003149] text-white flex justify-center mt-0 py-2 md:mt-0 md:py-4 px-10 text-center font-mono'>
                Chúng tôi cam kết mang đến cho bạn những sản phẩm sơn Jotun chất lượng hàng đầu
            </p>
            <div className='grid grid-cols-2 md:grid-cols-4 px-10 py-10 justify-start items-start gap-10 bg-promo md:mt-0'>
                <div className='flex flex-col mx-auto w-[120px] justify-center items-center text-sm gap-4 text-center font-semi-bold text-yellow-700 font-mono'>
                    <FaWifi className='w-12 h-12 text-yellow-600'/>
                    Đặt online tiện lợi, nhanh chóng
                </div>
                <div className='flex flex-col mx-auto w-[120px] justify-center items-center text-sm gap-4 text-center font-semi-bold text-yellow-700 font-mono'>
                    <FaShippingFast className='w-12 h-12 text-yellow-600'/>
                    Miễn phí giao hàng
                </div>
                <div className='flex flex-col mx-auto w-[120px] justify-center items-center text-sm gap-4 text-center font-semi-bold text-yellow-700 font-mono'>
                    <SiAdguard className='w-12 h-12 text-yellow-600'/>
                    Cam kết chính hãng 100%
                </div>
                <div className='flex flex-col mx-auto w-[120px] justify-center items-center text-sm gap-4 text-center font-semi-bold text-yellow-700 font-mono'>
                    <ImPriceTags className='w-12 h-12 text-yellow-600'/>
                    Giá rẻ nhất mọi thời điểm
                </div>
            </div>
            
        </div>
    );
}

export default PromoBanner;