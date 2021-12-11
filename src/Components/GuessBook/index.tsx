import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosChatbubbles } from "react-icons/io";

import './GuessBook.css';
import BookItem from './BookItem';

const guessBookItems = [
    {
        id: 1,
        name: 'Raditya ❤️',
        comment: '😘❤️ Selamat menikah, selamat menjalani kehidupan pernikahan. ❤️😘 \n Semoga Tuhan selalu menjaga kalian dan anak-anak kelak. ❤️❤️'
    },
    {
        id: 2,
        name: 'Pramudya 🥰',
        comment: '❤️❤️ Hari perayaan pernikahanmu hanya akan berlangsung sesaat, tapi semoga cintamu dan cintanya akan tetap tumbuh. ❤️❤️ \n Semoga jadi pasangan yang sempurna, Selamat menempuh hidup baru sahabatku.🥰😘'
    },
    {
        id: 3,
        name: 'Ningrum',
        comment: 'Tetanggaku yang sudah jadi teman bermain dari kecil, selamat menikah! Semoga bahagia dan dilancarkan rezekinya selalu. ❤️❤️❤️ Jangan lupakan teman kecilmu ini, ya! ❤️❤️❤️'
    },
]

function GuessBook() {

    const [ books, setBooks ] = useState(guessBookItems);

    const [ showInputForm, setShowInputForm ] = useState(false);
    const renderBookItem = () => {
        return books.map(({ id, name, comment }) => (
            <BookItem key={id} name={name} comment={comment} />
        ))
    }

    const { register, handleSubmit } = useForm();

    const onSubmit = (data:any) => {
        const newComment = {
            id: books.length,
            name: 'Muhammad Yunita Ng',
            comment: data.comment,
        }
        setBooks([ newComment, ...books]);
        setShowInputForm(false);
    }

    const handleToggleInputter = () => {
        setShowInputForm(true);
    }

    const renderInputter = () => {
        if (showInputForm){
            return (
                <div className="guessbook-inputer">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea rows={4} cols={35} {...register("comment")}/>
                        <button>Kirim</button>
                    </form>
                </div>
            );
        }else{
            return (
                <button onClick={handleToggleInputter} className="chat-button"><IoIosChatbubbles color="#FFF"/> Write your wish...</button>
            );
        }
    }

    return (
        <div className="guess-book">
            <div className="book-header">
                <h4>Guestbook</h4>
                <p>Leave your wishes for us…</p>
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
