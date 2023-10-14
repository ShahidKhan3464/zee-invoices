import React from "react";
import Link from "next/link";
import { Button } from "antd";
import Image from "next/image";
import Sidebar from "@/sidebar";
import Navbar from "@/dashboardNavbar";
import Breadcrumbs from "@/breadCrumbs";
import { useRouter } from "next/router";
import { useAppContext } from "src/context/state";
import { StyledViewInvoice } from "styles/viewInvoice";
import { StyledDashboardContainer, primaryColor } from "styles/global";

const Index = () => {
    const route = useRouter()
    const id = route.query.id
    const { sidebarVisibal, setSidebarVisibal } = useAppContext()

    const breadcrumbs = [
        <Link className='link' href="/my-invoices">Invoices</Link>,
        <span className='text'>{id}</span>
    ]

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
                <StyledViewInvoice>
                    <Breadcrumbs>
                        {breadcrumbs}
                    </Breadcrumbs>
                    <div className="viewInvoice">
                        <div className="viewInvoice_invoice-builder">
                            <div className="viewInvoice_invoice-builder_top">
                                <div className="logo">
                                    <Image
                                        alt="logo"
                                        width={132}
                                        height={40}
                                        src="/images/zapta-logo.svg"
                                    />
                                </div>
                                <div className="invoice-no">
                                    <p>Invoice No:</p>
                                    <span>001</span>
                                </div>
                            </div>

                            <div className="viewInvoice_invoice-builder_boxes">
                                <div className="viewInvoice_invoice-builder_boxes_from">
                                    <p className="from">From</p>
                                    <h2 className="location">ZAPTA Technologies</h2>
                                    <p className="address">240 FF, Dha Phase 4, Lahore, 54792 Pakistan</p>
                                    <p className="email">ather.raza28@gmail.com</p>
                                    <p className="phone">03215399275</p>
                                </div>
                                <div className="viewInvoice_invoice-builder_boxes_to">
                                    <p className="to">To</p>
                                    <h2 className="location">ABC Company</h2>
                                    <p className="address">240 FF, Dha Phase 4, Lahore, 54792 Pakistan</p>
                                    <p className="email">example@gmail.com</p>
                                    <p className="phone">+92100022124</p>
                                </div>
                            </div>

                            <div className="viewInvoice_invoice-builder_date">
                                <div>
                                    <p>Invoice Date:</p>
                                    <span>Sep 23rd, 2022</span>
                                </div>
                                <div>
                                    <p>Due Date:</p>
                                    <span>Sep 23rd, 2022</span>
                                </div>
                            </div>

                            <div className="viewInvoice_invoice-builder_table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th style={{ float: 'left' }}>Items</th>
                                            <th>QTY/HRS</th>
                                            <th>Rate</th>
                                            <th>Subtotal</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="items-cell">
                                                    <h3>Web and App Design</h3>
                                                    <p>Lorem ipsum dolor sit amet, con adipiscing elit. </p>
                                                </div>
                                            </td>
                                            <td>1</td>
                                            <td>$4.0</td>
                                            <td>$ 0.00</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div className="items-cell">
                                                    <h3>Web and App Design</h3>
                                                    <p>Lorem ipsum dolor sit amet, con adipiscing elit. </p>
                                                </div>
                                            </td>
                                            <td>1</td>
                                            <td>$4.0</td>
                                            <td>$ 0.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="viewInvoice_invoice-builder_summary">
                                <div className="title">
                                    <h2>Invoice Summary</h2>
                                </div>

                                <div className="detail">
                                    <div>
                                        <p>Subtotal</p>
                                        <p>USD <span>100.00</span></p>
                                    </div>
                                    <div>
                                        <p>Tax</p>
                                        <p>--</p>
                                    </div>
                                    <div>
                                        <p>Subtotal</p>
                                        <p>USD <span>350.00</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="viewInvoice_invoice-builder_note">
                                <p>
                                    Note: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nisi, vel mauris facilisis pellentesque.
                                </p>
                            </div>
                        </div>

                        <div className="viewInvoice_btn-container">
                            <Button type="button" style={{ color: '#FFFFFF', background: primaryColor }}>Download PDF</Button>
                            <Button type="button" style={{ color: primaryColor, border: '1px solid #3F4DE1' }}>Edit</Button>
                            <Button type="button" style={{ color: '#FFFFFF', background: '#FF4A55' }}>Delete</Button>
                        </div>
                    </div>
                </StyledViewInvoice>
            </div>
        </StyledDashboardContainer>
    )
}

export default Index