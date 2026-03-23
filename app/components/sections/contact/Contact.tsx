"use client"
import Image from "next/image";
import Container from "../../common/Container";
import Title from "../../common/Title";
import { useState } from "react";

import Button from "../../common/Button";
import { bookingAppointment, complaint, handleRequest } from "../../common/api"
import LoadingSpinner from "../../common/LoadingSpinner";
interface Doctor {
    id: number;
    name: string;
    specialty: string;
}

const doctors: Doctor[] = [
    { id: 1, name: "أحمد منصور", specialty: "طب القلب" },
    { id: 2, name: "سارة حسن", specialty: "طب الأطفال" },
    { id: 3, name: "زايد الفايد", specialty: "طب الأسنان" },
    { id: 4, name: "عمر خطاب", specialty: "جراحة العظام" },
    { id: 5, name: "ليلى محمود", specialty: "طب العيون" },
    { id: 6, name: "خالد ناصر", specialty: "جراحة عامة" },
];

interface BookingComplaintData {
    name: string;
    age: number | string;
    phone: string;
    doctor: string;
    appointmentDate: string;
    subject: string;
    complaint: string;
}

const Contact = () => {
    const [toggalModel, setToggalMode] = useState<boolean>(true)
    const today = new Date().toISOString().split('T')[0];
    const [bookingComplaintData, setBookingComplaintData] = useState<BookingComplaintData>({
        name: "",
        age: null!,
        phone: "",
        doctor: "",
        appointmentDate: today,
        subject: "",
        complaint: "",
    })
    const [loadingSpinnerState, setLoadingSpinnerState] = useState<boolean>(false)

    const toggleLoadingSpinner = () => {
        setLoadingSpinnerState(prev => !prev)
    }
    const handleSubmit = async (p: any) => {
        p.preventDefault();
        if (toggalModel) {
            toggleLoadingSpinner()
            const data = {

                name: bookingComplaintData.name,
                phone: bookingComplaintData.phone,
                doctor: bookingComplaintData.doctor,
                appointmentDate: bookingComplaintData.appointmentDate,
                age: bookingComplaintData.age
            }
            await handleRequest<BookingComplaintData>(bookingAppointment, data, "تم حجز موعدك بنجاح!")
            toggleLoadingSpinner()
        } else {
            toggleLoadingSpinner()
            const data = {
                name: bookingComplaintData.name,
                phone: bookingComplaintData.phone,
                subject: bookingComplaintData.subject,
                complaint: bookingComplaintData.complaint,
            }
            await handleRequest<BookingComplaintData>(complaint, data, "تم ارسال الشكوى شكرا جزيلا!")
            toggleLoadingSpinner()
        }
        setBookingComplaintData({
            name: "",
            age: "",
            phone: "",
            doctor: "",
            appointmentDate: today,
            subject: "",
            complaint: "",
        })
    }

    const handleChange = (e: any) => {

        setBookingComplaintData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <section id="booking" className=" relative">
            <Container className=" grid grid-cols-2 max-md:grid-cols-1">
                <div className="flex flex-col !gap-y-3">
                    <Title title="تواصل معنا" />
                    <h1 className="text-6xl leading-16">إحجر موعدك مع الطبيب</h1>
                    <p className="text-[16px] text-muted">
                        نحن هنا لنجعل تجربتك الصحية أكثر سلاسة ورقيًّا. احجز موعدك الآن بكل سهولة وبضغطة زر واحدة، واختر الوقت الذي يناسب جدولك المزدحم. وداعاً لعناء الانتظار الطويل في أروقة العيادات، واستمتع بتنظيم وقتك وضمان جودة الخدمة التي تستحقها في الموعد الذي تحدده بنفسك.
                    </p>
                    <div className="flex w-full items-center justify-center relative">
                        <Image unoptimized width={220} height={220} alt="dna" src={"/DNA (1).png"} className="max-sm:w-[160px] max-md:w-[200px] rotate-60" />
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -z-1 w-40 h-40 inline-flex rounded-full bg-primary/10  shadow-primary/10 shadow-[1px_1px_200px_200px] max-md:shadow-[1px_1px_100px_100px]"></span>

                    </div>
                </div>
                <div className="flex items-center justify-center w-full h-full p-4!">
                    <form className="w-full flex flex-col !gap-y-6 h-full bg-linear-to-b from-accent to-primary !px-5 !py-4 rounded-2xl" onSubmit={(p) => handleSubmit(p)}>
                        <div className="w-full flex items-center justify-center">
                            <div className="bg-background/60 rounded-full backdrop-blur-3xl px-3! py-2! flex gap-3!">
                                <div className={`${toggalModel && "bg-accent"} cursor-pointer rounded-full text-black px-3! py-1! translate duration-300`} onClick={() => setToggalMode(true)}>حجز موعد</div>
                                <div className={`${!toggalModel && "bg-accent"} cursor-pointer rounded-full text-black px-3! py-1! translate duration-300`} onClick={() => setToggalMode(false)}>ارسال شكوى</div>
                            </div>
                        </div>
                        <h1 className="text-5xl text-background">{toggalModel ? "احجز موعدك" : "ارسل شكوتك"}</h1>
                        <div className="flex flex-col !gap-1">
                            <label className="text-background">الاسم الثلاثي</label>
                            <input required className="rounded-xl outline-0 border border-background bg-slate-200/60 backdrop-blur-2xl p-3!" value={bookingComplaintData.name} placeholder="محمد علي حسن" name="name" onChange={handleChange} />
                        </div>

                        <div className="flex flex-col !gap-1">
                            <label className="text-background">رقم الهاتف</label>
                            <input required className="rounded-xl outline-0 border border-background bg-slate-200/60 backdrop-blur-2xl p-3!" value={bookingComplaintData.phone} placeholder="07000000000" type="tel" name="phone" onChange={handleChange} />
                        </div>
                        {toggalModel ? (<><div className="flex flex-col !gap-1">
                            <label className="text-background">طبيبك المناسب</label>
                            <select required className="rounded-xl outline-0 border border-background bg-slate-200/60 backdrop-blur-2xl p-3!" value={bookingComplaintData.doctor} name="doctor" onChange={handleChange}>
                                <option value="" disabled>اختر الطبيب المناسب...</option>

                                {doctors.map((doctor) => (
                                    <option key={doctor.id} value={doctor.name}>
                                        د. {doctor.name} ({doctor.specialty})
                                    </option>
                                ))}
                            </select>
                        </div>

                            <div className="flex flex-col !gap-1">
                                <label className="text-background">الموعد المناسب</label>
                                <input required className="rounded-xl outline-0 border border-background bg-slate-200/60 backdrop-blur-2xl p-3! w-full" value={bookingComplaintData.appointmentDate} type="date" name="appointmentDate" onChange={handleChange} />
                            </div>
                            <div className="flex flex-col !gap-1">
                                <label className="text-background">عمرك</label>
                                <input required className="rounded-xl outline-0 border border-background bg-slate-200/60 backdrop-blur-2xl p-3! w-full" value={bookingComplaintData.age} placeholder="مثل 29" name="age" onChange={handleChange} />


                            </div>
                        </>) :
                            <div className="flex flex-col !gap-4">
                                <div className="flex flex-col !gap-1">
                                    <label className="text-background">عنوان الشكوى</label>
                                    <input required className="rounded-xl outline-0 border border-background bg-slate-200/60 backdrop-blur-2xl p-3!" value={bookingComplaintData.subject} placeholder="اكتب عنوان الشكوى هنا" name="subject" onChange={handleChange} />
                                </div>
                                <div className="flex flex-col !gap-1">
                                    <label className="text-background">شكوتك</label>
                                    <textarea required rows={5} className="rounded-xl outline-0 border border-background bg-slate-200/60 backdrop-blur-2xl p-3!" value={bookingComplaintData.complaint} placeholder="اكتب تفاصيل الشكوى هنا" name="complaint" onChange={handleChange} />
                                </div>
                            </div>
                        }

                        <div className="flex items-center justify-center">
                            <button className={"!px-6 !py-2 shadow-md translate duration-300 bg-accent text-black hover:bg-[#f5c650] hover:shadow-lg  rounded-3xl text-lg flex !gap-2 items-center group cursor-pointer"} type="submit">{`ارسال ${toggalModel ? "الحجز" : "الشكوى"}`}</button>


                        </div>
                    </form>
                </div>
            </Container>
            <LoadingSpinner state={loadingSpinnerState} />
        </section>
    )
}


export default Contact;