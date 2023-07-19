import { useCallback, useState } from "react";
import { useRouter } from "next/router";

const VideoCall = () => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const hanleJoinRoom = useCallback(() => {
    router.push("/room/" + value);
  }, [router, value]);

  console.log(value);
  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Enter Room Code"
      />
      <button onClick={hanleJoinRoom}>Join</button>
    </div>
  );
};

export default VideoCall;
