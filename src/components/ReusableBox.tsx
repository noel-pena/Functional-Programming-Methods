import {Person} from "../types";
import {Button, ButtonProps, Card, Stack, Typography} from "@mui/material";
import React from "react";

interface ReusableBoxProps extends ButtonProps {
    primaryText: string
    secondaryText: string
    data: Array<Person>
}

function ReusableBox(props: ReusableBoxProps){
    const {data, primaryText, secondaryText} = props
    const [isToggled, setIsToggled] = React.useState(false)

    return (
        <Card sx={{bgcolor: 'gray', p: 3}}>
            <Stack justifyContent='center' alignItems='center' textAlign='center' spacing={2}>
                <Typography fontWeight='bold'>{primaryText}</Typography>
                <Typography variant='body2'>{secondaryText}</Typography>
                <Typography variant='caption'>Raw data: {JSON.stringify(data)}</Typography>
                {isToggled && (
                    data.map(item => (
                        <Stack>
                            <Typography fontWeight='bold' variant='caption'>{item.name}</Typography>
                        </Stack>
                    ))
                )}
                <Button variant='contained' onClick={() => setIsToggled(!isToggled)}>Map</Button>
            </Stack>
        </Card>
    )
}

export default ReusableBox