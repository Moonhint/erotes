import { useState } from 'react';
import './RsvpForm.css';
import '../../api';
import { useForm } from "react-hook-form";

function RsvpForm() {
    const [ showSelectHowMany, setShowSelectHowMany ] = useState(false);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data:any) => {
        const adjustedData = { ...data };      
        if (adjustedData.attendence === 'cannot'){
            adjustedData.howMany = "";
        }  
        alert(JSON.stringify(adjustedData));
    }

    const handleAttendenceChange = (e:any) => {
        const changedValue = e.target.value;
        const canNotShow = changedValue === 'cannot';
        setShowSelectHowMany(!canNotShow);
    };

    const renderHowManySelect = () => {
        if (showSelectHowMany){
            return  (
                <div className="selectdiv second-select-div">
                    <label>
                        <select defaultValue="" {...register("howMany")}>
                            <option disabled value=""> Dengan pasangan? </option>
                            <option value="alone">Tidak, saya sendiri</option>
                            <option value="partner">Ya, dengan pasangan</option>
                        </select>
                    </label>
                </div>
            )
        }else {
            return null;
        }
    }

    return (
        <div className="rsvp-form">
            <h4>RSVP</h4>
            <p>Kami tidak sabar menunggu hari pernikahan kami bersama Bapak/Ibu/Saudara/i, mohon konfirmasi kehadiran Bapak/Ibu/Saudara/i. <br/> Terima kasih.</p>
            <div className="name">Muhammad Yunita Ng</div>
            <form onSubmit={handleSubmit(onSubmit)} onChange={handleAttendenceChange}>
                <div className="form-container">
                    <div className="selectdiv">
                        <label>
                            <select defaultValue="" {...register("attendence")}>
                                <option disabled value=""> Apakah kamu bisa hadir? </option>
                                <option value="can">Bisa hadir</option>
                                <option value="cannot">Maaf, tidak bisa</option>
                            </select>
                        </label>
                    </div>
                    { renderHowManySelect() }
                    <button type="submit">Kirim</button>
                </div>
            </form>
        </div>
    );
}

export default RsvpForm;
