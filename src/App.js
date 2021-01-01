import './App.css';
import Particles from 'react-particles-js';
import logo from '../src/img/happy-new-year.jpg';
import logo2 from '../src/img/2020-Happy-New-Year-gifs.gif'

function App() {
  return (
    <div className="container-fluid">
      <div  >
        <Particles
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#8a2be2",
                  blur: 5
                }
              }
            }
          }}
          style={{
            width: '100%',
            backgroundImage: `url(${logo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="container text-center">
          <h1>"Wish you all the best and a Good start from 2021" </h1>
          <p className="text-muted ml-auto">Greetings from <span className="font-weight-bolder text-primary">Haque(RAZz)</span> </p>
          <img src={logo2} className="img-fluid"></img>

        </div>

      </div>
    </div>
  );
}

export default App;
