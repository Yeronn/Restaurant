import { Button } from "./Button"
import { Input } from "./Input"
import './DeliveryOption.css'

export function DeliveryOption({deliveryOption, mapPinButton, mapMessageButton,idData,addressList}){
    return(
        <article className={`${deliveryOption}`}>
            <Button>
                <div>
                    <p><span>{mapPinButton}</span></p>
                    <p>{mapMessageButton}</p>
                </div>
            </Button>
            <datalist id={idData}>
                {
                    addressList.map(({ addressItem }) => (
                        <option key={addressItem} value={`${addressItem}`}></option>
                    ))
                }
            </datalist>
            <Input list={'address'} required={true} pHolder={'Dirección de entrega'} />
            <Input typeInput={'text'} pHolder={'Indicaciones de entrega'} />
            <Input typeInput={'submit'} value={'Usar dirección'} />
        </article>
    )
}