import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import {savePlan} from '../utils'

const Saveplan = (data) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);

    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal title="Congratulations" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <p>You has successfully saved this travel plan!</p>

            </Modal>
        </>
    );
};
export default Saveplan;