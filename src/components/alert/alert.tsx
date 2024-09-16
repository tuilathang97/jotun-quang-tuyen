
export default function Alert() {
    return (
        <div className="hidden md:flex items-center gap-x-6 bg-indigo-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            <p className="text-sm leading-6 text-white">
                <strong className="font-semibold">Jotun Long Hậu</strong>
                <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline h-0.5 w-0.5 fill-current">
                    <circle r={1} cx={1} cy={1} />
                </svg>
                đang có sự kiện khuyến mại cho tất cả sản phẩm - &nbsp;<span aria-hidden="true"><a href="#best-seller"><strong>Xem ngay  </strong></a>&rarr;</span>
            </p>
            <div className="flex flex-1 justify-end">
            </div>
        </div>
    )
}
