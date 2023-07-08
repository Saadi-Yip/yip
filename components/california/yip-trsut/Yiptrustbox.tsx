import Yiptrust from "../../services/yip-trust/Yiptrust";

const Yiptrustbox = () => {
  return (
    <>
      <Yiptrust
        text="Why Place Your Trust in Y/IP"
        paragraph="Y/IP examines your pain-points, your struggles, your efforts to find the perfect service providers, and gives you a data-driven answer through its state-of-the-art platform. By simply entering your zip code in its advanced search engine, you can see a comprehensive list of all big & small internet, TV and phone providers in your area. The data is always kept up to speed, meaning you can’t miss out on anything at all."
      >
        <p>So, what can you get out of Y/IP</p>
        <ul style={{ margin: "0px" }}>
          <li>Simple and easy search</li>
          <li>Discover the top providers in your area</li>
          <li>Compare prices, speeds, channels and more</li>
        </ul>
      </Yiptrust>
    </>
  );
};

export default Yiptrustbox;
