import './CommentReply.css'
import juliu from '../../assets/image-juliusomo.png'
import { useState } from 'react';
function CommentReply({addReply}){
    const [replyText, setReplyText] = useState('');
    const handleReplyChange=( event)=>{
        setReplyText(event.target.value)
    }

    const sendReply = () => {
        if (replyText.trim()) {
            addReply(replyText);  
            setReplyText('');
        }
    };
    return (
        <div className='replypage'>
            
            <div className='Replycomment'>
                <img className='img' src={juliu} />
                <input value={replyText} onChange={handleReplyChange} className='textarea'></input>
                <button className='replybutton' onClick={sendReply}>Reply</button>
            </div>
        </div>
    );
}
export default CommentReply