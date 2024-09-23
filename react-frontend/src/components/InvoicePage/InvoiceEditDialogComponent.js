import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../services/restClient";
import _ from "lodash";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';

const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const InvoiceCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            no: _entity?.no,
invoiceType: _entity?.invoiceType,
invoiceDateAndTime: _entity?.invoiceDateAndTime,
originalEInvoiceReferenceNumber: _entity?.originalEInvoiceReferenceNumber,
suppliersName: _entity?.suppliersName,
suppliersTin: _entity?.suppliersTin,
suppliersSstRegistrationNumber: _entity?.suppliersSstRegistrationNumber,
suppliersIdentifierType: _entity?.suppliersIdentifierType,
supplierIdentifierNumber: _entity?.supplierIdentifierNumber,
suppliersMsicCode: _entity?.suppliersMsicCode,
suppliersTourismTaxRegistrationNumber: _entity?.suppliersTourismTaxRegistrationNumber,
suppliersBusinessActivityDescription: _entity?.suppliersBusinessActivityDescription,
suppliersEMail: _entity?.suppliersEMail,
theFirstSuppliersContactNumber: _entity?.theFirstSuppliersContactNumber,
suppliersContactNumber: _entity?.suppliersContactNumber,
supplierCountryName: _entity?.supplierCountryName,
supplierStateName: _entity?.supplierStateName,
supplierCityName: _entity?.supplierCityName,
supplierPostalZone: _entity?.supplierPostalZone,
buyersName: _entity?.buyersName,
buyersTin: _entity?.buyersTin,
buyersSstRegistrationNumber: _entity?.buyersSstRegistrationNumber,
buyerIdentifierType: _entity?.buyerIdentifierType,
businessRegistrationNumberIdentificationNumberPassportNumber: _entity?.businessRegistrationNumberIdentificationNumberPassportNumber,
buyersEMail: _entity?.buyersEMail,
buyersAddressCountryName: _entity?.buyersAddressCountryName,
buyersAddressStateName: _entity?.buyersAddressStateName,
buyersAddressCityName: _entity?.buyersAddressCityName,
buyersAddressPostalZone: _entity?.buyersAddressPostalZone,
theFirstBuyersContactNumber: _entity?.theFirstBuyersContactNumber,
buyersContactNumber: _entity?.buyersContactNumber,
paymentInformationInvoiceCurrency: _entity?.paymentInformationInvoiceCurrency,
paymentInformationCurrencyExchangeRate: _entity?.paymentInformationCurrencyExchangeRate,
paymentInformationFrequencyOfBilling: _entity?.paymentInformationFrequencyOfBilling,
paymentInformationBillingPeriodStartDate: _entity?.paymentInformationBillingPeriodStartDate,
paymentInformationBillingPeriodEndDate: _entity?.paymentInformationBillingPeriodEndDate,
paymentInformationPaymentMode: _entity?.paymentInformationPaymentMode,
paymentInformationSuppliersBankAccountNumber: _entity?.paymentInformationSuppliersBankAccountNumber,
paymentInformationPaymentTerms: _entity?.paymentInformationPaymentTerms,
paymentInformationPrePaymentAmount: _entity?.paymentInformationPrePaymentAmount,
paymentInformationPrePaymentDate: _entity?.paymentInformationPrePaymentDate,
paymentInformationPrePaymentReferenceNumber: _entity?.paymentInformationPrePaymentReferenceNumber,
shippingRecipientsName: _entity?.shippingRecipientsName,
shippingRecipientsAddressCountryName: _entity?.shippingRecipientsAddressCountryName,
shippingRecipientsAddressStateName: _entity?.shippingRecipientsAddressStateName,
shippingRecipientsAddressCityName: _entity?.shippingRecipientsAddressCityName,
shippingRecipientsAddressPostalZone: _entity?.shippingRecipientsAddressPostalZone,
shippingRecipientsTin: _entity?.shippingRecipientsTin,
shippingRecipientsIdentifierType: _entity?.shippingRecipientsIdentifierType,
shippingRecipientsInformationBusinessRegistrationNumberIdentificationNumberPassportNumber: _entity?.shippingRecipientsInformationBusinessRegistrationNumberIdentificationNumberPassportNumber,
otherInformationBillReferenceNumber: _entity?.otherInformationBillReferenceNumber,
otherInformationReferenceNumberOfCustomsFormNo19Etc: _entity?.otherInformationReferenceNumberOfCustomsFormNo19Etc,
otherInformationIncoterms: _entity?.otherInformationIncoterms,
otherInformationFreeTradeAgreementFtaInformation: _entity?.otherInformationFreeTradeAgreementFtaInformation,
otherInformationAuthorisationNumberForCertifiedExporter: _entity?.otherInformationAuthorisationNumberForCertifiedExporter,
otherInformationReferenceNumberOfCustomsFormNo2: _entity?.otherInformationReferenceNumberOfCustomsFormNo2,
invoiceLineNo: _entity?.invoiceLineNo,
invoiceLineClassification: _entity?.invoiceLineClassification,
invoiceLineProductName: _entity?.invoiceLineProductName,
invoiceLineQuantity: _entity?.invoiceLineQuantity,
invoiceLineUnitPrice: _entity?.invoiceLineUnitPrice,
invoiceLineMeasurement: _entity?.invoiceLineMeasurement,
invoiceLineSubtotal: _entity?.invoiceLineSubtotal,
invoiceLineCountryOfOrigin: _entity?.invoiceLineCountryOfOrigin,
invoiceLineTotalExcludingTax: _entity?.invoiceLineTotalExcludingTax,
invoiceLineTaxType: _entity?.invoiceLineTaxType,
invoiceLineTaxRate: _entity?.invoiceLineTaxRate,
invoiceLineTaxAmount: _entity?.invoiceLineTaxAmount,
invoiceLineDetailsOfTaxExemption: _entity?.invoiceLineDetailsOfTaxExemption,
invoiceLineTaxExemptionAmountExempted: _entity?.invoiceLineTaxExemptionAmountExempted,
invoiceLineDiscountRate: _entity?.invoiceLineDiscountRate,
discountDetailsOfAmount: _entity?.discountDetailsOfAmount,
invoiceLineDetailsOfDiscountDescription: _entity?.invoiceLineDetailsOfDiscountDescription,
invoiceLineDetailsOfChargeFeeChargeRate: _entity?.invoiceLineDetailsOfChargeFeeChargeRate,
invoiceLineDetailsOfChargeFeeChargeAmount: _entity?.invoiceLineDetailsOfChargeFeeChargeAmount,
detailsOfTaxTaxType: _entity?.detailsOfTaxTaxType,
detailsOfTaxTotalTaxableAmountPerTaxType: _entity?.detailsOfTaxTotalTaxableAmountPerTaxType,
detailsOfTaxTotalTaxAmountPerTaxType: _entity?.detailsOfTaxTotalTaxAmountPerTaxType,
taxExemptionDetailsOfTaxExemption: _entity?.taxExemptionDetailsOfTaxExemption,
taxExemptionAmountExemptedFromTax: _entity?.taxExemptionAmountExemptedFromTax,
discountAdditionalDiscountAmount: _entity?.discountAdditionalDiscountAmount,
discountAdditionalDescription: _entity?.discountAdditionalDescription,
feeAmountAdditionalFeeAmount: _entity?.feeAmountAdditionalFeeAmount,
feeAmountAdditionalDescription: _entity?.feeAmountAdditionalDescription,
totalDiscountValue: _entity?.totalDiscountValue,
totalFeeChargeAmount: _entity?.totalFeeChargeAmount,
totalTaxAmount: _entity?.totalTaxAmount,
totalExcludingTax: _entity?.totalExcludingTax,
totalNetAmount: _entity?.totalNetAmount,
totalIncludingTax: _entity?.totalIncludingTax,
roundingAmount: _entity?.roundingAmount,
totalPayableAmount: _entity?.totalPayableAmount,
invoiceNumber: _entity?.invoiceNumber,
consolidated: _entity?.consolidated,
        };

        setLoading(true);
        try {
            
        const result = await client.service("invoice").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info invoice updated successfully" });
        props.onEditResult(result);
        
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to update info");
            props.alert({ type: "error", title: "Edit info", message: "Failed to update info" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError({});
    };

    

    return (
        <Dialog header="Edit Invoice" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="invoice-edit-dialog-component">
                <div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="no">No:</label>
            <InputNumber id="no" className="w-full mb-3 p-inputtext-sm" value={_entity?.no} onChange={(e) => setValByKey("no", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoiceType">Invoice Type (*):</label>
            <InputText id="invoiceType" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoiceType} onChange={(e) => setValByKey("invoiceType", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoiceDateAndTime">Invoice Date and Time (*):</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="originalEInvoiceReferenceNumber">Original eInvoice Reference Number:</label>
            <InputText id="originalEInvoiceReferenceNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.originalEInvoiceReferenceNumber} onChange={(e) => setValByKey("originalEInvoiceReferenceNumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="suppliersName">Supplier's Name (*):</label>
            <InputText id="suppliersName" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliersName} onChange={(e) => setValByKey("suppliersName", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="suppliersTin">Supplier's TIN (*):</label>
            <InputText id="suppliersTin" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliersTin} onChange={(e) => setValByKey("suppliersTin", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="suppliersSstRegistrationNumber">Supplier's SST Registration Number:</label>
            <InputText id="suppliersSstRegistrationNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliersSstRegistrationNumber} onChange={(e) => setValByKey("suppliersSstRegistrationNumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="suppliersIdentifierType">Supplier's Identifier Type (*):</label>
            <InputText id="suppliersIdentifierType" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliersIdentifierType} onChange={(e) => setValByKey("suppliersIdentifierType", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="supplierIdentifierNumber">Supplier Identifier Number (*):</label>
            <InputText id="supplierIdentifierNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierIdentifierNumber} onChange={(e) => setValByKey("supplierIdentifierNumber", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="suppliersMsicCode">Supplier's MSIC code (*):</label>
            <InputText id="suppliersMsicCode" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliersMsicCode} onChange={(e) => setValByKey("suppliersMsicCode", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="suppliersTourismTaxRegistrationNumber">Supplier's Tourism Tax Registration Number:</label>
            <InputText id="suppliersTourismTaxRegistrationNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliersTourismTaxRegistrationNumber} onChange={(e) => setValByKey("suppliersTourismTaxRegistrationNumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="suppliersBusinessActivityDescription">Supplier's Business Activity Description (*):</label>
            <InputText id="suppliersBusinessActivityDescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliersBusinessActivityDescription} onChange={(e) => setValByKey("suppliersBusinessActivityDescription", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="suppliersEMail">Supplier's e-mail:</label>
            <InputText id="suppliersEMail" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliersEMail} onChange={(e) => setValByKey("suppliersEMail", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="theFirstSuppliersContactNumber">The first Supplier's contact number (*):</label>
            <InputText id="theFirstSuppliersContactNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.theFirstSuppliersContactNumber} onChange={(e) => setValByKey("theFirstSuppliersContactNumber", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="suppliersContactNumber">Supplier's contact number (*):</label>
            <InputText id="suppliersContactNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.suppliersContactNumber} onChange={(e) => setValByKey("suppliersContactNumber", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="supplierCountryName">Supplier Country name (*):</label>
            <InputText id="supplierCountryName" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierCountryName} onChange={(e) => setValByKey("supplierCountryName", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="supplierStateName">Supplier State name (*):</label>
            <InputText id="supplierStateName" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierStateName} onChange={(e) => setValByKey("supplierStateName", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="supplierCityName">Supplier City name (*):</label>
            <InputText id="supplierCityName" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierCityName} onChange={(e) => setValByKey("supplierCityName", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="supplierPostalZone">Supplier Postal zone:</label>
            <InputNumber id="supplierPostalZone" className="w-full mb-3 p-inputtext-sm" value={_entity?.supplierPostalZone} onChange={(e) => setValByKey("supplierPostalZone", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyersName">Buyer's name (*):</label>
            <InputText id="buyersName" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyersName} onChange={(e) => setValByKey("buyersName", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyersTin">Buyer's TIN:</label>
            <InputText id="buyersTin" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyersTin} onChange={(e) => setValByKey("buyersTin", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyersSstRegistrationNumber">Buyer's SST Registration Number:</label>
            <InputText id="buyersSstRegistrationNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyersSstRegistrationNumber} onChange={(e) => setValByKey("buyersSstRegistrationNumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyerIdentifierType">Buyer Identifier Type:</label>
            <InputText id="buyerIdentifierType" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyerIdentifierType} onChange={(e) => setValByKey("buyerIdentifierType", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="businessRegistrationNumberIdentificationNumberPassportNumber">Business registration number / Identification number / Passport number:</label>
            <InputText id="businessRegistrationNumberIdentificationNumberPassportNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.businessRegistrationNumberIdentificationNumberPassportNumber} onChange={(e) => setValByKey("businessRegistrationNumberIdentificationNumberPassportNumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyersEMail">Buyer's e-mail:</label>
            <InputText id="buyersEMail" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyersEMail} onChange={(e) => setValByKey("buyersEMail", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyersAddressCountryName">Buyer's address (*) (Country name):</label>
            <InputText id="buyersAddressCountryName" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyersAddressCountryName} onChange={(e) => setValByKey("buyersAddressCountryName", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyersAddressStateName">Buyer's address (*) (State name):</label>
            <InputText id="buyersAddressStateName" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyersAddressStateName} onChange={(e) => setValByKey("buyersAddressStateName", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyersAddressCityName">Buyer's address (City name):</label>
            <InputText id="buyersAddressCityName" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyersAddressCityName} onChange={(e) => setValByKey("buyersAddressCityName", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyersAddressPostalZone">Buyer's address (Postal zone):</label>
            <InputNumber id="buyersAddressPostalZone" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyersAddressPostalZone} onChange={(e) => setValByKey("buyersAddressPostalZone", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="theFirstBuyersContactNumber">The first buyer's contact number (*):</label>
            <InputText id="theFirstBuyersContactNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.theFirstBuyersContactNumber} onChange={(e) => setValByKey("theFirstBuyersContactNumber", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="buyersContactNumber">Buyer's Contact Number (*):</label>
            <InputText id="buyersContactNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.buyersContactNumber} onChange={(e) => setValByKey("buyersContactNumber", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="paymentInformationInvoiceCurrency">Payment information Invoice Currency (*):</label>
            <InputText id="paymentInformationInvoiceCurrency" className="w-full mb-3 p-inputtext-sm" value={_entity?.paymentInformationInvoiceCurrency} onChange={(e) => setValByKey("paymentInformationInvoiceCurrency", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="paymentInformationCurrencyExchangeRate">Payment information Currency Exchange Rate:</label>
            <InputNumber id="paymentInformationCurrencyExchangeRate" className="w-full mb-3 p-inputtext-sm" value={_entity?.paymentInformationCurrencyExchangeRate} onChange={(e) => setValByKey("paymentInformationCurrencyExchangeRate", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="paymentInformationFrequencyOfBilling">Payment information Frequency of Billing:</label>
            <InputText id="paymentInformationFrequencyOfBilling" className="w-full mb-3 p-inputtext-sm" value={_entity?.paymentInformationFrequencyOfBilling} onChange={(e) => setValByKey("paymentInformationFrequencyOfBilling", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="paymentInformationBillingPeriodStartDate">Payment information Billing Period Start Date:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="paymentInformationBillingPeriodEndDate">Payment information Billing Period End Date:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="paymentInformationPaymentMode">Payment information Payment Mode:</label>
            <InputText id="paymentInformationPaymentMode" className="w-full mb-3 p-inputtext-sm" value={_entity?.paymentInformationPaymentMode} onChange={(e) => setValByKey("paymentInformationPaymentMode", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="paymentInformationSuppliersBankAccountNumber">Payment information Supplier's Bank Account Number:</label>
            <InputText id="paymentInformationSuppliersBankAccountNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.paymentInformationSuppliersBankAccountNumber} onChange={(e) => setValByKey("paymentInformationSuppliersBankAccountNumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="paymentInformationPaymentTerms">Payment information Payment Terms:</label>
            <InputText id="paymentInformationPaymentTerms" className="w-full mb-3 p-inputtext-sm" value={_entity?.paymentInformationPaymentTerms} onChange={(e) => setValByKey("paymentInformationPaymentTerms", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="paymentInformationPrePaymentAmount">Payment information PrePayment Amount:</label>
            <InputText id="paymentInformationPrePaymentAmount" className="w-full mb-3 p-inputtext-sm" value={_entity?.paymentInformationPrePaymentAmount} onChange={(e) => setValByKey("paymentInformationPrePaymentAmount", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="paymentInformationPrePaymentDate">Payment information PrePayment Date:</label>
            undefined
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="paymentInformationPrePaymentReferenceNumber">Payment information PrePayment Reference Number:</label>
            <InputText id="paymentInformationPrePaymentReferenceNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.paymentInformationPrePaymentReferenceNumber} onChange={(e) => setValByKey("paymentInformationPrePaymentReferenceNumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingRecipientsName">Shipping Recipient's Name:</label>
            <InputText id="shippingRecipientsName" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingRecipientsName} onChange={(e) => setValByKey("shippingRecipientsName", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingRecipientsAddressCountryName">Shipping Recipient’s Address Country name:</label>
            <InputText id="shippingRecipientsAddressCountryName" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingRecipientsAddressCountryName} onChange={(e) => setValByKey("shippingRecipientsAddressCountryName", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingRecipientsAddressStateName">Shipping Recipient’s Address State name:</label>
            <InputText id="shippingRecipientsAddressStateName" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingRecipientsAddressStateName} onChange={(e) => setValByKey("shippingRecipientsAddressStateName", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingRecipientsAddressCityName">Shipping Recipient’s Address City name:</label>
            <InputText id="shippingRecipientsAddressCityName" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingRecipientsAddressCityName} onChange={(e) => setValByKey("shippingRecipientsAddressCityName", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingRecipientsAddressPostalZone">Shipping Recipient’s Address Postal Zone:</label>
            <InputNumber id="shippingRecipientsAddressPostalZone" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingRecipientsAddressPostalZone} onChange={(e) => setValByKey("shippingRecipientsAddressPostalZone", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingRecipientsTin">Shipping Recipient's TIN:</label>
            <InputText id="shippingRecipientsTin" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingRecipientsTin} onChange={(e) => setValByKey("shippingRecipientsTin", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingRecipientsIdentifierType">Shipping Recipient's Identifier type:</label>
            <InputText id="shippingRecipientsIdentifierType" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingRecipientsIdentifierType} onChange={(e) => setValByKey("shippingRecipientsIdentifierType", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingRecipientsInformationBusinessRegistrationNumberIdentificationNumberPassportNumber">Shipping Recipient's Information Business registration number/ Identification number / Passport number:</label>
            <InputText id="shippingRecipientsInformationBusinessRegistrationNumberIdentificationNumberPassportNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingRecipientsInformationBusinessRegistrationNumberIdentificationNumberPassportNumber} onChange={(e) => setValByKey("shippingRecipientsInformationBusinessRegistrationNumberIdentificationNumberPassportNumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="otherInformationBillReferenceNumber">Other Information Bill  Reference Number:</label>
            <InputText id="otherInformationBillReferenceNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.otherInformationBillReferenceNumber} onChange={(e) => setValByKey("otherInformationBillReferenceNumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="otherInformationReferenceNumberOfCustomsFormNo19Etc">Other Information Reference Number of Customs Form No.1, 9, etc.:</label>
            <InputText id="otherInformationReferenceNumberOfCustomsFormNo19Etc" className="w-full mb-3 p-inputtext-sm" value={_entity?.otherInformationReferenceNumberOfCustomsFormNo19Etc} onChange={(e) => setValByKey("otherInformationReferenceNumberOfCustomsFormNo19Etc", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="otherInformationIncoterms">Other Information Incoterms:</label>
            <InputText id="otherInformationIncoterms" className="w-full mb-3 p-inputtext-sm" value={_entity?.otherInformationIncoterms} onChange={(e) => setValByKey("otherInformationIncoterms", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="otherInformationFreeTradeAgreementFtaInformation">Other Information Free Trade Agreement (FTA) Information:</label>
            <InputText id="otherInformationFreeTradeAgreementFtaInformation" className="w-full mb-3 p-inputtext-sm" value={_entity?.otherInformationFreeTradeAgreementFtaInformation} onChange={(e) => setValByKey("otherInformationFreeTradeAgreementFtaInformation", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="otherInformationAuthorisationNumberForCertifiedExporter">Other Information Authorisation Number for Certified Exporter:</label>
            <InputText id="otherInformationAuthorisationNumberForCertifiedExporter" className="w-full mb-3 p-inputtext-sm" value={_entity?.otherInformationAuthorisationNumberForCertifiedExporter} onChange={(e) => setValByKey("otherInformationAuthorisationNumberForCertifiedExporter", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="otherInformationReferenceNumberOfCustomsFormNo2">Other Information Reference Number of Customs Form No.2:</label>
            <InputText id="otherInformationReferenceNumberOfCustomsFormNo2" className="w-full mb-3 p-inputtext-sm" value={_entity?.otherInformationReferenceNumberOfCustomsFormNo2} onChange={(e) => setValByKey("otherInformationReferenceNumberOfCustomsFormNo2", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoiceLineNo">Invoice Line No:</label>
            <InputNumber id="invoiceLineNo" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoiceLineNo} onChange={(e) => setValByKey("invoiceLineNo", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoiceLineClassification">Invoice Line Classification (*):</label>
            <InputText id="invoiceLineClassification" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoiceLineClassification} onChange={(e) => setValByKey("invoiceLineClassification", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoiceLineProductName">Invoice Line Product name (*):</label>
            <InputText id="invoiceLineProductName" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoiceLineProductName} onChange={(e) => setValByKey("invoiceLineProductName", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoiceLineQuantity">Invoice Line Quantity:</label>
            <InputNumber id="invoiceLineQuantity" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoiceLineQuantity} onChange={(e) => setValByKey("invoiceLineQuantity", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoiceLineUnitPrice">Invoice Line Unit Price (*):</label>
            <InputNumber id="invoiceLineUnitPrice" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoiceLineUnitPrice} onChange={(e) => setValByKey("invoiceLineUnitPrice", e.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoiceLineMeasurement">Invoice Line Measurement:</label>
            <InputText id="invoiceLineMeasurement" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoiceLineMeasurement} onChange={(e) => setValByKey("invoiceLineMeasurement", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoiceLineSubtotal">Invoice Line Subtotal (*):</label>
            <InputNumber id="invoiceLineSubtotal" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoiceLineSubtotal} onChange={(e) => setValByKey("invoiceLineSubtotal", e.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoiceLineCountryOfOrigin">Invoice Line Country of Origin:</label>
            <InputText id="invoiceLineCountryOfOrigin" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoiceLineCountryOfOrigin} onChange={(e) => setValByKey("invoiceLineCountryOfOrigin", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoiceLineTotalExcludingTax">Invoice Line Total Excluding Tax(*):</label>
            <InputNumber id="invoiceLineTotalExcludingTax" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoiceLineTotalExcludingTax} onChange={(e) => setValByKey("invoiceLineTotalExcludingTax", e.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoiceLineTaxType">Invoice Line Tax Type (*):</label>
            <InputText id="invoiceLineTaxType" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoiceLineTaxType} onChange={(e) => setValByKey("invoiceLineTaxType", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoiceLineTaxRate">Invoice Line Tax Rate (%):</label>
            <InputNumber id="invoiceLineTaxRate" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoiceLineTaxRate} onChange={(e) => setValByKey("invoiceLineTaxRate", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoiceLineTaxAmount">Invoice Line Tax Amount (*):</label>
            <InputNumber id="invoiceLineTaxAmount" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoiceLineTaxAmount} onChange={(e) => setValByKey("invoiceLineTaxAmount", e.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoiceLineDetailsOfTaxExemption">Invoice Line Details of Tax Exemption:</label>
            <InputText id="invoiceLineDetailsOfTaxExemption" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoiceLineDetailsOfTaxExemption} onChange={(e) => setValByKey("invoiceLineDetailsOfTaxExemption", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoiceLineTaxExemptionAmountExempted">Invoice Line Tax Exemption Amount Exempted:</label>
            <InputNumber id="invoiceLineTaxExemptionAmountExempted" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoiceLineTaxExemptionAmountExempted} onChange={(e) => setValByKey("invoiceLineTaxExemptionAmountExempted", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoiceLineDiscountRate">Invoice Line Discount Rate (%):</label>
            <InputNumber id="invoiceLineDiscountRate" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoiceLineDiscountRate} onChange={(e) => setValByKey("invoiceLineDiscountRate", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="discountDetailsOfAmount">Discount Details of Amount:</label>
            <InputNumber id="discountDetailsOfAmount" className="w-full mb-3 p-inputtext-sm" value={_entity?.discountDetailsOfAmount} onChange={(e) => setValByKey("discountDetailsOfAmount", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoiceLineDetailsOfDiscountDescription">Invoice Line Details of Discount Description:</label>
            <InputText id="invoiceLineDetailsOfDiscountDescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoiceLineDetailsOfDiscountDescription} onChange={(e) => setValByKey("invoiceLineDetailsOfDiscountDescription", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoiceLineDetailsOfChargeFeeChargeRate">Invoice Line Details of Charge Fee/Charge Rate (%):</label>
            <InputNumber id="invoiceLineDetailsOfChargeFeeChargeRate" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoiceLineDetailsOfChargeFeeChargeRate} onChange={(e) => setValByKey("invoiceLineDetailsOfChargeFeeChargeRate", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoiceLineDetailsOfChargeFeeChargeAmount">Invoice Line Details of Charge Fee/Charge Amount:</label>
            <InputNumber id="invoiceLineDetailsOfChargeFeeChargeAmount" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoiceLineDetailsOfChargeFeeChargeAmount} onChange={(e) => setValByKey("invoiceLineDetailsOfChargeFeeChargeAmount", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="detailsOfTaxTaxType">Details of tax Tax Type (*):</label>
            <InputText id="detailsOfTaxTaxType" className="w-full mb-3 p-inputtext-sm" value={_entity?.detailsOfTaxTaxType} onChange={(e) => setValByKey("detailsOfTaxTaxType", e.target.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="detailsOfTaxTotalTaxableAmountPerTaxType">Details of tax Total Taxable Amount per Tax Type:</label>
            <InputNumber id="detailsOfTaxTotalTaxableAmountPerTaxType" className="w-full mb-3 p-inputtext-sm" value={_entity?.detailsOfTaxTotalTaxableAmountPerTaxType} onChange={(e) => setValByKey("detailsOfTaxTotalTaxableAmountPerTaxType", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="detailsOfTaxTotalTaxAmountPerTaxType">Details of tax Total Tax Amount Per Tax Type (*):</label>
            <InputNumber id="detailsOfTaxTotalTaxAmountPerTaxType" className="w-full mb-3 p-inputtext-sm" value={_entity?.detailsOfTaxTotalTaxAmountPerTaxType} onChange={(e) => setValByKey("detailsOfTaxTotalTaxAmountPerTaxType", e.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="taxExemptionDetailsOfTaxExemption">Tax exemption Details of Tax Exemption:</label>
            <InputText id="taxExemptionDetailsOfTaxExemption" className="w-full mb-3 p-inputtext-sm" value={_entity?.taxExemptionDetailsOfTaxExemption} onChange={(e) => setValByKey("taxExemptionDetailsOfTaxExemption", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="taxExemptionAmountExemptedFromTax">Tax exemption Amount Exempted from Tax:</label>
            <InputNumber id="taxExemptionAmountExemptedFromTax" className="w-full mb-3 p-inputtext-sm" value={_entity?.taxExemptionAmountExemptedFromTax} onChange={(e) => setValByKey("taxExemptionAmountExemptedFromTax", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="discountAdditionalDiscountAmount">Discount Additional Discount Amount:</label>
            <InputNumber id="discountAdditionalDiscountAmount" className="w-full mb-3 p-inputtext-sm" value={_entity?.discountAdditionalDiscountAmount} onChange={(e) => setValByKey("discountAdditionalDiscountAmount", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="discountAdditionalDescription">Discount Additional Description:</label>
            <InputText id="discountAdditionalDescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.discountAdditionalDescription} onChange={(e) => setValByKey("discountAdditionalDescription", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="feeAmountAdditionalFeeAmount">Fee Amount Additional Fee Amount:</label>
            <InputNumber id="feeAmountAdditionalFeeAmount" className="w-full mb-3 p-inputtext-sm" value={_entity?.feeAmountAdditionalFeeAmount} onChange={(e) => setValByKey("feeAmountAdditionalFeeAmount", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="feeAmountAdditionalDescription">Fee Amount Additional Description:</label>
            <InputText id="feeAmountAdditionalDescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.feeAmountAdditionalDescription} onChange={(e) => setValByKey("feeAmountAdditionalDescription", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="totalDiscountValue">Total Discount Value:</label>
            <InputNumber id="totalDiscountValue" className="w-full mb-3 p-inputtext-sm" value={_entity?.totalDiscountValue} onChange={(e) => setValByKey("totalDiscountValue", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="totalFeeChargeAmount">Total Fee/Charge Amount:</label>
            <InputNumber id="totalFeeChargeAmount" className="w-full mb-3 p-inputtext-sm" value={_entity?.totalFeeChargeAmount} onChange={(e) => setValByKey("totalFeeChargeAmount", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="totalTaxAmount">Total Tax Amount (*):</label>
            <InputNumber id="totalTaxAmount" className="w-full mb-3 p-inputtext-sm" value={_entity?.totalTaxAmount} onChange={(e) => setValByKey("totalTaxAmount", e.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="totalExcludingTax">Total Excluding Tax (*):</label>
            <InputNumber id="totalExcludingTax" className="w-full mb-3 p-inputtext-sm" value={_entity?.totalExcludingTax} onChange={(e) => setValByKey("totalExcludingTax", e.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="totalNetAmount">Total Net Amount:</label>
            <InputNumber id="totalNetAmount" className="w-full mb-3 p-inputtext-sm" value={_entity?.totalNetAmount} onChange={(e) => setValByKey("totalNetAmount", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="totalIncludingTax">Total Including Tax (*):</label>
            <InputNumber id="totalIncludingTax" className="w-full mb-3 p-inputtext-sm" value={_entity?.totalIncludingTax} onChange={(e) => setValByKey("totalIncludingTax", e.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="roundingAmount">Rounding Amount:</label>
            <InputNumber id="roundingAmount" className="w-full mb-3 p-inputtext-sm" value={_entity?.roundingAmount} onChange={(e) => setValByKey("roundingAmount", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="totalPayableAmount">Total Payable Amount (*):</label>
            <InputNumber id="totalPayableAmount" className="w-full mb-3 p-inputtext-sm" value={_entity?.totalPayableAmount} onChange={(e) => setValByKey("totalPayableAmount", e.value)}  required  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="invoiceNumber">Invoice Number:</label>
            <InputText id="invoiceNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.invoiceNumber} onChange={(e) => setValByKey("invoiceNumber", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="consolidated">Original eInvoice Reference Number:</label>
            <InputText id="consolidated" className="w-full mb-3 p-inputtext-sm" value={_entity?.consolidated} onChange={(e) => setValByKey("consolidated", e.target.value)}  />
        </span>
        </div>
                <div className="col-12">&nbsp;</div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0"><Tag value="created At:"></Tag>{" " + moment(_entity?.createdAt).fromNow()}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0"><Tag value="created By:"></Tag>{" " +_entity?.createdBy?.name}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0"><Tag value="last Updated At:"></Tag>{" " + moment(_entity?.updatedAt).fromNow()}</p></div>
                <div className="col-12 md:col-6 field mt-5"><p className="m-0"><Tag value="last Updated By:"></Tag>{" " +_entity?.updatedBy?.name}</p></div>
                <small className="p-error">
                {Array.isArray(Object.keys(error))
                ? Object.keys(error).map((e, i) => (
                    <p className="m-0" key={i}>
                        {e}: {error[e]}
                    </p>
                    ))
                : error}
            </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(InvoiceCreateDialogComponent);
