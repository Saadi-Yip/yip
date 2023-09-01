import Img from '../../utils/image/Img';
import style from "./header.module.css";
export const Header = () => {
  return (
    <header className={style.header}>
        <div className={style.logo}>
        <Img 
      src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/att-new.WebP`}       
      alt='img'
      sizes={{
      default: [10,4.5],
      mobile: [33.4,13.4],
      }}
         /> 
        </div>
        <div className={style.tag}>

        <a href='tel:+1888-262-0945'>855-644-1024</a>
        </div>
    </header>
  )
}
