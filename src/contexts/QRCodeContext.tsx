import QRCode from "qrcode.react";
import { createContext, useState } from "react";

export interface QRCodeContextProps {
   link: string;
   setLink: (v: string) => void;
   generateQRCode: () => JSX.Element;
   valid: boolean;
   setValid: (v: boolean) => void;
}

export const QRCodeContext = createContext<QRCodeContextProps | undefined>(undefined);

export const QRCodeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [link, setLink] = useState('');
   const [valid, setValid] = useState(false);

   const generateQRCode = () => {
      return (
         <QRCode 
            value={link}
            size={200}
         />
      )
   }

   return <QRCodeContext.Provider value={{link, setLink, valid, setValid, generateQRCode}}>
      { children }
   </QRCodeContext.Provider>
}