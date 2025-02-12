import React, { useState } from 'react'
import CustomCheckbox from './ui/CustomCheckbox'
import { getPaginationRange } from '../utils/pagination';
import Pagination from './Pagination';
import StatusBadge from './StatusBadge';
import { IoCallOutline } from "react-icons/io5";
import Avatar from './ui/Avatar';
import RoleList from './RoleList';
import TableActionButton from './ui/TableActionButton';


const statusMapping = {
  "Potential": "neutral",
  "Repeat Customer": "warning",
  "Fraud": "negative",
  "New Customer": "positive",
};

const ContactsTable = ({ columns, data, currentPage,  totalPages, onPaginate, onSelectRows }) => {
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
              <th className='py-2 bg-secondary-surface border-b border-gray-300 text-center'> <CustomCheckbox onChange={handleSelectAll} checked={selectedRows.length === data.length - 1}
              /></th>
              {columns.map((column) => (
                <th key={column.key} className='py-2 bg-secondary-surface border-b border-gray-300 text-left'>{column.label}</th>
              ))


              }
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr> <td className='py-3.5 px-4 border-b border-gray-300 text-center'>
                <CustomCheckbox onChange={() => handleRowSelect(row.id)} checked={selectedRows.includes(row.id)} />
              </td>
                <td className='py-3.5 px-4 border-b border-gray-300'>
                  <div className='flex gap-3'>
                    <Avatar src={row.profile} size={90} />
                    <div>
                      <h2 className='text-lg font-semibold'>{row.name}</h2>
                      <h3 className=''>{row.title}</h3>
                      <p className='mb-1'>{row.contact}
                        <a href={`tel:${row.contact.replace(/\D/g, '')}`}
                          className="text-emerald-500 bg-emerald-100/40 flex  w-6 h-6 rounded-full justify-center items-center ml-3">
                          {<IoCallOutline className='text-emerald-500' />}
                        </a></p>
                      <p className='text-xs text-gray-500'>{row.location}</p>
                    </div>
                  </div>

                </td>
                <td className='py-3.5 px-4 border-b border-gray-300'>
                  {row.company}
                </td>
                <td className='py-3.5 px-4 border-b border-gray-300'>
                  {row.experience}
                  <RoleList roles={row.roles} />
                </td>
                <td>
                  {
                    row.education.map((edu, index) => (
                      <p> {edu.field}, {edu.institution}<br /><b>({edu.title})</b><br /><span className='font-normal text-sm italic'>{edu.duration}</span></p>
                    ))
                  }
                </td>
                <td>
                  <StatusBadge
                    status={row.tag}
                    statusType={statusMapping[row.tag] || "neutral"}
                  />
                </td>
                <td> <TableActionButton>View</TableActionButton></td>
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

export default ContactsTable