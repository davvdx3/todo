import { useState, useContext, createContext } from "react";
import DataStore from "./list-data.json";
import { v4 } from "uuid";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

function DataProvider({ children }) {
    const [listContainer, setListContainer] = useState(DataStore)

    const addToData = (date, item) =>
        setListContainer([
            ...listContainer,
            {
                id: v4(),
                date: date,
                item: item
            }
        ]);
    // const addToData = (date, item) =>
    //     setColors([
    //         ...listContainer,
    //         {
    //             id: v4(),
    //             date,
    //             item
    //         }
    //     ]);

    return (
        <DataContext.Provider value={{ listContainer, addToData }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;