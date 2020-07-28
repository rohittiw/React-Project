import React from 'react';
import CommonIncidentModal from '../../UI/Modal/Modal';
import Grid from '@material-ui/core/Grid';
import { DriveEta, ArrowRightAlt, PlayArrow } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import './active-claims.scss';
import FAQ from '../../../common/FAQ/FAQ';

export default function ActiveClaims(props: any) {
    const [openModal, setModal] = React.useState(false);

    const openIncident = () => {
        setModal(prevState => !prevState)
    }

    const setModalState = (cal: string) => {
        setModal(prevState => !prevState)
    }

    const FaqList = [
        'How do I know what portion of the claim my CARE Professional is handling?',
        'Where do I go to see the payments for a certai portion of my claims?'
    ]


    return (
        <div>
            <Grid item md={12} container={true} spacing={6}>
                <Grid item className="ind-claim" md={9}>
                    <Grid className="section-divider">
                        <Grid className="section-header">
                            <div>Claim Number: 332343243</div>
                        </Grid>
                        <Box display="flex" flexDirection="row" className="claims-content">
                            <Box className="marginLeft1">
                                <Box> <p> Insured Name: test</p></Box>
                                <Box><p> Date of Loss: test</p></Box>
                                <Box><p> Loss Location: test</p></Box>
                            </Box>
                            <Box display="flex" width="80%" flexDirection="row" flexWrap="wrap">
                                <Box display="flex" flexDirection="row" width="20%" className="lob-selected" onClick={openIncident}>
                                    <Box display="flex" justifyContent="center" flexDirection="row" width="20%">
                                        <Badge className="badge-class" badgeContent={4} color="error">
                                            <DriveEta className="lob-icon" />
                                        </Badge>
                                    </Box>
                                    <Box display="flex" flexDirection="column" width="60%">
                                        <p className="lob-value">Auto</p>
                                        <p className="support-text">select a vehicle</p>
                                    </Box>
                                    <Box display="flex" flexDirection="row" width="20%">
                                        <ArrowRightAlt className="lob-selected-arrow" />
                                    </Box>
                                </Box>
                                <Box display="flex" flexDirection="row" width="20%" className="lob-selected" onClick={openIncident}>
                                    <Box display="flex" justifyContent="center" flexDirection="row" width="20%">
                                        <Badge className="badge-class" badgeContent={4} color="error">
                                            <DriveEta className="lob-icon" />
                                        </Badge>
                                    </Box>
                                    <Box display="flex" flexDirection="column" width="60%">
                                        <p className="lob-value">Auto</p>
                                        <p className="support-text">select a vehicle</p>
                                    </Box>
                                    <Box display="flex" flexDirection="row" width="20%">
                                        <ArrowRightAlt className="lob-selected-arrow" />
                                    </Box>
                                </Box>
                                <Box display="flex" flexDirection="row" width="20%" className="lob-selected" onClick={openIncident}>
                                    <Box display="flex" justifyContent="center" flexDirection="row" width="20%">
                                        <Badge className="badge-class" badgeContent={4} color="error">
                                            <DriveEta className="lob-icon" />
                                        </Badge>
                                    </Box>
                                    <Box display="flex" flexDirection="column" width="60%">
                                        <p className="lob-value">Auto</p>
                                        <p className="support-text">select a vehicle</p>
                                    </Box>
                                    <Box display="flex" flexDirection="row" width="20%">
                                        <ArrowRightAlt className="lob-selected-arrow" />
                                    </Box>
                                </Box>
                                <Box display="flex" flexDirection="row" width="20%" className="lob-selected" onClick={openIncident}>
                                    <Box display="flex" justifyContent="center" flexDirection="row" width="20%">
                                        <Badge className="badge-class" badgeContent={4} color="error">
                                            <DriveEta className="lob-icon" />
                                        </Badge>
                                    </Box>
                                    <Box display="flex" flexDirection="column" width="60%">
                                        <p className="lob-value">Auto</p>
                                        <p className="support-text">select a vehicle</p>
                                    </Box>
                                    <Box display="flex" flexDirection="row" width="20%">
                                        <ArrowRightAlt className="lob-selected-arrow" />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="row" className="care-professin">
                            <Box>
                                <PlayArrow className="arrowColor" />
                            </Box>
                            <Box>
                                <p className="assigned-prfnls">CARE Professionals Assigned</p>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid className="section-divider marginTop1">
                        <Grid className="section-header">
                            <div>Claim Number: 332343243</div>
                        </Grid>
                        <Box display="flex" flexDirection="row" className="claims-content">
                            <Box className="marginLeft1">
                                <Box> <p> Insured Name: test</p></Box>
                                <Box><p> Date of Loss: test</p></Box>
                                <Box><p> Loss Location: test</p></Box>
                            </Box>
                            <Box display="flex" width="80%" flexDirection="row" flexWrap="wrap">
                                <Box display="flex" flexDirection="row" width="20%" className="lob-selected" onClick={openIncident}>
                                    <Box display="flex" justifyContent="center" flexDirection="row" width="20%">
                                        <Badge className="badge-class" badgeContent={4} color="error">
                                            <DriveEta className="lob-icon" />
                                        </Badge>
                                    </Box>
                                    <Box display="flex" flexDirection="column" width="60%">
                                        <p className="lob-value">Auto</p>
                                        <p className="support-text">select a vehicle</p>
                                    </Box>
                                    <Box display="flex" flexDirection="row" width="20%">
                                        <ArrowRightAlt className="lob-selected-arrow" />
                                    </Box>
                                </Box>
                                <Box display="flex" flexDirection="row" width="20%" className="lob-selected" onClick={openIncident}>
                                    <Box display="flex" justifyContent="center" flexDirection="row" width="20%">
                                        <Badge className="badge-class" badgeContent={4} color="error">
                                            <DriveEta className="lob-icon" />
                                        </Badge>
                                    </Box>
                                    <Box display="flex" flexDirection="column" width="60%">
                                        <p className="lob-value">Auto</p>
                                        <p className="support-text">select a vehicle</p>
                                    </Box>
                                    <Box display="flex" flexDirection="row" width="20%">
                                        <ArrowRightAlt className="lob-selected-arrow" />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="row" className="care-professin">
                            <Box>
                                <PlayArrow className="arrowColor" />
                            </Box>
                            <Box>
                                <p className="assigned-prfnls">CARE Professionals Assigned</p>
                            </Box>


                        </Box>
                    </Grid>
                </Grid>
                <Grid item className="ind-claim" md={3}>
                    <FAQ title={'Frequently Asked Questions'} list={FaqList}></FAQ>
                </Grid>
            </Grid>
            <CommonIncidentModal openModalState={openModal} setModalState={setModalState}
                props={props.props}></CommonIncidentModal>
        </div>


    )


}