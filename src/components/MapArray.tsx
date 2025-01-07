import {Button, Stack, Typography} from "@mui/material";
import {Person} from "../types";
import React from "react";

function MapArray(){
    const mockPersons: Array<Person> = [
        {id: 1, name: 'John Doe', age: 24},
        {id: 2, name: 'Mary Jane', age: 26},
        {id: 3, name: 'Master Chief', age: 40}
    ]
    const [showMap, setShowMap] = React.useState(false)

    return (
        <Stack alignItems='center'>
            <Typography>Map Arrays:</Typography>

            <Button onClick={() => setShowMap(!showMap)}>Map</Button>
            {showMap ? (
                mockPersons.map(person => (
                    <Stack>
                        <Typography variant='caption'>{person.name}</Typography>
                    </Stack>
                ))) : (
                    <Stack>
                        <Typography variant='caption'>Click to show map</Typography>
                    </Stack>
                )
            }

        </Stack>
    )
}

export default MapArray