import React from "react";
import { useRouter } from "next/router";
import { Button, Input, Space, Table, Tag } from "antd";
import { SearchOutlined } from '@ant-design/icons';


// here is component imports
import CustomButton from "@/customButton";
import InvoiceBuilderNavbar from "@/validUserNavbar";
import Footer from "@/footer";

import { MyInvoicesStyle } from "styles/myInvoicesStyle";


const columns = [
  {
    title: 'Invoice #',
    dataIndex: 'invoiceno',
    key: 'invoiceno',
  },
  {
    title: 'Recipient',
    dataIndex: 'recipient',
    key: 'recipient',
  },
  {
    title: 'Created',
    dataIndex: 'created',
    key: 'created',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
  },
  {
    title: '',
    key: 'action',
    dataIndex: 'action',
    render: () => (
      <div className="invoicesDetail_allInvoices_table_btns" >
        <Button>Deleted</Button>
        <Button>View</Button>
      </div>
    ),
  },
 
];
const data = [
  {
    key: '1',
    invoiceno: '0012',
    recipient: 'Jane Cooper',
    created: 'Sep 23rd, 2022',
    total: '$500.00',
  },
  {
    key: '2',
    invoiceno: '0012',
    recipient: 'Jane Cooper',
    created: 'Sep 23rd, 2022',
    total: '$500.00',
  },
  {
    key: '3',
    invoiceno: '0012',
    recipient: 'Jane Cooper',
    created: 'Sep 23rd, 2022',
    total: '$500.00',
  },
];
const Index = () => {
  const route = useRouter();

  return (
    <div>
      <InvoiceBuilderNavbar />
      <MyInvoicesStyle  >
        {/* <EmptyInvoicesSection /> */}

        <div className="invoicesDetail container" >
          <div className="invoicesDetail_header" >
            <h1>Recent Invoices</h1>
            <Button className="invoicesDetail_header_newInvoiceButton" >New Invoice</Button>
          </div>
          <div className="invoicesDetail_recentinvoices" >
            <div className="invoicesDetail_recentinvoices_invoice" >
              <div className="invoicesDetail_recentinvoices_invoice_name" >
                <h6>J</h6>
                <p>#001</p>
              </div>
              <div className="invoicesDetail_recentinvoices_invoice_totalInvoices" >
                <p>Total</p>
                <h1>2,350.00</h1>
                <h2>USD</h2>
              </div>
              <div className="invoicesDetail_recentinvoices_invoice_time" >
                <h3>John Doe</h3>
                <p>2 hours ago</p>
              </div>
            </div>
          </div>
          <div className="invoicesDetail_allInvoices" >
            <div className="invoicesDetail_allInvoices_header" >
              <div className="invoicesDetail_allInvoices_header_content" >
                <h1>All Invoices</h1>
                <p>Manage your invoices</p>
              </div>
              <Button className="invoicesDetail_allInvoices_header_btn" >Add New</Button>
            </div>
            <div className="invoicesDetail_allInvoices_search" >
              <div className="invoicesDetail_allInvoices_search_input" >
                <Input size="small" placeholder="small size" prefix={<SearchOutlined />} />
              </div>
            </div>
            <div className="invoicesDetail_allInvoices_dataTable" >
              <Table columns={columns} dataSource={data} pagination={false} />
            </div>
          </div>
        </div>
      </MyInvoicesStyle>
      <Footer />
    </div>
  );
};

const EmptyInvoicesSection = () => {
  const navigateHandler = () => {
    route.push("/generateinvoice");
  };

  return (
    <div className='emptyInvoices_body container'>
      <h1>My Invoices</h1>
      <div className='emptyInvoices_body_content'>
        <div className='emptyInvoices_body_content_emptyInvoicesCard'>
          <div className='emptyInvoices_body_content_emptyInvoicesCard_image'>
            <picture>
              <img src='images/invoicesicon.svg' alt='invoicesicon.svg' />
            </picture>
          </div>
          <div className='emptyInvoices_body_content_emptyInvoicesCard_heading'>
            <h1>Create your first Invoice</h1>
          </div>
          <div className='emptyInvoices_body_content_emptyInvoicesCard_desc'>
            <p>
              Lorem ipsum dolor sit amet consectetur. Venenatis turpis sed sed
              magna facilisis est morbi sagittis. Eget elementum volutpat enim
              rhoncus id vitae.
            </p>
          </div>
          <div className='emptyInvoices_body_content_emptyInvoicesCard_btn'>
            <CustomButton
              clicked={navigateHandler}
              title='New Invoice'
              color='#FFFFFF'
              bg={"#333333"}
              p={"10px 13px"}
              fs='20px'
              lh='28px'
              width='100%'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
