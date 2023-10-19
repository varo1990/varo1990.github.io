import React, {useCallback, useState} from 'react';
import Wrapper from "../components/Wrapper";
import user from "../assets/image/dasboard/user.png"
import photo from "../assets/image/settings/photo.svg"
import Languages from "../components/Languages";
import edit from "../assets/image/settings/edit.svg"
import close from "../assets/image/settings/close.svg"
import PasswordChange from "../components/PasswordChange";
import Analytics from "../components/Analytics";
import AcountPhoto from "../components/AcountPhoto";
import {useDispatch} from "react-redux";
import {registerRequest} from "../store/actions/users";

function AccountSettings(props) {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [female, setFemale] = useState('');
    const [email, setEmail] = useState('');

    const [showEditName, setShowEditName] = useState(false);
    const [showEditDateOfBirth, setShowEditDateOfBirth] = useState(false);
    const [showEditFemale, setShowEditFemale] = useState(false);
    const [showEditEmail, setShowEditEmail] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const [formData, setFormData] = useState({
        avatar: '',

    })



    const handleImageChange = useCallback( (e)=>{



        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    })


    const handleEditClick = (field) => {
        switch (field) {
            case 'name':
                setShowEditName(!showEditName);
                break;
            case 'dateOfBirth':
                setShowEditDateOfBirth(!showEditDateOfBirth);
                break;
            case 'female':
                setShowEditFemale(!showEditFemale);
                break;
            case 'email':
                setShowEditEmail(!showEditEmail);
                break;
            default:
                break;
        }
    };

    return (
        <Wrapper>
            <div className="content">
                <div className="settings">
                    <div className="settings_header">
                        <h2>Account settings</h2>

                    </div>

                    <div className="settings_user">
                        <div className="settings_user_img">
                            {selectedImage ? (
                              <AcountPhoto img={<img src={selectedImage} alt="User" />}/>

                            ) : (
                              <img src={user} alt="Default User" />
                            )}
                            <label htmlFor="image-upload">
                                <img src={photo} alt="Upload Photo" />
                            </label>
                            <input
                              type="file"
                              id="image-upload"
                              accept="image/*"
                              onChange={handleImageChange}
                              style={{ display: 'none' }}
                              value={formData.avatar}
                            />
                        </div>
                        <h3>Linda Taylor</h3>
                    </div>


                    <div className="settings_user_info">
                        <div className="settings_user_change_userName">
                            <h4>Personal information</h4>
                            <div className="label">
                                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                                <label className="text-field__label" htmlFor="name">Name</label>
                                <button onClick={() => handleEditClick('name')}>
                                    {showEditName ? <img src={edit} alt="Edit" /> : <img src={close} alt="Close" />}
                                </button>
                            </div>
                            <div className="label">
                                <input type="text" id="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}/>
                                <label className="text-field__label" htmlFor="date">Date of Birth</label>
                                <button onClick={() => handleEditClick('dateOfBirth')}>
                                    {showEditDateOfBirth ? <img src={edit} alt="Edit" /> : <img src={close} alt="Close" />}
                                </button>
                                                           </div>
                            <div className="label">
                                <input type="text" id="female" value={female} onChange={(e)=> setFemale(e.target.value)}/>
                                <label className="text-field__label" htmlFor="female">Female</label>
                                <button onClick={() => handleEditClick('female')}>
                                    {showEditFemale ? <img src={edit} alt="Edit" /> : <img src={close} alt="Close" />}
                                </button>
                                                           </div>
                            <div className="label">
                                <input type="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                                <label className="text-field__label" htmlFor="email">Email</label>
                                <button onClick={() => handleEditClick('email')}>
                                    {showEditEmail ? <img src={edit} alt="Edit" /> : <img src={close} alt="Close" />}
                                </button>
                                                           </div>
                        </div>



                            <PasswordChange/>

                        
                    </div>

                </div>

            </div>

        </Wrapper>
    );
}

export default AccountSettings;