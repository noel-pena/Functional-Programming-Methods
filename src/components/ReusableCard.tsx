import React from "react";
import {Person} from "../types";
import {Button, ButtonProps, Card, List, ListItemText, Stack, Typography} from "@mui/material";

interface ReusableCardProps extends ButtonProps {
    /**
     * Primary text for component
     */
    primaryText: string
    /**
     * Secondary text for component
     */
    secondaryText: string
    /**
     * Array for data to map
     */
    data: Array<Person>
}

function ReusableCard(props: ReusableCardProps){
    const {data, primaryText, secondaryText} = props
    const [isToggled, setIsToggled] = React.useState(false)

    return (
        <Card sx={{bgcolor: 'primary.main', p: 3}}>
            <Stack justifyContent='center' alignItems='center' textAlign='center'>
                <List>
                    <ListItemText primary={primaryText} />
                    <ListItemText secondary={secondaryText} />
                    <ListItemText secondary={`Raw data: ${JSON.stringify(data)}`} />
                    {isToggled && (
                        data.map(item => (
                            <Stack key={item.id}>
                                <Typography fontWeight='bold' variant='caption'>{item.name}</Typography>
                            </Stack>
                        ))
                    )}
                    <Button variant='contained' color='secondary' size='small'  onClick={() => setIsToggled(!isToggled)}>
                        {isToggled ? 'Revert' : 'Render'}
                    </Button>
                </List>
            </Stack>
        </Card>
    )
}

export default ReusableCard