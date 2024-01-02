import Link from "next/link";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

type Footer = {
    title: string,
    items: LinkProps[]
}

type LinkProps = {
    text: string,
    url: string
}

const footers = [
    {
        title: 'SƠN JOTUN',
        items: [
            {
                text: 'Sơn Jotun nội thất',
                url: '/#interior',
            },
            {
                text: 'Sơn Jotun ngoại thất',
                url: '/#exterior',
            },
            {
                text: 'Sơn phủ Jotun',
                url: '/#',
            },
            {
                text: 'Sơn nền Jotun',
                url: '/#',
            },
            {
                text: 'Sơn dầu Jotun',
                url: '/#',
            }
        ]
    },
    {
        title: 'PHỤ KIỆN SƠN NHÀ',
        items: [
            {
                text: 'Cọ quét',
                url: '/#',
            },
            {
                text: 'Bột',
                url: '/#',
            }
        ]
    },
    {
        title: 'KHÁM PHÁ',
        items: [
            {
                text: 'Giới thiệu',
                url: '/about'
            },
            {
                text: 'Bảng màu',
                url: '/colors'
            },
            {
                text: 'Bảng giá',
                url: '#'
            },
            {
                text: 'Tư vấn',
                url: '#'
            }
        ]
    }
]

function Footer() {
    return (
        <footer>
            <div className="flex flex-col">
                {/* Back link */}
                <div className="w-full bg-footer">
                    <div className="max-w-6xl mx-auto grid justify-center grid-cols-2 gap-x-10 md:grid-cols-3 px-8 pb-4 md:px-16 lg:px-20 text-white">
                        {
                            footers.map((f : Footer)=> (
                                <div key={f.title} className='pt-8 md:pb-8'>
                                    <h3 className="font-bold pb-2 tracking-widest">{ f.title }</h3>
                                    <ul className="flex flex-col gap-2">
                                        {
                                            f.items?.map((i) => (
                                                <li key={i.text}>
                                                    <Link href={i.url} className='text-sm'>
                                                        { i.text }
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='bg-footer-secondary py-6'>
                    <div className="flex justify-center w-full gap-6">
                        <Link href='#' aria-label='Jotun Quang Tuyen Facebook url'>
                            <FaFacebook className='w-8 h-8 text-white'/> 
                        </Link>
                        <Link href='#' aria-label='Jotun Quang Tuyen Instagram url'>
                            <FaInstagram className='w-8 h-8 text-white'/> 
                        </Link>
                        <Link href='#' aria-label='Jotun Quang Tuyen Zalo url'>
                            <SiZalo className='w-8 h-8 text-white'/> 
                        </Link>
                    </div>
                    <div className="text-white flex justify-center mt-4 text-sm text-center">
                        <ul>
                            <li><a className="underline" href="https://maps.app.goo.gl/Js9YqWYvGkoci7hm9">Google Maps</a></li>
                            <li>Địa chỉ: 243 ĐT826C, Long Hậu, Cần Giuộc, Long An</li>
                            <li>Điện thoại: 0898.271.703</li>
                        </ul>
                    </div>
                    <div className='text-white flex justify-center mt-4 text-sm'>
                        © 2023 Jotun Long Hậu - www.jotunlonghau.com
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;