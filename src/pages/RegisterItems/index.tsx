import React, { ChangeEvent, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import TextField from '@material-ui/core/TextField';
import { Card, CardHeader } from '../../styles';
import { ButtonContainer, FieldsContainer } from './styles';
import SelectAdd from '../../components/SelectAdd';
import { env } from 'process';

interface IGroupDTO {
    id: number;
    group: string;
}

interface IItemDTO {
    id: number;
    name: string;
    description: string;
    price: number;
    id_group: number;
}

let grupos = [
    {
        id: 1,
        group: 'Lanche'
    },
    {
        id: 2,
        group: 'Bebidas'
    }
]

function RegisterItems() {
    const url = 'http://localhost:3333';

    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [group, setGroup] = useState<IGroupDTO>();

    const [groups, setGroups] = useState<IGroupDTO[]>([]);

    useEffect(() => {
        getGroupsArrayValue();
    }, []);

    function getGroupsArrayValue(): void {
        axios.get<IGroupDTO[]>(`${url}/groups`).then((res) => {
            setGroups(res.data);
        });
    }

    function submitGroup(group: string): void {
        axios.post<IGroupDTO[]>(`${url}/groups`, { group }).then((res) => {
            console.log(res.data)
            setGroups(res.data);
        });
    }

    function deleteGroup(id: number): void {
        axios.delete<IGroupDTO[]>(`${url}/groups`, { headers: { id } }).then((res) => {
            setGroups(res.data);
        });
    }

    function handleInputName(event: ChangeEvent<HTMLInputElement>): void {
        setName(event.target.value);
    }

    function handleInputGroup(event: IGroupDTO): void {
        setGroup(event);
    }

    function handleInputPrice(event: ChangeEvent<HTMLInputElement>): void {
        setPrice(Number(event.target.value));
    }

    function handleInputDescription(event: ChangeEvent<HTMLInputElement>): void {
        setDescription(event.target.value);
    }

    function submit(): void {
        const item: IItemDTO = {
            id: 0,
            name: name,
            description: description,
            price: price,
            id_group: 0,
        }

        console.log(item);

        axios.post<IItemDTO>(`${url}/products`, item).then((res: AxiosResponse<IItemDTO>) => console.log('OK'));
    }

    return (
        <>
            <Card>
                <CardHeader><label>Cadastrar Itens</label></CardHeader>
                <FieldsContainer>
                    <div style={{ width: '100%' }}>
                        <TextField label="Nome" value={name} onChange={handleInputName} variant="outlined" />
                        <SelectAdd label={'Grupo'} data={groups} onSetItem={handleInputGroup} returnInputValue={submitGroup} deleteItem={deleteGroup} />
                        <TextField label="Preço" value={price} onChange={handleInputPrice} type="number" variant="outlined" />
                        <TextField label="Descrição" value={description} onChange={handleInputDescription} multiline rows={4} variant="outlined" style={{ width: '100%' }} />
                    </div>
                    <ButtonContainer>
                        <button type="button" onClick={() => submit()}>Cadastrar</button>
                    </ButtonContainer>
                </FieldsContainer>
            </Card>
        </>
    );
}

export default RegisterItems;