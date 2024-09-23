import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import ProjectLayout from "../Layouts/ProjectLayout";


const SingleInvoicePage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("invoice")
            .get(urlParams.singleInvoiceId, { query: { $populate: [            {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },{
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Invoice", type: "error", message: error.message || "Failed get invoice" });
            });
    }, [props,urlParams.singleInvoiceId]);


    const goBack = () => {
        navigate("/invoice");
    };

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Invoice</h3>
                </div>
                <p>invoice/{urlParams.singleInvoiceId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">No</label><p className="m-0 ml-3" >{Number(_entity?.no)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Type (*)</label><p className="m-0 ml-3" >{_entity?.invoiceType}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Original eInvoice Reference Number</label><p className="m-0 ml-3" >{_entity?.originalEInvoiceReferenceNumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's Name (*)</label><p className="m-0 ml-3" >{_entity?.suppliersName}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's TIN (*)</label><p className="m-0 ml-3" >{_entity?.suppliersTin}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's SST Registration Number</label><p className="m-0 ml-3" >{_entity?.suppliersSstRegistrationNumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's Identifier Type (*)</label><p className="m-0 ml-3" >{_entity?.suppliersIdentifierType}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier Identifier Number (*)</label><p className="m-0 ml-3" >{_entity?.supplierIdentifierNumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's MSIC code (*)</label><p className="m-0 ml-3" >{_entity?.suppliersMsicCode}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's Tourism Tax Registration Number</label><p className="m-0 ml-3" >{_entity?.suppliersTourismTaxRegistrationNumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's Business Activity Description (*)</label><p className="m-0 ml-3" >{_entity?.suppliersBusinessActivityDescription}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's e-mail</label><p className="m-0 ml-3" >{_entity?.suppliersEMail}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">The first Supplier's contact number (*)</label><p className="m-0 ml-3" >{_entity?.theFirstSuppliersContactNumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier's contact number (*)</label><p className="m-0 ml-3" >{_entity?.suppliersContactNumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier Country name (*)</label><p className="m-0 ml-3" >{_entity?.supplierCountryName}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier State name (*)</label><p className="m-0 ml-3" >{_entity?.supplierStateName}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier City name (*)</label><p className="m-0 ml-3" >{_entity?.supplierCityName}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Supplier Postal zone</label><p className="m-0 ml-3" >{Number(_entity?.supplierPostalZone)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's name (*)</label><p className="m-0 ml-3" >{_entity?.buyersName}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's TIN</label><p className="m-0 ml-3" >{_entity?.buyersTin}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's SST Registration Number</label><p className="m-0 ml-3" >{_entity?.buyersSstRegistrationNumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer Identifier Type</label><p className="m-0 ml-3" >{_entity?.buyerIdentifierType}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Business registration number / Identification number / Passport number</label><p className="m-0 ml-3" >{_entity?.businessRegistrationNumberIdentificationNumberPassportNumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's e-mail</label><p className="m-0 ml-3" >{_entity?.buyersEMail}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's address (*) (Country name)</label><p className="m-0 ml-3" >{_entity?.buyersAddressCountryName}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's address (*) (State name)</label><p className="m-0 ml-3" >{_entity?.buyersAddressStateName}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's address (City name)</label><p className="m-0 ml-3" >{_entity?.buyersAddressCityName}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's address (Postal zone)</label><p className="m-0 ml-3" >{Number(_entity?.buyersAddressPostalZone)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">The first buyer's contact number (*)</label><p className="m-0 ml-3" >{_entity?.theFirstBuyersContactNumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Buyer's Contact Number (*)</label><p className="m-0 ml-3" >{_entity?.buyersContactNumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information Invoice Currency (*)</label><p className="m-0 ml-3" >{_entity?.paymentInformationInvoiceCurrency}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information Currency Exchange Rate</label><p className="m-0 ml-3" >{Number(_entity?.paymentInformationCurrencyExchangeRate)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information Frequency of Billing</label><p className="m-0 ml-3" >{_entity?.paymentInformationFrequencyOfBilling}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information Payment Mode</label><p className="m-0 ml-3" >{_entity?.paymentInformationPaymentMode}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information Supplier's Bank Account Number</label><p className="m-0 ml-3" >{_entity?.paymentInformationSuppliersBankAccountNumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information Payment Terms</label><p className="m-0 ml-3" >{_entity?.paymentInformationPaymentTerms}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information PrePayment Amount</label><p className="m-0 ml-3" >{_entity?.paymentInformationPrePaymentAmount}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Payment information PrePayment Reference Number</label><p className="m-0 ml-3" >{_entity?.paymentInformationPrePaymentReferenceNumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient's Name</label><p className="m-0 ml-3" >{_entity?.shippingRecipientsName}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient’s Address Country name</label><p className="m-0 ml-3" >{_entity?.shippingRecipientsAddressCountryName}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient’s Address State name</label><p className="m-0 ml-3" >{_entity?.shippingRecipientsAddressStateName}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient’s Address City name</label><p className="m-0 ml-3" >{_entity?.shippingRecipientsAddressCityName}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient’s Address Postal Zone</label><p className="m-0 ml-3" >{Number(_entity?.shippingRecipientsAddressPostalZone)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient's TIN</label><p className="m-0 ml-3" >{_entity?.shippingRecipientsTin}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient's Identifier type</label><p className="m-0 ml-3" >{_entity?.shippingRecipientsIdentifierType}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Shipping Recipient's Information Business registration number/ Identification number / Passport number</label><p className="m-0 ml-3" >{_entity?.shippingRecipientsInformationBusinessRegistrationNumberIdentificationNumberPassportNumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Other Information Bill  Reference Number</label><p className="m-0 ml-3" >{_entity?.otherInformationBillReferenceNumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Other Information Reference Number of Customs Form No.1, 9, etc.</label><p className="m-0 ml-3" >{_entity?.otherInformationReferenceNumberOfCustomsFormNo19Etc}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Other Information Incoterms</label><p className="m-0 ml-3" >{_entity?.otherInformationIncoterms}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Other Information Free Trade Agreement (FTA) Information</label><p className="m-0 ml-3" >{_entity?.otherInformationFreeTradeAgreementFtaInformation}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Other Information Authorisation Number for Certified Exporter</label><p className="m-0 ml-3" >{_entity?.otherInformationAuthorisationNumberForCertifiedExporter}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Other Information Reference Number of Customs Form No.2</label><p className="m-0 ml-3" >{_entity?.otherInformationReferenceNumberOfCustomsFormNo2}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line No</label><p className="m-0 ml-3" >{Number(_entity?.invoiceLineNo)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Classification (*)</label><p className="m-0 ml-3" >{_entity?.invoiceLineClassification}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Product name (*)</label><p className="m-0 ml-3" >{_entity?.invoiceLineProductName}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Quantity</label><p className="m-0 ml-3" >{Number(_entity?.invoiceLineQuantity)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Unit Price (*)</label><p className="m-0 ml-3" >{Number(_entity?.invoiceLineUnitPrice)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Measurement</label><p className="m-0 ml-3" >{_entity?.invoiceLineMeasurement}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Subtotal (*)</label><p className="m-0 ml-3" >{Number(_entity?.invoiceLineSubtotal)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Country of Origin</label><p className="m-0 ml-3" >{_entity?.invoiceLineCountryOfOrigin}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Total Excluding Tax(*)</label><p className="m-0 ml-3" >{Number(_entity?.invoiceLineTotalExcludingTax)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Tax Type (*)</label><p className="m-0 ml-3" >{_entity?.invoiceLineTaxType}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Tax Rate (%)</label><p className="m-0 ml-3" >{Number(_entity?.invoiceLineTaxRate)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Tax Amount (*)</label><p className="m-0 ml-3" >{Number(_entity?.invoiceLineTaxAmount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Details of Tax Exemption</label><p className="m-0 ml-3" >{_entity?.invoiceLineDetailsOfTaxExemption}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Tax Exemption Amount Exempted</label><p className="m-0 ml-3" >{Number(_entity?.invoiceLineTaxExemptionAmountExempted)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Discount Rate (%)</label><p className="m-0 ml-3" >{Number(_entity?.invoiceLineDiscountRate)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Discount Details of Amount</label><p className="m-0 ml-3" >{Number(_entity?.discountDetailsOfAmount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Details of Discount Description</label><p className="m-0 ml-3" >{_entity?.invoiceLineDetailsOfDiscountDescription}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Details of Charge Fee/Charge Rate (%)</label><p className="m-0 ml-3" >{Number(_entity?.invoiceLineDetailsOfChargeFeeChargeRate)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Line Details of Charge Fee/Charge Amount</label><p className="m-0 ml-3" >{Number(_entity?.invoiceLineDetailsOfChargeFeeChargeAmount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Details of tax Tax Type (*)</label><p className="m-0 ml-3" >{_entity?.detailsOfTaxTaxType}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Details of tax Total Taxable Amount per Tax Type</label><p className="m-0 ml-3" >{Number(_entity?.detailsOfTaxTotalTaxableAmountPerTaxType)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Details of tax Total Tax Amount Per Tax Type (*)</label><p className="m-0 ml-3" >{Number(_entity?.detailsOfTaxTotalTaxAmountPerTaxType)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Tax exemption Details of Tax Exemption</label><p className="m-0 ml-3" >{_entity?.taxExemptionDetailsOfTaxExemption}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Tax exemption Amount Exempted from Tax</label><p className="m-0 ml-3" >{Number(_entity?.taxExemptionAmountExemptedFromTax)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Discount Additional Discount Amount</label><p className="m-0 ml-3" >{Number(_entity?.discountAdditionalDiscountAmount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Discount Additional Description</label><p className="m-0 ml-3" >{_entity?.discountAdditionalDescription}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fee Amount Additional Fee Amount</label><p className="m-0 ml-3" >{Number(_entity?.feeAmountAdditionalFeeAmount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Fee Amount Additional Description</label><p className="m-0 ml-3" >{_entity?.feeAmountAdditionalDescription}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Total Discount Value</label><p className="m-0 ml-3" >{Number(_entity?.totalDiscountValue)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Total Fee/Charge Amount</label><p className="m-0 ml-3" >{Number(_entity?.totalFeeChargeAmount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Total Tax Amount (*)</label><p className="m-0 ml-3" >{Number(_entity?.totalTaxAmount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Total Excluding Tax (*)</label><p className="m-0 ml-3" >{Number(_entity?.totalExcludingTax)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Total Net Amount</label><p className="m-0 ml-3" >{Number(_entity?.totalNetAmount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Total Including Tax (*)</label><p className="m-0 ml-3" >{Number(_entity?.totalIncludingTax)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Rounding Amount</label><p className="m-0 ml-3" >{Number(_entity?.roundingAmount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Total Payable Amount (*)</label><p className="m-0 ml-3" >{Number(_entity?.totalPayableAmount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Invoice Number</label><p className="m-0 ml-3" >{_entity?.invoiceNumber}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">Original eInvoice Reference Number</label><p className="m-0 ml-3" >{_entity?.consolidated}</p></div>
            

                    <div className="col-12">&nbsp;</div>
                </div>
            </div>
        </div>
        
        </ProjectLayout>
    );
};

const mapState = (state) => {
    const { user, isLoggedIn } = state.auth;
    return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(SingleInvoicePage);
