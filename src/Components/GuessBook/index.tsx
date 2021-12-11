import { IoIosChatbubbles } from "react-icons/io";

import './GuessBook.css';
import BookItem from './BookItem';

const guessBookItems = [
    {
        name: 'Raditya ❤️',
        comment: '😘❤️ Selamat menikah, selamat menjalani kehidupan pernikahan. ❤️😘 \n Semoga Tuhan selalu menjaga kalian dan anak-anak kelak. ❤️❤️'
    },
    {
        name: 'Pramudya 🥰',
        comment: '❤️❤️ Hari perayaan pernikahanmu hanya akan berlangsung sesaat, tapi semoga cintamu dan cintanya akan tetap tumbuh. ❤️❤️ \n Semoga jadi pasangan yang sempurna, Selamat menempuh hidup baru sahabatku.🥰😘'
    },
    {
        name: 'Ningrum',
        comment: 'Tetanggaku yang sudah jadi teman bermain dari kecil, selamat menikah! Semoga bahagia dan dilancarkan rezekinya selalu. ❤️❤️❤️ Jangan lupakan teman kecilmu ini, ya! ❤️❤️❤️'
    },
]

function GuessBook() {

    const renderBookItem = () => {
        return guessBookItems.map(({ name, comment }) => (
            <BookItem name={name} comment={comment} />
        ))
    }

    return (
        <div className="guess-book">
            <div className="book-header">
                <h4>Guestbook</h4>
                <p>Leave your wishes for us…</p>
                <button className="chat-button"><IoIosChatbubbles color="#FFF"/> Write your wish...</button>
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
