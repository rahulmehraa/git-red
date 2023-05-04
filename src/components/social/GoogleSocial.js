import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import {
  handleSocialLoginData,
  handleSocialLoginStatus,
} from "../redux/features/loginModalSlice.js";
import { useDispatch, useSelector } from "react-redux";
const GoogleSocial = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { socialApiStatus, userLoginData } = useSelector(
    (state) => state.modal
  );
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );

        navigate("/viewcart");
        dispatch(handleSocialLoginData(res.data));
        dispatch(handleSocialLoginStatus(res.status));
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <div className="modal-social-option">
      <p>or Log-in with</p>
      <ul className="modal-social-btn">
        <li>
          <Link onClick={login} className="btn google">
            <i className="fab fa-google"></i> Google
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default GoogleSocial;
