import './CommentBody.css'
import replybtn from '../../assets/icon-reply.svg'
import CounterBtn from '../CounterBtn/CounterBtn'
import DeleteBtn from '../DeleteBtn/DeleteBtn';
import { useState } from 'react';
import CommentReply from '../CommentReply/CommentReply';
import juliu from '../../assets/image-juliusomo.png'
function CommentBody(props){
    const [showReply, setShowReply] = useState(false);

    const toggleReply = () => setShowReply(!showReply);
    return(
        <div className='comment'>
            
          <CounterBtn initialValue={props.counter}/>
      <div className='content'>
        <div className='header'>
            <div className='info'>
                <img className='avatar' src={props.commentimg} />
                <label className='name'>{props.personname}</label>
                <label className='time'>{props. sharedate}</label>
            </div>
            <div className='DeRbtn'>
            <button className='btn'  onClick={toggleReply}>
                <img className='reply'src={replybtn} />
                <label className='Rlabel'>Reply</label>
            </button>
            {props.showDeleteBtn && <DeleteBtn onDelete={props.onDelete} />}
            {props.personname === 'juliusomo' && <DeleteBtn onDelete={props.onDelete} />}
            </div>
        </div>
        <p>
                    <label className='mention'>{props.labelmention}</label>
                    {props.paragraph}
                </p>
        
                {showReply && <CommentReply 
                    addReply={(replyText) => {
                        props.addReply(props.Id, {
                            commentimg: juliu,
                            personname: 'juliusomo', 
                            sharedate: 'justnow',
                            paragraph: replyText
                        });
                        setShowReply(false);
                    }}
                />}
            </div>
        </div>
    );
}
export default CommentBody