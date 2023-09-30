// import { useState } from "react";

// function useRecord() {
//   let recorder = null;

//   async function StartRecordingScreen() {
//     return await navigator.mediaDevices.getDisplayMedia({
//       audio: true,
//       video: { mediaSource: "screen" },
//     });
//   }

//   const createRecord = (stream) => {
//     let recordedFile = [];
//     recorder = new MediaRecorder(stream);
//     recorder.ondataavailable = function (event) {
//       if (event.data.size > 0) {
//         recordedFile.push(event.data);
//       }
//     };

//     recorder.onstop = function () {
//       handleSaveData(recordedFile);
//       recordedFile = [];
//     };

//     recorder.start(200);
//     return recorder;
//   };

//   const handleStop = () => {
//     if (recorder && recorder.state === "recording") {
//       console.log("yes");
//       // recorder.stop();
//     }
//   };

//   const handleSaveData = function (chunks) {
//     const recordBlob = new Blob(chunks, {
//       type: "video/webm",
//     });

//     // let fileName = window.prompt("Enter a file name");
//     // let getLink = document.createElement("a");
//     // getLink.href = URL.createObjectURL(recordBlob);
//     // console.log(getLink.href);
//     // let downlod = `${fileName}.webm`;
//     // console.log(getLink.href);
//     // console.log(fileName);

//     // document.body.appendChild(getLink);
//     // getLink.click();
//     // URL.revokeObjectURL(recordBlob);
//     // document.body.removeChild(getLink);
//   };

//   const startRocord = async function () {
//     let startStream = await StartRecordingScreen();
//     let mimeType = "video/webm";
//     recorder = createRecord(startStream, mimeType);
//   };

//   return { handleStop, startRocord };
// }

// export default useRecord;
