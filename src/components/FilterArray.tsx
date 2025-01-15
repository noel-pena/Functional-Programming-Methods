import ReusableCard from "./ReusableCard.tsx";
import {Person} from "../types";

function FilterArray(){
    const mockPersons: Array<Person> = [
        {id: 1, name: 'John Doe', age: 24},
        {id: 2, name: 'Mary Jane', age: 26},
        {id: 3, name: 'Master Chief', age: 40}
    ]

    const filteredPerson = mockPersons.filter(person => person.name === 'Master Chief')

    return(
        <>
            <ReusableCard
                primaryText='primary text'
                secondaryText='secondary text'
                data={filteredPerson}
            />
        </>
    )
}

export default FilterArray