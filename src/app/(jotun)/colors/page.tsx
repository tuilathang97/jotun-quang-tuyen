import Heading from "@/components/heading";
import Section from "@/components/section";
import { fetchArrayJson } from "@/utils/utils";
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

const avaiable_tones = ['green','yellow','orange','redpink','purple','blue','brown','grey'] as const;
type Tone = typeof avaiable_tones[number];

interface Color {
    color: string;
    name: string;
    tone: Tone
}

function getColors() : Color[] {
    return fetchArrayJson<Color>('colors');
}

function Colors({}) {
    const colors = getColors();
    if (!colors) {
        return <></>;
    }
    return(
        <>
            <Section>
                <>
                    <h1 className="text-5xl text-center mb-10 font-bold">Bảng màu</h1>
                    <p className="text-xl text-center leading-8">Cửa hàng chúng tôi có đa dạng màu sắc hấp dẫn được trình bày dưới dạng khối sơn và mẫu giấy - giúp bạn có một điểm xuất phát để chọn màu sắc của mình.</p>
                </>
            </Section>
            <ColorSection colors={colors}/>
            <AlertDemo/>
        </>
    )
}

function ColorSection({colors} : { colors: Color[]}) {
    if (!colors) return null;
    return(
        <Section>
            <div className="my-10">
                <ul className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-y-4 gap-x-2 justify-center items-center mb-4">
                    {colors.map(color => {
                        const bgColor = color.color;
                        return (
                            <li key={color.color} className="flex flex-col gap-2 mx-auto w-full">
                                <div className={`w-full h-24 md:h-28 lg:h-36 flex justify-center items-center shadow-md text-gray-800`} style={{ backgroundColor: bgColor }}></div>
                                <p className="h-5 text-xs text-ellipsis antialiased uppercase tracking-tight text-gray-600 leading-2">{ color.name }</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Section>
    )
}

function AlertDemo() {
  return (
    <Alert className="bg-sky-300 mb-10 mx-auto max-w-4xl text-center">
      <AlertDescription>
        Màu sắc có thể khác nhau khi hiển thị trên các màn hình khác nhau. Để có trải nghiệm chính xác nhất vui lòng đến cửa hàng tại
        <a className="text-md font-bold hover:text-red-700" href="https://maps.app.goo.gl/Js9YqWYvGkoci7hm9"> 243 ĐT826C, Long Hậu, Cần Giuộc, Long An</a>
      </AlertDescription>
    </Alert>
  )
}

export default Colors;