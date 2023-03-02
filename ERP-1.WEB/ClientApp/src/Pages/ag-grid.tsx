import * as React  from 'react';

import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';

export default function GridA() {
    const [item, setItem] : any = React.useState(); // The selected item will be stored in this state.
    const options: any[] = [{ name: 'Chocolate' },
        { name: 'Coconut' },
        { name: 'Mint' },
        { name: 'Strawberry' },
        { name: 'Vanilla' }]
    /**
     * The onSelect callback function is called if the user selects one option out of the dropdown menu.
     * @param selectedItem object (the selected item / option)
     */
    const onSelect = React.useCallback((selectedItem : any) => {
        console.log('selectedItem', selectedItem);
        setItem(selectedItem);
    }, []);

    // Make sure each option has an unique id and a value
    const items : any = React.useMemo(
        () =>
            options.map((option : any) => ({
                // required: id and value
                id: option.name,
                value: option.name,
                // optional: label, node
                // label: option.name, // use a custom label instead of the value
                // node: option.name, // use a custom ReactNode to display the option
                ...option, // pass along any other properties to access in your onSelect callback
            })),
        [],
    );
    return (
        <DatalistInput label="Select your favorite flavor" placeholder="Chocolate" items={items} onSelect={onSelect} />

    )
}