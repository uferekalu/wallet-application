import Image from 'next/image';
import { Button, Form } from 'react-bootstrap';
import ViewAll from './viewAll';

export default function DashboardComp(props: any) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '250px',
          background: '#1A87DD',
          marginTop: '20px',
          padding: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Form.Label
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: 'white',
            }}
          >
            Dashboard
          </Form.Label>
          <Image
            style={{
              width: '40px',
              maxWidth: '100%',
            }}
            src="/img/profilepic.png"
            width="40"
            height="40"
            alt="pic"
          />
        </div>
        <Form.Label
          style={{
            fontSize: '11px',
            color: '#FFFFFF',
            marginTop: '37px',
          }}
        >
          Hi, Amanda!
        </Form.Label>
        <Form.Label
          style={{
            fontSize: '14px',
            color: '#FFFFFF',
            marginTop: '10px',
            fontWeight: 600,
          }}
        >
          Total Balance
        </Form.Label>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Form.Label
            style={{
              fontSize: '27px',
              fontWeight: 600,
              color: 'white',
            }}
          >
            $124.57
          </Form.Label>
          <Image
            style={{
              width: '24px',
              maxWidth: '100%',
              marginTop: '10px',
            }}
            src="/img/notification.png"
            width="24"
            height="26"
            alt="notifcation"
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '20px',
          padding: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '5px',
          }}
        >
          <Button
            style={{
              background: '#F8BB18',
              borderRadius: '10px',
              color: 'black',
              fontSize: '14px',
              width: '150px',
              border: 'none',
              height: '40px',
              fontWeight: '500',
              display: 'flex',
              gap: '5px',
            }}
          >
            <Image
              style={{
                width: '21px',
                maxWidth: '100%',
              }}
              src="/img/send_icon.png"
              width="21"
              height="21"
              alt="notifcation"
            />
            <Form.Label
              style={{
                fontSize: '12px',
                fontWeight: 500,
                color: 'black',
              }}
            >
              Send Money
            </Form.Label>
          </Button>
          <Button
            style={{
              background: '#1A87DD',
              borderRadius: '10px',
              color: 'black',
              fontSize: '14px',
              width: '150px',
              border: 'none',
              height: '40px',
              fontWeight: '500',
              display: 'flex',
              gap: '5px',
            }}
          >
            <Image
              style={{
                width: '21px',
                maxWidth: '100%',
              }}
              src="/img/request_icon.png"
              width="21"
              height="21"
              alt="notifcation"
            />
            <Form.Label
              style={{
                fontSize: '12px',
                fontWeight: 500,
                color: 'black',
              }}
            >
              Request Money
            </Form.Label>
          </Button>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '5px',
            marginTop: '20px',
          }}
        >
          <Form.Label
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: 'black',
            }}
          >
            Last Transactions
          </Form.Label>
          <Form.Label
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: '#3491DB',
            }}
          >
            View All
          </Form.Label>
        </div>
        <ViewAll
          profPic="/img/profilepic1.png"
          transactionIcon="/img/sendicon1.png"
          name="Yara Khali"
          date="Oct 14 10:24 AM"
          amount="-$15.00"
        />
        <ViewAll
          profPic="/img/profilepic2.png"
          transactionIcon="/img/requesticon2.png"
          name="Sara Ibrahim"
          date="Oct 12 02:13 PM"
          amount="+$20.50"
        />
        <ViewAll
          profPic="/img/profilepic3.png"
          transactionIcon="/img/requesticon2.png"
          name="Ahmad Ibrahim"
          date="Oct 11 01:19 AM"
          amount="+$12.40"
        />
        <ViewAll
          profPic="/img/profilepic4.png"
          transactionIcon="/img/sendicon1.png"
          name="Reem Khaled"
          date="Oct 07 09:10 PM"
          amount="-$21.30"
        />
        <ViewAll
          profPic="/img/profilepic5.png"
          transactionIcon="/img/requesticon2.png"
          name="Hiba Saleh"
          date="Oct 07 09:10 PM"
          amount="+$09.00"
        />
      </div>
    </>
  );
}
