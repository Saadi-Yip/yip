import useDimensions from "../../../hooks/use-dimensions";
import InternerProviderBox from "./InternerProviderBox";
export type t_Provider = {
  provider: string;
  text: string;
  num?: string;
  number: string;
  url?:string;
};
const InternetProviders = () => {
  const { width } = useDimensions();
  const providers: t_Provider[] = [
    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}ATnnT.WebP`,
      text: "Get best AT&T internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "855-644-1024",
      num: "+18556441024",
      url:"/att",
    },
    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}spectrum.WebP`,
      text: "Get best Spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "855-862-7178",
      num: "+18558627178",
      url:"/spectrum",
    },
    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}Exfinity.WebP`,
      text: "Get best xfinity internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "855-952-5706",
      num: "+18559525706",
      url:"/xfinity",

    },
    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}century.WebP`,
      text: "Get best CenturyLink internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "855-862-7178",

    },
    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}verizon.WebP`,
      text: "Get best Verizon internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "866-703-0474",
    },
    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}medicom.WebP`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "855-862-7178",
    },

    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}optimum.WebP`,
      text: "Get best Optimum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "855-862-7178",
      url:"/optimum",

    },
    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}visasat.WebP`,
      text: "Get best Viasat internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "855-862-7178",
    },
    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}earthlink.WebP`,
      text: "Get best EarthLink internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "855-862-7178",
    },
    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}hughes.WebP`,
      text: "Get best HughesNet internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "855-862-7178",
    },
    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}starry.WebP`,
      text: "Get best Starry internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "855-862-7178",
    },
    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}rcn.WebP`,
      text: "Get best RCN internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "855-862-7178",
    },
    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}towerstream.WebP`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "855-862-7178",
    },
    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}Consolidated.WebP`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "855-862-7178",
    },
    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}honest.WebP`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "855-862-7178",
    },

    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}sonic.WebP`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "855-862-7178",
    },
    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}connecto.WebP`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "855-862-7178",
    },
    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}goCreactive.WebP`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "855-862-7178",
    },
    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}smartaira.WebP`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "855-862-7178",
    },
    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}ace.WebP`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "855-862-7178",
    },
    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}cox.WebP`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "866-703-0474",
      url:"/cox"
    },
    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}fiber.WebP`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "866-703-0474",
    },
    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}medicom.WebP`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "866-703-0474",
    },
    {
      provider: `${process.env.NEXT_PUBLIC_IMAGES_URL}HomeInternet.WebP`,
      text: "Get best spectrum internet cable, landline and phone services with yourinternetprovider.com in one go",
      number: "855-862-7178",
    },
  ];
  const updatedProviders =
    width < 600 && providers.length == 24 ? providers.slice(0, 9) : providers;

  return <InternerProviderBox providers={updatedProviders} />;
};

export default InternetProviders;
