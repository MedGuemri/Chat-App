import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/athContext"


const useSingup = () => {
<<<<<<< HEAD
    const [loading, setLoading] = useState(false)

    const { setAuthUser } = useAuthContext()

    const singup = async ({ fullName, username, password, confirmPassword, gender }) => {

        const success = handelInputsError({ fullName, username, password, confirmPassword, gender })
        if (!success) return;
        setLoading(true);

        try {
            const res = await fetch("/api/auth/singup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
            });

            const data = await res.json()

            localStorage.setItem("chat-user", JSON.stringify(data))

            setAuthUser(data)

            if (data.error) {
                throw new Error(data.error)
            }


        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return { loading, singup }
=======
 const [loading,setLoading]=useState(false)

 const {setAuthUser}=useAuthContext()

 const singup=async ( {fullName,username,password,confirmPassword,gender})=>{

    const success =  handelInputsError({fullName,username,password,confirmPassword,gender})
    if(!success)return;
     setLoading(true);

    try {
        const res = await fetch("/api/auth/singup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
        });

        const data= await res.json()

        localStorage.setItem("chat-user",JSON.stringify(data))

        setAuthUser(data)

        if(data.error){
            throw new Error(data.error)
        }


    } catch (error) {
        toast.error(error.message)
    }finally {
        setLoading(false)
    }
 }
 return {loading,singup}
>>>>>>> accb234e042febf56f76af8ff43f458e9287f58f
}

export default useSingup

<<<<<<< HEAD
function handelInputsError({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
=======
function handelInputsError({fullName,username,password,confirmPassword,gender}){
    if(!fullName || !username|| !password|| !confirmPassword|| !gender){
>>>>>>> accb234e042febf56f76af8ff43f458e9287f58f
        toast.error("Please fill in all fields")
        return false
    }


    if (password !== confirmPassword) {
<<<<<<< HEAD
        toast.error("Passwords do not match");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
    }
=======
		toast.error("Passwords do not match");
		return false;
	}

    if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}
>>>>>>> accb234e042febf56f76af8ff43f458e9287f58f
    return true;
}