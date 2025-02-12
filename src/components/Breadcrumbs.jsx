import React from 'react'
import { GoChevronRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const Breadcrumbs = ({items}) => {
  return (
    <div className='py-2'>
        <ul className="flex items-center">
        {items.map((item, index) => (
          <li key={item.name} className="flex items-center">
            {item.path ? (
              <Link to={item.path} className="text-text-secondary hover:text-blue-600">
                {item.name}
              </Link>
            ) : (
              <span className="text-text-primary">{item.name}</span>
            )}
            {index < items.length - 1 && (
              <GoChevronRight className="mx-2 h-4 w-4 text-gray-400" />
            )}
          </li>
        ))}
      </ul>
        </div>
  )
}

export default Breadcrumbs