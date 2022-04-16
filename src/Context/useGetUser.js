import { useEffect, useRef, useState } from "react";

import axios from 'axios';

const useGetUser = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const repos = useRef([]);
  const reposLanguage = useRef([]);

  let request = async (repo) => {
    let request = await new Promise((resolve, reject) => {
      const languagesResponse = axios.get(`https://api.github.com/repos/ema4hhh/${repo.name}/languages`);
      resolve(languagesResponse);
      reject("error");
    })
    return request;
  }
  
  useEffect(() => {
    let getRepos = new Promise((resolve, reject) => {
      const reposResponse = axios.get(`https://api.github.com/users/ema4hhh/repos`);
      resolve(reposResponse);
      reject("apparently");
    })

    getRepos.then(
      (result) => {
        result.data.filter((e) => e.name !== "ema4hhh").map((e) => repos.current.push(e));
      }
    ).catch(err => {
      setError(err);
    })

    getRepos.then(
      async () => {
        const response = repos.current.map(async (e) => {
          const data = await request(e);
          return { data };
        })

        const result = await Promise.all(response);
        result.map((e) => reposLanguage.current.push(Object.keys(e.data.data)));
        setLoading(false);
      }
    )
  }, [])

  return {
    error,
    repos,
    loading,
    reposLanguage,
  }
}

export default useGetUser;