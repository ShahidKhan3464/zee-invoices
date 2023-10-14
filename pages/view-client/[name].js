import React, { useState } from "react";
import Modal from "@/modal";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/sidebar";
import { Button, Table } from "antd";
import Navbar from "@/dashboardNavbar";
import Breadcrumbs from "@/breadCrumbs";
import { useRouter } from "next/router";
import { useAppContext } from "src/context/state";
import { GrayTableCell, StyledDashboardContainer } from "styles/global";
import { StyledViewClient, StyledDeleteContent } from "styles/viewClient";

const columns = [
    {
        key: 'invoiceNo',
        title: 'Invoice #',
        dataIndex: 'invoiceNo',
        sorter: (a, b) => a.invoiceNo - b.invoiceNo,
        sorter: false
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
            <div className="viewClient_allInvoices_table_btns" >
                <Button type="button">Delete</Button>
                <Button type="button">View</Button>
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
]

const Index = () => {
    const route = useRouter()
    const name = route.query.name
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { sidebarVisibal, setSidebarVisibal } = useAppContext()

    const breadcrumbs = [
        <Link className='link' href="/client-invoices">Clients</Link>,
        <span className='text'>{name}</span>
    ]

    const deleteContent = () => {

        return (
            <StyledDeleteContent>
                <div className='delete-icon'>
                    <Image
                        width={96}
                        height={96}
                        alt='delete-icon'
                        src='/images/delete-icon.svg'
                    />
                </div>
                <div className='text'>
                    <h3>Delete customer: Jane Cooper</h3>
                    <p>All the invoices from this customer will be deleted. Are you sure you wish to continue?</p>
                </div>
                <div className='btn-container'>
                    <Button
                        type='button'
                        className='cancel-btn'
                        onClick={() => setIsModalOpen(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        type='button'
                        className='delete-btn'
                    // onClick={() => setDialogType('cause')}
                    >
                        Delete
                    </Button>
                </div>
            </StyledDeleteContent>
        )
    }

    return (
        <StyledDashboardContainer sidebarVisibal={sidebarVisibal}>
            {isModalOpen && (
                <Modal
                    content={deleteContent()}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
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
                <StyledViewClient>
                    <Breadcrumbs>
                        {breadcrumbs}
                    </Breadcrumbs>
                    <div className="viewClient">
                        <div className="viewClient_profile">
                            <div className="viewClient_profile_detail">
                                <div className="viewClient_profile_detail_icon">
                                    <h6>J</h6>
                                </div>
                                <div className="viewClient_profile_detail_text">
                                    <h3>Jane Cooper</h3>
                                    <p>Email: <span>example@gmail.com</span></p>
                                    <p>Phone: <span>+1-202-555-0199</span></p>
                                    <p>Country: <span>United States of America</span></p>
                                </div>
                            </div>
                            <div className="viewClient_profile_btn-container">
                                <Button
                                    type="button"
                                    className="edit-btn"
                                >
                                    Edit
                                </Button>
                                <Button
                                    type="button"
                                    className="delete-btn"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>

                        <div className="viewClient_allInvoices">
                            <div className="viewClient_allInvoices_header">
                                <div className="viewClient_allInvoices_header_viewClient">
                                    <h1>Invoices</h1>
                                </div>
                                <Button
                                    type="primary"
                                    className="viewClient_allInvoices_header_btn"
                                    icon={<Image width={16} height={16} src="/images/plus-icon.svg" alt="plus-icon" />}
                                >
                                    Create New
                                </Button>
                            </div>

                            <div className="viewClient_allInvoices_dataTable">
                                <Table
                                    columns={columns}
                                    pagination={false}
                                    dataSource={allData}
                                    showSorterTooltip={false}
                                />
                            </div>
                        </div>
                    </div>
                </StyledViewClient>
            </div>
        </StyledDashboardContainer>
    )
}

export default Index