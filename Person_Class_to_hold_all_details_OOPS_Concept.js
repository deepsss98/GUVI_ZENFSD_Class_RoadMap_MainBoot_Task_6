class Person{
    constructor(name,age,gender,marital_status,Contact_details,Educational_qualification,fav_color,
    fav_food,fav_sub){
     this.name=name;
     this.age=age;
     this.gender=gender;
     this.marital_status=marital_status;
     this.Contact_details=Contact_details;
     this.Educational_qualification=Educational_qualification;
     this.fav_color=fav_color;
     this.fav_food=fav_food;
     this.fav_sub=fav_sub;
    }
}
var x=new Person('Deepika',24,'Female','Unmarried',{"address":"No.1 XYZ Flat Virugambakam","district":"Chennai","state":"TamilNadu","country":"India","pincode":620000,"phone_number": 8771234567,"Email_id":"aaa@gmail.com"},{"School":{"SSLC":{"School_Name":"St.Joseph's Convent","Percentage":"94%"},"12th":{"School_Name":"St.Joseph's Convent","Percentage":"89%"}},
 "College":{"Bachelor Of Engineering":{"College_Name":"Vel Tech Multi Tech","Department":"Computer and Science","Percentage":"80%"}}},
['Blue','Black'],{"Break_fast":["Dosa","Chapathi"],"Lunch":["Briyani","Curd Rice"],"Dinner":["Noodles","Fried_Rice"]},['Maths','Science']);

console.log(x);



