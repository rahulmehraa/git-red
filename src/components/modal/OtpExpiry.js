import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPhoneNumber, fetchPhoneOtp } from "../redux/service/service";
import { useDispatch, useSelector } from "react-redux";
const OtpExpiry = ({props}) => {
  const dispatch = useDispatch();
  const {userInputPhoneNumber , apiOtpData} = useSelector((state) => state.modal)
  const [counter, setCounter] = useState(30);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter , apiOtpData]);
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      borderRadius: "5px",
      fontSize: "15px",
      fontWeight: "light",
    },
  };
  const handleResendOtpClick = () =>{
    const obj = { phnNumber: userInputPhoneNumber }; //creating object for passing to action creator
    dispatch(fetchPhoneNumber(obj))
    setCounter(30);
  }

  return (
    <Fragment>
      {}
      <div style={styles.container}>
        { counter !== 0 ? (
          <p>
            Resend OTP in{" "}
            <span className="timer" style={{ fontWeight: "bold" }}>
              00:{counter}
            </span>
          </p>
        ) : (
          <Link onClick={handleResendOtpClick}>Resend OTP</Link>
        )}
      </div>
    </Fragment>
  );
};
export default OtpExpiry;
