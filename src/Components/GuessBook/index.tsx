import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoIosChatbubbles } from "react-icons/io";
import { makeAWish, getAllComments } from '../../api';

import './GuessBook.css';
import BookItem from './BookItem';

const randomEmot = ['😘', '❤️', '🥰', '🥳'];

function GuessBook({ currUser }: {currUser: any}) {

    const [ books, setBooks ] = useState<any>([]);
    
    const [ showInputForm, setShowInputForm ] = useState(false);
    const renderBookItem = () => {
        if (books.length > 0){
            return books.map(({ id, ErotesUser, wish }: any) => (
                <BookItem key={id} name={`${ErotesUser.name} ${randomEmot[Math.floor(Math.random() * 4)]}`} comment={wish} />
            ))
        }else{
            return <div className="no-wished">-</div>
        }
    }

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data:any) => {
        try{
            const result = await makeAWish({ wish: data.wish, erotesUserId: currUser.id });
            const newComment = {
                ...result.data,
                ErotesUser: {
                    name: `${currUser.name} ${randomEmot[Math.floor(Math.random() * 4)]}`,
                }
            }
            setBooks([ newComment, ...books]);
        }catch(err){
            console.log(err);
        }
        setShowInputForm(false);
    }

    const handleToggleInputter = () => {
        setShowInputForm(true);
    }

    const renderInputter = () => {

        if (currUser.alreadyComment){
            return null;
        }

        if (showInputForm){
            return (
                <div className="guessbook-inputer">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea rows={4} cols={35} {...register("wish")}/>
                        <button>Send</button>
                    </form>
                </div>
            );
        }else{
            return (
                <button onClick={handleToggleInputter} className="chat-button"><IoIosChatbubbles color="#FFF"/> Write your wish...</button>
            );
        }
    }

    useEffect(()=>{
        const getAllGuestBookData = async () => {
            try {
                const { data } = await getAllComments();
                setBooks(data.data);
            }catch(err){
                console.log(err);
            }
        }

        getAllGuestBookData();
    // eslint-disable-next-line
    }, []);

    const renderDescription = () => {
        if (currUser.alreadyComment){
            return (<p>Thank you for the prayers…</p>)
        }else{
            return (<p>Leave your wishes for us…</p>);
        }
    };

    return (
        <div className="guess-book">
            <div className="book-header">
                <h4>Guestbook</h4>
                {renderDescription()}
                
                { renderInputter() }
                <div className="divider"/>
            </div> 
            <div className="book-item-container">
                { renderBookItem() }
            </div>
            <div className="thank-you-note">
                <h4>Thank You</h4>
                <h1>Antoni & Sinthia</h1>
            </div>
            <div className="book-footer"/>
        </div>
    );
}

export default GuessBook;
