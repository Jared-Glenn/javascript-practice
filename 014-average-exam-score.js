function main() {
    var exam1 = parseInt(readLine(), 10);
    var exam2 = parseInt(readLine(), 10);
    var exam3 = parseInt(readLine(), 10);
    
    console.log(Exams.average(exam1,exam2,exam3));
    
}
class Exams{
    //your code goes here
    static average(a, b, c){
        return Math.round((a + b + c)/3);
    }
    
}
