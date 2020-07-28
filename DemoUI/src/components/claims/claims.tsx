import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import React from 'react';
import ActiveClaims from './active-claims/active-claims';
import PriorClaims from './prior-claims/prior-claims';
import './claims.scss';



function TabPanel(props: any) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            className="claims"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function Claims(props: any) {
    const [value, setValue] = React.useState(0);
    const TabStyle = {
        background: '#f2f2f2',
        color: 'black',
        outline: '0'
    }

    const TStyle = {
        background: '#f2f2f2',
        color: 'black',
        outline: '0'
    }

    const selectedTab = {
         backgroundColor: "#00bc78",
         height : '4px',
         fontWeight : 700
    } as React.CSSProperties



    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    return (
        <div>
            <AppBar position="static" className="box-shadow-none">
                <Tabs TabIndicatorProps={{ style: selectedTab }} style={TabStyle} value={value} onChange={handleChange}>
                    <Tab label="Active Claims" style={TStyle} {...a11yProps(0)} />
                    <Tab label="Prior Claims" style={TStyle} {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <ActiveClaims props={props}></ActiveClaims>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <PriorClaims props={props}></PriorClaims>
            </TabPanel>
        </div>
    );
}
