import { useEffect, useState } from "react"

const QRCodeContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [op, setOp] = useState(0);

   useEffect(() => {
      setTimeout(() => setOp(1), 1000);
   });
   
   return (
      <div style={{opacity: op, transition: 'all .3s'}}>
         { children }
      </div>
   )
}

export default QRCodeContainer