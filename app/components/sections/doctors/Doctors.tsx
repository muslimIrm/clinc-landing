"use client"
import Image from "next/image";
import Container from "../../common/Container";
import Title from "../../common/Title";
import { useState } from "react";

interface Doctor {
    id: number;
    name: string;
    specialty: string;
    image: string;
    description: string;
}

const doctors: Doctor[] = [
    {
        id: 1,
        name: "أحمد منصور",
        specialty: "طب القلب",
        image: "/d1.png",
        description: "تخرّج الدكتور أحمد منصور من كلية الطب بجامعة القاهرة عام 1998 بتقدير امتياز، ليبدأ رحلته العلمية بحصوله على زمالة أمراض القلب من مستشفى هامبورغ الجامعي في ألمانيا، ثم أتمّ تدريبًا متقدمًا في قسطرة القلب بمايو كلينيك الأمريكية. يمتلك خبرة تتجاوز 25 عامًا في تشخيص وعلاج اضطرابات الإيقاع القلبي وقسطرة الشرايين التاجية وتركيب الدعامات. يُعدّ من أوائل الأطباء الذين أدخلوا تقنية الإغلاق عبر القسطرة لعلاج عيوب الحاجز الأذيني في المنطقة العربية. نشر أكثر من 40 ورقة بحثية في مجلات طبية محكّمة، وشارك كمتحدث رئيسي في أكثر من 30 مؤتمرًا دوليًا. حاصل على جائزة أفضل طبيب قلب عربي من الجمعية الأوروبية لأمراض القلب عامَي 2015 و2020. يُشرف حاليًا على وحدة متخصصة لقسطرة القلب تضم 12 طبيبًا متخصصًا، وأجرى بنجاح أكثر من 6,000 عملية قسطرة وتدخّل تشخيصي علاجي."
    },
    {
        id: 2,
        name: "سارة حسن",
        specialty: "طب الأطفال",
        image: "/d2.png",
        description: "حصلت الدكتورة سارة حسن على شهادة الطب والجراحة من جامعة الأردن عام 2005 بمرتبة الشرف، وانتقلت بعدها إلى كندا لإتمام بورد طب الأطفال من جامعة تورنتو، ثم تخصّصت في أمراض الجهاز الهضمي لدى الأطفال وحديثي الولادة بمستشفى سيك كيدز الشهير. تمتلك خبرة ميدانية واسعة تمتد لأكثر من 18 عامًا، أمضت منها 5 سنوات في العمل الإنساني مع منظمة أطباء بلا حدود في أفريقيا. تشتهر بقدرتها الفائقة على التشخيص المبكر للأمراض النادرة لدى الأطفال، واكتشفت حتى الآن 3 حالات لأمراض وراثية نادرة لم تُوثَّق مسبقًا في المنطقة. أشرفت على أكثر من 10,000 حالة ولادة مبكرة وعالجت آلاف الأطفال المصابين بالتهابات معوية حادة. تُدرّس في كلية الطب وتُشرف على رسائل الدكتوراه، وأصدرت كتابًا مرجعيًا معتمدًا في طب الأطفال الهضمي مترجمًا لأربع لغات."
    },
    {
        id: 3,
        name: "زايد الفايد",
        specialty: "طب الأسنان",
        image: "/d3.png",
        description: "تخرّج الدكتور زايد الفايد من كلية طب الأسنان بجامعة الملك عبدالعزيز عام 2008 بتقدير ممتاز، وأتمّ دراسات عليا متخصصة في زراعة الأسنان بجامعة بولونيا الإيطالية، وزمالة في طب الأسنان التجميلي من أكاديمية نيويورك لطب الأسنان. يُعدّ اليوم من أبرز المرجعيات العربية في مجال الابتسامة التصميمية الرقمية والتركيبات الفخارية فائقة الدقة. طوّر بروتوكولًا خاصًا به لزراعة الأسنان الفورية في يوم واحد وهو مُعتمد من قِبل الاتحاد الأوروبي لزراعة الأسنان. حصد جائزة أفضل طبيب أسنان تجميلي إقليميًا ثلاث مرات متتالية بين عامَي 2018 و2023، ونشر 22 ورقة بحثية في مجلة طب الأسنان الدولية. أسّس أكاديمية تدريبية لطب الأسنان التجميلي خرّجت أكثر من 500 طبيب من 18 دولة، وأجرى ما يزيد على 4,500 حالة زراعة وابتسامة هوليودية بنسبة رضا تبلغ 99%."
    },
    {
        id: 4,
        name: "عمر خطاب",
        specialty: "جراحة العظام",
        image: "/d1.png",
        description: "تخرّج الدكتور عمر خطاب من كلية الطب بجامعة دمشق عام 2001، وأتمّ تدريبه الجراحي التخصصي في جراحة العظام والمفاصل بمستشفى رويال أورثوبيديك في برمنغهام بالمملكة المتحدة، ثم حصل على زمالة متقدمة في جراحة الركبة والكاحل من مستشفى هوسبيتال فور سبيشال سيرجري في نيويورك. يمتلك خبرة سريرية تمتد لأكثر من 22 عامًا، ويبرع تحديدًا في جراحات استبدال مفصل الركبة والورك الكلي بالروبوت الجراحي، وإعادة تأهيل الرياضيين بعد إصابات الأربطة. أسّس أول وحدة متخصصة في علاج إصابات الرياضيين النخبة في المنطقة، وتعاقد معه نادي كرة القدم الوطني طبيبًا رسميًا لأكثر من 10 سنوات. أجرى ما يزيد على 3,500 عملية ناجحة، ويُحاضر في المؤتمر السنوي لجراحة العظام الأمريكية. ألّف مرجعًا طبيًا بعنوان 'جراحة الرياضيين: من الإصابة إلى الملعب' وهو مقرّر في ثماني كليات طب عربية."
    },
    {
        id: 5,
        name: "ليلى محمود",
        specialty: "طب العيون",
        image: "/d2.png",
        description: "حصلت الدكتورة ليلى محمود على شهادة الطب من جامعة بغداد عام 2003 بمرتبة الشرف الأولى على دفعتها، ثم انتقلت إلى ألمانيا لإتمام تخصصها في جراحة الشبكية وعمليات الليزك بمستشفى شاريتيه برلين، وأتمّت زمالة في علاج الجلوكوما بمعهد موران للعيون في لندن. تُعدّ من أبرز المتخصصات في علاج الضمور البقعي المرتبط بالعمر وإعادة تأهيل مرضى فقدان البصر الجزئي باستخدام تقنيات الذكاء الاصطناعي في التشخيص. طوّرت بروتوكولًا علاجيًا مُبتكرًا لمرضى الجلوكوما المقاوم للعلاج اعتُمد رسميًا من قِبل الجمعية الأوروبية لطب العيون. أجرت ما يزيد على 8,000 عملية ليزك وزراعة عدسة وجراحة شبكية بنسبة نجاح تتخطى 97%، وهي الأعلى تقييمًا في منطقتها لعمليات تصحيح النظر. نشرت 35 بحثًا علميًا، وتشغل منصب رئيسة قسم طب العيون في مستشفى جامعي كبير، وتُشرف على برنامج للكشف المجاني على عيون الأطفال يصل سنويًا لأكثر من 15,000 طفل."
    },
    {
        id: 6,
        name: "خالد ناصر",
        specialty: "جراحة عامة",
        image: "/d3.png",
        description: "نال الدكتور خالد ناصر شهادة الماجستير في الجراحة العامة من جامعة عين شمس عام 1999، وأتمّ زمالة الجراحة بالمنظار من المركز الوطني للجراحة بباريس، ثم تدرّب على جراحة الأورام الهضمية في مستشفى MD أندرسون للسرطان في هيوستن. يمتلك خبرة سريرية تتجاوز 26 عامًا، ويُعدّ رائدًا في تطبيق جراحات البطن الطارئة والمعقدة بتقنية المنظار ثلاثي الأبعاد، وعمليات استئصال أورام القولون والمستقيم والبنكرياس. أجرى بنجاح ما يزيد على 5,200 عملية جراحية من بينها أكثر من 800 حالة طوارئ بالغة التعقيد. طوّر تقنية جراحية جديدة لاستئصال أورام البنكرياس بدون فتح واسع قُدِّمت في مؤتمر الجمعية الأمريكية للجراحين وحازت على جائزة الابتكار الجراحي. أشرف على تدريب أكثر من 200 جراح شاب، وأسّس مركزًا للمحاكاة الجراحية يُدرَّب فيه الأطباء على العمليات الدقيقة باستخدام نماذج افتراضية، وهو يشغل حاليًا منصب رئيس الجمعية العربية لجراحة المناظير."
    },
];

