import { useContext } from "react";
import { QRCodeContext, QRCodeContextProps } from "../contexts/QRCodeContext";

const QRCodeInput = () => {
   const { link, setLink, setValid } = useContext(QRCodeContext) as QRCodeContextProps;

   const handleQRCode = (v: string) => {
      setLink(v);
      const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
      setValid(urlPattern.test(v));
   }

   return (
      <div>
         <input
            className="container__input"
            value={link}
            placeholder="url..."
            onChange={e => handleQRCode(e.target.value)}
            type="text"
         />
      </div>
   )
}

export default QRCodeInput