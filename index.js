var mppts = [
    {
        Vendor : "Adrian",
        Rating : 3000,
        Quantity : 20,
        Insolation : 4.5,
        Efficiency : 80,
        losses : (3000*20*4.5*0.8)/1000
    },{
        Vendor : "Delta",
        Rating : 3000,
        Quantity : 20,
        Insolation : 4.5,
        Efficiency : 80,
        losses : (3000*20*4.5*0.8)/1000
      
    },{
        Vendor : "Extra Dimensions",
        Rating : 2700,
        Quantity : 52,
        Insolation : 4.5,
        Efficiency : 80,
        losses : (2700*20*4.5*0.8)/1000
      
    },{
        Vendor : "Huawei",
        Rating : 4000,
        Quantity : 20,
        Insolation : 4.5,
        Efficiency : 80,
        losses : (4000*20*4.5*0.8)/1000
        
    },
];

var button = document.getElementById('btn');
console.log(button);

let vendaDetails =  ()=>{
        var vendorName = document.getElementById('userInput');
        console.log(vendorName.value);
        // filter array elements based on user selection
        var feedback = mppts.filter((item) =>{
            return item.Vendor === vendorName.value ;
        });

        console.log(feedback); // test the output on console

        // create a list based on user selection and append to the div
        if(vendorName.value === 'Adrian'){
                var vendorList = document.getElementById('vendorList');
                vendorList.innerHTML = ""
                let filteredVendor = document.createElement('li');
                filteredVendor.innerHTML = feedback[0].Vendor;
                vendorList.appendChild(filteredVendor);
        }else if(vendorName.value === 'Delta'){
                var vendorList = document.getElementById('vendorList');
                vendorList.innerHTML = ""
                let filteredVendor = document.createElement('li');
                filteredVendor.innerHTML = feedback[0].Vendor;
                vendorList.appendChild(filteredVendor);
            
        }else if(vendorName.value === 'Extra Dimensions'){
                var vendorList = document.getElementById('vendorList');
                vendorList.innerHTML = ""
                let filteredVendor = document.createElement('li');
                filteredVendor.innerHTML = feedback[0].Vendor;
                vendorList.appendChild(filteredVendor);
        }else if(vendorName.value === 'Huawei'){
                var vendorList = document.getElementById('vendorList');
                vendorList.innerHTML = ""
                let filteredVendor = document.createElement('li');
                filteredVendor.innerHTML = feedback[0].Vendor;
                vendorList.appendChild(filteredVendor);
        }else if(vendorName.value === 'All'){
                var vendorList = document.getElementById('vendorList');
                vendorList.innerHTML = ""
                let filteredVendor = document.createElement('li');
                filteredVendor.innerHTML = vendorName.value;
                vendorList.appendChild(filteredVendor);
        }else{
            alert('You have to select a vendor')
        };

        
        
        // filteredVendor.innerHTML = feedback[0].Vendor;

        // Storing the mathematical parameters
        var rating = feedback[0].Rating;
        var quantity = feedback[0].Quantity;
        var insolation = feedback[0].Insolation;
        var efficiency = feedback[0].Efficiency;

        let loss = (rating * quantity * insolation * efficiency)/100000 ;

        console.log(loss);

        

        //creating a table.

        function buildTable(data){
            var table =document.getElementById('myTable');
                 // function to fetch all vendor details
                

                    for(let i =0; i<feedback.length; i++){
                        var row = `<tr>
                                        <td>${data[i].Vendor}</td>
                                        <td>${data[i].Rating}</td>
                                        <td>${data[i].Quantity}</td>
                                        <td>${data[i].Insolation}</td>
                                        <td>${data[i].Efficiency}</td>
                                        <td>${loss}</td>
                                    </tr>`
                        table.innerHTML = row;
                    }
                }

        buildTable(feedback);
    }


            // function to fetch all vendor details
            var allVendors = ()=>{
                // get user selection/input
                var vendorName = document.getElementById('userInput');
                // get the table body
                var table =document.getElementById('myTable');
                var compareWith = 'All'
                // console.log(vendorName.value)
                // check whether user selection is All
                console.log(vendorName.value === compareWith);
        
                if(vendorName.value === compareWith){
                    console.log('Hello James'); //testing output on console
                    table.innerHTML = "";
                    var vendorData = mppts.map((vendors)=>{ // iterates through array mppts and returns all elements
                        return ( vendors)
                        
                    });
        
                    console.log(vendorData); // testing output on console
                    console.log(vendorData.length) // checking the length of the console
        
                    // loop through all the elements and print all properties' values to table data of table of html
                    for(let i =0; i<vendorData.length; i++){
                        var row = `<tr>
                                        <td>${vendorData[i].Vendor}</td>
                                        <td>${vendorData[i].Rating}</td>
                                        <td>${vendorData[i].Quantity}</td>
                                        <td>${vendorData[i].Insolation}</td>
                                        <td>${vendorData[i].Efficiency}</td>
                                        <td>${vendorData[i].losses}</td>
                                    </tr>`
                        table.innerHTML+= row;
                    }
                };
            }
            allVendors();

    
    






