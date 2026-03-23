"use client"
import { useState } from "react";
import Model from "./Model";
import { deleteMyAppointment } from "./api";

interface Data {
    code: string;
    name: string;
    appointmentDate: string;
    age: number;
    doctor: string;
    phone: string;
    status: string;
    _id: string
}

const Card = ({ data, onOpen, toggleLoadingSpinner }: { data: Data, onOpen: (item: Data) => void, toggleLoadingSpinner: () => void }) => {
    const { code, name, appointmentDate, age, doctor, phone, status } = data;
    const [openMode, setOpenModel] = useState<boolean>(false)
    const GetTextImage = (namge: string) => {
        const names = namge.split(" ");
        if (names.length === 1) {
            return names[0][0]
        } else {
            return names[0][0] + names[1][0]
        }
    }
    const textForImage = GetTextImage(name);

    const OpenModel = () => {
        setOpenModel(true)
    }

    const handleDelete = async () => {
        if(confirm("هل تريد حذف الحجز؟")){
            toggleLoadingSpinner()
            const event = await deleteMyAppointment(data._id)
            toggleLoadingSpinner()
            alert(event.message)
            window.location.reload()
        }
    }


    return (

        <div dir="rtl" className="px-3! py-3! flex flex-col gap-3! relative w-full bg-background rounded-lg shadow-md shadow-primary/50 border border-gray-100">
    <div className="w-full flex justify-between items-start">
        <div className="flex gap-3!">
            <div className="flex items-center justify-center shrink-0">
                <span className="text-lg font-bold bg-primary text-white rounded-full w-10 h-10 max-sm:w-8 max-sm:h-8 max-sm:text-sm flex items-center justify-center">
                    {textForImage}
                </span>
            </div>
            <div className="flex flex-col gap-1!">
                <div className="flex flex-col gap-1">
                    <span className="text-lg font-bold max-sm:text-base text-gray-800 hover:text-primary transition-colors duration-300 cursor-default line-clamp-1">
                        {name}
                    </span>

                    <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[12px] uppercase font-bold text-primary/70">رقم الحجز:</span>
                        <span className="px-2.5! py-0.5! rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-mono font-semibold tracking-wider shadow-sm">
                            #{code}
                        </span>
                    </div>
                </div>
            </div>
        </div>

        {/* التاريخ - تم تحويله ليكون مرناً داخل الهيدر */}
        <div className="shrink-0 transition-transform hover:scale-105">
            <span className="px-2! py-1! rounded-full bg-primary/10 backdrop-blur-md border border-primary/60 text-primary text-[10px] font-extrabold shadow-sm flex items-center justify-center gap-1!">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                {appointmentDate}
            </span>
        </div>
    </div>

    <div className="flex flex-col gap-3 py-2">
        {/* رقم الهاتف */}
        <div className="flex items-center gap-2 text-gray-600">
            <div className="p-1.5 bg-primary/10 rounded-full text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </div>
            <span className="text-sm font-medium tracking-wide">{phone}</span>
        </div>

        {/* اسم الدكتور والعمر في صف واحد لتقليل الطول */}
        <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2 text-gray-600">
                <div className="p-1.5 bg-primary/10 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </div>
                <span className="text-xs">دكتور: <span className="font-semibold text-gray-800">{doctor}</span></span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
                <div className="p-1.5 bg-primary/10 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </div>
                <span className="text-xs">العمر: <span className="font-semibold text-gray-800">{age} سنة</span></span>
            </div>
        </div>
    </div>

    <div className="w-full h-px bg-primary/20"></div>

    <div className="grid grid-cols-2 gap-3 mt-auto">
        <button onClick={() => onOpen(data)} className="flex items-center justify-center gap-2! py-2! rounded-xl bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 active:scale-95 transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
            <span>تعديل</span>
        </button>

        <button onClick={handleDelete} className="flex items-center justify-center gap-2! py-2! rounded-xl bg-white border border-red-100 text-red-500 text-sm font-bold hover:bg-red-50 active:scale-95 transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
            <span>حذف</span>
        </button>
    </div>
</div>
    )
}



export default Card