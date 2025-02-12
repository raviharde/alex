import React, { useEffect, useState } from 'react'
import ProjectsTable from '../components/ProjectsTable'
import data from '../data/projectss-data.json'
import PageTitle from '../components/PageTitle';
import Breadcrumbs from '../components/Breadcrumbs';
import { HiSearch } from "react-icons/hi";
import CustomButton from '../components/ui/CustomButton';

const Projects = () => {
  const columns = [
    { key: "type", label: "Type" },
    { key: "stage", label: "Stage" },
    { key: "account", label: "Account" },
    { key: "contractValue", label: "Contract Value" },
    { key: "qaDate", label: "Q&A Date" },
    { key: "closeDate", label: "Close Date" },
    { key: "leads", label: "Leads" },
    { key: "reports", label: "Reports" },
    { key: "complaints", label: "Complaints" },
  ];
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Reports', path: '/report' },
  ]

  const [filteredData, setFilteredData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedStage, setSelectedStage] = useState("All");

  const itemsPerPage = 8;


  useEffect(() => {
    setFilteredData(data)

  }, [])



  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePaginate = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    handleFilterAndSearch();
  }, [query, selectedStage]);

  const handleFilterAndSearch = () => {
    let filtered = data;

    // Apply stage filter
    if (selectedStage !== "All") {
      filtered = filtered.filter((row) => row.leads === selectedStage);
    }

    // Apply search query if it has more than 3 characters
    if (query.length > 2) {
      filtered = filtered.filter((row) =>
        Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(query.toLowerCase())
        )
      );
    }

    setFilteredData(filtered);
    setCurrentPage(1);
  };


  const handleButtonClick = () => {
    alert("Action Button Clicked!");
  };
  const handleSelectRows = (selectedRows) => {
    console.log("Selected Rows:", selectedRows);
  };
  return (
    <div className="">
      <PageTitle title={'Projects'} actionText="Create New" onAction={handleButtonClick} />
      <Breadcrumbs items={breadcrumbItems} />
      <div className='flex mt-3 gap-4'>
        <div className="flex gap-0 mb-4 p-2 border border-gray-400 bg-white rounded-lg relative ">
          <select
            onChange={(e) => setSelectedStage(e.target.value)}
            className="px-2 border-0 rounded w-[100px] focus:outline-0 active:outline-0 focus:bg-gray-100" 
          >
            <option value="All">All</option>
            <option value="Not Interested">Not Interested</option>
            <option value="Negotiation">Negotiation</option>
            <option value="Deal Closed">Deal Closed</option>
          </select>
          <span className='height-full w-px bg-gray-400 ml-2 mr-2'></span>
          <div className='relative pr-8'>
          <input
            type="text"
            placeholder="Search by project name or phone ..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-0 rounded-sm px-2 mr-2 w-64 focus:outline-0 active:outline-0 focus:bg-gray-100"
          />
          <HiSearch size='20px' className='absolute right-4  top-[2px] text-gray-400' />
          </div>
        </div>
        <CustomButton disabled={true} >Download Files</CustomButton>
      </div>
      <ProjectsTable columns={columns} data={paginatedData} currentPage={currentPage} onSelectRows={handleSelectRows} onPaginate={handlePaginate}
        totalPages={Math.ceil(filteredData.length / itemsPerPage)} />
    </div>
  )
}

export default Projects