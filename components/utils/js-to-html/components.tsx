import { useLayoutEffect, useRef } from "react";
import { DATA_TYPES } from "./JStoHTML";

import style from "./components.module.css";

type t_Heading = {
  text: string;
  level: number;
};
type t_Paragraph = {
  text: string;
};
type t_RawHTML = {
  html: string;
};
type t_Warning = {
  title: string;
  message: string;
};
type t_Image = {
  url: string;
  caption?: string;
};
type t_Quote = {
  text: string;
};
type t_List = {
  items: string[];
  style: string;
};
type t_Embed = {
  caption?: string;
  url: string;
};

const Heading = ({ text, level }: t_Heading) => {
  const regex = /&amp;/g;
  const updateText = text.replace(regex, "&");

  switch (level) {
    case 1:
      return <h1>{updateText}</h1>;
    case 2:
      return <h2>{updateText}</h2>;
    case 3:
      return <h3>{updateText}</h3>;
    case 4:
      return <h4>{updateText}</h4>;
    case 5:
      return <h5>{updateText}</h5>;
    default:
      return <h6>{updateText}</h6>;
  }
};

const Paragraph = ({ text }: t_Paragraph) => {
  const paraRef = useRef(null);
  useLayoutEffect(() => {
    if (paraRef.current) {
      const p = paraRef.current as HTMLParagraphElement;
      p.innerHTML = text;
    }
  }, []);
  return <p ref={paraRef}>{text}</p>;
};

const RawHTML = ({ html }: t_RawHTML) => {
  const wrapperRef = useRef<null | HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.innerHTML = html;
    }
  }, []);
  return <div ref={wrapperRef} className="raw-html"></div>;
};

const Warning = ({ title, message }: t_Warning) => {
  return (
    <div className={style.warning}>
      <img src={`${process.env.NEXT_PUBLIC_IMAGES_URL}svg/warning.svg`} />
      <div>
        <h6>{title}</h6>
        <p>{message}</p>
      </div>
    </div>
  );
};

const Image = ({ url, caption }: t_Image) => {
  return <img src={url} alt={caption} loading="lazy" className={style.image} />;
};

const Quote = ({ text }: t_Quote) => {
  return <q>{text}</q>;
};

const List = ({ items, style }: t_List) => {
  const itemsHtml = items.map((i: string) => <li key={i}>{i}</li>);
  if (style === DATA_TYPES.ORDERED_LIST) {
    return <ol>{itemsHtml}</ol>;
  }

  return <ul>{itemsHtml}</ul>;
};

const Embed = ({ url, caption }: t_Embed) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <iframe
        src={url}
        style={{ width: "100%", height: "25vw" }}
        title={caption}
      ></iframe>
      {caption && <span style={{ fontWeight: "300" }}>{caption}</span>}
    </div>
  );
};

export { Heading, Paragraph, RawHTML, Warning, Image, Quote, List, Embed };
