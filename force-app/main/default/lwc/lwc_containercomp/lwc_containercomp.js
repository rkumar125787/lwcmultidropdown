import { LightningElement } from 'lwc';

export default class Lwc_containercomp extends LightningElement {
    handleSelect(evt) {
        const detail = evt.detail;
        console.log('JSData==>' + JSON.stringify(detail));
    }
    get options() {
        return [
            { label: 'New', value: 'New' },
            { label: 'Waiting for Que', value: 'Waiting for Que' },
            { label: 'Assigned', value: 'Assigned' },
            { label: 'Pending', value: 'Pending' },
            { label: 'In Approval', value: 'In Approval' },
            { label: 'Approved', value: 'Approved' },
            { label: 'Closed', value: 'Closed' },
            { label: 'Cancelled', value: 'Cancelled' }
        ];
    }
    handlSelectedvalue(event) {
        try {
            let eventDetail = event.detail;
            console.log('return value:::' + JSON.stringify(eventDetail));
        }
        catch (err) {
        }
    }
}