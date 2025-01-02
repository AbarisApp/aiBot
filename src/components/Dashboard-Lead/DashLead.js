import React, { useEffect, useState } from 'react';
import './Dashcss.css';
import { FaCalendarAlt, FaPhone, FaUsers, FaClipboardList, FaCheckCircle, FaBolt } from 'react-icons/fa';
import { getLeadDashbord } from '../../api/login/Login';

const DashLead = () => {
    const [data, setData] = useState(null)
    const [data2, setData2] = useState(null)
    const getData = async () => {
        try {
            const res = await getLeadDashbord()
            setData(res.data?.user)
            setData2(res.data?.statusWise)

        } catch (error) {

        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="dashboard row">
            <div className='col-xl-4'>
                <div className="cards">
                    <div className="card-title">New Leads</div>
                    <div className='icon-contain'>
                        <div className="card-count">{data?.new_count}</div>
                        <div className="card-icon"><FaUsers /></div>
                    </div>
                </div>
            </div>


            <div className='col-xl-4'>
                <div className="cards">
                    <div className="card-title">Today Follow Up</div>
                    <div className='icon-contain'>
                        <div className="card-count">{data?.today_follow_up}</div>
                        <div className="card-icon"><FaBolt /></div>
                    </div>
                </div>
            </div>
            <div className='col-xl-4'>
                <div className="cards">
                    <div className="card-title">Missed Follow Up</div>
                    <div className='icon-contain'>
                        <div className="card-count">{data?.missed_follow_up}</div>
                        <div className="card-icon"><FaPhone /></div>
                    </div>
                </div>
            </div>
            <div className='col-xl-4'>
                <div className="cards">
                    <div className="card-title">Today Leads</div>
                    <div className='icon-contain'>
                        <div className="card-count">{data?.today_count}</div>
                        <div className="card-icon"><FaUsers /></div>
                    </div>
                </div>
            </div>
            <div className='col-xl-4'>
                <div className="cards">
                    <div className="card-title">All Leads</div>
                    <div className='icon-contain'>
                        <div className="card-count">{data?.all}</div>
                        <div className="card-icon"><FaClipboardList /></div>
                    </div>
                </div>
            </div>
            <div className='col-xl-4'>
                <div className="cards">
                    <div className="card-title">Re-Engaged</div>
                    <div className='icon-contain'>
                        <div className="card-count">2</div>
                        <div className="card-icon"><FaUsers /></div>
                    </div>
                </div>
            </div>
            {data2?.map((item) => {
                return <div className='col-xl-4'>
                    <div className="cards">
                        <div className="card-title">{item?.name}</div>
                        <div className='icon-contain'>
                            <div className="card-count">{item?.count}</div>
                            <div className="card-icon"><FaCalendarAlt /></div>
                        </div>
                    </div>
                </div>
            })}

            {/* <div className='col-xl-4'>
                <div className="cards">
                    <div className="card-title">Booked</div>
                    <div className='icon-contain'>
                        <div className="card-count">0</div>
                        <div className="card-icon"><FaCheckCircle /></div>
                    </div>
                </div>
            </div>
            <div className='col-xl-4'>
                <div className="cards">
                    <div className="card-title">Site Visit Completed</div>
                    <div className='icon-contain'>
                        <div className="card-count">0</div>
                        <div className="card-icon"><FaCalendarAlt /></div>
                    </div>
                </div>
            </div>
            <div className='col-xl-4'>
                <div className="cards">
                    <div className="card-title">MTD Site Visit Compl...</div>
                    <div className='icon-contain'>
                        <div className="card-count">0</div>
                        <div className="card-icon"><FaClipboardList /></div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default DashLead;
