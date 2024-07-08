const computerServices = [
    {
        "id": "aws00x0100",
        "question": "An online gaming company is developing a new multiplayer game that requires high CPU performance for complex simulations and real-time interactions. The application needs to handle a large number of concurrent users with intensive compute operations.\n\nWhich EC2 instance class type should the company select to best meet the requirements of their application?",
        "options": {
            "A": "General Purpose",
            "B": "Storage Optimized",
            "C": "Memory Optimized",
            "D": "Compute Optimized",
            "E": "Accelerated Computing"
        },
        "correctAnswer": "D",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.3 Identify AWS compute services",
        "justification": "Compute Optimized instances are designed for applications that require high CPU performance for intensive compute operations. They are ideal for tasks such as complex simulations, high-performance web servers, and scientific modeling, which aligns with the requirements of the multiplayer game needing high CPU performance for real-time interactions.\n\n- General Purpose instances provide a balance of compute, memory, and networking resources but may not offer the level of CPU performance needed for this application.\n- Storage Optimized instances are designed for high, sequential read and write access to large datasets and are not focused on CPU performance.\n- Memory Optimized instances are ideal for applications that require large amounts of memory but are not primarily focused on CPU performance.\n- Accelerated Computing instances provide additional hardware acceleration using GPUs or FPGAs, which is useful for specific workloads like machine learning or graphics rendering, but not necessarily for CPU-intensive compute tasks."
    },
    {
        "id": "aws00x0101",
        "question": "A small e-commerce startup is launching its first web application and expects moderate traffic with typical web server workloads, including handling user requests, running databases, and processing transactions. The application requires a balanced mix of compute, memory, and networking resources to ensure smooth operation without incurring unnecessary costs.\n\nWhich EC2 instance class type should the startup select to best meet the requirements of their application?",
        "options": {
            "A": "General Purpose",
            "B": "Storage Optimized",
            "C": "Memory Optimized",
            "D": "Compute Optimized",
            "E": "Accelerated Computing"
        },
        "correctAnswer": "A",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.3 Identify AWS compute services",
        "justification": "General Purpose instances provide a balanced mix of compute, memory, and networking resources, making them suitable for a wide range of workloads. They are ideal for applications like web servers and small databases that require a balanced resource allocation, making them a cost-effective choice for the startup's web application.\n\n- Storage Optimized instances are designed for high, sequential read and write access to large datasets and are not focused on balanced resource allocation.\n- Memory Optimized instances are ideal for applications that require large amounts of memory but may not be cost-effective for balanced workloads.\n- Compute Optimized instances are designed for applications requiring high CPU performance, which might be overkill for the startup’s needs.\n- Accelerated Computing instances provide additional hardware acceleration using GPUs or FPGAs, which is not necessary for typical web server workloads."
    },
    {
        "id": "aws00x0102",
        "question": "A data analytics company is developing a new big data processing application that requires extensive memory to handle large datasets and perform complex analytics tasks efficiently. The application will be processing large volumes of data in-memory and running memory-intensive algorithms for data analysis.\n\nWhich EC2 instance class type should the company select to best meet the requirements of their application?",
        "options": {
            "A": "General Purpose",
            "B": "Storage Optimized",
            "C": "Memory Optimized",
            "D": "Compute Optimized",
            "E": "Accelerated Computing"
        },
        "correctAnswer": "C",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.3 Identify AWS compute services",
        "justification": "Memory Optimized instances are specifically designed for applications that require large amounts of memory. They offer a high memory-to-CPU ratio, making them ideal for memory-intensive workloads such as data analytics, in-memory databases, and real-time processing of large datasets. This makes Memory Optimized instances the best choice for the company's big data processing application, which requires extensive memory to handle large datasets and perform complex analytics tasks efficiently.\n\n- General Purpose instances provide a balanced mix of compute, memory, and networking resources but may not offer sufficient memory for memory-intensive workloads.\n- Storage Optimized instances are designed for high, sequential read and write access to large datasets and are not focused on memory-intensive applications.\n- Compute Optimized instances are designed for applications requiring high CPU performance but may not provide sufficient memory for the company's big data processing application.\n- Accelerated Computing instances provide additional hardware acceleration using GPUs or FPGAs, which is not specifically related to memory-intensive workloads."
    },
    {
        "id": "aws00x0103",
        "question": "A media streaming company is building a new platform for storing and delivering high-definition video content to users worldwide. The platform needs to handle large volumes of video data efficiently and provide fast, reliable access to content for streaming.\n\nWhich EC2 instance class type should the company select to best meet the requirements of their application?",
        "options": {
            "A": "General Purpose",
            "B": "Storage Optimized",
            "C": "Memory Optimized",
            "D": "Compute Optimized",
            "E": "Accelerated Computing"
        },
        "correctAnswer": "B",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.3 Identify AWS compute services",
        "justification": "Storage Optimized instances are specifically designed for workloads that require high, sequential read and write access to large datasets. These instances offer high storage capacity and throughput, making them ideal for applications like media streaming platforms that need to store and deliver large volumes of data efficiently. With Storage Optimized instances, the company can ensure fast and reliable access to video content for streaming, meeting the requirements of their application.\n\n- General Purpose instances provide a balanced mix of compute, memory, and networking resources but may not offer the storage capacity and throughput required for large-scale media streaming.\n- Memory Optimized instances are ideal for applications that require large amounts of memory but are not specifically optimized for high storage capacity and throughput.\n- Compute Optimized instances are designed for applications requiring high CPU performance but do not offer the storage capacity and throughput required for media streaming.\n- Accelerated Computing instances provide additional hardware acceleration using GPUs or FPGAs, which is not specifically related to storage-intensive workloads like media streaming."
    },
    {
        "id": "aws00x0104",
        "question": "A rapidly growing e-commerce company has been running its web application on a single Amazon EC2 instance. Recently, the company has been experiencing increased traffic and has noticed that the current instance is no longer able to handle the load efficiently. The company's operations team has been tasked with ensuring that the web application can scale to meet the demand without downtime.\n\nWhat is the most appropriate action the operations team should take to address the performance issues?",
        "options": {
            "A": "Launch additional EC2 instances to distribute the load",
            "B": "Manually upgrade the operating system on the current instance",
            "C": "Resize the current EC2 instance to a larger instance type",
            "D": "Reboot the current EC2 instance"
        },
        "correctAnswer": "C",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.3 Identify AWS compute services",
        "justification": "Resizing the current EC2 instance to a larger instance type is the most appropriate action to address the performance issues caused by increased traffic. This process, known as 'vertical scaling,' involves changing the instance type to one with more CPU, memory, and networking capacity to handle the additional load. AWS provides a straightforward way to stop the instance, change its instance type, and restart it without losing any data.\n\n- Launching additional EC2 instances to distribute the load (horizontal scaling) can also address the performance issues, but this approach might be more complex to implement quickly and may require configuring a load balancer.\n- Manually upgrading the operating system on the current instance does not directly address the performance issues related to resource limitations.\n- Rebooting the current EC2 instance is unlikely to resolve performance issues caused by insufficient resources and would result in temporary downtime without any long-term benefit."
    },
    {
        "id": "aws00x0105",
        "question": "A development team is creating a new serverless application to process images uploaded by users. The application needs to perform tasks such as resizing, cropping, and applying filters to the images. The team expects varying amounts of image uploads throughout the day, with peaks during certain hours. They want to ensure that the application can automatically scale to handle the load without managing any servers and only incur costs based on actual usage.\n\nWhich AWS service should the development team choose to best meet these requirements?",
        "options": {
            "A": "Amazon EC2",
            "B": "AWS Lambda",
            "C": "Amazon RDS",
            "D": "AWS Fargate"
        },
        "correctAnswer": "B",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.3 Identify AWS compute services",
        "justification": "AWS Lambda is a serverless compute service that allows the development team to run code in response to events without provisioning or managing servers. Lambda functions can automatically scale to handle varying amounts of image uploads, ensuring that the application can efficiently process images during peak times and reduce costs by only charging for actual usage. This makes AWS Lambda the ideal choice for the team's serverless image processing application.\n\n- Amazon EC2 requires managing and scaling servers manually, which does not align with the team's goal of avoiding server management and ensuring automatic scaling.\n- Amazon RDS is a managed database service and is not relevant to the compute requirements for image processing.\n- AWS Fargate is a serverless compute engine for containers, which can also simplify server management, but Lambda is more suitable for event-driven tasks like image processing where the team does not need to manage containers."
    },
    {
        "id": "aws00x0106",
        "question": "A financial services company is migrating its legacy monolithic application to the AWS Cloud. The application is being broken down into smaller, independent microservices to improve scalability, manageability, and development speed. Each microservice will handle specific tasks such as user authentication, transaction processing, and data analysis. The team wants to avoid the overhead of managing servers and ensure that each microservice can scale independently based on demand.\n\nWhich AWS service should the team use to deploy their microservices in the cloud?",
        "options": {
            "A": "Amazon EC2",
            "B": "Amazon RDS",
            "C": "AWS Lambda",
            "D": "AWS Fargate"
        },
        "correctAnswer": "C",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.3 Identify AWS compute services",
        "justification": "AWS Lambda is ideal for deploying microservices in a serverless architecture. It allows the team to run each microservice independently, with automatic scaling based on demand, without the need to manage underlying servers. This serverless model reduces operational overhead and enables each microservice to scale efficiently, making it the perfect choice for the financial services company's migration to the cloud.\n\n- Amazon EC2 requires managing and scaling servers manually, which adds complexity and overhead that the team wants to avoid.\n- Amazon RDS is a managed database service and is not relevant to the compute requirements for deploying microservices.\n- AWS Fargate is a serverless compute engine for containers and could be used for microservices, but AWS Lambda offers a more straightforward approach for event-driven, serverless microservices without the need to manage container orchestration."
    },
    {
        "id": "aws00x0107",
        "question": "A retail company is preparing for a major online sales event and expects a significant increase in website traffic during this period. They want to ensure that their website can handle the surge in traffic without experiencing performance degradation or downtime. Which AWS feature provides elasticity by automatically adjusting the number of compute resources based on workload demand?",
        "options": {
            "A": "Amazon S3",
            "B": "AWS Lambda",
            "C": "Auto Scaling",
            "D": "Amazon EC2"
        },
        "correctAnswer": "C",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.3 Identify AWS compute services",
        "justification": "Auto Scaling is a feature of AWS that automatically adjusts the number of compute resources based on workload demand. During peak periods, such as the retail company's online sales event, Auto Scaling can dynamically increase the number of EC2 instances to handle the surge in traffic, ensuring that the website remains responsive and available to users. This elasticity helps the company optimize performance and maintain a positive user experience during periods of high demand."
    },
    {
        "id": "aws00x0108",
        "question": "A media streaming company is experiencing an increase in traffic to its streaming platform due to the release of a highly anticipated movie. To ensure high availability and evenly distribute incoming traffic across multiple servers, which AWS service should the company use?",
        "options": {
            "A": "Amazon RDS",
            "B": "Amazon CloudFront",
            "C": "Amazon EC2",
            "D": "Elastic Load Balancing (ELB)"
        },
        "correctAnswer": "D",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.3 Identify AWS compute services",
        "justification": "Elastic Load Balancing (ELB) is a service provided by AWS that automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, to ensure high availability and fault tolerance. By using ELB, the media streaming company can evenly distribute incoming traffic across its servers, preventing any single server from becoming overwhelmed and ensuring a smooth streaming experience for its users during periods of increased demand."
    },
    {
        "id": "aws00x0109",
        "question": "What is the primary purpose of using a load balancer in a distributed computing environment?",
        "options": {
            "A": "To increase the speed of data processing",
            "B": "To improve fault tolerance and high availability",
            "C": "To encrypt data transmission",
            "D": "To optimize database queries"
        },
        "correctAnswer": "B",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.3 Identify AWS compute services",
        "justification": "The primary purpose of using a load balancer in a distributed computing environment is to improve fault tolerance and high availability. Load balancers distribute incoming traffic across multiple servers or instances, ensuring that no single server becomes overwhelmed and that the workload is evenly distributed. In the event of a server failure, the load balancer can redirect traffic to healthy servers, minimizing downtime and ensuring that the application remains available to users. This helps improve the overall reliability and resilience of the system."
    }
    
    
    
    
    
    
    
    
    
    
    
    
]