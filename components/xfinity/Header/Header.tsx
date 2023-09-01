import Img from '../../utils/image/Img'
import style from './Header.module.css'
function Header() {
    return (
        <nav className={style.main_nav}>
            <div className={style.container}>
                <Img 
                    src={`${process.env.NEXT_PUBLIC_IMAGES_URL}logo.WebP`}
                    alt="Logo"
                    sizes={{
                        default: [12,5],
                        mobile: [39,15],
                    }}
                />
                <div className={style.nav_btn}><a href="tel:+18559525706">(888) 262-0945</a></div>
            </div>
        </nav>
    )
}

export default Header