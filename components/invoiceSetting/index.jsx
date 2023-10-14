import React from 'react';
import Image from 'next/image';
import { ChromePicker } from 'react-color';
import { Collapse, Select, Switch } from 'antd';
import { useAppContext } from 'src/context/state';
import { BuilderInvoiceSetting, ColorCheckbox } from './style';
const { Panel } = Collapse;

const Index = ({ defaultColors }) => {
    const { defaultColor, setDefaultColor, invoiceTaxField, setDueDateField, setInvoiceTaxField } = useAppContext()

    const customColorPanelHeader = () => {
        return (
            <div className='builder_setting_colorPicker_panelHeader'>
                <Image
                    width={24}
                    height={24}
                    alt='colorsCircle.svg'
                    src='images/colorsCircle.svg'
                />
                <p>Custom Color</p>
            </div>
        )
    }

    const dueDateHandler = (value) => {
        setDueDateField(value)
    }

    const taxFieldHandler = (value) => {
        setInvoiceTaxField(value)
    }
    return (
        <BuilderInvoiceSetting>
            <div className='builder_setting'>
                <div className='builder_setting_title'>
                    <h3>Invoice Settings</h3>
                </div>
                <div className='builder_setting_defaultColors'>
                    <h4>Color</h4>
                    <div>
                        {defaultColors.map((color, i) => {
                            return (
                                <div
                                    key={i}
                                    className='invoice_builder_page_setting_defaultColors_color'
                                >
                                    <ColorCheckbox color={color}>
                                        <input
                                            id={i}
                                            value='0'
                                            type='radio'
                                            className='checkboxInput'
                                            checked={defaultColor === color}
                                            onChange={(e) => setDefaultColor(color)}
                                        />
                                        <label htmlFor={i}></label>
                                    </ColorCheckbox>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='builder_setting_colorPicker'>
                    <Collapse
                        expandIconPosition='end'
                        defaultActiveKey={['0']}
                        expandIcon={() => (
                            <Image
                                width={15}
                                height={15}
                                alt='arrowDownIcon.svg'
                                src='images/arrowDownIcon.svg'
                            />
                        )}
                    >
                        <Panel header={customColorPanelHeader()} key="1">
                            <ChromePicker color={defaultColor} onChangeComplete={(e) => setDefaultColor(e.hex)} />
                        </Panel>
                    </Collapse>

                </div>
                <div className='builder_setting_currency'>
                    <p>Currency</p>
                    <Select
                        defaultValue="$ USD"
                        style={{ width: 120 }}
                        suffixIcon={
                            <Image
                                width={15}
                                height={15}
                                alt='arrowDownIcon.svg'
                                src='images/arrowDownIcon.svg'
                            />
                        }
                        options={[
                            {
                                value: 'USD',
                                label: '$ USD',
                            },
                            {
                                value: 'Euro',
                                label: '€ Euro',
                            },
                            {
                                value: 'Pound',
                                label: '£ Pound',
                            },
                        ]}
                    />
                </div>
                <div className='builder_setting_invoiceDetail'>
                    <p>Invoice Detail</p>
                    <div className='builder_setting_invoiceDetail_switch'>
                        <p>Due Date</p>
                        <Switch defaultChecked onChange={dueDateHandler} />
                    </div>
                    <div className='builder_setting_invoiceDetail_switch'>
                        <p>Tax</p>
                        <Switch defaultChecked checked={invoiceTaxField} onChange={taxFieldHandler} />
                    </div>
                    <div className='builder_setting_invoiceDetail_switch'>
                        <p>Shipping Detail</p>
                        <Switch />
                    </div>
                </div>
            </div>
        </BuilderInvoiceSetting>
    )
}

export default Index