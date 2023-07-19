import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
let myMeeting;
export default function Room() {
  const router = useRouter();
  const [myVideo, setVideo] = useState(false);
  const roomID = router.query.roomid;
  const userId = Date.now().toString();
  const userName = "Victor Opulence";

  useEffect(() => {
    myMeeting = async (element) => {
      const { ZegoUIKitPrebuilt } = await import("@zegocloud/zego-uikit-prebuilt");
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
            url: `https://calladoc247.vercel.app/room/${roomID}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
        showScreenSharingButton: false,
      });
      setVideo(true);
    };

    myMeeting();
  }, []); // Empty dependency array ensures the effect is only run once on mount

  return  <>
  <Head>
        <meta name="viewport" content="width=1200" />
        {/* Replace "1200" with the desired width for your desktop view */}
      </Head> 
  <div
    className={`myCallContainer ${myVideo ? "show" : "hide"}`}
    ref={myMeeting}
  ></div>
  {!myVideo && <p>Please wait....</p>}
</>
}
