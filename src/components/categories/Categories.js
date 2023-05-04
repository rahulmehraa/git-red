import React, { Fragment, useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { fetchCategoryApi } from "../redux/service/service";

const Categories = () => {

  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategoryApi());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="categories-section section-padding-02">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="section-title__title">
              Top <mark>Categories</mark>{" "}
            </h2>
          </div>
          <div className="row g-6">
          {!isLoading ? data && data.map((items) => {
            return (
                <div className="col-xl-3 col-lg-4 col-sm-6" key = {items.id}>
                  <div
                    className="categories-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <Link
                      className="categories-item__link"
                      to="/courseCategory"
                    >
                      <div className="categories-item__icon">
                      <svg
                        width="40px"
                        height="42px"
                        viewBox="0 0 40 42"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon
                          fill="#D4E1F4"
                          className="text-lighten-fill-color"
                          points="18.1110433 34.0866158 19.9072774 34.0866158 19.9072774 40.2194402 18.1110433 40.2194402"
                        ></polygon>
                        <polygon
                          fill="#D4E1F4"
                          className="text-lighten-fill-color"
                          points="17.1229517 23.7463613 20.8715522 17.514402 20.8503817 14.1651908 15.0873282 23.7463613 18.5507379 31.1282443 20.5803562 31.1155216"
                        ></polygon>
                        <g fill="#47586D" className="text-fill-color">
                          <path d="M36.2442748,0.23826972 C34.4427481,0.23826972 32.9426972,1.51918575 32.6451908,3.19765903 L23.6335878,3.19765903 L23.6335878,0.692824427 C23.6335878,0.355551298 23.3601739,0.0821374046 23.0229008,0.0821374046 L16.7917557,0.0821374046 C16.4544826,0.0821374046 16.1810687,0.355551298 16.1810687,0.692824427 L16.1810687,3.19765903 L7.08926209,3.19765903 C6.80427481,1.47287532 5.33526718,0.154402036 3.57007634,0.154402036 C1.60152672,0.15480916 5.06239099e-15,1.79379135 5.06239099e-15,3.80834606 C5.06239099e-15,5.82290076 1.60152672,7.46229008 3.57007634,7.46229008 C5.33526718,7.46229008 6.80447837,6.14422392 7.08926209,4.41903308 L14.9549109,4.41903308 C11.3860669,6.27347783 9.15051356,9.96458333 9.16030534,13.9864631 C9.16030534,14.3237362 9.43371924,14.5971501 9.77099237,14.5971501 C10.1082655,14.5971501 10.3816794,14.3237362 10.3816794,13.9864631 C10.3721234,10.1555389 12.6563389,6.69091083 16.1810687,5.19012723 L16.1810687,6.92386768 C16.1810687,7.26114081 16.4544826,7.53455471 16.7917557,7.53455471 L23.0229008,7.53455471 C23.3601739,7.53455471 23.6335878,7.26114081 23.6335878,6.92386768 L23.6335878,5.15694656 C25.212729,5.82110079 26.5870953,6.89283113 27.6160814,8.26249364 C28.8554016,9.91292788 29.5226254,11.9225323 29.5165394,13.9864631 C29.5165394,14.3237362 29.7899533,14.5971501 30.1272265,14.5971501 C30.4644996,14.5971501 30.7379135,14.3237362 30.7379135,13.9864631 C30.7446333,11.6587309 29.9920073,9.39231257 28.5941985,7.53099237 C27.6195821,6.23396598 26.3677809,5.1708043 24.9300763,4.41903308 L32.6456997,4.41903308 C32.9432061,6.09750636 34.443257,7.37842239 36.2447837,7.37842239 C38.2592366,7.37842239 39.8987277,5.77689567 39.8987277,3.80834606 C39.8987277,1.83979644 38.259542,0.23826972 36.2442748,0.23826972 Z M3.57007634,6.24050891 C2.27501272,6.24050891 1.22137405,5.14951654 1.22137405,3.80834606 C1.22137405,2.46717557 2.27501272,1.37577608 3.57007634,1.37577608 C4.86513995,1.37577608 5.91877863,2.46676845 5.91877863,3.80834606 C5.91877863,5.14992366 4.86513995,6.24050891 3.57007634,6.24050891 Z M17.4021374,6.31318066 L17.4021374,4.51470738 C17.4529342,4.38445248 17.4572837,4.24066983 17.4144529,4.1075827 C17.4107888,4.09659033 17.4064122,4.08610687 17.4021374,4.07531807 L17.4021374,1.30351145 L22.4122137,1.30351145 L22.4122137,4.03124682 C22.4050891,4.0486514 22.3982697,4.06625954 22.3926718,4.08458015 C22.3499257,4.22127456 22.356847,4.36867587 22.4122137,4.50076336 L22.4122137,6.31318066 L17.4021374,6.31318066 Z M36.2442748,6.15704835 C34.9031043,6.15704835 33.8117048,5.10351145 33.8117048,3.80834606 C33.8117048,2.51318066 34.902799,1.45964377 36.2442748,1.45964377 C37.5857506,1.45964377 38.6768448,2.51318066 38.6768448,3.80834606 C38.6768448,5.10351145 37.5857506,6.15704835 36.2442748,6.15704835 Z"></path>
                          <path d="M11.3994911,18.2854962 C11.3013112,18.0906455 11.1066377,17.9629744 10.8888022,17.9505754 C10.6709666,17.9381763 10.4630635,18.0429329 10.3434078,18.2253845 C10.2237521,18.4078361 10.2105224,18.6402639 10.3087023,18.8351145 C10.6264826,19.4652576 11.005184,20.0627803 11.4393893,20.6191349 C11.6482294,20.8805132 12.0285021,20.9251928 12.292239,20.7193392 C12.5559758,20.5134856 12.6049778,20.1337457 12.4021374,19.8676845 C12.0170744,19.3742833 11.6812563,18.8443581 11.3994911,18.2854962 L11.3994911,18.2854962 Z"></path>
                          <path d="M10.7258015,16.5394402 C10.6647328,16.3193893 10.6115013,16.0936387 10.566514,15.8686005 C10.526273,15.6522308 10.3727235,15.4742497 10.16459,15.4027257 C9.95645659,15.3312017 9.72593782,15.3771997 9.56119501,15.5231278 C9.39645221,15.6690559 9.32297134,15.8923389 9.36885496,16.1075827 C9.41974555,16.3620356 9.48,16.6164885 9.54849873,16.8644275 C9.60516691,17.0763253 9.77112277,17.2415557 9.9832668,17.2972951 C10.1954108,17.3530344 10.4211526,17.2907198 10.5746608,17.1340444 C10.728169,16.9773689 10.7858611,16.7504018 10.7258015,16.5394402 L10.7258015,16.5394402 Z"></path>
                          <path d="M15.2232061,22.3072774 C14.679314,21.9973627 14.1669921,21.635066 13.6935369,21.2255471 C13.5287585,21.0810961 13.2992168,21.0360036 13.092039,21.1073854 C12.8848611,21.1787673 12.7318099,21.3556798 12.6909789,21.5709723 C12.6501479,21.7862648 12.727797,22.0069304 12.8944529,22.1492112 C13.4281672,22.6110051 14.005739,23.019529 14.6189313,23.3689567 C14.9116992,23.5326139 15.2816654,23.4295243 15.4476123,23.1380481 C15.6135591,22.846572 15.5133726,22.4758091 15.2232061,22.3075827 L15.2232061,22.3072774 Z"></path>
                          <path d="M28.1981679,19.9806616 C27.9378117,19.7663276 27.5530064,19.8036006 27.338626,20.0639186 C27.1740458,20.2636132 26.9989822,20.4596438 26.8180153,20.6463104 C26.5936195,20.8899137 26.604307,21.2679859 26.842106,21.4985237 C27.079905,21.7290614 27.4581268,21.7280231 27.6946565,21.4961832 C27.8982188,21.2859033 28.0957761,21.0652417 28.2810178,20.8401018 C28.4953794,20.5798687 28.458293,20.1951542 28.1981679,19.9806616 L28.1981679,19.9806616 Z"></path>
                          <path d="M29.8647328,16.3734351 C29.5421335,16.2751446 29.2009296,16.456956 29.1025954,16.779542 C28.9199561,17.3780107 28.678862,17.9570524 28.382799,18.5082952 C28.2783688,18.700602 28.2848183,18.9340865 28.3997053,19.1203352 C28.5145923,19.3065839 28.7203532,19.4171237 28.9390727,19.4100966 C29.1577922,19.4030694 29.3560331,19.2795497 29.4587277,19.0863104 C29.7928435,18.4643151 30.0648615,17.8109128 30.2708397,17.1355725 C30.3691302,16.8129732 30.1873189,16.4717693 29.8647328,16.3734351 L29.8647328,16.3734351 Z"></path>
                        </g>
                        <path
                          d="M29.1647837,23.2999491 L21.9667176,11.6663613 C21.8554563,11.4865428 21.6590899,11.3769975 21.4476336,11.3769975 L21.4437659,11.3769975 C21.2309899,11.3784879 21.03433,11.4906226 20.9246819,11.6729771 L13.8727735,23.3959288 C13.7677961,23.5704484 13.7567262,23.7858149 13.843257,23.9701781 L17.5539949,31.8792875 L17.5602036,32.8687023 L17.4927226,32.8687023 C17.3307396,32.8697248 17.1757991,32.9350615 17.0619947,33.0503357 C16.9481904,33.1656098 16.8848472,33.321376 16.8859033,33.4833588 L16.9164377,38.3854453 L16.9164377,38.3867684 L16.9318066,40.8373537 C16.9339331,41.1731154 17.2067252,41.444173 17.5424936,41.444173 L17.5464631,41.444173 L25.7177608,41.3932824 C25.8797261,41.3922599 26.0346511,41.3269371 26.1484525,41.2116851 C26.2622539,41.096433 26.3256092,40.940693 26.3245802,40.7787277 L26.3091094,38.3273282 L26.2937405,35.8759288 L26.2783715,33.424631 C26.2761893,33.0889091 26.0034135,32.8179064 25.6676845,32.8179135 L25.6636132,32.8179135 L25.5962341,32.8179135 L25.5900254,31.8284987 L29.2012214,23.8733842 C29.2853741,23.6881067 29.271711,23.4730848 29.1647837,23.2999491 L29.1647837,23.2999491 Z M21.5129771,22.4490416 L21.5231552,22.4490416 C22.3834547,22.4462479 23.0831436,23.14138 23.0859711,24.0016794 C23.0887648,24.8619788 22.3936328,25.5616678 21.5333333,25.5644936 L21.5231552,25.5644936 C20.6628558,25.5671484 19.9632808,24.8719025 19.9605955,24.0116031 C19.9579406,23.1513036 20.6531866,22.4517286 21.513486,22.4490416 L21.5129771,22.4490416 Z M18.1110433,34.086514 L25.0610687,34.0429517 L25.0688041,35.2728753 L18.1188804,35.3166412 L18.1110433,34.086514 Z M18.7783206,32.3480916 L24.3719084,32.3129771 L24.3751654,32.8258524 L18.7815776,32.8609669 L18.7783206,32.3480916 Z M18.1269211,36.5380153 L25.0768448,36.4942494 L25.0845802,37.7242748 L18.1345547,37.7680407 L18.1269211,36.5380153 Z M18.1499237,40.2193384 L18.1421883,38.9894148 L25.0922137,38.9456489 L25.1000509,40.1757761 L18.1499237,40.2193384 Z M24.5845293,31.0902799 L18.551145,31.1281425 L15.0877354,23.7462595 L20.8507888,14.1650891 L20.8956743,21.2991349 C19.5196655,21.6182594 18.6018943,22.9187627 18.762316,24.3221534 C18.9227377,25.7255441 20.1103201,26.7853842 21.5228499,26.7857506 L21.5407634,26.7857506 C22.9566076,26.7771041 24.1395263,25.7052342 24.2872547,24.2970915 C24.4349832,22.8889487 23.5002714,21.5949179 22.1170483,21.2926209 L22.0721628,14.1577608 L27.9551145,23.6658524 L24.5845293,31.0902799 Z"
                          fill="#0071DC"
                          className="primary-fill-color"
                        ></path>
                      </svg>
                      </div>
                      <div className="categories-item__info">
                      
                        <h3 className="categories-item__name">{items.category_name}</h3>
                        
                      </div>
                    </Link>
                  </div>
                </div>
              
            );
          }) : <h3 style={{textAlign:"center" , justifyContent:"center"}}>Loading...</h3>}
        </div>
      </div>
      </div>
    </Fragment>
  );
};
export default Categories;
