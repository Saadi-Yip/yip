import style from "./california.module.css";

const Networkcalifornia = () => {
  return (
    <section className={style.main_sectionone}>
      <h4>Wireless Network Ratio</h4>
        <div className={style.cards}>
          <div className={style.card}>
            <div className={style.network_card}>
          <h5>Mobile Broadband</h5>
          <span className={style.span_one}>
            0
          </span>
          <div className={style.network_circle1}>
            <div className={style.network_circle5} >
              <div className={style.network_circle3}>
                <h2>100%</h2>
              </div>
            </div>
          </div>
          <span className={style.span_two}>
            100
          </span>
        </div>
        <p>100% CA residents have access to mobile broadband,boasting 32+ plans.  </p>
        </div>
        <div className={style.card}>
        <div className={style.network_card}>
          <h5>Wireless Connection</h5>
          <span className={style.span_one}>
            0
          </span>
          <div className={style.network_circle1}>
            <div className={style.network_circle6}>
              <div className={style.network_circle3}>
                <h2>43.4%</h2>
              </div>
            </div>
          </div>
          <span className={style.span_two}>
            100
          </span>
        </div>
          <p>43.4% can get fixed wireless service without trouble.</p>
        </div>
        
        <div className={style.card}>
    
        <div className={style.network_card}>
          <h5>Satellite Network</h5>
          <span className={style.span_one}>
            0
          </span>
          <div className={style.network_circle1}>
            <div className={style.network_circle7}
            >
              <div className={style.network_circle3}>
                <h2>71%</h2>
              </div>
            </div>
          </div>
          <span className={style.span_two}>
            100
          </span>
        </div>
        <p>71% Californias can get satellite internet and any of its 42 + providers plans.</p>
        </div>
        </div>
      
    </section>
  );
};

export default Networkcalifornia;
