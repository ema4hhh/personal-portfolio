import { useEffect, useRef, useState } from "react";

import axios from 'axios';

const useGetUser = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const repos = useRef([]);
  
  useEffect(() => {
    function getStat() {
      return new Promise((resolve, reject) => {
        const reposResponse = axios.get(`https://api.github.com/users/ema4hhh/repos`);
        resolve(reposResponse);
      })
    }
    async function asyncCall() {
      const result = await getStat();
      result.data.filter((e) => e.name !== "ema4hhh").map((e) => {
        return repos.current.push(e)
      })
      setLoading(false);
    }
    
    return asyncCall()
  }, [])

  return {
    error,
    repos,
    loading,
  }
}

export default useGetUser;