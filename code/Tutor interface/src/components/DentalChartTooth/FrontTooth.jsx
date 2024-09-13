import imagesArray from "./ShapeData.js";
import "../../pages/dentalChart/dentalChart.scss";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import FrontToothImage from "./FrontToothImage.jsx";
import amalgamImage from "../../assets/optionsImges/amalgamImage.png";
import cavityImage from "../../assets/optionsImges/cavityImage.png";
import compositeImage from "../../assets/optionsImges/compositeImage.png";
import crackImage from "../../assets/tooth/frontTooth_crack.png";
import veneerImage from "../../assets/tooth/shapes/frontTooth_veneer.png";
import discolouration from "../../assets/tooth/shapes/frontTooth_discolouration.png";

const FrontTooth = ({ toothId, onUpdate }) => {
  const [toothPresent, setToothPresent] = useState(true);
  const [currentStatus, setCurrentStatus] = useState("");
  const [selectedShape, setSelectedShape] = useState("");
  const [options, setOptions] = useState("default");

  const handleToothPresentChange = (event) => {
    setToothPresent(event.target.checked);
    if (!event.target.checked) {
      setCurrentStatus("");
    }
  };

  const handleCurrentStatusChange = (event) => {
    setCurrentStatus(event.target.value);
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = (event) => {
    event.stopPropagation();
    setIsDialogOpen(false);
  };

  const handleShapeSelect = (shape) => {
    setSelectedShape(shape);
  };

  const handleUpdateTooth = (event) => {
    event.stopPropagation();
    const toothDetail = {
      toothId,
      isPresent: toothPresent ? "yes" : "no",
      status: toothPresent ? currentStatus : "no",
      shape: toothPresent ? currentStatus + "_" + selectedShape : "",
    };
    onUpdate(toothDetail);
    if (toothPresent) {
      setOptions(currentStatus + "_" + selectedShape);
    } else {
      setOptions("no");
    }
    setIsDialogOpen(false);
  };

  return (
    <div className="tooth" onClick={handleOpenDialog}>
      <div>
        <FrontToothImage selectedOption={options} />
      </div>
      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Details for Tooth</DialogTitle>
        <DialogContent>
          <FormControlLabel
            control={
              <Checkbox
                checked={toothPresent}
                onChange={handleToothPresentChange}
                color="primary"
              />
            }
            label="Tooth Present"
          />
          {toothPresent && (
            <div>
              <FormControl fullWidth margin="normal">
                <InputLabel id="current-status-label">
                  Current Status
                </InputLabel>
                <Select
                  labelId="current-status-label"
                  id="current-status-select"
                  value={currentStatus}
                  label="Current Status"
                  onChange={handleCurrentStatusChange}
                >
                  <MenuItem value="cavity">
                    <img
                      src={cavityImage}
                      alt="Cavity"
                      style={{ width: "20px", marginRight: "10px" }}
                    />
                    Cavity
                  </MenuItem>
                  <MenuItem value="amalgamFilling">
                    <img
                      src={amalgamImage}
                      alt="Amalgam Filling"
                      style={{ width: "20px", marginRight: "10px" }}
                    />
                    Amalgam Filling
                  </MenuItem>
                  <MenuItem value="Composite">
                    <img
                      src={compositeImage}
                      alt="Composite Filling"
                      style={{ width: "20px", marginRight: "10px" }}
                    />
                    Composite Filling
                  </MenuItem>
                  <MenuItem value="crack">
                    <img
                      src={crackImage}
                      alt="Cracked Tooth"
                      style={{ width: "20px", marginRight: "10px" }}
                    />
                    Cracked Tooth
                  </MenuItem>
                  <MenuItem value="veneer">
                    <img
                      src={veneerImage}
                      alt="Veneer"
                      style={{ width: "20px", marginRight: "10px" }}
                    />
                    Veneer
                  </MenuItem>
                  <MenuItem value="discolouration">
                    <img
                      src={discolouration}
                      alt="Discolouration"
                      style={{ width: "20px", marginRight: "10px" }}
                    />
                    Discolouration
                  </MenuItem>
                </Select>
              </FormControl>
              {(currentStatus === "cavity" ||
                currentStatus === "amalgamFilling" ||
                currentStatus === "Composite") && (
                <div style={{ marginTop: "20px" }}>
                  <div>Please select the shape from the following:</div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      flexWrap: "wrap",
                      marginTop: "20px",
                    }}
                  >
                    {imagesArray.map((image) => (
                      <img
                        key={image.id}
                        src={image.src}
                        alt={image.alt}
                        style={{
                          width: "50px",
                          cursor: "pointer",
                          border:
                            selectedShape === image.id
                              ? "2px solid blue"
                              : "none",
                        }}
                        onClick={() => handleShapeSelect(image.id)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdateTooth} color="primary">
            Update Tooth
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FrontTooth;
