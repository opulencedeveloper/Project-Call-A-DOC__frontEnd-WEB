import { useState } from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const sendRequest = async (requestConfig, applyData) => {
      setIsLoading(true);
      setError(null);
      console.log("requestConfig.body", requestConfig)
      try { 
        const response = await fetch(
            `https://call-a-doctor-api.herokuapp.com/api/v1/${requestConfig.url}`
          , {
            method: requestConfig.method ? requestConfig.method : 'GET',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(requestConfig.body)
          }
        );
  
        if (!response.ok) {
        console.log("error occuredddddddddddddddddddddddddddddddd");
        console.log(response)
          throw new Error('Request failed!');
        }
        let data = await response.json();

        console.log("dataaaaaaaaaaaaaaaaaaaaaaa", data)
        applyData(data);       
      } catch (err) {
        console.log("in the catch", err.message)
        if (err.message === 'Failed to fetch') {
            setError('Network error! Please check your internet connection.');
          } else {
            setError(err.message || 'Something went wrong!');
          }
      }
      setIsLoading(false);
    };  

    return {
        isLoading,
        error,
        sendRequest
    };
};

export default useHttp;