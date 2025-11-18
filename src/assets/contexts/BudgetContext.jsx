import { createContext, useState } from "react";

const countContext = createContext();


export function budgetProvider() {

    const [budgetMode, setBudgetMode] = useState(true)

    function handleState() {
        setBudgetMode(valore => !valore)
    }


    return (
        <>

        </>
    );
}

export default countContext;
