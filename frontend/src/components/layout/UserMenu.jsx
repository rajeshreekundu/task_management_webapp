import React, { useEffect, useState } from "react";

const UserMenu = ({ user, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    const handleClickOutSide = ((evt)=>{
      if(!evt.target.closest('.dropdown')){
        setIsOpen(false)
      }
    })

    document.addEventListener('click', handleClickOutSide);

    return () =>{
      document.removeEventListener('click', handleClickOutSide)
    }
  },[])

  return (
    <div className="dropdown">
      <button
        type="button"
        className="dropdown-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {user.avatar ? (
          <div className="dropdown-avatar">{user.avatarText}</div>
        ) : (
          <span>{user.mainmenu}</span>
        )}
      </button>

      {isOpen && (
        <>
          <ul className="dropdown-menu">
            {children}
          </ul>
        </>
      )}
    </div>
  );
};

export default UserMenu;

// i write state in this component, is it okay! or pass the state where i need the dropdown component?? and one thing here i want to add one thing more when click on outside of dropdown it should be no displaying