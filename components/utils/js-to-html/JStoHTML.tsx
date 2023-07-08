import {
  Embed,
  Heading,
  Image,
  List,
  Paragraph,
  Quote,
  RawHTML,
  Warning,
} from "./components";

export const DATA_TYPES = {
  HEADER: "header",
  PARAGRAPH: "paragraph",
  IMAGE: "image",
  QUOTE: "quote",
  LIST: "list",
  UNORDERED_LIST: "unordered",
  ORDERED_LIST: "ordered",
  HTML: "raw",
  EMBED: "embed",
  WARNING: "warning",
};

type Props = {
  content: { id: string; type: string; data: any };
};

const JStoHTML = ({ content }: Props) => {
  // console.log(content);
  switch (content.type) { 
    case DATA_TYPES.HEADER:
      return <Heading text={content.data.text} level={content.data.level} />;

    case DATA_TYPES.PARAGRAPH:
      return <Paragraph text={content.data.text} />;

    case DATA_TYPES.IMAGE:
      return <Image url={content.data.url} caption={content.data.caption} />;

    case DATA_TYPES.QUOTE:
      return <Quote text={content.data.text} />;

    case DATA_TYPES.LIST:
      return <List items={content.data.items} style={content.data.style} />;

    case DATA_TYPES.HTML:
      return <RawHTML html={content.data.html} />;

    case DATA_TYPES.EMBED:
      return <Embed caption={content.data.caption} url={content.data.embed} />;

    case DATA_TYPES.WARNING:
      return (
        <Warning title={content.data.title} message={content.data.message} />
      );

    default:
      return <p>Working !!!</p>;
  }
};

export default JStoHTML;
