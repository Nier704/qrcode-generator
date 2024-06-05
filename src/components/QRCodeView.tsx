import { useContext } from "react"
import { QRCodeContext, QRCodeContextProps } from "../contexts/QRCodeContext";
import QRCodeContainer from "./QRCodeContainer";

const QRCodeView = () => {
   const { valid, generateQRCode } = useContext(QRCodeContext) as QRCodeContextProps;
   
   return (
      <div>
         { valid ? <QRCodeContainer>{generateQRCode()}</QRCodeContainer> : <DefaultCard /> }
      </div>
   )
}

const DefaultCard = () => {
   return (
      <div className="container__defaultCard" />
   )
}

export default QRCodeView