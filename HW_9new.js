const company = {
    name: "BigOne",
    type:"Main company",
    platform: "ticket sales platform",
    sellsSolution:"ticketing solution",
    clients: [
      {
        name: "Client 1",
        type: "subCompany",
        uses: "ticketing software",
        sells: "ticketing solution",
        partners: [
          {
            name: "Client 1.1",
            type: "subSubCompany",
            uses: "ticketing solution",
            sells: "ticketing solution",
          },
          {
            name: "Client 1.2",
            type: "subSubCompany",
            uses:  "ticketing solution",
            sells: "ticketing solution",
            partners: [
              {
                name: "Client 1.2.3",
                type: "subSubCompany",
                uses: "ticketing solution",
                sells: "ticketing solution",
              }
            ]
          }
        ]
      },
      {
        name: "Client 2",
        type: "subCompany",
        uses: "ticketing software",
        sells:"ticketing solution"
      }
    ]
  }
      function findValueByKey(companyName){
          let i = 0
          let k = 0
          if(company.name === companyName){
            console.log(company)
            return company
          } else {
                  for(i = 0; i< company.clients.length; i++){
                      if(company.clients[i].name == companyName){
                      console.log(company.clients[i])
                        return company.clients[i]
                      } else { 
                          let subArr = (company.clients[i]) 
                          for (var prop in subArr ){
                              if(subArr[prop] == subArr.partners){
                                  for(let element of subArr.partners ){
                                     if(element.name == companyName){
                                           console.log(element)
                                           return element
                                      } else{
                                            let subsubArr = element
                                              for(var prop in subsubArr){
                                                  if(subsubArr[prop] == subsubArr.partners){
                                                      for(let newElement of subsubArr.partners){
                                                          if(newElement.name == companyName){
                                                               console.log(newElement)
                                                               return newElement 
                                                          }         
                                                      }
                                                  }
                                              }
                                      }
                                  }
                              }
                          } 
                     }        
                 }                    
          }
      }  
       findValueByKey("BigOne")
      // findValueByKey("Client 1")
      //   findValueByKey("Client 1.1")
      //     findValueByKey("Client 1.2")
      //      findValueByKey("Client 1.1.3")
      //       findValueByKey("Client 2")
         