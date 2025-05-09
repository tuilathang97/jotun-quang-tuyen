const About = () => {
    return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Jotun Long Hậu</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Chào mừng đến với tiệm sơn của chúng tôi, nơi chuyên cung cấp các sản phẩm sơn chất lượng cao từ thương hiệu nổi tiếng Jotun. Tại đây, không chỉ là nơi bán sơn, chúng tôi còn tự hào là trung tâm pha màu chuyên nghiệp, sẵn sàng đáp ứng mọi yêu cầu màu sắc của quý khách hàng. Với đội ngũ nhân viên giàu kinh nghiệm và nhiệt huyết, chúng tôi cam kết mang đến cho quý khách những sản phẩm sơn Jotun chính hãng, đảm bảo chất lượng và độ bền màu theo thời gian. Hãy đến với chúng tôi để trải nghiệm dịch vụ tư vấn, pha màu chuyên nghiệp và tận tâm, giúp ngôi nhà của bạn thêm phần nổi bật và ấn tượng.
        </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <iframe className="w-full mx-6 md:mx-10" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.0664639815523!2d106.68707517975342!3d10.652180940233622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175378f2eb03c25%3A0xbbd61b9051b3c53f!2zQ-G7rWEgSMOgbmcgU8ahbiBLaG9hIE1pbmggTG9uZyBI4bqtdQ!5e0!3m2!1sen!2s!4v1704213561657!5m2!1sen!2s" width="600" height="450" loading="lazy"></iframe>
      </div>
    </div>
  )
}

const links = [
  { name: 'Trang chủ', href: '/' },
  { name: 'Mua sơn ngoại thất', href: '/#exterior' },
  { name: 'Mua sơn nội thất', href: '/#interior' },
  { name: 'Xem bảng màu', href: '/colors' },
]
const stats = [
  { name: 'Sản phẩm chính hãng', value: '100%' },
  { name: 'Khách hàng tin dùng', value: '300+' },
  { name: 'Hỗ trợ quý khách', value: '24/7' },
  { name: 'Giá cả hợp lý', value: 'Luôn luôn' },
]

export default About;