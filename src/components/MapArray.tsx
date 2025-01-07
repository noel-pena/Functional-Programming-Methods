import {Stack, Typography} from "@mui/material";
import {Person} from "../types/Person.ts";

function MapArray(){
    const mockPersons: Array<Person> = [
        {id: 1, name: 'John Doe', age: 24},
        {id: 2, name: 'Mary Jane', age: 26},
        {id: 3, name: 'Master Chief', age: 40}
    ]

    return(
        <Stack>
            <Typography>Map Arrays:</Typography>
            {mockPersons.map(person => (
                <Stack>
                    <Typography variant='caption'>{person.name}</Typography>
                </Stack>
            ))}
        </Stack>
    )
}

export default MapArray