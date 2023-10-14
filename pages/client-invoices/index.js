import React, { useState, useEffect } from 'react';
import * as Yup from "yup";
import Modal from "@/modal";
import Image from "next/image";
import Sidebar from "@/sidebar";
import { Formik } from "formik";
import Pagination from "@/pagination";
import Navbar from "@/dashboardNavbar";
import FormControl from "@/formControl";
import { useRouter } from 'next/router';
import CustomButton from "@/customButton";
import { Button, Form, Input, Table } from "antd";
import { useAppContext } from "src/context/state";
import { StyledClientInvoices } from "styles/clientInvoices";
import { GrayTableCell, StyledDashboardContainer, StyledInvoiceModalBody, primaryColor, secondaryColor } from "styles/global";

const Index = () => {
  const itemsPerPage = 5
  const route = useRouter()
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { sidebarVisibal, setSidebarVisibal } = useAppContext()

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    city: "",
    state: "",
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required!"),
    email: Yup.string().required("Email is required!"),
    phone: Yup.string().required("Phone is required!"),
    country: Yup.string().required("Country is required!"),
    address: Yup.string().required("Address is required!"),
    city: Yup.string().required("City is required!"),
    state: Yup.string().required("State is required!"),
  })

  const columns = [
    {
      key: 'clientName',
      title: 'Client Name',
      dataIndex: 'clientName',
      sorter: (a, b) => a.clientName - b.clientName,
    },
    {
      key: 'email',
      title: 'Email',
      dataIndex: 'email',
      sorter: (a, b) => a.email.length - b.email.length,
      render: (text) => <GrayTableCell>{text}</GrayTableCell>
    },
    {
      key: 'totalInvoiced',
      title: 'Total Invoiced',
      dataIndex: 'totalInvoiced',
      sorter: (a, b) => a.totalInvoiced - b.totalInvoiced,
      render: (text) => <span style={{ fontWeight: 700 }}>${text}</span>,
    },
    {
      title: '',
      key: 'action',
      dataIndex: 'action',
      render: (item, record) => (
        <div className="invoicesDetail_allInvoices_table_btns" >
          <Button type="button" >Delete</Button>
          <Button type="button" onClick={() => route.push(`/view-client/${record.clientName.replace(" ", "")}`)}>View</Button>
          <Button type="button" >New Invoice</Button>
        </div>
      )
    }
  ]

  const allData = [
    {
      key: '1',
      totalInvoiced: '500.00',
      email: 'abc@example.com',
      clientName: 'Jane Cooper',
    },
    {
      key: '2',
      totalInvoiced: '500.00',
      email: 'abc@example.com',
      clientName: 'Jane Cooper',
    },
    {
      key: '3',
      totalInvoiced: '500.00',
      email: 'abc@example.com',
      clientName: 'Jane Cooper',
    },
    {
      key: '4',
      totalInvoiced: '500.00',
      email: 'abc@example.com',
      clientName: 'Jane Cooper',
    },
    {
      key: '5',
      totalInvoiced: '500.00',
      email: 'abc@example.com',
      clientName: 'Jane Cooper',
    },
    {
      key: '6',
      totalInvoiced: '500.00',
      email: 'abc@example.com',
      clientName: 'Jane Cooper',
    }
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

  const onSubmit = (values, { resetForm }) => {
    resetForm()

  }

  const addNewClientContent = () => {
    return (
      <StyledInvoiceModalBody>
        <Formik
          onSubmit={onSubmit}
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {(formik) => {
            return (
              <Form
                noValidate
                name='basic'
                autoComplete='off'
                onFinish={formik.handleSubmit}
              >
                <div className='basic-information'>
                  <h1>Basic Information</h1>
                  <FormControl
                    type='text'
                    name='name'
                    control='input'
                    label='Name / Company Name*'
                    placeholder='Enter individual or company name'
                    className={
                      formik.errors.name && formik.touched.name
                        ? "is-invalid"
                        : "customInput"
                    }
                  />

                  <div className='field-control'>
                    <FormControl
                      type='text'
                      name='email'
                      label='Email*'
                      control='input'
                      placeholder='example@gmail.com'
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />

                    <FormControl
                      name='phone'
                      control='phoneInput'
                      label='Phone Number*'
                      placeholder='+92 xxxxxxxxx'
                      className={
                        formik.errors.phone && formik.touched.phone
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </div>
                </div>

                <div className='address-information'>
                  <h1>Address Information</h1>
                  <div className='field-control'>
                    <FormControl
                      name='country'
                      label='Country'
                      defaultValue='PK'
                      control='countrySelect'
                      placeholder='Select Country'
                      className={
                        formik.errors.country && formik.touched.country
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                    <FormControl
                      type='text'
                      name='address'
                      control='input'
                      placeholder='Address'
                      label='Street Address'
                      className={
                        formik.errors.address && formik.touched.address
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </div>

                  <div className='field-control'>
                    <FormControl
                      name='city'
                      label='City'
                      control='input'
                      placeholder='City Name'
                      className={
                        formik.errors.city && formik.touched.city
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                    <FormControl
                      type='text'
                      name='state'
                      label='State'
                      control='input'
                      placeholder='State Name'
                      className={
                        formik.errors.state && formik.touched.state
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </div>
                </div>

                <div className='submit-btn'>
                  <CustomButton
                    fs='16px'
                    lh='19px'
                    width="100%"
                    p={"11px 0"}
                    type="submit"
                    color='#FFFFFF'
                    bg={primaryColor}
                    title="Add Client"
                  />
                </div>
              </Form>
            )
          }}
        </Formik>
      </StyledInvoiceModalBody>
    )
  }

  useEffect(() => {
    setData(allData)
  }, [])

  return (
    <StyledDashboardContainer sidebarVisibal={sidebarVisibal}>
      {isModalOpen && (
        <Modal
          closable={true}
          title="Add New Client"
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          content={addNewClientContent()}
        />
      )}
      <div>
        <Sidebar sidebarVisibal={sidebarVisibal} />
      </div>
      <div className="content">
        <Navbar
          sidebarVisibal={sidebarVisibal}
          setSidebarVisibal={setSidebarVisibal}
        />
        <StyledClientInvoices>
          <div className="invoicesDetail">
            <div className="invoicesDetail_header">
              <h1>Recent Clients</h1>
            </div>
            <div className="invoicesDetail_clientInvoices">
              <div className="invoicesDetail_clientInvoices_client">
                <div className="invoicesDetail_clientInvoices_client_name">
                  <h6>J</h6>
                  <h3>Jane Cooper</h3>
                </div>
                <div className="invoicesDetail_clientInvoices_client_details">
                  <div>
                    <p style={{ color: secondaryColor }}>Email:</p>
                    <span style={{ color: '#9CA3AF' }}>example@gmail.com</span>
                  </div>
                  <div>
                    <p style={{ color: secondaryColor }}>Phone:</p>
                    <span style={{ color: '#9CA3AF' }}>+1-202-555-0199</span>
                  </div>
                  <div>
                    <p style={{ color: secondaryColor }}>Country:</p>
                    <span style={{ color: '#9CA3AF' }}>United States of America</span>
                  </div>
                </div>
              </div>

              <div className="invoicesDetail_clientInvoices_client">
                <div className="invoicesDetail_clientInvoices_client_name">
                  <h6>W</h6>
                  <h3>William Brown</h3>
                </div>
                <div className="invoicesDetail_clientInvoices_client_details">
                  <div>
                    <p style={{ color: secondaryColor }}>Email:</p>
                    <span style={{ color: '#9CA3AF' }}>example@gmail.com</span>
                  </div>
                  <div>
                    <p style={{ color: secondaryColor }}>Phone:</p>
                    <span style={{ color: '#9CA3AF' }}>+1-202-555-0199</span>
                  </div>
                  <div>
                    <p style={{ color: secondaryColor }}>Country:</p>
                    <span style={{ color: '#9CA3AF' }}>United States of America</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="invoicesDetail_allInvoices">
              <div className="invoicesDetail_allInvoices_header">
                <div className="invoicesDetail_allInvoices_header_content">
                  <h1>Clients</h1>
                  <p>Manage your client details</p>
                </div>
                <Button
                  type="primary"
                  onClick={() => setIsModalOpen(true)}
                  className="invoicesDetail_allInvoices_header_btn"
                  icon={<Image width={16} height={16} src="images/plus-icon.svg" alt="plus-icon" />}
                >
                  Add New
                </Button>
              </div>
              <div className="invoicesDetail_allInvoices_search">
                <div className="invoicesDetail_allInvoices_search_input" >
                  <Input
                    size="small"
                    placeholder="Search client"
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
        </StyledClientInvoices>
      </div>
    </StyledDashboardContainer>
  )
}

export default Index