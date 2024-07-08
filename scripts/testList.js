function compileList(){

    // domain 1
    var benefits = Math.floor(Math.random() * benefitsOfCloudComputing.length); // 1.1

    var design = Math.floor(Math.random() * designPrinciplesOfCloud.length); // 1.2 

    var migrate = Math.floor(Math.random() * migrationToTheCloud.length); // 1.3

    var economics = Math.floor(Math.random() * understandingCloudEconomics.length);  // 1.4 


    //domain 2
    var responsibility = Math.floor(Math.random() * sharedResponsibilityModel.length); // 2.1

    var compliance = Math.floor(Math.random() * securityGovernanceCompliance.length); // 2.2

    var access = Math.floor(Math.random() * accessManagement.length); // 2.3

    var security = Math.floor(Math.random() * securityComponents.length); // 2.4


    // domain 3
    var deploy  = Math.floor(Math.random() * deployingAndOperatingInCloud.length); // 3.1

    var infrastructure = Math.floor(Math.random() * globalInfrastructure.length); // 3.2

    var compute = Math.floor(Math.random() * computerServices.length); // 3.3 

    var database = Math.floor(Math.random() * databaseServices.length); // 3.4

    var networking = Math.floor(Math.random() * networkingServices.length); // 3.5

    var storage = Math.floor(Math.random() * identifyStorageServices.length); // 3.6

    var AI = Math.floor(Math.random() * aiAndMLServices.length); // 3.7

    var scope = Math.floor(Math.random() * inScopeServices.length); // 3.8


    // domain 4

    var price = Math.floor(Math.random() * pricingModels.length); // 4.1

    var billing = Math.floor(Math.random() * billingAndCostManagement.length); // 4.2

    var support = Math.floor(Math.random() * supportServices.length); // 4.3





    var list = [];
    list.push(benefitsOfCloudComputing[benefits]); // 1.1
    list.push(designPrinciplesOfCloud[design]); // 1.2
    list.push(migrationToTheCloud[migrate]); // 1.3
    list.push(understandingCloudEconomics[economics]);  // 1.4

    list.push(sharedResponsibilityModel[responsibility]); // 2.1
    list.push(securityGovernanceCompliance[compliance]); // 2.2
    list.push(accessManagement[access]); // 2.3
    list.push(securityComponents[security]); // 2.4

    list.push(deployingAndOperatingInCloud[deploy]); // 3.1
    list.push(globalInfrastructure[infrastructure]); // 3.2
    list.push(computerServices[compute]); // 3.3
    list.push(databaseServices[database]); // 3.4
    list.push(networkingServices[networking]); // 3.5
    list.push(identifyStorageServices[storage]); // 3.6
    list.push(aiAndMLServices[AI]); // 3.7
    list.push(inScopeServices[scope]); // 3.8

    list.push(pricingModels[price]); // 4.1
    list.push(billingAndCostManagement[billing]); // 4.2
    list.push(supportServices[support]); // 4.3

    






    // console logging question item information and key-value pairs 

    // console.log("List length: " + list.length);
    // console.log("List items: " + list);
    // console.log("Zero index: " + list[0]);
    // console.log("Zero index: ID: " + list[0].id);
    // console.log("Zero index: Question: " + list[0].question);
    // console.log("Zero index: Options: " + list[0].options);
    // console.log("Zero index: Options A : " + list[0].options.A);
    // console.log("Zero index: Options B : " + list[0].options.B);
    // console.log("Zero index: Options C : " + list[0].options.C);
    // console.log("Zero index: Options D : " + list[0].options.D);
    // console.log("Zero index: Correct Answer : " + list[0].correctAnswer);
    // console.log("Zero index: Domain : " + list[0].domain);
    // console.log("Zero index: Sub Domain : " + list[0].subDomain);
    // console.log("Zero index: Justification : " + list[0].justification);


    // return list back to index.html to be rendered 
    return list;
}