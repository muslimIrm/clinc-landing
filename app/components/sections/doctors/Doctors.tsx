import Image from "next/image";
import Container from "../../common/Container";
import Title from "../../common/Title";

interface Doctor {
    id: number;
    name: string;
    specialty: string;
    image: string;
}

const doctors: Doctor[] = [
    { id: 1, name: "أحمد منصور", specialty: "طب القلب", image: "/d1.png" },
    { id: 2, name: "سارة حسن", specialty: "طب الأطفال", image: "/d2.png" },
    { id: 3, name: "زايد الفايد", specialty: "طب الأسنان", image: "/d3.png" },
    { id: 4, name: "عمر خطاب", specialty: "جراحة العظام", image: "/d1.png" },
    { id: 5, name: "ليلى محمود", specialty: "طب العيون", image: "/d2.png" },
    { id: 6, name: "خالد ناصر", specialty: "جراحة عامة", image: "/d3.png" },
];

const Doctors = () => {

    return (
        <section id="doctors">
            <Container className="flex flex-col gap-3! relative">
                <div className="flex flex-col gap-4! items-center justify-center">
                    <Title title="الاطباء" />
                    <h1 className="text-5xl">اطباء مميزين لك</h1>
                    <p className="text-muted text-[16px]">اطباءنا الذي اخترناهم خصيصا لسلامتك وسلامة عائلتك. ثلة من الاطباء الافكاء في مجالهم على مستوى العالم وكلهم اصحاب بورد عالمي.</p>
                </div>
                <div className=" grid grid-cols-6 gap-3! max-lg:grid-cols-4 max-xl:grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-2">

                    {
                        doctors.map((d, i) =>
                        (
                            <div key={d.id} className="flex flex-col gap-3! bg-primary/5 rounded-2xl shadow p-2! translate duration-300 hover:bg-linear-to-b hover:from-accent/90 hover:via-primary hover:to-primary group">
                                <div className="w-full bg-background rounded-2xl shadow overflow-hidden">
                                    <Image src={d.image} width={100} height={100} alt="image" className="w-full" unoptimized />
                                </div>
                                <div className="flex flex-col ">
                                    <span className="text-primary font-bold group-hover:text-accent">{d.specialty}</span>
                                    <span className="text-xl group-hover:text-background">{d.name}</span>
                                    <p className="text-muted text-sm group-hover:text-background">15 سنة خبرة</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <span className="absolute top-1/2 -translate-y-1/2 right-0 -z-1 w-40 h-40 inline-flex rounded-full bg-primary/25  shadow-primary/25 shadow-[0_0_100px_100px] max-md:shadow-[0_0_100px_100px] max-sm:shadow-[0_0_120px_120px] max-sm:w-10 max-sm:h-10"></span>
                <span className="absolute top-1/2 -translate-y-1/2 left-0 -z-1 w-40 h-40 inline-flex rounded-full bg-accent/40  shadow-accent/40 shadow-[0_0_100px_100px] max-md:shadow-[0_0_100px_100px] max-sm:shadow-[0_0_120px_120px] max-sm:w-10 max-sm:h-10"></span>

            </Container>
        </section>
    )
}


export default Doctors;