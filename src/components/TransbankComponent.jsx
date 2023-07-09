import { useEffect, useState } from 'react';
import axios from 'axios';

const TransbankComponent = () => {
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8081/webpay/crearTransaccion', {
        });
        setData(response.data);
      } catch (error) {
        console.error('Error al realizar la llamada a la API de Transbank:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
    {data ? (
      <form action={data.url}method="POST">
      <input
      name="token_ws" value={data.token} 
      />
     <input type="submit" value="Pagar"/> 
    </form>
    ) : (
      <p>Cargando datos...</p>
    )}
  </div>
  );
};

export default TransbankComponent;