import React, { useState } from 'react'
import CustomCheckbox from './ui/CustomCheckbox'
import { getPaginationRange } from '../utils/pagination';
import Pagination from './Pagination';
import StatusBadge from './StatusBadge';

const statusMapping = {
  "Deal Closed": "positive",
  Negotiation: "warning",
  "Not Interested": "negative",
  Default: "neutral",
};

const ProjectsTable = ({ columns, data, currentPage, totalPages, onPaginate,onSelectRows }) => {
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
                                            {column.key === "leads" ? (
                                                 <StatusBadge
                                                 status={row[column.key]}
                                                 statusType={statusMapping[row[column.key]] || "neutral"}
                                               />
                                            ) : (
                                                row[column.key]
                                            )}
                                        </td>
                                    ))
                                }
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

export default ProjectsTable