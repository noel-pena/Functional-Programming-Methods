import {Stack} from "@mui/material";
import {Person} from "../types";
import ReusableCard from "./ReusableCard.tsx";

function MapArray(){
    const mockPersons: Array<Person> = [
        {id: 1, name: 'John Doe', age: 24},
        {id: 2, name: 'Mary Jane', age: 26},
        {id: 3, name: 'Master Chief', age: 40}
    ]

    return (
        <Stack>
            <ReusableCard
                primaryText='Map Arrays'
                secondaryText='The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.'
                data={mockPersons}
            />
        </Stack>
    )
}

export default MapArray