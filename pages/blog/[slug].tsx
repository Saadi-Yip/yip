import Head from "next/head";
import { useRouter } from "next/router";

import Banner from "../../components/detail-blog/banner/Banner";
import Content from "../../components/detail-blog/content/Content";

import getBlog from "../../controllers/getBlog";
import getBlogs from "../../controllers/getBlogs";

const Detail = ({ data }: any) => {
  const router = useRouter();
  console.log(data)
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>{data?.blog.title}</title>
        <meta name="title" content={data?.blog.title} />
        <meta name="description" content={data?.blog.excerpt} />
        <meta
          name="keywords"
          content={JSON.parse(data?.blog.meta_keywords).join(",")}
        />
        <meta name="robots" content="index,follow" />
        {/* <meta name="robots" content="index,follow" /> */}
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.yourinternetprovider.com/blog/${data?.blog.slug}`}
        />
        <meta property="og:title" content={data?.blog.title} />
        <meta property="og:description" content={data?.blog.excerpt} />
        <meta property="og:image" content={data?.blog.image} />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={data?.blog.image} />
        <meta property="twitter:title" content={data?.blog.title} />
        <meta property="twitter:description" content={data?.blog.excerpt} />
        <meta property="twitter:image" content={data?.blog.image}></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="arial_font">
        <Banner blog={data?.blog} />
        <Content blog={data?.blog} relatedBlogs={data?.relatedBlogs} />
      </main>
    </>
  );
};

export async function getStaticProps({ params }: any) {
  const { slug } = params;
  const blog = (await getBlog(slug)) as any[];
  let relatedBlogs: any = [];

  if (blog[0].category) {
    relatedBlogs = await getBlogs(1, 2, "", blog[0].category?._id);
  }

  if (blog.length < 1) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: { blog: blog[0], relatedBlogs },
    },
  };
}
export async function getStaticPaths() {
  const response = (await getBlogs(1, null)) as any;
  // Get the paths we want to pre-render based on blogs

  const paths = response.blogs?.map((blog: any) => ({
    params: { slug: blog.slug },
  }));

  return { paths, fallback: true };
}

export default Detail;
