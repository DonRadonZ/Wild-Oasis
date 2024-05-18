import { FocusEvent } from 'react';
import Form from '../../ui/Form/Form';
import FormRow from '../../ui/FormRow/FormRow';
import Input from '../../ui/Input/Input';
import Spinner from '../../ui/Spinner/Spinner';
import { useSettings } from "./useSettings";
import { useUpdateSetting } from './useUpdateSetting';
import { updateSetting } from '../../services/apiSettings';

function UpdateSettingsForm() {
  const {isLoading,
    settings: { 
       minBookingLength,
       maxBookingLength, 
       maxGuestsPerBooking, 
       breakfastPrice
    } = {},
  } = useSettings();
  const {isUpdating, updateSettings } = useUpdateSetting();

  if (isLoading) return <Spinner/>

  function handleUpdate(e: FocusEvent<HTMLInputElement, Element>, field) {
    const {value} = e.target;

    if(!value) return;
    updateSetting({[field]: value})
  }


  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input 
        type='number' 
        id='min-nights'
        disabled={isUpdating}
        defaultValue={minBookingLength} 
        onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input 
        type='number' 
        id='max-nights'
        disabled={isUpdating} 
        defaultValue={maxBookingLength}
        onBlur={(e) => handleUpdate(e, "maxBookingLength")} 
        />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input 
        type='number' 
        id='max-guests'
        disabled={isUpdating} 
        defaultValue={maxGuestsPerBooking}
        onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")} 
        />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input 
        type='number' 
        id='breakfast-price'
        disabled={isUpdating}  
        defaultValue={breakfastPrice}
        onBlur={(e) => handleUpdate(e, "breakfastPrice")} 
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;