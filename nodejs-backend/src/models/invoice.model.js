
    module.exports = function (app) {
        const modelName = 'invoice';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            no: { type: Number, required: false, min: 0, max: 10000000 },
invoiceType: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
invoiceDateAndTime: { type: Date, required: true },
originalEInvoiceReferenceNumber: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
suppliersName: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
suppliersTin: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
suppliersSstRegistrationNumber: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
suppliersIdentifierType: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
supplierIdentifierNumber: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
suppliersMsicCode: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
suppliersTourismTaxRegistrationNumber: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
suppliersBusinessActivityDescription: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
suppliersEMail: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
theFirstSuppliersContactNumber: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
suppliersContactNumber: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
supplierCountryName: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
supplierStateName: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
supplierCityName: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
supplierPostalZone: { type: Number, required: false, min: 0, max: 10000000 },
buyersName: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
buyersTin: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
buyersSstRegistrationNumber: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
buyerIdentifierType: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
businessRegistrationNumberIdentificationNumberPassportNumber: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
buyersEMail: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
buyersAddressCountryName: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
buyersAddressStateName: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
buyersAddressCityName: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
buyersAddressPostalZone: { type: Number, required: false, min: 0, max: 10000000 },
theFirstBuyersContactNumber: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
buyersContactNumber: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
paymentInformationInvoiceCurrency: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
paymentInformationCurrencyExchangeRate: { type: Number, required: false, min: 0, max: 10000000 },
paymentInformationFrequencyOfBilling: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
paymentInformationBillingPeriodStartDate: { type: Date, required: false },
paymentInformationBillingPeriodEndDate: { type: Date, required: false },
paymentInformationPaymentMode: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
paymentInformationSuppliersBankAccountNumber: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
paymentInformationPaymentTerms: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
paymentInformationPrePaymentAmount: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
paymentInformationPrePaymentDate: { type: Date, required: false },
paymentInformationPrePaymentReferenceNumber: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
shippingRecipientsName: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
shippingRecipientsAddressCountryName: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
shippingRecipientsAddressStateName: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
shippingRecipientsAddressCityName: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
shippingRecipientsAddressPostalZone: { type: Number, required: false, min: 0, max: 10000000 },
shippingRecipientsTin: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
shippingRecipientsIdentifierType: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
shippingRecipientsInformationBusinessRegistrationNumberIdentificationNumberPassportNumber: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
otherInformationBillReferenceNumber: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
otherInformationReferenceNumberOfCustomsFormNo19Etc: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
otherInformationIncoterms: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
otherInformationFreeTradeAgreementFtaInformation: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
otherInformationAuthorisationNumberForCertifiedExporter: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
otherInformationReferenceNumberOfCustomsFormNo2: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
invoiceLineNo: { type: Number, required: false, min: 0, max: 10000000 },
invoiceLineClassification: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
invoiceLineProductName: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
invoiceLineQuantity: { type: Number, required: false, min: 0, max: 10000000 },
invoiceLineUnitPrice: { type: Number, required: true, min: 0, max: 10000000 },
invoiceLineMeasurement: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
invoiceLineSubtotal: { type: Number, required: true, min: 0, max: 10000000 },
invoiceLineCountryOfOrigin: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
invoiceLineTotalExcludingTax: { type: Number, required: true, min: 0, max: 10000000 },
invoiceLineTaxType: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
invoiceLineTaxRate: { type: Number, required: false, min: 0, max: 10000000 },
invoiceLineTaxAmount: { type: Number, required: true, min: 0, max: 10000000 },
invoiceLineDetailsOfTaxExemption: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
invoiceLineTaxExemptionAmountExempted: { type: Number, required: false, min: 0, max: 10000000 },
invoiceLineDiscountRate: { type: Number, required: false, min: 0, max: 10000000 },
discountDetailsOfAmount: { type: Number, required: false, min: 0, max: 10000000 },
invoiceLineDetailsOfDiscountDescription: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
invoiceLineDetailsOfChargeFeeChargeRate: { type: Number, required: false, min: 0, max: 10000000 },
invoiceLineDetailsOfChargeFeeChargeAmount: { type: Number, required: false, min: 0, max: 10000000 },
detailsOfTaxTaxType: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
detailsOfTaxTotalTaxableAmountPerTaxType: { type: Number, required: false, min: 0, max: 10000000 },
detailsOfTaxTotalTaxAmountPerTaxType: { type: Number, required: true, min: 0, max: 10000000 },
taxExemptionDetailsOfTaxExemption: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
taxExemptionAmountExemptedFromTax: { type: Number, required: false, min: 0, max: 10000000 },
discountAdditionalDiscountAmount: { type: Number, required: false, min: 0, max: 10000000 },
discountAdditionalDescription: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
feeAmountAdditionalFeeAmount: { type: Number, required: false, min: 0, max: 10000000 },
feeAmountAdditionalDescription: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
totalDiscountValue: { type: Number, required: false, min: 0, max: 10000000 },
totalFeeChargeAmount: { type: Number, required: false, min: 0, max: 10000000 },
totalTaxAmount: { type: Number, required: true, min: 0, max: 10000000 },
totalExcludingTax: { type: Number, required: true, min: 0, max: 10000000 },
totalNetAmount: { type: Number, required: false, min: 0, max: 10000000 },
totalIncludingTax: { type: Number, required: true, min: 0, max: 10000000 },
roundingAmount: { type: Number, required: false, min: 0, max: 10000000 },
totalPayableAmount: { type: Number, required: true, min: 0, max: 10000000 },
invoiceNumber: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
consolidated: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 1, maxLength: 1000, index: true, trim: true },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };