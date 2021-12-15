import { useState, useEffect } from 'react';
import './RsvpForm.css';
import '../../api';
import { useForm } from "react-hook-form";
import { makeRsvp, findPrevRsvpByUserId } from "../../api";

function RsvpForm({ currUser, setCurrUser }: {currUser:any, setCurrUser: any}) {
    const [ showSelectAttendenceWith, setShowSelectAttendenceWith ] = useState(false);
    const [ prevRsvpData, setPrevRsvpData ] = useState<any>();
    const { register, handleSubmit } = useForm();

    useEffect(()=>{
        const findPrevRsvp = async () => {
            try {
                const { data } = await findPrevRsvpByUserId(currUser.id);
                setPrevRsvpData(data);
            }catch(err){
                console.log(err);
            }
        }

        if (currUser.alreadyRsvp) findPrevRsvp();
    // eslint-disable-next-line
    }, [currUser.alreadyRsvp]);

    const onSubmit = async (data:any) => {
        const adjustedData = { ...data, erotesUserId: currUser.id };      
        if (adjustedData.attendence === 'cannot'){
            adjustedData.attendenceWith = "";
        }  

        try {
            await makeRsvp(adjustedData);
            // setPrevRsvpData(data);
            setCurrUser({ ...currUser, alreadyRsvp: true });
        }catch(err){
            console.log(err);
        }
    }

    const handleAttendenceChange = (e:any) => {
        const changedValue = e.target.value;
        const canNotShow = changedValue === 'cannot';
        setShowSelectAttendenceWith(!canNotShow);
    };

    const renderAttendenceWithSelect = () => {
        if (showSelectAttendenceWith){
            return  (
                <div className="selectdiv second-select-div">
                    <label>
                        <select defaultValue="" {...register("attendenceWith")}>
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

    const renderDemandOfRSVP = () => {
        if (!currUser.alreadyRsvp) {
            return (
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
                        { renderAttendenceWithSelect() }
                        <button type="submit">Kirim</button>
                    </div>
                </form>
            )
        }else{
            if (prevRsvpData){
                if (prevRsvpData.attendence === 'can'){
                    return (
                        <p className="form-container-result">Terimakasih sudah mengisi bisa hadir di RSVP, sampai jumpa di acara resepsi kami.</p>
                    )
                }else{
                    return (
                        <p className="form-container-result">Terimakasih sudah mengisi tidak bisa hadir di RSVP.</p>
                    )
                }
            }
        }
    }

    const renderDescription = () => {
        if (!currUser.alreadyRsvp) {
            return (<p>Kami tidak sabar menunggu hari pernikahan kami bersama Bapak/Ibu/Saudara/i, mohon konfirmasi kehadiran Bapak/Ibu/Saudara/i. <br/> Terima kasih.</p>)
        }else{
            return null;
        }
    }

    return (
        <div className="rsvp-form">
            <h4>RSVP</h4>
            { renderDescription() }
            <div className="name">{currUser.name}</div>
            { renderDemandOfRSVP() }

        </div>
    );
}

export default RsvpForm;
