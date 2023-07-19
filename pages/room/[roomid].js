import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
let myMeeting;

const Room = () => {
  const router = useRouter();
  const roomid = router.query.roomid;
  const userId = Date.now().toString();
  const userName = "Victor Opulence";


  useEffect(() => {
    myMeeting = async (element) => {
      const { ZegoUIKitPrebuilt } = await import("@zegocloud/zego-uikit-prebuilt");

      const appId = 2145588405;
      const serverSecret = "bf10471bd0b2a4775ee32559fe80afb4";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appId,
        serverSecret,
        roomid,
        userId,
        userName
      );

      const zc = ZegoUIKitPrebuilt.create(kitToken);
      zc.joinRoom({
        container: element,
        sharedLinks: [
            { name: "Copy Link", url: `http://localhost:4000/room/${roomid}` },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
          },
          showScreenSharingButton: false,
      });
    };

  }, [roomid, userId, userName]);

  return (
    <div>
      <div ref={myMeeting} />
    </div>
  );
};

export default Room;




// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
// import { useEffect } from "react";

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

//   return (
//     <div>
//       <div ref={myMeeting} />
//     </div>
//   );
// };