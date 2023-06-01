import { useState } from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const sendRequest = async (requestConfig, applyData) => {
      console.log("requestConfig.token", requestConfig.token)
     // return;
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
                "Authorization": requestConfig.token ? `Bearer ${requestConfig.token}` : "",
              },
            body: JSON.stringify(requestConfig.body)
          }
        );
        
        // if (!response.ok) {
        // console.log(response)
        //   throw new Error('Request failed!');
        // }

       
        let responseData = await response.json();
        console.log("responseeeee", responseData)
        if(responseData.status === "error") {
          console.log("hereeeeeeeeeeeeeeeeeeeeeee")
          throw new Error(responseData.message)
        }

        console.log("data", responseData)
        applyData(responseData);       
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