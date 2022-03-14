import React, { useEffect, useState } from "react";

import axios from 'axios';

const useGetUser = (username) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  let repos;
  let phoneNumber;

  useEffect(() => {
    const URL = `https://api.github.com/users/${username}`;

    try{
      const response = axios.get(URL);

      setLoading(false)
    } catch(err) {
      setError(err);
    }
  })
  return {
    loading,
    error,
    repos, 
    phoneNumber
  }
}

export default useGetUser;