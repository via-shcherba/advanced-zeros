module.exports = function getZerosCount(number, base) {
	let sumzero;
	/* get max divider */
	let max = 2;	
	for(let i = 2; i<= base;i++){
		if(base % i == 0){
			while(base % i == 0){
				base /= i;
				if(i>max) max = i;
			}									
		}		
	}
	/* get sum zeros */
	sumzero = Math.floor(number / max);
	let rate = max;
	while(rate < number){
		rate *= max;
		if(rate <= number){
			sumzero += Math.floor(number / rate);
		}		
	}	
	return sumzero;
}