import axios, { isAxiosError } from "axios"
const instance = axios.create({
   withCredentials: true,
   baseURL: "https://clinc-landing-backend.onrender.com/api"
})

interface appointmentData {
    name: string,
    phone: string,
    doctor: string,
    appointmentDate: string,
    age: number
    _id?: string;
}

interface complaintData {
    name: string,
    phone: string,
    subject: string,
    complaint: string
}export async function handleRequest<T>(
    requestFn: (data: any) => Promise<T>,
    data?: any,
    successMessage?: string
): Promise<T | null> {
    try {
        const res = await requestFn(data);
        if (successMessage) alert(successMessage);
        return res;

    } catch (error: unknown) {

        if (isAxiosError(error)) {
            const msg =
                error.response?.data?.errors?.[0]?.msg ||
                error.response?.data?.message ||
                "فشل الإرسال";
            alert(msg);

        } else if (error instanceof Error) {
            alert("حدث خطأ: " + error.message);

        } else {
            alert("حدث خطأ غير متوقع");
        }

        return null;
    }
}

export const bookingAppointment =async (data: appointmentData) => {
    try {
        const res = await instance.post('/appointments/add', data);
        return res.data;
    } catch (error) {
        console.error("Error booking appointment:", error);
        throw error;
    }
}

export const complaint =async (data: complaintData) => {
    try {
        const res = await instance.post('/complaints/add', data);
        return res.data;
    } catch (error) {
        console.error("Error submitting complaint:", error);
        throw error;
    }
}


export const getMyAppointments = async () => {
    try {
        const res = await instance.get('/appointments/my-appointments');
        return res.data;
    } catch (error) {
        console.error("Error fetching my appointments:", error);
        throw error;
    }
}


export const deleteMyAppointment = async (id: string) => {
    try {
        const res = await instance.delete(`/appointments/delete/${id}`);
        return res.data;
    } catch (error) {
        console.error("Error deleting appointment:", error);
        throw error;
    }
}


export const updateMyAppointment = async (data: appointmentData) => {
    try {
        const res = await instance.put(`/appointments/update/${data._id}`, data);
        return res.data;
    } catch (error) {
        console.error("Error updating appointment:", error);
        throw error;
    }
}