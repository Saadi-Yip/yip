import InternetPackages from '../../services/internet-packages/InternetPackages';
import styles from './topProvider.module.css';

const TopProviders = () => {
  const data = [
    {
      one: "1",
      image: `${process.env.NEXT_PUBLIC_IMAGES_URL}comcast-xfinity.webp`,
      call: "(855) 862-7178",
    },
    {
      one: "2",
      image: `${process.env.NEXT_PUBLIC_IMAGES_URL}spectrum/spectrum_logo.WebP`,
      call: "(855) 862-7178",
    },
    {
      one: "3",
      image: `${process.env.NEXT_PUBLIC_IMAGES_URL}HomeInternet.WebP`,
      call: "(855) 862-7178",
    },
    {
      one: "4",
      image: `${process.env.NEXT_PUBLIC_IMAGES_URL}cox_logo.svg`,
      call: "(855) 862-7178",
    },
  ];
  return (
    <>
      <div className={styles.main}>
        <h2 className="heading__primary color__secondary">
          Top Phone Providers
        </h2>

        {data.map((detail, i) => {
          return (
            <InternetPackages
              key={i}
              one={detail.one}
              call={detail.call}
              image={detail.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default TopProviders;
