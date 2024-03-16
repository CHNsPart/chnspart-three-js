import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <a href="https://chnspart.com/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        chnspart.com
        <br />
        {/* <span style={{ fontStyle: 'oblique', color: '#A1A1A1', fontWeight: 'light' }}>mastering math, conquering code</span> */}
        <span style={{ fontStyle: 'oblique', color: '#A1A1A1', fontWeight: 'light' }}>Software Engineer</span>
      </a>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>CHNsPart</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>Follow the BOX</div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Overlay />
    <img src="/C.G.svg" style={{ position: 'absolute', bottom: 40, left: 40, width: 40 }} />
  </>
)
