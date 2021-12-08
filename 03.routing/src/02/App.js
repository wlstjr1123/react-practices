import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
    const [route, setRoute] = useState({page: '/'});

    useEffect(() => {
        const handlePopState = (e) => setRoute(e.state);

        window.addEventListener('popstate', handlePopState);
        return () => {
            window.addEventListener('popstate', handlePopState);
        }
    }, [])

    const handleLinkClick = (e) => {
        e.preventDefault();

        const url = e.target.href.substr(e.target.href.lastIndexOf('/'));
        window.history.pushState({page: url}, e.target.text, url);
        setRoute({page: url});
    }

    const router = function () {
        let component = null;
        switch (route.page) {
            case '/':
                component = <Main/>;
                break;
            case '/gallery':
                component = <Gallery/>;
                break;
            case '/guestbook':
                component = <Guestbook/>;
                break;
        }

        return component;
    };

    return (
        <div>
            {
                (() => {
                    switch(route.page){
                        case '/':
                            return <Main />
                        case '/guestbook':
                            return <Guestbook />
                        case '/gallery':
                            return <Gallery />
                        default:
                            return null;
                    }
                })()
            }
            <div>{route.page}</div>
            <ul>
                <li><a href={'/'} onClick={handleLinkClick}>[Main]</a></li>
                <li><a href={'/gallery'} onClick={handleLinkClick}>[Gallery]</a></li>
                <li><a href={'/guestbook'} onClick={handleLinkClick}>[Guestbook]</a></li>
            </ul>
        </div>
    )
}