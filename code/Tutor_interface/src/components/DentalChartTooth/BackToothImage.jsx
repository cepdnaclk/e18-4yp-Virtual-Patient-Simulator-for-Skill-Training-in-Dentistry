import backTooth_default from "../../assets/tooth/backTooth_default.png";
import backTooth_no from "../../assets/tooth/backTooth_no.png";
import backTooth_crack from "../../assets/tooth/backTooth_crack.png";
import backTooth_cavity_center from "../../assets/tooth/backTooth_cavity_center.png";
import backTooth_cavity_left from "../../assets/tooth/backTooth_cavity_left.png";
import backTooth_cavity_right from "../../assets/tooth/backTooth_cavity_right.png";
import backTooth_cavity_top from "../../assets/tooth/backTooth_cavity_top.png";
import backTooth_cavity_down from "../../assets/tooth/backTooth_cavity_down.png";
import backTooth_cavity_between_top from "../../assets/tooth/backTooth_cavity_between_top.png";
import backTooth_cavity_between_down from "../../assets/tooth/backTooth_cavity_between_down.png";
import backTooth_implant from "../../assets/tooth/backTooth_implant.png";
import backTooth_amalgam_center from "../../assets/tooth/backTooth_amalgam_center.png";
import backTooth_amalgam_left from "../../assets/tooth/backTooth_amalgam_left.png";
import backTooth_amalgam_right from "../../assets/tooth/backTooth_amalgam_right.png";
import backTooth_amalgam_top from "../../assets/tooth/backTooth_amalgam_top.png";
import backTooth_amalgam_down from "../../assets/tooth/backTooth_amalgam_down.png";
import backTooth_amalgam_between_top from "../../assets/tooth/backTooth_amalgam_between_top.png";
import backTooth_amalgam_between_down from "../../assets/tooth/backTooth_amalgam_between_down.png";
import backTooth_composite_center from "../../assets/tooth/backTooth_Composite_center.png";
import backTooth_composite_left from "../../assets/tooth/backTooth_Composite_left.png";
import backTooth_composite_right from "../../assets/tooth/backTooth_Composite_right.png";
import backTooth_composite_top from "../../assets/tooth/backTooth_Composite_top.png";
import backTooth_composite_down from "../../assets/tooth/backTooth_Composite_down.png";
import backTooth_composite_between_top from "../../assets/tooth/backTooth_Composite_between_top.png";
import backTooth_composite_between_down from "../../assets/tooth/backTooth_Composite_between_down.png";
import backTooth_GIC_center from "../../assets/tooth/backTooth_GIC_center.png";
import backTooth_GIC_left from "../../assets/tooth/backTooth_GIC_left.png";
import backTooth_GIC_right from "../../assets/tooth/backTooth_GIC_right.png";
import backTooth_GIC_top from "../../assets/tooth/backTooth_GIC_top.png";
import backTooth_GIC_down from "../../assets/tooth/backTooth_GIC_down.png";
import backTooth_GIC_between_top from "../../assets/tooth/backTooth_GIC_between_top.png";
import backTooth_GIC_between_down from "../../assets/tooth/backTooth_GIC_between_down.png";
import backTooth_crown from "../../assets/tooth/shapes/backTooth_crown.png";
import backTooth_discolouration from "../../assets/tooth/shapes/backTooth_discolouration.png";
import backTooth_partiallyErupted from "../../assets/tooth/shapes/backTooth_partiallyErupted.png";

import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const BackToothImage = ({ selectedOption }) => {
  const [imageSrc, setImageSrc] = useState(backTooth_default);

  useEffect(() => {
    switch (selectedOption) {
      case "no":
        setImageSrc(backTooth_no);
        break;
      case "crack_":
        setImageSrc(backTooth_crack);
        break;
      case "cavity_1":
        setImageSrc(backTooth_cavity_center);
        break;
      case "cavity_2":
        setImageSrc(backTooth_cavity_left);
        break;
      case "cavity_3":
        setImageSrc(backTooth_cavity_right);
        break;
      case "cavity_4":
        setImageSrc(backTooth_cavity_top);
        break;
      case "cavity_5":
        setImageSrc(backTooth_cavity_down);
        break;
      case "cavity_6":
        setImageSrc(backTooth_cavity_between_top);
        break;
      case "cavity_7":
        setImageSrc(backTooth_cavity_between_down);
        break;
      case "implant_":
        setImageSrc(backTooth_implant);
        break;
      case "amalgamFilling_1":
        setImageSrc(backTooth_amalgam_center);
        break;
      case "amalgamFilling_2":
        setImageSrc(backTooth_amalgam_left);
        break;
      case "amalgamFilling_3":
        setImageSrc(backTooth_amalgam_right);
        break;
      case "amalgamFilling_4":
        setImageSrc(backTooth_amalgam_top);
        break;
      case "amalgamFilling_5":
        setImageSrc(backTooth_amalgam_down);
        break;
      case "amalgamFilling_6":
        setImageSrc(backTooth_amalgam_between_top);
        break;
      case "amalgamFilling_7":
        setImageSrc(backTooth_amalgam_between_down);
        break;
      case "Composite_1":
        setImageSrc(backTooth_composite_center);
        break;
      case "Composite_2":
        setImageSrc(backTooth_composite_left);
        break;
      case "Composite_3":
        setImageSrc(backTooth_composite_right);
        break;
      case "Composite_4":
        setImageSrc(backTooth_composite_top);
        break;
      case "Composite_5":
        setImageSrc(backTooth_composite_down);
        break;
      case "Composite_6":
        setImageSrc(backTooth_composite_between_top);
        break;
      case "Composite_7":
        setImageSrc(backTooth_composite_between_down);
        break;
      case "GIC_1":
        setImageSrc(backTooth_GIC_center);
        break;
      case "GIC_2":
        setImageSrc(backTooth_GIC_left);
        break;
      case "GIC_3":
        setImageSrc(backTooth_GIC_right);
        break;
      case "GIC_4":
        setImageSrc(backTooth_GIC_top);
        break;
      case "GIC_5":
        setImageSrc(backTooth_GIC_down);
        break;
      case "GIC_6":
        setImageSrc(backTooth_GIC_between_top);
        break;
      case "GIC_7":
        setImageSrc(backTooth_GIC_between_down);
        break;
      case "crown_":
        setImageSrc(backTooth_crown);
        break;
      case "discolouration_":
        setImageSrc(backTooth_discolouration);
        break;
      case "partiallyErupted_":
        setImageSrc(backTooth_partiallyErupted);
        break;
      default:
        setImageSrc(backTooth_default);
        break;
    }
  }, [selectedOption]);

  return <img src={imageSrc} alt="" style={{ width: "78px" }} />;
};

export default BackToothImage;
