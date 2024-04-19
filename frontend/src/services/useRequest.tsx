import axios from 'axios';
import { useState, useEffect } from 'react';

const baseUrl = "http://localhost:3000/data";

const  useRequest = () => {
  const [ data, setData ] = useState(null);
  const [ error, setError ] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get<T>(baseUrl);
      setData(response.data);
      setError(null);
    } catch (error) {
      setError("Erro ao buscar Medicamentos: " + error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { data, refetch, error };
}

export default useRequest;