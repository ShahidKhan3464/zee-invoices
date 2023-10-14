import React, { useState } from "react";
import Modal from "@/modal";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/sidebar";
import { Button, Table } from "antd";
import Navbar from "@/dashboardNavbar";
import Breadcrumbs from "@/breadCrumbs";
import { useAppContext } from "src/context/state";
import { GrayTableCell, StyledDashboardContainer } from "styles/global";
import { StyledViewClient, StyledDeleteContent } from "styles/viewClient";

const Index = () => {
    const { sidebarVisibal, setSidebarVisibal } = useAppContext()

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
                <StyledViewClient>
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
                    </div>
                </StyledViewClient>
            </div>
        </StyledDashboardContainer>
    )
}

export default Index