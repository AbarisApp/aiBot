import { baseproductUrl, baseUrl, extraBaseUrl } from "../../baseUrl";
import axiosInstance from "../../axiosServiseFactory/AxiosServiseFactory";
import axios from "axios";
import axiosInstance2 from "../../axiosServiseFactory/AxiosServiseFactoryProduct";
// Export  Excel Apis  ---------------------!

export const exportExcelDmt_txnList = (data) => {
  return axiosInstance.post(`${baseUrl}dmt_txn/st/report/all`, data);
};
//count Length RetDist ----------------------!

export const getLength = () => {
  return axiosInstance.get(`${baseUrl}user/memberType/count`);
}


export const getMenusdata = () => {
  return axiosInstance.get(`${baseUrl}role/navigate`);
}




export const department = (val) => {
  return axiosInstance.post(`${baseUrl}department/admin`, val, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const dmtDisputePriority = () => {
  return axiosInstance.get(`${baseUrl}dmtDisputePriority/admin`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getNameUser = (val) => {
  return axiosInstance.get(`${baseUrl}user/member/filter/search?name=${val}&count=10&page=1`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getTicketByIdTicket = (id) => {
  return axiosInstance.get(`${baseUrl}dmtdisputechat/admin?dispute_id=${id}&count=10&page=0`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getByIdTicket = (id) => {
  return axiosInstance.get(`${baseUrl}dmtDisputes/${id}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const relatedService = () => {
  return axiosInstance.get(`${baseUrl}/service/serviceListForBBPSCommision`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const relatedService2 = () => {
  const arr = ["65def1e41c20b7a8ba230200", "65def1e41c20b7a8ba2301ff"]
  return axiosInstance.get(`${baseUrl}service/fetchByServiceType?ids=${JSON.stringify(arr)}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const lockAmount = (data) => {
  return axiosInstance.post(`${baseUrl}staff/lockAmt`, data, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const relatedService23 = () => {
  const arr = ["65d70e989e6fb337fd07fdb6"]
  return axiosInstance.get(`${baseUrl}service/fetchByServiceType?ids=${JSON.stringify(arr)}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const relatedServiceType = () => {
  return axiosInstance.get(`${baseUrl}servicecategory`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};






export const LoginSubmit = (data) =>
  axiosInstance.post(`${baseUrl}staff/login`, data);


export const sendOtpByEmail = (data) => {
  return axios.post(`${baseUrl}auth/mb/verifyEmail`, data);
};
export const submitReplay = (data) => {
  return axiosInstance.post(`${baseUrl}dmtdisputeChat/add_dispute/admin`, data);
};
export const sendVerifyEmailOtp = (data) => {
  return axios.post(`${baseUrl}auth/mb/verifyEmailOtp`, data);
}

export const sendOtpByPhone = (data) => {
  return axios.post(`${baseUrl}auth/mb/verifyMobileNo`, data);
};
export const sendVerifyPhoneOtp = (data) => {

  return axios.post(`${baseUrl}auth/mb/verifyMobileNoOtp`, data);
}
export const sendTicketCreate = (data) => {

  return axiosInstance.post(`${baseUrl}dmtDisputes/add_disputestaff`, data);
}
export const sendPackegesCreate = (data) => {

  return axiosInstance.post(`${baseUrl}package/addPackage`, data);
}
export const sendPackegesUpdate = ({ id, data }) => {

  return axiosInstance.put(`${baseUrl}package/Updatpackage/${id}`, data);
}

export const getServicePacage = (data) => {

  return axiosInstance.get(`${baseUrl}service/ids?ids=${data}`);
}
export const getPackegById = (id) => {
  return axiosInstance.get(`${baseUrl}package/${id}`);
};
export const PackegDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}package/deletePackage/${id}`);
};
export const getDataPacage = (data) => {
  return axiosInstance.get(`${baseUrl}package?start_date=${data.start_date}&end_date=${data.end_date}&page=${data.page}&count=${data.count}&name=${data.name}`);
};
export const getDataPacageSales = (data) => {
  return axiosInstance.get(`${baseUrl}packagePayment?page=${data?.page}&count=${data?.count}&package_id=${data?.package_id ? data.package_id : ''}`);
};
export const DashboardGet = (date) => {
  return axiosInstance.get(`${baseUrl}dashboard/admin?date=${date.data}`);
};
export const getDataReports = (data) => {
  return axiosInstance.get(`${baseUrl}bbps_txn/admin?start_date=${data.start_date}&end_date=${data.end_date}&biller_id=${data.biller_id}&page=${data.page}&count=${data.count}&category_id=${data.param}`);
};
export const paymentReport = (data) => {
  return axiosInstance.get(`${baseUrl}payout/admin?start_date=${data.start_date}&end_date=${data.end_date}&txn_id=${data.txn_id}&page=${data.page}&count=${data.count}`);
};
export const ApespaymentReport = (data) => {
  return axiosInstance.post(`${baseUrl}adhaarPay/staff`, data, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const getOperater = (id) => {
  return axiosInstance.get(`${baseUrl}operator/public?api_id=1&service=${id}`);
};

export const currencyAdd = (data) => {
  return axiosInstance.post(`${baseUrl}currency/addcurrency`, data);
};
export const resetPassword = (data) => {
  return axiosInstance.put(`${baseUrl}staff/changePass`, data);
};
export const currencyList = (data) => {
  return axiosInstance.get(`${baseUrl}currency`);
};
export const currencyDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}currency/deletecurrency/${id}`);
};

export const getCurrency = (id) => {
  return axiosInstance.get(`${baseUrl}currency/${id}`);
};

export const currencyUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}currency/updatcurrency/${id}`, value);
};


export const countryAdd = (data) => {
  return axiosInstance.post(`${baseUrl}country/addcountry`, data);
};
export const getCountryAdd = () => {
  return axiosInstance.get(`${baseUrl}country`);
};
// -----------logical Play ATQ COUNTRY  STATE CITY----
export const countryList = (data) => {
  return axiosInstance.get(`${baseUrl}country`);
};
export const countryDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}country/deletecountry/${id}`);
};
export const StateAddCollageSelectList = (id) => {
  return axiosInstance.get(`${baseUrl}state/country/${id}`);
};
export const cityAddCollageSelectList = (id) => {
  return axiosInstance.get(`${baseUrl}city/state?id=${id}`);
};

export const getcountry = (id) => {
  return axiosInstance.get(`${baseUrl}country/${id}`);
};
// -----------------------CityApis-----------------------------
export const cityAdd = (data) => {
  return axiosInstance.post(`${baseUrl}city/addcity`, data);
};
export const getcityUpdate = () => {
  return axiosInstance.get(`${baseUrl}currency`);
};
export const cityListbyPagination = (page, count) => {
  return axiosInstance.get(`${baseUrl}city/page?page=${page}&count=${count}&state_id=&country_id=`);
};

export const cityMainGet = () => {
  return axiosInstance.get(`${baseUrl}city`);
};

export const cityMainGett = () => {
  return axiosInstance.get(`${baseUrl}city/state`);
};

export const cityUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}city/updateCity/${id}`, value);
};
export const cityDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}city/deletecity/${id}`);
};

export const getcity = (id) => {
  return axiosInstance.get(`${baseUrl}city/${id}`);
};


export const sendNotification = (data) => {
  return axiosInstance.post(`${baseUrl}fcm/staff/save`, data);
};
export const notificaltionSendAll = (data) => {
  return axiosInstance.post(`${baseUrl}notification/sendNotificationToAll`, data);
};


export const countryUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}country/updatecountry/${id}`, value);
};
export const languageAdd = (data) => {
  return axiosInstance.post(`${baseUrl}language/addlanguage`, data);
};
export const languageList = () => {
  return axiosInstance.get(`${baseUrl}language`);
};
export const languageDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}language/delete_language/${id}`);
};

export const getlanguage = (id) => {
  return axiosInstance.get(`${baseUrl}language/${id}`);
};

export const languageUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}language/update_language/${id}`, value);
};

export const areaAdd = (data) => {
  return axiosInstance.post(`${baseUrl}area/addarea`, data);
};


// ---------Zone Module Intrigation--------------

export const zoneCountryAdd = (data) => {
  return axiosInstance.post(`${baseUrl}zone/addzone`, data);
};

export const areaList = () => {
  return axiosInstance.get(`${baseUrl}area`);
};
export const areaDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}area/deletearea/${id}`);
};

export const getarea = (id) => {
  return axiosInstance.get(`${baseUrl}area/${id}`);
};

export const areaUpdate = ({ id, value }) => {
  return axiosInstance.put(`${baseUrl}area/updatearea/${id}`, value);
};

export const staffAdd = (data) => {
  return axiosInstance.post(`${baseUrl}staff/addstaff`, data);
};
export const staffList = () => {
  return axiosInstance.get(`${baseUrl}staff`);
};
export const staffType = () => {
  return axiosInstance.get(`${baseUrl}stafftype`);
};
export const staffDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}staff/deletestaff/${id}`);
};

export const getstaff = (id) => {
  return axiosInstance.get(`${baseUrl}staff/${id}`);
};

export const staffUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}staff/updatestaff/${id}`, value);
};

export const staffTypeAdd = (data) => {
  return axiosInstance.post(`${baseUrl}stafftype/addstaff`, data);
};
export const staffTypeList = () => {
  return axiosInstance.get(`${baseUrl}stafftype`);
};
export const staffTypeDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}stafftype/deleteStaff/${id}`);
};

export const getstaffType = (id) => {
  return axiosInstance.get(`${baseUrl}stafftype/${id}`);
};

export const staffTypeUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}stafftype/updateStaff/${id}`, value);
};



// Zoon master
export const getZoon = () => {
  return axiosInstance.get(`${baseUrl}zone`);
};

export const zoonById = ({ id }) => {
  return axiosInstance.get(`${baseUrl}zone/${id}`);
};
export const zoonPost = ({ data }) => {
  return axiosInstance.post(`${baseUrl}zone/addzone`, data);
};

// Users
export const addUsers = (data) => {
  return axiosInstance.post(`${baseUrl}user/adduser`, data);
};
export const usersList = () => {
  return axiosInstance.get(`${baseUrl}user`);
};

export const userDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}user/deleteuser/${id}`);
};

export const getUserId = (id) => {
  return axiosInstance.get(`${baseUrl}user/${id}`);
};

export const updateUser = (id, value) => {
  return axiosInstance.put(`${baseUrl}user/updateuser/${id}`, value);
};


// userType Intrigation 

export const addUserType = (data) => {
  return axiosInstance.post(`${baseUrl}usertype/adduser`, data);
};
export const changeSTatuss = (data) => {
  return axiosInstance.post(`${baseUrl}virtual_wallet/fund-transfer`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const listUserType = () => {
  return axiosInstance.get(`${baseUrl}usertype`);
};
export const deleteUserType = (id) => {
  return axiosInstance.delete(`${baseUrl}usertype/deleteuser/${id}`);
};
export const getUserType = (id) => {
  return axiosInstance.get(`${baseUrl}usertype/${id}`);
};
export const UserTypeUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}usertype/updateuser/${id}`, value);
};










// Role Master 

export const addRole = (data) => {
  return axiosInstance.post(`${baseUrl}role/addrole`, data);
}
export const addDepartment = (data) => {
  return axiosInstance.post(`${baseUrl}department/add_Department`, data);
}
export const getListRole = (page, count) => {
  return axiosInstance.get(`${baseUrl}role?page=${page}&count=${count}`);
}
export const getListDepartment = (data) => {
  return axiosInstance.post(`${baseUrl}department/admin`, {
    page: data.page, count: 10
  })
}
export const DeleteRole = (id) => {
  return axiosInstance.delete(`${baseUrl}role/deleterole/${id}`,);
}
export const DeleteDepartment = (id) => {
  return axiosInstance.delete(`${baseUrl}department/delete_department/${id}`,);
}
export const getRoleEdit = (id) => {
  return axiosInstance.get(`${baseUrl}role/${id}`);
};
export const getDepartmentEdit = (id) => {
  return axiosInstance.get(`${baseUrl}department/${id}`);
};
export const updateRole = (id, value) => {
  return axiosInstance.put(`${baseUrl}role/updatrole/${id}`, value);
};
export const updateDepartment = (id, value) => {
  return axiosInstance.put(`${baseUrl}department/update_department/${id}`, value);
};

//Payout Beneficiary Api Intrigation :-

export const addBeneficiaryData = (data) => {
  return axiosInstance.post(`${baseUrl}payout-beneficiary/addpayout`, data);
}
export const getBeneficiaryData = () => {
  return axiosInstance.get(`${baseUrl}payout-beneficiary`);
}
export const DeleteBeneficiaryData = (id) => {
  return axiosInstance.delete(`${baseUrl}payout-beneficiary/deletepayout/${id}`,);
}
export const getBeneficiaryDataEdit = (id) => {
  return axiosInstance.get(`${baseUrl}payout-beneficiary/${id}`);
};
export const updateBeneficiaryData = (id, value) => {
  return axiosInstance.put(`${baseUrl}payout-beneficiary/updatpayout/${id}`, value);
};

export const stateMasterAdd = (data) => {
  return axiosInstance.post(`${baseUrl}state/addstate`, data);
};
export const getStateMaster = () => {
  return axiosInstance.get(`${baseUrl}state`);
};
// export const countryList = (data) => {
//   return axiosInstance.get(`${baseUrl}country`);
// };
export const stateMasterDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}state/deletestate/${id}`);
};

export const getstateMaster = (id) => {
  return axiosInstance.get(`${baseUrl}state/${id}`);
};

export const stateMasterUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}state/updatestate/${id}`, value);
};

// bankMaster
export const bankMasterAdd = (data) => {
  return axiosInstance.post(`${baseUrl}bank/addbank`, data);
};
export const getBankMaster = () => {
  return axiosInstance.get(`${baseUrl}bank`);
};

export const BankMasterDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}bank/deletebank/${id}`);
};

export const getBnakMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}bank/${id}`);
};

export const bankMasterUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}bank/updatebank/${id}`, value);
};

// statusMaster
export const statusMasterAdd = (data) => {
  return axiosInstance.post(`${baseUrl}status/addstatus`, data);
};
export const getStatusMaster = () => {
  return axiosInstance.get(`${baseUrl}status`);
};
export const dmtstatus = () => {
  return axiosInstance.get(`${baseUrl}dmtstatus/admin`);
};

export const statusMasterDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}status/deletestatus/${id}`);
};

export const getStatusMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}status/${id}`);
};

export const statusMasterUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}status/updatstatus/${id}`, value);
};

// paymentMaster
export const paymentMethodAdd = (data) => {
  return axiosInstance.post(`${baseUrl}payment-method/addpayment`, data);
};
export const getpaymentMethod = () => {
  return axiosInstance.get(`${baseUrl}payment-method`);
};

export const paymentMethodDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}payment-method/deletepayment/${id}`);
};

export const getpaymentMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}payment-method/${id}`);
};

export const paymentMasterUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}payment-method/updatpayment/${id}`, value);
};

// -------------Service Master ---------------!
export const addServiceMaster = (data) => {

  return axiosInstance.post(`${baseUrl}course/addservice`, data);
};
export const getServiceMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}course/pagination?page=${page}&count=${count}&name=&service_type_id=`)
}
export const getServiceMasterFilter = (data) => {
  return axiosInstance.get(`${baseUrl}course/pagination?page=${data?.page}&count=${data?.count}&name=${data?.name}&service_type_id=${data?.service_type_id}`)
}
export const getServiceMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}course/${id}`);
};
export const updateServiceMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}course/updateservice/${id}`, value);
};
export const deleteServiceMasterList = (id, value) => {
  return axiosInstance.delete(`${baseUrl}course/deleteservice/${id}`);
};

// serviceCategory

export const serviceCategoryAdd = (data) => {
  return axiosInstance.post(`${baseUrl}stream/addcategory`, data);
};
export const getServiceCategory = () => {
  return axiosInstance.get(`${baseUrl}stream`);
};
export const getCourseTypeForCombo = () => {
  return axiosInstance.get(`${baseUrl}coursetype/admin`);
};
export const getServiceCategoryByPagination = (count, page) => {
  return axiosInstance.get(`${baseUrl}stream/admin?&count=${count}&page=${page}`);
};

export const ServiceCategoryDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}stream/deletecategory/${id}`);
};

export const getServiceCategoryId = (id) => {
  return axiosInstance.get(`${baseUrl}stream/${id}`);
};

export const ServiceCategoryUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}stream/updatecategory/${id}`, value);
};

// staff------//

export const staffUpdateProfile = (value) => {
  return axiosInstance.put(`${baseUrl}staff/profile/update`, value);
};

export const getUpdateProfile = (value) => {
  return axiosInstance.get(`${baseUrl}staff/profile/view`);
};


// provider

export const providerAdd = (data) => {
  return axiosInstance.post(`${baseUrl}provider/addprovider`, data);
};
export const getprovider = () => {
  return axiosInstance.get(`${baseUrl}provider`);
};

export const providerDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}provider/deleteprovider/${id}`);
};

export const getProviderId = (id) => {
  return axiosInstance.get(`${baseUrl}provider/${id}`);
};

export const providerUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}provider/updateprovider/${id}`, value);
};

// clodinaryImage

export const clodinaryImage = (value) => {
  return axios.post(`${baseUrl}cloudinary/addImage`, value);
};

// clodinaryImage

// Zone get filter

export const ZoneGetFilter = (id) => {
  return axiosInstance.get(`${baseUrl}zone/get/filter`, id);
};

// Api  Master

export const ApiTransactionAdd = (data) => {
  return axiosInstance.post(`${baseUrl}apiList/addApi`, data);
};
export const getApiTransaction = () => {
  return axiosInstance.get(`${baseUrl}apiList`);
};

export const apiMasterDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}apiList/deleteApi/${id}`);
};

export const getapiMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}apiList/${id}`);
};

export const apiMasterUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}apiList/updateApi/${id}`, value);
};

// Api Transaction Master

export const getApiTransactionMaster = () => {
  return axiosInstance.get(`${baseUrl}apiTrans`);
};
export const getTransactionList = (id) => {
  return axiosInstance.delete(`${baseUrl}apiTrans/deleteApiTrans/${id}`);
};


// Contact Enquiries Api

export const contactEnquiryAdd = (data) => {
  return axiosInstance.post(`${baseUrl}contact-enquiries/addContactEnquiries`, data);
};
export const getcontactEnquiry = () => {
  return axiosInstance.get(`${baseUrl}contact-enquiries`);
};

