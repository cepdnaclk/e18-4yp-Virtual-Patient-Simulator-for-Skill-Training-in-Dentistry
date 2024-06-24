import backTooth_default from '../../assets/tooth/backTooth_default.png';
import backTooth_no from '../../assets/tooth/backTooth_no.png';
import backTooth_crack from '../../assets/tooth/backTooth_crack.png';
import backTooth_cavity_center from '../../assets/tooth/backTooth_cavity_center.png';
import backTooth_cavity_left from '../../assets/tooth/backTooth_cavity_left.png';
import backTooth_cavity_right from '../../assets/tooth/backTooth_cavity_right.png';
import backTooth_cavity_top from '../../assets/tooth/backTooth_cavity_top.png';
import backTooth_cavity_down from '../../assets/tooth/backTooth_cavity_down.png';
import backTooth_cavity_between_top from '../../assets/tooth/backTooth_cavity_between_top.png';
import backTooth_cavity_between_down from '../../assets/tooth/backTooth_cavity_between_down.png';
import {useEffect, useState} from "react";

// eslint-disable-next-line react/prop-types
const BackToothImage = ({ selectedOption }) => {
  const [imageSrc, setImageSrc] = useState(backTooth_default);

  useEffect(() => {
    switch (selectedOption) {
      case 'no':
        setImageSrc(backTooth_no);
        break;
      case 'crack':
        setImageSrc(backTooth_crack);
        break;
      case 'cavity_1':
        setImageSrc(backTooth_cavity_center);
        break;
      case 'cavity_2':
        setImageSrc(backTooth_cavity_left);
        break;
      case 'cavity_3':
        setImageSrc(backTooth_cavity_right);
        break;
      case 'cavity_4':
        setImageSrc(backTooth_cavity_top);
        break;
      case 'cavity_5':
        setImageSrc(backTooth_cavity_down);
        break;
      case 'cavity_6':
        setImageSrc(backTooth_cavity_between_top);
        break;
      case 'cavity_7':
        setImageSrc(backTooth_cavity_between_down);
        break;
      default:
        setImageSrc(backTooth_default);
        break;
    }
  }, [selectedOption]);

  return (
    <img src={imageSrc} alt='' style={{ width: '78px' }} />
  );
};

export default BackToothImage;
