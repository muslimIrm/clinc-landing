import Button from "../../common/Button"
import Container from "../../common/Container"
import Image from "next/image"

interface NavType {
    id: number,
    title: string,
    link: string
}

const navbar: NavType[] = [
    {
        id: 0,
        title: "الصفحة الرئيسية",
        link: "#home"
    }, {
        id: 1,
        title: "عنّا",
        link: "#about"
    }, {
        id: 2,
        title: "الخدمات",
        link: "#services"
    }, {
        id: 3,
        title: "الاطباء",
        link: "#doctors"
    }, {
        id: 4,
        title: "اسئلة شائعة",
        link: "#qfa"
    },
]
const Footer = () => {

    return (

        <div className="bg-primary/50 relative">
            <span className="absolute bottom-0 left-0 z-1  w-40 h-40 inline-flex rounded-full bg-background/20  shadow-background/20 shadow-[0_0_50px_50px] max-md:shadow-[0_0_50px_50px] max-sm:shadow-[0_0_40px_30px] max-sm:w-10 max-sm:h-10"></span>
            <span className="absolute bottom-0  right-0 z-1   w-40 h-40 inline-flex rounded-full bg-background/20  shadow-background/20 shadow-[0_0_50px_50px] max-md:shadow-[0_0_50px_50px] max-sm:shadow-[0_0_40px_30px] max-sm:w-10 max-sm:h-10"></span>

            <Container className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 z-3 py-6">
                {/* القسم الأول: العنوان - يظهر في البداية أو الأعلى */}
                <div className="flex flex-col gap-2! text-center md:text-right">
                    <span className="text-lg font-bold">العنوان</span>
                    <span>بغداد - الكرخ الاثنية - "شارع المكاتب قرب مكتبة الشاهين</span>
                    <p><span className="text-muted">مفتوح</span> 24 ساعة, و7 ايام <span className="text-muted">بالاسبوع</span></p>
                </div>

                {/* القسم الثاني: اللوجو والتواصل - يكون في المنتصف دائماً */}
                <div className="flex flex-col !gap-3 items-center justify-center order-first md:order-0">
                    <div className="flex !gap-1 items-center justify-center">
                        <Image width={52} height={52} src={"/clincLogo.avif"} alt="logo" className=" rounded-lg" />
                        <h1 className="text-xl font-bold">صحة</h1>
                    </div>
                    <div className="flex flex-col gap-1! items-center">
                        <span>تواصل معنا</span>
                        <span className="text-2xl font-bold" dir="ltr">+964 7800000000</span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2!">
                        <Button href="#booking" title="احجر موعد" className="bg-accent text-black hover:bg-[#f5c650] " styleArrow="hidden" />
                        <Button href="#booking" title="تواصل معنا" className="bg-primary" />
                    </div>
                </div>

                {/* القسم الثالث: الروابط السريعة */}
                <div className="flex flex-col gap-2! items-center justify-center">
                    <span className="text-lg font-bold ">روابط سرعة</span>
                    <div className="flex flex-col gap-1! items-center md:items-start">
                        {
                            navbar.map((item, index) =>
                                <a key={item.id} href={item.link} className="hover:underline">{item.title}</a>
                            )
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default Footer