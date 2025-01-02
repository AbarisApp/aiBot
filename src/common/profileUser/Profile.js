import React, { useState, useEffect } from "react";
import { MdPhotoCamera } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import CustomInputField from "../CustomInputField";
import {
    clodinaryImage,
    currencyList,
    getUpdateProfile,
    languageList,
    staffUpdateProfile,
} from "../../api/login/Login";
import { baseUrlImage } from "../../baseUrl";
import { Alert, Spinner } from "antd";

function Profile() {
    const [combo, setCombo] = useState([]);
    const [currency, setCurrency] = useState([]);
    const [data, setData] = useState(null);
    const [profileImage, setProfileImage] = useState(localStorage.getItem("profileImage") || null);
    const [fileError, setFileError] = useState(null);
    const [profileImgDim, setProfileImgDim] = useState(false);
    const [latLong, setLatLng] = useState(false);

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        mobile: "",
        dob: "",
        latitude: "",
        longitude: "",
        currency: "",
        language_id: "",
        profile: "",
    });

    const params = useParams();

    // Input change handler
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    // Image upload handler
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/bmp", "image/svg+xml", "image/x-icon"];

        if (file && allowedTypes.includes(file.type)) {
            const img = new Image();
            img.src = URL.createObjectURL(file);

            img.onload = async () => {
                if (img.width > 400 || img.height > 400) {
                    setProfileImgDim(true);
                    setProfileImage(null);
                } else {
                    try {
                        const formData = new FormData();
                        formData.append("image", file);
                        const res = await clodinaryImage(formData);

                        if (res?.data?.statusCode === "200") {
                            const imageUrl = res.data.data.url;
                            setProfileImage(imageUrl);
                            localStorage.setItem("profileImage", imageUrl);
                            setProfileImgDim(false);
                            toast.success("Profile image updated successfully.", { position: "top-center" });
                        } else {
                            setProfileImgDim(true);
                            toast.error("Failed to update profile image.", { position: "top-center" });
                        }
                    } catch (error) {
                        console.error("Failed to upload image", error);
                        toast.error(`Failed to upload image: ${error.message}`, { position: "top-center" });
                    }
                }
            };
        } else {
            setFileError("Invalid file type. Allowed file types are: jpg, jpeg, bmp, gif, png, svg, and ico");
            setProfileImage(null);
        }
    };

    // Form submission handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        const errors = {};
        // const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        // const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;

        // if (!formValues.name) errors.name = "Name is required";
        // if (!formValues.email) {
        //     errors.email = "Email is required";
        // } else if (!regexEmail.test(formValues.email)) {
        //     errors.email = "Invalid Email";
        // }
        // if (!formValues.mobile) {
        //     errors.mobile = "Mobile Number is required";
        // } else if (!regexMobileNumber.test(formValues.mobile)) {
        //     errors.mobile = "Invalid Mobile Number";
        // }

        // if (Object.keys(errors).length > 0) {
        //     toast.error("Please correct the errors before submitting.");
        //     return;
        // }

        // Submit form
        try {
            const payload = { ...formValues, profile: profileImage };
            const res = await staffUpdateProfile(payload);

            if (res?.statusCode == "200") {
                toast.success("Profile updated successfully.", { position: "top-center" });
            } else {
                toast.error("Failed to update profile.", { position: "top-center" });
            }
        } catch (error) {
            console.error("Failed to update profile", error);
            toast.error(`Failed to update profile: ${error.message}`, { position: "top-center" });
        }
    };

    // Fetch language and currency data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const languageData = await languageList();
                const currencyData = await currencyList();
                setCombo(languageData?.data || []);
                setCurrency(currencyData?.data || []);
            } catch (error) {
                console.error("Failed to fetch data", error);
                toast.error(`Failed to fetch data: ${error.message}`, { position: "top-center" });
            }
        };
        fetchData();
    }, []);

    // Fetch user profile data
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const profileData = await getUpdateProfile();
                setData(profileData?.data?.staff);
                setLatLng(profileData?.data);
            } catch (error) {
                console.error("Failed to fetch profile data", error);
                toast.error(`Failed to fetch profile data: ${error.message}`, { position: "top-center" });
            }
        };
        fetchProfileData();
    }, []);

    useEffect(() => {
        if (data) {
            setFormValues({
                name: data?.name || "",
                email: data?.email || "",
                mobile: data?.mobile || "",
                dob: data?.dob || "",
                latitude: data?.latitude || "",
                longitude: data?.longitude || "",
                language_id: data?.language_id || "",
                profile: data?.profile || "",
            });
            setProfileImage(data?.profile || null);
        }
    }, [data]);

    return (
        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">UPDATE PROFILE</h4>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="main-img-div" style={{ position: "relative", textAlign: "center" }}>
                                            <div className="profile-container">
                                                {profileImage ? (
                                                    <img
                                                        src={`${baseUrlImage}${profileImage}`}
                                                        className="img-fluid w-100 object-fit-cover"
                                                        alt="Profile"
                                                    />
                                                ) : (
                                                    <img
                                                        src="https://via.placeholder.com/400"
                                                        alt="Default"
                                                    />
                                                )}
                                                <div className="edit-options">
                                                    <label htmlFor="file-upload" className="edit-icon">
                                                        <MdPhotoCamera />
                                                    </label>
                                                    <input
                                                        id="file-upload"
                                                        type="file"
                                                        style={{ display: "none" }}
                                                        accept="image/*"
                                                        onChange={handleImageUpload}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {profileImgDim && (
                                            <Alert
                                                message="Image resolution is too high (400x400px max)."
                                                type="warning"
                                                showIcon
                                                closable
                                            />
                                        )}
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <CustomInputField
                                            type="text"
                                            name="name"
                                            value={formValues.name}
                                            onChange={handleInputChange}
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <CustomInputField
                                            type="email"
                                            name="email"
                                            value={formValues.email}
                                            onChange={handleInputChange}
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <CustomInputField
                                            type="number"
                                            name="mobile"
                                            value={formValues.mobile}
                                            onChange={handleInputChange}
                                            placeholder="Mobile Number"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <CustomInputField
                                            type="number"
                                            name="latitude"
                                            value={formValues.latitude}
                                            onChange={handleInputChange}
                                            placeholder="Latitude"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <CustomInputField
                                            type="number"
                                            name="longitude"
                                            value={formValues.longitude}
                                            onChange={handleInputChange}
                                            placeholder="Longitude"
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <select
                                            name="currency"
                                            value={formValues.currency}
                                            onChange={handleInputChange}
                                            className="form-control"
                                        >
                                            <option value="">Select Currency</option>
                                            {currency.map((curr) => (
                                                <option key={curr.id} value={curr._id}>
                                                    {curr.currency_name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <select
                                            name="language_id"
                                            value={formValues.language_id}
                                            onChange={handleInputChange}
                                            className="form-control"
                                        >
                                            <option value="">Select Language</option>
                                            {combo.map((lang) => (
                                                <option key={lang.id} value={lang._id}>
                                                    {lang.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <input
                                            type="date"
                                            name="dob"
                                            value={formValues.dob}
                                            onChange={handleInputChange}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-xl-12 text-center mt-3">
                                        <button className="btn btn-primary" type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
