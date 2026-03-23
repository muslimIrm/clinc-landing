import axios from "axios"
const instance = axios.create({
   withCredentials: true,
   baseURL: "http://localhost:5000/api"
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
}

export async function handleRequest<T>(
    requestFn: (data: any) => Promise<T>,
    data: any,                            
    successMessage?: string               
): Promise<T | null> {
    try {
        const res = await requestFn(data);
        console
        if (successMessage) alert(successMessage);
        return res;
    } catch (error: any) {
        if (error.response) {
            console.error("Server error:", error.response.data.errors[0]?.msg);
            alert(error.response.data.errors[0]?.msg || "فشل الإرسال");
        } else {
            console.error("Unknown error:", error.message);
            alert("فشل الإرسال: " + error.message);
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