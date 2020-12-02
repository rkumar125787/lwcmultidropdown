/**
 * Author:Rajesh Kumar,
 * Description : Multiselect dropdown with search
 */
import { LightningElement, api, track } from 'lwc';
import { isEmpty } from 'c/lwc_util';

export default class Lwc_multidropdown extends LightningElement {
	/**Begin API Specification */
	@api choice = '';
	@api uniqueid;
	@api options = [];
	@track selectedOptions = '--None--';
	@api label;
	@api value = '';
	@api filedwidth = '224';
	@api issearchenabled = false;
	@api valueseprtr = ';';
	/**End API Specification */

	/**Begin Local Props */
	@track openBox = false;
	@track orlist = [];
	@track isAll = false;
	@track isMultiSelect;
	/**End Local Props */

	connectedCallback() {
		this.prepareInitialdata();
		this.orlist = JSON.parse(JSON.stringify(this.options)); // prepare original list 
	}
	prepareInitialdata() {
		if (this.choice) {
			this.options = JSON.parse(JSON.stringify(this.choice));
		}
		let tempArray = this.value.split(this.valueseprtr);
		let preSelect = '';
		this.options.map((el) => {
			if (tempArray.includes(el.label)) {
				el.isSelected = true;
				preSelect = preSelect + this.valueseprtr + el.label;
			}
		});
		if (!isEmpty(preSelect)) {
			this.selectedOptions = preSelect.slice(1);
		}
		this.isMultiSelect = true;
	}


	handleMouseEnter() {
		this.openBox = !this.openBox;
		this.orlist = this.options;
	}

	handleSelection(event) {
		const selectedLabel = event.target.label;
		const selectedValue = event.target.checked;
		if (this.options) {
			//mark the selection is orig list
			this.options.forEach(function (option) {
				if (option.label === selectedLabel) {
					option.isSelected = selectedValue;
				}
			});
			this.prepareSelection('');
			this.isAll = this.checkAllflag(); // handle select all 
		}
	}

	//Handle New Search 	
	handleSearch(event) {
		let val = event.target.value.trim();
		let searchedData = [];
		if (!isEmpty(val)) { // if value is not empty :) 
			this.options.forEach(el => {
				let elval = el.label.toLowerCase().trim();
				if (elval.includes(val.toLowerCase())) {
					console.log('val2:::' + val);
					searchedData = [...searchedData, el];
				}
			})
		}
		this.orlist = searchedData.length > 0 ? searchedData : (!isEmpty(val) ? [] : this.options);
	}
	handeAll(event) {
		this.isAll = event.target.checked;
		this.options.forEach((option) => {
			option.isSelected = this.isAll;
		})
		this.prepareSelection('all');
	}

	prepareSelection(type) {
		let tickedOptions = '';
		if (type === 'all') {
			this.orlist = this.options;
		}
		this.options.forEach((option) => {
			if (option.isSelected) {
				tickedOptions += option.label + this.valueseprtr;
			}
		});
		this.selectedOptions = tickedOptions.slice(0, -1);
		if (!this.selectedOptions) {
			this.selectedOptions = '--None--';
		}
		const selectedRecordEvent = new CustomEvent('select', {
			detail: {
				selectedValue: this.selectedOptions == '--None--' ? '' : this.selectedOptions,
				uniqueid: this.uniqueid,
				uniquestring: this.uniquestring
			}
		});
		this.dispatchEvent(selectedRecordEvent);
	}
	checkAllflag() {
		let count = 0;
		this.options.forEach(el => {
			count = el.isSelected === true ? count : count + 1;
		})
		let bl = count === 0 ? true : false;
		return bl

	}
	/**Begin Getter and Setter */
	get checkSearch() {
		return this.issearchenabled && this.options.length > 0 ? true : false
	}
	get applyWidth() {
		return isEmpty(this.filedwidth) ? 'width:250px;' : (parseFloat(this.filedwidth) < 225 ? 'width:225px;' : `width:${this.filedwidth}px;`)
	}
	get multiSelectClassAttr() {
		return this.isMultiSelect ? ' slds-dropdown_length-5 slds-dropdown_fluid slds-dropdown_length-' + this.dropDownLength : '';
	}
	get iconlist() {
		return this.openBox ? 'utility:down' : 'utility:picklist_type';
	}
	/**End Getter and Setter */
}