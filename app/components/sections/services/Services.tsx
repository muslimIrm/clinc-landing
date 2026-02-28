"use client"

import { useEffect, useState } from "react"
import Container from "../../common/Container"
import Title from "../../common/Title"
import Image from "next/image"
import Button from "../../common/Button"
import AccordionItem from "../../common/Accordion"


interface Department {
    id: number;
    name: string;
    code: string;
    image: string;
    description: string; // أضفنا هذا الحقل لتخزين الشرح
}

const departments: Department[] = [
    {
        id: 1,
        name: "طب القلب",
        code: "CA",
        image: "CA.webp",
        description: "نقدم رعاية قلبية شاملة تشمل الفحوصات الوقائية وتشخيص الأمراض المزمنة بأحدث تقنيات التصوير، لضمان صحة قلبك تحت إشراف نخبة من الاستشاريين."
    },
    {
        id: 2,
        name: "طب الأطفال",
        code: "PD",
        image: "PD.jpg",
        description: "نعتني بصحة أطفالكم من الولادة وحتى المراهقة في بيئة آمنة. نوفر التطعيمات، متابعة النمو، وعلاج الحالات الحادة لضمان مستقبل صحي لصغاركم."
    },
    {
        id: 3,
        name: "طب الأسنان",
        code: "DN",
        image: "DN.jpg",
        description: "نوفر حلولاً متكاملة تشمل طب الأسنان التجميلي، الزرع، والتقويم، باستخدام أحدث التقنيات الرقمية لضمان تجربة علاجية دقيقة ومريحة تماماً."
    },
    {
        id: 4,
        name: "جراحة العظام",
        code: "OR",
        image: "OR.png",
        description: "متخصصون في استعادة حركتكم عبر علاج إصابات الملاعب وآلام المفاصل، نعتمد على برامج علاجية متطورة تهدف إلى تسريع التعافي والعودة للحياة الطبيعية."
    },
    {
        id: 5,
        name: "طب العيون",
        code: "OP",
        image: "OP.png",
        description: "نمنحك رؤية أوضح من خلال فحوصات النظر الشاملة وعلاجات الليزر المتقدمة، نستخدم أحدث الأجهزة لضمان سلامة عينيك وتقديم أفضل رعاية بصرية."
    },
    {
        id: 6,
        name: "جراحة عامة",
        code: "GS",
        image: "GS.png",
        description: "نقدم رعاية متكاملة للحالات الجراحية المختلفة مع التركيز على تقنيات المنظار، لضمان تقليل الألم وفترة النقاهة مع الالتزام بأعلى معايير السلامة."
    },
];

const Services = () => {
    const [state, setState] = useState<string | null>("CA")
    const [image, setImage] = useState<string>(departments[0].image)


    const handel = (code: string, index: number) => {
        if (state === code) {
            return
        }
        setState(null)
        setImage(departments[index].image)
        setTimeout(() => {
            setState(code)
        }, 400)
    }

    const [isExpanded, setIsExpanded] = useState(false);

    return (

        <section id="services" className="bg-primary/10">
            <Container className="flex flex-col !gap-5">
                <div className="flex flex-col !gap-3 items-center justify-center w-full ">
                    <Title title="خدماتنا" />
                    <h1 className="text-5xl max-sm:text-4xl">خدماتنا لك</h1>
                    <p className="text-muted w-1/2 max-md:w-full text-[16px] text-center">
                        نقدم لك مجموعة شاملة من الخدمات الطبية المتخصصة وفق أعلى معايير الجودة، بإشراف فريق طبي متميز مكرس لتوفير حلول تشخيصية وعلاجية دقيقة تضمن لك أفضل النتائج الصحية.
                    </p>
                </div>
                <div className=" grid grid-cols-2 max-md:grid-cols-1">

                    <div className="flex flex-col ">

                        {
                            departments.map((d, index) => {
                                return (

                                    <div key={d.id} onClick={() => { handel(d.code, index) }} className={`${state === d.code ? "bg-primary" : "bg-transparent"} text-black translate duration-200 rounded-2xl !px-6 !py-4`}>
                                        <h1 className={`${state === d.code ? "text-background" : "text-black"} text-2xl`}>{d.name}</h1>
                                        <div className={`${state === d.code ? "slidDown" : "slidUp"} text-background translate overflow-hidden duration-200 flex flex-col !gap-4  rounded-2xl`}>
                                            <p>
                                                {
                                                    d.description
                                                }
                                            </p>
                                            <Button title="احجز موعد مع الطبيب" href="#booking" styleArrow="text-black" className="bg-accent text-black text-sm !px-3 !py-2 w-fit" />

                                            <div className={`w-full h-[1px] bg-slate-300 rounded-2xl ${state === d.code && "hidden"} !mt-2`}></div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>


                    <div className="flex items-center justify-center">
                        <div className="relative w-[60%] max-md:w-[80%] flex items-center justify-center">

                            <Image
                                src={`/${image}`}
                                unoptimized
                                height={100}
                                width={100}
                                alt="alert"
                                className="w-full h-auto rounded-2xl shadow relative z-10"
                            />

                            <div className="absolute inset-0 bg-primary -z-10 translate-x-2 scale-y-[0.95] rounded-2xl"></div>

                            <div className="absolute inset-0 bg-primary/50 -z-10 translate-x-4 scale-y-[0.90] rounded-2xl"></div>

                            <div className="absolute inset-0 bg-primary/20 -z-10 translate-x-6 scale-y-[0.85] rounded-2xl"></div>

                        </div>


                    </div>




                </div>
            </Container>
        </section>
    )
}


export default Services