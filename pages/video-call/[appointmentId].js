import useHttp from "@/hooks/useHttp";
import AuthContext from "@/store/context-store/auth-context";
import Head from "next/head";
import LoadingSpinner from "@/components/UI/LoadingSpinner";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";

let userType;
let userName = "";
let userId = "";

if (typeof window !== "undefined") {
  userType = localStorage.getItem("userType");
}

export default function VideoCall() {
  const [myVideo, setVideo] = useState(false);
  const authCtx = useContext(AuthContext);
  const { token } = authCtx;
  const router = useRouter();
  const roomID = router.query.appointmentId;
  const { isLoading, error, sendRequest: fetchUserData } = useHttp();
  

  useEffect(() => {
    const myResponse = (res) => {
      const { status, message, doctor, customer } = res;
      if (status === "success") {
        
        const user = userType === "doctor" ? doctor : customer;
        console.log("first name", user.firstname);
        userName = `${user.firstname} ${user.lastname}`;
        userId = user.id.toString()
        setVideo(true);
      }
    };
    const url = userType === "patient" ? "customer" : "doctor";
    fetchUserData(
      {
        url,
        token,
      },
      myResponse
    );

    // if(myVideo) {
    //   console.log("Called meeting withhhhhhhhhhhhhhhhhhh", roomID)
    //   myMeeting();
    // }
  }, [token]); // Empty dependency array ensures the effect is only run once on mount

  if (myVideo) {
    const myMeeting = async (element) => { 
      const { ZegoUIKitPrebuilt } = await import(
        "@zegocloud/zego-uikit-prebuilt"
      );
      // generate Kit Token
      const appID = 1065801889;
      const serverSecret = "355bf6c1a33230a450269273f654fbaf";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        userId,
        userName
      );

      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: "Personal link",
            url: `https://calladoc247.vercel.app/video-call/${roomID}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
        showScreenSharingButton: false,
      });
    };

    return (
      <div
        className={`h-screen w-screen ${myVideo ? "show" : "hide"}`}
        ref={myMeeting}
      />
    );
  }

  return <LoadingSpinner errorMessage={error} />;
}

// import Head from "next/head";
// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";
// let myMeeting;
// export default function Room() {
//   const router = useRouter();
//   const [myVideo, setVideo] = useState(false);
//   const roomID = router.query.roomid;
//   const userId = Date.now().toString();
//   const userName = "Victor Opulence";

//   useEffect(() => {
//     myMeeting = async (element) => {
//       const { ZegoUIKitPrebuilt } = await import(
//         "@zegocloud/zego-uikit-prebuilt"
//       );
//       generate Kit Token
//       const appID = 1065801889;
//       const serverSecret = "355bf6c1a33230a450269273f654fbaf";
//       const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//         appID,
//         serverSecret,
//         roomID,
//         userId,
//         userName
//       );

//       Create instance object from Kit Token.
//       const zp = ZegoUIKitPrebuilt.create(kitToken);
//       start the call
//       zp.joinRoom({
//         container: element,
//         sharedLinks: [
//           {
//             name: "Personal link",
//             url: `https://calladoc247.vercel.app/room/${roomID}`,
//           },
//         ],
//         scenario: {
//           mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
//         },
//         showScreenSharingButton: false,
//       });
//       setVideo(true);
//     };

//     myMeeting();
//   }, []); // Empty dependency array ensures the effect is only run once on mount

//   return (
//     <>
//       <div
//         className={`h-screen w-screen ${myVideo ? "show" : "hide"}`}
//         ref={myMeeting}
//       />
//       {!myVideo && <p>Please wait.mmmmm</p>}
//     </>
//   );
// }