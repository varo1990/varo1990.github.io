import React, {useState} from 'react';
import close from "../assets/image/settings/close.svg"

function PasswordChange(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setOldPassword('');
        setNewPassword('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Отправка запроса на сервер для изменения пароля
        // Возможно, вы захотите добавить здесь логику обработки запроса
        handleCloseModal();
    }
    return (
        <div className="settings_user_password_change">
            <h4>Password</h4>
            <button onClick={handleOpenModal}>Change password</button>
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <form onSubmit={handleSubmit}>


                            <input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)}
                                   placeholder="Enter your old password" />



                                <input type="password" value={newPassword}
                                       onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Enter your new password"
                                />

                            <input type="password" value={newPassword}
                                   onChange={(e) => setNewPassword(e.target.value)}
                                   placeholder="Confrim password"
                            />

                            <button type="submit">Save</button>
                        </form>
                        <button onClick={handleCloseModal}
                        className='close'
                        ><img src={close} alt=""/></button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PasswordChange;