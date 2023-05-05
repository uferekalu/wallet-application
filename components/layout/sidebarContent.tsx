import Image from 'next/image';
import { Form } from 'react-bootstrap';
import styles from '@/styles/Home.module.css';

export default function SidebarContent(props: any) {
  return (
    <>
      <div
        onClick={props.handleClick}
        className={styles.sidebarContent}
        style={
          props.isClicked
            ? {
                display: 'flex',
                gap: '10px',
                marginTop: '40px',
                cursor: 'pointer',
                padding: '10px',
                background: 'rgb(237, 247, 148)',
                height: '40px',
                borderRadius: '8px',
              }
            : {
                display: 'flex',
                gap: '10px',
                marginTop: '40px',
                cursor: 'pointer',
              }
        }
      >
        <Image
          style={{
            width: '20px',
            maxWidth: '100%',
            cursor: 'pointer',
          }}
          src={props.imgSrc}
          width="20"
          height="20"
          alt="logo"
        />
        <Form.Label
          style={{
            fontSize: '14px',
            fontWeight: 600,
            color: 'black',
            cursor: 'pointer',
          }}
        >
          {props.caption}
        </Form.Label>
      </div>
    </>
  );
}
