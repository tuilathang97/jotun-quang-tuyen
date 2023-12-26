import Heading from "@/components/heading";
import Section from "@/components/section";
import { fetchArrayJson } from "@/utils/utils";

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
    console.log(colors);
    if (!colors) {
        return <></>;
    }
    return(
        <Section>
            <>
                <h1 className="text-4xl text-center mb-10 font-light">Bảng màu</h1>
                <p className="text-xl text-center leading-8">Cửa hàng chúng tôi có đa dạng màu sắc hấp dẫn được trình bày dưới dạng khối sơn và mẫu giấy - giúp bạn có một điểm xuất phát để chọn màu sắc của mình.</p>
                {
                    avaiable_tones.map(tone => <ColorSection key={tone} colors={colors} tone={tone}/>)
                }
            </>
        </Section>
    )
}

function ColorSection({colors, tone} : { colors: Color[],tone:Tone}) {
    if (!tone) return null;
    const toneColors = colors.filter(color => color.tone === tone);
    return(
        <div className="my-10">
            <h2 className="text-3xl text-center capitalize mb-10 font-light">{tone} Tone</h2>
            <ul className="flex flex-wrap gap-x-3 gap-y-4 mb-4 justify-center">
                {toneColors.map(color => {
                    const bgColor = color.color;
                    return (
                        <li key={color.color} className={`w-40 h-40 flex justify-center items-center shadow-md text-gray-800`} style={{ backgroundColor: bgColor }}>
                            { color.color }
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Colors;