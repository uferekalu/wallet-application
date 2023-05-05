import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function ViewAll(props: any) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '5px',
          marginTop: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '10px',
            }}
          >
            <Image
              style={{
                width: '40px',
                maxWidth: '100%',
              }}
              src={props.profPic}
              width="40"
              height="40"
              alt="logo"
            />
            <Image
              style={{
                width: '18px',
                maxWidth: '100%',
                marginTop: '25px',
                marginLeft: '-20px',
              }}
              src={props.transactionIcon}
              width="18"
              height="18"
              alt="logo"
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Form.Label
                style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'black',
                }}
              >
                {props.name}
              </Form.Label>
              <Form.Label
                style={{
                  fontSize: '11px',
                  fontWeight: 400,
                  marginTop: '-5px',
                }}
              >
                {props.date}
              </Form.Label>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Form.Label
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: 'black',
            }}
          >
            {props.amount}
          </Form.Label>
        </div>
      </div>
    </>
  );
}
