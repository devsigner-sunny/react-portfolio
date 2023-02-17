import Lottie from 'react-lottie-player';
import lottieJson from '../maintenance.json';


function Maintenance() {

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="m-auto">
        <h1 className="text-center">Under Maintenance! </h1>
        <h3 className="text-center">Sunny Kim 🌞 Portfolio </h3>
        <Lottie
        loop
        animationData={lottieJson}
        play
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        />
      </div>
     
    </div>
  );
}
export default Maintenance;
