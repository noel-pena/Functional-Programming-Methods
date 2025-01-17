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
                primaryText='Filter Arrays'
                secondaryText='The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.'
                data={filteredPerson}
            />
        </>
    )
}

export default FilterArray