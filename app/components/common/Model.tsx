"use client"
import { useEffect, useState } from "react"
import { handleRequest, updateMyAppointment } from "./api";
import LoadingSpinner from "./LoadingSpinner";

interface Data {
    code: string;
    name: string;
    appointmentDate: string;
    age: number;
    doctor: string;
    phone: string;
    status: string;
    _id: string;

}
interface ModelProps {
    isOpen: boolean;
    onClose: () => void;
    data: Data | null;
}
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


const Model = ({ isOpen, onClose, data }: ModelProps) => {

    const [bookingComplaintData, setBookingComplaintData] = useState<Data | null>(null)
    const [loadingSpinnerState, setLoadingSpinnerState] = useState<boolean>(false)
    const toggleLoadingSpinner = () => {
        setLoadingSpinnerState(prev => !prev)
    }
    useEffect(() => {
        if (data) {
            setBookingComplaintData(data)
        }
    }, [data])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setBookingComplaintData((prev) => prev ? ({
            ...prev,
            [name]: value
        }) : null)
    }

    if (!isOpen || !bookingComplaintData) return null;

    const handleSubmit = async (p: any) => {
        p.preventDefault();
        toggleLoadingSpinner()
        const event = await updateMyAppointment(bookingComplaintData)
        toggleLoadingSpinner()
        alert(event.message)
        window.location.reload()


    }

    return (

        <div dir="rtl" className={`${isOpen ? 'block' : 'hidden'} z-[9999] backdrop-blur-md flex bg-gray-500/70 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full`}>
            <div className="relative p-4! max-sm:max-w-xs w-full max-w-md max-h-full bg-background rounded-lg shadow-md shadow-primary/50 px-3! py-2!">

                <form onSubmit={handleSubmit} className="w-full flex flex-col !gap-y-6 h-full *:text-black !px-5 !py-4 rounded-2xl" >

                    <h1 className="text-4xl text-background">عدل موعدك</h1>
                    <div className="flex flex-col !gap-1">
                        <label >الاسم الثلاثي</label>
                        <input required className="rounded-xl outline-0 border border-background bg-slate-200/60 backdrop-blur-2xl p-3!" value={bookingComplaintData.name} placeholder="محمد علي حسن" name="name" onChange={handleChange} />
                    </div>

                    <div className="flex flex-col !gap-1">
                        <label >رقم الهاتف</label>
                        <input required className="rounded-xl outline-0 border border-background bg-slate-200/60 backdrop-blur-2xl p-3!" value={bookingComplaintData.phone} placeholder="07000000000" type="number" name="phone" onChange={handleChange} />
                    </div>
                    <div className="flex flex-col !gap-1">
                        <label >طبيبك المناسب</label>
                        <select required className="rounded-xl outline-0 border border-background bg-slate-200/60 backdrop-blur-2xl p-3!" value={bookingComplaintData.doctor} name="doctor" onChange={handleChange}>
                            <option value="" disabled>اختر الطبيب المناسب...</option>

                            {doctors.map((doctor) => (
                                <option key={doctor.id} value={doctor.name}>
                                    د. {doctor.name} ({doctor.specialty})
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex gap-2!">
                        <div className="flex flex-col !gap-1">
                            <label >الموعد المناسب</label>
                            <input required className="rounded-xl outline-0 border border-background bg-slate-200/60 backdrop-blur-2xl p-3! w-full" value={bookingComplaintData.appointmentDate} type="date" name="appointmentDate" onChange={handleChange} />
                        </div>
                        <div className="flex flex-col !gap-1">
                            <label >عمرك</label>
                            <input required className="rounded-xl outline-0 border border-background bg-slate-200/60 backdrop-blur-2xl p-3! w-full" value={bookingComplaintData.age} placeholder="مثل 29" name="age" onChange={handleChange} />
                        </div>

                    </div>


                    <div className=" grid grid-cols-2 gap-2! items-center justify-center">
                        <button className={"!px-6 !py-2 shadow-md text-center translate duration-300 bg-primary text-background hover:bg-primary/80 hover:shadow-lg  rounded-md text-lg !gap-2  group cursor-pointer"} type="submit">حفظ</button>

                        <button className={"!px-6 !py-2 shadow-md  translate duration-300 bg-accent text-black hover:bg-[#f5c650] hover:shadow-lg  rounded-md text-lg  !gap-2  group cursor-pointer"} type="button" onClick={onClose}>الغاء</button>


                    </div>
                </form>
            </div>

            <LoadingSpinner state={loadingSpinnerState} />
        </div>
    )
}



export default Model