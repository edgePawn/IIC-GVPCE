"use client";
import React from 'react';
import * as Form from '@radix-ui/react-form';
import './styles.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as HoverCard from '@radix-ui/react-hover-card';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  return (
    
    <nav className='nav-nav'>
     
      <div className='nav-nav2'>
       <div>
       <Link href="/" passHref>
          <button className={pathname === '/' ? 'mr-4 text-blue-500' : 'mr-4'}>
            Home
          </button>
        </Link>
       </div>
      <div>
      <Link href="/explore" passHref>
          <button className={pathname === '/explore' ? 'text-blue-500' : ''}>
            Explore
          </button>
        </Link>
      </div>
      </div>
      <div className='form' >
      <Form.Root className="FormRoot">
        <Form.Field className="FormField" name="email">
          <div className="InputWrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15 15"
              fill="none"
              className="SearchIcon"
            >
              <path
                d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
            <Form.Control asChild>
              <input className="Input" type="email" required placeholder="Search" />
            </Form.Control>
          </div>
          <Form.Message className="FormMessage" match="valueMissing">
            Please Enter
          </Form.Message>
          <Form.Message className="FormMessage" match="typeMismatch">
            Please provide a valid Info
          </Form.Message>
        </Form.Field>
      </Form.Root>
      </div>
      <div className="create">
lol
      </div>
    </nav>
  );
};

export default Navbar;
