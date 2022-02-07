import React, {useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import Onboard from 'bnc-onboard';
import Web3 from 'web3';



const HomeScreen = () => {

  const img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAA2CAYAAABJN/BMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASiSURBVHgBvVjNTttMFL1OsmDBIt8WIX3he4JUYoFQFk5f4CtPUFKxYNdEggWrOFtASvMEtE9QumSFVSUICVDDCgmQGiQEC34UEAIEIem5lp06jseesWmPZNkej2eOzz135iZEMTE/P79GMZGkGFheXp49Pz83UqnUzdnZ2TZFRIIiolqtZjRNK9u35Ww2m6aIiEyi0+kYIJGxb9NQo0wREYmErcJ7T3NxcnJSpwiIRAIqbAoeRVJDmQSb0RUGL3SoUaQ/ScJjRhGUTapEwmNGEZRNKk1CYEYRlEwqTSLAjCJIqyFFIsSMIkibNJSEpBlFkDJpKAlJM4ogZdJAEopmFCHUpIEkIphRhHIkEhHNKEKgSX1JxDSjCEKT+pKIaUYRhCYdIvFKZhTB16RDJGTNeH9/T/v7+7Szs0OXl5f8HkliSI2BGpPNmEgkZikAFxcXtLe3ZxG4vr6mu7s7urm5odvbW4sIJKdkMrB0zYyNjQ3UpJpzwWFgFURe4MkPDg6ssxtXV1cWGTdGRkZodHTUOgRoY66JZrPZ5puU0+pnxufnZwJjOj4+pna7TbJ4fHy0Dn4nnU77kXFMWuIbSwlW4eXl5ad7cp746OjIug6CnxJecIiYDCvE1y7kd3d3TavFDoPS5Cpgr7B5mQATYUI2GVbD1NiM+Jq1k5MT4kMVMkr4gUNkkyklkQ3Vw8PDDDs8Ch4eHqxDFU9PT1ZGwTuPiY2NjXyv1yugvUV/EZiTnV46PT2dsRIaF83x8fFvuPwH3siqDBZFCRCoIRFmEEZT13VKIDOsTWV7e7uFYxYdJkCkSX8GJkz6Bj4qtn/nfDqBLHi3urraX0qZzNbW1pvXDBHGauGYQYbkMbf1gVAgnctNl7vd5/+tdQIkvqJTFgoYCwsLX5yXuSN8Uwza1iWyo4Kv/+T6csrlcrqmdde6Xc1sNBoFZ7FKo+MPXjFB5jPSplIqlVrOS1NTU7yzVnH5ToEES1/A3APjpFJJ/lNF7/XoJ3zxlpXv7x0rKytgp7l3UFal4h4Vg8zaqmREJFh69ClAetNpY0U7naePWKC5urILGy1fr9etPpp7EoTlE04fPQMOhMgmYzghckhwyqGtJpK+19Myv0fQKiBg9O/cg7vDQoNYx/Zc8oYIJwME3nOqBUnvHojDAB/8527TPJNxTZHFKsph8asHDZCpgUz/S1E3ZrEl91PaJb3h8z72kZcJ9kEgCQb8UbSNOARRiBjT09Moiqz3BL+6BsMQSIIBf7Aauug5yDSRRTMcIkyetScX9gc26/XGW78Hwt8dWMR4sRJWMry8cw0yNze3CQI/gglTC2H4IHouJLG0tNTCqUCh6OlhPVByGl4fSJFgIO7rONUoFrTa9++NL0E9Qn+VIxsMNiNFAIcBvjHC+oWSsNNRIizDgGfypmmGVshS/9QsLi6aUKNCStAqQT5QJmETMXAyZfpyGPzWg9gkGGFpa6PNYSAFKJHgtA0LSyJBRdkwRCLBQFh4p133e4YwfA5Lx1chwUDaFrxpyz5AGBTNG4OEX9pyIaMahlgkGJy21F9Nrd3RpIhIUQzwaopi5l+VdPTDL8JetlwsE1mmAAAAAElFTkSuQmCC"


  const eth= 0.29
  let [ethControl, setEthControl] = useState(1)

  const increaseEth = (value)=>{
    if (value > 4){
      return
    } 
    return setEthControl(value +=1)
  }

  const decreaseEth = (value) =>{
    if (value < 2) return 
    return setEthControl(value -=1)
  }

  let web3;

  const onboard = Onboard({
    dappId: "d2a35f6d-31cf-4d91-9e55-1dc9ca8af1b6",       // [String] The API key created by step one above
    networkId: 4,  // [Integer] The Ethereum network ID your Dapp uses.
    subscriptions: {
      wallet: wallet => {
          web3 = new Web3(wallet.provider)
          console.log(`${wallet.name} is now connected`)
      }
    }
  });


  const login = async()=>{
    await onboard.walletSelect()
  }

  return (
    <div className='container d-flex justify-content-center align-items-center pt-5'>
      <Row className='container-parent rounded d-flex mt-5'>
        <Col md={6} className='child1'>
          <img className='rounded-start' src="/images/image1.gif" alt="image1" height='470px' />
        </Col>

        <Col md={6} className='child2 rounded-end'>
          <Col md={12} className='justify-content-center align-items-center'>
            <h2 className='text-center text-light mt-5 font-2x1 font-bold'>LIMITED SALES IS NOW LIVE</h2>
            <h1 className='text-center text-light font-4x1 font-bold'>MINT YOUR NFT NOW</h1>
            <p className='text-gray-500 text-center font-bold text-xl'>5 MAX PER WALLET</p>
            <div className='d-flex justify-content-center'>
              <img src={img} alt="" />
              <span className=' font-extrabold font-4xl text-light pt-1 ms-3'>{(ethControl*eth).toFixed(2)} {' '} ETH</span>
            </div>
            <Col className='d-flex justify-content-center my-3 align-items-center'>
              <Col md={6} className='ethControl font-4xl rounded-pill d-flex align-items-center px-3 py-2' >
                <Col md={2}>
                  <span className='ethControl2 py-2 cursor font-extrabold ' onClick={()=>decreaseEth(ethControl)}>-</span>
                </Col>
                <Col md={8} className='d-flex'>
                  <input className='border border-0 text-center font-extrabold ' type="number" max={5} min={1} 
                    placeholder={ethControl}
                    value={ethControl}
                    onChange={(e)=>setEthControl(e.target.value)}
                  />
                </Col>
                <Col md={2}>
                  <span className='ethControl2 py-2 cursor font-extrabold ' onClick={()=>increaseEth(ethControl)} >+</span>
                </Col>
                
              </Col>
            </Col>
            <Col>
              <h2 className='text-center text-light font-bold'>778 / 999 MINTED</h2>
            </Col>

            <Col className='d-flex justify-content-center'>
              <h5 style={{width:'200px', textDecoration: 'underline'}}     
                className='bg-light text-center py-3 rounded-pill font-bold cursor'
                onClick={login}
              >
                Connect Wallet
              </h5>
            </Col>
 
          </Col>
        </Col>

      </Row>
    </div>
  )
};

export default HomeScreen;
