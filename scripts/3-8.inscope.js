const inScopeServices = [
    {
        "id": "aws00x0151",
        "question": "A financial services company needs to develop a system that reacts to events in real-time. These events include processing stock trade notifications, updating customer portfolios, and triggering alerts based on market changes. The company wants a fully managed service that can route these events to different AWS services like Lambda, SNS, and SQS for further processing. They require a solution that supports rule-based event filtering and transformation to ensure only relevant events are processed by each target service. Which AWS service should the company use to meet these requirements?",
        "options": {
            "A": "AWS Step Functions",
            "B": "Amazon MQ",
            "C": "Amazon EventBridge",
            "D": "Amazon Simple Workflow Service (SWF)"
        },
        "correctAnswer": "C",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.8 Identify services from other in-scope AWS service categories",
        "justification": "Amazon EventBridge is the ideal solution for the financial services company as it provides a fully managed event bus service that makes it easy to connect applications using data from various sources. EventBridge supports rule-based event filtering and transformation, allowing the company to route stock trade notifications, portfolio updates, and market alerts to different AWS services such as Lambda, SNS, and SQS for real-time processing. This ensures efficient and scalable event-driven architecture without the need to manage the underlying infrastructure."
    },
    {
        "id": "aws00x0152",
        "question": "A large e-commerce company wants to implement a system that notifies customers about their order status changes, such as when an order is placed, shipped, and delivered. The notifications need to be sent via email and SMS to ensure customers receive timely updates. They want a service that can handle a high volume of messages and deliver them to multiple subscribers simultaneously, regardless of the protocol. Which AWS service should the company use to meet these requirements?",
        "options": {
            "A": "Amazon SQS",
            "B": "AWS Lambda",
            "C": "Amazon SNS",
            "D": "Amazon Kinesis"
        },
        "correctAnswer": "C",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.8 Identify services from other in-scope AWS service categories",
        "justification": "Amazon SNS (Simple Notification Service) is the right choice for the e-commerce company. SNS is a fully managed messaging service that allows you to send messages to multiple subscribers over different protocols such as email, SMS, and HTTP/HTTPS. This ensures that customers receive timely updates on their order status, and the service can handle a high volume of messages efficiently."
    },
    {
        "id": "aws00x0153",
        "question": "A financial services company processes a high volume of transactions and wants to ensure that each transaction is processed reliably and in the correct order. They need a service that can handle queuing messages between distributed components of their application, ensuring that messages are not lost, and that no message is processed more than once. The service should also be able to handle varying loads without requiring the company to manage the underlying infrastructure. Which AWS service should the company use to meet these requirements?",
        "options": {
            "A": "Amazon SNS",
            "B": "Amazon Kinesis",
            "C": "Amazon SQS",
            "D": "AWS Lambda"
        },
        "correctAnswer": "C",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.8 Identify services from other in-scope AWS service categories",
        "justification": "Amazon SQS (Simple Queue Service) is the appropriate service for this scenario. SQS is a fully managed message queuing service that enables reliable communication between distributed components of an application. It ensures that messages are processed in the correct order, handles varying loads, and prevents message loss or duplication. This makes it ideal for processing high volumes of transactions in a financial services application."
    },
    {
        "id": "aws00x0154",
        "question": "A software development company has adopted a microservices architecture for their application, with each microservice responsible for a specific function. They want to ensure that communication between these microservices is efficient, reliable, and isolated to prevent any service disruptions. Additionally, they need a solution that can scale seamlessly with their growing workload. Which AWS service should the company use to facilitate communication between their microservices while maintaining isolation?",
        "options": {
            "A": "Amazon SQS",
            "B": "Amazon SNS",
            "C": "AWS Step Functions",
            "D": "Amazon API Gateway"
        },
        "correctAnswer": "A",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.8 Identify services from other in-scope AWS service categories",
        "justification": "Amazon SQS (Simple Queue Service) is the suitable choice for this scenario. SQS enables decoupling between microservices by providing a reliable message queuing service. Each microservice can independently send and receive messages from a queue, ensuring isolation between services. Additionally, SQS automatically scales to accommodate varying workloads, making it an ideal solution for microservices architectures."
    },
    {
        "id": "aws00x0155",
        "question": "A digital marketing company wants to streamline its process of sending welcome emails to new subscribers who sign up for their newsletters. They are looking for a simple and cost-effective solution that can handle this task efficiently. Which AWS service would be the most suitable choice for accomplishing this task?",
        "options": {
            "A": "Amazon Simple Notification Service (Amazon SNS)",
            "B": "Amazon Pinpoint",
            "C": "Amazon Simple Email Service (Amazon SES)",
            "D": "Amazon Simple Queue Service (Amazon SQS)"
        },
        "correctAnswer": "C",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.8 Identify services from other in-scope AWS service categories",
        "justification": "Amazon SES (Simple Email Service) is specifically designed to send bulk and transactional emails efficiently and cost-effectively. It provides a reliable infrastructure for sending emails, including welcome emails to new subscribers. With Amazon SES, the digital marketing company can easily integrate their application or system to send personalized welcome emails to subscribers without managing their own email servers or infrastructure."
    },
    {
        "id": "aws00x0156",
        "question": "A software development team is looking for a collaborative, cloud-based integrated development environment (IDE) to improve their workflow. They need a solution that allows multiple developers to work on the same codebase simultaneously, from different locations, without the need to install any local development tools. Which AWS service should they choose?",
        "options": {
            "A": "AWS CodeBuild",
            "B": "AWS CodeCommit",
            "C": "AWS Cloud9",
            "D": "AWS CodeDeploy"
        },
        "correctAnswer": "C",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.8 Identify services from other in-scope AWS service categories",
        "justification": "AWS Cloud9 is a cloud-based integrated development environment (IDE) that allows multiple developers to collaborate in real-time on the same codebase from different locations. It provides a fully managed environment with support for various programming languages, debugging tools, and serverless application development. This makes AWS Cloud9 the ideal choice for the development team to enhance their collaborative workflow without the need to install and configure local development tools."
    },
    {
        "id": "aws00x0157",
        "question": "A healthcare startup is developing a new web application that processes sensitive patient data and interfaces with multiple microservices for different functionalities, such as patient records, appointment scheduling, and billing. The team has noticed that some API requests are taking longer than expected, and they need to identify performance bottlenecks and troubleshoot issues across these microservices. Which AWS service should they use to trace and analyze the performance of their application?",
        "options": {
            "A": "Amazon CloudWatch",
            "B": "AWS X-Ray",
            "C": "AWS CloudTrail",
            "D": "Amazon QuickSight"
        },
        "correctAnswer": "B",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.8 Identify services from other in-scope AWS service categories",
        "justification": "AWS X-Ray is designed to help developers analyze and debug production, distributed applications, such as those built using a microservices architecture. It provides insights into how the application and its underlying services are performing, helps identify performance bottlenecks, and offers a detailed view of the latency distribution of requests. This makes AWS X-Ray the appropriate service for the healthcare startup to trace and analyze the performance of their web application and troubleshoot issues across its microservices."
    },
    {
        "id": "aws00x0158",
        "question": "A large educational institution is looking to provide its students with remote access to a variety of software applications, such as design tools, programming IDEs, and office suites. These applications need to run on both Windows and Linux environments, and students should be able to access them from any device without the need for high-performance hardware on their end. Additionally, the institution wants to avoid managing virtual desktops for each student and prefers a solution that allows students to stream the applications directly. Which AWS service should they choose?",
        "options": {
            "A": "Amazon WorkSpaces",
            "B": "AWS AppStream 2.0",
            "C": "AWS Lambda",
            "D": "Amazon EC2"
        },
        "correctAnswer": "B",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.8 Identify services from other in-scope AWS service categories",
        "justification": "AWS AppStream 2.0 is a fully managed application streaming service that allows users to stream desktop applications from AWS to any device running a web browser, without the need for high-performance local hardware. It supports both Windows and Linux applications and does not require managing virtual desktops, making it the ideal solution for the educational institution to provide students with remote access to software applications. Amazon WorkSpaces, on the other hand, is a fully managed, secure Desktop-as-a-Service (DaaS) solution that provides persistent virtual desktops, which would require managing and maintaining virtual desktops for each student, making it less suitable for this specific scenario."
    },
    {
        "id": "aws00x0159",
        "question": "A rapidly growing startup company needs to provide its remote employees with secure access to a desktop environment that includes pre-configured development tools, productivity software, and access to the company’s internal network. Employees need to have a persistent desktop environment that saves their changes and personal settings across sessions. The company also wants to ensure that the data remains secure and compliant with industry standards, and they prefer a solution that minimizes the administrative overhead of managing physical hardware. Which AWS service should they choose?",
        "options": {
            "A": "Amazon WorkSpaces",
            "B": "AWS AppStream 2.0",
            "C": "Amazon EC2",
            "D": "AWS Lambda"
        },
        "correctAnswer": "A",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.8 Identify services from other in-scope AWS service categories",
        "justification": "Amazon WorkSpaces is a fully managed, secure Desktop-as-a-Service (DaaS) solution that provides persistent virtual desktops. This service allows employees to have their own personal desktop environment where changes and personal settings are saved across sessions, which is ideal for a remote workforce. Amazon WorkSpaces also ensures that data remains secure and compliant with industry standards, minimizing the administrative overhead associated with managing physical hardware. In contrast, AWS AppStream 2.0 is focused on streaming applications rather than providing a full persistent desktop environment, making WorkSpaces the more appropriate choice for this scenario."
    },
    {
        "id": "aws00x0160",
        "question": "A startup is developing a new mobile app and needs a set of services to quickly build, deploy, and scale their application. They want to enable rapid development with features like authentication, real-time data, and offline capabilities. The team also wants to ensure seamless integration with a variety of backend services without having to manage the infrastructure themselves. Which AWS service should they choose to meet these requirements?",
        "options": {
            "A": "Amazon EC2",
            "B": "AWS Amplify",
            "C": "AWS Lambda",
            "D": "Amazon S3"
        },
        "correctAnswer": "B",
        "domain": "Cloud Technology and Services",
        "subDomain": "3.8 Identify services from other in-scope AWS service categories",
        "justification": "AWS Amplify is a comprehensive suite of tools and services specifically designed for building scalable mobile and web applications. It simplifies the process of integrating features like authentication, real-time data, and offline capabilities into your app. Amplify also provides a managed backend infrastructure, allowing developers to focus on building their application rather than managing servers. This makes it the ideal choice for the startup to quickly develop and scale their mobile app. In contrast, Amazon EC2, AWS Lambda, and Amazon S3 are more general-purpose services that would require more configuration and management to achieve the same outcomes."
    }
    
    
    
    
    
    
    
    
    
    
]