const Doctors = () => {
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

    const handleDoctorClick = (doctor: Doctor) => {
        setSelectedDoctor(doctor);
    };
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
                            <div key={d.id} onClick={() => handleDoctorClick(d)} className="flex flex-col gap-3! bg-primary/5 rounded-2xl shadow p-2! translate duration-300 hover:bg-linear-to-b hover:from-accent/90 hover:via-primary hover:to-primary group">
                                <div className="w-full bg-background rounded-2xl shadow overflow-hidden">
                                    <Image src={d.image} width={100} height={100} alt="image" className="w-full" />
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
            {selectedDoctor && (
                <div dir="rtl" onClick={(e)=> {if(e.target === e.currentTarget) setSelectedDoctor(null)}} className={` z-[9999] backdrop-blur-md flex bg-gray-500/70 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full`}>
                    <div className="relative p-4! max-sm:max-w-xs w-full max-w-md max-h-full bg-background rounded-lg shadow-md shadow-primary/50">
                        <span onClick={() => setSelectedDoctor(null)} className="absolute top-2! right-2! w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center cursor-pointer text-primary hover:bg-primary hover:text-background translate duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <div className="flex items-center justify-center flex-col gap-3 w-full p-2! overflow-auto">

                            <h1 className="text-xl text-main font-bold text-center ">معلومات عن الطبيب {selectedDoctor?.name}</h1>
                            <p className="text-muted text-[16px] text-center">{selectedDoctor?.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}


export default Doctors;