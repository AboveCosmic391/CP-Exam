function compileList(){
    console.log("Benefits of cloud computing length: " + benefitsOfCloudComputing.length);
    console.log("Design Principles of the cloud length: " + designPrinciplesOfCloud.length);

    // domain 1
    var benefits = Math.floor(Math.random() * benefitsOfCloudComputing.length); // single benefit item

    var design = Math.floor(Math.random() * designPrinciplesOfCloud.length); // single design question 


    var list = [];
    list.push(benefitsOfCloudComputing[benefits]);
    list.push(designPrinciplesOfCloud[design]);
    console.log("List items: " + list);


    // var list = benefitsOfCloudComputing;
    return list;
}
//console.log(benefitsOfCloudComputing);