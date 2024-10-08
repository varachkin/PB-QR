import { useSelector } from "react-redux";
import Loader from '../../components/Client/Loader/Loader';
import QRCode from "react-qr-code";
import { useEffect, useState } from "react";
import { getRequest } from "../../API";
export default function StartPage() {
  const { language, serial } = useSelector(state => state.actionReducer)
  const [qrCodeList, setQrCodeList] = useState([])

  function getRandomNumber(array) {
    if(array.length){
      const filteredArray = array.filter(qr => !qr.is_used)
      const randomIndex = Math.floor(Math.random() * (array.length + 1))

      return filteredArray[randomIndex].qr_code;
    }
    return ''
  }

  useEffect(() => {
    getRequest()
      .then(response => {
        console.log(response)
        setQrCodeList(response.data.qr_codes)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
 const code = getRandomNumber(qrCodeList)
  return (!code ?
    <div className='loader-wrapper'>
      <Loader size={12} />
    </div> :
    <div className="start_page_wrapper">
      <div
        className="start_page_container"
      >
        <div
        style={{margin: '0 auto', backgroundColor: '#fff', padding: '2rem', display: 'flex', borderRadius: '1rem'}}
        >
          <QRCode
            value={code}
          />
        
        </div>
       
      </div>
       <h2>{code}</h2>
    </div>)
}
