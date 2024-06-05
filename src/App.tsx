import QRCodeInput from "./components/QRCodeInput"
import QRCodeView from "./components/QRCodeView"
import { QRCodeProvider } from "./contexts/QRCodeContext"

const App = () => {
  return (
    <div className="container">
      <QRCodeProvider>
        <QRCodeInput />
        <QRCodeView />
      </QRCodeProvider>
    </div>
  )
}

export default App