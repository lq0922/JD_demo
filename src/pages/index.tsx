import React, { useState, useEffect } from 'react';
import BrandCarnival from './brandCarnival';
import './index.css';

const HomePage: React.FC = () => {
    const [carnivalBottom, setCarnivalBottom] = useState<string | number>(localStorage.getItem('carnivalBottom') || '-36.25rem');
    const [isScrolling, setIsScrolling] = useState<boolean>(JSON.parse(localStorage.getItem('isScrolling') || 'false'));

    useEffect(() => {
        let scrollingTimer: NodeJS.Timeout | null = null;

        const handleScroll = () => {
            if (!isScrolling) {
                setCarnivalBottom('-50rem');
                setIsScrolling(true);
            }

            if (scrollingTimer) {
                clearTimeout(scrollingTimer);
            }
            scrollingTimer = setTimeout(() => {
                setCarnivalBottom('-36.25rem');
                setIsScrolling(false);
                localStorage.setItem('carnivalBottom', '-36.25rem');
                localStorage.setItem('isScrolling', JSON.stringify(true));
            }, 200);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            if (scrollingTimer) {
              clearTimeout(scrollingTimer);
            }
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolling]);

    return (
        <div className='home-page'>
            <div 
                className='home-content' 
                style={{ height: '200vh' }}
            >
            </div>
            <div 
                className={`brand-Carnival ${isScrolling ? 'animate' : ''}`} 
                style={{ bottom: carnivalBottom as string }}
                onClick={() => setCarnivalBottom('0')}
            >
                {carnivalBottom === '0' && (
                    <div 
                        className='close-icon' 
                        onClick={(event) => {
                            event.stopPropagation();
                            setCarnivalBottom('-36.25rem');
                            localStorage.setItem('carnivalBottom', '-36.25rem');
                        }}
                    >
                        X
                    </div>
                )}
                <BrandCarnival />
            </div>
        </div>
    );
};

export default HomePage;