import React from 'react';
import Link from 'next/link';

type ScrollLinkProps = {
    to: string;
    children: React.ReactNode;
};

const ScrollLink: React.FC<ScrollLinkProps> = ({ to, children }) => {
    

    return (
        <Link href={`${to}`} scroll={true}>
            {/* <a onClick={handleClick}>{}</a> */}
            {children}
        </Link>
    );
};

export default ScrollLink;
