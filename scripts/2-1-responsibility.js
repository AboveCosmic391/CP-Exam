const sharedResponsibilityModel = [
    {
        "id": "aws00x0032",
        "question": "Your company is planning to migrate its web application to AWS, and you are responsible for understanding the security implications. Your manager asks you to explain the AWS Shared Responsibility Model and identify which components of security AWS manages and which ones the customer is responsible for. In the context of the AWS Shared Responsibility Model, which of the following is the customer responsible for?",
        "options": {
            "A": "Physical security of the data centers",
            "B": "Patching the underlying infrastructure",
            "C": "Configuring network security groups",
            "D": "Managing the hardware infrastructure"
        },
        "correctAnswer": "C",
        "domain": "Security and Compliance",
        "subDomain": "Understand the Shared Responsibility Model",
        "justification": "Under the AWS Shared Responsibility Model, AWS is responsible for the security 'of' the cloud, which includes the physical security of data centers, managing the hardware infrastructure, and patching the underlying infrastructure. The customer is responsible for security 'in' the cloud, which involves configuring network security groups, managing their data, access management, and securing their applications. This model delineates the security tasks that are managed by AWS and those that need to be handled by the customer to ensure a secure environment."
    },
    {
        "id": "aws00x0033",
        "question": "Your organization is deploying a new application on AWS, and you are responsible for ensuring that the security measures align with the AWS Shared Responsibility Model. Your manager asks you to identify which security components AWS is responsible for managing. In the context of the AWS Shared Responsibility Model, which of the following is AWS responsible for?",
        "options": {
            "A": "Managing customer access to AWS resources",
            "B": "Encrypting data at rest within the application",
            "C": "Physical security of the data centers",
            "D": "Configuring IAM roles and policies"
        },
        "correctAnswer": "C",
        "domain": "Security and Compliance",
        "subDomain": "Understand the Shared Responsibility Model",
        "justification": "In the AWS Shared Responsibility Model, AWS is responsible for the security 'of' the cloud, which includes physical security of the data centers, hardware management, and maintaining the infrastructure that runs all the services offered in the AWS Cloud. This includes protecting the infrastructure from physical threats. On the other hand, customers are responsible for security 'in' the cloud, which includes managing customer access to AWS resources, encrypting data at rest and in transit, and configuring IAM roles and policies to control access to their applications and data."
    },
    {
        "id": "aws00x0034",
        "question": "A company recently experienced a security breach where their servers were hacked due to a vulnerability in the Linux distribution they used. After investigating, it was determined that the vulnerability could have been mitigated if the company had applied the latest security patches and updates. Why is the customer at fault for this security breach according to the AWS Shared Responsibility Model?",
        "options": {
            "A": "AWS is responsible for securing operating systems on EC2 instances",
            "B": "The customer is responsible for patching and updating their operating system",
            "C": "AWS should have monitored and updated the customer's operating system",
            "D": "The customer should not use open-source operating systems"
        },
        "correctAnswer": "B",
        "domain": "Security and Compliance",
        "subDomain": "Understand the Shared Responsibility Model",
        "justification": "According to the AWS Shared Responsibility Model, AWS is responsible for the security 'of' the cloud, which includes the infrastructure, physical security, and the services provided. However, the customer is responsible for the security 'in' the cloud, which involves managing their operating systems, applications, and data. This includes regularly patching and updating the operating system to protect against vulnerabilities. The breach occurred because the customer did not fulfill their responsibility to keep their operating system up to date, making them at fault for the security lapse."
    },
    {
        "id": "aws00x0035",
        "question": "A natural disaster has caused one of the availability zones your company uses to become unreachable. As a result, some of your applications and services are down. Your team needs to determine who is responsible for addressing the issue and restoring service. According to the AWS Shared Responsibility Model, who is responsible for fixing the unavailability of the affected zone and why?",
        "options": {
            "A": "The customer, because they need to configure multi-AZ deployments",
            "B": "AWS, because they manage the availability and reliability of the infrastructure",
            "C": "The customer, because they must manage disaster recovery planning",
            "D": "AWS, because they are responsible for customer data backups"
        },
        "correctAnswer": "B",
        "domain": "Security and Compliance",
        "subDomain": "Understand the Shared Responsibility Model",
        "justification": "Under the AWS Shared Responsibility Model, AWS is responsible for the availability and reliability of the infrastructure 'of' the cloud. This includes maintaining the physical infrastructure, data centers, and availability zones, and ensuring that they are resilient to failures and disasters. While customers are responsible for architecting their applications for high availability and disaster recovery (such as configuring multi-AZ deployments), AWS is responsible for addressing the availability of the zones themselves and restoring service in the event of a failure caused by a natural disaster."
    },
    {
        "id": "aws00x0036",
        "question": "Sensitive patient information was leaked at a healthcare organization. Upon investigation, it was discovered that lower-level staff, who did not need access to the sensitive information, had permissions in their IAM roles that allowed them to access the DynamoDB database where the patient data was stored. Who is responsible for the leaked data according to the AWS Shared Responsibility Model and why?",
        "options": {
            "A": "AWS, because they provide IAM as a service",
            "B": "The customer, because they are responsible for managing IAM permissions and policies",
            "C": "AWS, because they should have automatically restricted sensitive data access",
            "D": "The customer, because they should have used a different database service"
        },
        "correctAnswer": "B",
        "domain": "Security and Compliance",
        "subDomain": "Understand the Shared Responsibility Model",
        "justification": "According to the AWS Shared Responsibility Model, the customer is responsible for security 'in' the cloud, which includes managing their IAM roles, policies, and permissions. This means it is the customer's responsibility to ensure that only authorized personnel have access to sensitive data and to implement the principle of least privilege. AWS provides the tools and services (such as IAM) to manage access control, but it is up to the customer to configure and manage these settings properly to prevent unauthorized access. Therefore, the leak occurred due to improper IAM configuration, making the customer responsible for the incident."
    },
    {
        "id": "aws00x0037",
        "question": "Your company is evaluating different AWS services for a new application. The development team is considering using Amazon EC2, AWS Lambda, and Amazon RDS. The team needs to understand how the responsibilities for security and management differ among these services. Which statement correctly describes how responsibilities shift between AWS and the customer depending on the service used?",
        "options": {
            "A": "For Amazon EC2, AWS handles patching and security updates of the OS, while the customer manages scaling and availability.",
            "B": "For AWS Lambda, the customer is responsible for managing the underlying infrastructure, including server patching.",
            "C": "For Amazon RDS, AWS manages the underlying infrastructure, including database backups and software patching, while the customer manages the database schema and access control.",
            "D": "For all services, the customer is solely responsible for all security and management tasks."
        },
        "correctAnswer": "C",
        "domain": "Security and Compliance",
        "subDomain": "Understand the Shared Responsibility Model",
        "justification": "AWS responsibilities and customer responsibilities vary based on the service used. With Amazon EC2, the customer is responsible for managing the operating system, applications, and data, while AWS handles the infrastructure. For AWS Lambda, AWS manages the underlying infrastructure, including server patching and scaling, while the customer focuses on the code. With Amazon RDS, AWS takes care of the underlying infrastructure, including backups, patching, and maintenance of the database engine, while the customer manages the database schema, data, and access control. This illustrates how the shared responsibility model shifts depending on the level of abstraction and managed services provided by AWS."
    },
    {
        "id": "aws00x0038",
        "question": "Your company is planning to deploy a web application using AWS services. The team is considering using Amazon S3 for static content storage, Amazon EC2 for the web servers, and Amazon DynamoDB for the database. They need to understand how the responsibilities for security and management shift among these services. Which statement accurately describes how responsibilities differ between AWS and the customer for these services?",
        "options": {
            "A": "For Amazon S3, AWS is responsible for data encryption and access control policies.",
            "B": "For Amazon EC2, AWS manages the security configurations of the applications running on the instances.",
            "C": "For Amazon DynamoDB, AWS handles infrastructure management, including backups and scaling, while the customer manages data integrity and access control.",
            "D": "For all services, AWS manages both the infrastructure and application security."
        },
        "correctAnswer": "C",
        "domain": "Security and Compliance",
        "subDomain": "Understand the Shared Responsibility Model",
        "justification": "AWS responsibilities and customer responsibilities shift depending on the service. For Amazon S3, AWS is responsible for the infrastructure, including durability and availability, while the customer is responsible for data encryption and access control policies. For Amazon EC2, the customer is responsible for managing the operating system, security configurations, and applications running on the instances, while AWS manages the underlying infrastructure. For Amazon DynamoDB, AWS takes care of the infrastructure, including backups, scaling, and maintenance, while the customer is responsible for data integrity, access control, and managing the database schema. This demonstrates how the shared responsibility model varies with different services provided by AWS."
    },
    {
        "id": "aws00x0039",
        "question": "An e-commerce company uses AWS to host its website, which includes handling transactions and storing customer data. They recently encountered security issues where customer data was exposed. The company had not implemented encryption or regular security audits. In the context of the AWS Shared Responsibility Model, who is responsible for implementing data encryption and conducting security audits?",
        "options": {
            "A": "AWS is responsible for both encryption and security audits.",
            "B": "The customer is responsible for both encryption and security audits.",
            "C": "AWS is responsible for encryption, while the customer is responsible for security audits.",
            "D": "AWS is responsible for security audits, while the customer is responsible for encryption."
        },
        "correctAnswer": "B",
        "domain": "Security and Compliance",
        "subDomain": "Understand the Shared Responsibility Model",
        "justification": "Under the AWS Shared Responsibility Model, AWS is responsible for 'security of the cloud,' which includes protecting the infrastructure that runs all of the services offered in the AWS Cloud. This involves hardware, software, networking, and facilities. The customer, on the other hand, is responsible for 'security in the cloud,' which includes managing and configuring the AWS services they use. This includes ensuring data encryption and conducting security audits to protect the data they manage and operate on the AWS platform. This delineation makes it clear that the customer is responsible for securing their data, including encryption and regular security audits."
    },
    {
        "id": "aws00x0040",
        "question": "A company has deployed their web application on Amazon EC2 instances. Recently, they experienced a significant outage due to a DDoS attack which targeted underlying physical servers. In the context of the AWS Shared Responsibility Model, who is responsible for protecting the infrastructure against such attacks?",
        "options": {
            "A": "The customer is responsible for all aspects of DDoS protection.",
            "B": "AWS is responsible for protecting the infrastructure, including physical servers, against DDoS attacks.",
            "C": "The customer is responsible for physical server security, while AWS handles cybersecurity threats.",
            "D": "AWS and the customer share responsibility equally for DDoS protection."
        },
        "correctAnswer": "B",
        "domain": "Security and Compliance",
        "subDomain": "Understand the Shared Responsibility Model",
        "justification": "According to the AWS Shared Responsibility Model, AWS is in charge of the security 'of the cloud,' which includes the physical security of the infrastructure that runs all services provided in the AWS Cloud. This encompasses hardware, network infrastructure, and the physical data centers. Therefore, AWS is responsible for mitigating and managing threats that target the physical aspects of their infrastructure, such as DDoS attacks on the physical servers. The customer's responsibility is more focused on the security 'in the cloud,' which includes configuring their AWS services securely, managing their data, and ensuring their applications are resilient against attacks."
    },
    {
        "id": "aws00x0041",
        "question": "A software development company uses Amazon EC2 to host their virtual servers for testing different software projects. They install third-party software images on these EC2 instances to simulate different environments. One of the images was recently discovered to contain malicious software that compromised their data. In the context of the AWS Shared Responsibility Model, who is responsible for ensuring the security of the installed software images?",
        "options": {
            "A": "AWS is responsible for ensuring all installed images on EC2 instances are secure.",
            "B": "The customer is responsible for ensuring the security of software installed on their EC2 instances.",
            "C": "AWS is responsible for initial vetting of third-party software images, while the customer handles ongoing security.",
            "D": "Responsibility is shared equally; AWS secures the image installation process, and the customer maintains the image."
        },
        "correctAnswer": "B",
        "domain": "Security and Compliance",
        "subDomain": "Understand the Shared Responsibility Model",
        "justification": "Under the AWS Shared Responsibility Model, AWS manages the security 'of the cloud,' which includes the physical facilities, network infrastructure, and the virtualization infrastructure. However, the customer is responsible for the security 'in the cloud,' which covers configuration and management of the virtual servers (such as EC2 instances) and includes the software and data they install and operate on these instances. This means the customer must ensure the security of the software images they choose to install, including performing necessary checks for malware before deployment."
    }
    
    
    
    
    
    
    
    
    
    
]