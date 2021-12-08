import './RsvpForm.css';
import '../../api';
import { useForm } from "react-hook-form";

function RsvpForm() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data:any) => {
        alert(JSON.stringify(data));
    }
    return (
        <div className="rsvp-form">
            <h4>RSVP</h4>
            <p>Kami tidak sabar menunggu hari pernikahan kami bersama Bapak/Ibu/Saudara/i, mohon konfirmasi kehadiran Bapak/Ibu/Saudara/i. <br/> Terima kasih.</p>
            <div className="name">Muhammad Yunita Ng</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-container">
                    <div className="selectdiv ">
                        <label>
                            <select {...register("attendence")}>
                                <option selected value=""> Apakah kamu bisa hadir? </option>
                                <option value="can">Bisa hadir</option>
                                <option value="cannot">Maaf, tidak bisa</option>
                            </select>
                        </label>
                    </div>
                    <button type="submit">Kirim</button>
                </div>
            </form>
        </div>
    );
}

export default RsvpForm;
