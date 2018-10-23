module.exports.validation = {
    mobileNumber: '^[0-9]{11}',
    PhoneNumber: '^[0-9]{7,11}$',
    password: '^.{6,35}$',
    userDevice: '^.{6,35}$',
    email: '^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]*\.([a-zA-Z]{2,4})$',
    userName: '^[a-zA-Z0-9]{2,20}$',
    character: '^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z].[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_ ]{3,100}$',
    currency: '^[_a-zA-Z]{3}',
    boolean: '^[0-1]{1}',
    longTitle: '^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z].[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_ ]{2,1000}$',
    address: '^.{6,2000}$',
    pharmacyName: '^.{4,1000}$',
    pageNumber: '^[0-9]{1,5}$',
    validationAddress: '^.{10,1000}$',
    validationAddressNotReq: '^.{0,300}$',
    validationAge: '^[1-9][0-9]?$|^100$',
    validationMobileNumberNotReq: '^[0-9]{0,15}$',
    validationNotesNotReq: '^.{0,5000}$',
    name: '^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z].[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_ ]{2,300}$',
    keyWord: '^[ a-zA-Z0-9-,()]{1,100}$',
    uuid: '^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$',
};