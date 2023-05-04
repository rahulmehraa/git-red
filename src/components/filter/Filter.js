import React,{Fragment , useEffect} from "react";
import { useDispatch , useSelector } from "react-redux";
import { fetchCategoryApi } from "../redux/service/service";
import { setFilterClick } from "../redux/features/filterSlice";
const Filter = () =>{
    
    const dispatch = useDispatch();
    const { data: categoryData } = useSelector((state) => state.category);

    useEffect(() => {
        dispatch(fetchCategoryApi());
      }, [dispatch]);

    return(
        <Fragment>
              <div class="col-lg-3">
                {/* <!-- Sidebar Widget Start --> */}
                <div class="sidebar-widget-wrapper">
                  {/* <!-- Sidebar Widget Wrapper Start --> */}
                  <div class="sidebar-widget-wrap bg-color-10">
                    <h4 class="sidebar-widget-wrap__title">
                      Filter by category
                    </h4>

                    {/* <!-- Widget Filter Start --> */}
                    <div class="widget-filter">
                      {/* <!-- Widget Filter Wrapper Start --> */}
                      <div class="widget-filter__wrapper">
                        <ul class="widget-filter__list">
                          {categoryData.map((item) => {
                            return (
                              <li>
                                {/* <!-- Widget Filter Item Start --> */}
                                <div>
                                  <input
                                    onClick={ () => dispatch(setFilterClick(item._id)) }
                                    type="checkbox"
                                    id={item._id}
                                    name="sort-by"
                                  />
                                  <label for="categories14">
                                    {item.category_name} <span>(12)</span>
                                  </label>
                                </div>
                                {/* <!-- Widget Filter Item End --> */}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      {/* <!-- Widget Filter Wrapper End --> */}
                    </div>
                    {/* <!-- Widget Filter End --> */}
                  </div>
                  {/* <!-- Sidebar Widget Wrapper End -->

                    <!-- Sidebar Widget Wrapper Start --> */}
                  <div class="sidebar-widget-wrap bg-color-10 mt-4">
                    <h4 class="sidebar-widget-wrap__title">Filter by</h4>

                    {/* <!-- Widget Filter Start --> */}
                    <div class="widget-filter">
                      <h4 class="widget-filter__title-02">Instructor</h4>

                      {/* <!-- Widget Filter Wrapper Start --> */}
                      <div class="widget-filter__wrapper">
                        <ul class="widget-filter__list">
                          <li>
                            {/* <!-- Widget Filter Item Start --> */}
                            <div class="widget-filter__item">
                              <input
                                type="checkbox"
                                id="instructor9"
                                name="sort-by"
                              />
                              <label for="instructor9">
                                Donald Logan <span>(11)</span>
                              </label>
                            </div>
                            {/* <!-- Widget Filter Item End --> */}
                          </li>
                          <li>
                            {/* <!-- Widget Filter Item Start --> */}
                            <div class="widget-filter__item">
                              <input
                                type="checkbox"
                                id="instructor10"
                                name="sort-by"
                              />
                              <label for="instructor10">
                                Emilee Logan <span>(12)</span>
                              </label>
                            </div>
                            {/* <!-- Widget Filter Item End --> */}
                          </li>
                          <li>
                            {/* <!-- Widget Filter Item Start --> */}
                            <div class="widget-filter__item">
                              <input
                                type="checkbox"
                                id="instructor11"
                                name="sort-by"
                              />
                              <label for="instructor11">
                                Nahla Jones <span>(9)</span>
                              </label>
                            </div>
                            {/* <!-- Widget Filter Item End --> */}
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Widget Filter Wrapper End --> */}
                    </div>
                    {/* <!-- Widget Filter End -->

                        <!-- Widget Filter Start --> */}
                    <div class="widget-filter">
                      <h4 class="widget-filter__title-02">Price</h4>

                      {/* <!-- Widget Filter Wrapper Start --> */}
                      <div class="widget-filter__wrapper">
                        <ul class="widget-filter__list">
                          <li>
                            {/* <!-- Widget Filter Item Start --> */}
                            <div class="widget-filter__item">
                              <input
                                type="radio"
                                id="radio4"
                                checked
                                name="sort-by"
                              />
                              <label for="radio4">
                                All <span>(101)</span>
                              </label>
                            </div>
                            {/* <!-- Widget Filter Item End --> */}
                          </li>
                          <li>
                            {/* <!-- Widget Filter Item Start --> */}
                            <div class="widget-filter__item">
                              <input type="radio" id="radio5" name="sort-by" />
                              <label for="radio5">
                                Free <span>(6)</span>
                              </label>
                            </div>
                            {/* <!-- Widget Filter Item End --> */}
                          </li>
                          <li>
                            {/* <!-- Widget Filter Item Start --> */}
                            <div class="widget-filter__item">
                              <input type="radio" id="radio6" name="sort-by" />
                              <label for="radio6">
                                Paid <span>(95)</span>
                              </label>
                            </div>
                            {/* <!-- Widget Filter Item End --> */}
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Widget Filter Wrapper End --> */}
                    </div>
                    {/* <!-- Widget Filter End -->

                        <!-- Widget Filter Start --> */}
                    <div class="widget-filter">
                      <h4 class="widget-filter__title-02">Level</h4>

                      {/* <!-- Widget Filter Wrapper Start --> */}
                      <div class="widget-filter__wrapper">
                        <ul class="widget-filter__list">
                          <li>
                            {/* <!-- Widget Filter Item Start --> */}
                            <div class="widget-filter__item">
                              <input
                                type="checkbox"
                                id="level5"
                                name="sort-by"
                              />
                              <label for="level5">
                                All Levels <span>(50)</span>
                              </label>
                            </div>
                            {/* <!-- Widget Filter Item End --> */}
                          </li>
                          <li>
                            {/* <!-- Widget Filter Item Start --> */}
                            <div class="widget-filter__item">
                              <input
                                type="checkbox"
                                id="level6"
                                name="sort-by"
                              />
                              <label for="level6">
                                Beginner <span>(32)</span>
                              </label>
                            </div>
                            {/* <!-- Widget Filter Item End --> */}
                          </li>
                          <li>
                            {/* <!-- Widget Filter Item Start --> */}
                            <div class="widget-filter__item">
                              <input
                                type="checkbox"
                                id="level7"
                                name="sort-by"
                              />
                              <label for="level7">
                                Intermediate <span>(17)</span>
                              </label>
                            </div>
                            {/* <!-- Widget Filter Item End --> */}
                          </li>
                          <li>
                            {/* <!-- Widget Filter Item Start --> */}
                            <div class="widget-filter__item">
                              <input
                                type="checkbox"
                                id="level8"
                                name="sort-by"
                              />
                              <label for="level8">
                                Expert <span>(2)</span>
                              </label>
                            </div>
                            {/* <!-- Widget Filter Item End --> */}
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Widget Filter Wrapper End --> */}
                    </div>
                    {/* <!-- Widget Filter End -->

                        <!-- Widget Filter Start --> */}
                    <div class="widget-filter">
                      <h4 class="widget-filter__title">Language</h4>

                      {/* <!-- Widget Filter Wrapper Start --> */}
                      <div class="widget-filter__wrapper">
                        <ul class="widget-filter__list">
                          <li>
                            {/* <!-- Widget Filter Item Start --> */}
                            <div class="widget-filter__item">
                              <input
                                type="checkbox"
                                id="language10"
                                name="sort-by"
                              />
                              <label for="language10">
                                English <span>(21)</span>
                              </label>
                            </div>
                            {/* <!-- Widget Filter Item End --> */}
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Widget Filter Wrapper End --> */}
                    </div>
                    {/* <!-- Widget Filter End -->

                        <!-- Widget Filter Start --> */}
                    <div class="widget-filter">
                      <h4 class="widget-filter__title-02">Rating</h4>

                      {/* <!-- Widget Filter Wrapper Start --> */}
                      <div class="widget-filter__wrapper">
                        <ul class="widget-filter__list">
                          <li>
                            {/* <!-- Widget Filter Item Start --> */}
                            <div class="widget-filter__item">
                              <input
                                type="checkbox"
                                id="rating6"
                                name="sort-by"
                              />
                              <label for="rating6">
                                <span class="star-line">
                                  <span
                                    class="star"
                                    style={{ width: "100%" }}
                                  ></span>
                                </span>

                                <span>(07)</span>
                              </label>
                            </div>
                            {/* <!-- Widget Filter Item End --> */}
                          </li>
                          <li>
                            {/* <!-- Widget Filter Item Start --> */}
                            <div class="widget-filter__item">
                              <input
                                type="checkbox"
                                id="rating7"
                                name="sort-by"
                              />
                              <label for="rating7">
                                <span class="star-line">
                                  <span
                                    class="star"
                                    style={{ width: "80%" }}
                                  ></span>
                                </span>

                                <span>(0)</span>
                              </label>
                            </div>
                            {/* <!-- Widget Filter Item End --> */}
                          </li>
                          <li>
                            {/* <!-- Widget Filter Item Start --> */}
                            <div class="widget-filter__item">
                              <input
                                type="checkbox"
                                id="rating8"
                                name="sort-by"
                              />
                              <label for="rating8">
                                <span class="star-line">
                                  <span
                                    class="star"
                                    style={{ width: "60%" }}
                                  ></span>
                                </span>

                                <span>(0)</span>
                              </label>
                            </div>
                            {/* <!-- Widget Filter Item End --> */}
                          </li>
                          <li>
                            {/* <!-- Widget Filter Item Start --> */}
                            <div class="widget-filter__item">
                              <input
                                type="checkbox"
                                id="rating9"
                                name="sort-by"
                              />
                              <label for="rating9">
                                <span class="star-line">
                                  <span
                                    class="star"
                                    style={{ width: "40%" }}
                                  ></span>
                                </span>

                                <span>(0)</span>
                              </label>
                            </div>
                            {/* <!-- Widget Filter Item End --> */}
                          </li>
                          <li>
                            {/* <!-- Widget Filter Item Start --> */}
                            <div class="widget-filter__item">
                              <input
                                type="checkbox"
                                id="rating10"
                                name="sort-by"
                              />
                              <label for="rating10">
                                <span class="star-line">
                                  <span
                                    class="star"
                                    style={{ width: "20%" }}
                                  ></span>
                                </span>

                                <span>(0)</span>
                              </label>
                            </div>
                            {/* <!-- Widget Filter Item End --> */}
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Widget Filter Wrapper End --> */}
                    </div>
                    {/* <!-- Widget Filter End --> */}

                    {/* <!-- Widget Filter Start --> */}
                    <div class="widget-filter">
                      <h4 class="widget-filter__title-02">Duration</h4>

                      {/* <!-- Widget Filter Wrapper Start --> */}
                      <div class="widget-filter__wrapper">
                        <ul class="widget-filter__list">
                          <li>
                            {/* <!-- Widget Filter Item Start --> */}
                            <div class="widget-filter__item">
                              <input
                                type="checkbox"
                                id="duration5"
                                name="sort-by"
                              />
                              <label for="duration5">
                                Less than 2 hours <span>(57)</span>
                              </label>
                            </div>
                            {/* <!-- Widget Filter Item End --> */}
                          </li>
                          <li>
                            {/* <!-- Widget Filter Item Start --> */}
                            <div class="widget-filter__item">
                              <input
                                type="checkbox"
                                id="duration6"
                                name="sort-by"
                              />
                              <label for="duration6">
                                3 - 6 hours <span>(7)</span>
                              </label>
                            </div>
                            {/* <!-- Widget Filter Item End --> */}
                          </li>
                          <li>
                            {/* <!-- Widget Filter Item Start --> */}
                            <div class="widget-filter__item">
                              <input
                                type="checkbox"
                                id="duration7"
                                name="sort-by"
                              />
                              <label for="duration7">
                                7 - 16 hours <span>(10)</span>
                              </label>
                            </div>
                            {/* <!-- Widget Filter Item End --> */}
                          </li>
                          <li>
                            {/* <!-- Widget Filter Item Start --> */}
                            <div class="widget-filter__item">
                              <input
                                type="checkbox"
                                id="duration8"
                                name="sort-by"
                              />
                              <label for="duration8">
                                17+ Hours <span>(27)</span>
                              </label>
                            </div>
                            {/* <!-- Widget Filter Item End --> */}
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Widget Filter Wrapper End --> */}
                    </div>
                    {/* <!-- Widget Filter End --> */}
                  </div>
                  {/* <!-- Sidebar Widget Wrapper End --> */}
                </div>
                {/* <!-- Sidebar Widget End --> */}
              </div>
        </Fragment>
    )
};
export default Filter;