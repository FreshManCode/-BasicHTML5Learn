
function isOridinayYear(year) {
    if ((year % 4 == 0 && year % 4 != 0)||(year % 400 ==0)) {
        console.log(year + '是闰年')
    } else  {
        console.log(year + '不是闰年')
    }
}

function caculateSum() {
    var  n = 1;
    var  result = 0;
    while ( n <= 100) {
        result = result + n
        n +=1
    }
    console.log('从1到100的和是:',result)
}

function salaryAdd(workAge) {
    var  salary = 100;
    if (workAge < 2) {
        salary =  salary * 0.05
        console.log('加薪5%')
    } else  if (workAge <= 4) {
        salary += salary * 0.1
        console.log('加薪10%')
    } else {
        salary += salary * 0.2
        console.log('加薪20%')
    }
}

function sumOfCannotDivideSeven() {
    var  n = 1;
    var  result = 0;
    while ( n <= 100) {
        if ( n % 7 == 0) {
            n +=1
            continue
        } else  {
            result = result + n
            n +=1
        }
    }
    console.log('不能被7证书的整数的和:',result)
}

function canDivideSeven() {
    var  n = 200;
    while ( n <= 300) {
        if ( n % 7 == 0) {
           break;
        }
        n += 1
    }
    console.log('200-300之间第一个能被7整除的数:',n)
}