export const contactEnquiryDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}contact-enquiries/deleteContactEnquiries/${id}`);
};

export const getcontactEnquiryId = (id) => {
  return axiosInstance.get(`${baseUrl}contact-enquiries/${id}`);
};

export const apiContactEnquiry = (id, value) => {
  return axiosInstance.put(`${baseUrl}contact-enquiries/updateContactEnquiries/${id}`, value);
};

// agent onBoarding -------!

export const addAgentOnboarding = (data) => {
  return axiosInstance.post(`${baseUrl}agentonboarding/addOnboarding`, data);
};
export const getAgentOnboarding = () => {
  return axiosInstance.get(`${baseUrl}agentonboarding`)
}
export const getAgentOnboardingEdit = (id) => {
  return axiosInstance.get(`${baseUrl}agentonboarding/${id}`)
}
export const updateAgentOnboarding = (id, value) => {
  return axiosInstance.put(`${baseUrl}agentonboarding/updateOnBoarding/${id}`, value);
};
export const deleteAgentOnboarding = (id) => {
  return axiosInstance.delete(`${baseUrl}agentonboarding/deleteOnBoarding/${id}`);
};

export const getAreaZoon = () => {
  return axiosInstance.get(`${baseUrl}area`)
}

// pagination

export const paginationApiArea = (page, count) => {
  return axiosInstance.get(`${baseUrl}area/page/${page}&${count}`)
}

export const paginationApiMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}bank/page/${page}&${count}`)
}
export const paginationUserTypeMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}usertype/page/${page}&${count}`)
}
export const paginationstaffMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}staff/page/${page}&${count}`)
}
export const paginationstaffTypeMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}stafftype/page/${page}&${count}`)
}
export const paginationPayoutbeneficiaryMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}payout-beneficiary/page/${page}&${count}`)
}
export const paginationCountryMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}country/page/${page}&${count}`)
}


// pagination
export const reailerDistIdAgainstAll = (page, count, id) => {
  return axiosInstance.get(`${baseUrl}course`)
}
// Distributor Retailer

export const reailerDistIdAgainst = (page, count, id) => {
  return axiosInstance.get(`${baseUrl}user/member/filter?id=${id}&page=${page}&count=${count}`)
}
export const reailerDistIdAgainstFillers = (data) => {
  return axiosInstance.get(`${baseUrl}user/member/filter/search?mobile=${data.mobile}&page=${data.page}&count=${data.count}&id=${data.id}&email=${data.email}&is_approved=${data.kycStatus ? data.kycStatus : ''}&name=${data.name}&refer_id=${data.refer_id}`)
}

// export const reailerDistIdAgainstFillersPlay = (data) => {
//   const filterTypes = data.filter_type.length ? data.filter_type.join(',') : ''; // join filter_type array to a comma-separated string
//   return axiosInstance.get(`${baseUrl}user/member/filter/search`, {
//     params: {
//       start_date: data.start_date,
//       end_date: data.end_date,
//       filter_type: filterTypes,
//       page: data.page,
//       count: data.count,
//       contest_type: data.contest_type,
//       contest_name: data.contest_name,
//       amount: data.amount
//     }
//   });
// };
export const reailerDistIdAgainstFillersPlay = (data) => {
  return axiosInstance.get(`${baseUrl}user/member/filter/search?mobile=${data.mobile ? data.mobile : ''}&page=${data.page}&count=${data.count}&id=${data.id ? data.id : ''}&email=${data.email ? data.email : ''}&is_approved=${data.kycStatus ? data.kycStatus : ''}&contest_name=${data.contest_name ? data.contest_name : ''}&refer_id=${data.refer_id ? data.refer_id : ''}&start_date=${data.start_date}&end_date=${data.end_date}&filter_type=${data.filter_type.length ? data.filter_type.join(',') : ''}&contest_type=${data.contest_type ? data.contest_type : []}&amount=${data.amount ? data.amount : ''}`);
};



export const updateDistributerApproval = (val, id) => {
  return axiosInstance.put(`${baseUrl}user/updateuserStatus/${id}`, val)
}

export const changePin = (val) => {
  return axiosInstance.put(`${baseUrl}staff/pinChange`, val)
}
export const sendForgotPinOtp = (val) => {
  return axiosInstance.put(`${baseUrl}staff/forgotpinsendotp`, val)
}
export const sendForgotPinOtpVerify = (val) => {
  return axiosInstance.put(`${baseUrl}staff/forgotpinverifyotp`, val)
}

export const changePassword = (val) => {
  return axiosInstance.put(`${baseUrl}staff/passwordChange`, val)
}

// Distributor Retailer upDate

export const getDistIdAgainst = (id) => {
  return axiosInstance.get(`${baseUrl}user/${id}`)
}
export const updateDistIdAgainst = (id, value) => {
  return axiosInstance.put(`${baseUrl}user/updateuser/${id}`, { ...value.basicDetails, ...value.permanentDetails, ...value.serviceDetails, permission: value.permission, is_approved: value.is_approved, kycDetails: value.kycDetails })
}

export const ZoonFilter = ({ areaid, level }) => {
  return axiosInstance.get(`${baseUrl}/zone/get/filter?area=${areaid}&level=${level}`);
};
export const ZoonFilterSec = ({ zone, area }) => {
  return axiosInstance.get(`${baseUrl}/zone/get/filter?zone=${zone}&area=${area}`);
}
// ------------- billing Address Api---------------

export const addBillingAddress = (data) => {
  return axiosInstance.post(`${baseUrl}deliveryaddress/addDeliveryAddress`, data);
};
export const getBillingAddress = (id) => {
  return axiosInstance.get(`${baseUrl}deliveryaddress/user/billing/${id}`)
}
export const getBillingAddressDetails = (id) => {
  return axiosInstance.get(`${baseUrl}deliveryaddress/${id}`)
}
export const updateBillingAddress = (id, value) => {
  return axiosInstance.put(`${baseUrl}deliveryaddress/updatDeliveryAddress/${id}`, value);
};
export const deletBillingAddress = (id) => {
  return axiosInstance.delete(`${baseUrl}deliveryaddress/deleteDeliveryAddress/${id}`);
};
// ------------- shipping Address Api---------------

export const addshippingAddress = (data) => {
  return axiosInstance.post(`${baseUrl}deliveryaddress/addDeliveryAddress`, data);
};
export const getshippingAddress = (id) => {
  return axiosInstance.get(`${baseUrl}deliveryaddress/user/shipping/${id}`)
}
export const getshippingAddressDetails = (id) => {
  return axiosInstance.get(`${baseUrl}deliveryaddress/${id}`)
}
export const updateshippingAddress = (id, value) => {
  return axiosInstance.put(`${baseUrl}deliveryaddress/updatDeliveryAddress/${id}`, value);
};
export const deletshippingAddress = (id) => {
  return axiosInstance.delete(`${baseUrl}deliveryaddress/deleteDeliveryAddress/${id}`);
};


//  DMT Apis

export const adddmtcommscheme = (data) => {
  return axiosInstance.post(`${baseUrl}dmtCommisionSchema/add`, data)
}
export const adddmtcommscheme2 = (data) => {
  return axiosInstance.post(`${baseUrl}dmtCommision/add`, data)
}
export const getdmtcommscheme = (data) => {
  return axiosInstance.get(`${baseUrl}dmtCommisionSchema/findCommisionByDMT?start_date=${data?.start_date ? data?.start_date : ''}&end_date=${data?.end_date ? data?.end_date : ""}&service_id=${data?.service_id ? data?.service_id : ''}&page=${data?.page ? data?.page : ''}&name=${data?.name ? data?.name : 'BBPPSS'}&count=${data?.count ? data?.count : ''}`)
}
export const getBbpscommscheme = (data) => {
  return axiosInstance.get(`${baseUrl}dmtCommisionSchema/findCommisionByBBPS?count=${data?.count ? data?.count : '10'}&page=${data?.page ? data?.page : '0'}`)
}

export const getdmtcommschemeagId = (id) => {
  return axiosInstance.get(`${baseUrl}dmtCommisionSchema/${id}`)
}
export const updatedmtcommschemeagId = (id, value) => {
  return axiosInstance.put(`${baseUrl}dmtCommisionSchema/update/${id}`, value)
}
export const updatedmtcommschemeagId2 = (id, value) => {
  return axiosInstance.put(`${baseUrl}dmtCommision/update/${id}`, value)
}
export const deletedmtcommschemeagId = (id) => {
  return axiosInstance.delete(`${baseUrl}dmtCommisionSchema/delete/${id}`,)
}
// -------------DMT API ---------
export const adddmtcomm = (data) => {
  return axiosInstance.post(`${baseUrl}dmtCommisionSchema/add`, data)
}
export const addBbpsPost = (data) => {
  return axiosInstance.post(`${baseUrl}bbps_Commision/addCommision`, data)
}
export const getdmtcomm = (data) => {
  return axiosInstance.get(`${baseUrl}dmtCommision?start_date=${data?.start_date ? data?.start_date : ''}&end_date=${data?.end_date ? data?.end_date : ""}&service_id=${data?.service_id ? data?.service_id : ''}&page=${data?.page ? data?.page : ''}`)
}
export const getdmtcomm2 = (data) => {
  return axiosInstance.get(`${baseUrl}dmtCommision?start_date=${data?.start_date ? data?.start_date : ''}&end_date=${data?.end_date ? data?.end_date : ""}&service_id=${data?.service_id ? data?.service_id : ''}&count=${data?.count ? data?.count : ''}&page=${data?.page ? data?.page : ''}`)
}
export const getdmtbbpscommSchema = (data) => {
  return axiosInstance.get(`${baseUrl}dmtCommisionSchema/findCommisionByBBPS?&count=${data?.count ? data?.count : ''}&page=${data?.page ? data?.page : ''}`)
}
export const getOperater4 = (data) => {
  return axiosInstance.get(`${baseUrl}bbps_Commision/getCommisionById?id=${data?.id ? data?.id : ''}&service_id=${data?.service_id ? data?.service_id : ''}`)
}
export const getdmtcomm3 = (data) => {
  return axiosInstance.get(`${baseUrl}operator/service/${data.service_id}`)
}
export const getdmtcommagId = (id) => {
  return axiosInstance.get(`${baseUrl}dmtCommisionSchema/${id}`)
}
export const getbbpscommagId = (id) => {
  return axiosInstance.get(`${baseUrl}bbps_Commision/getCommisionById?id=${id}`)
}
export const updatedmtcommagId = (id, value) => {
  return axiosInstance.put(`${baseUrl}dmtCommisionSchema/update/${id}`, value)
}
export const updateBbpscommagId = (id, value) => {
  return axiosInstance.put(`${baseUrl}bbps_Commision/updateCommision/${id}`, value)
}
export const deletedmtcommagId = (id) => {
  return axiosInstance.delete(`${baseUrl}dmtCommision/delete/${id}`,)
}
export const PostComitionVs = (data) => {
  return axiosInstance.post(`${baseUrl}bbps_Commision/addCommision`, data)
}

// ----------------for id------------
export const getBppsID = () => {
  return axiosInstance.get(`${baseUrl}/service/serviceListForBBPSCommision`,)
}
export const getDmtCommSchemeID = () => {
  return axiosInstance.get(`${baseUrl}/service/serviceListForDMTCommision`,)
}
export const getDmtCommSchemeNew = () => {
  return axiosInstance.get(`${baseUrl}/service/serviceListForBBPSCommision`,)
}
export const getReason = () => {
  return axiosInstance.get(`${baseUrl}dmtdisputeReasons/admin`)
}
export const deleteReasonId = (id, token) => {
  return axiosInstance.delete(`${baseUrl}dmtdisputeReasons/delete_dispute/${id}`, token)
}
export const addReasons = (data) => {
  return axiosInstance.post(`${baseUrl}dmtdisputeReasons/add_dispute`, data)
}
export const updateReasons = (id, token) => {
  return axiosInstance.put(`${baseUrl}dmtdisputeReasons/update_dispute/${id}`, token)
}
export const getReasonId = (id) => {
  return axiosInstance.get(`${baseUrl}dmtdisputeReasons/${id}`)
}

export const getStatus = () => {
  return axiosInstance.get(`${baseUrl}dmtstatus/admin`)
}
export const getLeadStatus = () => {
  return axiosInstance.get(`${baseUrl}status`)
}
export const getLeadSubStatus = () => {
  return axiosInstance.get(`${baseUrl}subStatus/admin`)
}
export const deleteStatusId = (id, token) => {
  return axiosInstance.delete(`${baseUrl}dmtstatus/delete_dispute/${id}`)
}
export const addStatus = (data) => {
  return axiosInstance.post(`${baseUrl}dmtstatus/add_dispute`, data)
}
export const updateStatus = (id, token) => {
  return axiosInstance.put(`${baseUrl}dmtstatus/update_dispute/${id}`, token)
}
export const getStatusId = (id) => {
  return axiosInstance.get(`${baseUrl}dmtstatus/${id}`)
}

export const getPriority = (data) => {
  return axiosInstance.get(`${baseUrl}dmtDisputePriority/admin?page=${data?.page}&count=${data?.count}`)
}
export const deletePriorityId = (id, token) => {
  return axiosInstance.delete(`${baseUrl}dmtDisputePriority/delete_dispute/${id}`)
}
export const adddmtPriority = (data) => {
  return axiosInstance.post(`${baseUrl}dmtDisputePriority/add_dispute`, data)
}
export const updatePriority = (id, token) => {
  return axiosInstance.put(`${baseUrl}dmtDisputePriority/update_dispute/${id}`, token)
}
export const getPriorityId = (id) => {
  return axiosInstance.get(`${baseUrl}dmtDisputePriority/${id}`)
}


// ---------------DMT Txn Fillter --------------- 

export const fillterDmtTxnReport = (data) => {
  return axiosInstance.post(`${baseUrl}dmt_txn/st/report`, data)
}

export const walletsReport = (data) => {
  return axiosInstance.post(`${baseUrl}mainwallet/create`, data)
}

export const walletsReportFilter = (page, count, data) => {
  return axiosInstance.post(`${baseUrl}mainwallet/filter`, { page, ...data, count })
}
// --------------------paymentRequest-------------------
export const fillterRequestPayment = (data) => {
  return axiosInstance.post(`${baseUrl}paymentRequest/admin`, data)
}
// -----------------------Virtual Wallelt --------------------------
export const virtualWallets = (data) => {
  return axiosInstance.post(`${baseUrl}virtual_wallet/initiateTrans`, data)
}
export const addVirtualWallets = (data) => {
  return axiosInstance.post(`${baseUrl}virtual_wallet/create`, data)
}
export const virtualWalletsFilter = (page, count, data) => {
  return axiosInstance.post(`${baseUrl}virtual_wallet/filter`, { ...data, count: count, page: page })
}
// -------------------------------------chargesSettings-----------------------------------

export const getchargesSettings = (token) => {
  return axiosInstance.get(`${baseUrl}setting/admin`, token)
}
export const chargesUpdateSettings = (token) => {
  return axiosInstance.put(`${baseUrl}setting/update/`, token)
}


// _________________AEPS________________

export const aepsTransctionFilter = (data) => {
  return axiosInstance.post(`${baseUrl}aepstxn/staff`, data)
}
export const aepsTransctionAll = (data) => {
  return axiosInstance.post(`${baseUrl}aepstxn/staff/all`, data)
}
export const aadharPayTransctionFilter = (data) => {
  return axiosInstance.post(`${baseUrl}adhaarpay/staff`, data)
}
export const aadharPayTransctionAll = (data) => {
  return axiosInstance.post(`${baseUrl}adhaarpay/staff/all`, data)
}

// _________________Quick Dhan ________________

export const quickDhanFilter = (data) => {
  return axiosInstance.post(`${baseUrl}quickdhan/staff`, data)
}
export const quickDhanAll = (data) => {
  return axiosInstance.post(`${baseUrl}quickdhan/staff/all`, data)
}


// Disputs

export const DisputeData = (data) => {
  return axiosInstance.post(`${baseUrl}dmtdisputes/admin`, data)
}



// export const aadharPayTransctionFilter = (data) => {
//   return axiosInstance.post(`${baseUrl}adhaarpay/staff`, data)
// }
// export const aadharPayTransctionAll = (data) => {
//   return axiosInstance.post(`${baseUrl}adhaarpay/staff/all`, data)
// }


// -----staff Address Apis All Masters ------

// ------------------Building Apis------
export const getBuildingsMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}staffaddr/building?page=${page}&count=${count}`);
};

export const addBuildingMaster = (data) => {
  return axiosInstance.post(`${baseUrl}staffaddr/building/addbuilding`, data);
};
export const deleteBuildingMaster = (id) => {
  console.log(id);
  return axiosInstance.delete(`${baseUrl}staffaddr/building/deletebuilding/${id}`);
};
export const updateBuildingMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}staffaddr/building/updatebuilding/${id}`, value);
};
export const getBuildingsMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}staffaddr/building/${id}`);
};

// ------------------Block Apis------

export const getBlockMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}staffaddr/block?page=${page}&count=${count}`);
};

export const addBlockMaster = (data) => {
  return axiosInstance.post(`${baseUrl}staffaddr/block/addblock`, data);
};
export const deleteBlockMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}staffaddr/block/deleteblock/${id}`);
};
export const updateBlockMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}staffaddr/block/updateblock/${id}`, value);
};
export const getBlockMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}staffaddr/block/${id}`);
};
// ------------------Area Apis------

export const getAreaMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}staffaddr/area?page=${page}&count=${count}`);
};

export const addAreaMaster = (data) => {
  return axiosInstance.post(`${baseUrl}staffaddr/area/addarea`, data);
};
export const deleteAreaMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}staffaddr/area/deletearea/${id}`);
};
export const updateAreaMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}staffaddr/area/updatearea/${id}`, value);
};
export const getAreaMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}staffaddr/area/${id}`);
};
// ------------------Floor Apis------

export const getFloorMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}staffaddr/floor?page=${page}&count=${count}`);
};

export const addFloorMaster = (data) => {
  return axiosInstance.post(`${baseUrl}staffaddr/floor/addfloor`, data);
};
export const deleteFloorMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}staffaddr/floor/deletefloor/${id}`);
};
export const updateFloorMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}staffaddr/floor/updatefloor/${id}`, value);
};
export const getFloorMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}staffaddr/floor/${id}`);
};
// ------------------Wards Apis------

export const getWardMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}staffaddr/ward?page=${page}&count=${count}`);
};

export const addWardMaster = (data) => {
  return axiosInstance.post(`${baseUrl}staffaddr/ward/addward`, data);
};
export const deleteWardMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}staffaddr/ward/deleteward/${id}`);
};
export const updateWardMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}staffaddr/ward/updateward/${id}`, value);
};
export const getWardMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}staffaddr/ward/${id}`);
};
// ------------------Office Apis------

export const getOfficeMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}staffaddr/office?page=${page}&count=${count}`);
};

export const addOfficeMaster = (data) => {
  return axiosInstance.post(`${baseUrl}staffaddr/office/addoffice`, data);
};
export const deleteOfficeMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}staffaddr/office/deleteoffice/${id}`);
};
export const updateOfficeMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}staffaddr/office/updateoffice/${id}`, value);
};
export const getOfficeMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}staffaddr/office/${id}`);
};

// ------------------department  Permision Apis------

export const getDepartmentMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}staffaddr/department?page=${page}&count=${count}`);
};

export const addDepartmentMaster = (data) => {
  return axiosInstance.post(`${baseUrl}staffaddr/department/adddepartment`, data);
};
export const deleteDepartmentMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}staffaddr/department/deletedepartment/${id}`);
};
export const updateDepartmentMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}staffaddr/department/updatedepartment/${id}`, value);
};
export const getDepartmentMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}staffaddr/department/${id}`);
};
// ------------------Designation  Permision Apis------

export const getdesignationMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}staffaddr/designation?page=${page}&count=${count}`);
};

export const adddesignationMaster = (data) => {
  return axiosInstance.post(`${baseUrl}staffaddr/designation/adddesignation`, data);
};
export const deletedesignationMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}staffaddr/designation/deletedesignation/${id}`);
};
export const updatedesignationMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}staffaddr/designation/updatedesignation/${id}`, value);
};
export const getdesignationMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}staffaddr/designation/${id}`);
};


// ------------------Staff Permision Apis------

export const getStaffpermision = (page, count) => {
  return axiosInstance.get(`${baseUrl}staff?page=${page}&count=${count}`);
};
export const getStaffpermisionall = (page) => {
  return axiosInstance.get(`${baseUrl}staff?page=${page.page}&count=${page.count}`);
};

export const addStaffpermision = (data) => {
  return axiosInstance.post(`${baseUrl}staff/addstaff`, data);
};
export const deleteStaffpermision = (id) => {
  return axiosInstance.delete(`${baseUrl}staff/deletestaff/${id}`);
};
export const updateStaffpermision = (id, value) => {
  return axiosInstance.put(`${baseUrl}staff/updatestaff/${id}`, value);
};
export const getStaffpermisionId = (id) => {
  return axiosInstance.get(`${baseUrl}staff/${id}`);
};



// -------------------add staff for selector apis-----------------

