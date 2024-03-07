import React from 'react'

const Header = ({ menuItems }) => {
    return (
        <div className="shadow bg-white py-4" >
            <div className='container'>
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <img src="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/12/logo-wavy.png" alt="logo" width="175px" />
                    </div>
                    <ul className='d-flex list-unstyled mb-0'>
                        {
                            menuItems.map((item) => (
                                <li key={item.id} className='me-4'>
                                    <a className='text-decoration-none text-dark' href={item.link}>
                                        {item.title}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header