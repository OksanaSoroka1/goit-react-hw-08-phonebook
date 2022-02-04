import axios from 'axios';

export async function postContact(contact) {
  try {
    const responce = await axios.post(`/contacts`, contact);
    return responce;
  } catch (error) {
    return error;
  }
}

export async function deleteContact(contactId) {
  try {
    const responce = await axios.delete(`/contacts/${contactId}`);
    return responce;
  } catch (error) {
    return error;
  }
}

export async function fetchContact() {
  try {
    const responce = await axios.get('/contacts');
    return responce;
  } catch (error) {
    return error;
  }
}
