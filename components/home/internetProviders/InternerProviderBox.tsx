import Link from "next/link";
import useDimensions from "../../../hooks/use-dimensions";
import Img from "../../utils/image/Img";
import styles from "./InternetProvider.module.css";
import { t_Provider } from "./InternetProviders";

type Props = {
  providers: t_Provider[];
};

const InternerProviderBox = ({ providers }: Props) => {
  const { width } = useDimensions();
  return (
    <div className={styles.providers_bg}>
      <div className={styles.provider_heading}>
        <h2
          className="heading__primary "
          style={{ display: width < 600 ? "none" : "block" }}
        >
          All the Leading Internet Providers You Know & Love – In One Place!
        </h2>
        <h2
          className="heading__primary"
          style={{ display: width < 600 ? "block" : "none" }}
        >
          Our Providers
        </h2>
      </div>
      <div className={styles.providers_row}>
        {providers.map((provider: t_Provider, i: number) => {
          return (
            <div className={styles.provider_col} key={i.toString()}>
              <div className={styles.provider_col_inner}>
                <Link href={provider.url ?? "/"} legacyBehavior>
                  <a>
                    <Img
                      src={provider.provider}
                      alt="Internet service provider"
                      sizes={{
                        default: [16.1, 4.9],
                        mobile: [47.7, 19],
                      }}
                    />
                  </a>
                </Link>
                <div
                  className={styles.provide_tel}
                  style={{ display: width < 600 ? "block" : "none" }}
                >
                  <p>{provider.text}</p>
                  <a href={`tel:${provider.num}`}>{provider.number}</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InternerProviderBox;
