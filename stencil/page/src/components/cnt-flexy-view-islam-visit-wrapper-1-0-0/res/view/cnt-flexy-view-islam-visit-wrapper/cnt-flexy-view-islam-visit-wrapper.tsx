import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';
import {StorageIslamVisit} from "../../../../../utils/utils";

@Component({
  tag: 'cnt-flexy-view-islam-visit-wrapper',
  styleUrl: 'cnt-flexy-view-islam-visit-wrapper.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewIslamVisitWrapper implements ComponentInterface {
  @Prop() payload: any;

  @Prop() forCarousel: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() intro: CntFlexyViewIslamVisitWrapper[] = []

  /**
   * Клик по title
   */
  @Event() clickWrapperTitle: EventEmitter;

  /**
   * Клик по subtitle
   */
  @Event() clickWrapperSubTitle: EventEmitter;

  /**
   * Клик по тексту
   */
  @Event() clickWrapperText: EventEmitter;

  /**
   * Клик по GoogleImage
   */
  @Event() clickWrapperGoogleImage: EventEmitter;

  /**
   * Клик по AppImage
   */
  @Event() clickWrapperAppImage: EventEmitter;

  /**
   * Клик по subtext
   */
  @Event() clickWrapperSubText: EventEmitter;

  /**
   * Клик по ProductImage
   */
  @Event() clickWrapperProductImage: EventEmitter;

  /**
   * Клик по PhoneImage
   */
  @Event() clickWrapperPhoneImage: EventEmitter;

  /**
   * Клик по картинке карусели
   */
  @Event() clickWrapperImage1: EventEmitter;

  /**
   * Клик по картинке карусели
   */
  @Event() clickWrapperImage2: EventEmitter;

  /**
   * Клик по картинке карусели
   */
  @Event() clickWrapperImage3: EventEmitter;

  /**
   * Клик по картинке карусели
   */
  @Event() clickWrapperImage4: EventEmitter;

  /**
   * Клик по картинке карусели
   */
  @Event() clickWrapperImage5: EventEmitter;

  /**
   * Клик по картинке карусели
   */
  @Event() clickWrapperImage6: EventEmitter;

  /**
   * Клик по картинке карусели
   */
  @Event() clickWrapperImage7: EventEmitter;

  componentDidRender() {
    // @ts-ignore
    AOS.init();
  }

  componentDidLoad() {
    const elem = document.querySelector('.carousel');
    // @ts-ignore
    const flkty = new Flickity( elem, {
      // options
      autoPlay: true,
      contain: true,
      prevNextButtons: false,
      pageDots: false
    });

// element argument can be a selector string
//   for an individual element
    // @ts-ignore
    // var flkty = new Flickity( '.main-carousel', {
    //   // options
    //  });
  }



  render() {
    const getWrapper = this.payload.map((item) => {
      return (
        <div class="row d-flex">
          <div class="col-md-6">
            <div class="row">
              <div class="col-12">
                <div class="text">
                  <div data-aos="fade-up" class="text-1">
                    <h1>
                      <span class="text-1-1" onClick={() => this.clickWrapperTitle.emit('WrapperTitle')}>{item.titl}</span>
                    </h1>
                  </div>
                  <div class="text-2">
                    <p class="text-2" onClick={() => this.clickWrapperSubTitle.emit('WrapperSubTitle')}>{item.subtitl}</p>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="main-carousel" data-flickity='{ "cellAlign": "right", "contain": true }'>
                  <div class="carousel" data-flickity='{ "autoPlay": true }'>
                    <div class="carousel-c">
                    <div class="carousel-cell" style={{ backgroundImage: "url(" + StorageIslamVisit.prefix + item.image1 + ")" }}
                         onClick={() => this.clickWrapperImage1.emit('WrapperImage1')}>{item.image1}>
                    </div>
                      <div class="name">
                        {item.name1}
                      </div>
                    </div>
                    <div class="carousel-c">
                      <div class="carousel-cell" style={{ backgroundImage: "url(" + StorageIslamVisit.prefix + item.image2 + ")" }}
                           onClick={() => this.clickWrapperImage2.emit('WrapperImage2')}>{item.image2}>
                      </div>
                      <div class="name">
                        {item.name2}
                      </div>
                    </div>
                    <div class="carousel">
                      <div class="carousel-cell" style={{ backgroundImage: "url(" + StorageIslamVisit.prefix + item.image3 + ")" }}
                           onClick={() => this.clickWrapperImage3.emit('WrapperImage3')}>{item.image3}>
                      </div>
                      <div class="name">
                        {item.name3}
                      </div>
                    </div>
                   <div class="carousel">
                     <div class="carousel-cell" style={{ backgroundImage: "url(" + StorageIslamVisit.prefix + item.image4 + ")" }}
                          onClick={() => this.clickWrapperImage4.emit('WrapperImage5')}>{item.image4}>
                     </div>
                     <div class="name">
                       {item.name4}
                     </div>
                   </div>
                    <div class="carousel">
                      <div class="carousel-cell" style={{ backgroundImage: "url(" + StorageIslamVisit.prefix + item.image5 + ")" }}
                           onClick={() => this.clickWrapperImage5.emit('WrapperImage5')}>{item.image5}>
                      </div>
                      <div class="name">
                        {item.name5}
                      </div>
                    </div>
                   <div class="carousel">
                     <div class="carousel-cell" style={{ backgroundImage: "url(" + StorageIslamVisit.prefix + item.image6 + ")" }}
                          onClick={() => this.clickWrapperImage6.emit('WrapperImage6')}>{item.image6}>
                     </div>
                     <div class="name">
                       {item.name6}
                     </div>
                   </div>
                    <div class="carousel">
                      <div class="carousel-cell" style={{ backgroundImage: "url(" + StorageIslamVisit.prefix + item.image7 + ")" }}
                           onClick={() => this.clickWrapperImage7.emit('WrapperImage7')}>{item.image7}>
                      </div>
                      <div class="name">
                        {item.name7}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="text-3">
                  <h3 class="text-3" onClick={() => this.clickWrapperText.emit('WrapperText')}>{item.text} </h3>
                </div>
              </div>
              <div class="col-12">
                <div class="row no-gutters">
                  <div class="col-auto no-gutters">
                    <div class="AppImage"
                         style={{ backgroundImage: "url(" + StorageIslamVisit.prefix + item.AppImage + ")" }}
                         onClick={() => this.clickWrapperAppImage.emit('WrapperAppImage')}>
                    </div>
                  </div>
                  <div class="col-auto no-gutters">
                    <div class="GoogleImage"
                         style={{ backgroundImage: "url(" + StorageIslamVisit.prefix + item.GoogleImage + ")" }}
                         onClick={() => this.clickWrapperGoogleImage.emit('WrapperGoogleImage')}>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="subtext" onClick={() => this.clickWrapperSubText.emit('WrapperSubText')}>
                  {item.subtext }
                </div>
              </div>
              <div class="col-12">
                <div class="image-1"
                     style={{ backgroundImage: "url(" + StorageIslamVisit.prefix + item.ProductImage + ")" }}
                     onClick={() => this.clickWrapperProductImage.emit('WrapperProductImage')}>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" class="col-md-6">
            <div class="PhoneImage"
               style={{ backgroundImage: "url(" + StorageIslamVisit.prefix + item.PhoneImage + ")" }}
               onClick={() => this.clickWrapperPhoneImage.emit('WrapperPhoneImage')}>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div class="wrapper">
        <div class="container">
          {getWrapper}
        </div>
      </div>
    );
  }

}
