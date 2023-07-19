import { useRouter } from "next/router";
import { useState, useEffect } from "react";

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

export function getUrlParams(url = "") {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

export default function App() {
  const router = useRouter();
  const [roomID, setRoomID] = useState("");

  useEffect(() => {
    const fetchRoomID = () => {
      const params = getUrlParams(window.location.href);
      const id = params.get("roomID") || randomID(5);
      setRoomID(id);
    };

    if (typeof window !== "undefined") {
      fetchRoomID();
    }
  }, []);

  useEffect(() => {
    if (roomID) {
      const loadZegoUIKit = async () => {
        const { ZegoUIKitPrebuilt } = await import("@zegocloud/zego-uikit-prebuilt");

        const appID = 1065801889;
        const serverSecret = "355bf6c1a33230a450269273f654fbaf";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          appID,
          serverSecret,
          roomID,
          randomID(5),
          randomID(5)
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
          container: document.querySelector(".myCallContainer"),
          sharedLinks: [
            {
              name: "Copy the link",
              url: `http://calladoc247.vercel.app/room/${roomID}`,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.GroupCall,
          },
        });
      };

      loadZegoUIKit();
    }
  }, [roomID]);

  return (
    <div
      className="myCallContainer"
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
}
