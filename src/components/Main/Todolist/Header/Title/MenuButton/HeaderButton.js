import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { FaEllipsisH } from 'react-icons/fa';
import HeaderMenu from './HeaderMenuContainer';

const HeaderButton = ({buttonColor}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleButtonClick = e => {
        setAnchorEl(e.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    return (
        <React.Fragment>
            <Button
                variant="contained"
                style={{
                    minWidth: 30, 
                    color: 'white',
                    backgroundColor: buttonColor
                }}
                onClick={ handleButtonClick }>

                <FaEllipsisH />
            </Button>

            <HeaderMenu
                open={ Boolean(anchorEl) }
                onClose={ handleMenuClose }
                anchorEl={ anchorEl }
            />
        </React.Fragment>
    );
};

HeaderButton.propTypes = {
    buttonColor: PropTypes.string.isRequired
};

export default HeaderButton;