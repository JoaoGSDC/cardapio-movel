import styled from 'styled-components';

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;

    td, th {
    border: 1px solid #383838;
    text-align: left;
    padding: 15px;
  }

  td:last-child {
    border-right: none;
  }

  td:first-child {
    border-left: none;
  }

  th:last-child {
    border-right: none;
  }

  th:first-child {
    border-left: none;
  }

`
