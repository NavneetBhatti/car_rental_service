import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebarr d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: 280 }}>
    {/* <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
        <span className="fs-4">Sidebar</span>
    </a>
    <hr /> */}
    <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
            <a href="Admin_addcar" className="nav-link  text-white" aria-current="page">
                <svg className="bi me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
                Add car
            </a>
        </li>
        <li>
            <a href="#" className="nav-link text-white">
                <svg className="bi me-2" width={16} height={16}><use xlinkHref="#speedometer2" /></svg>
                bookings
            </a>
        </li>
        <li>
            <a href="Admin_userlist" className="nav-link text-white">
                <svg className="bi me-2" width={16} height={16}><use xlinkHref="#table" /></svg>
                users
            </a>
        </li>

    </ul>


</div>
  );
};

export default Sidebar;
