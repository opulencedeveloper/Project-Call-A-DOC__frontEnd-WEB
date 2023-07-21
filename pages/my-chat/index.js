import useHttp from "@/hooks/useHttp";
import AuthContext from "@/store/context-store/auth-context";
import React, { useContext, useEffect, useState } from "react";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

const MyComponent = () => {
  const [webhookData, setWebhookData] = useState(null);
  const [mounted, setMounted] = useState(false);
  const { isLoading, error, sendRequest: fetchUserData } = useHttp();
  const authCtx = useContext(AuthContext);
  const { token } = authCtx;

  useEffect(() => {
    const myResponse = (res) => {
      const { status, doctor } = res;
      if (status === "success") {
        console.log("In the webhook success")
        setWebhookData(data);
      }
    };

    fetchUserData(
      {
        url: "appointment/sendchat",
        method: "POST",
      // url: "appointment/fetchappointmentchats?appointmentid=AP1688230670",
        body: { appointmentid: "AP1688230670", message: "Hello Opulencejhgshj22211111" },
        token: token,
      },
      myResponse
    );
    setMounted(true);
    window.Pusher = Pusher;
  window.Echo = new Echo({
    broadcaster: "pusher",
    key: "f8405d072cee469ab443",
    cluster: "us2",
    forceTLS: true,
  });
  }, [fetchUserData, token]);

  if (!mounted || typeof window === "undefined") {
    return null;
  }

  window.Echo.channel('AP1688230670')
  .listen('ChatMessenger', (e) => {
    console.log("My Message Window")
    console.log(e.chat);
  });

  return (
    <div>
      <h1>Webhook Data:</h1>
      {webhookData ? (
        <pre>{JSON.stringify(webhookData, null, 2)}</pre>
      ) : (
        <p>Loading webhook data...</p>
      )}
    </div>
  );
};

export default MyComponent;

