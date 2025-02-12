import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import PageTitle from '../components/PageTitle'
import LeadsTable from '../components/LeadsTable'
import LeadsData from '../leads-data.json'
import { HiSearch } from 'react-icons/hi'

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'Contacts', path: '' },
]

const columns = [
  { key: "contact", label: "Contact", orderBy: true },
  { key: "company", label: "Company", orderBy: false },
  { key: "stage", label: "Stage", orderBy: false },
  { key: "leadDateCreated", label: "Date Created", orderBy: false },
  { key: "notes", label: "Notes", orderBy: false },
  { key: "magic", label: "", orderBy: false },
]

const Leads = () => {
  const [filteredData, setFilteredData] = useState([]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  useEffect(() => {
    setFilteredData(LeadsData)

  }, [])
  const handleButtonClick = () => {
    console.log('hi')
  }
  const handleSelectRows = (selectedRows) => {
    console.log("Selected Rows:", selectedRows);
  };
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePaginate = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <PageTitle title={'Leads'} actionText="Add New Project" onAction={handleButtonClick} />
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
                       <div className="flex gap-0 mb-4 p-2 border border-gray-300 bg-white rounded-lg relative ">
            <select

              className="min-w-[210px] px-2 border-0 rounded w-auto focus:outline-0 active:outline-0 focus:bg-gray-100"
            >
              <option value="All">Company</option>

            </select>

          </div>
                     </div>
        <LeadsTable columns={columns} data={paginatedData} currentPage={currentPage} onSelectRows={handleSelectRows} onPaginate={handlePaginate}
        totalPages={Math.ceil(filteredData.length / itemsPerPage)}  />
      </div>
    </div>
  )
}

export default Leads