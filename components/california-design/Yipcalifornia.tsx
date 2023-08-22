import style from './california.module.css'
import useDimensions from '../../hooks/use-dimensions';
const Yipcalifornia = () => {
  const {width} = useDimensions();

  return (
    <div className={style.yip_section}>
    <h3>Why Place Your Trust in Y/IP?</h3>
    <p>Y/IP examines your pain-points, your struggles, your efforts to find the perfect service providers, and gives you a data-driven answer through its state-of-the-art platform. By simply entering your zip code in its advanced search engine, you can see a comprehensive list of all big & small internet, TV and phone providers in your area. The data is always kept up to speed, meaning you can’t miss out on anything at all.

</p>
  <span style={{display:width && width< 600 ? "none" : "block"}} >So, what can you get out of Y/IP</span>
  <ul className={style.unorder_list} style={{display:width && width< 600 ? "none" : "block"}}>
    <li>Simple and easy search</li>
    <li>Discover the top providers in your area</li>
    <li>Compare prices, speeds, channels and more</li>
  </ul>
  
   <ul className={style.unorder_mobile} style={{display:width && width < 600 ? "block" : "none"}}>
    <label><span>1.</span>Extensive Provider Network: </label>
    <li>Yourinternetprovider.com partners with top cable, internet, and phone providers in the country, giving you access to a wide range of options to choose from. </li>
    <label><span>2.</span>Transparent Pricing:</label>
    <li>With Yourinternetprovider.com, you can compare prices and plans from multiple providers side-by-side, ensuring that you get the best deal possible. Plus, there are no hidden fees or surprises on your bill. </li>
    <label><span>3.</span>Expert Customer Service: </label>
    <li>Yourinternetprovider.com has a team of dedicated customer service representatives who are available to answer your questions and help you choose the right package for your needs.
</li>
<label><span>4.</span>Easy-to-Use Platform: </label>
<li>The Yourinternetprovider.com website is user-friendly and easy to navigate, allowing you to quickly and easily compare plans, prices, and features. </li>
<label><span>5.</span>Satisfaction Guarantee: </label>
<li>Yourinternetprovider.com offers a satisfaction guarantee, so you can be confident that you will be satisfied with your chosen provider and plan. Overall, Yourinternetprovider.com provides a hassle-free and convenient way to find the best cable, internet, and phone deals in your area.
</li>
   </ul>
  
  </div>
  )
}

export default Yipcalifornia