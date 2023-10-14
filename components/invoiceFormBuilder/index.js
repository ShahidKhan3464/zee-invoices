import React, { useState, useEffect, useRef } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useAppContext } from "src/context/state";
import { InvoiceBuilderFormStyle } from "./style";
import { Form, Button, Input, InputNumber } from "antd";
const { TextArea } = Input;

const Index = ({ wrapperRef, selectedObj, invoiceBuilderFormData, setInvoiceBuilderFormData }) => {
  const [form] = Form.useForm()
  const builderFormRef = useRef()
  const { invoiceTaxField } = useAppContext()
  const [formState, setFormState] = useState(false)
  const watchedValues = Form.useWatch('invoiceItems', form)
  const [fieldCalculatedValue, setFieldCalculatedValue] = useState('0.0')

  const onFinish = (values) => {
    form.resetFields()
    setFormState(false)
    setFieldCalculatedValue('0.0')
    const finalObj = {
      ...values.invoiceItems[0],
      _id: Math.floor(Math.random() * 1000),
    }
    console.log()
    setInvoiceBuilderFormData([...invoiceBuilderFormData, finalObj])
  }

  const submitFieldHandler = (addField, fields) => {
    if (!fields.length) {
      addField()
    }
    else {
      setFormState(true)
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if ((wrapperRef.current && wrapperRef.current.contains(event.target)) && !(builderFormRef.current && builderFormRef.current.contains(event.target))) {
        if (watchedValues?.length && watchedValues[0].item && watchedValues[0].qty) {

          const createdObj = {
            invoiceItems: [
              {
                description: watchedValues[0]?.description,
                item: watchedValues[0]?.item,
                qty: watchedValues[0]?.qty,
                rate: watchedValues[0]?.rate,
                tax: watchedValues[0]?.tax,
              }
            ]
          }

          onFinish(createdObj)
          setFieldCalculatedValue('0.0')

        }
        else if (watchedValues?.length) {
          form.resetFields();
          setFormState(false)
          setFieldCalculatedValue('0.0')
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }

  }, [wrapperRef, builderFormRef, watchedValues])

  useEffect(() => {
    if (watchedValues?.length && invoiceTaxField) {
      const calculatedValueWithoutTax = watchedValues[0]?.qty * watchedValues[0]?.rate
      const calculatedValueWithTax = calculatedValueWithoutTax * (watchedValues[0]?.tax / 100)
      const subTotal = calculatedValueWithTax + calculatedValueWithoutTax
      const checkNan = isNaN(subTotal)
      if (subTotal && !checkNan) {
        setFieldCalculatedValue(Math.floor(subTotal))
      }
    }

    else if (watchedValues?.length && !invoiceTaxField) {
      const calculatedValue = (watchedValues[0]?.qty * watchedValues[0]?.rate)
      const checkNan = isNaN(calculatedValue)
      if (calculatedValue && !checkNan) {
        setFieldCalculatedValue(Math.floor(calculatedValue))
      }
    }
  }, [watchedValues])

  return (
    <InvoiceBuilderFormStyle ref={builderFormRef}>
      <Form
        form={form}
        autoComplete='off'
        onFinish={onFinish}
        initialValues={{ remember: true }}
        name='invoice_builder_page_table_form'
      >
        <Form.List name='invoiceItems'>
          {(fields, { add, remove }, { errors }) => {
            return (
              <>
                {fields.map(({ key, name, ...restField }) => {
                  return (
                    <>
                      <div
                        key={key}
                        className='invoice_builder_page_table_form_fields'
                      >
                        <Form.Item
                          name={[name, "item"]}
                          rules={[
                            {
                              message: "",
                              required: true,
                            },
                          ]}
                        >
                          <Input placeholder='Name of your product or service' />
                        </Form.Item>

                        <Form.Item
                          {...restField}
                          name={[name, "qty"]}
                          rules={[
                            {
                              message: "",
                              required: true,
                            },
                          ]}
                        >
                          <InputNumber max='99' placeholder='1' />
                        </Form.Item>

                        <Form.Item
                          {...restField}
                          name={[name, "rate"]}
                          rules={[
                            {
                              message: "",
                              required: true,
                            },
                          ]}
                        >
                          <InputNumber max='99' placeholder='$ 0.0' />
                        </Form.Item>

                        {invoiceTaxField ? (
                          <Form.Item
                            {...restField}
                            name={[name, "tax"]}
                            rules={[
                              {
                                message: "",
                                required: true,
                              },
                            ]}
                          >
                            <InputNumber max='99' placeholder='% 0.0' />
                          </Form.Item>
                        ) : null
                        }

                        <p>$ {fieldCalculatedValue}</p>

                        {/* <MinusCircleOutlined onClick={() => remove(name)} /> */}
                      </div>
                      <Form.Item
                        {...restField}
                        className="textarea"
                        name={[name, "description"]}
                        rules={[
                          {
                            message: "",
                            required: true,
                          },
                        ]}
                      >
                        <TextArea placeholder='Description' />
                      </Form.Item>
                    </>
                  )
                })}
                <Form.Item>
                  <Button
                    block
                    size='large'
                    type='dashed'
                    disabled={selectedObj}
                    icon={<PlusOutlined />}
                    className='invoiceSubmitButton'
                    htmlType={formState ? "submit" : "button"}
                    onClick={() => submitFieldHandler(add, fields)}
                  >
                    Add New Invoice Item
                  </Button>
                </Form.Item>
              </>
            )
          }}
        </Form.List>
      </Form>
    </InvoiceBuilderFormStyle>
  )
}

export default Index