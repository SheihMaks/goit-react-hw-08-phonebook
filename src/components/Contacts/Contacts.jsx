import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactsList} from './Contacts.styled';
import { getFilter } from 'components/Redux/sliceContacts';
import { Spinner } from 'components/Spinner/Spinner';


export const Contacts=({contacts,onFetching})=>{
    const onFilter=useSelector(getFilter)

    const getContactsFiltered=()=>{
        const normalizedFilterName=onFilter.toLowerCase()
        return contacts.filter(el=> el.name.toLowerCase().includes(normalizedFilterName))
        }
        
    const contactsList = getContactsFiltered();

    return (<ContactsList>
        {onFetching && <Spinner/>}
        {contactsList.map((contact)=>{
            const{id,name,number}=contact;
            return (
            <ContactItem 
            key={id} 
            name={name}
            number={number}
            id={id}
            />)})}
    </ContactsList>)
}

Contacts.propTypes={
    contacts:PropTypes.array.isRequired,
    onFetching:PropTypes.bool.isRequired
}