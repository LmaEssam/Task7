import './DeleteBtn.css'
import Delete from '../../assets/icon-delete.svg'
import { useState } from 'react';
import DeletePage from '../DeletePage/DeletePage';
function DeleteBtn({ onDelete }){
    const [showDeletePage, setShowDeletePage] = useState(false);
    function handleclick(){
        setShowDeletePage(true)
    }
    const handleCancel = () => {
        setShowDeletePage(false);
      }
    
      const handleConfirmDelete = () => {
        onDelete()
        setShowDeletePage(false)
      }
      return (
        <>
          <button className='Debtn' onClick={handleclick}>
            <img src={Delete} />
            Delete
          </button>
          {showDeletePage && (
                <div id="delete-overlay">
                    <DeletePage onCancel={handleCancel} onConfirmDelete={handleConfirmDelete} />
                </div>
            )}
        </>
      )
}
export default DeleteBtn