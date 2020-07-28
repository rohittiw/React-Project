import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import { Close } from '@material-ui/icons';
import './Modal.scss';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        outline: '0',
        border: 'none',
        width: '33%',
        minHeight: '33%'
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}));

export default function CommonIncidentModal(props: any) {
    const lobKeys = ['Vehicle', 'Vin'];
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    // const Classes = require('./Modal.scss');

    React.useEffect(() => {
        setOpen(props.openModalState);
    }, [props.openModalState])



    const handleClose = () => {
        console.log(props);
        props.setModalState('res');
        setOpen(false);
    };

    const navigateToPurhase = () => {
        props.props.history.push('/Pricing');
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <Close className="modal-close" onClick={handleClose} />
            <h3>Select a Vehicle</h3>
            <p>Please select a vehicle</p>
            <div>
                <Box display="flex" flexDirection="column" onClick={navigateToPurhase} className="modal-content">
                    <Box display="flex" flexDirection="row">
                        <Box display="flex" flexDirection="column"><p className="lob-type">{lobKeys[0]}:</p></Box>
                        <Box display="flex" flexDirection="column" width="45%">
                            <Badge className="align-badge" badgeContent={4} color="error">
                            <p className="cont-value">2014 Honda Accord</p>
                            </Badge>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="row">
                        <Box display="flex" flexDirection="column"><p className="lob-type">{lobKeys[1]}:</p></Box>
                        <Box display="flex" flexDirection="column" width="80%">
                            <p className="cont-value">2014 Honda Accord</p>
                        </Box>

                    </Box>
                </Box>

            </div >
            <CommonIncidentModal />
        </div >
    );

    return (
        <div>
            <Modal
                open={open ? open : false}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
