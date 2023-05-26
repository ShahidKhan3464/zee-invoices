import React from 'react'
import { useRouter } from "next/router";
import { Button, Input, Space, Table, Tag } from "antd";
import { SearchOutlined } from '@ant-design/icons';

// here is component imports
import CustomButton from "@/customButton";
import InvoiceBuilderNavbar from "@/validUserNavbar";
import Footer from "@/footer";


import { ClientInvoicesStyle } from "styles/clientInvoicesStyle";

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
  return (
    <div>
      <InvoiceBuilderNavbar />
      <ClientInvoicesStyle>
        <div className="invoicesDetail_allInvoices container" >
          <div className="invoicesDetail_allInvoices_header" >
            <div className="invoicesDetail_allInvoices_header_content" >
              <h1>Clients</h1>
              <p>Manage your client details</p>
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
      </ClientInvoicesStyle>
      <Footer />
    </div>

  )
}

export default Index