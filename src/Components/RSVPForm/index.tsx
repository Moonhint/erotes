import { useState, useEffect } from 'react';
import './RsvpForm.css';
import '../../api';
import { useForm } from "react-hook-form";
import { makeRsvp, findPrevRsvpByUserId } from "../../api";

function RsvpForm({ currUser, setCurrUser }: {currUser:any, setCurrUser: any}) {
    const [ showSelectAttendenceWith, setShowSelectAttendenceWith ] = useState(false);
    const [ prevRsvpData, setPrevRsvpData ] = useState<any>();
    const [ sendingRsvp, setSendingRsvp ] = useState(false);
    const { register, handleSubmit } = useForm();

    useEffect(()=>{
        const findPrevRsvp = async () => {
            try {
                const { data } = await findPrevRsvpByUserId(currUser.id);
                setPrevRsvpData(data);
            }catch(err){
                console.error(err);
            }
        }
        if (currUser.alreadyRsvp) findPrevRsvp();
    // eslint-disable-next-line
    }, [currUser.alreadyRsvp]);

    const onSubmit = async (data:any) => {

        if (sendingRsvp){
            alert('please wait, your rsvp is almost arrive to us');
        }

        const adjustedData = { ...data, erotesUserId: currUser.id };      
        if (adjustedData.attendence === 'cannot'){
            adjustedData.attendenceWith = "";
        }  

        if (!adjustedData.erotesUserId) {
            console.error('attempt to send rsvp without id');
            alert('Please make sure the url is correct, we have not yet recognize your id');
            return true;
        }

        if (adjustedData.attendence === 'can'){
            if (!adjustedData.attendenceWith){
                console.error('attempt to rsvp partially');
                alert('please fill all the required form');
                return true;
            }
        }

        try {
            setSendingRsvp(true);
            await makeRsvp(adjustedData);
            setPrevRsvpData(data);
            setCurrUser({ ...currUser, alreadyRsvp: true });
        }catch(err){
            console.error(err);
        }finally{
            setSendingRsvp(false);
        }
    }

    const handleAttendenceChange = (e:any) => {
        try {
            const changedValue = e.target.value;
            const canNotShow = changedValue === 'cannot';
            setShowSelectAttendenceWith(!canNotShow);
        }catch(err){
            console.log(err);
        }
    };

    const renderAttendenceWithSelect = () => {
        if (showSelectAttendenceWith){
            return  (
                <div className="selectdiv second-select-div">
                    <label>
                        <select defaultValue="" {...register("attendenceWith")}>
                            <option disabled value=""> With a partner? </option>
                            <option value="alone">No, just me</option>
                            <option value="partner">Yes, with a partner</option>
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
                                    <option disabled value=""> Can you attend? </option>
                                    <option value="can">Can attend</option>
                                    <option value="cannot">Sorry can not</option>
                                </select>
                            </label>
                        </div>
                        { renderAttendenceWithSelect() }
                        <button type="submit">Send</button>
                    </div>
                </form>
            )
        }else{
            if (prevRsvpData){
                if (prevRsvpData.attendence === 'can'){
                    return (
                        <p className="form-container-result">Thank you for filling in to be present at the RSVP, see you at our reception.</p>
                    )
                }else{
                    return (
                        <p className="form-container-result">Thank you for filling in unable to attend the RSVP.</p>
                    )
                }
            }
        }
    }

    const renderDescription = () => {
        if (!currUser.alreadyRsvp) {
            return (<p>We can't wait for our wedding day with you, please confirm your presence. <br/> Thank You.</p>)
        }else{
            return null;
        }
    }

    return (
        <div className="rsvp-form">
            <div className="wave-top-rsvp"/>
            <h4>RSVP</h4>
            { renderDescription() }
            <div className="name">{currUser.name}</div>
            { renderDemandOfRSVP() }
            <div className="bottom-image-rsvp"/>
        </div>
    );
}

export default RsvpForm;
