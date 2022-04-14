import { useEffect, useRef, useState } from "react";

import axios from 'axios';

const useGetUser = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const repos = useRef([]);
  const reposLanguage = useRef([])
  
  useEffect(() => {
    let getRepos = new Promise((resolve, reject) => {
      const reposResponse = axios.get(`https://api.github.com/users/ema4hhh/repos`);
      resolve(reposResponse);
      reject("apparently");
    })
    getRepos.then(
      (result) => {
        result.data.filter((e) => e.name !== "ema4hhh").map((e) => {
        return repos.current.push(e)
        })
      }
    ).catch(err => {
      setError(err)
    })
    getRepos.then(
      async () => {
        await Promise.all(
          repos.current.map(async (e, i) => {
            let request = new Promise((resolve, reject) => {
              const languagesResponse = axios.get(`https://api.github.com/repos/ema4hhh/${e.name}/languages`)
              resolve(languagesResponse)
              reject("error")
            })
            request.then(
              (result) => {
                reposLanguage.current.push(Object.keys(result.data))
                setLoading(false);
              }
            ).catch(err => setError(err))
          })
        )
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