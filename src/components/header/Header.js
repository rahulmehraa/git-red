import { useEffect } from "react";

const Header = () =>{

  const [data , setData] = useState();

  useEffect(() =>{
    fetchApi();
  },[]);

  const fetchApi = async() =>{
    const res = await axios.get(`/prdoucts`).then(
      res => console.log('res')
    ).catch(err => {console.log(err)})
  };

return(
  <>
  </>
)
};
export default Header ;