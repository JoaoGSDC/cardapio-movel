import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EnhancedTable from '../../components/EnhancedTable';
import { Card, CardHeader } from '../../styles';

interface IItemsDTO {
    id: number | string;
    name: string;
    image: string;
    description: string;
    id_group?: number;
    group: string;
    price: number;
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof IItemsDTO;
    label: string;
    numeric: boolean;
}

let headCells: HeadCell[] = [];
let rows: any[] = [];

function tableSettings(items: IItemsDTO[]): void {
    headCells = [
        { id: 'name', numeric: false, disablePadding: true, label: 'Nome' },
        { id: 'image', numeric: false, disablePadding: false, label: 'Imagem' },
        { id: 'description', numeric: false, disablePadding: false, label: 'Descrição' },
        { id: 'group', numeric: false, disablePadding: false, label: 'Grupo' },
        { id: 'price', numeric: true, disablePadding: false, label: 'Preço' },
    ];

    function createData(
        id: number | string,
        name: string,
        image: string,
        description: string,
        group: string,
        price: number,
    ): IItemsDTO {
        return { id, name, image, description, group, price };
    }

    rows = [];

    items.forEach((item: IItemsDTO) => {
        rows.push(createData(item.id, item.name, item.image, item.description, item.group, item.price))
    });
}

function ConsultItems() {

    const url: string = 'http://localhost:3333';

    const [items, setItems] = useState<IItemsDTO[]>([]);

    useEffect(() => {
        getRequests();
    }, []);

    function getRequests(): void {
        axios.get<IItemsDTO[]>(`${url}/products`).then((res) => {
            setItems(res.data);
        });
    }

    tableSettings(items);

    return (
        <>
            <Card>
                <CardHeader><label>Consultar Itens</label></CardHeader>
                <EnhancedTable nameHeader={'Produtos'} rows={rows} headCells={headCells} />
            </Card>
        </>
    );
}

export default ConsultItems;