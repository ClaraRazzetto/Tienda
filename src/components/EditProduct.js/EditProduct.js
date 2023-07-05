import { useState, useEffect, useCallback } from 'react';
import { db } from '../../firebase/config';

const EditProduct = ({ id }) => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productSize, setProductSize] = useState('');
  // Otros campos necesarios para editar el producto

  const fetchProductData = useCallback(async () => {
    try {
      const docRef = db.collection('Productos').doc(id);
      const docSnapshot = await docRef.get();
      if (docSnapshot.exists()) {
        const productData = docSnapshot.data();
        setProductName(productData.name);
        setProductCategory(productData.category);
        setProductPrice(productData.price);
        setProductSize(productData.size);
        // Actualizar otros estados basados en los campos del producto
      } else {
        console.log('No se encontró el producto con el ID proporcionado');
      }
    } catch (error) {
      console.log('Error al obtener los datos del producto:', error);
    }
  }, [id]);

  const updateProduct = async () => {
    try {
      const docRef = db.collection('Productos').doc(id);
      await docRef.update({
        name: productName,
        category: productCategory,
        price: productPrice,
        size: productSize,
        // Actualizar otros campos del producto basados en los estados correspondientes
      });
      console.log('Producto actualizado exitosamente');
    } catch (error) {
      console.log('Error al actualizar el producto:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProduct();
  };

  useEffect(() => {
    fetchProductData();
  }, [fetchProductData]);

  return (
    <div>
      <h2>Editar Producto</h2>
      <form onSubmit={handleSubmit}>
        {/* Renderizar los campos de edición según tus necesidades */}
        <label>Nombre</label>
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        {/* Renderizar los demás campos de edición */}
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
};

export default EditProduct;
