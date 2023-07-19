import { useRouter } from "next/router";
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useState, useEffect, useCallback } from "react";


function randomID(len) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(
  url = window.location.href
) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

export default function App() {
      const roomID = getUrlParams().get('roomID') || randomID(5);
      let myMeeting = async (element) => {
        const { ZegoUIKitPrebuilt } = await import("@zegocloud/zego-uikit-prebuilt");
     // generate Kit Token
     const appID = 2145588405;
     const serverSecret = "bf10471bd0b2a4775ee32559fe80afb4"
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5),  randomID(5));


     // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });


  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}

// const Room = () => {
//   const router = useRouter();
//   const roomid = router.query.roomid;
//   const userId = Date.now().toString();
//   const userName = "Victor Opulence";


//   const myMeeting = async (element) => {
    
//     const appId = 2145588405;
//     const serverSecret = "bf10471bd0b2a4775ee32559fe80afb4";
//     const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//       appId,
//       serverSecret,
//       roomid,
//       userId,
//       userName
//     );

//     const zc = ZegoUIKitPrebuilt.create(kitToken);
//     zc.joinRoom({
//       container: element,
//       sharedLinks: [
//         { name: "Copy Link", url: `http://localhost:4000/room/${roomid}` },
//       ],
//       scenario: {
//         mode: ZegoUIKitPrebuilt.OneONoneCall,
//       },
//       showScreenSharingButton: false,
//     });
//   };

//   return <div> <div ref={myMeeting} /> </div>;
// };

// export default Room;
