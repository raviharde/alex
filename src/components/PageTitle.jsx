import React from 'react'
import CutomButton from './ui/CustomButton'

const PageTitle = ({title,actionText,onAction}) => {
  return (
    <div className='pb-3 border-b border-border flex justify-between'><h1 className='text-2xl font-semibold '>{title}</h1>
    {actionText && (
        <CutomButton onClick={onAction} >
          {actionText}
        </CutomButton>
      )}
    </div>
  )
}

export default PageTitle