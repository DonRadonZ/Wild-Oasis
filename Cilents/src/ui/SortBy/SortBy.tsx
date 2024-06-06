import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom"
import Select from "../Select/Select";

type SortByProps = {
    options: Array<{value: string; label: string;}>
}


function SortBy({ options }: SortByProps){
    const [searchParams, setSearchParams] = useSearchParams();
    const sortBy = searchParams.get('sortBy') || "";

    function handleChange(e: ChangeEvent<HTMLSelectElement>) {
        searchParams.set('sortBy', e.target.value)
        setSearchParams(searchParams)
    }

    return (
        <Select 
        options={options} 
        value={sortBy} 
        type="white" 
        onChange={handleChange}
        />
        
        
    );
}

export default SortBy;