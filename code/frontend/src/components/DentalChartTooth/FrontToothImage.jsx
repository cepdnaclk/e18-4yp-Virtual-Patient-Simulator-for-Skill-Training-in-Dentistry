import frontTooth_default from '../../assets/tooth/frontTooth_default.png';
import frontTooth_no from '../../assets/tooth/frontTooth_no.png';
import frontTooth_crack from '../../assets/tooth/frontTooth_crack.png';
import frontTooth_cavity_center from '../../assets/tooth/frontTooth_default.png';
import frontTooth_cavity_left from '../../assets/tooth/frontTooth_cavity_left.png';
import frontTooth_cavity_right from '../../assets/tooth/frontTooth_cavity_right.png';
import frontTooth_cavity_top from '../../assets/tooth/frontTooth_cavity_top.png';
import frontTooth_cavity_down from '../../assets/tooth/frontTooth_cavity_down.png';
import frontTooth_cavity_between_top from '../../assets/tooth/frontTooth_cavity_between_top.png';
import frontTooth_cavity_between_down from '../../assets/tooth/frontTooth_cavity_between_down.png';
import {useEffect, useState} from "react";

// eslint-disable-next-line react/prop-types
const FrontToothImage = ({ selectedOption }) => {
  const [imageSrc, setImageSrc] = useState(frontTooth_default);

  useEffect(() => {
    switch (selectedOption) {
      case 'no':
        setImageSrc(frontTooth_no);
        break;
      case 'crack':
        setImageSrc(frontTooth_crack);
        break;
      case 'cavity_1':
        setImageSrc(frontTooth_cavity_center);
        break;
      case 'cavity_2':
        setImageSrc(frontTooth_cavity_left);
        break;
      case 'cavity_3':
        setImageSrc(frontTooth_cavity_right);
        break;
      case 'cavity_4':
        setImageSrc(frontTooth_cavity_top);
        break;
      case 'cavity_5':
        setImageSrc(frontTooth_cavity_down);
        break;
      case 'cavity_6':
        setImageSrc(frontTooth_cavity_between_top);
        break;
      case 'cavity_7':
        setImageSrc(frontTooth_cavity_between_down);
        break;
      default:
        setImageSrc(frontTooth_default);
        break;
    }
  }, [selectedOption]);

  return (
    <img src={imageSrc} alt='' style={{ width: '78px' }} />
  );
};

export default FrontToothImage;
