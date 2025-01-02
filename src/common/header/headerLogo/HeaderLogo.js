import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo/AbarisSoftectLogo.png'
import { useEffect, useState } from 'react';
import { baseUrlImage } from '../../../baseUrl';
import { afterLogingetCompanyInfo } from '../../../api/login/Login';
function HeaderLogo({showAsideBar}) {

    const [state , setData] = useState(null)
    const getData = async ()=>{
        const res = await afterLogingetCompanyInfo()
        setData(res.data);
    }
    useEffect(()=>{
        getData()
    },[])

    return (
        <>
            <div className="nav-header">
                <Link to="/" className="brand-logo justify-content-center" style={{padding:"6px"}}>
                    <img src={state?.logo ? `${baseUrlImage}${state?.logo}` : logo} alt="" style={{ width: '100%',height:"100%",objectFit:"contain" }} />
                </Link>
                <div className="nav-control" onClick={showAsideBar}>
                    <div className="hamburger">
                        <span className="line" />
                        <span className="line" />
                        <span className="line" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeaderLogo