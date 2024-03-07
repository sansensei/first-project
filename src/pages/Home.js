import React from 'react'

const Home = ({ menuItems }) => {
    return (
        <div className='container mt-5'>
            <div className="row">
                {
                    menuItems.map((item) => (
                        <div key={item.id} className="col-lg-6 mb-4">
                            <a className='text-dark text-decoration-none' href={item.link}>
                                <div className="card border-0 shadow-sm bg-white">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <i className="fa-solid fa-cloud fa-4x text-primary"></i>
                                            <div className='h3'>
                                                {item.title}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home