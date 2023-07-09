import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';



const CommitComponent = (props) => {
    const { token } = props;
    const [data, setData] = useState(null);
  
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post('http://localhost:8081/webpay/commit?token_ws=' + token , {
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
        name="token_ws" value={data} 
        />
       <input type="submit" value="Pagar"/> 
      </form>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
    );
  };

  CommitComponent.propTypes = {
    token: PropTypes.string.isRequired,
  };
  
  export default CommitComponent;