import {Stack} from "@mui/material";
import ReusableCard from "./ReusableCard.tsx";
import {Person} from "../types";

function FilterArray(){
    const mockPersons: Array<Person> = [
        {id: 1, name: 'John Doe', age: 24},
        {id: 2, name: 'Mary Jane', age: 26},
        {id: 3, name: 'Master Chief', age: 40}
    ]

    return(
        <Stack>
            <ReusableCard primaryText='primary text' secondaryText='secondary text' data={mockPersons} />
        </Stack>
    )
}

export default FilterArray