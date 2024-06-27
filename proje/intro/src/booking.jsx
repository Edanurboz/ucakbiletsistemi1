import React, { useState } from 'react';
import { SwapOutlined } from "@ant-design/icons";
import './css/booking.css';
import { Link } from "react-router-dom";
import flightsData from './flights.json'; 

function Booking() {
    const [from, setFrom] = useState('Nereden');
    const [to, setTo] = useState('Nereye');
    const [gidis, setGidis] = useState('');
    const [donus, setDonus] = useState('');
    const [yolcu, setYolcu] = useState('1');
    const [yon, setYon] = useState('tek_yon');
    const [airline, setAirline] = useState("");
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [filteredFlights, setFilteredFlights] = useState([]);
    const [filteredReturnFlights, setFilteredReturnFlights] = useState([]);

    const handleAraClick = () => {
        
        const filtered = flightsData.ucakBiletleri.filter(flight => {
            
            const kalkisFilter = from === 'Nereden' || flight.kalkisYeri.toLowerCase().includes(from.toLowerCase());
            const varisFilter = to === 'Nereye' || flight.varisYeri.toLowerCase().includes(to.toLowerCase());
            const tarihFilter = gidis === '' || flight.tarih === gidis;
            const airlineFilter = airline === '' || flight.havayolu === airline;

            
            if (yon === 'tek_yon') {
                return kalkisFilter && varisFilter && tarihFilter && airlineFilter;
            } else {
                return kalkisFilter && varisFilter && tarihFilter && airlineFilter;
            }
        });

        setFilteredFlights(filtered);

        if (yon === 'gidis_gelis') {
            const filteredReturn = flightsData.ucakBiletleri.filter(flight => {
                const kalkisFilter = to === 'Nereye' || flight.kalkisYeri.toLowerCase().includes(to.toLowerCase());
                const varisFilter = from === 'Nereden' || flight.varisYeri.toLowerCase().includes(from.toLowerCase());
                const tarihFilter = donus === '' || flight.tarih === donus;
                const airlineFilter = airline === '' || flight.havayolu === airline;

                return kalkisFilter && varisFilter && tarihFilter && airlineFilter;
            });

            setFilteredReturnFlights(filteredReturn);
        } else {
            setFilteredReturnFlights([]);
        }

        setSelectedFlight(null); 
        setYolcu('1'); 
    };

    const handleFromFocus = () => {
        if (from === 'Nereden') {
            setFrom('');
        }
    };

    const handleToFocus = () => {
        if (to === 'Nereye') {
            setTo('');
        }
    };

    const handleYonChange = (event) => {
        setYon(event.target.value);
        if (event.target.value === 'tek_yon') {
            setDonus('');
        }
    };

    const handleAirline = (event) => {
        setAirline(event.target.value);
    };

    const handleFlightSelect = (flight) => {
        setSelectedFlight({ ...flight, secilenKoltuk: null });
    };

    const handleKoltukSec = (koltuk) => {
        if (selectedFlight.koltuklar[koltuk] === 'Boş') {
            const updatedKoltuklar = { ...selectedFlight.koltuklar, [koltuk]: 'Dolu' };
            setSelectedFlight({ ...selectedFlight, koltuklar: updatedKoltuklar, secilenKoltuk: koltuk });
        }
    };

    const handleYolcuChange = (event) => {
        setYolcu(event.target.value);
        setSelectedFlight(null);
    };

    const handleSeatSelect = (flight, koltuk) => {
        alert(`Koltuk ${koltuk} seçildi.\nUçuş: ${flight.kalkisYeri} - ${flight.varisYeri}\nTarih: ${flight.tarih}\nSaat: ${flight.saat}\nHavayolu: ${flight.havayolu}\nÜcret: ${flight.ücret}`);
    };

    return (
        <div style={{ width: '100%' }}>
            <div className='orta-div' style={{ fontFamily: 'arial', width: '100%' }}>
                <div className='arama-div'>
                    <div className='yon-div'>
                        <label><input type="radio" name="yon" value="tek_yon" checked={yon === 'tek_yon'} onChange={handleYonChange} /> Tek yön </label>
                        <label><input type="radio" name="yon" value="gidis_gelis" checked={yon === 'gidis_gelis'} onChange={handleYonChange} /> Gidiş-Geliş</label>
                    </div>

                    <input value={from} onChange={(e) => setFrom(e.target.value)} onFocus={handleFromFocus} type="text" className='from-div' style={{ textAlign: 'center', fontSize: '15px' }} />
                    <SwapOutlined style={{ fontSize: '20px', marginLeft: '5px', marginRight: '5px', marginTop: '20px' }} />
                    <input value={to} onChange={(e) => setTo(e.target.value)} onFocus={handleToFocus} type="text" className='to-div' style={{ textAlign: 'center', fontSize: '15px' }} />

                    <label htmlFor="gidis" >Gidiş Tarihi</label>
                    <input id="gidis" value={gidis} onChange={(e) => setGidis(e.target.value)} type="date" className='gidis-div' />
                    <label htmlFor="donus" >Dönüş Tarihi</label>
                    <input value={donus} onChange={(e) => setDonus(e.target.value)} type="date" className='donus-div' disabled={yon === 'tek_yon'} />
                    
                    <label htmlFor="yolcu" >Yolcu Sayısı</label>
                    <select value={yolcu} onChange={handleYolcuChange} className='yolcu-option'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </select>
                    <label htmlFor="yolcu" >Havayolu</label>
                    <select value={airline} className='airline-div' onChange={handleAirline}>
                        <option value="THY">THY</option>
                        <option value="SunExpress">SunExpress</option>
                        <option value="Pegasus">Pegasus</option>
                        <option value="AnadoluJet">AnadoluJet</option>
                    </select>

                    <button className='ara-buton' onClick={handleAraClick}>Ara</button>

                    <div>
                        <h3>Filtrelenmiş Uçuşlar</h3>
                        <ul>
                            {filteredFlights.length === 0 ? (
                                <li>Uygun uçuş bulunamadı.</li>
                            ) : (
                                filteredFlights.map((flight, index) => (
                                    <li key={index}>
                                        {flight.kalkisYeri} - {flight.varisYeri}, Tarih: {flight.tarih}, Saat: {flight.saat}, Havayolu: {flight.havayolu},Ücret: {flight.ücret}
                                        <ul>
                                            {Object.entries(flight.koltuklar).map(([koltuk, durum]) => (
                                                durum === 'Boş' ? (
                                                    <li key={koltuk}>
                                                        <button onClick={() => handleSeatSelect(flight, koltuk)}>
                                                            Koltuk {koltuk} Seç
                                                        </button>
                                                    </li>
                                                ) : null
                                            ))}
                                        </ul>
                                    </li>
                                ))
                            )}
                        </ul>

                        {yon === 'gidis_gelis' && (
                            <div>
                                <h3>Filtrelenmiş Dönüş Uçuşları</h3>
                                <ul>
                                    {filteredReturnFlights.length === 0 ? (
                                        <li>Uygun dönüş uçuşu bulunamadı.</li>
                                    ) : (
                                        filteredReturnFlights.map((flight, index) => (
                                            <li key={index}>
                                                {flight.kalkisYeri} - {flight.varisYeri}, Tarih: {flight.tarih}, Saat: {flight.saat}, Havayolu: {flight.havayolu},Ücret: {flight.ücret}
                                                <ul>
                                                    {Object.entries(flight.koltuklar).map(([koltuk, durum]) => (
                                                        durum === 'Boş' ? (
                                                            <li key={koltuk}>
                                                                <button onClick={() => handleSeatSelect(flight, koltuk)}>
                                                                    Koltuk {koltuk} Seç
                                                                </button>
                                                            </li>
                                                        ) : null
                                                    ))}
                                                </ul>
                                            </li>
                                        ))
                                    )}
                                </ul>
                            </div>
                        )}
                        <Link to="/Odeme">Onayla</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Booking;