export const getStaffSelecAdd = () => {
  return axiosInstance.get(`${baseUrl}staffaddr/building/public`);
};
export const getOfficeSelecStaff = () => {
  return axiosInstance.get(`${baseUrl}staffaddr/office/public`);
};
export const getFloorSelecStaff = () => {
  return axiosInstance.get(`${baseUrl}staffaddr/floor/public`);
};
export const getAreaSelecStaff = () => {
  return axiosInstance.get(`${baseUrl}staffaddr/area/public`);
};
export const getBlockSelecStaff = () => {
  return axiosInstance.get(`${baseUrl}staffaddr/block/public`);
};
export const getWardSelecStaff = () => {
  return axiosInstance.get(`${baseUrl}staffaddr/ward/public`);
};
export const getDepartmentSelecStaff = () => {
  return axiosInstance.get(`${baseUrl}staffaddr/department/public`);
};
export const getDesignationSelecStaff = () => {
  return axiosInstance.get(`${baseUrl}staffaddr/designation/public`);
};
export const getRoleSelecStaff = () => {
  return axiosInstance.get(`${baseUrl}role/public`);
};



// --------------Mustaf's APIS Start-----------------------------------


export const addMainModule = (data) => {
  return axiosInstance.post(`${baseUrl}mainModule/addMainModule`, data)
};

export const updateMainModule = (id) => {
  return axiosInstance.get(`${baseUrl}mainModule/${id}`);
};

export const updateModule = (id, value) => {
  return axiosInstance.put(`${baseUrl}mainModule/updatMainModule/${id}`, value);
};

export const deleteMainModulee = (id) => {
  return axiosInstance.delete(`${baseUrl}mainModule/deleteMainModule/${id}`);
};


export const mainModuleList = (page, count) => {
  // console.log(page, page);
  return axiosInstance.get(`${baseUrl}mainModule?page=${page}&count=${count}`);
}

export const addSubModule = (data) => {
  return axiosInstance.post(`${baseUrl}subModule/addsubModule`, data)
};
export const addSubSubModule = (data) => {
  return axiosInstance.post(`${baseUrl}subSubModule/addSubModule`, data)
};

export const subModule = (page, count) => {
  // console.log(page, page);
  return axiosInstance.get(`${baseUrl}subModule?page=${page}&count=${count}`);
}
export const subSubModule = (page, count) => {
  // console.log(page, page);
  return axiosInstance.get(`${baseUrl}subSubModule?page=${page}&count=${count}`);
}

export const updatesubModule = (id, value) => {
  return axiosInstance.put(`${baseUrl}subModule/updatsubModule/${id}`, value);
};
export const updatesubSubModule = (id, value) => {
  return axiosInstance.put(`${baseUrl}subSubModule/updatSubModule/${id}`, value);
};

export const updateSubMainModule = (id) => {
  return axiosInstance.get(`${baseUrl}subModule/${id}`);
}
export const updateSubSubMainModule = (id) => {
  return axiosInstance.get(`${baseUrl}subSubModule/${id}`);
}
export const deleteSubModulee = (id) => {
  return axiosInstance.delete(`${baseUrl}subModule/deletesubModule/${id}`);
};
export const deleteSubSubModulee = (id) => {
  return axiosInstance.delete(`${baseUrl}subSubModule/deleteSubModule/${id}`);
};


export const getControler = (data) => {
  return axiosInstance.get(`${baseUrl}mainmodule/ids?controllers=${JSON.stringify(data)}`)
};

export const addRolee = (data) => {
  return axiosInstance.post(`${baseUrl}role/addRole`, data)
};
export const roleList = (page, count) => {
  // console.log(page, page);
  return axiosInstance.get(`${baseUrl}role?page=${page}&count=${count}`);
}

export const updategetId = (id) => {
  return axiosInstance.get(`${baseUrl}role/${id}`);
};
export const updatesaddRole = (id, value) => {
  return axiosInstance.put(`${baseUrl}role/updatrole/${id}`, value);
};

export const listRoleDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}role/deleterole/${id}`);
};

export const pri = (data) => {
  return axiosInstance.get(`${baseUrl}dmtDisputePriority/admin`)
};

export const sta = (data) => {
  return axiosInstance.get(`${baseUrl}dmtstatus/admin`)
};
export const build = (data) => {
  return axiosInstance.get(`${baseUrl}staffaddr/building/public`)
};

export const bolk = (data) => {
  return axiosInstance.get(`${baseUrl}staffaddr/block/public`)
};
export const oRome = (data) => {
  return axiosInstance.get(`${baseUrl}staffaddr/office/public`)
};
export const oword = (data) => {
  return axiosInstance.get(`${baseUrl}staffaddr/ward/public`)
};
export const oArea = (data) => {
  return axiosInstance.get(`${baseUrl}staffaddr/area/public`)
};

export const flore = (data) => {
  return axiosInstance.get(`${baseUrl}staffaddr/floor/public`)
};

export const addComplain = (data) => {
  return axiosInstance.post(`${baseUrl}staff_dispute/adddispute`, data)
};

export const complaneList = (page, count) => {
  // console.log(page, page);
  return axiosInstance.get(`${baseUrl}staff_dispute?page=${page}&count=${count}`);
}

export const complaneListDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}staff_dispute/deletedispute/${id}`);
};

export const compalneId = (id) => {
  return axiosInstance.get(`${baseUrl}staff_dispute/${id}`);
};
export const updateComplane = (id, value) => {
  return axiosInstance.put(`${baseUrl}staff_dispute/updatdispute/${id}`, value);
};

export const dasComplaient = (data) => {
  return axiosInstance.get(`${baseUrl}dashboard/complaint`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// --------------kyc Documents Apis Staff----------
export const addStaffKycDoc = (data) => {
  return axiosInstance.post(`${baseUrl}staff_document/add_Doc`, data)
};
export const getStaffKycDoc = () => {
  return axiosInstance.get(`${baseUrl}staff_document/kycView`)
};
export const getStaffKycDocStaffId = (id) => {
  return axiosInstance.get(`${baseUrl}staff_document/${id}`)
};
export const updateStatusStaffKycDocStaffId = (id, value) => {
  return axiosInstance.put(`${baseUrl}staff/updatestaffstatus/${id}`, value)
};

export const getsNotification = (value) => {

  return axiosInstance.get(`${baseUrl}notification/filter/admin?readed=${false}&page=${value?.page}&count=${value?.count}`);
};

export const countNotification = (value) => {
  return axiosInstance.get(`${baseUrl}notification/summary/admin`);
};
export const notificationReport = (data) => {
  return axiosInstance.get(`${baseUrl}notification/report?count=10&page=${data.page}&sendFrom&sendBy&message_type&to`)
}
export const bpbsOperatorList = async (serviceId, page, pageSize, packageId) => {
  console.log("packageId", packageId)
  try {
    const response = await axios.get(`${baseUrl}package/bbps/commision/admin`, {
      params: {
        service_id: serviceId,
        package_id: packageId,
        count: pageSize,
        page: page
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching BBPS operators:', error);
    throw error;
  }
};
export const bpbsAllServiceList = async () => {
  try {
    const response = await axios.get(`${baseUrl}service/admin`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching package invoice:', error);
    throw error;
  }
};
export const fetchInitialPackages = async (userId) => {
  const url = `${baseUrl}package/freeList?user_id=${userId}`;
  const token = localStorage.getItem('userToken');

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const fetchPackageDetails = async (packageId) => {
  const url = `${baseUrl}package/${packageId}`;
  const token = localStorage.getItem('userToken');

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const assignPackage = async (userId, selectedPackage) => {
  const url = `${baseUrl}package/packageChange`;
  const token = localStorage.getItem('userToken');

  const response = await axiosInstance.put(
    url,
    {
      userid: userId,
      package_id: selectedPackage,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log("assignPckage", response)

  return response;
};
export const commissionServiceByReport = async (startDate, endDate) => {


  try {
    let url = `${baseUrl}dashboard/commisionReportByServices?`;

    const params = new URLSearchParams({
      // service_id: serviceId,
      // page,
      // page_size: pageSize,
      // package_id: packageId
    });

    if (startDate) {
      params.append('start_date', startDate);
    }

    if (endDate) {
      params.append('end_date', endDate);
    }

    url += params.toString();

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching commission report:', error);
    throw error;
  }
};
export const tdsServiceByReport = async (startDate, endDate) => {


  try {
    let url = `${baseUrl}dashboard/tdsReportByServices?`;

    const params = new URLSearchParams({

    });

    if (startDate) {
      params.append('start_date', startDate);
    }

    if (endDate) {
      params.append('end_date', endDate);
    }

    url += params.toString();

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching commission report:', error);
    throw error;
  }
};
export const chargeServiceByReport = async (startDate, endDate) => {


  try {
    let url = `${baseUrl}dashboard/chargeReportByServices?`;

    const params = new URLSearchParams({

    });

    if (startDate) {
      params.append('start_date', startDate);
    }

    if (endDate) {
      params.append('end_date', endDate);
    }

    url += params.toString();

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching commission report:', error);
    throw error;
  }
};
export const ledgerReport = async (page, count, startDate, endDate) => {
  try {
    let url = `${baseUrl}dashboard/ledgerReport`;

    const params = new URLSearchParams({
      page: page.toString(),
      count: count.toString()
    });

    if (startDate) {
      params.append('start_date', startDate);
    }

    if (endDate) {
      params.append('end_date', endDate);
    }

    url += `?${params.toString()}`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching ledger report:', error);
    throw error;
  }
};
export const ledgerReportAll = async (startDate, endDate) => {
  try {
    let url = `${baseUrl}dashboard/ledgerReport/all`;

    const params = new URLSearchParams({

    });

    if (startDate) {
      params.append('start_date', startDate);
    }

    if (endDate) {
      params.append('end_date', endDate);
    }

    url += `?${params.toString()}`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching ledger report:', error);
    throw error;
  }
};



//------------------College Bazzar Apis ===============
// --------------------CollegeTypeApis---------------------------
export const getTypes_Of_collegesMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}type_of_college?page=${page}&count=${count}`);
};

export const addTypes_Of_collegesMaster = (data) => {
  return axiosInstance.post(`${baseUrl}type_of_college/addType`, data);
};
export const deleteTypes_Of_collegesMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}type_of_college/delete_type/${id}`);
};
export const updateTypes_Of_collegesMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}type_of_college/update_type/${id}`, value);
};
export const getTypes_Of_collegesMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}type_of_college/${id}`);
};
// --------------------AffiliatedByApis---------------------------
export const getTypes_Of_AffilatedBy_Master = (page, count) => {
  return axiosInstance.get(`${baseUrl}affiliatedBy?page=${page}&count=${count}`);
};

export const addTypes_Of_AffilatedBy_Master = (data) => {
  return axiosInstance.post(`${baseUrl}affiliatedBy/addType`, data);
};
export const deleteTypes_Of_AffilatedBy_Master = (id) => {
  return axiosInstance.delete(`${baseUrl}affiliatedBy/delete_type/${id}`);
};
export const updateTypes_Of_AffilatedBy_Master = (id, value) => {
  return axiosInstance.put(`${baseUrl}affiliatedBy/update_type/${id}`, value);
};
export const getAffilatedBy_MasterId = (id) => {
  return axiosInstance.get(`${baseUrl}affiliatedBy/${id}`);
};
// --------------------ApprovedByApis---------------------------
export const getApprovedBy_Master = (page, count) => {
  return axiosInstance.get(`${baseUrl}approvedBy?page=${page}&count=${count}`);
};

export const addTypes_Of_ApprovedBy_Master = (data) => {
  return axiosInstance.post(`${baseUrl}approvedBy/addType`, data);
};
export const deleteTypes_Of_ApprovedBy_Master = (id) => {
  return axiosInstance.delete(`${baseUrl}approvedBy/delete_type/${id}`);
};
export const updateTypes_Of_ApprovedBy_Master = (id, value) => {
  return axiosInstance.put(`${baseUrl}approvedBy/update_type/${id}`, value);
};
export const getApprovedBy_MasterId = (id) => {
  return axiosInstance.get(`${baseUrl}approvedBy/${id}`);
};
// --------------------credit Cards Apis---------------------------
export const getTypes_Of_creditCardMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}creditCard?page=${page}&count=${count}`);
};

export const addTypes_Of_creditCardMaster = (data) => {
  return axiosInstance.post(`${baseUrl}creditCard/addType`, data);
};
export const deleteTypes_Of_creditCardMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}creditCard/delete_type/${id}`);
};
export const updateTypes_Of_creditCardMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}creditCard/update_type/${id}`, value);
};
export const getTypes_Of_creditCardMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}creditCard/${id}`);
};
// --------------------Sources Apis---------------------------
export const leadSourseMasterList = (page, count) => {
  return axiosInstance.get(`${baseUrl}source?page=${page}&count=${count}`);
};

export const addLeadSourseMaster = (data) => {
  return axiosInstance.post(`${baseUrl}source/addType`, data);
};
export const deleteLeadSourseMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}source/delete_type/${id}`);
};
export const updateLeadSourseMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}source/update_type/${id}`, value);
};
export const getUpdateLeadSourseId = (id) => {
  return axiosInstance.get(`${baseUrl}source/${id}`);
};

//  ------------------------------Lead Sub Status-------------------------
export const leadSubStatusMasterList = (page, count) => {
  return axiosInstance.get(`${baseUrl}subStatus?page=${page}&count=${count}`);
};
export const leadSubStatusMasterListAll = (page, count) => {
  return axiosInstance.get(`${baseUrl}subStatus`);
};

export const addLeadSubStatusMaster = (data) => {
  return axiosInstance.post(`${baseUrl}subStatus/addType`, data);
};
export const deleteLeadSubStatusMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}subStatus/delete_type/${id}`);
};
export const updateLeadSubStatusMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}subStatus/update_type/${id}`, value);
};
export const getUpdateLeadSubStatusId = (id) => {
  return axiosInstance.get(`${baseUrl}subStatus/${id}`);
};
//  ------------------------------Lead  Status-------------------------
export const leadenquiryStatusMasterList = (page, count) => {
  return axiosInstance.get(`${baseUrl}enquiryStatus?page=${page}&count=${count}`);
};
export const leadenquiryStatusMasterListAll = (page, count) => {
  return axiosInstance.get(`${baseUrl}enquiryStatus`);
};

export const addenquiryStatusMaster = (data) => {
  return axiosInstance.post(`${baseUrl}enquiryStatus/addstatus`, data);
};
export const deleteenquiryStatusMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}enquiryStatus/deletestatus/${id}`);
};
export const updateenquiryStatusMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}enquiryStatus/updatstatus/${id}`, value);
};
export const getUpdateenquiryStatusId = (id) => {
  return axiosInstance.get(`${baseUrl}enquiryStatus/${id}`);
};
// ____________________Facilities Crud Apis ___________________________________

export const facilitiesMasterList = (page, count) => {
  return axiosInstance.get(`${baseUrl}facility?page=${page}&count=${count}`);
};

export const addfacilitiesMaster = (data) => {
  return axiosInstance.post(`${baseUrl}facility/addType`, data);
};
export const deletefacilitiesMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}facility/delete_type/${id}`);
};
export const updatefacilitiesMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}facility/update_type/${id}`, value);
};
export const getUpdatefacilitiesStatusId = (id) => {
  return axiosInstance.get(`${baseUrl}facility/${id}`);
};
//  ------------------------------Colleges Api  Status-------------------------
export const CollegescrudList = (page, count) => {
  return axiosInstance.get(`${baseUrl}college?page=${page}&count=${count}`);
};

export const addCollegescrud = (data) => {
  return axiosInstance.post(`${baseUrl}college/addcollege`, data);
};
export const deleteCollegescrud = (id) => {
  return axiosInstance.delete(`${baseUrl}college/deletecollege/${id}`);
};
export const updateCollegescrud = (id, value) => {
  return axiosInstance.put(`${baseUrl}college/updatcollege/${id}`, value);
};
export const getupdateCollegesCrudStatusId = (id) => {
  return axiosInstance.get(`${baseUrl}college/${id}`);
};


//  ------------------------------GAllERY MAster  APIS-------------------------
export const PhotosGalleryList = (page, count) => {
  return axiosInstance.get(`${baseUrl}photoGallery?page=${page}&count=${count}`);
};

export const addPhotosGallery = (data) => {
  return axiosInstance.post(`${baseUrl}photoGallery/addPhotoGallery`, data);
};
export const deletePhotosGallery = (id) => {
  return axiosInstance.delete(`${baseUrl}photoGallery/delete_photoGallery/${id}`);
};
export const updatePhotosGallery = (id, value) => {
  return axiosInstance.put(`${baseUrl}photoGallery/update_photoGallery/${id}`, value);
};
export const getupdatePhotosGalleryStatusId = (id) => {
  return axiosInstance.get(`${baseUrl}photoGallery/${id}`);
};


//  ------------------------------Course Degree Type  APIS-------------------------
export const CourseDegreeList = (page, count) => {
  return axiosInstance.get(`${baseUrl}courseType?page=${page}&count=${count}`);
};

export const addCourseDegree = (data) => {
  return axiosInstance.post(`${baseUrl}courseType/addType`, data);
};
export const deleteCourseDegree = (id) => {
  return axiosInstance.delete(`${baseUrl}courseType/delete_Type/${id}`);
};
export const updateCourseDegree = (id, value) => {
  return axiosInstance.put(`${baseUrl}courseType/update_Type/${id}`, value);
};
export const getupdateCourseDegreeStatusId = (id) => {
  return axiosInstance.get(`${baseUrl}courseType/${id}`);
};


// ---------------------Apis for Add Colleges Selector N combo ====================
export const getCollegeTypeListSelect = () => {
  return axiosInstance.get(`${baseUrl}type_of_college/admin`);
};

export const getAffiliatedListSelect = () => {
  return axiosInstance.get(`${baseUrl}affiliatedBy/admin`);
};
export const getApproveListSelect = () => {
  return axiosInstance.get(`${baseUrl}approvedBy/admin`);
};
export const getCreditCardListSelect = () => {
  return axiosInstance.get(`${baseUrl}creditCard/admin`);
};
export const getFacilitiesListSelect = () => {
  return axiosInstance.get(`${baseUrl}facility/admin`);
};
export const getStreamListSelect = () => {
  return axiosInstance.get(`${baseUrl}stream/admin`);
};
export const getCourseListSelect = (id) => {
  return axiosInstance.get(`${baseUrl}course/service_category?ids=${JSON.stringify(id)}`);
};




// -------------------Junaid'S APIS- START------------------------------
export const DeleteTestimonial = (id) => {
  return axiosInstance.delete(`${baseUrl}testimonial / delete_testimonial / ${id}`,);
}



export const getTestimonialById = (value) => {
  return axios.get(`${baseUrl}testimonial/${value}, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: Bearer ${window.localStorage.getItem('userToken')},
    },
  }`);
};



export const testimonialPost = (data) => {
  return axiosInstance.post(`${baseUrl}testimonial/addTestimonial`, data)
};

export const testimonialPostUpdate = (data) => {
  return axiosInstance.put(`${baseUrl}testimonial/update_testimonial/${data.id}`, data.data)
};

export const getTestimonial = (page, count) => {
  return axiosInstance.get(`${baseUrl}testimonial?page=${page}&count=${count}`);
}



export const deleteVideoGallery = (id) => {
  return axiosInstance.delete(`${baseUrl}videoGallery/delete_videoGallery/${id}`);
};

