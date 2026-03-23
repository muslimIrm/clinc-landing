"use client"
import { useEffect, useState } from "react"
import Card from "../components/common/Card"
import Model from "../components/common/Model"
import Container from "../components/common/Container";
import Header from "../components/common/Header";
import { getMyAppointments, handleRequest } from "../components/common/api";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { FaRegCalendarXmark } from "react-icons/fa6";

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

const MyAp = () => {
    const [openModel, setOpenModel] = useState<boolean>(false)
    const [dataCard, setDataCard] = useState<Data | null>(null)
    const [data, setData] = useState<Data[]>([])
    const [loadingSpinnerState, setLoadingSpinnerState] = useState<boolean>(false)
    useEffect(() => {
        setLoadingSpinnerState(false)
        const fetchData = async () => {
            setLoadingSpinnerState(true)
            const result = await handleRequest(getMyAppointments, null);
            setLoadingSpinnerState(false)
            setData(result.data ? result.data : []);
        };
        fetchData();
    }, [])
    const openModelHandler = (data: Data) => {
        setDataCard(data)
        setOpenModel(true)
    }

    // دالة الإغلاق: تعيد الحالة للوضع الافتراضي
    const closeModelHandler = () => {
        setOpenModel(false)
        setDataCard(null)
    }

    useEffect(()=>{console.log(data)}, [data])
    const toggleLoadingSpinner = () => {
        setLoadingSpinnerState(prev => !prev)
    }
    return (

        <div dir="rtl" className="w-screen flex h-screen">
            <Header isHome={false} />
            <Container>

                <div className="flex flex-col gap-3! w-full py-10!">
                    <div className="flex flex-col gap-2! mb-8! rounded-2xl">
                        <h1 className="text-3xl font-bold text-gray-800 relative">
                            مواعيدك المحجوزة
                            <span className="block h-1 w-12 bg-primary rounded-full mt-1! ml-auto!"></span>
                        </h1>
                        <p className="text-gray-500 text-sm">يمكنك إدارة وتعديل مواعيدك الطبية من هنا</p>
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                        {
                            data.length > 0 &&
                                data.map((item, index) => (
                                    <Card key={index} toggleLoadingSpinner={toggleLoadingSpinner} data={{...item, appointmentDate : item.appointmentDate.split("T")[0]}} onOpen={openModelHandler} />
                                ))
                        }
                    </div>
                    {
                        data.length === 0 && loadingSpinnerState === false &&
                        <div className="flex flex-col items-center justify-center gap-4! mt-10!">
                            <FaRegCalendarXmark className="w-16 h-16 text-muted" />
                            <h1 className="text-lg font-medium text-muted">لا توجد مواعيد محجوزة حالياً</h1>
                        </div>

                    }

                </div>
            </Container>


            <span className="fixed top-0 right-0 -z-1 w-40 h-40 inline-flex rounded-full bg-primary/25  shadow-primary/25 shadow-[0_0_100px_200px] max-md:shadow-[0_0_100px_100px] max-sm:shadow-[0_0_120px_120px] max-sm:w-10 max-sm:h-10"></span>
            <span className="fixed top-0 left-0 -z-1 w-40 h-40 inline-flex rounded-full bg-primary/25  shadow-primary/25 shadow-[0_0_100px_200px] max-md:shadow-[0_0_100px_100px] max-sm:shadow-[0_0_120px_120px] max-sm:w-10 max-sm:h-10"></span>
            <span className="fixed bottom-0 left-1/2 -z-1 w-40 h-40 inline-flex rounded-full bg-primary/25  shadow-primary/25 shadow-[0_0_100px_200px] max-md:shadow-[0_0_100px_100px] max-sm:shadow-[0_0_120px_120px] max-sm:w-10 max-sm:h-10"></span>

            <Model isOpen={openModel} onClose={closeModelHandler} data={dataCard} />
            
            <LoadingSpinner state={loadingSpinnerState}/>
        </div>
    )
}



export default MyAp