import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CommonIncidentModal from '../../UI/Modal/Modal';
import FAQ from '../../../common/FAQ/FAQ';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
});

function createData(cliamType?: string, claimNumber?: string, insuredName?: string, dateOfLoss?: string, lossLocation?: string, completionDate?: string, year?: number) {
  return { cliamType, claimNumber, insuredName, dateOfLoss, lossLocation, completionDate, year };
}



const rows = [
  createData('32132', undefined, undefined, undefined, undefined, undefined, 2010),
  createData('test1', '159', '6.0', '12/12/2010', 'test', '12/12/2010'),
  createData('321', undefined, undefined, undefined, undefined, undefined, 2019),
  createData('test33', '159', '6.0', '12/12/2010', 'test', '12/12/2010'),
];

export default function PriorCliams(props: any) {
  const [openModal, setModal] = React.useState(false);
  const classes = useStyles();

  const openIncident = () => {
    setModal(prevState => !prevState)
  }

  const setModalState = (cal: string) => {
    setModal(prevState => !prevState)
  }

  const FaqList = [
    'What does E-Payment stand for?',
    'My claims has been reported, now what happens?'
  ]

  return (
    <Grid item md={12} container={true} spacing={6}>
      <Grid item className="ind-claim" md={9}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead style={{ backgroundColor: '#00bc78' }}>
              <TableRow>
                <TableCell style={{ color: 'white', fontWeight: 'bold', padding: '10px' }}>Claim Type</TableCell>
                <TableCell style={{ color: 'white', fontWeight: 'bold', padding: '10px' }} align="right">Claim Number</TableCell>
                <TableCell style={{ color: 'white', fontWeight: 'bold', padding: '10px' }} align="right">Insured Name</TableCell>
                <TableCell style={{ color: 'white', fontWeight: 'bold', padding: '10px' }} align="right">Date of Loss</TableCell>
                <TableCell style={{ color: 'white', fontWeight: 'bold', padding: '10px' }} align="right">Loss Location</TableCell>
                <TableCell style={{ color: 'white', fontWeight: 'bold', padding: '10px' }} align="right">Completion Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => {
                if (row && row.year) {
                  return <TableRow key={row.year}>
                    <TableCell style={{ backgroundColor: 'rgb(242, 242, 242)' }} colSpan={6} component="th" scope="row">
                      {row.year}
                    </TableCell>
                  </TableRow>
                } else if (row && row.cliamType) {
                  return < TableRow key={index} style={{ cursor: 'pointer' }} onClick={openIncident} >
                    <TableCell component="th" scope="row">
                      {row.cliamType}
                    </TableCell>
                    <TableCell align="center">{row.claimNumber}</TableCell>
                    <TableCell align="center">{row.insuredName}</TableCell>
                    <TableCell align="center">{row.dateOfLoss}</TableCell>
                    <TableCell align="center">{row.lossLocation}</TableCell>
                    <TableCell align="center">{row.completionDate}</TableCell>
                  </TableRow>
                }
                return '';
              }

              )}
            </TableBody>
          </Table>
        </TableContainer >
        <CommonIncidentModal openModalState={openModal} setModalState={setModalState}
          props={props.props}></CommonIncidentModal>
      </Grid>
      <Grid item className="ind-claim" md={3}>
        <FAQ title={'Frequently Asked Questions'} list={FaqList}></FAQ>
      </Grid>
    </Grid>
  );
}
