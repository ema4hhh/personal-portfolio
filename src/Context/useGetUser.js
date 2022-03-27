import { useEffect, useRef, useState } from "react";

import axios from 'axios';

const useGetUser = (username) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const repos = useRef();
  const phoneNumber = useRef();
  

  const URL = `https://api.github.com/users/${username}`;
  useEffect(() => {
    function getStat() {
      return new Promise((resolve, reject) => {
        const response = axios.get(URL);
        resolve(response);
      })
    }
    async function asyncCall() {
      const result = await getStat();
      repos.current = result.data.public_repos;
      phoneNumber.current = result.data.bio;
      setLoading(false);
    }
    
    return asyncCall()
  })

  return {
    loading,
    error,
    repos, 
    phoneNumber,
  }
}

export default useGetUser;