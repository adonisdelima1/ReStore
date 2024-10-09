import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
    checked?: boolean 
    handleChange: () => void
}

export default function Header({checked, handleChange}: Props) { 

    return(
        <AppBar position='static' sx={{mb: 4, display: 'flex', flexDirection: 'row', alignItems: 'center'}}> 
            <Toolbar>
                <Typography variant="h6">RE-STORE</Typography>
            </Toolbar>
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }} 
            />
        </AppBar>
    )
}