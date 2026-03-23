import Button from "../../common/Button"
import { FaLocationDot } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import { FaStethoscope } from "react-icons/fa";
import { IconType } from "react-icons";
import Container from "../../common/Container";
import Image from "next/image";

interface StatItem {
    id: number;
    title: string;
    subTitle: string;
    icon: IconType;
}


const STATS_DATA: StatItem[] = [
    {
        id: 1,
        title: "12 سنة خبرة",
        subTitle: "من 2014 وما زلنا متألقين في مجالنا",
        icon: FaAward
    },
    {
        id: 2,
        title: "البصرة - صفوان",
        subTitle: "شارع المكاتب قرب مكتبة الشاهين",
        icon: FaLocationDot
    },
    {
        id: 3,
        title: "6 تخصصات طبية",
        subTitle: "طب القلب - طب الأطفال - طب الأسنان - جراحة العظام - طب العيون - جراحة عامة",
        icon: FaStethoscope
    }
];

const Hero = () => {

    return (
        <section className="w-full relative">
            <Container id="home" className="flex items-center !py-18 !pt-30 flex-col !gap-4">
                <div className="flex items-center justify-center">
                    <div className="flex relative">
                        <Image src={"/person.jpg"} width={40} height={40} className="rounded-full object-cover aspect-square shadow-2xl border border-slate-300" alt="person" />
                        <Image src={"/person.jpg"} width={40} height={40} className="rounded-full object-cover aspect-square translate-x-5 shadow-2xl border border-slate-300" alt="person" />
                        <Image src={"/person.jpg"} width={40} height={40} className="rounded-full object-cover aspect-square translate-x-8 shadow-2xl border border-slate-300" alt="person" />
                        <Image src={"/person.jpg"} width={40} height={40} className="rounded-full object-cover aspect-square translate-x-10 shadow-2xl border border-slate-300" alt="person" />
                    </div>
                    <div className="flex flex-col translate-x-5">
                        <span className="text-primary text-sm font-bold">260K+</span>
                        <span className="text-sm">مراجع راضٍ</span>
                    </div>
                </div>

                <div className="flex flex-col !gap-4 items-center justify-center">

                    <h1 className="md:text-8xl max-md:text-7xl max-sm:text-6xl text-center md:leading-30 max-md:leading-28 max-sm:leading-24">
                        رعاية موثوقة لك <br></br>ولعائلتك
                    </h1>
                    <p className="text-slate-800 text-lg text-center">
                        خدمات رعاية صحية شاملة وإنسانية، صُمِّمت لدعم صحة ورفاه عائلتك في كل مرحلة من مراحل الحياة
                    </p>
                    <div className="flex !gap-4 items-center justify-center relative">
                        <Button title="إحجر الآن" href="#booking" className="bg-primary" />
                        <Button title="إستكشفت خدماتنا" href="#services" className="bg-background/70 text-black border-background border-2" styleArrow="text-black" />
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -z-1 w-40 h-40 inline-flex rounded-full bg-primary/25  shadow-primary/25 shadow-[1px_1px_200px_200px] max-md:shadow-[1px_1px_100px_100px]"></span>

                    </div>


                    <span className="absolute top-0 right-0 -z-1 w-40 h-40 inline-flex rounded-full bg-primary/25  shadow-primary/25 shadow-[0_0_100px_200px] max-md:shadow-[0_0_100px_100px] max-sm:shadow-[0_0_120px_120px] max-sm:w-10 max-sm:h-10"></span>
                    <span className="absolute top-0 left-0 -z-1 w-40 h-40 inline-flex rounded-full bg-primary/25  shadow-primary/25 shadow-[0_0_100px_200px] max-md:shadow-[0_0_100px_100px] max-sm:shadow-[0_0_120px_120px] max-sm:w-10 max-sm:h-10"></span>


                </div>


                <div className="w-full flex flex-wrap  justify-between !gap-4 items-center  ">


                    {
                        STATS_DATA && STATS_DATA.map((item: StatItem, index: number) => (

                            <div key={index} className="flex items-center !gap-4 max-md:!gap-2 md:flex-1 hover:border-primary hover:scale-110 trasnlate duration-300 cursor-pointer bg-background/70 backdrop-blur-md border max-w-xs border-background/20 !p-4 rounded-2xl shadow-xl mx-auto transform">
                                <div className="bg-primary/10 !p-3 max-md:!p-2 rounded-full">
                                    <item.icon className="text-primary w-6 h-6 max-md:w-3 max-md:h-3" />
                                </div>

                                <div className="flex flex-col text-right">
                                    <span className="text-sm font-bold text-slate-800 ">{item.title}</span>
                                    <span className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{item.subTitle}</span>
                                </div>
                            </div>
                        )
                        )
                    }

                </div>
            </Container>
        </section>

    )
}

export default Hero