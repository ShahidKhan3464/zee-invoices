import React, { useState, useRef, useEffect } from "react";
import * as Yup from "yup";
import Image from 'next/image';
import { Formik } from "formik";
import CountryData from "country-data";
import { Palette } from "color-thief-react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Modal, Form, Input, InputNumber, DatePicker } from "antd";

// here is components imports
import Footer from '@/footer';
import PDFDocument from '@/pdfTemplate';
import FormControl from "@/formControl";
import CustomButton from "@/customButton";
import SaveInfoModal from '@/saveInfoModal';
import { primaryColor } from "styles/global";
import InvoiceSetting from "@/invoiceSetting";
import InvoiceNavbar from "@/validUserNavbar";
import { useAppContext } from "src/context/state";
import InvoiceFormBuilder from "@/invoiceFormBuilder";
import SettingDrawer from "@/invoiceSetting/settingDrawer";
import { GenerateInvoiceStyled, InvoiceModalBodyStyle, InvoiceBuilderForm, InvoiceBuilderHeader } from "styles/generateInvoice";
const { TextArea } = Input;

const initialValues = {
    name: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    city: "",
    state: "",
}

const Index = () => {
    const formRef = useRef(null)
    const wrapperRef = useRef(null)
    const [notes, setNotes] = useState("")
    const [imageUrl, setImageUrl] = useState('')
    const [isClient, setIsClient] = useState(false)
    const [invoiceDate, setInvoiceDate] = useState()
    const [invoiceType, setInvoiceType] = useState("")
    const [specificUser, setSpecificUser] = useState("")
    const [invoiceDueDate, setInvoiceDueDate] = useState()
    const [senderDetail, setSenderDetail] = useState(null)
    const [invoicetitle, setInvoicetitle] = useState("001")
    const [editableField, setEditableField] = useState(null)
    const [saveInfoModal, setSaveInfoModal] = useState(false)
    const [settingDrawer, setSettingDrawer] = useState(false)
    const [receiverDetail, setReceiverDetail] = useState(null)
    const [extractColorLoading, setExtractColorLoading] = useState(false)
    const { defaultColor, dueDateField, invoiceTaxField } = useAppContext()
    const [generateInvoiceModal, setGenerateInvoiceModal] = useState(false)
    const [invoiceBuilderFormData, setInvoiceBuilderFormData] = useState([])
    const [defaultColors, setDefaultColors] = useState([
        "#2B2B2B",
        "#444444",
        "#1A1A21",
        "#6183E4",
        "#0286FF",
        "#366AEF",
        "#9747FF",
        "#C69ED5",
        "#70756A",
        "#446043",
        "#56607C",
        "#AB5FB1",
        "#5F319A",
        "#E461C7",
        "#FFCC02",
        "#B2E461",
    ])

    const invoiceData = { imageUrl, invoicetitle, invoiceType, invoiceDate, invoiceDueDate, senderDetail, receiverDetail, invoiceBuilderFormData, defaultColor, notes }

    useOutsideAlerter(wrapperRef, formRef, editableField)

    const getBase64 = (img, callback) => {
        const reader = new FileReader()
        reader.addEventListener("load", () => callback(reader.result))
        reader.readAsDataURL(img)
    }

    const invoiceLogoChangehandler = (e) => {
        const image = e.target.files[0]
        if (!image) {
            return false
        }
        if (!image.name.match(/\.(jpg|jpeg|png|gif|svg)$/)) {
            alert('Select Valid Image Please')
            return false
        }
        else {
            getBase64(e.target.files[0], (url) => {
                setImageUrl(url)
            })
        }
    }

    const handleCancel = () => {
        setSpecificUser("")
        setGenerateInvoiceModal(false)
    }

    const invoiceGenerateHandler = (value) => {
        setSpecificUser(value)
        setGenerateInvoiceModal(true)
    }

    const invoiceEditHandler = (value) => {
        setSpecificUser(value)
        if (value === "sender") {
            setGenerateInvoiceModal(true)
        }
        else if (value === "receiver") {
            setGenerateInvoiceModal(true)
        }
    }

    const deleteTableRowHandler = (selectedId) => {
        const filterdArray = invoiceBuilderFormData.filter((row) => row._id !== selectedId)
        setInvoiceBuilderFormData(filterdArray)
    }

    const editableInputsChangeHandler = (name, value) => {
        setEditableField({
            ...editableField,
            [name]: value,
        })
    }

    const SenderInputBox = () => {
        return (
            <div className='invoice_builder_page_body_from_senderDetail'>
                <h1>Sender Details</h1>
                <div
                    onClick={() => invoiceGenerateHandler("sender")}
                    className='invoice_builder_page_body_from_senderDetail_btn'
                >
                    <Image
                        width={50}
                        height={50}
                        alt='detailPlusIcon'
                        src='/images/detailPlusIcon.svg'
                    />
                    <p>Add New Sender</p>
                </div>
            </div>
        )
    }

    const SenderDetailBox = ({ detail }) => {
        const countryName = CountryData.countries[detail.country].name
        return (
            <div className='invoice_builder_page_body_from_detail'>
                <div className='invoice_builder_page_body_from_detail_title'>
                    <h1>Sender Details</h1>
                    <Image
                        width={20}
                        height={20}
                        alt='editIcon'
                        src='/images/editIcon.svg'
                        onClick={() => invoiceEditHandler("sender")}
                    />
                </div>
                <h1>{detail.name}</h1>
                <p>{detail.address}, {detail.city}, {detail.state}</p>
                <p>{countryName}</p>
                <p>{detail.email}</p>
                <p>{detail.phone}</p>
            </div>
        )
    }

    const ReceiverInputBox = () => {
        return (
            <div className='invoice_builder_page_body_to_receiverDetail'>
                <h1>Recipient Details</h1>
                <div
                    className='invoice_builder_page_body_to_receiverDetail_btn'
                    onClick={() => invoiceGenerateHandler("receiver")}
                >
                    <Image
                        width={50}
                        height={50}
                        alt='detailPlusIcon'
                        src='/images/detailPlusIcon.svg'
                    />
                    <p>Add New Recipient</p>
                </div>
            </div>
        )
    }

    const ReceiverDetailBox = ({ detail }) => {
        const countryName = CountryData.countries[detail.country].name
        return (
            <div className='invoice_builder_page_body_to_detail'>
                <div className='invoice_builder_page_body_to_detail_title'>
                    <h1>Recipient Details</h1>
                    <Image
                        width={20}
                        height={20}
                        alt='editIcon'
                        src='/images/editIcon.svg'
                        onClick={() => invoiceEditHandler("receiver")}
                    />
                </div>
                <h1>{detail.name}</h1>
                <p>{detail.address}, {detail.city}, {detail.state}</p>
                <p>{countryName}</p>
                <p>{detail.email}</p>
                <p>{detail.phone}</p>
            </div>
        )
    }

    const submitEditableForm = () => {
        setEditableField(null);
        for (var i in invoiceBuilderFormData) {
            if (invoiceBuilderFormData[i]._id == editableField._id) {
                invoiceBuilderFormData[i].item = editableField.item
                invoiceBuilderFormData[i].qty = editableField.qty
                invoiceBuilderFormData[i].rate = editableField.rate
                invoiceBuilderFormData[i].tax = editableField.tax
                invoiceBuilderFormData[i].description = editableField.description
                break
            }
        }
        setInvoiceBuilderFormData(invoiceBuilderFormData)
    }

    function useOutsideAlerter(ref, formRef, editableField) {
        useEffect(() => {
            if (editableField) {
                function handleClickOutside(event) {
                    if (
                        ref.current &&
                        ref.current.contains(event.target) &&
                        !(formRef.current && formRef.current.contains(event.target))
                    ) {
                        submitEditableForm()
                    }
                }
                document.addEventListener("mousedown", handleClickOutside)
                return () => {
                    document.removeEventListener("mousedown", handleClickOutside)
                }
            }
        }, [ref, editableField])
    }

    const handleInvoiceDate = (date, dateString) => {
        setInvoiceDate(dateString)
    }

    const handleInvoiceDueDate = (date, dateString) => {
        setInvoiceDueDate(dateString)
    }

    const calculatedValueHandler = (itemValue) => {
        if (invoiceTaxField) {
            const calculatedValueWithoutTax = itemValue.qty * itemValue.rate
            const calculatedValueWithTax = calculatedValueWithoutTax * (itemValue.tax / 100)
            const subTotal = calculatedValueWithTax + calculatedValueWithoutTax
            return Math.floor(subTotal)
        }
        else {
            return Math.floor(
                itemValue.qty * itemValue.rate
            )
        }
    }

    const onSubmit = (values, { resetForm }) => {
        resetForm()
        if (specificUser === "sender") {
            setSenderDetail(values)
            setGenerateInvoiceModal(false)
        }
        else if (specificUser === "receiver") {
            setReceiverDetail(values)
            setGenerateInvoiceModal(false)
        }
    }

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <GenerateInvoiceStyled ref={wrapperRef}>
            <InvoiceBuilderHeader className='container'>
                <div className='invoiceBuilderTitle'>
                    <div className='invoiceBuilderTitle_web'>
                        <div className='invoiceBuilderTitle_web_input'>
                            <label htmlFor="invoiceNo">Invoice:</label>
                            <input
                                type="number"
                                id='invoiceNo'
                                value={invoicetitle}
                                onChange={(e) => setInvoicetitle(e.target.value)}
                            />
                        </div>
                        <div className='invoiceBuilderTitle_web_icon'>
                            <Image
                                width={20}
                                height={20}
                                alt='editIcon'
                                src='/images/editIcon.svg'
                            />
                        </div>
                    </div>
                    <div className='invoiceBuilderTitle_mobile'>
                        <Image
                            width={65}
                            height={65}
                            alt='settingIcon'
                            src='/images/settingIcon.svg'
                            onClick={() => setSettingDrawer(true)}
                        />
                        <SettingDrawer
                            settingDrawer={settingDrawer}
                            setSettingDrawer={setSettingDrawer}>
                            <InvoiceSetting defaultColors={defaultColors} />
                        </SettingDrawer>
                    </div>
                </div>

                <div className='invoiceBuilderHeaderBtns'>
                    <CustomButton
                        fs='16px'
                        lh='19px'
                        title='Save'
                        bg='#FFFFFF;'
                        p={"10px 24px"}
                        color={primaryColor}
                        border="1px solid #3F4DE1"
                        clicked={() => setSaveInfoModal(true)}
                    />

                    {isClient && (
                        <PDFDownloadLink document={<PDFDocument invoiceData={invoiceData} />} fileName="invoice.pdf">
                            {({ blob, url, loading, error }) => {
                                return (
                                    <CustomButton
                                        fs='16px'
                                        lh='19px'
                                        color='#FFFFFF'
                                        p={"10px 29px"}
                                        bg={primaryColor}
                                        title='Download PDF'
                                    />
                                )
                            }}
                        </PDFDownloadLink>
                    )}
                </div>
            </InvoiceBuilderHeader>

            <InvoiceBuilderForm
                className='container'
                invoiceBuilderColor={defaultColor}
            >
                <div className='invoice_builder_page'>
                    <div className='invoice_builder_page_header'>
                        <div className='invoice_builder_page_header_upload'>
                            {imageUrl ? (
                                <div className="invoice_builder_page_header_upload_image">
                                    <img
                                        alt='avatar'
                                        src={imageUrl}
                                        style={{
                                            // width: "200px",
                                            height: "56px",
                                            objectFit: 'contain',
                                        }}
                                    />
                                    <div className="image_hover_effect" >
                                        <img onClick={() => setImageUrl('')} src="images/plusWhiteIcon.svg" alt="plusWhiteIcon.svg" />
                                    </div>
                                </div>
                            ) : (
                                <div className='invoice_builder_page_header_upload_btn'>
                                    <div className='invoice_builder_page_header_upload_btn_content'>
                                        <Image
                                            width={34}
                                            height={31}
                                            alt='uploadFileLogo'
                                            src='/images/uploadFileLogo.svg'
                                        />
                                        <div className='invoice_builder_page_header_upload_btn_content_file'>
                                            <p>Add your business logo</p>
                                            <h1>Select a file</h1>
                                        </div>
                                    </div>
                                    <input type='file' accept=".jpg, .jpeg, .png .svg" onChange={invoiceLogoChangehandler}></input>
                                </div>
                            )}
                        </div>
                        <div className='invoice_builder_page_header_select_invoice'>
                            <p>Type</p>
                            <select onChange={(e) => setInvoiceType(e.target.value)}>
                                <option value=''>Select Invoice</option>
                                <option value='One'>One</option>
                                <option value='Two'>Two</option>
                                <option value='Three'>Three</option>
                            </select>
                        </div>
                    </div>

                    <div className='invoice_builder_page_body'>
                        <div className='invoice_builder_page_body_from'>
                            <p>From</p>
                            {!senderDetail ? (
                                <SenderInputBox />
                            ) : (
                                <SenderDetailBox detail={senderDetail} />
                            )}
                        </div>
                        <div className='invoice_builder_page_body_to'>
                            <p>To</p>
                            {!receiverDetail ? (
                                <ReceiverInputBox />
                            ) : (
                                <ReceiverDetailBox detail={receiverDetail} />
                            )}
                        </div>
                    </div>

                    <div className="invoice_builder_page_controls">
                        <div className="invoice_builder_page_controls_date">
                            <label htmlFor='invoiceDate' >Invoice Date:</label>
                            <DatePicker id='invoiceDate' onChange={handleInvoiceDate} />
                        </div>
                        {dueDateField ? (
                            <div className="invoice_builder_page_controls_date">
                                <label htmlFor='dueDate' >Due Date:</label>
                                <DatePicker id='dueDate' onChange={handleInvoiceDueDate} />
                            </div>
                        ) : null
                        }
                    </div>

                    <div className='invoice_builder_page_table'>
                        <div className='invoice_builder_page_table_header'>
                            <p style={{ width: '25%' }}>Items</p>
                            <p>QTY/HRS</p>
                            <p>Rate</p>
                            {invoiceTaxField ? <p>Tax</p> : null}
                            <p>Subtotal</p>
                        </div>
                        {invoiceBuilderFormData.map((item) => {
                            return (
                                <div key={item._id} className='invoice_builder_page_table_row'>
                                    {editableField?._id == item._id ? (
                                        <div
                                            ref={formRef}
                                            className='invoice_builder_page_table_editable'
                                        >
                                            <div className='invoice_builder_page_table_editable_inputs'>
                                                <Input
                                                    name='item'
                                                    value={editableField.item}
                                                    placeholder='Name of your product or service'
                                                    onChange={(e) => editableInputsChangeHandler("item", e.target.value)}
                                                />
                                                <InputNumber
                                                    max='99'
                                                    name='qty'
                                                    placeholder='1'
                                                    value={editableField.qty}
                                                    onChange={(e) => editableInputsChangeHandler("qty", e)}
                                                />
                                                <InputNumber
                                                    max='99'
                                                    name='rate'
                                                    placeholder='$ 0.0'
                                                    value={editableField.rate}
                                                    onChange={(e) => editableInputsChangeHandler("rate", e)}
                                                />
                                                {invoiceTaxField ? (
                                                    <InputNumber
                                                        max='99'
                                                        name='tax'
                                                        placeholder='% 0.0'
                                                        value={editableField.tax}
                                                        onChange={(e) => editableInputsChangeHandler("tax", e)}
                                                    />
                                                ) : null}

                                                <p>$ {calculatedValueHandler(item) && calculatedValueHandler(item)}</p>
                                            </div>

                                            <div className='invoice_builder_page_table_editable_textarea'>
                                                <TextArea
                                                    name='description'
                                                    placeholder='Description'
                                                    value={editableField.description}
                                                    onChange={(e) => editableInputsChangeHandler("description", e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='showCrossonHover'>
                                            <div
                                                onClick={() => setEditableField(item)}
                                                className='invoice_builder_page_table_row_body'
                                            >
                                                <p style={{ width: '25%' }}>{item.item}</p>
                                                <p>{item.qty}</p>
                                                <p>{item.rate}</p>
                                                {invoiceTaxField ? <p>{item.tax}</p> : null}
                                                <p>USD {calculatedValueHandler(item) ? calculatedValueHandler(item) : console.log(calculatedValueHandler(item), '0.0')}</p>
                                            </div>
                                            <h6 className="tableRowDescription" >{item.description}</h6>
                                            <span className='tableActions'>
                                                <img
                                                    alt='crossIcon.svg'
                                                    src='images/crossIcon.svg'
                                                    onClick={() => deleteTableRowHandler(item._id)}
                                                />
                                            </span>
                                        </div>
                                    )}
                                </div>
                            )
                        })}

                        <InvoiceFormBuilder
                            wrapperRef={wrapperRef}
                            selectedObj={editableField}
                            invoiceBuilderFormData={invoiceBuilderFormData}
                            setInvoiceBuilderFormData={setInvoiceBuilderFormData}
                        />
                    </div>

                    <div className='invoice_builder_page_summary'>
                        <div className='invoice_builder_page_summary_header'>
                            <p>Invoice Summary</p>
                        </div>
                        <div className='invoice_builder_page_summary_body'>
                            <div className='invoice_builder_page_summary_body_subtotal'>
                                <p>Subtotal</p>
                                <h6>USD<span>{invoiceBuilderFormData.reduce((sum, obj) => sum + obj.qty * obj.rate, 0)}</span></h6>
                            </div>
                            {invoiceTaxField ? (
                                <div className='invoice_builder_page_summary_body_tax'>
                                    <p>Tax</p>
                                    <h6>--</h6>
                                </div>
                            ) : null}
                            <div className='invoice_builder_page_summary_body_total'>
                                <p>Total</p>
                                <h6>USD<span>{invoiceBuilderFormData.reduce((sum, obj) => sum + obj.qty * obj.rate, 0)}</span></h6>
                            </div>
                        </div>
                    </div>

                    <div className='invoice_builder_page_footer'>
                        <input
                            name='notes'
                            value={notes}
                            placeholder='Additional Note'
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>
                </div>
                <div className='invoice_builder_page_setting'>
                    <InvoiceSetting defaultColors={defaultColors} />
                </div>
            </InvoiceBuilderForm>

            <Modal
                centered
                width={650}
                footer={null}
                onCancel={handleCancel}
                open={generateInvoiceModal}
                className='generateInvoiceModal'
                title={`Add ${specificUser === 'sender' ? 'Sender' : 'Recipient'} Detail`}
            >
                <InvoiceModalBodyStyle>
                    <Formik
                        initialValues={
                            initialValues
                            // specificUser === "sender" && senderDetail
                            //   ? senderDetail
                            //   : specificUser === "receiver" && receiverDetail
                            //     ? receiverDetail
                            //     : initialValues
                        }
                        onSubmit={onSubmit}
                        enableReinitialize={true}
                        validationSchema={validationSchema}
                    >
                        {(formik) => {
                            return (
                                <Form
                                    name='basic'
                                    autoComplete='off'
                                    onFinish={formik.handleSubmit}
                                >
                                    <div className='basicinformation'>
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
                                        <div className='generateFormInputes'>
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
                                    <div className='addressinformation'>
                                        <h1>Address Information</h1>

                                        <div className='generateFormInputes'>
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
                                        <div className='generateFormInputes'>
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
                                    <div className='informationBtn'>
                                        <CustomButton
                                            fs='16px'
                                            lh='19px'
                                            width="100%"
                                            p={"11px 0"}
                                            type="submit"
                                            color='#FFFFFF'
                                            bg={primaryColor}
                                            title={`Add ${specificUser === 'sender' ? 'Sender' : 'Recipient'}`}
                                        />
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
                </InvoiceModalBodyStyle>
            </Modal>

            <Palette
                format='hex'
                src={imageUrl}
                colorCount={16}
                crossOrigin='anonymous'
            >
                {({ data, loading }) =>
                    loading
                        ? setExtractColorLoading(loading)
                        : data?.length
                            ? setDefaultColors(data)
                            : null
                }
            </Palette>
            <SaveInfoModal openModal={saveInfoModal} closeModal={setSaveInfoModal} />
        </GenerateInvoiceStyled>
    )
}

export default Index

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required!"),
    email: Yup.string().required("Email is required!"),
    phone: Yup.string().required("Phone is required!"),
    country: Yup.string().required("Country is required!"),
    address: Yup.string().required("Address is required!"),
    city: Yup.string().required("City is required!"),
    state: Yup.string().required("State is required!"),
})

Index.getLayout = function PageLayout(page) {
    return (
        <>
            <InvoiceNavbar />
            {page}
            <Footer />
        </>
    )
}