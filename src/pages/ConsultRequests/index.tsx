import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EnhancedTable from '../../components/EnhancedTable';
import { Card, CardHeader } from '../../styles';

interface HeadCell {
    disablePadding: boolean;
    id: keyof IRequestDTO;
    label: string;
    numeric: boolean;
}

interface Data {
    id: string;
    name: string;
}

interface IRequestDTO {
    id: number | string;
    code: string;
    cpf: string;
}

let headCells: HeadCell[] = [];
let rows: any[] = [];

function tableSettings(requests: IRequestDTO[]): void {
    headCells = [
        { id: 'id', numeric: false, disablePadding: false, label: 'ID' },
        { id: 'code', numeric: false, disablePadding: true, label: 'Code' },
        { id: 'cpf', numeric: false, disablePadding: true, label: 'CPF' },
    ];

    function createData(
        id: number | string,
        code: string,
        cpf: string,
    ): IRequestDTO {
        return { id, code, cpf };
    }

    rows = [];

    requests.forEach(request => {
        rows.push(createData(request.id, request.code, request.cpf))
    });
}

function ConsultRequests() {

    const url: string = 'http://localhost:3333';

    const [requests, setRequests] = useState<IRequestDTO[]>([]);

    useEffect(() => {
        getRequests();
    }, []);

    function getRequests(): void {
        axios.get<IRequestDTO[]>(`${url}/requests`).then((res) => {
            setRequests(res.data);
        });
    }

    tableSettings(requests);

    return (
        <>
            <Card>
                <CardHeader><label>Consultar Pedidos</label></CardHeader>
                <EnhancedTable nameHeader={'Pedidos'} rows={rows} headCells={headCells} />
            </Card>
        </>
    );
}

export default ConsultRequests;