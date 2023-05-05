import Image from 'next/image';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import styles from './header.module.css';
import BtnComp from '../btnComp';
import SidebarContent from './sidebarContent';

export default function Header(props: any) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px',
          height: '100px',
          background: '#1A87DD',
        }}
      >
        <Image
          style={{
            width: '70px',
            maxWidth: '100%',
          }}
          src="/img/logo.png"
          width="70"
          height="70"
          alt="logo"
        />
        <div className={styles.walletHeader}>
          <BtnComp
            onClick={() => undefined}
            style={{
              background: '#F8BB18',
              borderRadius: '10px',
              color: '#1A1A1A',
              fontSize: '14px',
              height: '40px',
              fontWeight: '500',
            }}
          >
            Register
          </BtnComp>
        </div>
        <Image
          onClick={() => setShowMobileMenu((prevState) => !prevState)}
          className={styles.hamburger}
          style={{
            width: '20px',
            maxWidth: '100%',
          }}
          src={showMobileMenu ? '/img/close.png' : '/img/hamburger1.png'}
          width="20"
          height="20"
          alt="logo"
        />
      </div>
      <div
        className={
          showMobileMenu ? styles.mobileSidebar : styles.mobileSidebarNo
        }
      >
        <div className={styles.mobileSidebar_content}>
          <Form.Label
            style={{
              fontSize: '13px',
              fontWeight: '600',
              color: '#1A1A1A',
            }}
          >
            Register
          </Form.Label>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <SidebarContent
              imgSrc={
                props.isHome
                  ? '/img/selected_home_icon.png'
                  : '/img/home_icon.png'
              }
              caption="Home"
              handleClick={props.handleIsHome}
              isClicked={props.isHome}
            />
            <SidebarContent
              imgSrc={
                props.isTransactions
                  ? '/img/selected_transaction_icon.png'
                  : '/img/transaction_icon.png'
              }
              caption="Transaction"
              handleClick={props.handleIsTransactions}
              isClicked={props.isTransactions}
            />
            <SidebarContent
              imgSrc={
                props.isContacts
                  ? '/img/selected_contacts_icon.png'
                  : '/img/contacts_icon.png'
              }
              caption="Contacts"
              handleClick={props.handleIsContacts}
              isClicked={props.isContacts}
            />
            <SidebarContent
              imgSrc={
                props.isProfile
                  ? '/img/selected_user_icon.png'
                  : '/img/user_icon.png'
              }
              caption="Profile"
              handleClick={props.handleIsProfile}
              isClicked={props.isProfile}
            />
          </div>
        </div>
      </div>
    </>
  );
}
