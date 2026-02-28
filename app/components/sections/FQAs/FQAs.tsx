import AccordionItem from "../../common/Accordion";
import Container from "../../common/Container";
import Title from "../../common/Title";


const FQAs = () => {

    return (
        <section id="faq">
            <Container className="flex flex-col !gap-3 items-center justify-center relative">

                <Title title="اسئلة شائعة" />

                <div className="flex flex-col !gap-3 text-center items-center justify-center w-full">
                    <h1 className="max-sm:text-4xl text-5xl">اسئلة متكررة يطرحها المراجعون</h1>
                    <p className="text-muted w-1/2 max-md:w-full text-[16px] text-center">نهتم دائما بان نقدم لكم افضل الخدمات وان نجيب على كل اسئلتكم </p>
                </div>

                <div className="w-[70%] max-md:w-[95%] max-sm:w-full flex flex-col !gap-4 relative">
                    <AccordionItem title="اين هي خدماتنا" id="0" className=" backdrop-blur-2xl">
                        <p>
                            خدماتنا حاليا تتركز في منطقة البصرة ولا سيما في منطقة الزبير لكن لدينا توجهات للتوسع لنغطي البصرة كاملة قبل حلول عام 2029.
                        </p>
                    </AccordionItem>
                    <AccordionItem title="كم تكلفة قطع تذكر للطبيب؟" id="1"className=" backdrop-blur-2xl">
                        <p>
                            دائما نحاول تقديم افضل الخدمات بارخض الاسعار وراحة المراجع تهمنا لذلك تكلفة قطع التذكرة هي فقط 10,000 دينار فقط!
                        </p>
                    </AccordionItem>
                    <AccordionItem title="هل ستوفرون اقسام طبية اكثر؟" id="2" className=" backdrop-blur-2xl">
                        <p>
                            الاقسام التي نوفرها نابعة من الطلب عليها، فاذا المراجعين طلبوا تخصص معين سنوفره لهم باقرب وقت ممكن وافضل دكتور متخصص في ذلك المجال ايضا.
                        </p>
                    </AccordionItem>

                    <AccordionItem title="هل هناك خصومات؟" id="3" className=" backdrop-blur-2xl">
                        <p>
                            نوفر خصومات على مدار السنة وبكل مناسبة وتصل الخصومات الى تخفيض بمقدار 50% وللعوائل المتعففة يصل الى 90% او 100%! فصحة المراجع هي ما يهمنا!
                        </p>
                    </AccordionItem>

                    <AccordionItem title="ماذا لو لم يعجبني شيء في العيادة؟" id="4" className=" backdrop-blur-2xl">
                        <p>
                            تستطيع بكل سهولة تقديم شكوى او اقتراح وسوف نعالج المشكلة باسرع وقت!
                        </p>
                    </AccordionItem>


                    <span className="absolute top-0 right-0 -z-1 w-40 h-40 inline-flex rounded-full bg-primary/10  shadow-primary/10 shadow-[0_0_100px_200px] max-md:shadow-[0_0_100px_100px] max-sm:shadow-[0_0_120px_120px] max-sm:w-10 max-sm:h-10"></span>
                    <span className="absolute top-0 left-0 -z-1 w-40 h-40 inline-flex rounded-full bg-primary/10  shadow-primary/10 shadow-[0_0_100px_200px] max-md:shadow-[0_0_100px_100px] max-sm:shadow-[0_0_120px_120px] max-sm:w-10 max-sm:h-10"></span>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -z-1 w-40 h-40 inline-flex rounded-full bg-primary/10  shadow-primary/10 shadow-[1px_1px_100px_100px] "></span>

                </div>


            </Container>
        </section>
    )
}


export default FQAs;