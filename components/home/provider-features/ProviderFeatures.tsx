import Img from "../../utils/image/Img";
import "./providerFeatures.module.css";

const ProviderFeatures = (props: any) => {
  return (
    <div className={props.dark ? "dark" : "light"} id={props.id}>
      <div className="internet-feature__list">
        <div>
          <Img
            src={props.type}
            alt="Internet Service Providers"
            sizes={{
              default: [4.5, 4.5],
              mobile: [12, 12],
            }}
          />
        </div>
        <div className="internetFeature_text">
          <h3 className="heading__secondary state_provider">{props.heading}
            {props.dataProvider && <span>{props.dataProvider}</span>}
          </h3>
          <p className="para__primary">{props.paragraph}</p>
         
        </div>
      </div>
    </div>
  );
};

export default ProviderFeatures;
