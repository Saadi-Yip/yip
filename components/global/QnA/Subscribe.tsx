import { useRef, useState } from "react";
import Img from "../../utils/image/Img";
import styles from "./qna.module.css";

const Subscribe = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const zipcodeRef = useRef<HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (emailRef.current && zipcodeRef.current) {
        const email = emailRef.current.value;
        const zip_code = zipcodeRef.current.value;
        const response = await fetch(
          "https://yip-backend.thepic.store/subscribe",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              zip_code,
            }),
          }
        );
        if(response.ok){
            setIsLoading(true)
        }
        (emailRef.current.value = ""), (zipcodeRef.current.value = "");
      }
    } catch (error) {}
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.subscriber_contact}>
        <input
          type="email"
          name="email"
          ref={emailRef}
          placeholder="Email"
          required
        />
        <input
          type="number"
          name="zip_code"
          ref={zipcodeRef}
          placeholder="Zipcode"
          required
        />
        <button type="submit">
          <Img
            src={`${process.env.NEXT_PUBLIC_SECOND_IMAGES_URL}Arrow%202.png`}
            alt="Internet Service Provider"
            sizes={{
              default: [1.4, 0.8],
              mobile: [5, 3],
            }}
          />
        </button>
      </div>
    </form>
  );
};

export default Subscribe;
