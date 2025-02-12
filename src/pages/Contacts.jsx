import React, { useEffect, useState } from 'react'
import PageTitle from '../components/PageTitle'
import Breadcrumbs from '../components/Breadcrumbs'
import data from '../data/contacts-data.json'
import ContactsTable from '../components/ContactsTable'
import { HiSearch } from 'react-icons/hi'

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Contacts', path: '' },
]
const columns = [
  { key: "Name", label: "Name" },
  { key: "Company", label: "Company" },
  { key: "Experience(s)", label: "Stage" },
  { key: "Education", label: "Education" },
  { key: "Tags", label: "Tags" },
  { key: "action", label: "" },
 
];

const Contacts = () => {
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
      setFilteredData(data)
  
    }, [])
    const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 8;

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePaginate = (page) => {
    setCurrentPage(page);
  };
  const handleSelectRows = (selectedRows) => {
    console.log("Selected Rows:", selectedRows);
  };
  const handleButtonClick = ()=>{
    console.log('Title button click')
  }
  return (
    <div className="">
      <PageTitle title={'Contacts'} actionText="Create New" onAction={handleButtonClick} />
      <Breadcrumbs items={breadcrumbItems} />
      <div className='mt-3'>
        <div className='flex gap-4'>
                  <div className="flex gap-0 mb-4 p-2 border border-gray-300 bg-white rounded-lg relative ">
                    <select
        
                      className="px-2 border-0 rounded w-auto focus:outline-0 active:outline-0 focus:bg-gray-100"
                    >
                      <option value="All">All</option>
        
                    </select>
                    <span className='height-full w-px bg-gray-400 ml-2 mr-2'></span>
                    <div className='relative pr-8'>
                      <input
                        type="text"
                        placeholder="Search by project name or phone ..."
        
        
                        className="border-0 rounded-none px-2 mr-2 w-64 focus:outline-0 active:outline-0 focus:bg-gray-100"
                      />
                      <HiSearch size='20px' className='absolute right-4 top-[2px] text-gray-400' />
                    </div>
                  </div>
                  
                </div>
      
      <ContactsTable columns={columns} data={paginatedData} currentPage={currentPage} onSelectRows={handleSelectRows} onPaginate={handlePaginate}
        totalPages={Math.ceil(filteredData.length / itemsPerPage)} />
        </div>
    </div>
  )
}

export default Contacts