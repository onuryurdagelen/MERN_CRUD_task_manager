import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Menu, Dropdown, Button } from 'semantic-ui-react';
const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu size='large'>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}
      >
        <Link to='/'>Home</Link>
      </Menu.Item>
      <Menu.Item
        name='messages'
        active={activeItem === 'messages'}
        onClick={handleItemClick}
      />

      <Menu.Menu position='right'>
        <Dropdown item text='Language'>
          <Dropdown.Menu>
            <Dropdown.Item>English</Dropdown.Item>
            <Dropdown.Item>Russian</Dropdown.Item>
            <Dropdown.Item>Spanish</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item>
          <Button secondary>
            <Link to='/register' style={{ color: 'white' }}>
              Register
            </Link>
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
