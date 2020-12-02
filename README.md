## How to use 
  <c-lwc_multidropdown choice={options} issearchenabled onselect={handlSelectedvalue} filedwidth="260"
        valueseprtr="#">
    </c-lwc_multidropdown>
 Note : Look for LWC @api specification for more configuration 
 Refer this link for functionality snippet : https://github.com/rkumar125787/lwcmultidropdown/issues/1
 ## Consideration 
   1. CSS may impact (like positioning width etc ::) >> Please correct and use as per needs 
   2. Look for each API specification to use in code 
   3. options must be in formation of [{label:'',value:''}]
   4. Return value would be concatenated string by valueseprtr
   5. Client should handle onselect event for stroing the value .
   6. Last but not least modify the changes based on your needs :) 
 ## Future Work 
1. With Label -- In Progress 
2. Making Field Required -- In Progress 
3. Return Value in Form of Array -- In progress

## Using Repo :
1. Clone the repo configure your options and handler before calling #lwc_multidropdown cmp.
2. Deploy the cmp and dependency 
    
