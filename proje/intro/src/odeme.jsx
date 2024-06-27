import React, { useState } from 'react';
import './css/odeme.css'
import { useNavigate } from "react-router-dom";

function PaymentPage() {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();
    const handlePaymentSubmit = (e) => {
        e.preventDefault();        
        setSuccessMessage('Ödeme işlemi başarıyla tamamlandı!');        
        setCardNumber('');
        setExpiryDate('');
        setCvv('');
    };  
    
    function mesaj(){
        navigate('/mesaj');
    }

    return (
        <div className='odeme-div' style={{ width: '100%', maxWidth: '600px', margin: 'auto' }}>
            <h2>Ödeme Sayfası</h2>
            <form onSubmit={handlePaymentSubmit}>
                <label>
                    Kart Numarası:
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        maxLength="16"
                        rules={[{required:true,message:"Bu alan zorunludur."}]}
                        
                    />
                </label>
                <br />
                <label>
                    Son Kullanma Tarihi:
                    <input
                        type="text"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        placeholder="MM/YYYY"
                        maxLength="7"
                        required
                    />
                </label>
                <br />
                <label>
                    CVV:
                    <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        maxLength="3"
                        required
                    />
                </label>
                <br />
                <button type="submit" onClick={mesaj} >Ödemeyi Tamamla</button>
            </form>
            {successMessage && <p style={{ color: 'green', marginTop: '10px' }}>{successMessage}</p>}
        </div>
    );
}

export default PaymentPage;
