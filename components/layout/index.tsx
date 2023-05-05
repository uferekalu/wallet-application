import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from './header';
import styles from '@/styles/Home.module.css';
import SidebarContent from './sidebarContent';

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  const [isHome, setIsHome] = useState(false);
  const [isTransactions, setIsTransactions] = useState(false);
  const [isContacts, setIsContacts] = useState(false);
  const [isProfile, setIsProfile] = useState(false);

  const handleIsHome = () => {
    setIsHome(true);
    setIsTransactions(false);
    setIsContacts(false);
    setIsProfile(false);
  };

  const handleIsTransactions = () => {
    setIsTransactions(true);
    setIsHome(false);
    setIsContacts(false);
    setIsProfile(false);
  };

  const handleIsContacts = () => {
    setIsContacts(true);
    setIsHome(false);
    setIsTransactions(false);
    setIsProfile(false);
  };

  const handleIsProfile = () => {
    setIsProfile(true);
    setIsHome(false);
    setIsTransactions(false);
    setIsContacts(false);
  };

  useEffect(() => {
    if (isTransactions) {
      setIsHome(false);
      setIsContacts(false);
      setIsProfile(false);
    } else if (isContacts) {
      setIsHome(false);
      setIsTransactions(false);
      setIsProfile(false);
    } else if (isProfile) {
      setIsHome(false);
      setIsTransactions(false);
      setIsContacts(false);
    } else {
      setIsHome(true);
    }
  }, [isContacts, isProfile, isTransactions]);
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          margin: 0,
          padding: 0,
        }}
      >
        <Header
          handleIsHome={handleIsHome}
          isHome={isHome}
          handleIsTransactions={handleIsTransactions}
          isTransactions={isTransactions}
          handleIsContacts={handleIsContacts}
          isContacts={isContacts}
          handleIsProfile={handleIsProfile}
          isProfile={isProfile}
        />
        <div className={styles.container}>
          <div className={styles.desktopSidebar}>
            <Image
              style={{
                width: '90px',
                maxWidth: '100%',
                marginTop: '50px',
                // marginLeft: "40px"
              }}
              src="/img/logo.png"
              width="90"
              height="90"
              alt="logo"
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <SidebarContent
                imgSrc={
                  isHome ? '/img/selected_home_icon.png' : '/img/home_icon.png'
                }
                caption="Home"
                handleClick={handleIsHome}
                isClicked={isHome}
              />
              <SidebarContent
                imgSrc={
                  isTransactions
                    ? '/img/selected_transaction_icon.png'
                    : '/img/transaction_icon.png'
                }
                caption="Transaction"
                handleClick={handleIsTransactions}
                isClicked={isTransactions}
              />
              <SidebarContent
                imgSrc={
                  isContacts
                    ? '/img/selected_contacts_icon.png'
                    : '/img/contacts_icon.png'
                }
                caption="Contacts"
                handleClick={handleIsContacts}
                isClicked={isContacts}
              />
              <SidebarContent
                imgSrc={
                  isProfile
                    ? '/img/selected_user_icon.png'
                    : '/img/user_icon.png'
                }
                caption="Profile"
                handleClick={handleIsProfile}
                isClicked={isProfile}
              />
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
