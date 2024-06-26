import { useCallback, useState } from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
console.log("Use Http called")

    const sendRequest = useCallback( async (requestConfig, applyData) => {
      console.log("requestConfig.token", requestConfig.token)
     // return;
      setIsLoading(true);
      setError(null);
      console.log("requestConfig.body", requestConfig)
      try { 
        const response = await fetch(
            `https://api.calladoc247.com/api/v1/${requestConfig.url}`
          , {
            method: requestConfig.method ? requestConfig.method : 'GET',
            headers: {
                "Content-Type": requestConfig.contentType ? requestConfig.contentType : "application/json",
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
        console.log("http response", responseData)
        if(responseData.status === "error") {
          console.log("catch called")
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
      console.log("Making isLoading false")
      setIsLoading(false);
    }, []);  

    return {
        isLoading,
        error,
        sendRequest
    };
};

export default useHttp;
