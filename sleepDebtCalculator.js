const getSleepHours = day => {
    
  switch(day){
    case 'monday':
      return 12
      break;
    case 'tuesday':
      return 12
      break;
      case 'wednesday':
      return 8
      break;
    case 'thursday':
      return 5
      break;
    case 'friday':
      return 7
      break;
    case 'saturday':
      return 9
      break;
    case 'sunday':
      return 5
      break;
      }
}

const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday') 
  
const getIdealSleepHours = () => {
  const idealHours = 8  
    return idealHours * 7;
  }

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

if(actualSleepHours === idealSleepHours){
 console.log('You got the perfect amount of sleep!');
} 
  else if(actualSleepHours > idealSleepHours) {
  console.log('You got more sleep than you need! You slept ' + (actualSleepHours - idealSleepHours) + ' hours more than you should have this week.');
} 
  else if(actualSleepHours < idealSleepHours) {
  console.log('You should get some rest! You slept ' + (idealSleepHours - actualSleepHours) + ' more hours than you should have this week.');
} 
  else {
  console.log('We had an error calculating your Sleep Debt.');
}
}

calculateSleepDebt();