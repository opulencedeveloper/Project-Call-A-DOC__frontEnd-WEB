import { useRouter } from "next/router";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useEffect } from "react";

const Room = () => {
  const router = useRouter();
  const roomid = router.query.roomid;
  const userId = Date.now().toString();
  const userName = "Victor Opulence";

  useEffect(() => {
    const myMeeting = async (element) => {
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
          { name: "Copy Link", url: `https://calladoc247.vercel.app//room/${roomid}` },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: false,
      });
    };

    if (typeof window !== "undefined") {
      const element = document.querySelector("#myMeetingContainer");
      myMeeting(element);
    }
  }, [roomid, userId, userName]);

  return (
    <div>
      <div id="myMeetingContainer" />
    </div>
  );
};

export default Room;
