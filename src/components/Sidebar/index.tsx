import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit, FiList, FiMenu, FiUserCheck } from 'react-icons/fi';

import { Side, Icon, Options, OptionsContainer } from './styles';

function Sidebar() {
    return (
        <>
            <Side>
                <Icon><FiMenu></FiMenu></Icon>

                <div>
                    <Link to={'/consult-items'}>
                        <OptionsContainer>
                            <Options>
                                <FiList />
                                <label>Consultar Itens</label>
                            </Options>
                        </OptionsContainer>
                    </Link>
                    <Link to={'/register-items'}>
                        <OptionsContainer>
                            <Options>
                                <FiEdit />
                                <label>Cadastrar Itens</label>
                            </Options>
                        </OptionsContainer>
                    </Link>
                    <Link to={'/consult-requests'}>
                        <OptionsContainer>
                            <Options>
                                <FiUserCheck />
                                <label>Consultar Pedidos</label>
                            </Options>
                        </OptionsContainer>
                    </Link>
                </div>
            </Side>
        </>
    )
}

export default Sidebar;