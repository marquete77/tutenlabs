import React, {useEffect, useState} from 'react';
import Tables from "../../../../../components/tables/tables";
import {Button} from "primereact/button";
import {useDispatch, useSelector} from "react-redux";
import {finishLoading, startLoading} from "../../../../../actions/ui";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {BookingServices} from "../../../../../api/booking.services";
import {InputNumber} from "primereact/inputnumber";
import {Dropdown} from "primereact/dropdown";
import moment from "moment";

const ListScreen = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [copyData, setCopyData] = useState([]);
    const {loading} = useSelector(state => state.ui);
    const [apiResp, setApiResp] = useState(false);

    const [filters, setFilters] = useState({
        price: null,
        id: null,
        signGroup: ''
    });
    const {price, id, signGroup} = filters;

    const signFilter = [
        {sing: 'Todo', value: ' '},
        {sing: '= Igual que', value: '=='},
        {sing: '< Menor que', value: '<'},
        {sing: '> Mayor que', value: '>'},
        {sing: '>= Mayor igual que', value: '>='},
        {sing: '<= Menor igual que', value: '<='},
    ]

    const columns = [
        {field: 'bookingId', header: 'BookingId', class: 'name-column'},
        {field: 'client', header: 'Cliente', class: ''},
        {field: 'bookingTime', header: 'Fecha de Creación', class: ''},
        {field: 'streetAddress', header: 'Dirección', class: ''},
        {field: 'bookingPrice', header: 'Precio', class: ''},
    ];

    // get services list
    useEffect(() => {
        let mounted = true;
        if (mounted) {
            dispatch(startLoading());
            BookingServices.getListBooking().then(response => {
                if (response.length > 0) {
                    let respMap = response.map(ele => {
                        return {
                            bookingId: ele.bookingId,
                            client: ele.tutenUserClient.firstName + ' ' + ele.tutenUserClient.lastName,
                            bookingTime: moment(ele.bookingTime).format("DD-MM-YYYY, HH:mm"),
                            streetAddress: ele.locationId.streetAddress,
                            bookingPrice: ele.bookingPrice
                        }
                    });
                    setCopyData(respMap);
                    setData(respMap);
                    setApiResp(true)
                    dispatch(finishLoading());
                } else {
                    setApiResp(false);
                    dispatch(finishLoading());
                }
            });
        }
        return () => {
            mounted = false;
        }
    }, [dispatch])

    const handlerFilterPrice = (e) => {
        e.preventDefault();
        setFilters({
            ...filters,
            price: e.value
        })
    };

    const handlerFilterid = (e) => {
        e.preventDefault();
        setFilters({
            ...filters,
            id: e.value
        })
    };

    const onChangeSing = (e) => {
        e.preventDefault();
        setFilters({
            ...filters,
            signGroup: e.value
        })
    };

    const handleFilter = () => {
        if (filters.id != null) {
            let filtered = copyData.filter(ele => {
                return ele.bookingId === filters.id
            });
            setData(filtered);
        }
        if (filters.price != null && filters.id != null) {
            let filtered1 = null;
            switch (filters.signGroup) {
                case '==':
                    filtered1 = copyData.filter(ele => {
                        return ele.bookingPrice === filters.price &&
                            ele.bookingId === filters.id;
                    });
                    setData(filtered1);
                    break;
                case '<':
                    filtered1 = copyData.filter(ele => {
                        return ele.bookingPrice < filters.price &&
                            ele.bookingId === filters.id;
                    });
                    setData(filtered1);
                    break;
                case '>':
                    filtered1 = copyData.filter(ele => {
                        return ele.bookingPrice > filters.price &&
                            ele.bookingId === filters.id;
                    });
                    setData(filtered1);
                    break;
                case '>=':
                    filtered1 = copyData.filter(ele => {
                        return ele.bookingPrice >= filters.price &&
                            ele.bookingId === filters.id;
                    });
                    setData(filtered1);
                    break;
                case '<=':
                    filtered1 = copyData.filter(ele => {
                        return ele.bookingPrice <= filters.price &&
                            ele.bookingId === filters.id;
                    });
                    setData(filtered1);
                    break;
                case '':
                    setData(copyData);
                    break;
                default:
                    break;

            }
        } else if (filters.price != null) {
            let filtered1 = null;
            switch (filters.signGroup) {
                case '==':
                    filtered1 = copyData.filter(ele => {
                        return ele.bookingPrice === filters.price
                    });
                    setData(filtered1);
                    break;
                case '<':
                    filtered1 = copyData.filter(ele => {
                        return ele.bookingPrice < filters.price
                    });
                    setData(filtered1);
                    break;
                case '>':
                    filtered1 = copyData.filter(ele => {
                        return ele.bookingPrice > filters.price
                    });
                    setData(filtered1);
                    break;
                case '>=':
                    filtered1 = copyData.filter(ele => {
                        return ele.bookingPrice >= filters.price
                    });
                    setData(filtered1);
                    break;
                case '<=':
                    filtered1 = copyData.filter(ele => {
                        return ele.bookingPrice <= filters.price
                    });
                    setData(filtered1);
                    break;
                case '':
                    setData(copyData);
                    break;
                default:
                    break;

            }
        }

    };

    const handleCleanFilter = () => {
        setFilters({
            price: null,
            id: null,
            signGroup: ''
        })
    }


    const options =
        <React.Fragment>
            <Button icon="pi pi-pencil" className="p-button-rounded p-button-info p-mr-2" onClick={() => {}}/>
            <Button icon="pi pi-trash" className="p-button-rounded p-button-danger"/>
        </React.Fragment>

    return (
        <>
            <div className="header-view">
                <div className="top-section__header-view">
                    <Button
                        disabled={loading}
                        className="btn-success__header-view"
                        label="Filtrar"
                        onClick={handleFilter}
                    />
                </div>
                <div className="bottom-section__header-view">
                    <span className="p-float-label">
                        <InputNumber inputId="integeronly" onValueChange={handlerFilterid} value={id}/>
                        <label htmlFor="username">Introduzca el id</label>
                    </span>

                    <span className="p-float-label">
                    <Dropdown value={signGroup} options={signFilter} onChange={onChangeSing} optionLabel="sing" />
                        {
                            signFilter !== null ?
                                <label htmlFor="username">Seleccione filtrado</label> :
                                ''
                        }
                    </span>
                    <span className="p-float-label">
                        <InputNumber inputId="currency-us" onValueChange={handlerFilterPrice} value={price} mode="currency" currency="USD" locale="en-US"/>
                        <label htmlFor="username">Introduzca el precio</label>
                    </span>

                    <Button
                        disabled={loading}
                        className="p-button-secondary"
                        label="Limpiar Filtros"
                        onClick={handleCleanFilter}
                    />
                </div>
            </div>

            <div className="content-view">
                {
                    apiResp ?
                        <Tables data={data} columns={columns} heightTable={'500px'} options={options}/>
                        :
                        <div className="not-found-info">
                            <FontAwesomeIcon className="icon" icon={"exclamation-triangle"}/>
                            <span>No se encontró información</span>
                        </div>
                }
            </div>
        </>
    );
};

export default ListScreen;
