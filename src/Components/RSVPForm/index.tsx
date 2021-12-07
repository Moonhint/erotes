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
            <div className="name">[NAMA]</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register("attendence")}>
                    <option value="single">Hadir</option>
                    <option value="plus_one">Hadir +1</option>
                    <option value="no_going">Maaf, tidak bisa</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    );
}

export default RsvpForm;
