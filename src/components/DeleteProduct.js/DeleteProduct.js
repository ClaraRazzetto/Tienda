import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";

const DeleteProduct = ({ id }) => {
  const deleteProduct = async () => {
    try {
      await deleteDoc(doc(db, "Productos", id));
      console.log("Producto eliminado con éxito");
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  return (
    <div>
      <button onClick={deleteProduct}>Eliminar</button>
    </div>
  );
};

export default DeleteProduct;
