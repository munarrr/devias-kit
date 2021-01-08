import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { columns } from './const';
import {rows} from './const'

const TableData = ({ users }) => {
  return <DataGrid rows={users} columns={columns} pageSize={6} />;
};

export default TableData;
