import React from 'react'
import BarChartComponent from '../components/dashboard/BarChartComponent'
import Card from '../components/dashboard/Card'
import StackedLineChart from '../components/dashboard/StackedLineChart'
import StatCard from '../components/dashboard/StatCard'
import OnOffButton from '../components/ui/onOffButton'
import Avatar from '../components/ui/Avatar'
import dashboardData from '../data/dashboard-data.json' 

const Dashboard = () => {
    const keyMetricsData =  dashboardData.keyMetrics;
    const recentSalesData = dashboardData.recentSales;
    const newContactsData = dashboardData.newContacts;
    return (
        <div>
            <div className='flex gap-4 flex-row p-5'>
                {
                    keyMetricsData.map((metric)=>((
                        <Card>
                            <StatCard title={metric.title} value={metric.value} description={metric.duration} percentageChange={metric.percentageChange} />
                        </Card>
                    )))
                }
            
           
            </div>

            <div className='flex gap-4 flex-row p-5'>
                <div className='w-full'>
                    <Card heading={'Top 5 Projects'}>
                        <div >

                            <BarChartComponent />
                        </div>
                    </Card>
                </div>
                <div className='w-full flex flex-row gap-4'>
                    <Card heading={'Recent Sales'}>
                        <div className='flex flex-col gap-3 mt-4 relative '>
                            <span className='w-[2px]  mb-2 absolute top-5 left-[7px] bg-primary rounded-full' style={{ height: 'calc(100% - 50px)' }}></span>
                            {recentSalesData.map((sale)=>((
                            <div className='bg-gray-50 relative ml-8 px-3 py-2 rounded-sm'>
                                <div className='flex  justify-between font-semibold'><p>{sale.title}</p><span>{sale.value}</span></div>
                                <p className='text-xs text-gray-400'>{sale.timeSpam}</p>
                                <span className='bg-primary w-2 h-2 rounded-full absolute -left-7 top-5'></span>
                            </div>
                            )))
                        }
                           
                        </div>
                    </Card>
                    <div className='w-full flex flex-col gap-3'>
                        <Card heading={'Leads'}>
                            <div className='mt-4'>
                                <h4 className='flex justify-between'>IT Support Services - Sep 27th <OnOffButton /></h4>
                                <div className='bg-gray-100 mt-3 rounded-full h-2  flex '><div className='bg-primary rounded-full h-2  flex ' style={{ width: '20%' }}></div></div>
                                <p className='text-xs font-medium text-gray-400'>Review Requirements and Approve Proposal </p>
                            </div>
                            <div className='mt-3'>
                                <h4 className='flex justify-between'>IT Support Services - Sep 27th <OnOffButton /></h4>
                                <div className='bg-gray-100 mt-3 rounded-full h-2  flex '><div className='bg-primary rounded-full h-2  flex ' style={{ width: '20%' }}></div></div>
                                <p className='text-xs font-medium text-gray-400'>Review Requirements and Approve Proposal </p>
                            </div>
                        </Card>
                        <Card>
                            <StatCard title='Total Sales' value='$5,580,000' description='last 30 days' percentageChange='6' layout='2' />
                        </Card>
                    </div>
                </div>
            </div>
            <div className='flex gap-10 flex-row p-5'>
                <Card heading={'StackedLineChart'}>
                    <div className='pt-3'>
                        
                        <StackedLineChart />
                    </div>
                </Card>
                <div className='w-full flex flex-row gap-4'>
                    <Card heading={'Added New Contacts'}>
                        <div className='flex flex-col gap-3 mt-4 relative '>
                        {newContactsData.slice(0, 4).map((contact, index)=>((
                            <div className={`flex gap-3 ${index === 3 ? 'border-b-0':'border-b  ' } border-gray-300 pb-3`}>
                                <Avatar src={contact.profile} size={36}/>
                                <div>
                                    <h4 className='text-sm font-medium'>{contact.name}</h4>
                                    <p className='text-xs text-gray-400' >{contact.contact}</p>
                                </div>
                            </div>
                        )))}
                            
                        </div>
                    </Card>
                    <div className='w-full flex flex-col gap-3'>
                        <Card heading={'Leads'}>
                            <div className='mt-4 border-b border-gray-300 pb-3'>
                                <h4 className='flex justify-between'>IT Support Services - Sep 27th <OnOffButton /></h4>
                                <div className='bg-gray-100 mt-3 rounded-full h-2  flex mb-1 '><div className='bg-primary rounded-full h-2  flex ' style={{ width: '20%' }}></div></div>
                                <p className='text-xs font-medium text-gray-400'>Review Requirements and Approve Proposal </p>
                            </div>
                            <div className='mt-4 border-b border-gray-300 pb-3'>
                                <h4 className='flex justify-between'>IT Support Services - Sep 27th <OnOffButton /></h4>
                                <div className='bg-gray-100 mt-3 rounded-full h-2  flex mb-1 '><div className='bg-primary rounded-full h-2  flex ' style={{ width: '20%' }}></div></div>
                                <p className='text-xs font-medium text-gray-400'>Review Requirements and Approve Proposal </p>
                            </div>
                            <div className='mt-4 border-b border-gray-300 pb-3'>
                                <h4 className='flex justify-between'>IT Support Services - Sep 27th <OnOffButton /></h4>
                                <div className='bg-gray-100 mt-3 rounded-full h-2  flex mb-1 '><div className='bg-primary rounded-full h-2  flex ' style={{ width: '20%' }}></div></div>
                                <p className='text-xs font-medium text-gray-400'>Review Requirements and Approve Proposal </p>
                            </div>
                        </Card>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard