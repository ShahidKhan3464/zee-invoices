import React, { useState, useEffect } from "react";
import Footer from "@/footer";
import Image from "next/image";
import Sidebar from "@/sidebar";
import Pagination from "@/pagination";
import Navbar from "@/dashboardNavbar";
import { useRouter } from "next/router";
import CustomButton from "@/customButton";
import { Button, Input, Table } from "antd";
import { useAppContext } from "src/context/state";
import { StyledMyInvoices, StyledEmptyInvoice } from "styles/myInvoices";
import { GrayTableCell, StyledDashboardContainer, primaryColor } from "styles/global";

const EmptyInvoiceSection = () => {

  const navigateHandler = () => {
    route.push("/generateinvoice")
  }

  return (
    <StyledEmptyInvoice className="container">
      <div className='emptyInvoice_body_content'>
        <div className='emptyInvoice_body_content_emptyInvoiceCard'>
          <div className='emptyInvoice_body_content_emptyInvoiceCard_image'>
            <img src='images/invoice-icon-blue.svg' alt='invoice-icon' />
          </div>
          <div className='emptyInvoice_body_content_emptyInvoiceCard_heading'>
            <h1>Create your first Invoice</h1>
          </div>
          <div className='emptyInvoice_body_content_emptyInvoiceCard_desc'>
            <p>
              Lorem ipsum dolor sit amet consectetur. Venenatis turpis sed sed
              magna facilisis est morbi sagittis. Eget elementum volutpat enim
              rhoncus id vitae.
            </p>
          </div>
          <div className='emptyInvoice_body_content_emptyInvoiceCard_btn'>
            <CustomButton
              fs='18px'
              lh='22px'
              width='100%'
              color='#FFFFFF'
              p={"14px 13px"}
              bg={primaryColor}
              title='Create Invoice'
              clicked={navigateHandler}
            />
          </div>
        </div>
      </div>
    </StyledEmptyInvoice>
  )
}

const Index = () => {
  const itemsPerPage = 5
  const route = useRouter()
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  // const totalPages = Math.ceil(allData.length / itemsPerPage)
  const { sidebarVisibal, setSidebarVisibal } = useAppContext()

  const columns = [
    {
      key: 'invoiceNo',
      title: 'Invoice #',
      // title: (
      //   <div>
      //     Invoice #
      //     <div className="sort-icons">
      //       <CaretUpOutlined className="sort-icon-up" />
      //       <CaretDownOutlined className="sort-icon-down" />
      //     </div>
      //   </div>
      // ),
      dataIndex: 'invoiceNo',
      sorter: (a, b) => a.invoiceNo - b.invoiceNo,
      sorter: false
      // onHeaderCell: (column) => ({
      //   onClick: () => {
      //     console.log(column)
      //     column.onHeaderCell(column);
      //   },
      // }),
    },
    {
      key: 'recipient',
      title: 'Recipient',
      dataIndex: 'recipient',
      sorter: (a, b) => a.recipient.length - b.recipient.length,
    },
    {
      key: 'created',
      title: 'Created',
      dataIndex: 'created',
      sorter: (a, b) => a.created - b.created,
      render: (text) => <GrayTableCell>{text}</GrayTableCell>,
    },
    {
      key: 'total',
      title: 'Total',
      dataIndex: 'total',
      sorter: (a, b) => a.total - b.total,
      render: (text) => <span style={{ fontWeight: 700 }}>${text}</span>,
    },
    {
      title: '',
      key: 'action',
      dataIndex: 'action',
      render: (item, record) => (
        <div className="invoicesDetail_allInvoices_table_btns" >
          <Button type="button">Delete</Button>
          <Button type="button" onClick={() => route.push(`/view-invoice/${record.invoiceNo}`)}>View</Button>
          <Button type="button">Download</Button>
        </div>
      )
    }
  ]

  const allData = [
    {
      key: '1',
      total: '900.00',
      invoiceNo: '0012',
      recipient: 'Jane Cooper',
      created: 'Sep 23rd, 2022',
    },
    {
      key: '2',
      total: '1000.00',
      invoiceNo: '0011',
      recipient: 'James Rage',
      created: 'Sep 23rd, 2022',
    },
    {
      key: '3',
      total: '700.00',
      invoiceNo: '0012',
      recipient: 'Jonny Devil',
      created: 'Sep 23rd, 2022',
    },
    {
      key: '4',
      total: '800.00',
      invoiceNo: '0012',
      recipient: 'Kevil Broad',
      created: 'Sep 23rd, 2022',
    },
    {
      key: '5',
      invoiceNo: '0010',
      total: '500.00',
      recipient: 'Jane Cooper',
      created: 'Sep 23rd, 2022',
    },
    {
      key: '6',
      invoiceNo: '0010',
      total: '500.00',
      recipient: 'Jane Cooper',
      created: 'Sep 23rd, 2022',
    },
    {
      key: '7',
      invoiceNo: '0010',
      total: '500.00',
      recipient: 'Jane Cooper',
      created: 'Sep 23rd, 2022',
    },
    {
      key: '8',
      invoiceNo: '0010',
      total: '500.00',
      recipient: 'Jane Cooper',
      created: 'Sep 23rd, 2022',
    },
  ]

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const nextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) setCurrentPage(currentPage + 1)
  }

  useEffect(() => {
    setData(allData)
  }, [])

  return (
    <StyledDashboardContainer sidebarVisibal={sidebarVisibal}>
      <div>
        <Sidebar sidebarVisibal={sidebarVisibal} />
      </div>
      <div className="content">
        <Navbar
          sidebarVisibal={sidebarVisibal}
          setSidebarVisibal={setSidebarVisibal}
        />
        {/* <EmptyInvoiceSection /> */}
        <StyledMyInvoices>
          <div className="invoicesDetail">
            <div className="invoicesDetail_header">
              <h1>Recent Invoices</h1>
            </div>
            <div className="invoicesDetail_recentInvoices">
              <div className="invoicesDetail_recentInvoices_invoice">
                <div className="invoicesDetail_recentInvoices_invoice_name">
                  <h6>J</h6>
                  <p>#001</p>
                </div>
                <div className="invoicesDetail_recentInvoices_invoice_to">
                  <p>To</p>
                  <h1>Jane Cooper</h1>
                </div>
                <div className="invoicesDetail_recentInvoices_invoice_totalAmount">
                  <h3>2,350.00</h3>
                  <p>USD</p>
                </div>
              </div>

              <div className="invoicesDetail_recentInvoices_invoice">
                <div className="invoicesDetail_recentInvoices_invoice_name">
                  <h6>W</h6>
                  <p>#001</p>
                </div>
                <div className="invoicesDetail_recentInvoices_invoice_to">
                  <p>To</p>
                  <h1>William Brown</h1>
                </div>
                <div className="invoicesDetail_recentInvoices_invoice_totalAmount">
                  <h3>8,260.00</h3>
                  <p>USD</p>
                </div>
              </div>
            </div>
            <div className="invoicesDetail_allInvoices">
              <div className="invoicesDetail_allInvoices_header">
                <div className="invoicesDetail_allInvoices_header_content">
                  <h1>All Invoices</h1>
                  <p>Manage your invoices</p>
                </div>
                <Button
                  type="primary"
                  onClick={() => route.push('/new-invoice')}
                  className="invoicesDetail_allInvoices_header_btn"
                  icon={<Image width={16} height={16} src="images/plus-icon.svg" alt="plus-icon" />}
                >
                  Create New
                </Button>
              </div>
              <div className="invoicesDetail_allInvoices_search">
                <div className="invoicesDetail_allInvoices_search_input" >
                  <Input
                    size="small"
                    placeholder="Search invoice"
                    prefix={<Image width={16} height={16} src="images/search-icon.svg" alt="search-icon" />}
                  />
                </div>
              </div>

              <div className="invoicesDetail_allInvoices_dataTable">
                <Table
                  columns={columns}
                  pagination={false}
                  showSorterTooltip={false}
                  dataSource={paginatedData}
                />
              </div>

              <div className="invoicesDetail_allInvoices_pagination">
                <Pagination
                  prevPage={prevPage}
                  nextPage={nextPage}
                  total={allData.length}
                  pageSize={itemsPerPage}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </StyledMyInvoices>
      </div>
      {/* <Footer /> */}
    </StyledDashboardContainer>
  )
}

export default Index