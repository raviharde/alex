import React, { useEffect, useState } from 'react'
import PageTitle from '../components/PageTitle'
import Breadcrumbs from '../components/Breadcrumbs'
import agentData from '../data/agents-data.json'
import AgentsTable from '../components/AgentsTable'
import { HiSearch } from 'react-icons/hi'
const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Ai Agents", path: "" }
]
const columns = [
  { key: "title", label: "Title", orderBy: true },
  { key: "application", label: "Application", orderBy: false },
  { key: "actions", label: "Actions", orderBy: false },
  { key: "dateCreated", label: "Date Created", orderBy: false },
  { key: "prompt", label: "Prompt", orderBy: false },
  { key: "", label: "", orderBy: false },
]
const AiAgents = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  useEffect(() => {
    setFilteredData(agentData)
  }, [])

  const handleButtonClick = () => {

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
      <PageTitle title={'AI Agents'} actionText="Add New Project" onAction={handleButtonClick} />
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
          <div className="flex gap-0 mb-4 p-2 border border-gray-300 bg-white rounded-lg relative ">
            <select

              className="min-w-[210px] px-2 border-0 rounded w-auto focus:outline-0 active:outline-0 focus:bg-gray-100"
            >
              <option value="All">Sale Stages</option>

            </select>

          </div>
        </div>
        <AgentsTable columns={columns} data={paginatedData} currentPage={currentPage} onSelectRows={handleSelectRows} onPaginate={handlePaginate}
          totalPages={Math.ceil(filteredData.length / itemsPerPage)} />
      </div>
    </div>
  )
}

export default AiAgents