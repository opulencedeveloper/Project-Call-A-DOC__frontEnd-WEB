import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

const Room = () => {
  const router = useRouter();
  const roomid = router.query.roomid;
  const userId = Date.now().toString();
  const userName = "Victor Opulence";
  const elementRef = useRef(null);

  useEffect(() => {
    const myMeeting = async (element) => {
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
          {
            name: 'Personal link',
            url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomid,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
    };

    myMeeting(elementRef.current);
  }, [roomid, userId, userName]);

  return (
    <div>
      <div ref={elementRef} />
    </div>
  );
};

export default Room;
