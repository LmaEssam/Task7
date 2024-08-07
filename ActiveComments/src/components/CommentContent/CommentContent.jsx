import './CommentContent.css'
import amy from '../../assets/image-amyrobson.png'
import max from '../../assets/image-maxblagun.webp'
import ramses from '../../assets/image-ramsesmiron.png'
import juliu from '../../assets/image-juliusomo.png'
import CommentBody from '../CommentBody/CommentBody'
import replybtn from '../../assets/icon-reply.svg'
import Demo from '../Demo/Demo'
import { useState } from 'react'

function CommentContent(){
    const [objects,setobjects]=useState([
        {
            Id:1,
            commentimg:amy,
            personname:'amyrobson',
            sharedate:'1 month ago',
            paragraph:"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
            counter:12,
            comments:[],
        },
        {
            Id:2,
            commentimg:juliu,
            personname:'juliusomo',
            sharedate:'1 minute ago',
            paragraph:"Thank you for the feedback! I appreciate your thoughts on the drag feature. I'll definitely look into improving it further. It's encouraging to hear that you find the design effective across different screen sizes.",
            labelmention:'@amyrobson',
            counter:1,
            comments:[],
        },
        {
            Id:3,
            commentimg:max,
            personname:'maxblagun',
            sharedate:'2 weeks ago',
            paragraph:"Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
            counter:5,
            comments:[],
        },
        {
            Id:4,
            commentimg:ramses,
            personname:'ramsesmiron',
            sharedate:'1 week ago',
            paragraph: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            labelmention:'@maxblagun',
            counter:4,
            comments:[],
        },
        {
            Id:5,
            commentimg:max,
            personname:'maxblagun',
            sharedate:'5 minute ago',
            paragraph:"Absolutely! Focus on mastering HTML, CSS, and JavaScript first. These are the building blocks of web development and will pave the way for learning React more effectively later on.",
            labelmention:'@ramsesmiron',
            counter:3,
            comments:[],
        },
        {
            Id:6,
            commentimg:juliu,
            personname:'juliusomo',
            sharedate:'2 days ago',
            paragraph: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            labelmention:'@ramsesmiron',
            counter:2,
            comments:[],
        },
    ])
    const addpost=(post)=>{
        const newpost={paragraph:post,Id:objects.length+1, counter:1,commentimg:juliu, personname:'juliusomo ',sharedate:'Just now', fromDemo: true,comments:[]}
        const newarray=[...objects ,newpost]
        setobjects(newarray)
    }
    const handleDelete = (postId) => {
      const updatedObjects = objects.filter((obj) => obj.Id !== postId);
      setobjects(updatedObjects);
  }
  const addReplyToComment = (commentId, reply) => {
    console.log('Adding reply:', { commentId, reply });
    const newObjects = objects.map((item) => {
        if (item.Id === commentId) {
            return { ...item, comments: [...item.comments, reply] };
        }
        return item;
    });
    setobjects(newObjects);
};

  return (
    <div id='commentarray'>
      {objects.map((item) => (
        <div key={item.Id}>
          <CommentBody
            commentimg={item.commentimg}
            personname={item.personname}
            sharedate={item.sharedate}
            paragraph={item.paragraph}
            labelmention={item.labelmention}
            counter={item.counter}
            showDeleteBtn={item.fromDemo}
            onDelete={() => handleDelete(item.Id)}
            addReply={(reply) => addReplyToComment(item.Id, reply)}
            replybtn={replybtn}
            comments={item.comments}
          />
        </div>
      ))}
      <Demo newpost={addpost} />
    </div>
  )
}
export default CommentContent