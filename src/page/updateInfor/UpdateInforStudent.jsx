import { useForm } from "react-hook-form";

export default function UpdateInforStudent() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (d) => {

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="main">
                <div className="loginPage">
                </div>
            </div>
        </form>
    )
}