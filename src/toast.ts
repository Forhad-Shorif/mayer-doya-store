import { toast } from 'react-toastify';

const cleanStyle = {
    background: 'transparent',
    boxShadow: 'none',
    border: 'none',
    fontSize: '14px',
    fontWeight: '600' as const,
    padding: '0px',
};

export const showToast = {
    success: (msg: string) => toast.success(msg, { 
        position: "top-right", 
        autoClose: 1500,
        hideProgressBar: true, 
        closeButton: false, 
        style: { ...cleanStyle, color: '#16a34a' } 
    }),
    error: (msg: string) => toast.error(msg, { 
        position: "top-right", 
        autoClose: 2000,
        hideProgressBar: true, 
        closeButton: false, 
        style: { ...cleanStyle, color: '#dc2626' } 
    })
};