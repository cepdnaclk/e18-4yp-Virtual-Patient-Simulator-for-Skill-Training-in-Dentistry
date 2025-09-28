import frontTooth_default from "../../assets/tooth/frontTooth_default.png";
import frontTooth_no from "../../assets/tooth/frontTooth_no.png";
import frontTooth_crack from "../../assets/tooth/frontTooth_crack.png";
import frontTooth_cavity_center from "../../assets/tooth/frontTooth_default.png";
import frontTooth_cavity_left from "../../assets/tooth/frontTooth_cavity_left.png";
import frontTooth_cavity_right from "../../assets/tooth/frontTooth_cavity_right.png";
import frontTooth_cavity_top from "../../assets/tooth/frontTooth_cavity_top.png";
import frontTooth_cavity_down from "../../assets/tooth/frontTooth_cavity_down.png";
import frontTooth_cavity_between_top from "../../assets/tooth/frontTooth_cavity_between_top.png";
import frontTooth_cavity_between_down from "../../assets/tooth/frontTooth_cavity_between_down.png";
import frontTooth_implant from "../../assets/tooth/frontTooth_implant.png";
import frontTooth_amalgam_center from "../../assets/tooth/frontTooth_default.png";
import frontTooth_amalgam_left from "../../assets/tooth/frontTooth_amalgam_left.png";
import frontTooth_amalgam_right from "../../assets/tooth/frontTooth_amalgam_right.png";
import frontTooth_amalgam_top from "../../assets/tooth/frontTooth_amalgam_top.png";
import frontTooth_amalgam_down from "../../assets/tooth/frontTooth_amalgam_down.png";
import frontTooth_amalgam_between_top from "../../assets/tooth/frontTooth_amalgam_between_top.png";
import frontTooth_amalgam_between_down from "../../assets/tooth/frontTooth_amalgam_between_down.png";
import frontTooth_composite_center from "../../assets/tooth/frontTooth_default.png";
import frontTooth_composite_left from "../../assets/tooth/frontTooth_Composite_left.png";
import frontTooth_composite_right from "../../assets/tooth/frontTooth_Composite_right.png";
import frontTooth_composite_top from "../../assets/tooth/frontTooth_Composite_top.png";
import frontTooth_composite_down from "../../assets/tooth/frontTooth_Composite_down.png";
import frontTooth_composite_between_top from "../../assets/tooth/frontTooth_Composite_between_top.png";
import frontTooth_composite_between_down from "../../assets/tooth/frontTooth_Composite_between_down.png";
import frontTooth_GIC_center from "../../assets/tooth/frontTooth_default.png";
import frontTooth_GIC_left from "../../assets/tooth/frontTooth_GIC_left.png";
import frontTooth_GIC_right from "../../assets/tooth/frontTooth_GIC_right.png";
import frontTooth_GIC_top from "../../assets/tooth/frontTooth_GIC_top.png";
import frontTooth_GIC_down from "../../assets/tooth/frontTooth_GIC_down.png";
import frontTooth_GIC_between_top from "../../assets/tooth/frontTooth_GIC_between_top.png";
import frontTooth_GIC_between_down from "../../assets/tooth/frontTooth_GIC_between_down.png";
import frontTooth_veneer from "../../assets/tooth/shapes/frontTooth_veneer.png";
import frontTooth_discolouration from "../../assets/tooth/shapes/frontTooth_discolouration.png";

import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const FrontToothImage = ({ selectedOption }) => {
  const [imageSrc, setImageSrc] = useState(frontTooth_default);

  useEffect(() => {
    switch (selectedOption) {
      case "no":
        setImageSrc(frontTooth_no);
        break;
      case "crack_":
        setImageSrc(frontTooth_crack);
        break;
      case "cavity_1":
        setImageSrc(frontTooth_cavity_center);
        break;
      case "cavity_2":
        setImageSrc(frontTooth_cavity_left);
        break;
      case "cavity_3":
        setImageSrc(frontTooth_cavity_right);
        break;
      case "cavity_4":
        setImageSrc(frontTooth_cavity_top);
        break;
      case "cavity_5":
        setImageSrc(frontTooth_cavity_down);
        break;
      case "cavity_6":
        setImageSrc(frontTooth_cavity_between_top);
        break;
      case "cavity_7":
        setImageSrc(frontTooth_cavity_between_down);
        break;
      case "implant_":
        setImageSrc(frontTooth_implant);
        break;
      case "amalgamFilling_1":
        setImageSrc(frontTooth_amalgam_center);
        break;
      case "amalgamFilling_2":
        setImageSrc(frontTooth_amalgam_left);
        break;
      case "amalgamFilling_3":
        setImageSrc(frontTooth_amalgam_right);
        break;
      case "amalgamFilling_4":
        setImageSrc(frontTooth_amalgam_top);
        break;
      case "amalgamFilling_5":
        setImageSrc(frontTooth_amalgam_down);
        break;
      case "amalgamFilling_6":
        setImageSrc(frontTooth_amalgam_between_top);
        break;
      case "amalgamFilling_7":
        setImageSrc(frontTooth_amalgam_between_down);
        break;
      case "Composite_1":
        setImageSrc(frontTooth_composite_center);
        break;
      case "Composite_2":
        setImageSrc(frontTooth_composite_left);
        break;
      case "Composite_3":
        setImageSrc(frontTooth_composite_right);
        break;
      case "Composite_4":
        setImageSrc(frontTooth_composite_top);
        break;
      case "Composite_5":
        setImageSrc(frontTooth_composite_down);
        break;
      case "Composite_6":
        setImageSrc(frontTooth_composite_between_top);
        break;
      case "Composite_7":
        setImageSrc(frontTooth_composite_between_down);
        break;
      case "GIC_1":
        setImageSrc(frontTooth_GIC_center);
        break;
      case "GIC_2":
        setImageSrc(frontTooth_GIC_left);
        break;
      case "GIC_3":
        setImageSrc(frontTooth_GIC_right);
        break;
      case "GIC_4":
        setImageSrc(frontTooth_GIC_top);
        break;
      case "GIC_5":
        setImageSrc(frontTooth_GIC_down);
        break;
      case "GIC_6":
        setImageSrc(frontTooth_GIC_between_top);
        break;
      case "GIC_7":
        setImageSrc(frontTooth_GIC_between_down);
        break;
      case "veneer_":
        setImageSrc(frontTooth_veneer);
        break;
      case "discolouration_":
        setImageSrc(frontTooth_discolouration);
        break;
      default:
        setImageSrc(frontTooth_default);
        break;
    }
  }, [selectedOption]);

  return <img src={imageSrc} alt="" style={{ width: "78px" }} />;
};

export default FrontToothImage;
