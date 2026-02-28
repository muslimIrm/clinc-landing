import Image from "next/image";
import Container from "../../common/Container";
import Title from "../../common/Title";



const AboutUs = () => {

    return (
        <div className="bg-primary/10">

            <Container id="about" className="flex max-lg:flex-col items-center justify-between items-center  !gap-5">
                <div className="flex flex-col !gap-4 w-1/2 max-lg:w-full">

                    <Title title="من نحن"/>
                    <h1 className="text-6xl leading-16">
                        عيادة الزهور الأهلية <br></br> صحتك هي اولويتنا القصوى
                    </h1>
                    <p className="text-[16px] text-muted">
                        رؤيتنا: عقدٌ من الرعاية، وحياةٌ تزخر بالصحة
                        منذ انطلاقتنا في قلب عام 2014، وضعت عيادة الزهور الأهلية نُصب عينيها هدفاً واحداً: أن تكون الملاذ الصحي الأول والآمن لعائلاتنا. على مدار أكثر من 12 عاماً، لم نكتفِ بتقديم العلاج فحسب، بل بنينا جسوراً من الثقة مع آلاف المرضى، معتمدين على الدقة المتناهية والتعامل الإنساني الراقي.

                        لماذا عيادة الزهور؟
                        نحن نؤمن أن الشفاء يبدأ من التشخيص الصحيح والبيئة المريحة. لذا، جمعنا لكم نخبة من الأطباء والاستشاريين تحت سقف واحد، لنضمن لكم رحلة علاجية متكاملة دون عناء التنقل بين العيادات.

                        تخصصاتنا الشاملة:
                        نفتخر بتقديم رعاية طبية متخصصة في 6 أقسام أساسية، مُجهزة بأحدث التقنيات الطبية:

                        طب القلب: لرعاية نبضك بأحدث تقنيات التشخيص.

                        طب الأطفال: عناية فائقة لأطفالنا، جيل المستقبل.

                        طب الأسنان: لرسم ابتسامة صحية وجميلة.

                        جراحة العظام: استعادة حركتك وحياتك النشطة بكل كفاءة.

                        طب العيون: رؤية أوضح لعالم أجمل.

                        الجراحة العامة: دقة جراحية بمعايير عالمية.

                        "في عيادة الزهور، نحن لا نعالج أعراضاً.. نحن نرعى أرواحاً."</p>

                </div>
                <div className="w-1/2 h-full flex items-center justify-center !px-3 max-lg:w-full">
                    <Image src={"/doctor-about-section.jpg"} width={100} height={100} alt="image" unoptimized={true} className="w-full h-auto object-cover rounded-2xl max-lg:hidden"/>
                    <Image src={"/doctor _for_about2.png"} width={100} height={100} alt="image" unoptimized={true} className="w-full h-auto object-cover rounded-2xl lg:hidden"/>
                </div>
            </Container>
        </div>
    )
}

export default AboutUs;