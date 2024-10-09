import toast from "react-hot-toast"

export const toastError = (message: string)=>{
    toast(message, {
        position: "top-right",
        style: {
            "background": "red",
            "color": "white",
            "boxShadow": "0 5px 20px rgba(0,0,0,0.2)",
            "padding": "20px 10px",
            "minWidth": "200px"
        }
    })
}

export const toastSuccess = (message: string)=>{
    toast(message, {
        position: "top-right",
        style: {
            "background": "rgb(10,220, 10)",
            "color": "white",
            "boxShadow": "0 5px 20px rgba(0,0,0,0.2)",
            "padding": "20px 10px",
            "minWidth": "200px"
        }
    })
}

// import toast from "react-hot-toast"

// export const toastSuccess = (message: string)=>{
//     toast.success(message);
// }

// export const toastError = (message: string)=>{
//     toast.error(message)
// }

