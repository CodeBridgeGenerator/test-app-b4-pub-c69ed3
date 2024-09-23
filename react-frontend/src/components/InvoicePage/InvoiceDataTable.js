import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState, useRef } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { useParams } from "react-router-dom";
import moment from "moment";
import UploadService from "../../services/uploadService";
import { InputText } from 'primereact/inputtext';
import { Dialog } from "primereact/dialog";
import { MultiSelect } from "primereact/multiselect";
import DownloadCSV from "../../utils/DownloadCSV";

const InvoiceDataTable = ({ items, fields, onEditRow, onRowDelete, onRowClick, searchDialog, setSearchDialog,   showUpload, setShowUpload,
    showFilter, setShowFilter,
    showColumns, setShowColumns, onClickSaveFilteredfields ,
    selectedFilterFields, setSelectedFilterFields,
    selectedHideFields, setSelectedHideFields, onClickSaveHiddenfields, loading, user}) => {
    const dt = useRef(null);
    const urlParams = useParams();
    const [globalFilter, setGlobalFilter] = useState('');

const p_numberTemplate0 = (rowData, { rowIndex }) => <p >{rowData.no}</p>
const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.invoiceType}</p>
const p_dateTemplate2 = (rowData, { rowIndex }) => <p >{(new Date(rowData.invoiceDateAndTime)).toLocaleDateString()}</p>
const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.originalEInvoiceReferenceNumber}</p>
const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.suppliersName}</p>
const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.suppliersTin}</p>
const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.suppliersSstRegistrationNumber}</p>
const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.suppliersIdentifierType}</p>
const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.supplierIdentifierNumber}</p>
const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.suppliersMsicCode}</p>
const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.suppliersTourismTaxRegistrationNumber}</p>
const pTemplate11 = (rowData, { rowIndex }) => <p >{rowData.suppliersBusinessActivityDescription}</p>
const pTemplate12 = (rowData, { rowIndex }) => <p >{rowData.suppliersEMail}</p>
const pTemplate13 = (rowData, { rowIndex }) => <p >{rowData.theFirstSuppliersContactNumber}</p>
const pTemplate14 = (rowData, { rowIndex }) => <p >{rowData.suppliersContactNumber}</p>
const pTemplate15 = (rowData, { rowIndex }) => <p >{rowData.supplierCountryName}</p>
const pTemplate16 = (rowData, { rowIndex }) => <p >{rowData.supplierStateName}</p>
const pTemplate17 = (rowData, { rowIndex }) => <p >{rowData.supplierCityName}</p>
const p_numberTemplate18 = (rowData, { rowIndex }) => <p >{rowData.supplierPostalZone}</p>
const pTemplate19 = (rowData, { rowIndex }) => <p >{rowData.buyersName}</p>
const pTemplate20 = (rowData, { rowIndex }) => <p >{rowData.buyersTin}</p>
const pTemplate21 = (rowData, { rowIndex }) => <p >{rowData.buyersSstRegistrationNumber}</p>
const pTemplate22 = (rowData, { rowIndex }) => <p >{rowData.buyerIdentifierType}</p>
const pTemplate23 = (rowData, { rowIndex }) => <p >{rowData.businessRegistrationNumberIdentificationNumberPassportNumber}</p>
const pTemplate24 = (rowData, { rowIndex }) => <p >{rowData.buyersEMail}</p>
const pTemplate25 = (rowData, { rowIndex }) => <p >{rowData.buyersAddressCountryName}</p>
const pTemplate26 = (rowData, { rowIndex }) => <p >{rowData.buyersAddressStateName}</p>
const pTemplate27 = (rowData, { rowIndex }) => <p >{rowData.buyersAddressCityName}</p>
const p_numberTemplate28 = (rowData, { rowIndex }) => <p >{rowData.buyersAddressPostalZone}</p>
const pTemplate29 = (rowData, { rowIndex }) => <p >{rowData.theFirstBuyersContactNumber}</p>
const pTemplate30 = (rowData, { rowIndex }) => <p >{rowData.buyersContactNumber}</p>
const pTemplate31 = (rowData, { rowIndex }) => <p >{rowData.paymentInformationInvoiceCurrency}</p>
const p_numberTemplate32 = (rowData, { rowIndex }) => <p >{rowData.paymentInformationCurrencyExchangeRate}</p>
const pTemplate33 = (rowData, { rowIndex }) => <p >{rowData.paymentInformationFrequencyOfBilling}</p>
const p_dateTemplate34 = (rowData, { rowIndex }) => <p >{(new Date(rowData.paymentInformationBillingPeriodStartDate)).toLocaleDateString()}</p>
const p_dateTemplate35 = (rowData, { rowIndex }) => <p >{(new Date(rowData.paymentInformationBillingPeriodEndDate)).toLocaleDateString()}</p>
const pTemplate36 = (rowData, { rowIndex }) => <p >{rowData.paymentInformationPaymentMode}</p>
const pTemplate37 = (rowData, { rowIndex }) => <p >{rowData.paymentInformationSuppliersBankAccountNumber}</p>
const pTemplate38 = (rowData, { rowIndex }) => <p >{rowData.paymentInformationPaymentTerms}</p>
const pTemplate39 = (rowData, { rowIndex }) => <p >{rowData.paymentInformationPrePaymentAmount}</p>
const p_dateTemplate40 = (rowData, { rowIndex }) => <p >{(new Date(rowData.paymentInformationPrePaymentDate)).toLocaleDateString()}</p>
const pTemplate41 = (rowData, { rowIndex }) => <p >{rowData.paymentInformationPrePaymentReferenceNumber}</p>
const pTemplate42 = (rowData, { rowIndex }) => <p >{rowData.shippingRecipientsName}</p>
const pTemplate43 = (rowData, { rowIndex }) => <p >{rowData.shippingRecipientsAddressCountryName}</p>
const pTemplate44 = (rowData, { rowIndex }) => <p >{rowData.shippingRecipientsAddressStateName}</p>
const pTemplate45 = (rowData, { rowIndex }) => <p >{rowData.shippingRecipientsAddressCityName}</p>
const p_numberTemplate46 = (rowData, { rowIndex }) => <p >{rowData.shippingRecipientsAddressPostalZone}</p>
const pTemplate47 = (rowData, { rowIndex }) => <p >{rowData.shippingRecipientsTin}</p>
const pTemplate48 = (rowData, { rowIndex }) => <p >{rowData.shippingRecipientsIdentifierType}</p>
const pTemplate49 = (rowData, { rowIndex }) => <p >{rowData.shippingRecipientsInformationBusinessRegistrationNumberIdentificationNumberPassportNumber}</p>
const pTemplate50 = (rowData, { rowIndex }) => <p >{rowData.otherInformationBillReferenceNumber}</p>
const pTemplate51 = (rowData, { rowIndex }) => <p >{rowData.otherInformationReferenceNumberOfCustomsFormNo19Etc}</p>
const pTemplate52 = (rowData, { rowIndex }) => <p >{rowData.otherInformationIncoterms}</p>
const pTemplate53 = (rowData, { rowIndex }) => <p >{rowData.otherInformationFreeTradeAgreementFtaInformation}</p>
const pTemplate54 = (rowData, { rowIndex }) => <p >{rowData.otherInformationAuthorisationNumberForCertifiedExporter}</p>
const pTemplate55 = (rowData, { rowIndex }) => <p >{rowData.otherInformationReferenceNumberOfCustomsFormNo2}</p>
const p_numberTemplate56 = (rowData, { rowIndex }) => <p >{rowData.invoiceLineNo}</p>
const pTemplate57 = (rowData, { rowIndex }) => <p >{rowData.invoiceLineClassification}</p>
const pTemplate58 = (rowData, { rowIndex }) => <p >{rowData.invoiceLineProductName}</p>
const p_numberTemplate59 = (rowData, { rowIndex }) => <p >{rowData.invoiceLineQuantity}</p>
const p_numberTemplate60 = (rowData, { rowIndex }) => <p >{rowData.invoiceLineUnitPrice}</p>
const pTemplate61 = (rowData, { rowIndex }) => <p >{rowData.invoiceLineMeasurement}</p>
const p_numberTemplate62 = (rowData, { rowIndex }) => <p >{rowData.invoiceLineSubtotal}</p>
const pTemplate63 = (rowData, { rowIndex }) => <p >{rowData.invoiceLineCountryOfOrigin}</p>
const p_numberTemplate64 = (rowData, { rowIndex }) => <p >{rowData.invoiceLineTotalExcludingTax}</p>
const pTemplate65 = (rowData, { rowIndex }) => <p >{rowData.invoiceLineTaxType}</p>
const p_numberTemplate66 = (rowData, { rowIndex }) => <p >{rowData.invoiceLineTaxRate}</p>
const p_numberTemplate67 = (rowData, { rowIndex }) => <p >{rowData.invoiceLineTaxAmount}</p>
const pTemplate68 = (rowData, { rowIndex }) => <p >{rowData.invoiceLineDetailsOfTaxExemption}</p>
const p_numberTemplate69 = (rowData, { rowIndex }) => <p >{rowData.invoiceLineTaxExemptionAmountExempted}</p>
const p_numberTemplate70 = (rowData, { rowIndex }) => <p >{rowData.invoiceLineDiscountRate}</p>
const p_numberTemplate71 = (rowData, { rowIndex }) => <p >{rowData.discountDetailsOfAmount}</p>
const pTemplate72 = (rowData, { rowIndex }) => <p >{rowData.invoiceLineDetailsOfDiscountDescription}</p>
const p_numberTemplate73 = (rowData, { rowIndex }) => <p >{rowData.invoiceLineDetailsOfChargeFeeChargeRate}</p>
const p_numberTemplate74 = (rowData, { rowIndex }) => <p >{rowData.invoiceLineDetailsOfChargeFeeChargeAmount}</p>
const pTemplate75 = (rowData, { rowIndex }) => <p >{rowData.detailsOfTaxTaxType}</p>
const p_numberTemplate76 = (rowData, { rowIndex }) => <p >{rowData.detailsOfTaxTotalTaxableAmountPerTaxType}</p>
const p_numberTemplate77 = (rowData, { rowIndex }) => <p >{rowData.detailsOfTaxTotalTaxAmountPerTaxType}</p>
const pTemplate78 = (rowData, { rowIndex }) => <p >{rowData.taxExemptionDetailsOfTaxExemption}</p>
const p_numberTemplate79 = (rowData, { rowIndex }) => <p >{rowData.taxExemptionAmountExemptedFromTax}</p>
const p_numberTemplate80 = (rowData, { rowIndex }) => <p >{rowData.discountAdditionalDiscountAmount}</p>
const pTemplate81 = (rowData, { rowIndex }) => <p >{rowData.discountAdditionalDescription}</p>
const p_numberTemplate82 = (rowData, { rowIndex }) => <p >{rowData.feeAmountAdditionalFeeAmount}</p>
const pTemplate83 = (rowData, { rowIndex }) => <p >{rowData.feeAmountAdditionalDescription}</p>
const p_numberTemplate84 = (rowData, { rowIndex }) => <p >{rowData.totalDiscountValue}</p>
const p_numberTemplate85 = (rowData, { rowIndex }) => <p >{rowData.totalFeeChargeAmount}</p>
const p_numberTemplate86 = (rowData, { rowIndex }) => <p >{rowData.totalTaxAmount}</p>
const p_numberTemplate87 = (rowData, { rowIndex }) => <p >{rowData.totalExcludingTax}</p>
const p_numberTemplate88 = (rowData, { rowIndex }) => <p >{rowData.totalNetAmount}</p>
const p_numberTemplate89 = (rowData, { rowIndex }) => <p >{rowData.totalIncludingTax}</p>
const p_numberTemplate90 = (rowData, { rowIndex }) => <p >{rowData.roundingAmount}</p>
const p_numberTemplate91 = (rowData, { rowIndex }) => <p >{rowData.totalPayableAmount}</p>
const pTemplate92 = (rowData, { rowIndex }) => <p >{rowData.invoiceNumber}</p>
const pTemplate93 = (rowData, { rowIndex }) => <p >{rowData.consolidated}</p>
    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowData._id)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.createdAt).fromNow()}</p>;
    const pUpdatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.updatedAt).fromNow()}</p>;
    const pCreatedBy = (rowData, { rowIndex }) => <p>{rowData.createdBy?.name}</p>;
    const pUpdatedBy = (rowData, { rowIndex }) => <p>{rowData.updatedBy?.name}</p>;
    const paginatorLeft = <Button type="button" icon="pi pi-upload" text onClick={() => setShowUpload(true)} disabled={!true}/>;
    const paginatorRight = DownloadCSV({ data : items, fileName : "invoice"});
    const exportCSV = () => {dt.current?.exportCSV();};

    return (
        <>
        <DataTable value={items} ref={dt} removableSort onRowClick={onRowClick} scrollable rowHover stripedRows paginator rows={10} rowsPerPageOptions={[10, 50, 250, 500]} size={"small"}  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} rowClassName="cursor-pointer" alwaysShowPaginator={!urlParams.singleUsersId} loading={loading}>
