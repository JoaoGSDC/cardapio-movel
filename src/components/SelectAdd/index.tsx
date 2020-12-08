import { Select, Options, Option, SelectAddContainer, OptionContainer } from './styles';
import React, { ChangeEvent, useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import { Triangle } from './styles';

interface Props {
    label: string;
    onSetItem?: any;
    returnInputValue?: any;
    deleteItem?: any;
    data: any[];
}

function SelectAdd(props: Props) {

    const { data, label } = props;

    const [inputValue, setInputValue] = useState<string>('');
    const [itemToDelete, setItemToDelete] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);
    const [item, setItem] = useState<any>({ id: 0, group: label});

    function options(): any[] {
        let elements: any = (
            data.map((d: any) => (
                <Option key={d.id} onClick={() => setItemValue(d)}>{d.group} <label onClick={deleteItem(d.id)}><FiTrash /></label></Option>
            ))
        );

        return elements;
    }

    function setItemValue(value: any): any {
        setItem(value);
        props.onSetItem(value);
    }

    function addNewItemValue(value: string): any {
        setInputValue(value);
        props.returnInputValue(value);
    }

    function deleteItem(value: number): any {
        setItemToDelete(value);
        props.deleteItem(value);
    }

    function handleInput(event: ChangeEvent<HTMLInputElement>): void {
        setInputValue(event.target.value);
    }

    return (
        <>
            <SelectAddContainer>
                <Select onClick={() => setOpen(open ? false : true)}>
                    <label>{item.group}</label>
                    <Triangle />
                </Select>
                <Options style={{ 'display': open ? 'flex' : 'none' }}>
                    <div><input type="text" value={inputValue} onChange={handleInput} /><button type="button" onClick={() => addNewItemValue(inputValue)}>+</button></div>
                    <OptionContainer>
                        {options()}
                    </OptionContainer>
                </Options>
            </SelectAddContainer>
        </>
    );
}

export default SelectAdd;