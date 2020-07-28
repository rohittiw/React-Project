import React from 'react';
import Grid from '@material-ui/core/Grid';
import { PlayArrow } from '@material-ui/icons';
import Box from '@material-ui/core/Box';
import './FAQ.scss';

interface FaqProps {
    title: string,
    list: Array<string>
}

const FAQ = ({ title, list }: FaqProps) => {
    return (
        <Grid className="section-divider-faq">
            <Grid className="section-header-faq">
                <div>{title}</div>
            </Grid>
            <Box display="flex" flexDirection="row" className="claims-content-faq">
                <Box display="flex" flexWrap="wrap" width="100%">
                    {list.map((item, index) => {
                        return (<Box display="flex" key={index} flexDirection="row" className={ list.length > 1 && (list.length-1) !== index ? 'border-bottom-faq' : ''}>
                            <Box>
                                <PlayArrow className="arrowColor-faq" />
                            </Box>
                            <Box>
                                <span>{item}</span>
                            </Box>
                        </Box>)
                    })
                    }
                </Box>
            </Box>
        </Grid>
    )
}

export default FAQ;
