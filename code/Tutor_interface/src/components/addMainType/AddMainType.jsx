import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const AddMainType = ({ open, onClose, onAddType, newType, setNewType }) => {

    const handleNewTypeChange = (event) => {
        setNewType(event.target.value);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add a New Main Case Type</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Case Main Type"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={newType}
                    onChange={handleNewTypeChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onAddType}>Add</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddMainType;