<Column field="no" header="No" body={p_numberTemplate0} filter={selectedFilterFields.includes("no")} hidden={selectedHideFields?.includes("no")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoiceType" header="Invoice Type (*)" body={pTemplate1} filter={selectedFilterFields.includes("invoiceType")} hidden={selectedHideFields?.includes("invoiceType")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoiceDateAndTime" header="Invoice Date and Time (*)" body={p_dateTemplate2} filter={selectedFilterFields.includes("invoiceDateAndTime")} hidden={selectedHideFields?.includes("invoiceDateAndTime")}  sortable style={{ minWidth: "8rem" }} />
<Column field="originalEInvoiceReferenceNumber" header="Original eInvoice Reference Number" body={pTemplate3} filter={selectedFilterFields.includes("originalEInvoiceReferenceNumber")} hidden={selectedHideFields?.includes("originalEInvoiceReferenceNumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliersName" header="Supplier's Name (*)" body={pTemplate4} filter={selectedFilterFields.includes("suppliersName")} hidden={selectedHideFields?.includes("suppliersName")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliersTin" header="Supplier's TIN (*)" body={pTemplate5} filter={selectedFilterFields.includes("suppliersTin")} hidden={selectedHideFields?.includes("suppliersTin")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliersSstRegistrationNumber" header="Supplier's SST Registration Number" body={pTemplate6} filter={selectedFilterFields.includes("suppliersSstRegistrationNumber")} hidden={selectedHideFields?.includes("suppliersSstRegistrationNumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliersIdentifierType" header="Supplier's Identifier Type (*)" body={pTemplate7} filter={selectedFilterFields.includes("suppliersIdentifierType")} hidden={selectedHideFields?.includes("suppliersIdentifierType")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplierIdentifierNumber" header="Supplier Identifier Number (*)" body={pTemplate8} filter={selectedFilterFields.includes("supplierIdentifierNumber")} hidden={selectedHideFields?.includes("supplierIdentifierNumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliersMsicCode" header="Supplier's MSIC code (*)" body={pTemplate9} filter={selectedFilterFields.includes("suppliersMsicCode")} hidden={selectedHideFields?.includes("suppliersMsicCode")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliersTourismTaxRegistrationNumber" header="Supplier's Tourism Tax Registration Number" body={pTemplate10} filter={selectedFilterFields.includes("suppliersTourismTaxRegistrationNumber")} hidden={selectedHideFields?.includes("suppliersTourismTaxRegistrationNumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliersBusinessActivityDescription" header="Supplier's Business Activity Description (*)" body={pTemplate11} filter={selectedFilterFields.includes("suppliersBusinessActivityDescription")} hidden={selectedHideFields?.includes("suppliersBusinessActivityDescription")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliersEMail" header="Supplier's e-mail" body={pTemplate12} filter={selectedFilterFields.includes("suppliersEMail")} hidden={selectedHideFields?.includes("suppliersEMail")}  sortable style={{ minWidth: "8rem" }} />
<Column field="theFirstSuppliersContactNumber" header="The first Supplier's contact number (*)" body={pTemplate13} filter={selectedFilterFields.includes("theFirstSuppliersContactNumber")} hidden={selectedHideFields?.includes("theFirstSuppliersContactNumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="suppliersContactNumber" header="Supplier's contact number (*)" body={pTemplate14} filter={selectedFilterFields.includes("suppliersContactNumber")} hidden={selectedHideFields?.includes("suppliersContactNumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplierCountryName" header="Supplier Country name (*)" body={pTemplate15} filter={selectedFilterFields.includes("supplierCountryName")} hidden={selectedHideFields?.includes("supplierCountryName")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplierStateName" header="Supplier State name (*)" body={pTemplate16} filter={selectedFilterFields.includes("supplierStateName")} hidden={selectedHideFields?.includes("supplierStateName")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplierCityName" header="Supplier City name (*)" body={pTemplate17} filter={selectedFilterFields.includes("supplierCityName")} hidden={selectedHideFields?.includes("supplierCityName")}  sortable style={{ minWidth: "8rem" }} />
<Column field="supplierPostalZone" header="Supplier Postal zone" body={p_numberTemplate18} filter={selectedFilterFields.includes("supplierPostalZone")} hidden={selectedHideFields?.includes("supplierPostalZone")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyersName" header="Buyer's name (*)" body={pTemplate19} filter={selectedFilterFields.includes("buyersName")} hidden={selectedHideFields?.includes("buyersName")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyersTin" header="Buyer's TIN" body={pTemplate20} filter={selectedFilterFields.includes("buyersTin")} hidden={selectedHideFields?.includes("buyersTin")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyersSstRegistrationNumber" header="Buyer's SST Registration Number" body={pTemplate21} filter={selectedFilterFields.includes("buyersSstRegistrationNumber")} hidden={selectedHideFields?.includes("buyersSstRegistrationNumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyerIdentifierType" header="Buyer Identifier Type" body={pTemplate22} filter={selectedFilterFields.includes("buyerIdentifierType")} hidden={selectedHideFields?.includes("buyerIdentifierType")}  sortable style={{ minWidth: "8rem" }} />
<Column field="businessRegistrationNumberIdentificationNumberPassportNumber" header="Business registration number / Identification number / Passport number" body={pTemplate23} filter={selectedFilterFields.includes("businessRegistrationNumberIdentificationNumberPassportNumber")} hidden={selectedHideFields?.includes("businessRegistrationNumberIdentificationNumberPassportNumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyersEMail" header="Buyer's e-mail" body={pTemplate24} filter={selectedFilterFields.includes("buyersEMail")} hidden={selectedHideFields?.includes("buyersEMail")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyersAddressCountryName" header="Buyer's address (*) (Country name)" body={pTemplate25} filter={selectedFilterFields.includes("buyersAddressCountryName")} hidden={selectedHideFields?.includes("buyersAddressCountryName")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyersAddressStateName" header="Buyer's address (*) (State name)" body={pTemplate26} filter={selectedFilterFields.includes("buyersAddressStateName")} hidden={selectedHideFields?.includes("buyersAddressStateName")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyersAddressCityName" header="Buyer's address (City name)" body={pTemplate27} filter={selectedFilterFields.includes("buyersAddressCityName")} hidden={selectedHideFields?.includes("buyersAddressCityName")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyersAddressPostalZone" header="Buyer's address (Postal zone)" body={p_numberTemplate28} filter={selectedFilterFields.includes("buyersAddressPostalZone")} hidden={selectedHideFields?.includes("buyersAddressPostalZone")}  sortable style={{ minWidth: "8rem" }} />
<Column field="theFirstBuyersContactNumber" header="The first buyer's contact number (*)" body={pTemplate29} filter={selectedFilterFields.includes("theFirstBuyersContactNumber")} hidden={selectedHideFields?.includes("theFirstBuyersContactNumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="buyersContactNumber" header="Buyer's Contact Number (*)" body={pTemplate30} filter={selectedFilterFields.includes("buyersContactNumber")} hidden={selectedHideFields?.includes("buyersContactNumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentInformationInvoiceCurrency" header="Payment information Invoice Currency (*)" body={pTemplate31} filter={selectedFilterFields.includes("paymentInformationInvoiceCurrency")} hidden={selectedHideFields?.includes("paymentInformationInvoiceCurrency")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentInformationCurrencyExchangeRate" header="Payment information Currency Exchange Rate" body={p_numberTemplate32} filter={selectedFilterFields.includes("paymentInformationCurrencyExchangeRate")} hidden={selectedHideFields?.includes("paymentInformationCurrencyExchangeRate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentInformationFrequencyOfBilling" header="Payment information Frequency of Billing" body={pTemplate33} filter={selectedFilterFields.includes("paymentInformationFrequencyOfBilling")} hidden={selectedHideFields?.includes("paymentInformationFrequencyOfBilling")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentInformationBillingPeriodStartDate" header="Payment information Billing Period Start Date" body={p_dateTemplate34} filter={selectedFilterFields.includes("paymentInformationBillingPeriodStartDate")} hidden={selectedHideFields?.includes("paymentInformationBillingPeriodStartDate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentInformationBillingPeriodEndDate" header="Payment information Billing Period End Date" body={p_dateTemplate35} filter={selectedFilterFields.includes("paymentInformationBillingPeriodEndDate")} hidden={selectedHideFields?.includes("paymentInformationBillingPeriodEndDate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentInformationPaymentMode" header="Payment information Payment Mode" body={pTemplate36} filter={selectedFilterFields.includes("paymentInformationPaymentMode")} hidden={selectedHideFields?.includes("paymentInformationPaymentMode")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentInformationSuppliersBankAccountNumber" header="Payment information Supplier's Bank Account Number" body={pTemplate37} filter={selectedFilterFields.includes("paymentInformationSuppliersBankAccountNumber")} hidden={selectedHideFields?.includes("paymentInformationSuppliersBankAccountNumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentInformationPaymentTerms" header="Payment information Payment Terms" body={pTemplate38} filter={selectedFilterFields.includes("paymentInformationPaymentTerms")} hidden={selectedHideFields?.includes("paymentInformationPaymentTerms")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentInformationPrePaymentAmount" header="Payment information PrePayment Amount" body={pTemplate39} filter={selectedFilterFields.includes("paymentInformationPrePaymentAmount")} hidden={selectedHideFields?.includes("paymentInformationPrePaymentAmount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentInformationPrePaymentDate" header="Payment information PrePayment Date" body={p_dateTemplate40} filter={selectedFilterFields.includes("paymentInformationPrePaymentDate")} hidden={selectedHideFields?.includes("paymentInformationPrePaymentDate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="paymentInformationPrePaymentReferenceNumber" header="Payment information PrePayment Reference Number" body={pTemplate41} filter={selectedFilterFields.includes("paymentInformationPrePaymentReferenceNumber")} hidden={selectedHideFields?.includes("paymentInformationPrePaymentReferenceNumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingRecipientsName" header="Shipping Recipient's Name" body={pTemplate42} filter={selectedFilterFields.includes("shippingRecipientsName")} hidden={selectedHideFields?.includes("shippingRecipientsName")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingRecipientsAddressCountryName" header="Shipping Recipient’s Address Country name" body={pTemplate43} filter={selectedFilterFields.includes("shippingRecipientsAddressCountryName")} hidden={selectedHideFields?.includes("shippingRecipientsAddressCountryName")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingRecipientsAddressStateName" header="Shipping Recipient’s Address State name" body={pTemplate44} filter={selectedFilterFields.includes("shippingRecipientsAddressStateName")} hidden={selectedHideFields?.includes("shippingRecipientsAddressStateName")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingRecipientsAddressCityName" header="Shipping Recipient’s Address City name" body={pTemplate45} filter={selectedFilterFields.includes("shippingRecipientsAddressCityName")} hidden={selectedHideFields?.includes("shippingRecipientsAddressCityName")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingRecipientsAddressPostalZone" header="Shipping Recipient’s Address Postal Zone" body={p_numberTemplate46} filter={selectedFilterFields.includes("shippingRecipientsAddressPostalZone")} hidden={selectedHideFields?.includes("shippingRecipientsAddressPostalZone")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingRecipientsTin" header="Shipping Recipient's TIN" body={pTemplate47} filter={selectedFilterFields.includes("shippingRecipientsTin")} hidden={selectedHideFields?.includes("shippingRecipientsTin")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingRecipientsIdentifierType" header="Shipping Recipient's Identifier type" body={pTemplate48} filter={selectedFilterFields.includes("shippingRecipientsIdentifierType")} hidden={selectedHideFields?.includes("shippingRecipientsIdentifierType")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingRecipientsInformationBusinessRegistrationNumberIdentificationNumberPassportNumber" header="Shipping Recipient's Information Business registration number/ Identification number / Passport number" body={pTemplate49} filter={selectedFilterFields.includes("shippingRecipientsInformationBusinessRegistrationNumberIdentificationNumberPassportNumber")} hidden={selectedHideFields?.includes("shippingRecipientsInformationBusinessRegistrationNumberIdentificationNumberPassportNumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="otherInformationBillReferenceNumber" header="Other Information Bill  Reference Number" body={pTemplate50} filter={selectedFilterFields.includes("otherInformationBillReferenceNumber")} hidden={selectedHideFields?.includes("otherInformationBillReferenceNumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="otherInformationReferenceNumberOfCustomsFormNo19Etc" header="Other Information Reference Number of Customs Form No.1, 9, etc." body={pTemplate51} filter={selectedFilterFields.includes("otherInformationReferenceNumberOfCustomsFormNo19Etc")} hidden={selectedHideFields?.includes("otherInformationReferenceNumberOfCustomsFormNo19Etc")}  sortable style={{ minWidth: "8rem" }} />
<Column field="otherInformationIncoterms" header="Other Information Incoterms" body={pTemplate52} filter={selectedFilterFields.includes("otherInformationIncoterms")} hidden={selectedHideFields?.includes("otherInformationIncoterms")}  sortable style={{ minWidth: "8rem" }} />
<Column field="otherInformationFreeTradeAgreementFtaInformation" header="Other Information Free Trade Agreement (FTA) Information" body={pTemplate53} filter={selectedFilterFields.includes("otherInformationFreeTradeAgreementFtaInformation")} hidden={selectedHideFields?.includes("otherInformationFreeTradeAgreementFtaInformation")}  sortable style={{ minWidth: "8rem" }} />
<Column field="otherInformationAuthorisationNumberForCertifiedExporter" header="Other Information Authorisation Number for Certified Exporter" body={pTemplate54} filter={selectedFilterFields.includes("otherInformationAuthorisationNumberForCertifiedExporter")} hidden={selectedHideFields?.includes("otherInformationAuthorisationNumberForCertifiedExporter")}  sortable style={{ minWidth: "8rem" }} />
<Column field="otherInformationReferenceNumberOfCustomsFormNo2" header="Other Information Reference Number of Customs Form No.2" body={pTemplate55} filter={selectedFilterFields.includes("otherInformationReferenceNumberOfCustomsFormNo2")} hidden={selectedHideFields?.includes("otherInformationReferenceNumberOfCustomsFormNo2")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoiceLineNo" header="Invoice Line No" body={p_numberTemplate56} filter={selectedFilterFields.includes("invoiceLineNo")} hidden={selectedHideFields?.includes("invoiceLineNo")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoiceLineClassification" header="Invoice Line Classification (*)" body={pTemplate57} filter={selectedFilterFields.includes("invoiceLineClassification")} hidden={selectedHideFields?.includes("invoiceLineClassification")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoiceLineProductName" header="Invoice Line Product name (*)" body={pTemplate58} filter={selectedFilterFields.includes("invoiceLineProductName")} hidden={selectedHideFields?.includes("invoiceLineProductName")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoiceLineQuantity" header="Invoice Line Quantity" body={p_numberTemplate59} filter={selectedFilterFields.includes("invoiceLineQuantity")} hidden={selectedHideFields?.includes("invoiceLineQuantity")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoiceLineUnitPrice" header="Invoice Line Unit Price (*)" body={p_numberTemplate60} filter={selectedFilterFields.includes("invoiceLineUnitPrice")} hidden={selectedHideFields?.includes("invoiceLineUnitPrice")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoiceLineMeasurement" header="Invoice Line Measurement" body={pTemplate61} filter={selectedFilterFields.includes("invoiceLineMeasurement")} hidden={selectedHideFields?.includes("invoiceLineMeasurement")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoiceLineSubtotal" header="Invoice Line Subtotal (*)" body={p_numberTemplate62} filter={selectedFilterFields.includes("invoiceLineSubtotal")} hidden={selectedHideFields?.includes("invoiceLineSubtotal")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoiceLineCountryOfOrigin" header="Invoice Line Country of Origin" body={pTemplate63} filter={selectedFilterFields.includes("invoiceLineCountryOfOrigin")} hidden={selectedHideFields?.includes("invoiceLineCountryOfOrigin")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoiceLineTotalExcludingTax" header="Invoice Line Total Excluding Tax(*)" body={p_numberTemplate64} filter={selectedFilterFields.includes("invoiceLineTotalExcludingTax")} hidden={selectedHideFields?.includes("invoiceLineTotalExcludingTax")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoiceLineTaxType" header="Invoice Line Tax Type (*)" body={pTemplate65} filter={selectedFilterFields.includes("invoiceLineTaxType")} hidden={selectedHideFields?.includes("invoiceLineTaxType")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoiceLineTaxRate" header="Invoice Line Tax Rate (%)" body={p_numberTemplate66} filter={selectedFilterFields.includes("invoiceLineTaxRate")} hidden={selectedHideFields?.includes("invoiceLineTaxRate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoiceLineTaxAmount" header="Invoice Line Tax Amount (*)" body={p_numberTemplate67} filter={selectedFilterFields.includes("invoiceLineTaxAmount")} hidden={selectedHideFields?.includes("invoiceLineTaxAmount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoiceLineDetailsOfTaxExemption" header="Invoice Line Details of Tax Exemption" body={pTemplate68} filter={selectedFilterFields.includes("invoiceLineDetailsOfTaxExemption")} hidden={selectedHideFields?.includes("invoiceLineDetailsOfTaxExemption")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoiceLineTaxExemptionAmountExempted" header="Invoice Line Tax Exemption Amount Exempted" body={p_numberTemplate69} filter={selectedFilterFields.includes("invoiceLineTaxExemptionAmountExempted")} hidden={selectedHideFields?.includes("invoiceLineTaxExemptionAmountExempted")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoiceLineDiscountRate" header="Invoice Line Discount Rate (%)" body={p_numberTemplate70} filter={selectedFilterFields.includes("invoiceLineDiscountRate")} hidden={selectedHideFields?.includes("invoiceLineDiscountRate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="discountDetailsOfAmount" header="Discount Details of Amount" body={p_numberTemplate71} filter={selectedFilterFields.includes("discountDetailsOfAmount")} hidden={selectedHideFields?.includes("discountDetailsOfAmount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoiceLineDetailsOfDiscountDescription" header="Invoice Line Details of Discount Description" body={pTemplate72} filter={selectedFilterFields.includes("invoiceLineDetailsOfDiscountDescription")} hidden={selectedHideFields?.includes("invoiceLineDetailsOfDiscountDescription")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoiceLineDetailsOfChargeFeeChargeRate" header="Invoice Line Details of Charge Fee/Charge Rate (%)" body={p_numberTemplate73} filter={selectedFilterFields.includes("invoiceLineDetailsOfChargeFeeChargeRate")} hidden={selectedHideFields?.includes("invoiceLineDetailsOfChargeFeeChargeRate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoiceLineDetailsOfChargeFeeChargeAmount" header="Invoice Line Details of Charge Fee/Charge Amount" body={p_numberTemplate74} filter={selectedFilterFields.includes("invoiceLineDetailsOfChargeFeeChargeAmount")} hidden={selectedHideFields?.includes("invoiceLineDetailsOfChargeFeeChargeAmount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="detailsOfTaxTaxType" header="Details of tax Tax Type (*)" body={pTemplate75} filter={selectedFilterFields.includes("detailsOfTaxTaxType")} hidden={selectedHideFields?.includes("detailsOfTaxTaxType")}  sortable style={{ minWidth: "8rem" }} />
<Column field="detailsOfTaxTotalTaxableAmountPerTaxType" header="Details of tax Total Taxable Amount per Tax Type" body={p_numberTemplate76} filter={selectedFilterFields.includes("detailsOfTaxTotalTaxableAmountPerTaxType")} hidden={selectedHideFields?.includes("detailsOfTaxTotalTaxableAmountPerTaxType")}  sortable style={{ minWidth: "8rem" }} />
<Column field="detailsOfTaxTotalTaxAmountPerTaxType" header="Details of tax Total Tax Amount Per Tax Type (*)" body={p_numberTemplate77} filter={selectedFilterFields.includes("detailsOfTaxTotalTaxAmountPerTaxType")} hidden={selectedHideFields?.includes("detailsOfTaxTotalTaxAmountPerTaxType")}  sortable style={{ minWidth: "8rem" }} />
<Column field="taxExemptionDetailsOfTaxExemption" header="Tax exemption Details of Tax Exemption" body={pTemplate78} filter={selectedFilterFields.includes("taxExemptionDetailsOfTaxExemption")} hidden={selectedHideFields?.includes("taxExemptionDetailsOfTaxExemption")}  sortable style={{ minWidth: "8rem" }} />
<Column field="taxExemptionAmountExemptedFromTax" header="Tax exemption Amount Exempted from Tax" body={p_numberTemplate79} filter={selectedFilterFields.includes("taxExemptionAmountExemptedFromTax")} hidden={selectedHideFields?.includes("taxExemptionAmountExemptedFromTax")}  sortable style={{ minWidth: "8rem" }} />
<Column field="discountAdditionalDiscountAmount" header="Discount Additional Discount Amount" body={p_numberTemplate80} filter={selectedFilterFields.includes("discountAdditionalDiscountAmount")} hidden={selectedHideFields?.includes("discountAdditionalDiscountAmount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="discountAdditionalDescription" header="Discount Additional Description" body={pTemplate81} filter={selectedFilterFields.includes("discountAdditionalDescription")} hidden={selectedHideFields?.includes("discountAdditionalDescription")}  sortable style={{ minWidth: "8rem" }} />
<Column field="feeAmountAdditionalFeeAmount" header="Fee Amount Additional Fee Amount" body={p_numberTemplate82} filter={selectedFilterFields.includes("feeAmountAdditionalFeeAmount")} hidden={selectedHideFields?.includes("feeAmountAdditionalFeeAmount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="feeAmountAdditionalDescription" header="Fee Amount Additional Description" body={pTemplate83} filter={selectedFilterFields.includes("feeAmountAdditionalDescription")} hidden={selectedHideFields?.includes("feeAmountAdditionalDescription")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totalDiscountValue" header="Total Discount Value" body={p_numberTemplate84} filter={selectedFilterFields.includes("totalDiscountValue")} hidden={selectedHideFields?.includes("totalDiscountValue")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totalFeeChargeAmount" header="Total Fee/Charge Amount" body={p_numberTemplate85} filter={selectedFilterFields.includes("totalFeeChargeAmount")} hidden={selectedHideFields?.includes("totalFeeChargeAmount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totalTaxAmount" header="Total Tax Amount (*)" body={p_numberTemplate86} filter={selectedFilterFields.includes("totalTaxAmount")} hidden={selectedHideFields?.includes("totalTaxAmount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totalExcludingTax" header="Total Excluding Tax (*)" body={p_numberTemplate87} filter={selectedFilterFields.includes("totalExcludingTax")} hidden={selectedHideFields?.includes("totalExcludingTax")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totalNetAmount" header="Total Net Amount" body={p_numberTemplate88} filter={selectedFilterFields.includes("totalNetAmount")} hidden={selectedHideFields?.includes("totalNetAmount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totalIncludingTax" header="Total Including Tax (*)" body={p_numberTemplate89} filter={selectedFilterFields.includes("totalIncludingTax")} hidden={selectedHideFields?.includes("totalIncludingTax")}  sortable style={{ minWidth: "8rem" }} />
<Column field="roundingAmount" header="Rounding Amount" body={p_numberTemplate90} filter={selectedFilterFields.includes("roundingAmount")} hidden={selectedHideFields?.includes("roundingAmount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="totalPayableAmount" header="Total Payable Amount (*)" body={p_numberTemplate91} filter={selectedFilterFields.includes("totalPayableAmount")} hidden={selectedHideFields?.includes("totalPayableAmount")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoiceNumber" header="Invoice Number" body={pTemplate92} filter={selectedFilterFields.includes("invoiceNumber")} hidden={selectedHideFields?.includes("invoiceNumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="consolidated" header="Original eInvoice Reference Number" body={pTemplate93} filter={selectedFilterFields.includes("consolidated")} hidden={selectedHideFields?.includes("consolidated")}  sortable style={{ minWidth: "8rem" }} />
            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            
        </DataTable>
        <Dialog header="Upload Invoice Data" visible={showUpload} onHide={() => setShowUpload(false)}>
        <UploadService 
          user={user} 
          serviceName="invoice"            
          onUploadComplete={() => {
            setShowUpload(false); // Close the dialog after upload
          }}/>
      </Dialog>

      <Dialog header="Search Invoice" visible={searchDialog} onHide={() => setSearchDialog(false)}>
      Search
    </Dialog>
    <Dialog
        header="Filter Users"
        visible={showFilter}
        onHide={() => setShowFilter(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedFilterFields}
            onChange={(e) => setSelectedFilterFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.log(selectedFilterFields);
            onClickSaveFilteredfields(selectedFilterFields);
            setSelectedFilterFields(selectedFilterFields);
            setShowFilter(false)
          }}
        ></Button>
      </Dialog>

      <Dialog
        header="Hide Columns"
        visible={showColumns}
        onHide={() => setShowColumns(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedHideFields}
            onChange={(e) => setSelectedHideFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.log(selectedHideFields);
            onClickSaveHiddenfields(selectedHideFields);
            setSelectedHideFields(selectedHideFields);
            setShowColumns(false)
          }}
        ></Button>
      </Dialog>
        </>
    );
};

export default InvoiceDataTable;