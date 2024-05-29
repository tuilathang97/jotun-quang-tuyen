import Image from 'next/image';

function Banner() {
    return ( 
        <div className="md:min-h-[400px] text-center flex items-center flex-col gap-4 relative">
            <Image src='/Jotun-5503-Natural-Blue.jpg' alt='' width={1440} height={1480} 
                className='min-w-full min-h-[300px] max-h-[500px] w-full h-full'>
            </Image>
            <div className='absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
                <h1 className="hidden lg:block text-[36px] font-bold text-white w-[400px] mx-auto mb-4">
                    <div>Màu sắc chất lượng, </div>
                    <div>Lựa chọn hoàn hảo</div>
                </h1>
            </div>
        </div>
    );
}

export default Banner;