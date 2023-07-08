import Head from "next/head";
import SpeedTester from "../components/speed-testing/speed-tester";

// components
// type t_ProgressBar = {
//   reference: React.RefObject<t_ProgressBarReference>;
// };
// type t_ResultContent = {
//   message: string;
// };
// type t_StartButton = {
//   handleClickOnGoBtn:
//     | t_handleClickDownloadStartBtn
//     | t_handleClickUploadStartBtn;
// };
// type t_handleClickUploadStartBtn = () => void;
// type t_updateDownloadProgressBar = t_progressBar;
// type t_updateUploadProgressBar = t_progressBar;

export default function SpeedTesting() {
  return (
    <>
      <Head>
        <title>
          Fast & Reliable High Speed Internet Service Providers By Zipcode
        </title>
        <meta
          name="title"
          content="Fast & Reliable High Speed Internet Service Providers By Zipcode"
        />
        <meta
          name="description"
          content="Looking for an affordable internet plan? Yourinternetprovider to fit your needs and budget. Compare speeds, prices, and deals to find the perfect provider for your home or business."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SpeedTester />
        {/* <section
          style={{
            height: "100vh",
            backgroundColor: "#cdcecf",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "48px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h2 style={{ marginBottom: "24px" }}>Download</h2>
            {!downloadSpeed ? (
              <ProgressBar reference={downloadProgreeBarRef} />
            ) : (
              <ResultContent
                message={`Speed : ${downloadSpeed.toFixed(2)} MB`}
              />
            )}
            <StartButton handleClickOnGoBtn={handleClickDownloadStartBtn} />
          </div>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ marginBottom: "24px" }}>Upload</h2>
            {!uploadSpeed ? (
              <ProgressBar reference={uploadProgressBarRef} />
            ) : (
              <ResultContent message={`Speed : ${uploadSpeed.toFixed(2)} MB`} />
            )}
            <StartButton handleClickOnGoBtn={handleClickUploadStartBtn} />
          </div>
          <input
            type="file"
            onChange={(e: any) => {
              setImage(e.target.files[0]);
            }}
          />
        </section> */}
        {/* <SpeedTester /> */}
      </main>
    </>
  );
}
// components
// const StartButton = ({ handleClickOnGoBtn }: t_StartButton) => {
//   return (
//     <button
//       style={{ fontSize: "3vw", cursor: "pointer" }}
//       onClick={handleClickOnGoBtn}
//     >
//       Go
//     </button>
//   );
// };
// const ResultContent = ({ message }: t_ResultContent) => {
//   return <h2 style={{ marginBottom: "48px" }}>{message}</h2>;
// };
// const ProgressBar = ({ reference }: t_ProgressBar) => {
//   return (
//     <div
//       style={{
//         width: "30vw",
//         background: "white",
//         height: "34px",
//         borderRadius: "12px",
//         marginBottom: "48px",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <div
//         style={{
//           height: "100%",
//           position: "absolute",
//           top: "0",
//           left: "0",
//           background: "#0f3782",
//         }}
//         ref={reference}
//       ></div>
//     </div>
//   );
// };