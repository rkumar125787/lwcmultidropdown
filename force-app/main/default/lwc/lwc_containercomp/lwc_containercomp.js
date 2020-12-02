import { LightningElement } from 'lwc';

export default class Lwc_containercomp extends LightningElement {
    handleSelect(evt) {
        const detail = evt.detail;
        console.log('JSData==>' + JSON.stringify(detail));
    }
    get options() {
        return [
            { label: 'New1', value: 'new1' },
            { label: 'Started1', value: 'Started1' },
            { label: 'In Progress1', value: 'inProgress1' },
            { label: 'Pending-Approval1', value: 'Pending1' },
            { label: 'Approved1', value: 'Approved1' }
        ];
    }
    handlSelectedvalue(event) {
        try {
            let eventDetail = event.detail;
            console.log('JSON:::' + JSON.stringify(eventDetail));
        }
        catch (err) {
            // alert('err' + JSON.stringify(err));
        }
    }
}