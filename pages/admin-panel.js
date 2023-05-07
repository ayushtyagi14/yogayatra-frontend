import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '../components/AdminPanel/Sidebar'
import Navbar from '../components/AdminPanel/Navbar';
import { useStateContext } from '../context/StateContext';
import MyHead from '../components/MyHead';
import Users from '../components/AdminPanel/Pages/Users/Users';
import Sessions from '../components/AdminPanel/Pages/Sessions/Session';
import Events from '../components/AdminPanel/Pages/Events/Events'
import Testimonial from '../components/AdminPanel/Pages/Testimonials/Testimonial'
import Instructors from '../components/AdminPanel/Pages/Instructors/Instructors'
import Blogs from '../components/AdminPanel/Pages/Blogs/Blogs'
import Faq from '../components/AdminPanel/Pages/FAQ/Faq'
import Gallery from '../components/AdminPanel/Pages/Gallery/Gallery'


const AdminPanel = () => {
    const [activePage, setActivePage] = useState('');
    const [width, setWidth] = useState(null);
    const [isAdmin, setIsAdmin] = useState(true)

    const { isSidebarOpen, setIsSidebarOpen } = useStateContext();

    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePageChange = (pageName) => {
        setActivePage(pageName);
    };

    const renderPage = () => {
        if (activePage === 'users') {
            return <Users />;
        } else if (activePage === 'sessions') {
            return <Sessions />;
        } else if (activePage === 'events') {
            return <Events />;
        } else if (activePage === 'testimonials') {
            return <Testimonial />;
        } else if (activePage === 'instructors') {
            return <Instructors />;
        } else if (activePage === 'blogs') {
            return <Blogs />;
        } else if (activePage === 'gallery') {
            return <Gallery />;
        } else if (activePage === 'faq') {
            return <Faq />;
        } else {
            return <Users />;
        }
    };

    const router = useRouter()

    useEffect(() => {
        setIsAdmin(localStorage.getItem('isAdmin'))
    }, [])

    if (!isAdmin) {
        router.push('/admin-login')
    }

    return (
        <>
            <MyHead title='Admin Panel | Yogayatra' />
            <Sidebar onPageChange={handlePageChange} />
            <div className={`${isSidebarOpen ? "md:ml-[12.5rem]" : "ml-[1rem]"} `}>
                <Navbar />
                {renderPage()}
            </div>
        </>
    );
}

export default AdminPanel;
