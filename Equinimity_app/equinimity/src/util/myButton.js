import React from 'react'

import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'

export default ({ children, tip, onClick, btnClassName, tipClassName }) => (
    <Tooltip title={tip} onClick={onClick} className={tipClassName} placement="top">
        <IconButton  className={btnClassName}>
            {children}
        </IconButton>
    </Tooltip>
)  