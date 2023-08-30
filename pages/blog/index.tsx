// import Head from "next/head";
// import AllBlogs from "../../components/blog/all-blogs/AllBlogs";
// import Banner from "../../components/blog/banner/Banner";
// import Trending from "../../components/blog/trending/Trending";

// import QnA from "../../components/global/QnA/QnA";
// import getBlogs from "../../controllers/getBlogs";
// import Link from "next/link";

// const Blog = ({ data }: any) => {
//   const faqData = [
//     {
//       heading: "What is YourInternetProvider?",
//       text: "YourInternetProvider is an online portal that helps you find the best TV, internet, and home phone deals in your area. Simply enter your Devices and address, and we'll search through a range of top-rated service providers to find the best packages to fit your needs. Our expert team is always available to help you find the right deal and answer any questions you have. Our goal is to make it easy for you to discover and compare available options to find the perfect package.",
//     },
//     {
//       heading: "What services does YourInternetProvider offer?",
//       text: (
//         <p>
//           As an authorized retailer for top telecom providers in the U.S.A,
//           YourInternetProvider helps you find the best deals on{" "}
//           <Link
//             href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}phone-services-providers`}
//           >
//             phone
//           </Link>
//           ,{" "}
//           <Link
//             href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}cable-tv-providers-in-your-area`}
//           >
//             cable
//           </Link>
//           , and{" "}
//           <Link
//             href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}internet-providers-in-your-area`}
//           >
//             internet services
//           </Link>{" "}
//           in your area. Our website features a comprehensive list of all
//           available provider according to your zip code, allowing you to easily
//           compare Starting pricing, features, terms & conditions.
//         </p>
//       ),
//     },
//     {
//       heading: "How can I get services from YourInternetProvider?",
//       text: (
//         <p>
//           Ordering services is easy! You can simply call us at{" "}
//           <a href="tel:+18558627178">(855) 862-7178</a>, and our highly trained
//           customer service representatives will guide you through the process.
//           We understand that navigating the world of telecom can be
//           overwhelming, so we're here to help you find the perfect internet
//           service provider to meet your unique needs.
//         </p>
//       ),
//     },
//     {
//       heading: "What information do I need to provide when ordering services?",
//       text: "To get started, all you need to provide is your address and contact information. We'll take care of the rest! Our advanced technology scans thousands of service providers to find the best offers available in your area. By providing your information, you can be confident that you'll get the best service at the best price.",
//     },
//   ];
  
//   return (
//     <>
//       <Head>
//         <title>
//           Bringing you the latest and greatest from the internet world.
//         </title>
//         <meta
//           name="title"
//           content="Bringing you the latest and greatest from the internet world."
//         />
//         <meta
//           name="description"
//           content="Check out articles, tips and guides for everything related to the Internet."
//         />
//         <meta name="robots" content="index,follow" />

//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta name="google-site-verification" content="k47DZLbHpRIgn1Th9lbawTO52jPvz_M9J-t-B4-mZx0" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main>
//         <Banner />
//         <Trending blogs={data} />
//         <AllBlogs/>
//         <QnA data={faqData} />
//       </main>
//     </>
//   );
// };

// export async function getStaticProps() {
//   const response = (await getBlogs(1,6)) as [];
 
//   return {
//     props: {
//       data: response,
//     },
//   };
// }

// export default Blog;

 

import Head from 'next/head';

interface BlogProps {
  page: number;
  totalPages: number;
  blogData: any[]; // Adjust the type based on your blog data structure
}

function Blog({ page, totalPages, blogData }: BlogProps) {
  const prevPage = page > 1 ? page - 1 : null;
  const nextPage = page < totalPages ? page + 1 : null;
  console.log(blogData);
  return (
    <div>
      {/* Display blog content */}
      {blogData.blogs?.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          {/* <p>{post.content}</p> */}
        </div>
      ))}

      {/* Pagination */}
      <div>
        {prevPage && <a href={`/blog?page=${prevPage}&limit=6`}>Previous</a>}
        {nextPage && <a href={`/blog?page=${nextPage}&limit=6`}>Next</a>}
      </div>

      {/* Head */}
      <Head>
        {prevPage && <link rel="prev" href={`/blog?page=${prevPage}&limit=6`} />}
        {nextPage && <link rel="next" href={`/blog?page=${nextPage}&limit=6`} />}
      </Head>
    </div>
  );
}

export async function getServerSideProps(context:any) {
  // Fetch necessary data, including page, totalPages, and blogData
  const page = parseInt(context.query.page || '1', 10);
  const totalPages = 12; // Adjust based on your total pages

  // Fetch your blog data based on the page and limit
  const limit = 6;
  const offset = (page - 1) * limit;
  const response = await fetch(`https://backend-yip.cyclic.app/blog?page=${page}&limit=${limit}`);
  const blogData = await response.json();

  return {
    props: {
      page,
      totalPages,
      blogData,
    },
  };
}

export default Blog;

