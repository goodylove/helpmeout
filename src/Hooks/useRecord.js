import { useState } from "react";

function useRecord() {
  const [base, setBase] = useState(null);
  let mediaRecorder;
  const URL_API = "https://chrome-extension-n13j.onrender.com/api/upload";

  async function handleFetchRequest() {
    try {
      const res = await fetch(URL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type as needed
        },
        body: JSON.stringify(base),
      });

      const data = await res.json();
      console.log(data.results);
    } catch (error) {
      console.log(error, "Error");
    }
  }

  async function recordScreen() {
    return await navigator.mediaDevices.getDisplayMedia({
      audio: true,
      video: { mediaSource: "screen" },
    });
  }

  async function saveFile(recordedChunks) {
    const blob = new Blob(recordedChunks, {
      type: "video/webm",
    });

    const fileReader = new FileReader();

    // Convert Blob to Base64
    fileReader.onload = function () {
      const base64String = fileReader.result.split(",")[1];
      // console.log("Base64 String:", base64String);
      setBase(base64String);
    };

    fileReader.readAsDataURL(blob);
  }

  function createRecorder(stream, mimeType) {
    let chunks = [];

    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = function (e) {
      if (e.data.size > 0) {
        chunks.push(e.data);
      }
    };
    mediaRecorder.onstop = function () {
      saveFile(chunks);
      chunks = [];
    };
    mediaRecorder.start(200); // For every 200ms the stream data will be stored in a separate chunk.
    return mediaRecorder;
  }

  async function record() {
    let stream = await recordScreen();
    let mimeType = "video/webm";
    mediaRecorder = createRecorder(stream, mimeType);
  }

  async function handleStop() {
    if (mediaRecorder && mediaRecorder.state === "recording") {
      console.log("stop recording");
      mediaRecorder.stop();
      await handleFetchRequest();
    }
  }
  return { handleStop, record };
}
export default useRecord;
