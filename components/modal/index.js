import React from 'react';
import { Modal } from 'antd';

const Index = ({ closable = false, title = false, isModalOpen, content, setIsModalOpen }) => {

    return (
        <Modal
            centered
            width={598}
            footer={null}
            title={title}
            open={isModalOpen}
            closable={closable}
            onCancel={() => setIsModalOpen(false)}
        >
            {content}
        </Modal>
    )
}

export default Index