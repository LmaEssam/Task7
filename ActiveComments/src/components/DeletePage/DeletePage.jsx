import'./DeletePage.css'
function DeletePage({ onCancel, onConfirmDelete }){
    return(
        <div id='delete'>
            <h1>Delete comment</h1>
            <p id='deletephrase'>Are you sure you want to delete this comment? this will remove the comment and can't be undone</p>
            <div id='deletebtns'>
                <button id='cancel' onClick={onCancel} >no,cancel</button>
                <button id='yes' onClick={onConfirmDelete}>yes,delete</button>
            </div>
        </div>
    )
}
export default DeletePage