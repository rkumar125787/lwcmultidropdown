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
            { label: 'Approved1', value: 'Approved1' },
            { label: 'Closed1', value: 'closed1' },
            { label: 'New2', value: 'new2' },
            { label: 'Started3', value: 'Started3' },
            { label: 'In Progress3', value: 'inProgress3' },
            { label: 'Pending-Approval3', value: 'Pending3' },
            { label: 'Approved3', value: 'Approved3' },
            { label: 'Closed3', value: 'closed3' },
            { label: 'New4', value: 'new4' },
            { label: 'Started5', value: 'Started5' },
            { label: 'In Progress6', value: 'inProgress7' },
            { label: 'Pending-Approval8', value: 'Pending9' },
            { label: 'Approved5', value: 'Approved5' },
            { label: 'Closed5', value: 'closed5' }

        ];
    }
}