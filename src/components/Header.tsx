import React from 'react';
import { Button } from 'antd';

export const Header: React.FC = () => {
    return (
        <div className="header">
            <a className="nav-about">About</a>
            <a className="nav-hospital">Find hospitals</a>
            <Button className="btn-quote" type="default" shape="round">GET A FREE QUOTE</Button>
        </div>
    )
}
