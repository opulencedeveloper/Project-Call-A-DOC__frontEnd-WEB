import { useRouter } from "next/router";
//import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useState, useEffect, useCallback } from "react";

const Room = () => {
  const router = useRouter();
  const roomid = router.query.roomid;
  const userId = Date.now().toString();
  const userName = "Victor Opulence";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof document === "undefined") {
    return null;
  }

  const myMeeting = async (element) => {
    const { ZegoUIKitPrebuilt } = await import(
      "@zegocloud/zego-uikit-prebuilt"
    );
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

  return <div>{mounted ? <div ref={myMeeting} /> : <p>Please wait</p>}</div>;
};

export default Room;
