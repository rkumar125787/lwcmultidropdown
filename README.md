# LWC Multiselect dropdown with Search and select All 

## How to use 
  <c-lwc_multidropdown choice={options} issearchenabled onselect={handlSelectedvalue} filedwidth="260"
        valueseprtr="#">
    </c-lwc_multidropdown>
 Note : Look for LWC @api specification for more configuration 
 Refer this link for functionality snippet : https://github.com/rkumar125787/lwcmultidropdown/issues/1
 ## Consideration 
   1. There may be CSS Impact (like positioning width etc ::) >> Please correct and use as per needs 
   2. Look for each API specification for more configuration
   3. options must be in this format[{label:'',value:''}]
   4. Return value will be concatenated string separated by valueseprtr
   5. Client should handle onselect event for stroing the value .
   6. Last but not least modify the changes based on your needs :) 
   7. As of now value selection is based on label but can be modified to ahve based on value as well .
 ## Future Work 
1. With Label -- In Progress 
2. Making Field Required -- In Progress 
3. Return Value in Form of Array -- In progress

## Using Repo :
1. Clone the repo configure your options and handler before calling #lwc_multidropdown cmp.
2. Deploy the cmp and dependency 
    
