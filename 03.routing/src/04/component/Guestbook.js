import React from 'react';

export default function Guestbook() {
    return (
        <div>
            <h1>Guestbook</h1>

            {
                /*
                <ul>
                    <li><Link to={'/'}>[Main]</Link></li>
                    <li><Link to={'gallery'}>[Gallery]</Link></li>
                    <li><Link to={'guestbook'}>[Guestbook]</Link></li>
                </ul>
                /*/
            }
            {
                <ul>
                    <li><NavLink to={'/'}>[Main]</NavLink></li>
                    <li><NavLink to={'/gallery'}>[Gallery]</NavLink></li>
                    <li><NavLink to={'/guestbook'}>[Guestbook]</NavLink></li>
                </ul>
                //*/
            }
        </div>
    );
}