export const getVideoGalleryById = (id) => {
  return axiosInstance.get(`${baseUrl}videoGallery/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const postVideoGallery = (data) => {
  return axiosInstance.post(`${baseUrl}videoGallery/addVideoGallery`, data);
};

export const updateVideoGallery = (data) => {
  return axiosInstance.put(`${baseUrl}videoGallery/update_videoGallery/${data.id}`, data.data);
};

export const getVideoGallery = (page, count) => {
  return axiosInstance.get(`${baseUrl}videoGallery?page=${page}&count=${count}`);
};



export const deleteBlogCategory = (id) => {
  return axiosInstance.delete(`${baseUrl}blogCategory/delete_blogCategory/${id}`);
};

// GET a blog category by ID
export const getBlogCategoryById = (id) => {
  return axiosInstance.get(`${baseUrl}blogCategory/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new blog category
export const postBlogCategory = (data) => {
  return axiosInstance.post(`${baseUrl}blogCategory/addBlogCategory`, data);
};

// PUT (update) an existing blog category by ID
export const updateBlogCategory = (data) => {
  return axiosInstance.put(`${baseUrl}blogCategory/update_blogCategory/${data.id}`, data.data);
};

// GET the list of blog categories with pagination
export const getBlogCategoryList = (page, count) => {
  return axiosInstance.get(`${baseUrl}blogCategory?page=${page}&count=${count}`);
};




// DELETE a blog by ID
export const deleteBlog = (id) => {
  return axiosInstance.delete(`${baseUrl}blog/delete_blog/${id}`);
};

// GET a blog by ID
export const getBlogById = (id) => {
  return axiosInstance.get(`${baseUrl}blog/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new blog
export const postBlog = (data) => {
  return axiosInstance.post(`${baseUrl}blog/addBlog`, data);
};

// PUT (update) an existing blog by ID
export const updateBlog = (data) => {
  return axiosInstance.put(`${baseUrl}blog/update_blog/${data.id}`, data.data);
};

// GET the list of blogs with pagination
export const getBlogList = (page, count) => {
  return axiosInstance.get(`${baseUrl}blog?page=${page}&count=${count}`);
};


// DELETE a partner by ID
export const deletePartner = (id) => {
  return axiosInstance.delete(`${baseUrl}partner/delete_partner/${id}`);
};

// GET a partner by ID
export const getPartnerById = (id) => {
  return axiosInstance.get(`${baseUrl}partner/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new partner
export const postPartner = (data) => {
  return axiosInstance.post(`${baseUrl}partner/addPartner`, data);
};

// PUT (update) an existing partner by ID
export const updatePartner = (data) => {
  return axiosInstance.put(`${baseUrl}partner/update_partner/${data.id}`, data.data);
};

// GET the list of partners with pagination
export const getPartnerList = (page, count) => {
  return axiosInstance.get(`${baseUrl}partner?page=${page}&count=${count}`);
};

export const getAboutUs = (page, count) => {
  return axiosInstance.get(`${baseUrl}aboutus/admin`);
};
export const updateAboutUs = (data) => {
  return axiosInstance.put(`${baseUrl}aboutus/update`, data);
};
export const getContactUs = (page, count) => {
  return axiosInstance.get(`${baseUrl}contactus/admin`);
};
export const updateContactUs = (data) => {
  return axiosInstance.put(`${baseUrl}contactus/update`, data);
};
export const getPrivacyPolicy = (page, count) => {
  return axiosInstance.get(`${baseUrl}privacyNPolicy/admin`);
};
export const updatePrivacyPolicy = (data) => {
  return axiosInstance.put(`${baseUrl}privacyNPolicy/update`, data);
};

export const getReturnPolicy = (page, count) => {
  return axiosInstance.get(`${baseUrl}returnPolicy/admin`);
};
export const updateReturnPolicy = (data) => {
  return axiosInstance.put(`${baseUrl}returnPolicy/update`, data);
};

export const gettermsNCondition = (page, count) => {
  return axiosInstance.get(`${baseUrl}termsNCondtion/admin`);
};
export const updatetermsNCondition = (data) => {
  return axiosInstance.put(`${baseUrl}termsNCondtion/update`, data);
};


export const deleteFaq = (id) => {
  return axiosInstance.delete(`${baseUrl}faq/delete_type/${id}`);
};

export const getFaqById = (id) => {
  return axiosInstance.get(`${baseUrl}faq/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const postFaq = (data) => {
  return axiosInstance.post(`${baseUrl}faq/addType`, data);
};

export const updateFaq = (data) => {
  return axiosInstance.put(`${baseUrl}faq/update_type/${data.id}`, data.data);
};

export const getFaqList = (page, count) => {
  return axiosInstance.get(`${baseUrl}faq`);
};
export const collegeListss = (page, count) => {
  return axiosInstance.get(`${baseUrl}college/admin`);
};




// DELETE a template type by ID
export const deleteTemplateType = (id) => {
  return axiosInstance.delete(`${baseUrl}template-type/delete_template_type/${id}`);
};

// GET a template type by ID
export const getTemplateTypeById = (id) => {
  return axiosInstance.get(`${baseUrl}template-type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new template type
export const postTemplateType = (data) => {
  return axiosInstance.post(`${baseUrl}template-type/addTemplateType`, data);
};

// PUT (update) an existing template type by ID
export const updateTemplateType = (data) => {
  return axiosInstance.put(`${baseUrl}template-type/update_template_type/${data.id}`, data.data);
};

// GET the list of template types with pagination
export const getTemplateTypeList = (page, count) => {
  return axiosInstance.get(`${baseUrl}template-type?page=${page}&count=${count}`);
};



// DELETE a template category by ID
export const deleteTemplateCategory = (id) => {
  return axiosInstance.delete(`${baseUrl}template-category/delete_template_category/${id}`);
};

// GET a template category by ID
export const getTemplateCategoryById = (id) => {
  return axiosInstance.get(`${baseUrl}template-category/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new template category
export const postTemplateCategory = (data) => {
  return axiosInstance.post(`${baseUrl}template-category/addTemplateCategory`, data);
};

// PUT (update) an existing template category by ID
export const updateTemplateCategory = (data) => {
  return axiosInstance.put(`${baseUrl}template-category/update_template_category/${data.id}`, data.data);
};

// GET the list of template categories with pagination
export const getTemplateCategoryList = (page, count) => {
  return axiosInstance.get(`${baseUrl}template-category?page=${page}&count=${count}`);
};


// DELETE a flow by ID
export const deleteFlowCategory = (id) => {
  return axiosInstance.delete(`${baseUrl}flow-builder/delete_flow_category/${id}`);
};

// GET a flow by ID
export const getFlowCategoryById = (id) => {
  return axiosInstance.get(`${baseUrl}flow-builder/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new flow category
export const postFlowCategory = (data) => {
  return axiosInstance.post(`${baseUrl}flow-builder/addFlowCategory`, data);
};

// PUT (update) an existing flow category by ID
export const updateFlowCategory = (data) => {
  return axiosInstance.put(`${baseUrl}flow-builder/update_flow_category/${data.id}`, data.data);
};

// GET the list of flow categories with pagination
export const getFlowCategoryList = (page, count) => {
  return axiosInstance.get(`${baseUrl}flow-builder?page=${page}&count=${count}`);
};



// DELETE a lead type by ID
export const deleteLeadType = (id) => {
  return axiosInstance.delete(`${baseUrl}leadType/delete_type/${id}`);
};

// GET a lead type by ID
export const getLeadTypeById = (id) => {
  return axiosInstance.get(`${baseUrl}leadType/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new lead type
export const postLeadType = (data) => {
  return axiosInstance.post(`${baseUrl}leadType/addType`, data);
};

// PUT (update) an existing lead type by ID
export const updateLeadType = (data) => {
  return axiosInstance.put(`${baseUrl}leadType/update_type/${data.id}`, data.data);
};


// GET the list of lead types with pagination
export const getLeadTypeList = (page, count) => {
  return axiosInstance.get(`${baseUrl}leadType?page=${page}&count=${count}`);
};

export const updateLeadBulkEdit = (data) => {
  return axiosInstance.put(`${baseUrl}user/bulkupdate`, data);
};



// DELETE a comment by ID
export const deleteCommentById = (id) => {
  return axiosInstance.delete(`/comment/delete_type/${id}`);
};

// GET comments by user ID with pagination
export const getCommentsByUser = (userId, page = 0, count = 10) => {
  return axiosInstance.get(`/comment/user?id=${userId}&page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a comment by ID
export const getCommentById = (id) => {
  return axiosInstance.get(`/comment/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new comment
export const postComments = (data) => {
  return axiosInstance.post(`/comment/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing comment by ID
export const updateCommentById = (id, data) => {
  return axiosInstance.put(`/comment/update_type/${id}`, data);
};




// DELETE a call by ID
export const deleteCallById = (id) => {
  return axiosInstance.delete(`/call/delete_type/${id}`);
};

// GET calls by user ID with pagination
export const getCallsByUser = (userId, page = 0, count = 10) => {
  return axiosInstance.get(`/call/user?id=${userId}&page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a call by ID
export const getCallById = (id) => {
  return axiosInstance.get(`/call/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new call
export const postCall = (data) => {
  return axiosInstance.post(`/call/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing call by ID
export const updateCallById = (id, data) => {
  return axiosInstance.put(`/call/update_type/${id}`, data);
};





// DELETE a call status by ID
export const deleteCallStatusById = (id) => {
  return axiosInstance.delete(`/call-status/delete_type/${id}`);
};

// GET calls by user ID with pagination
export const getCallsStatusByUser = (userId, page = 0, count = 10) => {
  return axiosInstance.get(`/call-status?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a call by ID
export const getCallByStatusId = (id) => {
  return axiosInstance.get(`/call-status/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new call
export const postCallStatus = (data) => {
  return axiosInstance.post(`/call-status/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing call by ID
export const updateCallStatusById = (id, data) => {
  return axiosInstance.put(`/call-status/update_type/${id}`, data);
};





// DELETE a call convert status by ID
export const deleteCallConvertStatusById = (id) => {
  return axiosInstance.delete(`/call-convert-status/delete_type/${id}`);
};

// GET call convert statuses by user ID with pagination
export const getCallConvertStatusByUser = (userId, page = 0, count = 10) => {
  return axiosInstance.get(`/call-convert-status?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a call convert status by ID
export const getCallConvertStatusById = (id) => {
  return axiosInstance.get(`/call-convert-status/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new call convert status
export const postCallConvertStatus = (data) => {
  return axiosInstance.post(`/call-convert-status/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing call convert status by ID
export const updateCallConvertStatusById = (id, data) => {
  return axiosInstance.put(`/call-convert-status/update_type/${id}`, data);
};


// DELETE a call source by ID
export const deleteCallSourceById = (id) => {
  return axiosInstance.delete(`/call-source/delete_type/${id}`);
};

// GET call sources by user ID with pagination
export const getCallSourceByUser = (userId, page = 0, count = 10) => {
  return axiosInstance.get(`/call-source?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a call source by ID
export const getCallSourceById = (id) => {
  return axiosInstance.get(`/call-source/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new call source
export const postCallSource = (data) => {
  return axiosInstance.post(`/call-source/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing call source by ID
export const updateCallSourceById = (id, data) => {
  return axiosInstance.put(`/call-source/update_type/${id}`, data);
};


// API use in call ADD


export const getAllAssign = (page = 0, count = 10) => {
  return axiosInstance.get(`/staff/admin`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const postCalls = (data) => {
  return axiosInstance.post(`/call/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getCallList = (userId, page = 0, count = 10) => {
  return axiosInstance.get(`/call/user?id=${userId}&page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const postFeedBack = (data) => {
  return axiosInstance.post(`/feedback/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getFeedBackList = (userId, page = 0, count = 10) => {
  return axiosInstance.get(`/feedback/user?id=${userId}&page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const postCost = (data) => {
  return axiosInstance.post(`/costSheet/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const geCostSheet = (userId, page = 0, count = 10) => {
  return axiosInstance.get(`/costSheet/user?id=${userId}&page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const postChatting = (data) => {
  return axiosInstance.post(`/chat/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const geChatting = (userId, page = 0, count = 10) => {
  return axiosInstance.get(`/chat/user?id=${userId}&page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// creud //

export const deleteContestTypeById = (id) => {
  return axiosInstance.delete(`/contestType/delete_type/${id}`);
};

export const getContestTypeByPage = (page, count) => {
  return axiosInstance.get(`/contestType/page?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getContestTypeById = (id) => {
  return axiosInstance.get(`/contestType/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const postContestType = (data) => {
  return axiosInstance.post(`/contestType/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const updateContestTypeById = (id, data) => {
  return axiosInstance.put(`/contestType/update_type/${id}`, data);
};




export const deleteMarketTypeById = (id) => {
  return axiosInstance.delete(`/marketType/delete_type/${id}`);
};

export const getMarketTypeByPage = (page, count) => {
  return axiosInstance.get(`/marketType/admin?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getMarketTypeById = (id) => {
  return axiosInstance.get(`/marketType/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const postMarketType = (data) => {
  return axiosInstance.post(`/marketType/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const updateMarketTypeById = (id, data) => {
  return axiosInstance.put(`/marketType/update_type/${id}`, data);
};


// Delete a contest by its ID
export const deleteContestById = (id) => {
  return axiosInstance.delete(`/Contest/delete_type/${id}`);
};

// Get a paginated list of contests
export const getContestByPage = (page, count) => {
  return axiosInstance.get(`/Contest/page?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Get details of a specific contest by its ID
export const getContestById = (id) => {
  return axiosInstance.get(`/Contest/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Add a new contest
export const postContest = (data) => {
  return axiosInstance.post(`/Contest/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Update an existing contest by its ID
export const updateContestById = (id, data) => {
  return axiosInstance.put(`/Contest/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};



// Delete a banner by its ID
export const deleteBannerById = (id) => {
  return axiosInstance.delete(`/Banner/deletebanner/${id}`);
};

// Get a paginated list of banners
export const getBannerByPage = (page, count) => {
  return axiosInstance.get(`/Banner?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Get all banners (admin access)
export const getAllBanners = () => {
  return axiosInstance.get(`/Banner/admin`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Get details of a specific banner by its ID
export const getBannerById = (id) => {
  return axiosInstance.get(`/Banner/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Add a new banner
export const postBanner = (data) => {
  return axiosInstance.post(`/Banner/addBanner`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Update an existing banner by its ID
export const updateBannerById = (id, data) => {
  return axiosInstance.put(`/Banner/updatebanner/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Delete a prize distribution type by its ID
export const deletePrizeDistributionById = (id) => {
  return axiosInstance.delete(`/prizeDistribution/delete_type/${id}`);
};

// Get a paginated list of prize distributions
export const getPrizeDistributionByPage = (page, count) => {
  return axiosInstance.get(`/prizeDistribution/page?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Get all prize distributions (admin access)
export const getAllPrizeDistributions = () => {
  return axiosInstance.get(`/prizeDistribution/admin`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Get details of a specific prize distribution by its ID
export const getPrizeDistributionById = (id) => {
  return axiosInstance.get(`/prizeDistribution/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Add a new prize distribution type
export const postPrizeDistribution = (data) => {
  return axiosInstance.post(`/prizeDistribution/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Update an existing prize distribution type by its ID
export const updatePrizeDistributionById = (id, data) => {
  return axiosInstance.put(`/prizeDistribution/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};



// Delete a deal type by its ID
export const deleteDealById = (id) => {
  return axiosInstance.delete(`/deal/deletetype/${id}`);
};

// Get a paginated list of deals
export const getDealByPage = (page, count) => {
  return axiosInstance.get(`/deal?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Get all deals (admin access)
export const getAllDeals = () => {
  return axiosInstance.get(`/deal/admin`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Get details of a specific deal by its ID
export const getDealById = (id) => {
  return axiosInstance.get(`/deal/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Add a new deal type
export const postDeal = (data) => {
  return axiosInstance.post(`/deal/addtype`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Update an existing deal type by its ID
export const updateDealById = (id, data) => {
  return axiosInstance.put(`/deal/updatetype/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};



// -------------------Junaid'S APIS- END------------------------------

// ----------------RELATED COMPANY APIS------------------

export const CompanyTypeList = () => {
  return axiosInstance.get(`${baseUrl}companyType`);
};

export const addCompanyType = (data) => {
  return axiosInstance.post(`${baseUrl}companyType/addType`, data);
};
export const deleteCompanyType = (id) => {
  return axiosInstance.delete(`${baseUrl}companyType/delete_type/${id}`);
};
export const updateCompanyType = (id, value) => {
  return axiosInstance.put(`${baseUrl}companyType/update_type/${id}`, value);
};
export const getupdateCompanyTypeId = (id) => {
  return axiosInstance.get(`${baseUrl}companyType/${id}`);
};


// for selecter -------

export const getDefaultDashboard = (slug) => {
  return axiosInstance.get(`${baseUrl}subModule/main_module/slug?slug=${slug}`);
};




export const ContestParticipateList = (data) => {
  return axiosInstance.post(`/contestParticipate/admin`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};





// ----------------RELATED COMPANY Master APIS------------------

export const getcompanyList = () => {
  return axiosInstance.get(`${baseUrl}company`);
};

export const addCompany = (data) => {
  return axiosInstance.post(`${baseUrl}company/addType`, data);
};
export const deleteCompany = (id) => {
  return axiosInstance.delete(`${baseUrl}company/delete_type/${id}`);
};
export const updateCompany = (id, value) => {
  return axiosInstance.put(`${baseUrl}company/update_type/${id}`, value);
};
export const getupdateCompanyId = (id) => {
  return axiosInstance.get(`${baseUrl}company/${id}`);
};




export const getCompanyInfo = (data) => {
  return axiosInstance.get(`/company/public`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const afterLogingetCompanyInfo = (data) => {
  return axiosInstance.get(`/company/public/afterLogin`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};





export const getLeadDetail = (id) => {
  return axiosInstance.get(`/user/basic/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const getContestDash = (id) => {
  return axiosInstance.get(`/contest/dashboard/admin`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getPermissions = (id) => {
  return axiosInstance.get(`/lead/optionPermission/admin/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const updatePermissions = (id, value) => {
  return axiosInstance.put(`${baseUrl}lead/optionpermission/update/${id}`, value);
};








// DELETE a budget master by ID
export const deleteBudgetMasterById = (id) => {
  return axiosInstance.delete(`/lead/budgetMaster/deleteType/${id}`);
};

// GET budget master by ID with pagination
export const getBudgetMasterByUser = (page = 0, count = 10) => {
  return axiosInstance.get(`/lead/budgetMaster?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a budget master by ID
export const getBudgetMasterById = (id) => {
  return axiosInstance.get(`/lead/budgetMaster/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new budget master
export const postBudgetMaster = (data) => {
  return axiosInstance.post(`/lead/budgetMaster/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing budget master by ID
export const updateBudgetMasterById = (id, data) => {
  return axiosInstance.put(`/lead/budgetMaster/updateType/${id}`, data);
};


// PUT (update) an existing budget master by ID
export const updateNifty = (data) => {
  return axiosInstance.put(`/marketType/bulk`, data);
};




export const getNifty = (id) => {
  return axiosInstance.get(`/marketType/admin`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};











// DELETE a dummy user by ID
export const deleteDummyUserById = (id) => {
  return axiosInstance.delete(`/dummyUserMaster/deleteType/${id}`);
};

// GET dummy users with pagination
export const getDummyUsersByUser = (page = 0, count = 10) => {
  return axiosInstance.get(`/dummyUserMaster?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a dummy user by ID
export const getDummyUserById = (id) => {
  return axiosInstance.get(`/dummyUserMaster/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new dummy user
export const postDummyUser = (data) => {
  return axiosInstance.post(`/dummy/contestParticipate`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing dummy user by ID
export const updateDummyUserById = (id, data) => {
  return axiosInstance.put(`/dummyUserMaster/updateType/${id}`, data);
};










// DELETE a default contest by ID
export const deleteDefaultContestById = (id) => {
  return axiosInstance.delete(`/defaultContest/deleteType/${id}`);
};
export const DeleteParticipate = (id) => {
  return axiosInstance.delete(`/contestParticipate/delete_participateContestant/${id}`);
};

// GET default contests with pagination
export const getDefaultContests = (page, count) => {
  return axiosInstance.get(`/defaultContest/page?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a default contest by ID
export const getDefaultContestById = (id) => {
  return axiosInstance.get(`/defaultContest/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new default contest
export const postDefaultContest = (data) => {
  return axiosInstance.post(`/defaultContest/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing default contest by ID
export const updateDefaultContestById = (id, data) => {
  return axiosInstance.put(`/defaultContest/updateType/${id}`, data);
};
export const getSubModuleForselect = (id) => {
  console.log("arrr cheak", id);

  return axiosInstance.get(`${baseUrl}subModule/main_module/id?main_module=${JSON.stringify(id)}`);
};









export const getParticipateId = (id) => {
  return axiosInstance.get(`/contestParticipate/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing default contest by ID
export const updateParticipate = (id, data) => {
  return axiosInstance.put(`/contestParticipate/update_participateContestant/${id}`, data);
};







export const DeleteNews = (id) => {
  return axiosInstance.delete(`/news/delete_type/${id}`);
};

// GET default contests with pagination
export const getNews = (page, count) => {
  return axiosInstance.get(`/news/page?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a default contest by ID
export const getNewsById = (id) => {
  return axiosInstance.get(`/news/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new default contest
export const postNewss = (data) => {
  return axiosInstance.post(`/news/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const updatenews = (id, data) => {
  return axiosInstance.put(`/news/update_type/${id}`, data);
};




// DELETE a task priority by ID
export const deleteTaskPriorityById = (id) => {
  return axiosInstance.delete(`/task_priority/delete_type/${id}`);
};

// GET task priorities with pagination
export const getTaskPriorities = (page = 0, count = 10) => {
  return axiosInstance.get(`/task_priority/user?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a task priority by ID
export const getTaskPriorityById = (id) => {
  return axiosInstance.get(`/task_priority/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new task priority
export const postTaskPriority = (data) => {
  return axiosInstance.post(`/task_priority/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing task priority by ID
export const updateTaskPriorityById = (id, data) => {
  return axiosInstance.put(`/task_priority/update_type/${id}`, data);
};




// DELETE a task relatedTo by ID
export const deleteTaskRelatedToById = (id) => {
  return axiosInstance.delete(`/task_relatedTo/delete_type/${id}`);
};

// GET task relatedTo with pagination
export const getTaskRelatedTo = (page = 0, count = 10) => {
  return axiosInstance.get(`/task_relatedTo/user?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a task relatedTo by ID
export const getTaskRelatedToById = (id) => {
  return axiosInstance.get(`/task_relatedTo/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new task relatedTo
export const postTaskRelatedTo = (data) => {
  return axiosInstance.post(`/task_relatedTo/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing task relatedTo by ID
export const updateTaskRelatedToById = (id, data) => {
  return axiosInstance.put(`/task_relatedTo/update_type/${id}`, data);
};





// DELETE a lead service request by ID
export const deleteLeadServiceReqById = (id) => {
  return axiosInstance.delete(`/lead_service_req/delete_type/${id}`);
};

// GET lead service requests with pagination
export const getLeadServiceReq = (page = 0, count = 10, id) => {
  return axiosInstance.get(`/lead_service_req/user?page=${page}&count=${count}&id=${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a lead service request by ID
export const getLeadServiceReqById = (id) => {
  return axiosInstance.get(`/lead_service_req/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new lead service request
export const postLeadServiceReq = (data) => {
  return axiosInstance.post(`/lead_service_req/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing lead service request by ID
export const updateLeadServiceReqById = (id, data) => {
  return axiosInstance.put(`/lead_service_req/update_type/${id}`, data);
};




// DELETE a task priority by ID
export const deleteTaskById = (id) => {
  return axiosInstance.delete(`/task/delete_type/${id}`);
};

// GET task priorities with pagination
export const getTaskList = (page = 0, count = 10,) => {
  return axiosInstance.get(`/task/admin?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a task  by ID
export const getTaskById = (id) => {
  return axiosInstance.get(`/task/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new task 
export const postTask = (data) => {
  return axiosInstance.post(`/task/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing task  by ID
export const updateTaskById = (id, data) => {
  return axiosInstance.put(`/task/update_type/${id}`, data);
};





// DELETE a nature item by ID
export const deleteNatureById = (id) => {
  return axiosInstance.delete(`/nature/delete_type/${id}`);
};

// GET nature items with pagination
export const getNature = (page = 0, count = 10) => {
  return axiosInstance.get(`/nature/page?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a nature item by ID
export const getNatureById = (id) => {
  return axiosInstance.get(`/nature/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new nature item
export const postNature = (data) => {
  return axiosInstance.post(`/nature/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing nature item by ID
export const updateNatureById = (id, data) => {
  return axiosInstance.put(`/nature/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


// DELETE a lead expense by ID
export const deleteLeadExpenseById = (id) => {
  return axiosInstance.delete(`/lead_expenses/delete_type/${id}`);
};

// GET lead expenses with pagination
export const getLeadExpenses = (page = 0, count = 10) => {
  return axiosInstance.get(`/lead_expenses/user?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a lead expense by ID
export const getLeadExpenseById = (id) => {
  return axiosInstance.get(`/lead_expenses/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new lead expense
export const postLeadExpense = (data) => {
  return axiosInstance.post(`/lead_expenses/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing lead expense by ID
export const updateLeadExpenseById = (id, data) => {
  return axiosInstance.put(`/lead_expenses/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


// DELETE a lead note by ID
export const deleteLeadNoteById = (id) => {
  return axiosInstance.delete(`/lead_notes/delete_type/${id}`);
};

// GET lead notes with pagination
export const getLeadNotes = (page = 0, count = 10, id) => {
  return axiosInstance.get(`/lead_notes/user?page=${page}&count=${count}&id=${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a lead note by ID
export const getLeadNoteById = (id) => {
  return axiosInstance.get(`/lead_notes/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new lead note
export const postLeadNote = (data) => {
  return axiosInstance.post(`/lead_notes/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing lead note by ID
export const updateLeadNoteById = (id, data) => {
  return axiosInstance.put(`/lead_notes/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};




// GET lead notes with pagination
export const getCrePhonePay = (page = 0, count = 10, id) => {
  return axiosInstance.get(`/paymentGatewayCredentials?slug=phonepe`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const updatePhonePay = (data) => {
  return axiosInstance.put(`/paymentGatewayCredentials?slug=phonepe`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};




export const getCreRozerPay = (page = 0, count = 10, id) => {
  return axiosInstance.get(`/paymentGatewayCredentials?slug=razorpay`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const updateCreRozerPay = (data) => {
  return axiosInstance.put(`/paymentGatewayCredentials?slug=razorpay`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const getreportPayment = (page, count, start_date, end_date) => {
  return axiosInstance.post(`/transaction/admin`, { start_date, end_date, page, count }, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const masterget = (name, str) => {
  console.log(name, str);

  return axiosInstance.get(`ledger/admin?AccLedgerGroupId=${name}&exceptAccLedgerGroupId=${str}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const getCreVenture = (page, count) => {
  return axiosInstance.get(`/prop_venture/page?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const getProperty = (page, count) => {
  return axiosInstance.get(`/prop_property/page?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const getBlock = (page, count) => {
  return axiosInstance.get(`/prop_block/page?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const getBooking = (page, count) => {
  return axiosInstance.get(`/prop_booking/page?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};



export const postfund = (data) => {
  return axiosInstance.post(`/paymentRequest/fund-transfer`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const getListWidraw = (data) => {
  return axiosInstance.post(`/withdraw`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const PostWidraw = (data, id) => {
  return axiosInstance.put(`/withdraw/update_Type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const vocherAddBank = (data) => {
  return axiosInstance.post(`AccVoucher/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const vocherUpdateBank = (id, data) => {
  return axiosInstance.put(`AccVoucher/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const vocherAddBankList = (value) => {
  // console.log('vocherAddBankList', value);
  return axiosInstance.get(`AccVoucher/page?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}&voucherType=${value?.vocherType}&accLedgerId=`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const vocherUpdateBankListById = (value) => {
  // console.log('vocherAddBankList', value);

  return axiosInstance.get(`AccVoucher/${value?.id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};



// DELETE an account group by ID
export const deleteAccGroupById = (id) => {
  return axiosInstance.delete(`/accGroupMaster/delete_type/${id}`);
};

// GET account groups with pagination
export const getAccGroupByPage = (page, count) => {
  return axiosInstance.get(`/accGroupMaster/page?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET an account group by ID
export const getAccGroupById = (id) => {
  return axiosInstance.get(`/accGroupMaster/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new account group
export const postAccGroup = (data) => {
  return axiosInstance.post(`/accGroupMaster/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing account group by ID
export const updateAccGroupById = (id, data) => {
  return axiosInstance.put(`/accGroupMaster/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};




// DELETE an account ledger by ID
export const deleteAccLedgerById = (id) => {
  return axiosInstance.delete(`/accLedger/delete_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET account ledgers with pagination
export const getAccLedgerByPage = (page, count) => {
  return axiosInstance.get(`/accLedger/page?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET an account ledger by ID
export const getAccLedgerById = (id) => {
  return axiosInstance.get(`/accLedger/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new account ledger
export const postAccLedger = (data) => {
  return axiosInstance.post(`/accLedger/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing account ledger by ID
export const updateAccLedgerById = (id, data) => {
  return axiosInstance.put(`/accLedger/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};




// king son agro ------------ apis
//25:10:24

export const getVoucherTypeData = (name, page, count, start_date, end_date) => {
  return axiosInstance.get(`${baseUrl}AccVoucher/page?page=${page}&count=${count}&start_date=${start_date}&end_date=${end_date}&voucherType=${name}&accLedgerId=`);
};

export const getVoucherTypeBank = (value) => {
  console.log(value);

  return axiosInstance.get(`${baseUrl}AccVoucher/page?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}&voucherType=${value?.vocherType}&accLedgerId=`);
};



export const voucherMasterAdd = (data) => {
  return axiosInstance.post(`${baseUrl}accVoucherType/addType`, data);
};
export const getvoucherMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}accVoucherType/page?page=${page}&count=${count}`);
};

export const voucherMasterDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}accVoucherType/delete_type/${id}`);
};

export const getvoucherMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}accVoucherType/${id}`);
};

export const voucherMasterUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}accVoucherType/update_type/${id}`, value);
};

export const voucherSetupAside = () => {
  return axiosInstance.get(`${baseUrl}accVoucherType/page`);
};



export const updatePassword = (id, data) => {
  return axiosInstance.put(`/user/updateuser/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const updatePin = (id, data) => {
  return axiosInstance.put(`/user/updateuser/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


// DELETE a tax master entry by ID
export const deleteAccTaxMasterById = (id) => {
  return axiosInstance.delete(`/acc_tax_master/delete_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET tax master entries with pagination
export const getAccTaxMasterByPage = (page, count) => {
  return axiosInstance.get(`/acc_tax_master/page?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a tax master entry by ID
export const getAccTaxMasterById = (id) => {
  return axiosInstance.get(`/acc_tax_master/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new tax master entry
export const postAccTaxMaster = (data) => {
  return axiosInstance.post(`/acc_tax_master/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing tax master entry by ID
export const updateAccTaxMasterById = (id, data) => {
  return axiosInstance.put(`/acc_tax_master/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const getAllLegers = (page, count, start_date, end_date, AccLedgerGroupId) => {
  return axiosInstance.get(`/Accledger/allList?start_date=${start_date}&end_date=${end_date}&AccLedgerGroupId=${AccLedgerGroupId}&page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


// DELETE a sales invoice type entry by ID
export const deleteAccSalesInvoiceTypeById = (id) => {
  return axiosInstance.delete(`/acc_sales_invoice_type/delete_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET sales invoice type entries with pagination
export const getAccSalesInvoiceTypeByPage = (page, count) => {
  return axiosInstance.get(`/acc_sales_invoice_type/page?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a sales invoice type entry by ID
export const getAccSalesInvoiceTypeById = (id) => {
  return axiosInstance.get(`/acc_sales_invoice_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new sales invoice type entry
export const postAccSalesInvoiceType = (data) => {
  return axiosInstance.post(`/acc_sales_invoice_type/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing sales invoice type entry by ID
export const updateAccSalesInvoiceTypeById = (id, data) => {
  return axiosInstance.put(`/acc_sales_invoice_type/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};



// DELETE a sales expense formula entry by ID
export const deleteAccSalesExpenseFormulaById = (id) => {
  return axiosInstance.delete(`/acc_sales_expense_formula/delete_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET sales expense formula entries with pagination
export const getAccSalesExpenseFormulaByPage = (page, count) => {
  return axiosInstance.get(`/acc_sales_expense_formula/page?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a sales expense formula entry by ID
export const getAccSalesExpenseFormulaById = (id) => {
  return axiosInstance.get(`/acc_sales_expense_formula/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new sales expense formula entry
export const postAccSalesExpenseFormula = (data) => {
  return axiosInstance.post(`/acc_sales_expense_formula/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing sales expense formula entry by ID
export const updateAccSalesExpenseFormulaById = (id, data) => {
  return axiosInstance.put(`/acc_sales_expense_formula/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};







// DELETE a purchase invoice type entry by ID
export const deleteAccPurchaseInvoiceTypeById = (id) => {
  return axiosInstance.delete(`/acc_purchase_invoice_type/delete_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET purchase invoice type entries with pagination
export const getAccPurchaseInvoiceTypeByPage = (page, count) => {
  return axiosInstance.get(`/acc_purchase_invoice_type/page?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a purchase invoice type entry by ID
export const getAccPurchaseInvoiceTypeById = (id) => {
  return axiosInstance.get(`/acc_purchase_invoice_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new purchase invoice type entry
export const postAccPurchaseInvoiceType = (data) => {
  return axiosInstance.post(`/acc_purchase_invoice_type/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing purchase invoice type entry by ID
export const updateAccPurchaseInvoiceTypeById = (id, data) => {
  return axiosInstance.put(`/acc_purchase_invoice_type/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};




// GET purchase expense formula entries with pagination
export const getAccPurchaseExpenseFormulaByPage = (page, count) => {
  return axiosInstance.get(`/acc_purchase_expense_formula/page?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a purchase expense formula entry by ID
export const getAccPurchaseExpenseFormulaById = (id) => {
  return axiosInstance.get(`/acc_purchase_expense_formula/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new purchase expense formula entry
export const postAccPurchaseExpenseFormula = (data) => {
  return axiosInstance.post(`/acc_purchase_expense_formula/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing purchase expense formula entry by ID
export const updateAccPurchaseExpenseFormulaById = (id, data) => {
  return axiosInstance.put(`/acc_purchase_expense_formula/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// DELETE a purchase expense formula entry by ID
export const deleteAccPurchaseExpenseFormulaById = (id) => {
  return axiosInstance.delete(`/acc_purchase_expense_formula/delete_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


// GET acc_select_invoice_type entries with pagination
export const getAccSelectInvoiceTypeByPage = (page, count) => {
  return axiosInstance.get(`/acc_select_invoice_type/page?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a specific acc_select_invoice_type entry by ID
export const getAccSelectInvoiceTypeById = (id) => {
  return axiosInstance.get(`/acc_select_invoice_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new acc_select_invoice_type entry
export const postAccSelectInvoiceType = (data) => {
  return axiosInstance.post(`/acc_select_invoice_type/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const updateAccSelectInvoiceTypeById = (id, data) => {
  return axiosInstance.put(`/acc_select_invoice_type/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const deleteAccSelectInvoiceTypeById = (id) => {
  return axiosInstance.delete(`/acc_select_invoice_type/delete_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};




// GET acc_available_expense_list entries with pagination
export const getAccAvailableExpenseListByPage = (page, count) => {
  return axiosInstance.get(`/acc_available_expense_list/page?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a specific acc_available_expense_list entry by ID
export const getAccAvailableExpenseListById = (id) => {
  return axiosInstance.get(`/acc_available_expense_list/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new acc_available_expense_list entry
export const postAccAvailableExpenseList = (data) => {
  return axiosInstance.post(`/acc_available_expense_list/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing acc_available_expense_list entry by ID
export const updateAccAvailableExpenseListById = (id, data) => {
  return axiosInstance.put(`/acc_available_expense_list/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// DELETE an acc_available_expense_list entry by ID
export const deleteAccAvailableExpenseListById = (id) => {
  return axiosInstance.delete(`/acc_available_expense_list/delete_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// ----------E-Account Setup Apis----------------
export const smsSetupAdd = (data) => {
  return axiosInstance.put(`${baseUrl}acc_sms_setup/update`, data);
};
export const smsSetupGet = () => {
  return axiosInstance.get(`${baseUrl}acc_sms_setup/admin`);
};
export const notificationSetupAdd = (data) => {
  return axiosInstance.put(`${baseUrl}acc_notification_setup/update`, data);
};
export const notificationSetupGet = () => {
  return axiosInstance.get(`${baseUrl}acc_notification_setup/admin`);
};
export const remainderSetupAdd = (data) => {
  return axiosInstance.put(`${baseUrl}acc_reminder_setup/update`, data);
};
export const remainderSetupGet = () => {
  return axiosInstance.get(`${baseUrl}acc_reminder_setup/admin`);
};
export const reportSetupSetupAdd = (data) => {
  return axiosInstance.put(`${baseUrl}accReportSetup/update`, data);
};
export const reportSetupSetupGet = (data) => {
  return axiosInstance.get(`${baseUrl}accReportSetup/admin`, data);
};
export const emailSetupGet = () => {
  return axiosInstance.get(`${baseUrl}acc_email_setup/admin`);
};
export const emailSetupSetupAdd = (data) => {
  return axiosInstance.put(`${baseUrl}acc_email_setup/update`, data);
};
export const sedulerSetupAdd = (data) => {
  return axiosInstance.put(`${baseUrl}acc_reminder_setup/update`, data);
};
export const sedulerSetupGet = () => {
  return axiosInstance.get(`${baseUrl}acc_reminder_setup/admin`);
};



// GET acc_tax_group entries with pagination
export const getAccTaxGroupByPage = (page, count) => {
  return axiosInstance.get(`/acc_tax_group/page?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a specific acc_tax_group entry by ID
export const getAccTaxGroupById = (id) => {
  return axiosInstance.get(`/acc_tax_group/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new acc_tax_group entry
export const postAccTaxGroup = (data) => {
  return axiosInstance.post(`/acc_tax_group/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing acc_tax_group entry by ID
export const updateAccTaxGroupById = (id, data) => {
  return axiosInstance.put(`/acc_tax_group/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// DELETE an acc_tax_group entry by ID
export const deleteAccTaxGroupById = (id) => {
  return axiosInstance.delete(`/acc_tax_group/delete_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};



// GET acc_tcs_master entries with pagination
export const getAccTcsMasterByPage = (page, count) => {
  return axiosInstance.get(`/acc_tcs_master/page?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a specific acc_tcs_master entry by ID
export const getAccTcsMasterById = (id) => {
  return axiosInstance.get(`/acc_tcs_master/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new acc_tcs_master entry
export const postAccTcsMaster = (data) => {
  return axiosInstance.post(`/acc_tcs_master/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing acc_tcs_master entry by ID
export const updateAccTcsMasterById = (id, data) => {
  return axiosInstance.put(`/acc_tcs_master/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// DELETE an acc_tcs_master entry by ID
export const deleteAccTcsMasterById = (id) => {
  return axiosInstance.delete(`/acc_tcs_master/delete_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const getTcs_certificate = (value) => {
  console.log(value);

  return axiosInstance.get(`acc_tcs_certificate/page?page=${value?.page}&count=${value?.count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const AddTcs_certificate = (value) => {
  return axiosInstance.get(`acc_tcs_certificate/addType`, value, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};



export const addAllDocument = (data) => {
  return axiosInstance.post(`doc_management_add_doc/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const doc_management_add_doc_get = (value) => {
  // console.log(value);

  return axiosInstance.get(`doc_management_add_doc/user?page=${value?.page}&count=${value?.count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};



// GET accContact entries with pagination
export const getAccContactByPage = (page, count, id) => {
  return axiosInstance.get(`/accContact/page?page=${page}&count=${count}&id=${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a specific accContact entry by ID
export const getAccContactById = (id) => {
  return axiosInstance.get(`/accContact/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new accContact entry
export const postAccContact = (data) => {
  return axiosInstance.post(`/accContact/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing accContact entry by ID
export const updateAccContactById = (id, data) => {
  return axiosInstance.put(`/accContact/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// DELETE an accContact entry by ID
export const deleteAccContactById = (id) => {
  return axiosInstance.delete(`/accContact/delete_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};



// GET acc_rate_sheet entries with pagination
export const getAccRateSheetByPage = (page, count) => {
  return axiosInstance.get(`/acc_rate_sheet/page?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a specific acc_rate_sheet entry by ID
export const getAccRateSheetById = (id) => {
  return axiosInstance.get(`/acc_rate_sheet/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new acc_rate_sheet entry
export const postAccRateSheet = (data) => {
  return axiosInstance.post(`/acc_rate_sheet/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing acc_rate_sheet entry by ID
export const updateAccRateSheetById = (id, data) => {
  return axiosInstance.put(`/acc_rate_sheet/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// DELETE an acc_rate_sheet entry by ID
export const deleteAccRateSheetById = (id) => {
  return axiosInstance.delete(`/acc_rate_sheet/delete_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET add_mistry entries with pagination
export const getAddMistryByPage = (page, count) => {
  return axiosInstance.get(`/add_mistry/user?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a specific add_mistry entry by ID
export const getAddMistryById = (id) => {
  return axiosInstance.get(`/add_mistry/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new add_mistry entry
export const postAddMistry = (data) => {
  return axiosInstance.post(`/add_mistry/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing add_mistry entry by ID
export const updateAddMistryById = (id, data) => {
  return axiosInstance.put(`/add_mistry/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// DELETE an add_mistry entry by ID
export const deleteAddMistryById = (id) => {
  return axiosInstance.delete(`/add_mistry/delete_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const doc_management_delete = (id) => {
  // console.log(value);

  return axiosInstance.delete(`doc_management_add_doc/delete_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const doc_management_idGet = (id) => {
  // console.log(value);

  return axiosInstance.get(`doc_management_add_doc/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const UpdateAllDocument = (id, data) => {
  return axiosInstance.put(`doc_management_add_doc/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const doc_management_doc_category = (data) => {
  return axiosInstance.post(`doc_management_doc_category/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const doc_management_docAdmin = (id) => {
  // console.log(value);

  return axiosInstance.get(`doc_management_doc_category/admin`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const doc_management_add_doc_catagory = (value) => {
  // console.log(value);
  return axiosInstance.get(`doc_management_doc_category/user?page=${value?.page}&count=${value?.count}&id=${value?.userId}&start_date=${value?.start_date}&end_date=${value?.end_date}&is_archieve=${value?.is_archieve}&parent_id=${value?.parent_id}&search =${value?.search}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const doc_management_doc_category_delete_type = (id) => {
  // console.log(value);
  return axiosInstance.delete(`doc_management_doc_category/delete_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const ddoc_management_doc_categoryidGet = (id) => {
  // console.log(value);

  return axiosInstance.get(`doc_management_doc_category/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const ddoc_management_docupdate_type = (id, data) => {
  // console.log(value);

  return axiosInstance.put(`doc_management_doc_category/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};




// GET add_subject entries with pagination
export const getAddSubjectByPage = (page, count) => {
  return axiosInstance.get(`/add_subject/user?page=${page}&count=${count}`);
};

// GET a specific add_subject entry by ID
export const getAddSubjectById = (id) => {
  return axiosInstance.get(`/add_subject/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new add_subject entry
export const postAddSubject = (data) => {
  return axiosInstance.post(`/add_subject/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing add_subject entry by ID
export const updateAddSubjectById = (id, data) => {
  return axiosInstance.put(`/add_subject/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// DELETE an add_subject entry by ID
export const deleteAddSubjectById = (id) => {
  return axiosInstance.delete(`/add_subject/delete_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};



// atif code 
// block
export const getCreblock = (page, count) => {
  return axiosInstance.get(`prop_block/user?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Property stage
export const getCrePropertyStage = (page, count) => {
  return axiosInstance.get(`prop_property_stage/user?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Property Stage Plane
export const getCrePropertyStagePlane = (page, count) => {
  return axiosInstance.get(`prop_property_stage_plan/user?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Property unit
export const getCrePropertyUnit = (page, count) => {
  return axiosInstance.get(`prop_property_unit/user?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Property        
export const getCreProperty = (page, count) => {
  return axiosInstance.get(`prop_property/user?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Floor
export const getCreFloor = (page, count) => {
  return axiosInstance.get(`prop_floor/user?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Property_Unit
export const getCreUnit = (page, count) => {
  return axiosInstance.get(`prop_opportunity/user?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Opportunity_Unit
export const getCreOpportunityUnit = (page, count) => {
  return axiosInstance.get(`prop_opportunity/user?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Opportunity_Unit
export const getCreBuilding = (page, count) => {
  return axiosInstance.get(`prop_building/user?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Property charges
export const getCrePropertyChages = (page, count) => {
  return axiosInstance.get(`prop_property_charges/user?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Property Showing
export const getCrePropertyShowing = (page, count) => {
  return axiosInstance.get(`prop_property_showing/user?page=${page}&count=${count}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// Delete venture list
export const ventureDelte = (id) => {
  return axiosInstance.delete(`${baseUrl}prop_venture/delete_type/${id}`);
};

// Delete Property stage list
export const propertyStageDelte = (id) => {
  return axiosInstance.delete(`${baseUrl}prop_property_stage/delete_type/${id}`);
};

// Delete Property stage Plane list
export const propertyStagePlaneDelte = (id) => {
  return axiosInstance.delete(`${baseUrl}prop_property_stage_plan/delete_type/${id}`);
};

// Delete Property unit list
export const propertyUnitDelte = (id) => {
  return axiosInstance.delete(`${baseUrl}prop_property_unit/delete_type/${id}`);
};

// Delete block list
export const blockDelte = (id) => {
  return axiosInstance.delete(`${baseUrl}prop_block/delete_type/${id}`);
};

// Delete Property charges list
export const propertycahgerDelte = (id) => {
  return axiosInstance.delete(`${baseUrl}prop_property_charges/delete_type/${id}`);
};

// Delete property showing list
export const propertyShowingDelte = (id) => {
  return axiosInstance.delete(`${baseUrl}prop_property_showing/delete_type/${id}`);
};

// Delete property list
export const propertyDelte = (id) => {
  return axiosInstance.delete(`${baseUrl}prop_property/delete_type/${id}`);
};

// Edit venture list
export const getVentureId = (id) => {
  return axiosInstance.get(`${baseUrl}prop_venture/${id}`);
};

// Edit property unit list 
export const getPropertyUnitId = (id) => {
  return axiosInstance.get(`${baseUrl}prop_property_unit/${id}`);
};

// Edit property stage list 
export const getPropertyStageId = (id) => {
  return axiosInstance.get(`${baseUrl}prop_property_stage/${id}`);
};

// Edit property stage plane 
export const getPropertyStagePlaneId = (id) => {
  return axiosInstance.get(`${baseUrl}prop_property_stage_plan/${id}`);
};

// Edit block list 
export const getBlockId = (id) => {
  return axiosInstance.get(`${baseUrl}prop_block/${id}`);
};

// Edit property list
export const getPropertyId = (id) => {
  return axiosInstance.get(`${baseUrl}prop_property/${id}`);
};

// Edit property charges list
export const getProperychargeId = (id) => {
  return axiosInstance.get(`${baseUrl}prop_property_charges/${id}`);
};

// Edit property showing
export const getProperyShowingId = (id) => {
  return axiosInstance.get(`${baseUrl}prop_property_showing/${id}`);
};

// Put venture id
export const ventureUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}prop_venture/update_type/${id}`, value);
};

// Put Property unit id 
export const propertyUnitUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}prop_property_unit/update_type/${id}`, value);
};

// Put Property Stage id
export const PropertyStageUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}prop_property_stage/update_type/${id}`, value);
};

// Put block id
export const blockUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}prop_block/update_type/${id}`, value);
};

// Put property showing id
export const propertyShowingUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}prop_property_showing/update_type/${id}`, value);
};

// Put property charges update
export const propertyUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}prop_property_charges/update_type/${id}`, value);
};

// Put property stage plane
export const propertystageplaneUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}prop_property_stage_plan/update_type/${id}`, value);
};
export const postNewpropertyShowing = (data) => {
  return axiosInstance.post('/prop_property_stage/addType', data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const postNewpropertycharges = (data) => {
  return axiosInstance.post('/prop_block/addType', data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const postNewpropertyStage = (data) => {
  return axiosInstance.post('/prop_property_stage/addType', data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const postNewPropertyunit = (data) => {
  return axiosInstance.post('/prop_property_unit/addType', data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const getVentureByUser = (page, count) => {
  return axiosInstance.get('/user', {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const postNewVenture = (data) => {
  return axiosInstance.post('/prop_venture/addType', data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const postNewBlock = (data) => {
  return axiosInstance.post('/prop_block/addType', data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};









// GET add_book_code entries with pagination
export const getAddBookCodeByPage = (page, count) => {
  return axiosInstance.get(`/add_book_code/page?page=${page}&count=${count}&id=${window.localStorage.getItem('userId')}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// GET a specific add_book_code entry by ID
export const getAddBookCodeById = (id) => {
  return axiosInstance.get(`/add_book_code/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new add_book_code entry
export const postAddBookCode = (data) => {
  return axiosInstance.post(`/add_book_code/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing add_book_code entry by ID
export const updateAddBookCodeById = (id, data) => {
  return axiosInstance.put(`/add_book_code/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// DELETE an add_book_code entry by ID
export const deleteAddBookCodeById = (id) => {
  return axiosInstance.delete(`/add_book_code/delete_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


// -------------------------organisation Templete Module -------------------------
export const getListOrganisationSettingsMdlsttingTemp = (page, count) => {
  return axiosInstance.get(`${baseUrl}acc_project_recce_template_master/user?page=${page}&count=${count}`);
};

export const addOrganisationSettingsMdlsttingTemp = (data) => {
  return axiosInstance.post(`${baseUrl}acc_project_recce_template_master/addType`, data);
};
export const deleteOrganisationSettingsMdlsttingTemp = (id) => {
  return axiosInstance.delete(`${baseUrl}acc_project_recce_template_master/delete_type/${id}`);
};
export const updateOrganisationSettingsMdlsttingTemp = (id, value) => {
  return axiosInstance.put(`${baseUrl}acc_project_recce_template_master/update_type/${id}`, value);
};
export const getByOrganisationSettingsMdlsttingTempId = (id) => {
  return axiosInstance.get(`${baseUrl}acc_project_recce_template_master/${id}`);
};


export const lagerIdGet = (value) => {
  // console.log(value);
  return axiosInstance.post(`ledger/getLedgerView`, value, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};




// -------------------------Task Manager -------------------------
export const getListTaskManager = (page, count) => {
  return axiosInstance.get(`${baseUrl}acc_project_recce_template_master/user?page=${page}&count=${count}`);
};
export const taskCreatedByGet = (page, count) => {
  return axiosInstance.get(`${baseUrl}task/createdBy?page=${page}&count=${count}`);
};

export const addTaskType = (data) => {
  return axiosInstance.post(`${baseUrl}task/addType`, data);
};

export const getCommentTaskById = (id) => {
  return axiosInstance.get(`${baseUrl}task/${id}`);
};
export const updateTaskCreated = (id, value) => {
  return axiosInstance.put(`${baseUrl}task/update_type/${id}`, value);
};
/*export const getByOrganisationSettingsMdlsttingTempId = (id) => {
  return axiosInstance.get(`${baseUrl}acc_project_recce_template_master/${id}`);
}; */

export const AddTRCRM_sight_seeing_master = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_sight_seeing_master/addType`, data);
};

export const GetTRCRM_sight_seeing_master = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_sight_seeing_master/user?page=${value?.page}&count=${value?.count}&country_id=${value?.country_id}&city_id=${value?.city_id}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};

export const TRCRM_sight_seeing_rate_master = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_sight_seeing_rate_master/user?page=${value?.page}&count=${value?.count}&id=${value?.id}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const addTRCRM_sight_seeing_rate_master = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_sight_seeing_rate_master/addType`, data);
};
export const deleteTRCRM_sight_seeing_rate_master = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_sight_seeing_rate_master/delete_type/${id}`);
};

export const getByIdTRCRM_sight_seeing_rate_master = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_sight_seeing_rate_master/${id}`);
};

export const updateRCRM_sight_seeing_rate_master = (id, value) => {
  return axiosInstance.put(`${baseUrl}TRCRM_sight_seeing_rate_master/update_type/${id}`, value);
};

export const addTRCRM_hotel_type_master = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_hotel_type_master/addType`, data);
};
export const GetRCRM_hotel_type_master = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_hotel_type_master/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const deleteTRCRM_hotel_type_master = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_hotel_type_master/delete_type/${id}`);
};
export const getByIdTRCRM_hotel_type_master = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_hotel_type_master/${id}`);
};
export const updateTRCRM_hotel_type_master = (id, value) => {
  return axiosInstance.put(`${baseUrl}TRCRM_hotel_type_master/update_type/${id}`, value);
};

export const addTRCRM_star_rating_master = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_star_rating_master/addType`, data);
};
export const GetTRCRM_star_rating_master = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_star_rating_master/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};

export const deleteTRCRM_star_rating_master = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_star_rating_master/delete_type/${id}`);
};
export const getByIdTRCRM_star_rating_master = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_star_rating_master/${id}`);
};
export const updateTRCRM_star_rating_master = (id, value) => {
  return axiosInstance.put(`${baseUrl}TRCRM_star_rating_master/update_type/${id}`, value);
};

// -----------master task type api

export const getListTasktypeMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}lead_task_type_id/user?page=${page}&count=${count}`);
};

export const addTaskTypeMaster = (data) => {
  return axiosInstance.post(`${baseUrl}lead_task_type_id/addType`, data);
};

export const deleteTaskTypeMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}lead_task_type_id/delete_type/${id}`);
};
export const updateTaskTypeMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}lead_task_type_id/update_type/${id}`, value);
};
export const getByTaskTypeMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}lead_task_type_id/${id}`);
};
// -----------master task Stage api

export const getListTaskStageMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}lead_task_stage/user?page=${page}&count=${count}`);
};

export const addTaskStageMaster = (data) => {
  return axiosInstance.post(`${baseUrl}lead_task_stage/addType`, data);
};

export const deleteTaskStageMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}lead_task_stage/delete_type/${id}`);
};
export const updateTaskStageMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}lead_task_stage/update_type/${id}`, value);
};
export const getByTaskStageMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}lead_task_stage/${id}`);
};
export const deleteRCRM_sight_seeing_master = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_sight_seeing_master/delete_type/${id}`);
};
export const getByIdRCRM_sight_seeing_master = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_sight_seeing_master/${id}`);
};
export const updateTRCRM_sight_seeing_master = (id, value) => {
  return axiosInstance.put(`${baseUrl}TRCRM_sight_seeing_master/update_type/${id}`, value);
};

export const addTRCRM_hotel_master = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_hotel_master/addType`, data);
};

export const GetTRCRM_hotel_master = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_hotel_master/user?page=${value?.page}&count=${value?.count}&country_id=${value?.country_id}&city_id=${value?.city_id}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const deleteTRCRM_hotel_master = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_hotel_master/delete_type/${id}`);
};

export const getByTRCRM_hotel_master = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_hotel_master/${id}`);
};
export const updateRCRM_hotel_master = (id, value) => {
  return axiosInstance.put(`${baseUrl}TRCRM_hotel_master/update_type/${id}`, value);
};

export const getrcrm_hotel_master = (id) => {
  return axiosInstance.get(`${baseUrl}trcrm_hotel_master/admin`);
};

export const TRCRM_tag_name_master = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_tag_name_master/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const addTRCRM_tag_name_master = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_tag_name_master/addType`, data);
};

export const getByTRCRM_tag_name_master = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_tag_name_master/${id}`);
};
export const deleteTRCRM_tag_name_master = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_tag_name_master/delete_type/${id}`);
};
export const updateTRCRM_tag_name_master = (id, value) => {
  return axiosInstance.put(`${baseUrl}TRCRM_tag_name_master/update_type/${id}`, value);
};

export const addTRCRM_visa_type_master = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_visa_type_master/addType`, data);
};
export const gitTRCRM_visa_type_master = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_visa_type_master/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const deleteTRCRM_visa_type_master = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_visa_type_master/delete_type/${id}`);
};
export const getByTRCRM_visa_type_master = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_visa_type_master/${id}`);
};
export const updateTRCRM_visa_type_master = (id, value) => {
  return axiosInstance.put(`${baseUrl}TRCRM_visa_type_master/update_type/${id}`, value);
};
export const addTRCRM_visa_category_master = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_visa_category_master/addType`, data);
};
export const gitTRCRM_visa_category_master = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_visa_category_master/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const deleteTRCRM_visa_category_master = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_visa_category_master/delete_type/${id}`);
};
export const getByTRCRM_visa_category_master = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_visa_category_master/${id}`);
};
export const updateTRCRM_visa_category_master = (id, value) => {
  return axiosInstance.put(`${baseUrl}TRCRM_visa_category_master/update_type/${id}`, value);
};

export const gitTRCRM_visa_master = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_visa_master/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const addTRCRM_visa_master = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_visa_master/addType`, data);
};
export const deleteTRCRM_visa_master = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_visa_master/delete_type/${id}`);
};
export const getByTRCRM_visa_master = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_visa_master/${id}`);
};
export const updateTRCRM_visa_master = (id, value) => {
  return axiosInstance.put(`${baseUrl}TRCRM_visa_master/update_type/${id}`, value);
};
export const gitTRCRM_travel_insurance = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_travel_insurance/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const addTRCRM_travel_insurance = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_travel_insurance/addType`, data);
};
export const deleteTRCRM_travel_insurance = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_travel_insurance/delete_type/${id}`);
};
export const getByTRCRM_travel_insurance = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_travel_insurance/${id}`);
};
export const updateTRCRM_travel_insurance = (id, value) => {
  return axiosInstance.put(`${baseUrl}TRCRM_travel_insurance/update_type/${id}`, value);
};
export const addTRCRM_room_type_master = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_room_type_master/addType`, data);
};
export const gitTRCRM_room_type_master = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_room_type_master/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const deleteTRCRM_room_type_master = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_room_type_master/delete_type/${id}`);
};
export const getByTRCRM_room_type_master = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_room_type_master/${id}`);
};
export const updateTRCRM_room_type_master = (id, value) => {
  return axiosInstance.put(`${baseUrl}TRCRM_room_type_master/update_type/${id}`, value);
};
export const addTRCRM_service_master = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_service_master/addType`, data);
};
export const gitTRCRM_service_master = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_service_master/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const deleteTRCRM_service_master = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_service_master/delete_type/${id}`);
};
export const getByTRCRM_service_master = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_service_master/${id}`);
};
export const updateTRCRM_service_master = (id, value) => {
  return axiosInstance.put(`${baseUrl}TRCRM_service_master/update_type/${id}`, value);
};

export const getagentClass = (id) => {
  return axiosInstance.get(`${extraBaseUrl}agentClass/admin`);
};
export const getjourneyType = (id) => {
  return axiosInstance.get(`${extraBaseUrl}airlines/journeyType?id=673b1d7c85dbbfa354004889&search=`);
};
export const getflightcabinclass = (id) => {
  return axiosInstance.get(`${extraBaseUrl}airlines/flightcabinclass?id=673b1d7c85dbbfa354004889`);
};
export const addagentClass = (data) => {
  return axiosInstance.post(`${extraBaseUrl}agentClass/addType`, data);
};
export const gitagentClass = (value) => {
  return axiosInstance.get(`${extraBaseUrl}agentClass?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const deleteagentClass = (id) => {
  return axiosInstance.delete(`${extraBaseUrl}agentClass/delete_type/${id}`);
};
export const getByagentClass = (id) => {
  return axiosInstance.get(`${extraBaseUrl}agentClass/${id}`);
};
export const updateagentClassr = (id, value) => {
  return axiosInstance.put(`${extraBaseUrl}agentClass/update_type/${id}`, value);
};
export const addbusmarkup = (data) => {
  return axiosInstance.post(`${extraBaseUrl}bus/markup/addType`, data);
};
export const gitbusmarkup = (value) => {
  return axiosInstance.get(`${extraBaseUrl}bus/markup?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const getBybusMarkup = (id) => {
  return axiosInstance.get(`${extraBaseUrl}bus/markup/${id}`);
};
export const updatebusmarkup = (id, value) => {
  return axiosInstance.put(`${extraBaseUrl}bus/markup/update_type/${id}`, value);
};

export const deletebusmarkup = (id) => {
  return axiosInstance.delete(`${extraBaseUrl}bus/markup/delete_type/${id}`);
};

export const addHotelmarkup = (data) => {
  return axiosInstance.post(`${extraBaseUrl}hotels/markup/addType`, data);
};
export const githotelsmarkup = (value) => {
  return axiosInstance.get(`${extraBaseUrl}hotels/markup?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const getByHotelsMarkup = (id) => {
  return axiosInstance.get(`${extraBaseUrl}hotels/markup/${id}`);
};
export const updatehotelsMarkup = (id, value) => {
  return axiosInstance.put(`${extraBaseUrl}hotels/markup/update_type/${id}`, value);
};
export const deleteHotelmarkup = (id) => {
  return axiosInstance.delete(`${extraBaseUrl}hotels/markup/delete_type/${id}`);
};

export const addflightsmarkup = (data) => {
  return axiosInstance.post(`${extraBaseUrl}flights/markup/addType`, data);
};
export const gitflightsmarkup = (value) => {
  return axiosInstance.get(`${extraBaseUrl}flights/markup?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const getByflightsMarkup = (id) => {
  return axiosInstance.get(`${extraBaseUrl}flights/markup/${id}`);
};
export const updateflightsMarkup = (id, value) => {
  return axiosInstance.put(`${extraBaseUrl}flights/markup/update_type/${id}`, value);
};
export const deleteflightsmarkup = (id) => {
  return axiosInstance.delete(`${extraBaseUrl}flights/markup/delete_type/${id}`);
};




export const addTRCRM_passport = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_passport/addType`, data);
};
export const gitTRCRM_passport = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_passport/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const deleteTRCRM_passport = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_passport/delete_type/${id}`);
};
export const getByTRCRM_passport = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_passport/${id}`);
};
export const updateTRCRM_passport = (id, value) => {
  return axiosInstance.put(`${baseUrl}TRCRM_passport/update_type/${id}`, value);
};
export const addTRCRM_other = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_other/addType`, data);
};
export const gitTRCRM_other = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_other/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const deleteTRCRM_other = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_other/delete_type/${id}`);
};
export const getByTRCRM_other = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_other/${id}`);
};
export const updateTRCRM_other = (id, value) => {
  return axiosInstance.put(`${baseUrl}TRCRM_other/update_type/${id}`, value);
};

export const getTRCRM_preference = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_preference/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const addTRCRM_preference = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_preference/addType`, data);
};
export const deleteTRCRM_preference = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_preference/delete_type/${id}`);
};
export const getByTRCRM_preference = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_preference/${id}`);
};
export const updateTRCRM_preference = (id, value) => {
  return axiosInstance.put(`${baseUrl}TRCRM_preference/update_type/${id}`, value);
};
export const getTRCRM_forex = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_forex/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const addTRCRM_forex = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_forex/addType`, data);
};
export const deleteTRCRM_forex = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_forex/delete_type/${id}`);
};
export const getIdTRCRM_forex = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_forex/${id}`);
};
export const updateTRCRM_forex = (id, value) => {
  return axiosInstance.put(`${baseUrl}TRCRM_forex/update_type/${id}`, value);
};
export const getTRCRM_cruise = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_cruise/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const addTRCRM_cruise = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_cruise/addType`, data);
}
export const deleteTRCRM_cruise = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_cruise/delete_type/${id}`);
};
export const getIdTRCRM_cruise = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_cruise/${id}`);
};
export const updateTRCRM_cruise = (id, value) => {
  return axiosInstance.put(`${baseUrl}TRCRM_cruise/update_type/${id}`, value);
};
export const getTRCRM_adventure = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_adventure/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const addTRCRM_adventure = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_adventure/addType`, data);
}
export const deleteTRCRM_adventure = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_adventure/delete_type/${id}`);
};
export const getIdTRCRM_adventure = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_adventure/${id}`);
};
export const updateTRCRM_adventure = (id, value) => {
  return axiosInstance.put(`${baseUrl}TRCRM_adventure/update_type/${id}`, value);
};


export const getTRCRM_bus = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_bus/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const addTRCRM_bus = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_bus/addType`, data);
}
export const deleteTRCRM_bus = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_bus/delete_type/${id}`);
};
export const getIdTRCRM_bus = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_bus/${id}`);
};
export const updateTRCRM_bus = (id, value) => {
  return axiosInstance.put(`${baseUrl}TRCRM_bus/update_type/${id}`, value);
};

export const addTRCRM_flight_class = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_flight_class/addType`, data);
}
export const getTRCRM_flight_class = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_flight_class/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const deleteTRCRM_flight_class = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_flight_class/delete_type/${id}`);
};
export const getIdTRCRM_flight_class = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_flight_class/${id}`);
};
export const updateTRCRM_flight_class = (id, value) => {
  return axiosInstance.put(`${baseUrl}TRCRM_flight_class/update_type/${id}`, value);
};
export const addTRCRM_customer_type_master = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_customer_type_master/addType`, data);
}
export const getTRCRM_customer_type_master = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_customer_type_master/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const deleteTRCRM_customer_type_master = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_customer_type_master/delete_type/${id}`);
};
export const getIdTRCRM_customer_type_maste = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_customer_type_maste/${id}`);
};
export const updateTRCRM_customer_type_master = (id, value) => {
  return axiosInstance.put(`${baseUrl}TRCRM_customer_type_master/update_type/${id}`, value);
};
export const getTRCRM_trip_type_master = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_trip_type_master/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const addTRCRM_trip_type_master = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_trip_type_master/addType`, data);
}
export const deleteTRCRM_trip_type_master = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_trip_type_master/delete_type/${id}`);
};
export const getIdTRCRM_trip_type_master = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_trip_type_master/${id}`);
};
export const updateTRCRM_trip_type_master = (id, value) => {
  return axiosInstance.put(`${baseUrl}TRCRM_trip_type_master/update_type/${id}`, value);
};

// dataAll
export const getTRCRM_customer_type_master_admin = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_customer_type_master/admin`);
};
export const gettask_priorityadmin = (id) => {
  return axiosInstance.get(`${baseUrl}task_priority/admin`);
};
export const getLead_proposal_status = (id) => {
  return axiosInstance.get(`${baseUrl}lead_proposal_status/admin`);
};
export const getTRCRM_trip_type_master_admin = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_trip_type_master/admin`);
};
export const getsource = (id) => {
  return axiosInstance.get(`${baseUrl}source/admin`);
};
export const getleadMedium = (id) => {
  return axiosInstance.get(`${baseUrl}leadMedium/admin`);
};
export const getTRCRMstaff_admin = (id) => {
  return axiosInstance.get(`${baseUrl}staff/admin`);
};
export const getTRCRM_preferenceadmin = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_preference/admin`);
};
export const getTRCRM_flight_classadmin = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_flight_class/admin`);
};

export const getTRCRM_sight_seeing_masteradmin = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_sight_seeing_master/admin`);
};

export const getTRCRM_service_masteradmin = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_service_master/admin`);
};

export const getCource = (id) => {
  return axiosInstance.get(`${baseUrl}course/admin`);
};
export const getStream = (id) => {
  return axiosInstance.get(`${baseUrl}stream/all`);
};

export const getAirlLine = (value) => {
  return axiosInstance.get(`${extraBaseUrl}airlines/destination?search=&id=673b1d7c85dbbfa354004889`);
};

export const getpackageId = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_add_package/admin?start_date=&end_date=&search=${value}`);
};

export const addTRCRM_tr_leadaddType = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_tr_lead/addType`, data);
}

export const getTRCRM_tr_lead = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_tr_lead/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}&lead_priority=${value?.lead_priority}&lead_status=${value?.lead_status}&assigned_to=${value?.assigned_to}&lead_number=${value?.lead_number}&first_name=${value?.first_name}&last_name=${value?.last_name}&email_id=${value?.email_id}&tag=${value?.tag}&mobile_number=${value?.mobile_number}&createdBy=${value.createdBy}`);
};

export const deleteTRCRM_tr_lead = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_tr_lead/delete_type/${id}`);
};

export const getByIdTRCRM_tr_lead = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_tr_lead/${id}`);
};

export const getByIdTRCRMOnlyUpdate = (id) => {
  return axiosInstance.get(`${baseUrl}trcrm_tr_lead/getTypeByIdForForm/${id}`);
};

export const trcrm_tr_leadUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}trcrm_tr_lead/update_type/${id}`, value);
};
export const addhotelVoucher = (data) => {
  return axiosInstance.post(`${baseUrl}hotelVoucher/addType`, data);
}

export const getHotelVoucher = (value) => {
  return axiosInstance.get(`${baseUrl}hotelVoucher/user?page=${value?.page}&count=${value?.count}&start_date=${''}&end_date=${''}`);
};
export const deleteHotelVoucher = (id) => {
  return axiosInstance.delete(`${baseUrl}hotelVoucher/delete_type/${id}`);
};
export const getByIdhotelVoucher = (id) => {
  return axiosInstance.get(`${baseUrl}hotelVoucher/${id}`);
};

export const thotelVoucherUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}hotelVoucher/update_type/${id}`, value);
};


export const addServiceVoucher = (data) => {
  return axiosInstance.post(`${baseUrl}serviceVoucher/addType`, data);
}

export const getServiceVoucher = (value) => {
  return axiosInstance.get(`${baseUrl}serviceVoucher/user?page=${value?.page}&count=${value?.count}&start_date=${''}&end_date=${''}`);
};
export const deletesServiceVoucher = (id) => {
  return axiosInstance.delete(`${baseUrl}serviceVoucher/delete_type/${id}`);
};
export const getByIdServiceVoucher = (id) => {
  return axiosInstance.get(`${baseUrl}serviceVoucher/${id}`);
};
export const serviceVoucherUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}serviceVoucher/update_type/${id}`, value);
};

export const addflightVoucher = (data) => {
  return axiosInstance.post(`${baseUrl}flightVoucher/addType`, data);
}
export const getflightVoucher = (value) => {
  return axiosInstance.get(`${baseUrl}flightVoucher/user?page=${value?.page}&count=${value?.count}&start_date=${''}&end_date=${''}`);
};
export const deletesflightVoucher = (id) => {
  return axiosInstance.delete(`${baseUrl}flightVoucher/delete_type/${id}`);
}
export const getByIdflightVoucher = (id) => {
  return axiosInstance.get(`${baseUrl}flightVoucher/${id}`);
};

export const flightVoucherUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}flightVoucher/update_type/${id}`, value);
};



export const getTRCRM_tr_traveller = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_tr_traveller/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const addTRCRM_tr_traveller = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_tr_traveller/addType`, data);
}
export const deleteTRCRM_tr_traveller = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_tr_traveller/delete_type/${id}`);
};
export const getIdTRCRM_tr_traveller = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_tr_traveller/${id}`);
};
export const updateTRCRM_tr_traveller = (id, value) => {
  return axiosInstance.put(`${baseUrl}TRCRM_tr_traveller/update_type/${id}`, value);
};

export const addLead_reminder = (data) => {
  return axiosInstance.post(`${baseUrl}lead_reminder/addType`, data);
}

export const getLead_reminder = (value) => {
  return axiosInstance.get(`${baseUrl}lead_reminder/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const deleteLead_reminder = (id) => {
  return axiosInstance.delete(`${baseUrl}lead_reminder/delete_type/${id}`);
};
export const getIdLead_reminder = (id) => {
  return axiosInstance.get(`${baseUrl}lead_reminder/${id}`);
};
export const updateLead_reminder = (id, value) => {
  return axiosInstance.put(`${baseUrl}lead_reminder/update_type/${id}`, value);
};

// dataAll



// jilani

export const getTravelAllCountry = () => {
  return axiosInstance.get(`${baseUrl}country`);
};
export const getTravelAllState = (id) => {
  return axiosInstance.get(`${baseUrl}state/country/${id}`);
};
export const getTravelAllCity = (id) => {
  return axiosInstance.get(`${baseUrl}city/state?id=${id}`);
};
export const getTravelAllTags = () => {
  return axiosInstance.get(`${baseUrl}TRCRM_tag_name_master/admin`);
};
export const getTravelAllOthers = () => {
  return axiosInstance.get(`${baseUrl}TRCRM_other_facilities_master/admin`);
};
export const getTravelAllMealType = () => {
  return axiosInstance.get(`${baseUrl}TRCRM_meal_type_master/admin`);
};

export const getRoom_category = () => {
  return axiosInstance.get(`${baseUrl}trcrm/room_category/admin`);
};

export const getTRCRM_cost_label_master = () => {
  return axiosInstance.get(`${baseUrl}TRCRM_cost_label_master/admin`);
};
export const getTRCRM_cost_type_master = () => {
  return axiosInstance.get(`${baseUrl}TRCRM_cost_type_master/admin`);
};

export const addTravelPackage = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_add_package/addType`, data);
};
export const getTravelPackageById = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_add_package/${id}`);
};
export const updateTravelPackage = (id, data) => {
  return axiosInstance.put(`${baseUrl}TRCRM_add_package/update_type/${id}`, data);
};
export const deleteTravelPackage = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_add_package/delete_type/${id}`);
};
export const getTravelPackageList = (page, count) => {
  return axiosInstance.get(`${baseUrl}TRCRM_add_package/user?page=${page}&count=${count}`);
};
export const addTravelRoomType = () => {
  return axiosInstance.get(`${baseUrl}TRCRM_room_type_master/admin`);
};


export const addTRCRM_tr_quotation_master = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_tr_quotation_master/addType`, data);
};

export const getTRCRM_tr_quotation_master = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_tr_quotation_master/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};

export const deleteTRCRM_tr_quotation_master = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_tr_quotation_master/delete_type/${id}`);
};
export const getIdTRCRM_tr_quotation_master = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_tr_quotation_master/${id}`);
};
export const updateTRCRM_tr_quotation_master = (id, data) => {
  return axiosInstance.put(`${baseUrl}TRCRM_tr_quotation_master/update_type/${id}`, data);
};


export const addAccount_invoice = (data) => {
  return axiosInstance.post(`${baseUrl}account_invoice/addType`, data);
};
export const getaccount_invoice = (value) => {
  return axiosInstance.get(`${baseUrl}account_invoice/page?page=${value?.page}&count=${value?.count}&id=${value?.paramsid}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};

export const deleteaccount_invoice = (id) => {
  return axiosInstance.delete(`${baseUrl}account_invoice/delete_type/${id}`);
};
export const getByIdaccount_invoice = (id) => {
  return axiosInstance.get(`${baseUrl}account_invoice/${id}`);
};
export const updateaccount_invoice = (id, data) => {
  return axiosInstance.put(`${baseUrl}account_invoice/update_type/${id}`, data);
};


export const addtrcrmRoom_category = (data) => {
  return axiosInstance.post(`${baseUrl}trcrm/room_category/addType`, data);
};

export const getatrcrm = (value) => {
  return axiosInstance.get(`${baseUrl}trcrm/room_category/user?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const deletetrcrm = (id) => {
  return axiosInstance.delete(`${baseUrl}trcrm/room_category/delete_type/${id}`);
};
export const getByIdtrcrm = (id) => {
  return axiosInstance.get(`${baseUrl}trcrm/room_category/${id}`);
};
export const updatetrcrm = (id, data) => {
  return axiosInstance.put(`${baseUrl}trcrm/room_category/update_type/${id}`, data);
};


export const addTRCRM_tr_follow_up = (data) => {
  return axiosInstance.post(`${baseUrl}TRCRM_tr_follow_up/addType`, data);
};
export const getTRCRM_tr_follow_up = (value) => {
  return axiosInstance.get(`${baseUrl}TRCRM_tr_follow_up/user?id=${value?.lead_id}&page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}`);
};
export const deletTRCRM_tr_follow_up = (id) => {
  return axiosInstance.delete(`${baseUrl}TRCRM_tr_follow_up/delete_type/${id}`);
};
export const getByIdTRCRM_tr_follow_up = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_tr_follow_up/${id}`);
};
export const updateTRCRM_tr_follow_up = (id, data) => {
  return axiosInstance.put(`${baseUrl}TRCRM_tr_follow_up/update_type/${id}`, data);
};


export const getTRCRM_call_status_master = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_call_status_master/admin`);
};
export const getTRCRM_tr_time_master = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_tr_time_master/admin`);
};
export const getAcc_email_setup = (id) => {
  return axiosInstance.get(`${baseUrl}acc_email_setup/admin`);
};
export const UpdateAcc_email_setup = (data) => {
  return axiosInstance.put(`${baseUrl}acc_email_setup/update`, data);
};
export const Updatelead_email = (data) => {
  return axiosInstance.post(`${baseUrl}lead_email/sendMail`, data);
};

// jilani

export const getBusList = (value) => {
  return axiosInstance.get(`${extraBaseUrl}busservice_txn/admin?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}&txn_id=`)
}

export const getIdBusList = (id) => {
  return axiosInstance.get(`${extraBaseUrl}busservice_txn/admin/detail?ticket_no=${id}`)
}

export const getHotelList = (value) => {
  return axiosInstance.get(`${extraBaseUrl}hotels/transaction/admin?page=${value?.page}&count=${value?.count}&start_date=${value?.start_date}&end_date=${value?.end_date}&txn_id=`)
}
export const getIdHotelList = (id) => {
  return axiosInstance.get(`${extraBaseUrl}hotels/transaction/admin/detail?ticket_no=${id}`)
}








export const TRCRM_visa_category_masterGet = () => {
  return axiosInstance.get(`${baseUrl}TRCRM_visa_category_master/admin`);
};
export const TTRCRM_visa_type_masterGet = () => {
  return axiosInstance.get(`${baseUrl}TRCRM_visa_type_master/admin`);
};
export const TTRCRM_tr_travellerGet = () => {
  return axiosInstance.get(`${baseUrl}TRCRM_tr_traveller/admin`);
};






// Create task api for select 
export const getTRCRM_hotel_type_master = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_hotel_type_master/admin`);
};
export const getTRCRM_star_rating_master = (id) => {
  return axiosInstance.get(`${baseUrl}TRCRM_star_rating_master/admin`);
};

export const getListTaskTypeSelect = (page, count) => {
  return axiosInstance.get(`${baseUrl}lead_task_type_id/user`);
};
export const getListTaskStageSelect = (page, count) => {
  return axiosInstance.get(`${baseUrl}lead_task_stage/user`);
};

// post comment 
export const postCommentAccTask = (value) => {
  return axiosInstance.post(`${baseUrl}lead_taskwise_comment/addType`, value);
};
export const getCommentAccTask = (count, page, id) => {
  return axiosInstance.get(
    `${baseUrl}lead_taskwise_comment/fetch?task_id=${id ? id : null}&page=${page}&count=${count}`
  );
};
export const deleteCommentAccTask = (id) => {
  return axiosInstance.delete(
    `${baseUrl}lead_taskwise_comment/delete_type/${id}`
  );
};
export const updateCommentAccTask = (id, value) => {
  return axiosInstance.put(
    `${baseUrl}lead_taskwise_comment/update_type/${id}`, value
  );
};
export const GetUpdateCommentAccTaskByid = (id) => {
  return axiosInstance.get(
    `${baseUrl}lead_taskwise_comment/${id}`
  );
};


// GET acc_project_module entries with pagination
export const getAccProjectModuleByPage = (page, count) => {
  return axiosInstance.get(`/acc_project_module/user?page=${page}&count=${count}`);
};

// GET a specific acc_project_module entry by ID
export const getAccProjectModuleById = (id) => {
  return axiosInstance.get(`/acc_project_module/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new acc_project_module entry
export const postAccProjectModule = (data) => {
  return axiosInstance.post(`/acc_project_module/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing acc_project_module entry by ID
export const updateAccProjectModuleById = (id, data) => {
  return axiosInstance.put(`/acc_project_module/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// DELETE an acc_project_module entry by ID
export const deleteAccProjectModuleById = (id) => {
  return axiosInstance.delete(`/acc_project_module/delete_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


// GET acc_project_module_template entries with pagination
export const getAccProjectModuleTemplateByPage = (page, count) => {
  return axiosInstance.get(`/acc_project_module_template/user?page=${page}&count=${count}`);
};

// GET a specific acc_project_module_template entry by ID
export const getAccProjectModuleTemplateById = (id) => {
  return axiosInstance.get(`/acc_project_module_template/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new acc_project_module_template entry
export const postAccProjectModuleTemplate = (data) => {
  return axiosInstance.post(`/acc_project_module_template/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing acc_project_module_template entry by ID
export const updateAccProjectModuleTemplateById = (id, data) => {
  return axiosInstance.put(`/acc_project_module_template/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// DELETE an acc_project_module_template entry by ID
export const deleteAccProjectModuleTemplateById = (id) => {
  return axiosInstance.delete(`/acc_project_module_template/delete_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};





// GET acc_project_business_category entries with pagination
export const getAccProjectBusinessCategoryByPage = (page, count) => {
  return axiosInstance.get(`/acc_project_business_category/user?page=${page}&count=${count}`);
};

// GET a specific acc_project_business_category entry by ID
export const getAccProjectBusinessCategoryById = (id) => {
  return axiosInstance.get(`/acc_project_business_category/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new acc_project_business_category entry
export const postAccProjectBusinessCategory = (data) => {
  return axiosInstance.post(`/acc_project_business_category/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing acc_project_business_category entry by ID
export const updateAccProjectBusinessCategoryById = (id, data) => {
  return axiosInstance.put(`/acc_project_business_category/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// DELETE an acc_project_business_category entry by ID
export const deleteAccProjectBusinessCategoryById = (id) => {
  return axiosInstance.delete(`/acc_project_business_category/delete_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};




// export const getZipCodeById = (id) => {
//   return axiosInstance.get(`/pin/pincode/${id}`, {
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//       Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
//     },
//   });
// };

export const getTaxtype = (id) => {
  return axiosInstance.get(`/acc_tax_type_master/admin`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getListprojectScope = (id) => {
  return axiosInstance.get(`/lead_project_scope/admin`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const roleListAdmin = (id) => {
  return axiosInstance.get(`/user_type`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// get stages

export const listStages = (id) => {
  return axiosInstance.get(`/acc_project_stage/admin`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const listStagescount = (id) => {
  return axiosInstance.get(`/acc_add_project/stageListwith_prj_count`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};



// GET acc_add_project entries with pagination
export const getAccAddProjectByPage = (page, count, id) => {
  return axiosInstance.get(`/acc_add_project/user?page=${page}&count=${count}&prj_stage=${id}`);
};

// GET a specific acc_add_project entry by ID
export const getAccAddProjectById = (id) => {
  return axiosInstance.get(`/acc_add_project/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new acc_add_project entry
export const postAccAddProject = (data) => {
  return axiosInstance.post(`/acc_add_project/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// PUT (update) an existing acc_add_project entry by ID
export const updateAccAddProjectById = (id, data) => {
  return axiosInstance.put(`/acc_add_project/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// DELETE an acc_add_project entry by ID
export const deleteAccAddProjectById = (id) => {
  return axiosInstance.delete(`/acc_add_project/delete_type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};



export const updateConfigSetting = (data) => {
  return axios.put(`${baseproductUrl}generalSetting/siteConfig`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getConfigSetting = (data) => {
  return axios.get(`${baseproductUrl}generalSetting/siteConfig`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const updateConfigsales = (data) => {
  return axios.put(`${baseproductUrl}generalSetting/sales`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getConfigSettingsales = (data) => {
  return axios.get(`${baseproductUrl}generalSetting/sales`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const updateSettingProducts = (data) => {
  return axios.put(`${baseproductUrl}generalSetting/product`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getSettingProducts = (data) => {
  return axios.get(`${baseproductUrl}generalSetting/product`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const updateSystemSettingPrefix = (data) => {
  return axios.put(`${baseproductUrl}generalSetting/prefix`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getSystemSettingPrefix = (data) => {
  return axios.get(`${baseproductUrl}generalSetting/prefix`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const updateSettingMoneyAndNumberFormat = (data) => {
  return axios.put(`${baseproductUrl}generalSetting/moneyAndNumberFormat`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getSettingMoneyAndNumberFormat = (data) => {
  return axios.get(`${baseproductUrl}generalSetting/moneyAndNumberFormat`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const updateSettingWeighingScale = (data) => {
  return axios.put(`${baseproductUrl}generalSetting/weight`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getSettingWeighingScale = (data) => {
  return axios.get(`${baseproductUrl}generalSetting/weight`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const updateSettingEmail = (data) => {
  return axios.put(`${baseproductUrl}generalSetting/email`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getSettingEmail = (data) => {
  return axios.get(`${baseproductUrl}generalSetting/email`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const updateSettingaward = (data) => {
  return axios.put(`${baseproductUrl}generalSetting/award`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getSettingaward = (data) => {
  return axios.get(`${baseproductUrl}generalSetting/award`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};



export const postProduct = (data) => {
  return axios.post(`${baseproductUrl}product/add_product`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const updateProducts = (data) => {
  return axios.put(`${baseproductUrl}/product/${data.id}`, data.data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const getProductList = (data) => {
  return axios.get(`${baseproductUrl}product/admin`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};



export const deleteProductById = (id) => {
  return axios.delete(`${baseproductUrl}/product/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


// brand


export const getBrandByPage = () => {
  return axios.get(`${baseproductUrl}brand/admin`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getBrandById = (id) => {
  return axios.get(`${baseproductUrl}brand/admin/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const deleteBrandById = (id) => {
  return axios.delete(`${baseproductUrl}brand/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


// attribute

export const getattributePage = () => {
  return axios.get(`${baseproductUrl}attribute/admin`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getattributeId = (id) => {
  return axios.get(`${baseproductUrl}attribute/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const deleteattributeId = (id) => {
  return axios.delete(`${baseproductUrl}attribute/delete_attributes/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// unit

export const getunitPage = () => {
  return axios.get(`${baseproductUrl}unit/admin`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getunitId = (id) => {
  return axios.get(`${baseproductUrl}unit/admin/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const deleteunitId = (id) => {
  return axios.delete(`${baseproductUrl}unit/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};



// size


export const getsizePage = () => {
  return axios.get(`${baseproductUrl}size`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getsizeId = (id) => {
  return axios.get(`${baseproductUrl}size/admin/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const deletesizeId = (id) => {
  return axios.delete(`${baseproductUrl}size/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// TRCRM travelInvoiceMaster API :

// Get: /api/TRCRM_travelInvoice_master/user?page=0&count=10
// Get: /api/TRCRM_travelInvoice_master/:id
// Post: /api/TRCRM_travelInvoice_master/addType
// Put: /api/TRCRM_travelInvoice_master/update_type/:id
// Delete: /api/TRCRM_travelInvoice_master/delete_type/:id


export const posttravelInvoice = (value) => {
  return axiosInstance.post(`${baseUrl}TRCRM_travelInvoice_master/addType`, value);
};
export const gettravelInvoice = (count, page, id) => {
  return axiosInstance.get(
    `${baseUrl}TRCRM_travelInvoice_master/user?&page=${page}&count=${count}`
  );
};
export const deletetravelInvoice = (id) => {
  return axiosInstance.delete(
    `${baseUrl}TRCRM_travelInvoice_master/delete_type/${id}`
  );
};
export const updatetravelInvoice = (id, value) => {
  return axiosInstance.put(
    `${baseUrl}TRCRM_travelInvoice_master/update_type/${id}`, value
  );
};
export const GetUpdatetravelInvoiceByid = (id) => {
  return axiosInstance.get(
    `${baseUrl}TRCRM_travelInvoice_master/${id}`
  );
};


// ================MOIN APIS START=====================
export const getAllAccountData = () => {
  return axiosInstance.get(
    `${baseUrl}Accledger/admin`
  );
};
export const getAllTaxTypeData = () => {
  return axiosInstance.get(
    `${baseUrl}acc_tax_type_master/admin`
  );
};
export const getAllTransportersData = () => {
  return axiosInstance.get(
    `${baseUrl}lead_transporter_master/admin`
  );
};
export const getAllProductsData = () => {
  return axiosInstance.get(
    `${baseproductUrl}product/admin`
  );
};
export const getAllPickupPointsData = () => {
  return axiosInstance.get(
    `${baseproductUrl}pickuppoints/admin`
  );
};
// ================MOIN APIS END=======================



export const searchReminderTask = (page, count) => {
  return axiosInstance.get(
    `${baseUrl}task/reminder?page=${page}&count=${count}`
  );
};

export const searchingReminderTask = (page, count, key) => {
  return axiosInstance.get(
    `${baseUrl}task/reminder?page=${page}&count=${count}&search=${key}`
  );
};
export const getTaskforMe = (page, count,) => {
  return axiosInstance.get(
    `${baseUrl}task/assignedToMe?page=${page}&count=${count}`
  );
};



export const getClientOrderNewOr = (id) => {
  return axiosInstance.get(`/lead_sales_order_master/user?page=0&count=10&id=${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getClientOrder = (id) => {
  return axiosInstance.get(`/lead_quotation_master/user?page=0&count=10&id=${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const getClientInvoice = (id) => {
  return axiosInstance.get(`/lead_sales_invoice_master/page?page=0&count=10&search=&id=${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const getCompanys = (id) => {
  return axiosInstance.get(`/company/admin`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};







// pickup point

export const deletePickupById = (id) => {
  return axios.delete(`${baseproductUrl}pickupPoints/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getPickupByPage = (page, count) => {
  return axios.get(`${baseproductUrl}pickupPoints/admin`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getPickupById = (id) => {
  return axios.get(`${baseproductUrl}pickupPoints/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const postPickupPonit = (data) => {
  return axios.post(`${baseproductUrl}pickupPoints/add`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};



export const updatePickupById = (id, data) => {
  return axios.put(`${baseproductUrl}pickupPoints/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};




export const postPurchase = (data) => {
  return axiosInstance.post(`/lead_purchase_order_master/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getAllPurchaseData = (page, count) => {
  return axiosInstance.get(
    `${baseUrl}lead_purchase_order_master/user?page=${page}&count=${count}`
  );
};

export const getbyIdPurchase = (id) => {
  return axiosInstance.get(
    `${baseUrl}lead_purchase_order_master/${id}`
  );
};

export const updatePurchase = (data, id) => {
  return axiosInstance.put(`/lead_purchase_order_master/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};



// Sales order Apis  start //
export const postSalesOrder = (data) => {
  return axiosInstance.post(`${baseUrl}lead_sales_order_master/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const updateSalesOrder = (payload) => {
  return axiosInstance.put(`${baseUrl}lead_sales_order_master/update_type/${payload?.id}`, payload.data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const deletetravelPurchase = (id) => {
  return axiosInstance.delete(
    `${baseUrl}lead_purchase_order_master/delete_type/${id}`,
    {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
      },
    });
};

export const getAllSalesData = (page, count) => {
  return axiosInstance.get(
    `${baseUrl}lead_sales_order_master/user?page=${page}&count=${count}`
  );
};
export const deleteSalesOrderById = (id) => {
  return axiosInstance.delete(`${baseUrl}lead_sales_order_master/delete_type/${id}`);
};
export const getSalesOrderById = (id) => {
  return axiosInstance.get(`${baseUrl}lead_sales_order_master/${id}`);
};


// Sales quotationMaster api Apis  start //
export const postquotationMaster = (data) => {
  return axiosInstance.post(`/lead_quotation_master/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const getQuotationMasterById = (id) => {
  return axiosInstance.get(`${baseUrl}lead_quotation_master/${id}`);
};
export const updateQuotationMaster = (payload) => {
  return axiosInstance.put(`${baseUrl}lead_quotation_master/update_type/${payload?.id}`, payload.data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getAllquotationMasterData = (page, count) => {
  return axiosInstance.get(
    `${baseUrl}lead_quotation_master/?page=${page}&count=${count}`
  );
};


// ====purchase quotation====

export const getQuoteNo = () => {
  return axios.get(`${baseUrl}add_book_code/admin`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const getAllSubjectData = () => {
  return axios.get(`${baseUrl}add_subject/admin`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const getAllRatesheetData = () => {
  return axios.get(`${baseUrl}acc_rate_sheet/admin`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const getAllSalesmanData = () => {
  return axios.get(`${baseUrl}staff/admin`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const getAllMistryData = () => {
  return axios.get(`${baseUrl}add_mistry/admin`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getAllPurchseQuoationData = (page, count) => {
  return axiosInstance.get(
    `${baseUrl}lead_quotation_master/user?page=${page}&count=${count}`
  );
};

export const deletePurchaseQuoatationById = (id) => {
  return axiosInstance.delete(`${baseUrl}lead_quotation_master/delete_type/${id}`);
};

// ====purchase Challan====
export const postPurchaseChallan = (data) => {
  return axiosInstance.post(`${baseUrl}lead_purchase_challan_master/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getPurchaseChallanById = (id) => {
  return axiosInstance.get(`${baseUrl}lead_purchase_challan_master/${id}`);
};
export const updatePurchaseChallan = (payload) => {
  return axiosInstance.put(`${baseUrl}lead_purchase_challan_master/update_type/${payload?.id}`, payload.data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getPurchaseChallan = (page, count) => {
  return axiosInstance.get(
    `${baseUrl}lead_purchase_challan_master/user?page=${page}&count=${count}`
  );
};
export const deletePurchaseChallanById = (id) => {
  return axiosInstance.delete(`${baseUrl}lead_purchase_challan_master/delete_type/${id}`);
};

// ====Sales Challan====
export const postSalesChallan = (data) => {
  return axiosInstance.post(`${baseUrl}lead_sales_challan_master/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const getSalesChallanById = (id) => {
  return axiosInstance.get(`${baseUrl}lead_sales_challan_master/${id}`);
};
export const updateSalesChallan = (payload) => {
  return axiosInstance.put(`${baseUrl}lead_sales_challan_master/update_type/${payload?.id}`, payload.data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getSalesChallan = (page, count) => {
  return axiosInstance.get(
    `${baseUrl}lead_sales_challan_master/user?page=${page}&count=${count}`
  );
};
export const deleteSalesChallanById = (id) => {
  return axiosInstance.delete(`${baseUrl}lead_sales_challan_master/delete_type/${id}`);
};

// ====Challan Return====
export const postChallanReturn = (data) => {
  return axiosInstance.post(`${baseUrl}lead_sales_return_master/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const getChallanReturnById = (id) => {
  return axiosInstance.get(`${baseUrl}lead_sales_return_master/${id}`);
};
export const updateChallanReturn = (payload) => {
  return axiosInstance.put(`${baseUrl}lead_sales_return_master/update_type/${payload?.id}`, payload.data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getAllInvoiceTypeData = () => {
  return axios.get(`${baseUrl}acc_select_invoice_type/admin`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getChallanReturn = (page, count) => {
  return axiosInstance.get(
    `${baseUrl}lead_sales_return_master/user?page=${page}&count=${count}`
  );
};
export const deleteChallanReturnById = (id) => {
  return axiosInstance.delete(`${baseUrl}lead_sales_return_master/delete_type/${id}`);
};


export const postLead = (data) => {
  return axiosInstance.post(`/auth/lead_register_staff`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const getLeadDashbord = () => {
  return axiosInstance.get(`${baseUrl}user_dashboard/lead`);
};


// ======Agro Featured reports =======







export const postPurchaseChallans = (data) => {
  return axiosInstance.post(`/challan/purchase_from_order/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getAllPurchaseChallanData = (page, count) => {
  return axiosInstance.get(
    `${baseUrl}challan/purchase_from_order/user?page=${page}&count=${count}`
  );
};

export const getbyIdPurchaseChallan = (id) => {
  return axiosInstance.get(
    `${baseUrl}challan/purchase_from_order/${id}`
  );
};

export const updatePurchaseChallans = (data, id) => {
  return axiosInstance.put(`/challan/purchase_from_order/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const deleteChallans = (id) => {
  return axiosInstance.delete(
    `${baseUrl}challan/purchase_from_order/delete_type/${id}`,
    {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
      },
    });
};



// 
export const postOrderFrQuat = (data) => {
  return axiosInstance.post(`order/order_from_quotation/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getAllOrderFrQuatData = (page, count) => {
  return axiosInstance.get(
    `${baseUrl}/order/order_from_quotation/user?page=${page}&count=${count}`
  );
};

export const getbyIdOrderFrQuat = (id) => {
  return axiosInstance.get(
    `${baseUrl}order/order_from_quotation/${id}`
  );
};

export const updateOrderFrQuats = (data, id) => {
  return axiosInstance.put(`/order/order_from_quotation/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const deleteOrderFrQuat = (id) => {
  return axiosInstance.delete(
    `${baseUrl}order/order_from_quotation/delete_type/${id}`,
    {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
      },
    });
};




// 
export const postPurchFromQuat = (data) => {
  return axiosInstance.post(`/order/purchase_from_quotation/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getpostPurchFromQuatData = (page, count) => {
  return axiosInstance.get(
    `order/purchase_from_quotation/user?page=${page}&count=${count}`
  );
};

export const getbyIdpostPurchFromQuat = (id) => {
  return axiosInstance.get(
    `api/order/purchase_from_quotation/${id}`
  );
};

export const updatepostPurchFromQuat = (data, id) => {
  return axiosInstance.put(`/order/purchase_from_quotation/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};


export const deletepostPurchFromQuat = (id) => {
  return axiosInstance.delete(
    `order/purchase_from_quotation/delete_type/${id}`,
    {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
      },
    });
};


// 
export const postSaleFromOrder = (data) => {
  return axiosInstance.post(`/challan/sale_from_order/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getSaleFromOrderData = (page, count) => {
  return axiosInstance.get(
    `/challan/sale_from_order/user?page=${page}&count=${count}`
  );
};

export const getSaleFromOrderById = (id) => {
  return axiosInstance.get(
    `/challan/sale_from_order/${id}`
  );
};

export const updateSaleFromOrder = (data, id) => {
  return axiosInstance.put(`/challan/sale_from_order/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const deleteSaleFromOrder = (id) => {
  return axiosInstance.delete(
    `/challan/sale_from_order/delete_type/${id}`,
    {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
      },
    }
  );
};


// 
export const postPurchaseQuotation = (data) => {
  return axiosInstance.post(`/quotation/purchaseQuotation/addType`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getPurchaseQuotationData = (page, count) => {
  return axiosInstance.get(
    `/quotation/purchaseQuotation/user?page=${page}&count=${count}`
  );
};

export const getPurchaseQuotationById = (id) => {
  return axiosInstance.get(
    `/quotation/purchaseQuotation/${id}`
  );
};

export const updatePurchaseQuotation = (data, id) => {
  return axiosInstance.put(`/quotation/purchaseQuotation/update_type/${id}`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const deletePurchaseQuotation = (id) => {
  return axiosInstance.delete(
    `/quotation/purchaseQuotation/delete_type/${id}`,
    {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
      },
    }
  );
};
