import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";

const DeleteProduct = ({ id }) => {

    const deleteProduct = async () => {

        await deleteDoc(doc(db, 'Productos', id));
    
    };

  return (
    <div>
        <button onClick={deleteProduct}>Eliminar</button>
    </div>
  )
}

export default DeleteProduct