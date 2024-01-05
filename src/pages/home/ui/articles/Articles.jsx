import data from "../../../../components/fortemtests/data";
import './Articles.scss'

function Articles() {
  return (
    <section className="articles" id="articles">
      <h2 className="articles__title">Статьи Авторов</h2>
      <div className="slider__wrapper">
        <div className="articles__wrapper">
          <div className="wrapper">
            <div className="slider">
              <div className="article-gallery layout-3-columns">
                
                {data.cardData.map((item, index) => {
                  return (
                    <div className="card" key={index}>
                      <div className="article-preview">
                        <div className="article-preview__image">
                          {/* <img src={item.img} alt="Керамика" /> */}
                        </div>
                        <div className="card-body">
                          <h3 className="article__title">{item.title}</h3>
                          <p className="article__text">{item.body}</p>
                          <div className="article__info">
                            <div className="likes">
                              <span className="likes__icon icon"></span>156
                            </div>
                            <span className="article__date">10 Дек 2023</span>
                            <span className="article__author">Анна Попова</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                
              </div>

              <div className="slider__button slider__button_left">
                <span className="icon slider__icon_left slider__icon"></span>
              </div>
              <div className="slider__button slider__button_right">
                <span className="icon slider__icon_right slider__icon"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="pagination">
          <img src="./template/images/backgrounds/pagination-bg.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Articles;
