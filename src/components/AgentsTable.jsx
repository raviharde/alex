import React, { useState } from 'react'
import CustomCheckbox from './ui/CustomCheckbox'
import { getPaginationRange } from '../utils/pagination';
import Pagination from './Pagination';
import StatusBadge from './StatusBadge';
import magicIcon from '../assets/magic-icon.svg'
import TableActionButton from './ui/TableActionButton';
const statusMapping = {
  "Lead": "positive",
  "Negotiation": "warning",
  "Not Interested": "negative",
  "default": "neutral",
};

const AgentsTable = ({ columns, data, currentPage, totalPages, onPaginate,onSelectRows }) => {
    const [selectedRows, setSelectedRows] = useState([]);
    const handleRowSelect = (rowId) => {
        const isSelected = selectedRows.includes(rowId);
        console.log(rowId);
        if (isSelected) {
          setSelectedRows(selectedRows.filter((id) => id !== rowId));
        } else {
          setSelectedRows([...selectedRows, rowId]);
        }
        onSelectRows(selectedRows);
      };
    const handleSelectAll = () => {
        if (selectedRows.length === data.length) {
          setSelectedRows([]);
        } else {
          setSelectedRows(data.map((row) => row.id));
        }
        onSelectRows(selectedRows);
      };
    
    const paginationRange = getPaginationRange(currentPage, totalPages);

    return (
        <>
            <div className=' border border-gray-300 rounded-lg overflow-hidden'>
                <table className='min-w-full bg-white'>
                    <thead>
                        <tr>
                            <th className='py-2 px-2 bg-secondary-surface border-b border-gray-300 text-center'> <CustomCheckbox  onChange={handleSelectAll}  checked={selectedRows.length === data.length -1}
                            /></th>
                            {columns.map((column) => (
                                <th key={column.key} className='py-2 px-2 bg-secondary-surface border-b border-gray-300 text-left'>{column.label}</th>
                            ))


                            }
                             <th className='py-2 px-2 bg-secondary-surface border-b border-gray-300 text-center'>
                             
                             </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr> <td className='py-3.5 px-2 border-b border-gray-300 text-center'>
                                <CustomCheckbox  onChange={() => handleRowSelect(row.id)}  checked={selectedRows.includes(row.id)} />
                            </td>
                                {
                                    columns.map((column) => (
                                        <td key={column.key} className="py-2 px-2 border-b border-gray-300">
                                            {column.key === "actions" ? (
                                                 <StatusBadge
                                                 status={row[column.key]}
                                                 statusType={row[column.key] < 10 ? "positive" :row[column.key] < 20 ?"negative": "neutral"}
                                               />
                                            ) : column.key === "magic" ? ( row[column.key] ? <img src={magicIcon}/>: ''): (
                                                row[column.key]
                                            )}
                                        </td>
                                    ))
                                }
                                <td className='py-3.5 px-2 border-b border-gray-300 text-center'>
                                <TableActionButton>View</TableActionButton>
                                </td>
                            </tr>
                        ))


                        }
                    </tbody>
                </table>
            </div>

            <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginationRange={paginationRange}
        onPaginate={onPaginate}
      />
        </>
    )
}

export default AgentsTable