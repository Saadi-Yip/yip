import style from './california.module.css'
const Bannercalifornia = () => {
  return (
    <div className={style.main_banner}>
    <div className={style.banner_text}>
        <h1> Loacte Internet, Phones & Cable Providers in <strong> California </strong> </h1>
         <p>To search for the best performing California internet, Phone & TV Providers, simply enter your zipcode below</p>
        <input type="text"  placeholder="ZipCode" />
        </div>
        </div>
         )
   }

export default Bannercalifornia;