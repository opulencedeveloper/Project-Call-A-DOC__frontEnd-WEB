import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";

function randomID(len) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

export default function App() {
  const router = useRouter();
  const [roomID, setRoomID] = useState("");

  useEffect(() => {
    const fetchRoomID = () => {
      const params = getUrlParams();
      const id = params.get("roomID") || randomID(5);
      setRoomID(id);
    };

    if (typeof window !== "undefined") {
      fetchRoomID();
    }
  }, []);

  useEffect(() => {
    if (roomID) {
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
          randomID(5),
          randomID(5)
        );

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
          container: element,
          sharedLinks: [
            {
              name: "Copy the link",
              url: `http://calladoc247.vercel.app/room/${roomID}`,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
          },
        });
      };

      const element = document.querySelector(".myCallContainer");
      if (element) {
        myMeeting(element);
      }
    }
  }, [roomID]);

  return (
    <div className="myCallContainer" style={{ width: "100vw", height: "100vh" }}></div>
  );
}
